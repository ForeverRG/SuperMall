<template lang="">
  <div class="detail">
    <detail-tab-bar :titles="titles"></detail-tab-bar>
    <scroll></scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
import DetailTabBar from "./childComps/DetailTabBar";

export default {
  components: {
    Scroll,
    DetailTabBar,
  },

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
};
</script>
<style lang="">
</style>