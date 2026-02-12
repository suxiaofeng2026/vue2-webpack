<template>
  <div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
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

<style lang="less">
#app{
  padding: 10px;
}
  @import "./less/main.less";
</style>
