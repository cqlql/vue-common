import 'virtual:windi.css'
import './styles/animation.scss'
import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import globalRegister from './global-register' // 注册组件为全局

createApp(App)
  .use(store)
  .use(router)
  // .use(globalRegister)
  .mount('#app')
