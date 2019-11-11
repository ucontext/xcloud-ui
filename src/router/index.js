import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import index from "@/layout/index"
import fault from "@/views/fault/index";
import login from "@/views/login/index";

const routes = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
    meta: {
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "login",
    component: login,
    hidden: true,
    meta: {
      name: "登录"
    }
  },
  {
    path: "/index",
    name: "index",
    component: index,
    meta: {
      name: "系统概览",
      icon: "el-icon-menu"
    },
  },
  {
    path: "/sip",
    name: "sip",
    meta: {
      name: "态势感知",
      icon: "el-icon-menu"
    }
  },
  {
    path: "/inspect",
    name: "inspect",
    meta: {
      name: "设备巡检",
      icon: "el-icon-document"
    }
  },
  {
    path: "/policy",
    name: "policy",
    meta: {
      name: "安全策略",
      icon: "el-icon-setting"

    }
  },

  {
    path: "/change",
    name: "change",
    component: index,
    meta: {
      name: "事件记录",
      icon: "el-icon-document"
    },
    children: [
      {
        path: "/mobile",
        name: "mobile",
        component: () => import("@/views/mobile"),
        meta: {
          name: "终端事件",
          icon: "el-icon-s-management"
        }
      },
      {
        path: "/change",
        name: "change",
        component: () => import("@/views/change"),
        meta: {
          name: "配置变更",
          icon: "el-icon-s-management"
        }
      },
      {
        path: "/fault",
        name: "fault",
        component: fault,
        meta: {
          name: "故障报告",
          icon: "el-icon-s-management"
        }
      }
    ]
  },

  {
    path: "/zichan",
    name: "zichan",
    meta: {
      name: "资产管理",
      icon: "el-icon-finished"
    }
  },
  {
    path: "/config",
    name: "config",
    meta: {
      name: "配置备份",
      icon: "el-icon-folder-add"
    }
  },
  {
    path: "/doc",
    name: "doc",
    meta: {
      name: "用户管理",
      icon: "el-icon-files"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
