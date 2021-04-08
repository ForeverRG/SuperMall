<template lang="">
  <div class="detail-tab-bar">
    <nav-bar>
      <!-- 返回 -->
      <div slot="left" @click="back">
        <img src="~assets/img/fanhui.png" alt='' class="back-icon" />
      </div>
      <!-- 标题选项 -->
        <div slot="center" v-for="(item, index) in titles" :key="index" class="nav-center-content nav-center-item" :class="{active: currentIndex === index}">
          {{item}}
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

  data() {
    return {
      currentIndex: 0,
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style>
.back-icon {
  width: 28px;
  height: 28px;
  vertical-align: middle;
}
.active {
  color: red;
}

/* .nav-center-content {
  display: flex;
  font-size: 13px;
}

.nav-center-item {
  flex: 1;
} */
</style>