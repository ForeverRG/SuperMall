<template lang="">
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      bScroll: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.bScroll = new BScroll(this.$refs.wrapper, {
        click: true,
      });
    }, 20);

    console.log(this.bScroll);
  },
};
</script>
<style scoped>
</style>