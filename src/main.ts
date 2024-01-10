import './styles/animation.scss';
import './styles/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { router, setupRouter } from './router';
import { setupStore } from './store';
import { setupRouterGuard } from './router/guard';
// import registerGlobComp from './registerGlobComp' // 注册组件为全局

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  // await setupI18n(app)

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // registerGlobComp(app)

  app.mount('#app');
}

bootstrap();
