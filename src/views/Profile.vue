<template>
  <p>Hello {{ user.nickname }}</p>
  <div v-if="user.user_level < 3">
    <keep-alive>
      <user-list></user-list>
    </keep-alive>
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
