<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :itemData="item"
      path="/detail"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem,
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      itemData: null,
    };
  },
};
</script>

<style>
</style>