import { render, type ObjectDirective, type ComponentOptions, h } from 'vue'
import ToolTipVue from './ToolTip.vue'

function renderComp(comp: ComponentOptions<any>) {
  const elTemp = document.createElement('div')

  // 除了 h, 还可以用 createVNode
  const vNode = h(comp)
  render(vNode, elTemp)
  return vNode
}

let vueTooltip: InstanceType<typeof ToolTipVue> | undefined

function init() {
  if (vueTooltip) return

  const vNodeTooltip = renderComp(ToolTipVue)

  document.body.append(vNodeTooltip.el as HTMLElement)

  vueTooltip = vNodeTooltip.component!.exposed as InstanceType<typeof ToolTipVue>
}

const vTooltip: ObjectDirective<HTMLElement> = {
  mounted(el, { value }) {
    function show() {
      init()
      vueTooltip!.show(value, el)
    }
    function hide() {
      vueTooltip!.hide()
    }

    el.addEventListener('mouseenter', show)
    el.addEventListener('mouseleave', hide)
  }
}

export default vTooltip
