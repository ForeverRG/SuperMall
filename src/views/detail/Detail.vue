<template lang="">
  <div class="detail">
    <detail-nav-bar :titles="titles"></detail-nav-bar>
    <scroll></scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
import DetailNavBar from './childComps/DetailNavBar'
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    Scroll,
    NavBar,
    DetailNavBar,
  },

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
};
</script>
<style>

</style>