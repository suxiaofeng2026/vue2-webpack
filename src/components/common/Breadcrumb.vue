<style lang="less" scoped>
#breadcrumbContainer{
  padding:10px;
}
</style>

<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" id="breadcrumbContainer">
        <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="{path:item.path}" >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
  },
  computed: {
    breadcrumb () {
      return this.$store.getters.getBreadList
    }
  },
  methods: { }
}
</script>
