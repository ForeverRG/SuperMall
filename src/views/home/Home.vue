<template>
  <div>
    <home-swiper :picture="swiperImg"></home-swiper>
    <home-recommend-view :recommendViews="recommendViews"></home-recommend-view>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";

import { getHomeData, getSwiperImg, getRecommendViews } from "network/home.js";
import HomeRecommendView from './childComps/HomeRecommendView.vue';

export default {
  components: { HomeSwiper, HomeRecommendView },
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
      this.recommendViews = res
    });
  },
};
</script>

<style>
</style>