<template>
<div >
<el-form :inline="true" size="small" :model="formInline"  >
  <el-form-item label="关键词">
    <el-input v-model="formInline.keywords" placeholder="关键词"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
<pre v-if="visable">
  {{currentTreeList}}
</pre>
</div>
</template>
<script>

export default {

  data () {
    return {
      visable: false,
      currentTreeList: {},
      formInline: {
        keywords: ''
      },
      treeList: [{
        id: 11,
        pid: 'a1',
        text: 11,
        children: [{
          id: 21,
          pid: 'b1',
          text: 21,
          children: [{
            id: 31,
            pid: 'c1',
            text: 31,
            children: [{
              id: 41,
              pid: 'd1',
              text: 41,
              children: []
            },
            {
              id: 42,
              pid: 'd2',
              text: 42,
              children: []
            }
            ]
          },
          {
            id: 32,
            pid: 'c2',
            text: 32,
            children: []
          }
          ]
        },
        {
          id: 22,
          pid: 'b2',
          text: 22,
          children: []
        }
        ]
      },
      {
        id: 12,
        pid: 'a2',
        text: 12,
        children: [
          {
            id: 15,
            pid: 'c8',
            text: 15,
            children: []
          }
        ]
      }
      ]

    }
  },

  methods: {
    onSubmit () {
      this.currentTreeList = JSON.parse(JSON.stringify(this.treeList))
      this.findIndexArray(this.currentTreeList, this.formInline.keywords)
      // console.log(this.currentTreeList)
      setTimeout(() => { this.visable = true }, 500)
    },
    findIndexArray (data, keywords) {
      for (let i = data.length - 1; i >= 0; i--) {
        let children = data[i].children
        if (children.length !== 0) {
          this.findIndexArray(children, keywords)
          // console.log(children.length)
          // if (children.length === 0 && data[i].pid.indexOf(keywords) !== -1) {
          // if (children.length === 0) {

          // }
        }
        if (children.length === 0 && data[i].pid.indexOf(keywords) === -1) {
        // if (children.length === 0) {
          data.splice(i, 1)
        }
      }
    }
  },
  created () {

  }
}
</script>
