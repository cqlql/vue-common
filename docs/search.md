---
title: search 搜索
---

# 搜索

## 搜索关键字

<demo-box>
  <CreateSearchRegExpDemo />
  <template #code>

@[code{1-33} vue{13,27}](/src/utils/search/demo/CreateSearchRegExpDemo.vue)

  </template>
</demo-box>

## 标记关键字

<demo-box>
  <SearShowKeyWrodDemo />
  <template #code>

@[code{1-16} vue{10,14}](/src/utils/search/demo/ShowKeyWrodDemo.vue)

  </template>
</demo-box>

## 结合使用

<demo-box>
<SearchDemo />
<template #code>

@[code{1-35} vue{12,13,25-32}](/src/utils/search/demo/SearchDemo.vue)

</template>
</demo-box>

## useSearch

<demo-box>
<UseSearchDemo />
<template #code>

@[code vue{3-7,12,20,26}](/src/utils/search/demo/UseSearchDemo.vue)

  </template>
</demo-box>

<script setup>
  import SearShowKeyWrodDemo from '@/utils/search/demo/ShowKeyWrodDemo.vue'
  import CreateSearchRegExpDemo from '@/utils/search/demo/CreateSearchRegExpDemo.vue'
  import SearchDemo from '@/utils/search/demo/SearchDemo.vue'
  import UseSearchDemo from '@/utils/search/demo/UseSearchDemo.vue'
</script>
