import { createApp } from 'vue';
// 入口文件
import App from '@/App.vue';
// 路由组件
import router from '@/router';
// 状态管理组件
import store from '@/store';
// 网络请求组件 axios 封装
import request from '@/utils/network';
// localStorage 封装
import cache from '@/utils/cache';
// 引入项目初始样式统一化css
import 'normalize.css/normalize.css';

const app = createApp(App);

app.use(store)
  .use(request)
  .use(cache)
  .use(router)
  .mount('#app');
