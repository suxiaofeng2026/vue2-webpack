<template>
  <div>
    <div @click='clickFullscreen'>全屏切换</div>
  </div>
</template>
<script>
import screenfull from 'screenfull'
export default {
  data () {
  },
  methods: {
    clickFullscreen () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>
