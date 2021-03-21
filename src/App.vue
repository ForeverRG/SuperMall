<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";

.home-nav {
  background-color: rgb(235, 226, 226);
}
</style>
