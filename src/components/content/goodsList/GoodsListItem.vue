<template>
  <div class="goods-list-item">
    <div class="item">
      <img :src="itemData.card" alt="" @load="loadPictureOver" />
      <span>{{ itemData.name }}</span>
      <span>{{ itemData.memo }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      default() {
        return null;
      },
    },
  },

  methods: {
    //每次图片加载完成发送刷新bscroll信号
    loadPictureOver() {
      this.$bus.$emit("refreshScroll"); //给事件总线发送刷新bscroll信号，然后在首页中监听刷新信号
    },
  },
};
</script>

<style>
.goods-list-item {
  display: flex;
  flex: 1;
}
.goods-list-item img {
  width: 100%;
}
</style>