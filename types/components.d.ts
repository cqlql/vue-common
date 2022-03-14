import type Button from '@/compoents/Button/Button.vue'
import type Icon from '@/components/Icon'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'v-button': typeof Button
    'v-icon': typeof Icon
  }
}
