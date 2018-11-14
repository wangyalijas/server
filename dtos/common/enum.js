/**
 * 通用数据
 */
module.exports = {
  // 权限枚举
  permission: {
    0: {
      id: 0,
      name: 'submit',
      level: 1,
      description: '提交'
    },
    1: {
      id: 1,
      name: 'review',
      level: 1,
      description: '审核'
    },
    2: {
      id: 2,
      name: 'publish',
      level: 1,
      description: '发布'
    },
    3: {
      id: 3,
      name: 'download',
      level: 2,
      description: '下载专区'
    },
    4: {
      id: 4,
      name: 'enterprise',
      level: 2,
      description: '企业形象'
    },
    5: {
      id: 5,
      name: 'interactive',
      level: 2,
      description: '交互设计'
    },
    6: {
      id: 6,
      name: 'vision',
      level: 2,
      description: '视觉设计'
    },
    7: {
      id: 7,
      name: 'fe',
      level: 2,
      description: '前端'
    }
  },
  // 作品类型枚举（精选案例，下载）
  work: {
    0: {
      id: 0,
      name: 'case',
      description: '精选案例'
    },
    1: {
      id: 1,
      name: 'download',
      description: '下载专区'
    }
  },
  // 管理员账号密码
  admin: {
    userNo: 'admin',
    password: '123456'
  }
}
