<template>
  <div>
    欢迎 用户 {{ name }}
    <div class="box">
      在 375 分辨率下 这是一个 w 100px h 100px 的盒子 自动转 rem
    </div>
  </div>
</template>

<script>
import { getUser } from '@/service/user.js';

export default {
  data() {
    return {
      name: '',
    };
  },
  mounted() {
    getUser().then(res => {
      console.log(res);
      this.name = res.data.name;
    });
  },
};
</script>

<style scoped lang="less">
.box {
  width: 100px;
  height: 100px;
  font-size: 16px;
  background-color: red;
}
</style>
