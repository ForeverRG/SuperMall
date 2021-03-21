<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="scroll-content">
      <home-swiper class="home-swiper" :picture="swiperImg"></home-swiper>
      <home-recommend-view
        :recommendViews="recommendViews"
      ></home-recommend-view>
      <home-feature></home-feature>
      <tab-control
        class="home-tab-control"
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
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";

import {
  getHomeData,
  getSwiperImg,
  getRecommendViews,
  getGoods,
} from "network/home.js";

export default {
  components: {
    NavBar,
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
      let page = this.goodsList[type].page + 1;
      getGoods(type, page).then((res) => {
        this.goodsList[type].page++;
        this.goodsList[type].list.push(...res.data);
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

<style scope>
.home {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.home-swiper {
  padding-top: 44px;
}
.scroll-content {
  height: 600px;
  overflow: hidden;
  /* position: absolute; */
  top: 44px;
  /* bottom: 49px;
  right: 0;
  left: 0;  */
}
</style>