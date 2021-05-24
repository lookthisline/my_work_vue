<template>
  <div class="tabbar">
    <router-link :to="{ path: '/' }">首页</router-link>&nbsp;|&nbsp;
    <router-link :to="{ path: '/sign_in' }">登录</router-link>&nbsp;|&nbsp;
    <router-link :to="{ path: '/sign_up' }">注册</router-link>&nbsp;|&nbsp;
    <router-link :to="{ path: '/profile' }">个人信息页</router-link>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/components/tabbar.scss";
</style>
