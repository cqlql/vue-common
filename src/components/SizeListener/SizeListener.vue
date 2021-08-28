<template>
  <div class="size-listener">
    <div class="size-listener__cont" />
    <div class="size-listener__cont" />
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Function,
      required: true
    }
  },
  mounted () {
    const el = this.$el
    el.scrollTop = el.scrollHeight
    el.addEventListener('scroll', () => {
      el.scrollTop = el.scrollHeight
      this.size()
    }, {
      passive: true
    })
  }
}
</script>

<style lang="scss">
.size-listener {
  position: absolute;
  inset: 0;
  overflow: hidden;
  visibility: hidden;
}

.size-listener__cont {
  // transition: all 0s ease 0s;
  // animation: 0s ease 0s 1 normal none running none;
  width: 200%;
  height: 200%;
}

.size-listener__cont2 {
  // transition: all 0s ease 0s;
  // animation: 0s ease 0s 1 normal none running none;

  width: 2.78e+06px;
  height: 2e+06px;
}
</style>
