<template>
  <div class="detail-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="left" @click="back">
        <img src="~assets/img/fanhui.png" alt=""/>
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" class="title-item" :key="index">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },

  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style >
.nav-bar img {
  width: 100%;
}
.title {
  display: flex;
}

.title-item {
  flex: 1;
}
</style>