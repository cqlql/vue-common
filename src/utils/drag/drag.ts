import dragPc from './drag-pc'
import dragMobile from './drag-mobile'
import type { DragOptions } from './types'

export default function drag(params: DragOptions) {
  const unbindDragPc = dragPc({
    elem: params.elem,
    onDown: params.onDown,
    onStart(e) {
      params.onStart(e, e)
    },
    onMove(e) {
      params.onMove(e, e)
    },
    onEnd: params.onEnd
  })
  const unbindDragMobile = dragMobile({
    elem: params.elem,
    onDown: params.onDown,
    onStart(e) {
      const point = e.touches[0]
      params.onStart(e, point)
    },
    onMove(e) {
      const point = e.touches[0]
      params.onMove(e, point)
    },
    onEnd: params.onEnd
  })
  return function () {
    unbindDragPc()
    unbindDragMobile()
  }
}
