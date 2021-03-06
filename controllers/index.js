const logUtil = require('../log/util')
const generic = require('../utils/generic')
const utilsType = require('../dtos/utils/index')
const enumType = require('../dtos/common/enum')
const indexService = require('../core/services/index')


module.exports = {
  // 注册用户
  'POST /api/postLoginIn': [generic.dealAccessLog(), async (ctx, next) => {
    const start = new Date();
    let ms;
    try {
      let data = ctx.request.body
      let result = new utilsType.Error()
      if (data.userNo && data.password) {
        result = await indexService.postLoginIn(data)
      }
      ctx.rest(result)
    } catch (error) {
      ms = new Date() - start;
      logUtil.logError(ctx, error, ms)
    }
  }],
  // 查找用户权限
  'GET /api/getUserPermissionEnum': [generic.dealAccessLog(), async (ctx, next) => {
    const start = new Date();
    let ms;
    try {
      let data = ctx.query
      let result = new utilsType.Error()
      if (data.keyword) {
        result = await indexService.getUserPermissionEnum(data)
      }
      ctx.rest(result)
    } catch (error) {
      ms = new Date() - start;
      logUtil.logError(ctx, error, ms)
    }
  }],
  // 查找用户
  'GET /api/getUser': [generic.dealAccessLog(), async (ctx, next) => {
    const start = new Date();
    let ms;
    try {
      let data = ctx.query
      let result = new utilsType.Error()
      if (data.keyword) {
        result = await indexService.getUser(data)
      }
      ctx.rest(result)
    } catch (error) {
      ms = new Date() - start;
      logUtil.logError(ctx, error, ms)
    }
  }],
  // 查找有管理权限的用户
  'GET /api/getRegisterUser': [generic.dealAccessLog(), async (ctx, next) => {
    const start = new Date();
    let ms;
    try {
      let data = ctx.query
      let result = new utilsType.Error()
      if (data.currentPage && data.pageSize) {
        result = await indexService.getRegisterUser(data)
      }
      ctx.rest(result)
    } catch (error) {
      ms = new Date() - start;
      logUtil.logError(ctx, error, ms)
    }
  }],
  // 删除用户权限
  'DELETE /api/deleteRegisterUser': [generic.dealAccessLog(), async (ctx, next) => {
    const start = new Date();
    let ms;
    try {
      let data = ctx.query
      let result = new utilsType.Error()
      if (data.userId) {
        result = await indexService.deleteRegisterUser(data)
      }
      ctx.rest(result)
    } catch (error) {
      ms = new Date() - start;
      logUtil.logError(ctx, error, ms)
    }
  }],
  // 获取权限信息-字典
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
      if (data.userId && data.userNo && Array.isArray(data.permissions) && data.permissions.length && data.adminName && data.adminPassword) {
        result = await indexService.postUserPermission(data)
      }
      ctx.rest(result)
    } catch (error) {
      ms = new Date() - start;
      logUtil.logError(ctx, error, ms)
    }
  }]
};
