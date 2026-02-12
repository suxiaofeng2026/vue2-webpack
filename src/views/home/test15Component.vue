<template>
  <el-dialog
  title="任务清单"
  :visible.sync="dialogVisible"
  width="90%"
  :before-close="handleClose">
  <div v-html="htmlCode" class="workLogList"></div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="closeDialog">关 闭</el-button>
  </span>
</el-dialog>
</template>
<style lang="less" scoped>
.workLogList{
 overflow-y: auto;
 height: 300px;
 width: 100%;
line-height: 1.6;
color: gray;
}
</style>
<script>
import showdown from 'showdown'
export default {
  data () {
    return {
      htmlCode: '',
      dialogVisible: false
    }
  },
  mounted () {

  },
  watch: {
    dialogVisible (val) {
      if (val) {
        this.init()
      }
    }
  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    },
    closeDialog () {
      this.dialogVisible = false
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.closeDialog()
          done()
        })
        .catch(_ => {})
    },
    init () {
      let that = this
      let converter = new showdown.Converter()
      that.$http.get('./test15.md')
        .then(function (response) {
          console.log(response)
          let result = response.data
          that.htmlCode = converter.makeHtml(result)
        })
      // let text = '# hello, markdown!'
      // this.htmlCode = converter.makeHtml(text)
    }
  }
}
</script>
