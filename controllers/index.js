const logUtil = require('../log/util')
const generic = require('../utils/generic')
const utilsType = require('../dtos/utils/index')
const enumType = require('../dtos/common/enum')
const indexService = require('../core/services/index')

module.exports = {
    // 查找用户
    'GET /api/getUser': [generic.dealAccessLog(), async (ctx, next) => {
        const start = new Date();
        let ms;
        try {
            let data = ctx.query
            let result = new utilsType.Error()
            if (data.key) {
                result = await indexService.getUser(data)
            }
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }],
    // 获取权限信息
    'GET /api/getPermissionEnum': [generic.dealAccessLog(), async (ctx, next) => {
        const start = new Date();
        let ms;
        try {
            ctx.rest(enumType.permission)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }],
    // 用户权限分配
    'POST /api/postUserPermission': [generic.dealAccessLog(), async (ctx, next) => {
        const start = new Date();
        let ms;
        try {
            let data = ctx.request.body
            let result = new utilsType.Error()
            if (data.userId && data.userNo && Array.isArray(data.permissions) && data.permissions.length) {
                result = await indexService.postUserPermission(data)
            }
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }]
};