---
title: DemoBox 文档组件
---

## Usage

```html
<demo-box>
  <OtherComp />
  <template #code>
    @[code{1-} vue{1-}](/src/components/Cell/demo/CellDemo.vue)
  </template>
</demo-box>
```

## props

| 属性            | 类型    | 默认值 | 说明                           |
| --------------- | ------- | ------ | ------------------------------ |
| defaultShowCode | boolean | false  | 初始显示代码                   |
| showCode        | boolean | false  | 显示代码，并且没有显示隐藏按钮 |
