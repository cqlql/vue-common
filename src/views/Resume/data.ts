interface DataType {
  name: string
  profession: string
  workingYears: number
  repository: string
  baseInfo: {
    phone: {
      label: string
      value: string
    }
    email: {
      label: string
      value: string
    }
    hometown: {
      label: string
      value: string
    }
    birthDate: {
      label: string
      value: string
    }
  }
  professionalSkills: string[]
  selfEvaluation: string[]
  workExperience: {
    dateRange: string
    companyName: string
    position: string
    work: string
  }[]
  projectExperience: {
    name: string
    dataRange?: string
    overview?: string
    responsible?: string
    difficulty: string[]
    technology?: string
    other?: boolean
  }[]
  education: {
    name: string
    education: string
    professional: string
  }
}

const data: DataType = {
  name: '陈桥黎',
  profession: '前端开发工程师',
  workingYears: 11,
  repository: 'https://gitee.com/cqlql',
  baseInfo: {
    phone: {
      label: '手机',
      value: '+86 13923401527',
    },
    email: {
      label: '邮箱',
      value: 'cql.ql@qq.com',
    },
    hometown: {
      label: '籍贯',
      value: '湖南',
    },
    birthDate: {
      label: '出生年月',
      value: '1988.09',
    },
  },
  professionalSkills: [
    '熟练掌握 html css js ts。熟练使用 div + css 布局。可不依赖框架进行复杂项目开发',

    '熟练使用 vue 以及相关全家桶，可设计开发通用组件',

    '熟练掌握小程序开发，可使用原生或者 Taro3、uniapp 跨平台框架开发',

    '熟练使用 ant.design、element-ui、nutui 等前端ui框架',

    '熟悉 nodejs，webpack、vite 打包工具，可编写提高开发效率的工程工具插件',

    '良好的编程习惯，代码简洁高效，可维护可扩展性高。',
  ],

  workExperience: [
    {
      dateRange: '2020/12 - 2012/6',
      companyName: '湖南旅美美信息科技有限公司',
      position: '前端工程师',
      work: `与后端配合，负责公司后台管理系统，以及小程序相关的前端工作`,
    },
    {
      dateRange: '2014/12 - 2020/10',
      companyName: '深圳深度未来教育有限公司',
      position: '前端工程师',
      work: `
配合后端，完成pc/移动端网站的前端开发。
配合 App，使用 webview，实现原生难以实现，或者能显著提高开发效率的页面开发。
协助后端、Android、ios，解决各种前端技术问题。
`,
    },
    {
      dateRange: '2011/7 - 2014/12',
      companyName: '深圳汉家文化传媒有限公司',
      position: '前端工程师',
      work: `
负责pc端、移动端的前端开发；交互效果定制开发；ajax数据交互，php 模板数据绑定。
`,
    },
  ],

  selfEvaluation: [
    '喜欢思考、专研、学习、总结，保持好奇心，注重进步发展。',
    '工作认真、负责，具备良好的团队沟通、协作能力。',
    '抗压能力强，具备吃苦耐劳的精神。',
    '热爱互联网行业，对前端充满热情，时刻想要尝试学习各种新的技术。',
  ],
  projectExperience: [
    // {
    //   name: 'x',
    //   dataRange: `2022-02-02 ~ 2022-02-03`,
    //   overview: `x`,
    //   responsible: `x`,
    //   difficulty: [],
    //   technology: `vue3`,
    // },
    //     {
    //       name: '电子班牌、校牌',
    //       overview: `
    // 智慧校园项目，包括常规模式，考场模式，校园文化，班级荣誉等。常规模式主要展示
    // 当前班级的一些日常信息，如公告、值日、荣誉、新闻等。由于需要在后台能够预览，以及更高的开发效率，所以没用Android，最终还是用h5进行开发。
    //       `,
    //       responsible: `项目开发与维护`,
    //       difficulty: [
    //         '班牌设备性能差，对前端代码质量有较高要求，比如滚动文本，本来使用animation实现，但班牌上有卡顿，体验极差，经过实验改用控制滚动条实现解决',
    //         '由于学校网络环境较差，后期加入缓存功能，完全由前端实现，Android端配合将前端生成的js(jsonp)数据文件写入本地，如果页面由file协议打开则读取缓存',
    //       ],
    //       technology: 'vue2 webpack',
    //     },
    {
      name: '旅美美后台管理',
      dataRange: `2022-02-02 ~ 2022-02-03`,
      overview: `公司内部后台管理系统，包括线索管理，销售管理，商品管理，订单管理，运营管理，财务管理等`,
      // responsible: `项目前端`,
      difficulty: [],
      technology: `vue2 element-ui`,
    },
    {
      name: '旅美达人小程序',
      overview: `旅行小程序，提供线路特产商品买卖`,
      // responsible: `项目前端`,
      difficulty: [],
      technology: `vue3 typescript taro3`,
    },

    {
      name: '小派智听小程序',
      dataRange: `2022-06-01 ~ 2022-07-01`,
      overview: '老师线上听课小程序。解决传统听课弊端，提高听课效率',
      // responsible: `项目前端`,
      difficulty: [],
      technology: `vue3 typescript taro3`,
    },
    {
      name: '个人项目',
      dataRange: ``,
      other: true,
      // responsible: `项目前端`,
      difficulty: [],
      // technology: `vue3 typescript taro3`,
    },
  ],
  education: {
    name: '湖南航空工业职工工学院',
    education: '大专',
    professional: '计算机应用',
  },
}

export default data
