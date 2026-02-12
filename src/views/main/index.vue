<template>
  <el-container>
    <menu-aside :isCollapse="isCollapse"></menu-aside>
    <el-container>
      <el-header>
        <i
          :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="isCollapse = !isCollapse"
        ></i>
        <span>
          <el-dropdown trigger="click">
              <span class="el-dropdown-link">
               <img src="/img/header/1.png" alt=""> zzmlove2006<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus" command="a">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus" command="b">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline" command="b">螺蛳粉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less" >
.el-menu-vertical-container {
  height: 100vh;
}
.el-menu-item-group {
  overflow: hidden;
}
.el-aside {
      overflow-x:hidden;
      transition: width 0.15s;
      -webkit-transition: width 0.15s;
      -moz-transition: width 0.15s;
      -webkit-transition: width 0.15s;
      -o-transition: width 0.15s;
    }
.el-main{
  // overflow: hidden;
  overflow: auto;
  height: 100vh-60;
}
.el-header {
  background-color: #f3f2f2;
  & > i {
    cursor: pointer;
    font-size: 24px;
    color: #000;
    margin-top: 15px;
  }
  &>span{
    float: right;
    margin-top: 14px;
    .el-dropdown-link{
      cursor: pointer;
      &>img{
        width: 30px;
        height: 30px;
        border-radius: 15px;
        margin-right:4px;
      }
    }
  }
}
</style>
<script>
import menuAside from './components/menuAside'
export default {
  components: { 'menuAside': menuAside },
  data () {
    return {
      isCollapse: false
    }
  },
  created () {

  },
  mounted () {
  },
  methods: {

  }
}
</script>
