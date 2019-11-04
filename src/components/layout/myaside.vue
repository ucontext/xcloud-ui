<template>
  <div>
    <div class="logo" @click.prevent="toggleSideBar">
      <i v-show="!isCollapse" class="el-icon-cirle-plus"></i>
      <i v-show="isCollapse" class="el-icon-remove"></i>
    </div>

    <div>
      <el-menu
        :router="true"
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#212c32"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统概览</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">态势感知</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">设备巡检</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">安全策略</span>
        </el-menu-item>
        <el-menu-item index="/mobile">
          <i class="el-icon-edit"></i>
          <span slot="title">终端事件</span>
        </el-menu-item>
        <el-menu-item index="/change">
          <i class="el-icon-document"></i>
          <span slot="title">配置变更</span>
        </el-menu-item>
        <el-menu-item index="/fault">
          <i class="el-icon-s-management"></i>
          <span slot="title">故障报告</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-finished"></i>
          <span slot="title">资产清单</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-folder-add"></i>
          <span slot="title">配置备份</span>
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-files"></i>
          <span slot="title">服务台账</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "myaside",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style>
.el-aside {
  background-color: #212c32;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-menu {
  border-right: solid 0px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #e0f3ff;
}

.el-menu-item {
  font-size: 14px;
  color: #e0f3ff;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.logo {
  background: #fafbfc;
  width: 280px;
  height: 60px;
  cursor: pointer;
}
</style>
