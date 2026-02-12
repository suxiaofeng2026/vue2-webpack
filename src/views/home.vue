<script src="../routes.js"></script>
<template>
  <div>
    <el-aside :style="{width:spanLeft + 'px'}">
        <div>
          <router-link v-for="(item,index) in route" :to="{path:item.url}" :key="index">
            <i :class="item.iconClass"></i>
            <div>{{item.name}}</div>
          </router-link>
        </div>

    </el-aside>
    <div id="mainContainer">
        <el-header >
          <div :style="{marginLeft:spanLeft + 'px'}">
            <img src="../assets/image/user.png" style="width: 36px;" alt="">
              <el-dropdown  @command="handleCommand">

                <span style="cursor: pointer;">{{userName}}  <i class="el-icon-setting" style="margin-left: 5px;font-size: 16px;"></i></span>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="mod">修改密码</el-dropdown-item>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

          </div>
        </el-header>
      <div class="contentContainer" :style="{marginLeft:spanLeft + 'px'}">
        <breadcrumb></breadcrumb>
        <div style="padding-left: 10px; padding-right: 10px;">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>

      </div>
    </div>
    <el-dialog
      title="密码修改"
      :visible.sync="dialogVisible"
      width="350px">
      <div  >
        <table class="modPasswordContainer">
          <tr>
          <td>旧密码：</td>
          <td>
            <el-input  placeholder="请输入旧密码" v-model="sendJson.old_pwd" type="password" size="small" clearable></el-input>
          </td>
        </tr>
          <tr>
            <td>新密码：</td>
            <td>
              <el-input  placeholder="请输入新密码" v-model="sendJson.new_pwd" type="password"  size="small" clearable></el-input>
            </td>
            </tr>
          <tr>
            <td>确认密码：</td>
            <td>
              <el-input  placeholder="请输入确认密码" v-model="sendJson.re_new_pwd" type="password" size="small" clearable></el-input>
            </td>
          </tr>
        </table>
      </div>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="modPasswords()">确 定</el-button>
  </span>
    </el-dialog>
    </div>
</template>
<style lang="less">
  .el-header{
    background-color: aliceblue;
  }
  .modPasswordContainer{
    tr{
      height: 40px;
    }
  }
  .widthTransition{
    transition: all 0.3s;
    -moz-transition: all 0.3s; /* Firefox 4 */
    -webkit-transition: all 0.3s; /* Safari 和 Chrome */
    -o-transition: all 0.3s; /* Opera */
  }
  .el-header {

    line-height: 60px;
    &>div{
      .widthTransition;
      }
  }

  .el-aside {
       .widthTransition;
        /*background-color: #f1f4fd;*/
        color: #333;
        position: fixed;
        height: 100vh;
        left: 0px;
        top:0px;
        z-index:160;
    &>div{
      text-align: center;
      height: 100vh;
      background-color:#FFF;
      border-right:1px solid #cccccc;
      &>a{display: block;
        padding: 5px;
        color: #96999D;
        &>i{
          font-size: 30px;
        }
        &>div{
          line-height: 2;
          font-size: 12px;
        }
      }
      &>a:hover,&>.router-link-active{
        background-color: #409EFF;
        color: #fff;
      }
    }
  }
  #mainContainer{
    .widthTransition;
    position: relative;
    &>.contentContainer{
    margin-top: 60px;
      }
  }
  .el-header{
      text-align: right;
        font-size: 12px;
        display: block;
    width: 100%;
      position: fixed;
      left: 0px;
      top: 0px;
    z-index: 100;

  #foldIcon{
    float: left;
    font-size: 20px;
  }
    &>div{
    display: block;
      }
  }
</style>
<script>
  import  Breadcrumb from '../components/common/Breadcrumb'
  let menuTreeList=[
    {
      name:"场景",
      url:"/main/index",
      iconClass:"el-icon-monitor",
     },
    {
      name:"标注",
      url:"/main/test2",
      iconClass:"el-icon-notebook-1",
    },
    {
      name:"训练",
      url:"/main/test3",
      iconClass:"el-icon-document-checked",
     },
    {
      name:"三级路由一",
      url:"/main/third/demo1",
      iconClass:"el-icon-document-checked",
     },
         {
      name:"三级路由二",
      url:"/main/third/demo2",
      iconClass:"el-icon-document-checked",
     },
    {
      name:"预测",
      url:"/main/complaint",
      iconClass:"el-icon-data-analysis",
    },
    {
      name:"设置",
      url:"/main/complaint",
      iconClass:"el-icon-setting",
    }
  ];
  export default {
    data() {
      return {
        defaultActive: "1",
        route: menuTreeList,
        spanLeft:66,
        userName:'测试账户',
        menuRightList:JSON.parse(localStorage.getItem("menuRightList")),
        dialogVisible:false,
        sendJson:{
          new_pwd:"",
          old_pwd:"",
          re_new_pwd:"",
        },
        loginNo:"",
      }
    },
    components:{
      Breadcrumb
    },
    created(){

    },
    watch:{
      $route(){
        this.setPath();
      }
    },
    mounted() {
      this.setPath()
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      setPath(){
        let path = this.$route.path.split('/')[1]
        this.defaultActive = this.$route.path
      },
      handleCommand(command) {
        let that=this
        if(command=="logout")
        {
          that.logout()
        }
        if(command=="mod")
        {
          that.dialogVisible=true
        }
      },
      modPasswords(){
        let that=this
        if (that.sendJson.old_pwd==="") {
          this.$message.warning('请输入旧密码');
          return false
        }
        if (that.sendJson.new_pwd=="") {
          this.$message.warning('请输入新密码');
          return false
        }

        if (that.sendJson.re_new_pwd!=that.sendJson.new_pwd) {
          this.$message.warning('两次输入新密码不一致');
          return false
        }

        that.$http.put(api+'/cop/auth/pwd',that.sendJson)
          .then(function(response) {
            let result=response.data
            if(result.code==0)
            {
              that.$message.success("密码修改成功！");
              that.dialogVisible=false
              that.sendJson={ new_pwd:"",old_pwd:"",re_new_pwd:""}
            }
            else
            {
              that.$message.warning(result.msg);
            }
          })
      },
      logout(){
        let that=this
        that.$http.delete(api+'/cop/auth/session')
          .then(function(response) {
            let result=response.data
            if(result.code==1 || result.code==0)
            {
              localStorage.clear();
              that.$router.push({path:"/login"})
            }
            else
            {
              that.$message.warning(result.msg);
            }
          })
          .catch(function (response) {
            that.$message.warning("请求异常抛出");
          })
      },
      goUrl(url){
        this.$router.push({path:url})
      }
    }
  };
</script>
