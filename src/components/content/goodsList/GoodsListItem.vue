<template>
  <div class="goods-list-item">
    <div class="item" @click="itemClick">
      <img :src="itemData.card" alt="" @load="loadPictureOver" />
      <div class="goods-list-name">
        {{ itemData.name }}
      </div>
      <div>
        <i class="collect-icon"></i><span>{{ itemData.memo }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default() {
        return "";
      },
    },
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
    //点击跳转到详情页,路由中添加对象传递
    itemClick() {
      //console.log(this.itemData);
      this.$router.push("/detail/" + this.itemData.name);
      this.$router.push({
        name: "detail",
        params: {
          itemInfo: encodeURIComponent(JSON.stringify(this.itemData)),
        },
      });
       //this.$router.push("/detail?itemInfo=" + encodeURIComponent(JSON.stringify(this.itemData)));
    },
  },
};
</script>

<style>
.goods-list-item {
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
}
.goods-list-item img {
  width: 100%;
  height: 200px;
  border-radius: 4px;
}

.goods-list-name {
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
  color:chocolate;
}
</style>