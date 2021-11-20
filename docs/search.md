---
title: 搜索
description: 页面的描述
---

# 搜索

## 搜索关键字

<demo-box>
  <searchDemo2 />
  <template #code>

@[code{1-33} vue{13,27}](/src/utils/search/demo/index2.vue)

  </template>
</demo-box>

## 标记关键字

<demo-box>
  <searchDemo />
  <template #code>

@[code{1-16} vue{10,14}](/src/utils/search/demo/index.vue)

  </template>
</demo-box>

## 结合使用

<script setup>
  import searchDemo from '@/utils/search/demo/index.vue'
  import searchDemo2 from '@/utils/search/demo/index2.vue'
</script>

<style scope>
  demo-box {
    border: 1px solid #3e4c5a5c;
    border-radius: 2px;
    padding: 10px;
    display: block;
    margin:10px 0;
  }
</style>
