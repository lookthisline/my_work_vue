<template>
  <div id="app">
    <tabbar />
    <div class="body">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
// 引入首页顶部导航组件
import tabbar from '@/components/tabbar.vue';
export default {
  components: { tabbar }
};
</script>

<style lang="scss">
@import "@/assets/styles/body.scss";
</style>
