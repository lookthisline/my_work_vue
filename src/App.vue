<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
export default {
  components: { tabbar }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
