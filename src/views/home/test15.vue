<template>
  <div>
    <view-work-List ref="childDialog"></view-work-List>
    <el-button @click="openChildDialog">打开模态框</el-button>

<textarea rows="4" v-model="content" cols="20"></textarea>
    <el-tooltip placement="bottom" effect="light">
      <div slot="content" v-html="content"></div>
  <el-button>Light</el-button>
</el-tooltip>

  </div>
</template>
<script>
import viewWorkList from './test15Component'
export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    viewWorkList
  },
  mounted () {

  },
  methods: {
    textToHtml (str) {
      str = str.replace(/\n/g, '<br/>')
      str = str.replace(/ /g, '&nbsp')
      return str
    },
    openChildDialog () {
      this.$refs.childDialog.openDialog()
    }
  }
}
</script>
