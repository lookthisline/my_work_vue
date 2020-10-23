<template>
  <p>用户信息修改</p>
  <div>
    <table>
      <tr>
        <td class="td_text_1">用户名：</td>
        <td class="td_text_2">
          <input
            type="text"
            v-model="user.nickname"
            placeholder="请输入用户名"
          />
        </td>
      </tr>
      <tr>
        <td class="td_text_1">手机号：</td>
        <td class="td_text_2">
          <input type="tel" v-model="user.phone" placeholder="请输入手机号" />
        </td>
      </tr>
      <tr>
        <td class="td_text_1">姓名：</td>
        <td class="td_text_2">
          <input type="text" v-model="user.name" placeholder="请输入姓名" />
        </td>
      </tr>
      <tr>
        <td class="td_text_1">职务：</td>
        <td class="td_text_2">
          <input type="text" v-model="user.position" placeholder="请输入职务" />
        </td>
      </tr>
      <tr>
        <td class="td_text_1">邮箱：</td>
        <td class="td_text_2">
          <input type="email" v-model="user.email" placeholder="请输入邮箱" />
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
import qs from "qs";
export default {
  name: "modify-user",
  data: () => {
    return {
      user: {
        nickname: "",
        phone: "",
        name: "",
        position: "",
        email: "",
      },
    };
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
      default: 0,
    },
  },
  methods: {
    // 提交表单，修改用户信息
    submitForm() {
      this.$request
        .post("/index/accounts/modify", this.user, {
          headers: { Authorization: this.$cache.get("token") },
        })
        .then((response) => {
          alert(response.message);
          setTimeout(() => {
            // 跳转至个人信息页
            this.$router.push("/profile");
          }, 3000);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  beforeCreate() {
    // 请求用户信息初始化页面
    this.$request
      .post(
        "/index/accounts/details",
        { id: this.id },
        { headers: { Authorization: this.$cache.get("token") } }
      )
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        alert(error.message);
      });
  },
};
</script>

<style scoped>
table {
  margin: auto;
}
input {
  width: 100%;
  border: solid black;
  border-width: 0px 0px 1px;
}
input:focus {
  outline: none;
}
.td_text_1 {
  text-align: right;
}
.td_text_2 {
  text-align: left;
}
</style>