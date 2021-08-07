<template>
  <div class="box">
    <div class="b-top">
      切换上一页
    </div>
    <div class="b-content">
      看过这样一句话：“人的一生，无论重来多少次，都会有遗憾。你可以回头看，但不要往回走。”

      这一路走来，我们都是在跌跌撞撞中学会了坚强，在起起落落中悟得了道理，在世事纷扰中懂得了自持。渐渐明白，人生一世，有些路必须要自己走一遍才能活得通透。

      过往已逝，时间无涯。对于已经流逝的光阴，我们需要学会的是接受。在心里腾个空间，允许它去容纳过去的焦虑、悲伤和挫败，也允许自己去包容失落、担忧和不安。对一些事，我们需要承认和理解，然后慢慢释然。

      挥别曾经的自己，我们才能遇见更好的自己。往事的灰，落在每一个人眼前，有些随了风便消散了，有些入了尘便沉淀了，还有一些随着一场花开便释然了。

      凡是过往，皆为序章。就像这句话所说：“有的时候不得不承认，人确实是经历了一些事情之后，才告别了从前的那个自己。”而现在的自己，会与时光一起成长。
    </div>
    <div class="b-bottom">
      切换下一页
    </div>
  </div>
</template>

<script>
import BetterScroll from '@better-scroll/core'
export default {
  mounted () {
    const bs = new BetterScroll(this.$el, {
      // pullUpLoad: true,
      // probeType: 1,
      specifiedIndexAsContent: 1
    })

    // bs.on('pullingUp', () => {
    // // await fetchData()
    //   console.log('pullingUp')
    //   setTimeout(() => {
    //     bs.finishPullUp()
    //   }, 1000)
    // })
    // bs.hooks.on('refresh', () => { console.log('refreshed') })
    // const hooks = bs.scroller.actionsHandler.hooks
    // hooks.on('end', (event) => {
    //   console.log('end')
    // })
    bs.scroller.actions
      .hooks.on('end', (event) => {
        console.log('end')
      })
    bs.scroller
      .hooks.on('touchEnd', (event) => {
        console.log('touchEnd')
        // isStop = true
        // bs.stop()
        // bs.disable()
        bs.scroller.scrollBehaviorY.computeBoundary()
      })
    // bs.scroller.actions.hooks.on('beforeMove', (event) => {
    //   console.log('beforeMove')
    // })
    // bs.scroller.hooks.on('scrollStart', (event) => {
    //   console.log('scrollStart')
    // })
    // bs.scroller.hooks.on('beforeStart', (event) => {
    //   console.log('beforeStart')
    // })
    // bs.scroller.hooks.on('scrollStart', (event) => {
    //   console.log('hooks scrollStart')
    // })
    bs.scroller.actions.hooks.on('scroll', (event) => {
      // console.log('hooks scroll')
    })
    bs.scroller.hooks.on('end', () => {
      console.log('end', bs)
    })
    bs.scroller.hooks.on('scroll', () => {
      // if (isStop) {
      //   bs.stop()
      // }
      console.log('11111111111111111111111 scroll')
    })
    // bs.on('refresh', () => {
    //   console.log('refresh')
    // })
    // bs.on('enable', () => {
    //   console.log('enable')
    // })
    // bs.on('disable', () => {
    //   console.log('disable')
    // })
    bs.on('beforeScrollStart', () => {
      console.log('beforeScrollStart')
    })
    bs.on('scrollStart', () => {
      console.log('scrollStart')
    })
    // bs.on('scroll', () => {
    //   console.log('scroll', isStop)
    //   // if (isStop) {
    //   //   bs.stop()
    //   // }
    // })
    // bs.on('scrollEnd', () => {
    //   console.log('scrollEnd')
    // })
    // bs.on('scrollCancel', () => {
    //   console.log('scrollCancel')
    // })
    // bs.on('scrollCancel', () => {
    //   console.log('scrollCancel')
    // })
    bs.scroller.scrollBehaviorY.hooks.on('computeBoundary', (boundary) => {
      console.log('computeBoundary', boundary)
      boundary.minScrollPos = 29
    })
  }
}
</script>

<style scoped>
.box {
  margin: 20px;
  border: 1px solid red;
  height: 200px;
  position: relative;
  background-color: #aaa;
  overflow: hidden;
}

.b-content {
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.b-top {
  position: absolute;
}

.b-bottom {
  position: absolute;
  bottom: 0;
}
</style>
