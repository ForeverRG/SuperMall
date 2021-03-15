<template>
  <div>
    <home-swiper class="home-swiper" :picture="swiperImg"></home-swiper>
    <home-recommend-view :recommendViews="recommendViews"></home-recommend-view>
    <home-feature></home-feature>
    
    <ul>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeData, getSwiperImg, getRecommendViews } from "network/home.js";

export default {
  components: { HomeSwiper, HomeRecommendView, HomeFeature },
  data() {
    return {
      dataList: null,
      recommendViews: [],
      swiperImg: "",
    };
  },
  created() {
    getHomeData().then((res) => {
      this.dataList = res;
    });
    getSwiperImg().then((res) => {
      console.log(res);
      this.swiperImg = res;
    });
    getRecommendViews().then((res) => {
      console.log(res);
      this.recommendViews = res;
    });
  },
};
</script>

<style>
.home-swiper {
  padding-top: 44px;
}
</style>