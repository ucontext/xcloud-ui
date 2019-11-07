<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="item in menuTab"
          :key="item.id"
          :class="{'current':item.current}"
          @click="toggleMenu(item)"
        >{{item.tex}}</li>
      </ul>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
      >
        <el-form-item prop="username" class="item-form">
          <label>邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label>密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>



        <el-form-item prop="code" class="item-form">
          <label>验证码</label>

          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model="ruleForm.code" autocomplete="off" minlength="6" maxlength="20"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {validate} from "@/utils/validate";
export default {
  name: "login",
  data() {
    // 验证用户名
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (validateEmail(value)) {
        callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };

    // 验证密码
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePass(value)) {
        callback(new Error("密码格式有误"));
      } else {
        callback();
      }
    };


    // 验证验证码
    var checkCode = (rule, value, callback) => {
      let reg = /^[a-z0-9]{6}$/;
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (!reg.test(value)) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { tex: "登录", current: true },
        { tex: "注册", current: false }
      ],
      isActive: true,
      ruleForm: {
        username: "",
        password: "",
     
        code: "",
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: "blur" }
        ],
        password: [
          { validator: validatePassword,  trigger: "blur" }
        ],
       
        code: [
          { validator: checkCode, trigger: "blur" }
        ]
      }
    };
  },
  // 挂载完成后执行的生命周期
  mounted() {},
  methods: {
    login() {
      // 假设登陆成功，则跳转到 index 组件
      this.$router.replace("/index");
	  this.$axios({
	  		method: "post",
	  		url: "/login1",
	  		data: {
	  			username: this.username,
	  			password: this.password,
	  		},
	  	})
	  	.then(function(response) {
	  		console.log(response.data);
	  		if (parseInt(response.data.status) === 400) {
	  			// 登录失败
	  			this.username = '';
	  			this.password = '';
	  		} else if (parseInt(response.data.status) === 200) {
	  			// 存token
	  			sessionStorage.setItem('token', response.data.token);
	  			// 登录成功,跳转到index
	  			this.$router.push('mobile')
	  		}
	  	})
	  	.catch(function(error) {
	  		console.log(error)
	  	})
	  
    },
    toggleMenu(data) {
      // ES6写法
      this.menuTab.forEach(elem => (elem.current = false));
      // 高光
      data.current = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.el-row {
  margin: 0;
  padding: 0;
}

#login {
  height: 100vh;
  background-color: #344a5f;
}

.login-wrap {
  width: 330px;
  margin: auto;
}

.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    // 鼠标指针变成手势
    cursor: pointer;
  }
}

.current {
  background-color: rgba(0, 0, 0, 0.1);
}

.login-form {
  margin-top: 29px;
  label {
    display: block;
    font-size: 14px;
    color: #fff;
    margin-bottom: 3px;
  }
  .item-form {
    margin-bottom: 13px;
  }
  .block {
    width: 100%;
    display: block;
  }
  .login-btn {
    margin-top: 19px;
  }
}

</style>
