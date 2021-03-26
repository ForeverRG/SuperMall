<template lang="">
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0, //0,1不侦听滑动
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bScroll: null,
    };
  },
  methods: {
    scrollTo(x = 0, y = 0, time = 500) {
      this.bScroll.scrollTo(x, y, time);
    },
    //加载数据后刷新
    refreshScroll() {
      this.bScroll && this.bScroll.refresh();
    },
  },
  mounted() {
    setTimeout(() => {
      this.bScroll = new BScroll(this.$refs.wrapper, {
        click: true, //开启侦听点击
        pullUpLoad: this.pullUpLoad, //开启上拉加载
        probeType: this.probeType, //开启侦听滑动
      });
      console.log(this.bScroll);
      //监听滚动事件
      if (this.probeType == 3 || this.probeType == 2) {
        this.bScroll.on("scroll", (position) => {
          this.$emit("scroll", position);
        });
      }
      //监听上拉
      if (this.pullUpLoad) {
        this.bScroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
    }, 1000);
  },
};
</script>
<style scoped>
</style>