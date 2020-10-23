<template>
  <p>Hello {{ user.nickname }}</p>
  <div v-if="user.user_level < 3">
    <user-list></user-list>
  </div>
</template>

<script>
import list from "@/components/profile/list.vue";
export default {
  name: "profile",
  components: { "user-list": list },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = this.$cache.get("user");
  },
};
</script>
