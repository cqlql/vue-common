<template>
  <div class="ScrollCustom-demo">
    <div class="ScrollCustom-demo__container">
      <div class="ScrollCustom-demo__content">
        <p v-for="i of 60" :key="i">{{ i }}</p>
      </div>
    </div>
    <div class="ScrollCustom-demo__bar-container">
      <div class="ScrollCustom-demo__bar" />
    </div>
    <div v-size="size" class="ScrollCustom-demo__size">
      <div class="ScrollCustom-demo__size-cont" />
      <div class="ScrollCustom-demo__size-cont2" />
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    size: {
      mounted (el, { value }) {
        el.scrollTop = el.scrollHeight
        el.addEventListener('scroll', () => {
          el.scrollTop = el.scrollHeight
          value()
        }, {
          passive: true
        })
        console.log(el.firstElementChild, el.scrollHeight)
      }
    }
  },
  mounted () {

  },
  methods: {
    size () {
      if (this.wait) return
      this.wait = true
      requestAnimationFrame(() => {
        this.wait = false
        console.log('监听元素尺寸变化')
      })
      // setTimeout(() => {
      //   this.wait = false
      //   console.log('监听元素尺寸变化')
      // }, 20)
    }
  }
}
</script>

<style lang="scss">
.ScrollCustom-demo {
  width: 80%;
  height: 500px;
  border: 2px solid #ddd;
  margin: 15px;
  position: absolute;
  overflow: auto;
}

.ScrollCustom-demo__container {
  height: 100%;
  overflow: hidden;
}

.ScrollCustom-demo__content {}

.ScrollCustom-demo__bar-container {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}

.ScrollCustom-demo__bar {
  width: 12px;
  background: #ddd;
  height: 100px;
}

.ScrollCustom-demo__size {
  position: absolute;
  inset: 0;
  overflow: hidden;
  visibility: hidden;
}

.ScrollCustom-demo__size-cont {
  // transition: all 0s ease 0s;
  // animation: 0s ease 0s 1 normal none running none;
  width: 200%;
  height: 200%;
  background-color: #fff;
}

.ScrollCustom-demo__size-cont2 {
  // transition: all 0s ease 0s;
  // animation: 0s ease 0s 1 normal none running none;

  width: 2.78e+06px;
  height: 2e+06px;
  background-color: #fff;
}
</style>
