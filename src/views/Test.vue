<template>
  <p>这是测试页</p>
</template>

<script>
export default {
  name: "Test",
  data: () => {
    return { a: "123" };
  },
  mounted() {
    console.log(this.$cache.get("user"));
  },
};
</script>

<style>
</style>