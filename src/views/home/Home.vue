<template>
  <div id="home">
    <scroll class="content">
      <home-swiper class="home-swiper" :picture="swiperImg"></home-swiper>
      <home-recommend-view
        :recommendViews="recommendViews"
      ></home-recommend-view>
      <home-feature></home-feature>
      <tab-control
        :tabControlTitles="titles"
        @itemClick="itemClick"
      ></tab-control>
      <goods-list :goodsList="goodsData"></goods-list>
    </scroll>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import HomeFeature from "./childComps/HomeFeature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "../../components/common/scroll/Scroll.vue";

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
    Scroll,
  },
  data() {
    return {
      dataList: null,
      recommendViews: [],
      swiperImg: "",
      titles: ["男生", "女生", "动漫"],
      goodsList: {
        男生: { page: 0, list: [] },
        女生: { page: 0, list: [] },
        动漫: { page: 0, list: [] },
      },
      currentType: "男生",
    };
  },
  created() {
    this.getHomeData(), //获取首页数据
      this.getSwiperImg(), //获取banner
      this.getRecommendViews(), //获取推荐数据
      this.getGoods("男生"), //获取商品数据
      this.getGoods("女生"),
      this.getGoods("动漫");
  },
  computed: {
    goodsData() {
      return this.goodsList[this.currentType].list;
    },
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
    getGoods(type) {
      const page = ++this.goodsList[type].page;
      getGoods(type, page).then((res) => {
        this.goodsList[type].list.push(...res.data);
        this.goodsList[type].page++;
      });
    },

    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "男生";
          break;
        case 1:
          this.currentType = "女生";
          break;
        case 2:
          this.currentType = "动漫";
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style >
.home-swiper {
  padding-top: 44px;
}
.content {
  border: 1px solid;
  height: 500px;
}
</style>