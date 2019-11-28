<template>
  <div id="asside-wrap">
    <div class="logo">
      <span>LOGO</span>
      <svg-icon></svg-icon>
    </div>

    <div class="menu">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        
        text-color="#484f57"
        active-text-color="#426dd5"
        router
      >
        <template v-for="item in $router.options.routes">
          <el-submenu v-if="!item.hidden" :key="item.id" :index="item.path">
            <!-- 一级菜单 -->
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span>{{ item.meta.name }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item-group>
              <el-menu-item
                v-for="subitem in item.children"
                :key="subitem.id"
                :index="subitem.path"
              >{{subitem.meta.name}}</el-menu-item>
            </el-menu-item-group>

          </el-submenu>
        </template>
      </el-menu>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "laside"
};
</script>

<style lang="scss" scoped>

@import "../../styles/config.scss";

#asside-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $asside;
  height: 100vh;
  background-color: #ffffff;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}

.logo{
  height: 60px;
  width: $asside;
  background-color: #ffffff;
  // -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  // background-color: transparent;
}
// .el-aside {
//   background-color: #212c32;
//   color: #333;
//   text-align: center;
//   line-height: 200px;
// }

// .el-menu {
//   border-right: solid 0px #e6e6e6;
//   list-style: none;
//   position: relative;
//   margin: 0;
//   padding-left: 0;
//   background-color: #e0f3ff;
// }

// .el-menu-item {
//   font-size: 14px;
//   color: #e0f3ff;
//   padding: 0 20px;
//   cursor: pointer;
//   -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
//   transition: border-color 0.3s, background-color 0.3s, color 0.3s;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }
</style>
