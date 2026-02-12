<template>

<div class="subMenuContainer">

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2" style="padding-left: 10px;">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4" style="padding-left: 10px;">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</div>
</template>
<style lang="less">
.subMenuContainer{
width:208px;
.is-active{
  // color: #409EFF!important;
  .el-submenu__title
  {
     color: #409EFF!important;
    i{ color: #409EFF!important;}
  }

}
&>.el-menu{
  border-right: 0px !important;
}
.el-menu-item-group__title{
      padding: 0px!important;
}
.el-submenu__title{
  padding: 0 10px!important;
}
.el-menu-item{
  height: 44px!important;
  line-height: 44px!important;
}
.el-submenu__title{
      height: 44px;
    line-height: 44px;
}

.el-menu-item-group
  {
    .is-active {
      color: #409EFF;
      border-right:3px solid #1890ff !important;
  }
  .el-menu-item{
    padding-left: 50px !important;
  }
}
}
</style>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
