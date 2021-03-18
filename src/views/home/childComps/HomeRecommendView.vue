<template lang="">
    <div class="recommend-view">
        <div class="rv-item" v-for="(item, index) in recommendViews" :key="index">
            <a :href="item.link">
                <img :src="item.view" alt='' />
                <div>{{ item.text }}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommendViews: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style>
.recommend-view {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.rv-item {
  flex: 1;
}
.rv-item img {
  height: 70px;
  width: 70px;
  padding-bottom: 3px;
}
</style>