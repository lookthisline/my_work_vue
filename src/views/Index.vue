<template>
  <div>
    <p>首页</p>
    <!-- <img ref="image" src="@/assets/logo.png"> -->
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'Index',
  mounted() {
    // axios
    //   .get(process.env.VUE_APP_BASE_API + '/index/test/index', {
    //     responseType: 'blob'
    //   })
    //   .then((response) => {
    //     this.$refs.image.src = URL.createObjectURL(response.data);
    //     console.log(URL.createObjectURL(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
};
</script>
