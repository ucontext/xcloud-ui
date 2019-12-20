<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
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
        <el-button @click="dialogTableVisible = true" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button @click="downFile()" type="text" size="small">下载</el-button>
      </el-table-column>
    </el-table>

    <morechange :tableVisible="dialogTableVisible"></morechange>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="totalEvent"
      >></el-pagination>
    </div>
  </div>
</template>

<script>
import { GetChange } from "@/api/change";
import service from "@/utils/request";
import morechange from "@/views/change/components/morechange.vue";
export default {
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      currentRow: null,
      currentPage: 1, //默认显示第一页
      pageSize: 5, //默认每页显示5条
      totalNum: 0, //总页数
      totalEvent: 0
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleSizeChange(val) {
      this.pageSize = val; //动态改变
    },
    downFile() {
      console.log(this.currentRow.change_number);

      let repuestData = {
        change_number: this.currentRow.change_number
      };

      service
        .request({
          method: "get",
          headers: {
            "content-type":
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          },
          Authentication: { username: sessionStorage.getItem("token") },
          url: "/downfile/change/" + this.currentRow.change_number,
          responseType: "blob"
        })
        .then(res => {
          console.log(res);
          const blob = new Blob([res.data], {
            type: "application/zip;charset=utf-8"
          });
          const fileName = this.currentRow.change_number + ".docx"; //下载的文件名称及其后缀，后缀要和后台保持的一致
          if ("download" in document.createElement("a")) {
            // 非IE下载
            const elink = document.createElement("a");
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href); // 释放URL 对象
            document.body.removeChild(elink);
          } else {
            // IE10+下载
            navigator.msSaveBlob(blob, fileName);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  components: {
    morechange
  },

  created() {
    this.totalNum = this.tableData.length;
    GetChange().then(result => {
      this.tableData = result.data;
      this.totalEvent = result.data.length;
    });
  }
};
</script>

<style lang="scss">
</style>