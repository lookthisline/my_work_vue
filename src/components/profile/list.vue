<template>
  <table>
    <tr>
      <th>用户名</th>
      <th>姓名</th>
      <th>电话</th>
      <th>职务</th>
      <th>邮箱</th>
      <th>状态</th>
      <th>注册时间</th>
      <th>操作</th>
    </tr>
    <tr v-for:="val in listData.data">
      <td>{{ val.nickname }}</td>
      <td>{{ val.name }}</td>
      <td>{{ val.phone }}</td>
      <td>{{ val.position }}</td>
      <td>{{ val.email }}</td>
      <td>{{ val.account_status }}</td>
      <td>{{ val.create_time }}</td>
      <td>
        <router-link
          :to="{ name: 'modify', params: { id: val.id } }"
          v-if="isShowOptions(1)"
          >修改</router-link
        >
        <router-link
          :to="{ name: 'details', params: { id: val.id } }"
          v-if="isShowOptions([1, 2])"
          >查看</router-link
        >
        <button @click="del(val.id)" v-if="isShowOptions(1)">删除</button>
        <button @click="audit(val.id)">通过审核</button>
      </td>
    </tr>
  </table>
  <div>
    <div>
      总计 {{ listData.total }} 用户 每页 {{ listData.per_page }} 共
      {{ listData.last_page }} 页
    </div>
    <button @click="getList(1)">首页</button>
    <button
      v-if:="listData.current_page - 1 > 0"
      @click="getList(listData.current_page - 1)"
    >
      上一页
    </button>
    <button>第 {{ listData.current_page }} 页</button>
    <button
      v-if:="parseInt(listData.current_page) != listData.last_page"
      @click="getList(parseInt(listData.current_page) + 1)"
    >
      下一页
    </button>
    <button v-if:="listData.last_page > 1" @click="getList(listData.last_page)">
      末页
    </button>
  </div>
</template>

<script>
import { is_number, isset, in_array } from "@/utils/common/function";
export default {
  name: "user-list",
  data() {
    return {
      // 页面数据
      listData: {},
      // 当前登录用户信息
      user: {},
    };
  },
  methods: {
    // 获取指定页数据
    getList(page) {
      this.$request
        .post(
          "/index/accounts/list",
          { page: page },
          { headers: { Authorization: this.$cache.get("token") } }
        )
        .then((response) => {
          this.listData = response.data;
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    // 通过审核
    audit(id) {
      this.$request
        .post(
          "/index/accounts/audit",
          { id: id },
          { headers: { Authorization: this.$cache.get("token") } }
        )
        .then((response) => {
          alert(response.message);
          // 重新请求列表
          this.getList(this.listData.current_page);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    // 删除用户
    del(id) {
      this.$request
        .post(
          "/index/accounts/delete",
          { id: id },
          { headers: { Authorization: this.$cache.get("token") } }
        )
        .then((response) => {
          alert(response.message);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    // 根据本地的用户信息判断是否显示操作选项
    isShowOptions(user_level) {
      if (is_number(user_level)) {
        return (
          isset(this.user.user_level) && this.user.user_level == user_level
        );
      } else if (Array.isArray(user_level)) {
        return (
          isset(this.user.user_level) &&
          in_array(this.user.user_level, user_level)
        );
      }
      return false;
    },
  },
  mounted() {
    // 读取缓存中用户登录信息载入当前组件
    this.user = this.$cache.get("user");
  },
  beforeCreate() {
    // 初始化用户列表
    this.$request
      .post("/index/accounts/list", null, {
        headers: { Authorization: this.$cache.get("token") },
      })
      .then((response) => {
        this.listData = response.data;
      })
      .catch((error) => {
        alert(error.message);
      });
  },
};
</script>

<style >
table {
  margin: auto;
}
</style>
