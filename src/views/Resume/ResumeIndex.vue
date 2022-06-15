<script lang="ts" setup>
import ResumeItem from './comp/ResumeItem.vue'
import data from './data'

document.title = '陈桥黎-前端简历'
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

    <ResumeItem name="工作经历">
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

    <ResumeItem name="项目经历">
      <div
        class="pt-1 first:pt-0"
        v-for="(item, index) of data.projectExperience"
        :key="index"
      >
        <div class="text-xl font-bold pb-1">{{ item.name }}</div>

        <div class="whitespace-pre-line"
          ><b>项目概述：</b>{{ item.overview.trim() }}</div
        >
        <div class="whitespace-pre-line"
          ><b>负责内容：</b>{{ item.responsible.trim() }}</div
        >
        <div v-if="item.difficulty.length"
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
