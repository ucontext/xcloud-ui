<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>

        <el-dialog title="人员信息" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :rules="rules">
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
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="姓名" width="150px"></el-table-column>
          <el-table-column prop="province" label="手机" width="150px"></el-table-column>
          <el-table-column prop="province" label="电话" width="150px"></el-table-column>
          <el-table-column prop="province" label="QQ" width="150px"></el-table-column>
          <el-table-column prop="city" label="公司" width="150px"></el-table-column>

          <el-table-column fixed="right" label="操作" width="150px">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "100px",
      ruleForm: {
        name: "",
        phone: null,
        telephone: "",
        qq: null,
        company: "",
        delivery: false
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
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style scoped>
</style>