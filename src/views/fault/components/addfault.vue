<template>
  <div id="change-wrap">
    <el-steps
      :active="active"
      finish-status="success"
      align-center
      style="margin-bottom: 30px;margin-top: 20px;"
    >
      <el-step title="填写故障概况"></el-step>
      <el-step title="填写故障内容"></el-step>
      <el-step title="填写故障结果" description></el-step>
      <el-step title="完成" description></el-step>
    </el-steps>

    <el-form
      :model="ruleForm"
      :rules="rules"
      :label-position="labelPosition"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div v-if="active === 1" style="margin: 0 60px;align-content: center;">
        <!-- 第一行内容 -->
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="故障名称" prop="change_name">
              <el-input v-model="ruleForm.change_name" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="故障单号" prop="change_name">
              <el-input v-model="ruleForm.change_name" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第二行内容 -->
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="故障发生时间" prop="request_date">
              <el-date-picker
                v-model="ruleForm.request_date"
                type="datetime"
                align="right"
                placeholder="选择日期"
                :size="ipheight"
                class="changewidth"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="故障发现方式" prop="request_man">
              <el-select
                v-model="ruleForm.request_man"
                filterable
                placeholder="请选择"
                :size="ipheight"
                class="changewidth"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第三行内容 -->
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="故障类型" prop="request_man">
              <el-select
                v-model="ruleForm.request_man"
                filterable
                placeholder="请选择"
                :size="ipheight"
                class="changewidth"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="变更单号" prop="change_name">
              <el-input v-model="ruleForm.change_name" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第四行内容 -->
        <el-row>
           <el-col :span="24">
            <el-form-item label="故障描述" prop="change_description">
              <el-input v-model="ruleForm.change_description" :size="ipheight"></el-input>
            </el-form-item>
          </el-col>
        </el-row>     
      </div>
      <!-- 第二页内容 -->
      <div v-if="active === 2" style="margin: 0 60px;align-content: center;">
           <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="影响程度" prop="change_influence">
              <el-radio-group v-model="ruleForm.change_influence">
                <el-radio value="重大" label="1" :size="ipheight">
                  <el-tag type="danger" :size="ipheight">重大</el-tag>
                </el-radio>
                <el-radio value="大" label="2">
                  <el-tag :size="ipheight">大</el-tag>
                </el-radio>
                <el-radio value="一般" label="3">
                  <el-tag type="success" :size="ipheight">一般</el-tag>
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="紧急程度" prop="change_emergency">
              <el-radio-group v-model="ruleForm.change_emergency">
                <el-radio value="紧急" label="1">
                  <el-tag type="danger" :size="ipheight">紧急</el-tag>
                </el-radio>
                <el-radio value="急" label="2">
                  <el-tag :size="ipheight">急</el-tag>
                </el-radio>
                <el-radio value="一般" label="3">
                  <el-tag type="success" :size="ipheight">一般</el-tag>
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="故障范围说明" prop="change_risk">
              <el-input v-model="ruleForm.change_risk" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="故障原因" prop="change_risk">
              <el-input v-model="ruleForm.change_risk" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="故障分析过程" prop="change_resource">
              <el-input type="textarea" v-model="ruleForm.change_resource"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="故障解决措施" prop="change_course">
              <el-input type="textarea" v-model="ruleForm.change_course"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <div v-if="active === 3" style="margin: 0 60px;align-content: center;">
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="变更处理开始时间" prop="change_start_date">
              <el-date-picker
                v-model="ruleForm.change_start_date"
                type="datetime"
                align="right"
                placeholder="选择日期"
                :size="ipheight"
                class="changewidth"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="变更处理结束时间" prop="change_end_date">
              <el-date-picker
                v-model="ruleForm.change_end_date"
                type="datetime"
                align="right"
                placeholder="选择日期"
                :size="ipheight"
                class="changewidth"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="故障处理人" prop="exec_man">
              <el-input v-model="ruleForm.exec_man" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="故障审核人" prop="verify_man">
              <el-input v-model="ruleForm.verify_man" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="故障结果" prop="change_test">
              <el-input type="textarea" v-model="ruleForm.change_test"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <div v-if="active === 4" style="margin: 0 auto;align-content: center;">
        <i class="el-icon-circle-check"></i>
        <el-button size="medium" @click="resetForm('ruleForm')">重新提交</el-button>
      </div>

      <div style="margin-left: 60px;margin-top:20px">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          size="medium"
          v-if="active == 3"
        >提交</el-button>
        <el-button size="medium" @click="next" v-if="active == 1 || active == 2">下一步</el-button>
        <el-button size="medium" @click="prev" v-if="active == 2 || active == 3">上一步</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      ipheight: "small",
      labelPosition: "top",
      infradio: 3,
      emeradio: 3,
      ruleForm: {
        change_name: "",
        request_date: "",
        request_man: "",
        change_department: "",
        reason_name: "",
        type_name: "",
        is_change:"",
        change_influence: "",
        change_emergency: "",
        change_risk: "",
        change_description: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    prev() {
      --this.active;
      if (this.active < 1) this.active = 1;
    },
    next() {
      if (this.active++ > 3) this.active = 1;
    }
  }
};
</script>

<style lang="scss">
@import "../../../styles/config.scss";
#change-wrap {
  border: 0px solid #dcdfe6;

  .changewidth {
    width: 100%;
  }

  .el-row {
    margin-bottom: 8px;
  }

  .el-form-item__label {
    font-size: 14px;
    color: #606266;
    line-height: 32px;
    padding: 0 12px 0 0;
  }

  .el-form-item {
    margin-bottom: 2px;
  }
}
</style>