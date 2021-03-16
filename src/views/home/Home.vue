<template>
  <div>
    <home-swiper class="home-swiper" :picture="swiperImg"></home-swiper>
    <home-recommend-view :recommendViews="recommendViews"></home-recommend-view>
    <home-feature></home-feature>
    <tab-control :tabControlTitles="titles"></tab-control>
    <goods-list :goodsList="goods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import HomeFeature from "./childComps/HomeFeature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";

import {
  getHomeData,
  getSwiperImg,
  getRecommendViews,
  getGoods,
} from "network/home.js";

export default {
  components: { HomeSwiper, HomeRecommendView, HomeFeature, TabControl, GoodsList },
  data() {
    return {
      dataList: null,
      recommendViews: [],
      swiperImg: "",
      titles: ["男生", "女生", "动漫"],
      goods: null
    };
  },
  created() {
    getHomeData().then((res) => {
      console.log(res);
      this.dataList = res;
    });
    getSwiperImg().then((res) => {
      this.swiperImg = res;
    });
    getRecommendViews().then((res) => {
      this.recommendViews = res;
    });
    getGoods('动漫', 1).then((res) => {
      console.log(res);
      this.goods = res.data
    });
  },
};
</script>

<style>
.home-swiper {
  padding-top: 44px;
}
</style>