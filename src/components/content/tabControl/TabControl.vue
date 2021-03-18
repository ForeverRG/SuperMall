<template>
  <div class="tab-control-wrap">
    <div
      class="tab-control-item"
      v-for="(item, index) in tabControlTitles"
      :key="index"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabControlTitles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style>
.tab-control-wrap {
  display: flex;
  text-align: center;
}
.tab-control-item {
  flex: 1;
  padding: 10px;
}
.tab-control-item span {
  border-bottom-color: blue;
}
.active {
  color: red;
}
</style>