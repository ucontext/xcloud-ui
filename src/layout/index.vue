<template>
  <div id="layout">
    <laside></laside>
    <lheader></lheader>
    <lmain></lmain>
  </div>
</template>

<script>
import laside from "./components/aside.vue";
import lheader from "./components/header.vue";
import lmain from "./components/main.vue";

export default {
  components: {
    laside,
    lheader,
    lmain
  }
};
</script>

<style lang="scss" scoped>
#layout{
  background-color: #f7f7f7
}
// .el-container {
//   height: 100%;
// }

// .el-main {
//   background-color: #e9eef3;
// }

// .el-header {
//   background-color: #fafbfc;
//   color: #333;
//   text-align: center;
//   line-height: 60px;
//   -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
// }

// .el-container .is-vertical {
// 	-webkit-box-orient: vertical;
// 	-ms-flex-direction: column;
// 	flex-direction: column;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
// 	line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
// 	line-height: 320px;
// }
</style>
