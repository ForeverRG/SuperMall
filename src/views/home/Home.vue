<template>
  <div>
    <home-swiper class="home-swiper" :picture="swiperImg"></home-swiper>
    <home-recommend-view :recommendViews="recommendViews"></home-recommend-view>
    <home-feature></home-feature>
    <tab-control
      :tabControlTitles="titles"
      @itemClick="itemClick"
    ></tab-control>
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
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      dataList: null,
      recommendViews: [],
      swiperImg: "",
      titles: ["男生", "女生", "动漫"],
      goodsList: {
        boy: { page: 0, list: [] },
        girl: { page: 0, list: [] },
        comic: { page: 0, list: [] },
      },
    };
  },
  created() {
      this.getHomeData(), //获取首页数据
      this.getSwiperImg(), //获取banner
      this.getRecommendViews(), //获取推荐数据
      this.getGoods("男生", 1), //获取商品数据
      this.getGoods("女生", 1),
      this.getGoods("动漫", 1);
  },
  methods: {
    getHomeData() {
      getHomeData().then((res) => {
        console.log(res);
        this.dataList = res;
      });
    },
    getSwiperImg() {
      getSwiperImg().then((res) => {
        this.swiperImg = res;
      });
    },
    getRecommendViews() {
      getRecommendViews().then((res) => {
        this.recommendViews = res;
      });
    },
    getGoods(type, page) {
      getGoods(type, page).then((res) => {
        this.goods = res.data;
      });
    },

    itemClick(index) {
      switch (index) {
        case 0:
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style>
.home-swiper {
  padding-top: 44px;
}
</style>