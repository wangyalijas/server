const extension = require('../../utils/extension') // 扩展方法
const generic = require('../../utils/generic') // 通用方法
const verifyRule = require('../../utils/verify') // 验证规则

const utilsType = require('../../dtos/utils/index') // 通用类

const userEntityType = require('../../dtos/user_entity/index') // 用户类
const permissionType = require('../../dtos/permission/index') // 权限类
const paginateTypes = require('../../dtos/utils/pagination') // 分页类
const enumType = require('../../dtos/common/enum')

const Op = require('sequelize').Op
const model = require('../models/index') // orm映射实体

// 实体
const User = model.UserEntity
const UserPermission = model.UserPermission

// 注册
async function postLoginUp(msg) {
  const isExit = await generic.isExit(User, {
    userNo: msg.userNo,
    isActive: true
  })

  function isAdmin() {
    if (enumType.admin.name === 'admin' && enumType.admin.password === '123456') {
      return true
    }
    return false
  }

  if (!isExit[0] && isAdmin) {
    await User.create(extension.cloneTo(msg, userEntityType.Add))
    return new utilsType.Tips(true, '注册成功！')
  } else {
    return new utilsType.Tips(false, '非法访问！', 500)
  }
}

// 获取用户信息
async function getUser(msg) {
  return await User.findAll({
    attributes: ['id', 'userNo', 'name'],
    where: {
      [Op.or]: [{
        name: {
          [Op.like]: `%${msg.keyWord}%`
        }
      }, {
        userNo: {
          [Op.like]: `%${msg.keyWord}%`
        }
      }]
    },
    raw: true
  })
}

// 获取注册用户信息
async function getAdminUser({currentPage, pageSize}) {
  let pagination = paginateTypes.pagination(currentPage, pageSize)
  return await User.findAll({
    include: [
      {
        model: UserPermission,
        where: {
          isActive: true
        }
      }
    ],
    where: {
      isActive: true
    },
    raw: true,
    ...pagination
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
  let result
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
  postUserPermission,
  postLoginUp,
  getAdminUser
}
