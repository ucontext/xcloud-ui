<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="change_number" label="变更单号">
        <template slot-scope="scope">
          <span style="center">{{ scope.row.change_number }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="change_name" label="变更名称">
        <template slot-scope="scope">
          <span style="center">{{ scope.row.change_name }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="request_date" label="申请时间">
        <template slot-scope="scope">
          <span style="center">{{ scope.row.request_date }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="request_man" label="申请人">
        <template slot-scope="scope">
          <span style="center">{{ scope.row.request_man }}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="150px">
       
          <el-button
            @click="dialogTableVisible = true"
            type="text"
            size="small"
          >查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
      </el-table-column>
    </el-table>
    <morechange :tableVisible="dialogTableVisible"></morechange>
  </div>
</template>

<script>
import { GetChange } from "@/api/change";
import morechange from "@/views/change/components/morechange.vue";
export default {
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
    };
  },
  components: {
    morechange
  },

  created() {
    GetChange().then(result => {
      this.tableData = result.data;
    });
  }
};
</script>

<style lang="scss">
</style>