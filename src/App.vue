<template>
  <div id="app">
    <index></index>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import index from "@/components/layout/index.vue";
export default {
  components: {
    index
  }
};
</script>
<style lang="scss">
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
</style>
