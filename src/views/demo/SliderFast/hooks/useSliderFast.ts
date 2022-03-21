import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type { SlideClass } from '../typing'

export default function useSliderFast(list: Ref<any[]>) {
  const slideClass = ref<SlideClass>('')
  const index = ref(0)

  const listLength = computed(() => {
    return list.value.length
  })

  const listView = computed(() => {
    const indexValue = index.value
    let prevIndex = indexValue - 1
    let nextIndex = indexValue + 1
    const listLengthValue = listLength.value
    const listValue = list.value

    if (prevIndex < 0) {
      prevIndex = listLengthValue - 1
    }

    if (nextIndex >= listLengthValue) {
      nextIndex = 0
    }

    return [listValue[prevIndex], listValue[indexValue], listValue[nextIndex]]
  })

  function inRight() {
    // let indexValue = index.value
    // let listLengthValue = listLength.value
    // indexValue += 1
    // if (indexValue >= listLengthValue) {
    //   indexValue = 0
    // }
    // index.value = indexValue
    slideClass.value = 'slideInRight'
  }
  function inLeft() {
    // let indexValue = index.value
    // let listLengthValue = listLength.value
    // indexValue -= 1
    // if (indexValue < 0) {
    //   indexValue = listLengthValue - 1
    // }
    // index.value = indexValue
    slideClass.value = 'slideInLeft'
  }

  function slideRestore() {
    slideClass.value = 'slideRestore'
  }

  function transitionend(direction: string) {
    let indexValue = index.value
    const listLengthValue = listLength.value
    if (direction === 'right') {
      indexValue += 1
      if (indexValue >= listLengthValue) {
        indexValue = 0
      }
      index.value = indexValue
    } else if (direction === 'left') {
      indexValue -= 1
      if (indexValue < 0) {
        indexValue = listLengthValue - 1
      }
      index.value = indexValue
    }
  }

  return {
    listView,
    slideClass,
    inLeft,
    inRight,
    slideRestore,
    transitionend,
  }
}
