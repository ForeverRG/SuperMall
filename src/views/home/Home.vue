<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
      class="home-top-tab-control"
      v-show="isHomeTopTabControlShow"
      :tabControlTitles="titles"
      @itemClick="itemClick"
      ref="tabControl1"
    ></tab-control>
    <scroll
      class="scroll-content"
      ref="scroll"
      :pullUpLoad="true"
      :probeType="3"
      @scroll="contentScroll"
      @pullingUp="pullingUpLoadMore"
    >
      <home-swiper
        class="home-swiper"
        :picture="swiperImg"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend-view
        :recommendViews="recommendViews"
      ></home-recommend-view>
      <home-feature></home-feature>
      <tab-control
        ref="tabControl2"
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
      currentScrollY: 0,
      isHomeTopTabControlShow: false,
      tabControlOffsetY: 0,
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
  //当前路由激活时触发
  activated() {
    //滚动到之前记录的位置
    this.$refs.scroll.scrollTo(0, this.currentScrollY, 0);
    this.$refs.scroll.refresh();
  },
  //当前路由未激活时触发
  deactivated() {
    //保存当前scrollY位置
    this.currentScrollY = this.$refs.scroll.getScrollY();
  },

  mounted() {
    const func = this.debounce(this.$refs.scroll.refresh, 100);
    //监听事件总线中的刷新bscroll信号,在回调函数中处理刷新bscroll
    this.$bus.$on("refreshScroll", () => func());
  },

  computed: {
    goodsData() {
      return this.goodsList[this.currentType].list;
    },
  },
  methods: {
    //bscroll防抖函数
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    //显示回到顶部组件
    contentScroll(position) {
      this.isBackTopShow = -position.y > 500;
      //显示顶部tabcontrol
      this.isHomeTopTabControlShow = -position.y > this.tabControlOffsetY;
    },
    //上拉加载
    pullingUpLoadMore() {
      this.getGoods(this.currentType);
      this.$refs.scroll.refresh();
    },
    getHomeData() {
      getHomeData().then((res) => {
        // console.log(res);
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

        //完成上拉加载更多,必须此步骤，否则只能上拉加载一次
        this.$refs.scroll.finishPullUp();
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

      //同步两个tabcontrol的currentindex
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //swiper图片加载完成触发
    swiperImgLoad() {
      this.tabControlOffsetY = this.$refs.tabControl2.$el.offsetTop;
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

.home-top-tab-control {
  position: relative;
  top: 44px;
  z-index: 9;
  background: white;
}
.home-nav {
  color: white;
  background: pink;
}
</style>