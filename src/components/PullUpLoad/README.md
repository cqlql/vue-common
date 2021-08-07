# BetterScroll 2 的使用

[官方文档](https://better-scroll.github.io/docs/zh-CN/)

下拉刷新实现需使用 computeBoundary 钩子，控制回弹动画到指定位置

```js
const bs = new BetterScroll(this.$el, {
  // 指定内容元素
  specifiedIndexAsContent: 1
})

let { scroller } = bs
let { scrollBehaviorY } = scroller

scroller.hooks.on('touchEnd', (event) => {
  console.log('touchEnd')
  scrollBehaviorY.computeBoundary() // 松开手指后计算边界位置
})
scrollBehaviorY.hooks.on('computeBoundary', (boundary) => {
  console.log('computeBoundary', boundary)
  boundary.minScrollPos = 20 // 回弹到 20 停止
})
```
