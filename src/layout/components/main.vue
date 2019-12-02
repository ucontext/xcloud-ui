<template>
  <div id="main-wrap">
    <div class="main-content">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: "lmain"
}
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";
#main-wrap {
  height: 100vh;
  // position: fixed;
  // left: $asside;
  // top: 60px;
  // right: 0;
  // bottom: 0;
  // height: 100vh;
  // border: 30px solid #f7f7f7;
  // box-sizing: border;


}

.main-content {
  width: 100%;
  height: 100%;
  padding-top: $header + 30;
  padding-left: $asside+30;
  padding-right: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

    overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.content {
  width: 100%;
  height: 100%;
  padding: 30px 30px 0 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;

}
</style>