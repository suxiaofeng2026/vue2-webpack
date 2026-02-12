<template>
  <el-aside :width="!isCollapse ? '200px' : '63px'">
      <el-menu
        default-active="/main/demo1"
        class="el-menu-vertical-container"
        background-color="#000"
        text-color="#fff"
        active-text-color="yellow"
        @select="handleNav"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :collapse-transition = "false"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>管理中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/main/admin">用户管理</el-menu-item>
            <el-menu-item index="/main/demo2">登录日志</el-menu-item>
          </el-menu-item-group>

        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">信息管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/main/demo3">信息添加</el-menu-item>
            <el-menu-item index="/main/demo4">资讯列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">图片中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/main/demo5">广告列表</el-menu-item>
            <el-menu-item index="/main/demo6">广告分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">其他</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>
<script>
export default {
  props: ['isCollapse'],
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
    handleNav (key, keyPath) {
      console.log(key, keyPath)
      this.$router.push({ path: key })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
