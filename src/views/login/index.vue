<template>
  <el-row class="login-container">
    <el-col :span="5" :offset="16">
      <el-form status-icon label-width="0px" class="login-box">
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="sendJson.account"
            placeholder="账号"
            @keyup.enter.native="submit"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="sendJson.pwd" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="verificationCode">
          <el-row>
            <el-col :span="13">
              <el-input
                type="text"
                v-model="sendJson.icode"
                @keyup.enter.native="submit"
                placeholder="图形验证码"
              ></el-input>
            </el-col>
            <el-col :span="10" :offset="1" class="pointer">
              <img :src="captchaSrc" @click="getCaptcha" style="width:100%" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="submit()">登录</el-button>
        </el-form-item>
        <div class="login-icon">
          <img src="@/assets/image/login_icon.png" alt />
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      sendJson: {
        account: '',
        icode: '',
        pwd: ''
      },
      captchaSrc: ''
    }
  },
  created () {
    localStorage.clear()
  },
  mounted () {
    console.log(this.api)
    // vueStore.commit('cleanNav')
    this.getCaptcha()
  },
  beforeDestroy () {
  },
  methods: {
    getCaptcha () {
      // this.captchaSrc = this.apiJson.api + `/cop/auth/icode?ts=${new Date().getTime()}`
    },
    submit () {
      // this.$router.addRoutes([{
      //   path: '/test4',
      //   component: (resolve) => require(['@/views/home/test4.vue'], resolve),
      //   meta: { title: '折线图平滑度', keepAlive: true }
      // },
      // {
      //   path: '/test5',
      //   component: (resolve) => require(['@/views/home/test5.vue'], resolve),
      //   meta: { title: '递归组件测试', keepAlive: true }
      // }])
      // this.$router.push({ path: '/test5' })
    }
  }
}
</script>
