<template>
  <div style="width: 80%; margin: auto">
    <div id="image" :style="{ display: isShow }">
      <img id="exhibit" src height="200" width="200" @click="setAvatar">
    </div>
    <table>
      <tr>
        <td class="td_text_1">选择头像：</td>
        <td class="td_text_2">
          <input
            ref="avatarInput"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg, image/jpg, image/bmp"
            required
            @change="setAvatarVal($event)"
          >
        </td>
      </tr>
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
        <td class="td_text_1">手机号：</td>
        <td class="td_text_2">
          <input
            v-model="formData.phone"
            type="tel"
            placeholder="请输入手机号"
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
        <td class="td_text_1">确认密码：</td>
        <td class="td_text_2">
          <input
            v-model="formData.repasswd"
            type="password"
            placeholder="请再次输入密码"
            required
          >
        </td>
      </tr>
      <tr>
        <td class="td_text_1">姓名：</td>
        <td class="td_text_2">
          <input
            v-model="formData.name"
            type="text"
            placeholder="请输入姓名"
            required
          >
        </td>
      </tr>
      <tr>
        <td class="td_text_1">职务：</td>
        <td class="td_text_2">
          <input
            v-model="formData.position"
            type="text"
            placeholder="请输入职务"
          >
        </td>
      </tr>
      <tr>
        <td class="td_text_1">邮箱：</td>
        <td class="td_text_2">
          <input
            v-model="formData.email"
            type="email"
            placeholder="请输入邮箱"
          >
        </td>
      </tr>
      <tr style="text-align: center">
        <td colspan="2">
          <button type="submit" @click="submitForm">提交</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data: () => {
    return {
      // 表单数据
      formData: {
        avatar: null,
        nickname: '',
        phone: '',
        passwd: '',
        repasswd: '',
        name: '',
        position: '',
        email: ''
      },
      // 预览位置 div 显示隐藏
      isShow: 'none'
    };
  },
  methods: {
    setAvatar() {
      this.$refs.avatarInput.click();
    },
    // 获取图片文件信息
    setAvatarVal(event) {
      let file = event.target.files;
      if (file.length <= 0) {
        return;
      }
      file = file[0];
      // 文件类型判断
      if (file.type.substr(0, 5) !== 'image') {
        alert('文件类型错误');
        return;
      }
      // 文件大小判断
      if (file.size > 30720) {
        alert('文件大小过大，请上传 30kb 以内的');
        // console.log(file.size);
        return;
      }
      // 文件名
      const img_name = file.name;
      // 文件名是否有效
      const idx = img_name.lastIndexOf('.');
      if (idx != -1) {
        // 文件拓展名
        const ext = img_name.substr(idx + 1).toLowerCase();
        if (ext != 'png' && ext != 'jpg' && ext != 'jpeg' && ext != 'bmp') {
          alert('不支持的图片文件类型');
          return;
        } else {
          this.formData.avatar = file;
        }
      } else {
        alert('无效文件');
        return;
      }
      // 预览图片
      const reader = new FileReader();
      this.isShow = 'block';
      const preview = document.querySelector('img');
      reader.onloadend = function() {
        preview.src = reader.result;
      };
      reader.readAsDataURL(file);
    },
    // 提交表单
    submitForm() {
      if (!this.formData.avatar) {
        alert('未选择文件');
        return;
      }
      this.$request
        .post('signUp', this.formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response => {
          alert(response.message);
          setTimeout(() => {
            this.$router.push('/sign_in');
          }, 3);
        })
        .catch(response => {
          alert(response.message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/views/sign_up.scss";
</style>
