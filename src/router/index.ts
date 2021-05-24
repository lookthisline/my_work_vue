// vue 3 router <https://github.com/vuejs/vue-router-next>
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { cache } from '@/utils/cache';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      title: 'Page Not Found'
    },
    props: route => ({
      errorLink: route.params.catchAll
    })
  },
  {
    path: '/sign_in',
    component: () => import('@/views/SignIn.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: () => import('@/views/SignUp.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue'),
    meta: {
      title: '个人中心',
      requireAuth: true
    }
  },
  {
    path: '/user_management/modify',
    name: 'modify',
    component: () => import('@/components/profile/user_management/modify.vue'),
    meta: {
      title: '修改用户信息',
      requireAuth: true
    },
    props: route => ({
      id: route.params.id
    })
  },
  {
    path: '/user_management/details',
    name: 'details',
    component: () => import('@/components/profile/user_management/details.vue'),
    meta: {
      title: '用户信息详情',
      requireAuth: true
    },
    props: route => ({
      id: route.params.id
    })
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error Request',
    redirect: {
      name: '404'
    }
  }
];

const router = createRouter({
  // 使用 history 路由
  history: createWebHistory(process.env.BASE_URL),
  // 使用 hash 路由
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
});

// 全局路由守卫，前置钩子
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (typeof to.meta.title !== 'undefined') {
    document.title = to.meta.title;
  } else {
    document.title = 'work';
  }
  // 用户登录判断
  if (to.meta.requireAuth) {
    // 判断是否登录
    if (!(cache.get('token') && cache.get('user'))) {
      // 跳转至登录页
      next({
        path: '/sign_in',
        query: { redirect: to.fullPath }
      });
    }
  }
  next();
});

// 导出路由实例
export default router;
