/**
 * 验证规则
 */
module.exports = {
    permission: {
        userId: '^\\d+$',
        userNo: '^[-\\w]+$'
    },
    case: {
        name: '.+',
        author: '.+',
        submiterId: '^\\d+$',
        submiterNo: '^[-\\w]+$',
        content: '.+',
        isLatest: 'true|false',
        isIndexShow: 'true|false',
        sort: '^\\d+$',
        menuId: '^\\d+$',
    }
}