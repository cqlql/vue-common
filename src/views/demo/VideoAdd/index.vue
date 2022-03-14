<script lang="ts" setup>
import VideoView from './comp/VideoView.vue'
function onClick() {
  console.log('🚀 -- onClick -- 111', 111)
}
</script>
<template>
  <v-button @click="onClick">
    <v-icon icon="ic:baseline-add"></v-icon>
    <span>add</span>
  </v-button>
  <div>
    <VideoView></VideoView>
  </div>
</template>

<!-- <style lang="scss"></style> -->
