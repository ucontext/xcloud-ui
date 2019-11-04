<template>
  <div class="userinfo">
    <el-dropdown trigger="hover" :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-avatar
          src="@/assets/aaa.jpeg"
          style="width: 60px;height: 60px;"
        ></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
        <el-dropdown-item
          icon="el-icon-d-arrow-right"
          divided
          @click.native="logout"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "myheader"
};
</script>

<style>
.el-header {
  background-color: #fafbfc;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.userinfo {
  position: absolute;
  right: 0;
  margin-right: 25px;
  display: flex;
  flex-flow: row nowrap;
  height: 60px;
  justify-content: flex-start;
  align-items: center;
}
</style>
