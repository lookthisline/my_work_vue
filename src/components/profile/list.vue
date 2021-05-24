<template>
  <div>
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
            v-if="isShowOptions(1)"
            :to="{ name: 'modify', params: { id: val.id } }"
          >修改</router-link>
          <router-link
            v-if="isShowOptions([1, 2])"
            :to="{ name: 'details', params: { id: val.id } }"
          >查看</router-link>
          <button v-if="isShowOptions(1)" @click="del(val.id)">删除</button>
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
      <button
        v-if:="listData.last_page > 1"
        @click="getList(listData.last_page)"
      >
        末页
      </button>
    </div>
  </div>
</template>

<script>
import { isNumber, isSet, inArray } from '@/utils/common/function';
export default {
  name: 'UserList',
  data() {
    return {
      // 页面数据
      listData: {},
      // 当前登录用户信息
      user: {}
    };
  },
  mounted() {
    // 读取缓存中用户登录信息载入当前组件
    this.user = this.$cache.get('user');
  },
  beforeCreate() {
    // 初始化用户列表
    this.$request
      .get('list/user', {
        headers: { Authorization: this.$cache.get('token') }
      })
      .then(response => {
        this.listData = response.data;
      })
      .catch(error => {
        alert(error.message);
      });
  },
  activated() {
    // 被 keep-alive 缓存的组件激活时调用；重新获取用户列表
    this.$request
      .get('list/user', {
        headers: { Authorization: this.$cache.get('token') }
      })
      .then(response => {
        this.listData = response.data;
      })
      .catch(error => {
        alert(error.message);
      });
  },
  methods: {
    // 获取指定页数据
    getList(page) {
      this.$request
        .get('list/user', {
          params: { page: page },
          headers: { Authorization: this.$cache.get('token') }
        })
        .then(response => {
          this.listData = response.data;
        })
        .catch(error => {
          alert(error.message);
        });
    },
    // 通过审核
    audit(id) {
      this.$request
        .put(
          'audit/user/' + id,
          { id: id },
          { headers: { Authorization: this.$cache.get('token') }}
        )
        .then(response => {
          alert(response.message);
          // 重新请求列表
          this.getList(this.listData.current_page);
        })
        .catch(error => {
          alert(error.message);
        });
    },
    // 删除用户
    del(id) {
      this.$request({
        method: 'delete',
        url: 'user/' + id,
        headers: {
          Authorization: this.$cache.get('token'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: { id: id }
      })
        .then(response => {
          console.log(response);
          alert(response.message);
        })
        .catch(error => {
          alert(error.message);
        });
    },
    // 根据本地的用户信息判断是否显示操作选项
    isShowOptions(user_level) {
      if (isNumber(user_level)) {
        return (
          isSet(this.user.user_level) && this.user.user_level == user_level
        );
      } else if (Array.isArray(user_level)) {
        return (
          isSet(this.user.user_level) &&
          inArray(this.user.user_level, user_level)
        );
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/profile/list.scss";
</style>
