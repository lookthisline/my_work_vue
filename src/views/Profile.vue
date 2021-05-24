<template>
  <div>
    <p>Hello {{ user.nickname }}</p>
    <div v-if="user.user_level < 3">
      <keep-alive>
        <user-list />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import list from '@/components/profile/list.vue';
export default {
  name: 'Profile',
  components: { 'user-list': list },
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    this.user = this.$cache.get('user');
  }
};
</script>
