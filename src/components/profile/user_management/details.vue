<template>
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
</template>

<script>
export default {
  name: "user-details",
  data: () => {
    return {
      user: {},
    };
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
      default: 0,
    },
  },
  beforeCreate() {
    // 请求用户信息初始化页面
    this.$request
      .get("user/" + this.id, {
        params: { id: this.id },
        headers: { Authorization: this.$cache.get("token") },
      })
      .then((response) => {
        this.user = response.data;
        console.log(response);
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