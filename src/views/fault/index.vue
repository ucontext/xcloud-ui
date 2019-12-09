<template>
  <div>
    <el-tabs :tab-position="tabPosition" stretch>
      <el-tab-pane label="新增故障">
        <addfault></addfault>
      </el-tab-pane>
      <el-tab-pane label="查看故障">查看故障</el-tab-pane>
      <el-tab-pane label="故障统计">故障统计</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import addfault from "./components/addfault"
export default {
  data() {
    return {
      tabPosition: "left"
    };
  },
  components:{
    addfault
  }
};
</script>