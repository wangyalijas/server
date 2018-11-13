const logUtil = require('../log/util')
const generic = require('../utils/generic')
const extension = require('../utils/extension')
const utilsType = require('../dtos/utils/index')
const caseType = require('../dtos/case/index')
const caseService = require('../core/services/case')

module.exports = {
    // 上传精选案例
    'POST /api/postCase': [generic.dealAccessLog(), async (ctx, next) => {
        const start = new Date();
        let ms;
        try {
            let data = ctx.request.body
            let result = new utilsType.Error()
            if (extension.verifyMatchObject(data, caseType.Verify)) {
                result = await caseService.postCase(data)
            }
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }],
    // 上传精选案例
    'GET /api/getCase': [generic.dealAccessLog(), async (ctx, next) => {
        const start = new Date();
        let ms;
        try {
            let data = ctx.query
            let result = new utilsType.Error()
            if (data.id) {
                result = await caseService.getCase(data)
            }
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }]
};