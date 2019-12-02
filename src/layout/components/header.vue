<template>
  <div id="header-wrap">
    <div class="pull-right">
      <div class="userinfo">
        <span class="username">{{username}}</span>
        <el-dropdown trigger="hover" :hide-on-click="false">
          <span class="el-dropdown-link">
            <el-avatar :src="logoURL" :size="46" :fit="fit"></el-avatar>
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
import { GetUser } from "@/api/login";
export default {
  name: "lheader",
  data() {
    return {
      logoURL: require("../../assets/wechat.jpeg"),
      fit: "contain",
      username: "管理员"
    };
  },
  created() {
    GetUser().then(result => {
      this.username = result.data.nickname;
    });
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
  line-height: 60px;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  // -webkit-transition: all 0.3s ease 0s;
}

.username{
  font-size: 14px;
  float: left;
  display: block
}

.header-icon {
  padding: 0 32px;
  svg {
    margin-bottom: -8px;
    font-size: 25px;
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
  + .header-icon {
    padding: 0 28px;
  }
  img {
    display: inline-block;
    margin-bottom: 12px;
    margin-right: 18px;
    border-radius: 50px;
  }
}

.el-dropdown{
  padding: 7px 25px;
  position: relative;
  color: #606266;
  font-size: 14px;
}
</style>

