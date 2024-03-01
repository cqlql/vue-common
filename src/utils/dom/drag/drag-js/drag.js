import dragPc from './drag-pc.js'
import dragMobile from './drag-mobile.js'

export default function drag (params) {
  let unbindDragPc = dragPc(params)
  let unbindDragMobile = dragMobile(params)
  return function () {
    unbindDragPc()
    unbindDragMobile()
  }
}
