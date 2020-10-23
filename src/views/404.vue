<template>
  <p>{{ message }} + {{ errorLink }}</p>
  <p>测试</p>
</template>

<script>
export default {
  name: "404",
  props: {
    errorLink: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    message() {
      return "访问了一个不存在的页面：";
    },
  },
};
</script>
