<template>
  <div>
    <p>用户信息修改</p>
    <div>
      <table>
        <tr>
          <td class="td_text_1">用户名：</td>
          <td class="td_text_2">
            <input
              v-model="user.nickname"
              type="text"
              placeholder="请输入用户名"
            >
          </td>
        </tr>
        <tr>
          <td class="td_text_1">手机号：</td>
          <td class="td_text_2">
            <input v-model="user.phone" type="tel" placeholder="请输入手机号">
          </td>
        </tr>
        <tr>
          <td class="td_text_1">姓名：</td>
          <td class="td_text_2">
            <input v-model="user.name" type="text" placeholder="请输入姓名">
          </td>
        </tr>
        <tr>
          <td class="td_text_1">职务：</td>
          <td class="td_text_2">
            <input
              v-model="user.position"
              type="text"
              placeholder="请输入职务"
            >
          </td>
        </tr>
        <tr>
          <td class="td_text_1">邮箱：</td>
          <td class="td_text_2">
            <input v-model="user.email" type="email" placeholder="请输入邮箱">
          </td>
        </tr>
        <tr style="text-align: center">
          <td colspan="2">
            <button @click="submitForm">提交</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModifyUser',
  props: {
    id: {
      type: [Number, String],
      required: true,
      default: 0
    }
  },
  data: () => {
    return {
      user: {
        nickname: '',
        phone: '',
        name: '',
        position: '',
        email: ''
      }
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
      })
      .catch(error => {
        alert(error.message);
      });
  },
  methods: {
    // 提交表单，修改用户信息
    submitForm() {
      this.$request
        .put('user/' + this.id, this.user, {
          headers: { Authorization: this.$cache.get('token') }
        })
        .then(response => {
          alert(response.message);
          setTimeout(() => {
            // 跳转至个人信息页
            this.$router.replace('/profile');
          }, 3000);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/profile/user_management/modify.scss";
</style>
