const extension = require('../../utils/extension') // 扩展方法
const generic = require('../../utils/generic') // 通用方法
const verifyRule = require('../../utils/verify') // 验证规则

const utilsType = require('../../dtos/utils/index') // 通用类

const permissionType = require('../../dtos/permission/index') // 权限类

const Op = require('sequelize').Op
const model = require('../models/index') // orm映射实体

// 实体
const User = model.UserEntity
const UserPermission = model.UserPermission

// 获取用户信息
async function getUser(msg) {
    return await User.findAll({
        attributes: ['id', 'userNo', 'name'],
        where: {
            [Op.or]: [{
                name: {
                    [Op.like]: `%${msg.key}%`
                }
            }, {
                userNo: {
                    [Op.like]: `%${msg.key}%`
                }
            }]
        },
        raw: true
    })
}

// 用户权限分配
async function postUserPermission(msg) {
    // 检查数据格式是否正确
    const illegalArr = extension.verifyMatchRegular(msg, verifyRule.permission)
    if (illegalArr.length) return new utilsType.Tips(false, `非法字段：${illegalArr.join(',')}`, 500)
    // 检查用户信息是否匹配
    const isExit = await generic.isExit(User, {
        id: msg.userId,
        userNo: msg.userNo,
        isActive: true
    })
    if (!isExit[0]) return new utilsType.Tips(false, '非法访问！', 500)

    let permissionList = []
    msg.permissions.forEach(permission => permission.second.forEach(item => {
        permissionList.push(new permissionType.Add(msg.userId, msg.userNo, permission.first, item))
    }))
    // 提交数据库
    await UserPermission.bulkCreate(permissionList)
        .then(() => {
            result = new utilsType.Tips(true, '分配成功！')
        }).catch(err => {
            result = new utilsType.Tips(false, err.original.sqlMessage, 500)
        })
    return result
}

module.exports = {
    getUser,
    postUserPermission
}