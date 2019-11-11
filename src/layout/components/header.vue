<template>
  <div id="header-wrap">
    <div class="pull-right">
      <div class="userinfo">
        <el-dropdown trigger="hover" :hide-on-click="false">
          <span class="el-dropdown-link" style="margin:auto">
            <el-avatar :src="logoURL" :size="46"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-d-arrow-right" divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lheader",
  data(){
    return{
      logoURL:"../../assets/logo.png"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: $asside;
  height: 60px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}

.header-icon {
  padding: 0 32px;
}

.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
}
</style>
