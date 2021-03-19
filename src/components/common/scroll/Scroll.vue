<template lang="">
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";

export default {
  mounted() {
    let bs = new BScroll(".wrapper", {});
  },
};
</script>
<style>
</style>