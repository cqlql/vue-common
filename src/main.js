import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from './components' // 注册组件为全局

createApp(App).use(store).use(router).use(globalComponents).mount('#app')
