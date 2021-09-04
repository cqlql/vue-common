<template>
  <div v-if="visible" class="j-loading">
    <div class="j-loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          class="path"
        />
      </svg>
      <p v-if="text" class="j-loading-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style src="./loading.scss" lang="scss"></style>
