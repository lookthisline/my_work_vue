<template>
  <div>
    <p>用户信息修改</p>
    <div>
      <table>
        <tr>
          <td class="td_text_1">用户名：</td>
          <td class="td_text_2">{{ user.nickname }}</td>
        </tr>
        <tr>
          <td class="td_text_1">手机号：</td>
          <td class="td_text_2">{{ user.phone }}</td>
        </tr>
        <tr>
          <td class="td_text_1">姓名：</td>
          <td class="td_text_2">{{ user.name }}</td>
        </tr>
        <tr>
          <td class="td_text_1">职务：</td>
          <td class="td_text_2">{{ user.position }}</td>
        </tr>
        <tr>
          <td class="td_text_1">邮箱：</td>
          <td class="td_text_2">{{ user.email }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    id: {
      type: [Number, String],
      required: true,
      default: 0
    }
  },
  data: () => {
    return {
      user: {}
    };
  },
  beforeCreate() {
    // 请求用户信息初始化页面
    this.$request
      .get('user/' + this.id, {
        params: { id: this.id },
        headers: { Authorization: this.$cache.get('token') }
      })
      .then(response => {
        this.user = response.data;
        console.log(response);
      })
      .catch(error => {
        alert(error.message);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/profile/user_management/details.scss";
</style>
