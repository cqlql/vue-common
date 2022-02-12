<!--<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ResumeIndex',
})
</script>-->
<script lang="ts" setup>
import ResumeItem from './comp/ResumeItem.vue'
let data = {
  name: '陈桥黎',
  profession: '前端开发工程师',
  workingYears: 11,
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
    '熟练掌握 html css js es6 ts。熟练使用 div + css 布局，ps切图。能定制复杂交互效果/功能模块',

    '熟练使用 vuejs 框架，能独立开发组件。',

    '熟练使用 webpack 等工程化工具，可不使用官方 vue-cli等，根据项目具体需求搭建前端开发环境，最大程度优化前端代码。',

    '熟练使用 less sass 预处理编写 css。熟练使用 postcss 优化处理 css。',

    '熟悉主流思想编写代码：模块化，工程化，自动化，SPA单页应用。',

    '良好的编程习惯，代码简洁高效，可维护可扩展性高。',
  ],

  workExperience: [
    {
      dateRange: '2014/12 - 2019/10',
      companyName: '深圳深度未来教育有限公司',
      position: '高级前端工程师',
      work: `
配合后端，完成pc/移动端网站的前端开发
webview 页面开发，配合 App，实现原生难以实现，或者能显著提高开发效率的页面开发。
协助后端，Android，ios，解决各种前端技术问题。
`,
    },
    {
      dateRange: '2013/7 - 2014/12',
      companyName: '深圳汉家文化传媒有限公司',
      position: '前端工程师',
      work: `
新石器玉石网络服务平台：www.newshiqi.com
静态页面编写，包括pc端、移动端，交互效果定制，ajax数据交互，php 模板数据绑定。
`,
    },
  ],

  selfEvaluation: [
    '喜欢思考、专研、学习、总结，保持好奇心，注重进步发展；',
    '工作认真、负责，具备良好的团队沟通、协作能力；',
    '抗压能力强，具备吃苦耐劳的精神；',
    '热爱互联网行业，对前端充满热情，时刻想要尝试学习各种新的技术',
  ],
  projectExperience: [
    {
      name: '电子班牌、校牌',
      overview: `
智慧校园项目，包括常规模式，考场模式，校园文化，班级荣誉等。常规模式主要展示
当前班级的一些日常信息，如公告、值日、荣誉、新闻等。由于需要在后台能够预览，以及更高的开发效率，所以没用Android，最终还是用h5进行开发。
      `,
      responsible: `项目开发与维护`,
      difficulty: [
        '班牌设备性能差，对前端代码质量有较高要求，比如滚动文本，本来使用animation实现，但班牌上有卡顿，体验极差，经过实验改用控制滚动条实现解决',
        '由于学校网络环境较差，后期加入缓存功能，完全由前端实现，Android端配合将前端生成的js(jsonp)数据文件写入本地，如果页面由file协议打开则读取缓存',
      ],
      technology: 'vue + webpack + es6',
    },
  ],
  education: {
    name: '湖南航空工业职工工学院',
    education: '大专',
    professional: '计算机应用',
  },
}
</script>
<template>
  <div class="text-dark-900 text-base mx-4 my-2">
    <div class="">
      <h1 class="text-2xl mb-1">
        <span>{{ data.name }}</span>
        <span class="text-base leading-none ml-3">{{ data.profession }}</span>
      </h1>
      <div class="text-gray-600">
        <span>{{ data.baseInfo.phone.value }}</span>
        <span class="text-true-gray-300 mx-2">|</span>
        <span>{{ data.baseInfo.email.value }}</span>
        <span class="text-true-gray-300 mx-2">|</span>
        <span>{{ data.workingYears }}年工作经验</span>
      </div>
    </div>

    <!-- <ResumeItem name="基本信息">
      <div v-for="item of data.baseInfo" :key="item.value">
        <span>{{ item.label }}</span>
        <span>{{ item.value }}</span>
      </div>
    </ResumeItem> -->
    <ResumeItem name="专业技能">
      <ul class="list-disc pl-6">
        <li v-for="(content, key) of data.professionalSkills" :key="key">
          {{ content }}
        </li>
      </ul>
    </ResumeItem>

    <ResumeItem class="Resume_work" name="工作经历">
      <div v-for="(item, key) of data.workExperience" :key="key">
        <div class="font-bold"
          >{{ item.dateRange }}
          <span class="pl-2 pr-2">{{ item.companyName }}</span>
          {{ item.position }}
        </div>
        <div class="whitespace-pre-line">
          {{ item.work.trim() }}
        </div>
      </div>
    </ResumeItem>
    <!-- <ResumeItem name="自我评价">
      <ul>
        <li v-for="(content, key) of data.selfEvaluation" :key="key">
          {{ content }}
        </li>
      </ul>
    </ResumeItem> -->

    <ResumeItem class="Resume_project" name="项目经历">
      <div v-for="(item, index) of data.projectExperience" :key="index">
        <div class="text-xl font-bold">{{ item.name }}</div>

        <div class="whitespace-pre-line"
          ><b>项目概述：</b>{{ item.overview }}</div
        >
        <div class="whitespace-pre-line"
          ><b>负责内容：</b>{{ item.responsible }}</div
        >
        <div
          ><b>项目难点：</b>
          <ul class="list-disc pl-6">
            <li
              v-for="(cont, childIndex) of item.difficulty"
              :key="childIndex"
              class="whitespace-pre-line"
            >
              {{ cont }}
            </li>
          </ul>
        </div>
        <div>
          <b>使用技术：</b>
          {{ item.technology }}
        </div>
      </div>
    </ResumeItem>
    <ResumeItem name="教育背景">
      <span>{{ data.education.name }}</span>
      <span class="px-5">{{ data.education.professional }}</span>
      <span>{{ data.education.education }}</span>
    </ResumeItem>
  </div>
</template>
