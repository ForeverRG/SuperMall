<template lang="">
  <div class="detail">
    <detail-nav-bar :titles="titles"></detail-nav-bar>
    <scroll></scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
import DetailNavBar from "./childComps/DetailNavBar";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Detail",
  components: {
    Scroll,
    NavBar,
    DetailNavBar,
  },

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      goodsInfo: null,
    };
  },

  created() {
    this.parseRouteObjData();
  },

  activated() {
    console.log(11);
  },
  deactivated() {
    console.log(22);
  },
  methods: {
    //从路由中解析出路由对象
    parseRouteObjData() {
      let info = decodeURIComponent(this.$route.params.itemInfo);
      this.goodsInfo = JSON.parse(info);
      console.log(this.goodsInfo);
    },
  },
};
</script>
<style scoped>
</style>