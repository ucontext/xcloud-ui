<template>
  <div id="header-wrap">
    <div class="pull-right">
      <div class="userinfo">
        {{username}}
        <el-dropdown trigger="hover" :hide-on-click="false">
          <span class="el-dropdown-link">
            <el-avatar :src="logoURL" :size="46" :fit='fit'></el-avatar>
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
import { GetUser } from '@/api/login'
export default {
  name: "lheader",
  data(){
    return{
      logoURL:"../../assets/aaa.jpeg",
      fit:"contain",
      username:"管理员"
    }
  },
  created(){
    GetUser().then(result => {
      this.username = result.data.nickname
    })
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
  background-color: #fafbfc;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}

.header-icon {
  padding: 0 32px;
}

.user-info {
  height: 100%;
  border-right: 1px solid #ededed;
}
.el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    padding: 7px 20px;
}

</style>
