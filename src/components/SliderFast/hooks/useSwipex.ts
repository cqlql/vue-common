import autoprefix from '@/utils/css/autoprefix'
import swipex from '@/utils/drag/swipex'
import type { Ref } from 'vue'
import { watch } from 'vue'

interface Params {
  vSliderOnly: Ref<{ $el: HTMLDivElement } | null>
  inRight: () => void
  inLeft: () => void
  slideRestore: () => void
}

export default function useSwipex({
  vSliderOnly,
  inRight,
  inLeft,
  slideRestore,
}: Params) {
  // 加前缀 -webkit-|-Moz-
  const transform: 'transform' = autoprefix('transform') as 'transform'

  let elMove: HTMLDivElement | undefined
  watch(vSliderOnly, (vSliderOnly) => {
    if (vSliderOnly) {
      const elem = vSliderOnly.$el
      elMove = elem.firstElementChild as HTMLDivElement
      let x = 0
      let width: number
      swipex({
        elem: vSliderOnly.$el,
        onDown: () => {},
        onStart: () => {
          x = 0
          width = elem.clientWidth
        },
        onEnd: () => {},
        onMove: (xlex) => {
          x += xlex
          ;(elMove as HTMLDivElement).style[transform] = `translateX(${x}px)`
        },
        onSwipeLeft: () => {
          inRight()
        },
        onSwipeRight: () => {
          inLeft()
        },
        onSwipeNot: () => {
          if (Math.abs(x) > width / 3) {
            if (x < 0) {
              inRight()
            } else {
              inLeft()
            }
          } else {
            slideRestore()
          }
        },
      })
    }
  })

  return {
    transitionend() {
      ;(elMove as HTMLDivElement).style[transform] = ''
    },
  }
}
