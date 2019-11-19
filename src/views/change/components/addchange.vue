<template>
  <div id="change-wrap">
    <el-form
      :model="ruleForm"
      :rules="rules"
      :label-position="labelPosition"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-card class="box-card">
        <span class="ititle">变更概况</span>
        <el-divider></el-divider>

        <!-- 第一行内容 -->
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="变更名称" prop="change_name">
              <el-input v-model="ruleForm.change_name" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="申请时间" prop="request_date">
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

          <el-col :span="8">
            <el-form-item label="变更申请人" prop="request_man">
              <el-select v-model="value" filterable placeholder="请选择" :size="ipheight" class="changewidth">
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
        <!-- 第二行内容 -->
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="责任单位" prop="name">
              <el-select v-model="value" filterable placeholder="请选择" :size="ipheight" class="changewidth">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="变更原因" prop="name">
              <el-select v-model="value" filterable placeholder="请选择" :size="ipheight" class="changewidth">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="变更分类" prop="name">
              <el-select v-model="value" filterable placeholder="请选择" :size="ipheight" class="changewidth">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行内容 -->
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="变更风险" prop="number">
              <el-input v-model="ruleForm.name" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-col :span="12">
              <el-form-item label="影响程度" prop="name">
                <el-radio-group v-model="infradio">
                  <el-radio v-model="radio" label="1" :size="ipheight">
                    <el-tag type="danger" :size="ipheight">重大</el-tag>
                  </el-radio>
                  <el-radio v-model="radio" label="2">
                    <el-tag :size="ipheight">大</el-tag>
                  </el-radio>
                  <el-radio v-model="radio" label="3">
                    <el-tag type="success" :size="ipheight">一般</el-tag>
                  </el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="紧急程度" prop="name">
                <el-radio-group v-model="emeradio">
                  <el-radio v-model="radio" label="1">
                    <el-tag type="danger" :size="ipheight">紧急</el-tag>
                  </el-radio>
                  <el-radio v-model="radio" label="2">
                    <el-tag :size="ipheight">急</el-tag>
                  </el-radio>
                  <el-radio v-model="radio" label="3">
                    <el-tag type="success" :size="ipheight">一般</el-tag>
                  </el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="box-card">
        <span class="ititle" style="margin-top:8px">变更内容</span>
        <el-divider></el-divider>
        <el-row :gutter="30">
          <el-col :span="16">
            <el-form-item label="变更描述" prop="name">
              <el-input v-model="ruleForm.name" :size="ipheight" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="涉及的设备信息" prop="name">
              <el-select v-model="value" filterable placeholder="请选择" :size="ipheight" class="changewidth">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="涉及的资源信息" prop="name">
              <el-input type="textarea" style="width:87%"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="变更过程" prop="name">
              <el-input type="textarea" style="width:87%"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
      </el-card>
      
      <el-card class="box-card">
        <span class="ititle" style="margin-top:8px">变更结果</span>
        <el-divider></el-divider>
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="变更处理开始时间" prop="name">
              <el-date-picker
                v-model="value3"
                :size="ipheight"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp"
                class="changewidth"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="变更处理结束时间" prop="name">
              <el-date-picker
                v-model="value3"
                :size="ipheight"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp"
                class="changewidth"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="变更执行人" prop="name">
              <el-input v-model="ruleForm.name" :size="ipheight" class="changewidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="测试结果" prop="name">
              <el-input type="textarea" style="width:94%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" :size="ipheight">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ipheight: "small",
      labelPosition: "top",
      infradio: 3,
      emeradio: 3,
      ruleForm: {
        change_name: "",
        request_date: "",
        request_man: "",
        date2: "",
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
    }
  }
};
</script>

<style lang="scss">
@import "../../../styles/config.scss";
#change-wrap {
  border: 0px solid #dcdfe6;
  span.ititle {
    display: block;
    font-size: 14px;
  }
  .changewidth{
    width: 80%
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

  .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 12px 0;
  }
}
</style>