<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>

        <el-dialog title="人员信息" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机" :label-width="formLabelWidth">
              <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input v-model="ruleForm.telephone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="QQ" :label-width="formLabelWidth">
              <el-input v-model="ruleForm.qq" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="公司" :label-width="formLabelWidth">
              <el-input v-model="ruleForm.company" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="submitForm('ruleForm'); reloadPerson(); dialogFormVisible = false;"
            >确 定</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-table
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          border
          style="width: 100%"
        >
          <el-table-column prop="name" label="姓名">
            <template slot-scope="scope">
              <span style="center">{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="phone" label="手机">
            <template slot-scope="scope">
              <span style="center">{{ scope.row.phone }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="name" label="QQ">
            <template slot-scope="scope">
              <span style="center">{{ scope.row.qq }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="company" label="公司">
            <template slot-scope="scope">
              <span style="center">{{ scope.row.company }}</span>
            </template>
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="150px">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { AddPerson, GetPerson } from "@/api/person";
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "100px",
      tableData: "",
      currentPage: 1, //默认显示第一页
      pageSize: 5, //默认每页显示x条
      totalNum: 0, //总页数
      totalEvent: 0,
      ruleForm: {
        name: "",
        phone: null,
        telephone: "",
        qq: null,
        company: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入房间信息",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请选择位置",
            trigger: "blur"
          }
        ],
        telephone: [
          {
            type: "date",
            message: "请输入电话",
            trigger: "blur"
          }
        ],
        qq: [
          {
            type: "date",
            message: "请选择时间",
            trigger: "blur"
          }
        ],
        company: [
          {
            required: true,
            message: "请输入公司",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let repuestData = {
            name: this.ruleForm.name,
            phone: this.ruleForm.phone,
            telephone: this.ruleForm.telephone,
            qq: this.ruleForm.qq,
            company: this.ruleForm.company
          };
          AddPerson(repuestData).then();
        } else {
          return false;
        }
      });
    },
    reloadPerson() {
      GetPerson().then(result => {
        this.tableData = result.data;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    }
  },
  created() {
    this.totalNum = this.tableData.length;
    GetPerson().then(result => {
      this.tableData = result.data;
      this.totalEvent = result.data.length;
    });
  }
};
</script>