<template>
  <div>
    <table>
      <tr>
        <td class="td_text_1">用户名：</td>
        <td class="td_text_2">
          <input
            v-model="formData.nickname"
            type="text"
            placeholder="请输入用户名"
            required
          >
        </td>
      </tr>
      <tr>
        <td class="td_text_1">密码：</td>
        <td class="td_text_2">
          <input
            v-model="formData.passwd"
            type="password"
            placeholder="请输入密码"
            required
          >
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <img :src="captcha_pic" alt="captcha" @click="getCaptcha">
        </td>
      </tr>
      <tr>
        <td class="td_text_1">验证码：</td>
        <td class="td_text_2">
          <input
            v-model="formData.captcha_code"
            type="text"
            placeholder="请输入验证码"
            required
          >
        </td>
      </tr>
      <tr style="text-align: center">
        <td colspan="2">
          <button @click="submitForm">提交</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { isSet } from '@/utils/common/function';
export default {
  name: 'SignIn',
  data() {
    return {
      formData: {
        nickname: '',
        passwd: '',
        captcha_code: '',
        captcha_id: ''
      },
      captcha_pic: undefined
    };
  },
  beforeCreate() {
    // 获取验证码图片
    this.$request
      .get('captcha')
      .then(response => {
        this.captcha_pic = response.data.picture;
        this.formData.captcha_id = response.data.captcha_id;
      })
      .catch(error => {
        alert(error.message);
      });
  },
  methods: {
    // 获取验证码图片
    getCaptcha() {
      this.$request
        .get('captcha')
        .then(response => {
          this.captcha_pic = response.data.picture;
          this.formData.captcha_id = response.data.captcha_id;
        })
        .catch(error => {
          alert('请求验证码失败');
        });
    },
    // 提交表单 登录
    submitForm() {
      this.$request
        .post('login', this.formData)
        .then(response => {
          // 存储 token
          this.$cache.set('user', response.data);
          this.$cache.set('token', response.data.token);
          alert('登录成功');
          setTimeout(() => {
            if (isSet(this.$route.query.redirect)) {
              this.$router.push(this.$route.query.redirect);
            } else {
              // 跳转到首页
              this.$router.push('/');
            }
          }, 3000);
        })
        .catch(error => {
          console.log(error);
          alert(error.message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/views/sign_in.scss";
</style>
