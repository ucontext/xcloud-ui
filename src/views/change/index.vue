<template>
  <div>
    <el-tabs>
      <el-tab-pane label="新增变更">
        <addchange></addchange>
      </el-tab-pane>
      <el-tab-pane label="查看变更">
        <catchange></catchange>
      </el-tab-pane>
      <el-tab-pane label="变更统计">变更统计</el-tab-pane>
      <el-tab-pane label="变更统计">变更报告</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import addchange from "./components/addchange"
import catchange from "./components/catchange"
export default {
  data() {
    return {

    };
  },
  components:{
    addchange,catchange
  }
};
</script>