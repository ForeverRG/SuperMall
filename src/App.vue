<template>
  <div id="app">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";
import NavBar from "./components/common/navbar/NavBar.vue";

export default {
  name: "app",
  components: {
    MainTabBar,
    NavBar,
  }
};
</script>

<style>
@import "assets/css/base.css";

.home-nav {
  background-color: rgb(235, 226, 226);
}
</style>
