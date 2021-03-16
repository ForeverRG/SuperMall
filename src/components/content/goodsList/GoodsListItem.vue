<template>
  <div class="goods-list-item">
    <div class="item">
      <img :src="itemData.card" alt="" />
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