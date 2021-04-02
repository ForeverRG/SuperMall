<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll
      class="scroll-content"
      ref="scroll"
      :pullUpLoad="true"
      :probeType="3"
      @scroll="contentScroll"
      @pullingUp="pullingUpLoadMore"
    >
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
    <back-top @click.native="backTopClick" v-show="isBackTopShow" />
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
import BackTop from "../../components/content/backTop/BackTop.vue";

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
    BackTop,
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
      isBackTopShow: false,
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

  mounted() {
    //监听事件总线中的刷新bscroll信号,在回调函数中处理刷新bscroll
    this.$bus.$on("refreshScroll", () => this.$refs.scroll.refresh());
  },

  computed: {
    goodsData() {
      return this.goodsList[this.currentType].list;
    },
  },
  methods: {
    contentScroll(position) {
      this.isBackTopShow = -position.y > 500;
    },
    //上拉加载
    pullingUpLoadMore() {
      this.getGoods(this.currentType);
      this.$refs.scroll.refresh();
    },
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
    //tabbar切换
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
    //回顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
};
</script>

<style scope>
.home {
  position: relative;
  height: 100vh;
}

.scroll-content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>