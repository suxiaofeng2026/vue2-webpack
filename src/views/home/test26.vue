<template>
  <div class="custom-tree-container">

  <div class="block">
    <p @click="getCheckBox">点击获取选择的node</p>
    <el-tree
      :data="data"
      show-checkbox
      ref="tree"
      node-key="id"
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>
          <i style="width:100px;display:block" class="single-line"> <i v-if="data.children" @click="handleIcon(node, data)" :class="node.expanded?'el-icon-folder-opened':'el-icon-folder'" ></i> {{ node.label }}</i>
          </span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</div>
</template>
<script>
let id = 1000

export default {
  data () {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1二级 2-1二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    },
    {
      id: 11,
      label: '乱七八糟的'

    }]
    return {
      data: JSON.parse(JSON.stringify(data))
    }
  },

  methods: {
    getCheckBox () {
      console.log(this.$refs.tree.getCheckedNodes())
    },
    handleIcon (node, data) {
      node.expanded = !node.expanded
      console.log(node)
      console.log(data)
    },
    append (data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }

  }
}
</script>

<style lang="less">
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .el-tree-node__expand-icon{
  display: none;
}

.el-tree-node__content {
      &:hover {
        background: #e6f7ff;
      }
    }
    .el-tree-node:focus>.el-tree-node__content{
      color:#1890ff;
      background-color: #e6f7ff;
      border-right:2px solid #1890ff;
    }
</style>
