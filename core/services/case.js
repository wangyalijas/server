const extension = require('../../utils/extension') // 扩展方法
const generic = require('../../utils/generic') // 通用方法
const verifyRule = require('../../utils/verify') // 验证规则

const utilsType = require('../../dtos/utils/index') // 通用类
const CONSTANT = require('../../dtos/common/constant') // 常量

const caseType = require('../../dtos/case/index') // 精选案例类
const workTagType = require('../../dtos/work_tag/index') // 作品标签类

const Op = require('sequelize').Op
const model = require('../models/index') // orm映射实体

// 实体
const sequelize = model.sequelize
const Menu = model.Menu
const Case = model.Case
const WorkTag = model.WorkTag
const BrowseLog = model.BrowseLog

// 上传精选案例
async function postCase(msg) {
    // 去除（非必须）空字段
    extension.deleteSpecialProperty(msg, ['name', 'author', 'submiterNo', 'cover', 'content', 'menuId'])
    // 检查数据格式是否正确
    const illegalArr = extension.verifyMatchRegular(msg, verifyRule.case)
    if (illegalArr.length) return new utilsType.Tips(false, `非法字段：${illegalArr.join(',')}`, 500)
    // todo:重复性检测
    // 启用事务
    let result
    await sequelize.transaction(t => {
        return Case.create(extension.cloneTo(msg, caseType.Add), {
            transaction: t
        }).then(caseRes => {
            if (Array.isArray(msg.tags) && msg.tags.length) {
                const tagList = msg.tags.map(item => new workTagType.Add(caseRes.id, item, CONSTANT.work.download))
                return WorkTag.bulkCreate(tagList, {
                    transaction: t
                })
            }
        })
    }).then(() => {
        result = new utilsType.Tips(true, '新增精选案例成功！')
    }).catch(err => {
        result = new utilsType.Tips(false, err.original.sqlMessage)
    })
    return result
}

// 获取精选案例
async function getCase(msg) {
    // 原始查询
    let caseRawRes = await Case.find({
        where: {
            id: msg.id,
            isActive: true
        },
        include: [Case.User, {
            association: Case.SecondMenu,
            include: [Menu.FirstMenu]
        }, {
            association: Case.Tags,
            through: {
                where: {
                    workType: CONSTANT.work.case,
                    isActive: true
                }
            }
        }]
    })
    // 访问量查询
    const browseLogCount = await generic.count(BrowseLog, {
        workId: msg.id,
        workType: CONSTANT.work.case
    })
    // 数据格式化
    let caseRes = caseRawRes.dataValues
    let result = extension.cloneTo(caseRes, caseType.Show, {
        browseLogCount,
        firstMenu: caseRes.secondMenu ? caseRes.secondMenu.dataValues.firstMenu.name : null,
        secondMenu: caseRes.secondMenu.name,
        submiter: caseRes.submiter.name,
        tags: caseRes.tags.map(item => item.name),
        createdAt: generic.formatTime('yyyy-MM-dd hh:mm:ss', caseRes.createdAt)
    })
    return result
}

module.exports = {
    postCase,
    getCase
}