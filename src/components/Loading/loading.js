// 指令
import Vue from 'vue'
import Loading from './Loading.vue'
export default {
  mounted (el, { value }) {
    console.log(value)
    // el.addEventListener('click', () => {
    //   const DialogComp = Vue.extend({
    //     data () {
    //       return {
    //         visible: true
    //       }
    //     },
    //     render (r) {
    //       return r(VideoPreviewDialog, {
    //         on: {
    //           closed: () => {
    //             dialog.$destroy()
    //             dialog.$el.remove()
    //           }
    //         }
    //       }, [
    //         r(VideoPreviewVideo, {
    //           props: {
    //             url: value
    //           }
    //         })
    //       ])
    //     }
    //   })
    //   const dialog = new DialogComp().$mount()
    //   document.body.appendChild(dialog.$el)
    // })
  },
  updated (el, { value }) {
    console.log('update', value)
  }
}
