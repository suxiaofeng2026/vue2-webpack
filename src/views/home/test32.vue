<template>
  <div  >
    <pre>
      {{data.menu.button}}
    </pre>
      <!-- <div class="mytree"> -->
    <el-tree
      id="treeContainer"
      :data="data.menu.button"
      :props="defaultProps"
      node-key="id"
      default-expand-all
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      draggable
    ></el-tree>

    <!-- 上面注释掉的属性
     :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 修改一下数据，让数据符合我们的要求
      data: {
        menu: {
          button: [
            {
              type: 'click',
              name: '今日歌曲',
              key: 'V1001_TODAY_MUSIC',
              sub_button: [
                {
                  type: 'view',
                  name: '难忘今宵',
                  url: 'http://www.baidu.com/',
                  sub_button: []
                }
              ]
            },
            {
              type: 'click',
              name: '歌手简介',
              key: 'V1001_TODAY_SINGER',
              sub_button: [
                {
                  type: 'view',
                  name: '张宇',
                  url: 'http://www.soso.com/',
                  sub_button: []
                },
                {
                  type: 'view',
                  name: '林俊杰',
                  url: 'http://v.qq.com/',
                  sub_button: []
                }
              ]
            },
            {
              name: '菜单',
              sub_button: [
                {
                  type: 'view',
                  name: '搜索',
                  url: 'http://www.soso.com/',
                  sub_button: []
                },
                {
                  type: 'view',
                  name: '视频',
                  url: 'http://v.qq.com/',
                  sub_button: []
                },
                {
                  type: 'click',
                  name: '赞一下我们',
                  key: 'V1001_GOOD',
                  sub_button: []
                },
                {
                  type: 'miniprogram',
                  name: 'wxa',
                  url: 'http://mp.weixin.qq.com',
                  appid: 'wx286b93c14bbf93aa',
                  pagepath: 'pages/lunar/index'
                }
              ]
            }
          ]
        }
      },
      //   修改一下啊显示规则，
      //   1.label(显示的文字)对应 我们数据中的name
      // 2.children(下级菜单名)对应 我们数据中的sub_button
      defaultProps: {
        children: 'sub_button',
        label: 'name'
      }
    }
  },

  methods: {
    handleDragStart (node, ev) {
      console.log(JSON.stringify(this.data.menu))
      console.log('drag start', node)
    },
    handleDragEnter (draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave (draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver (draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd (draggingNode, dropNode, dropType, ev) {
      var div = document.getElementById('treeContainer')
      var x = ev.clientX
      var y = ev.clientY
      var divx1 = div.offsetLeft
      var divy1 = div.offsetTop
      var divx2 = div.offsetLeft + div.offsetWidth
      var divy2 = div.offsetTop + div.offsetHeight
      if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
        console.log('你已经超出了拖拽区域')
      }
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop (draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType)
    }

    // 这个地方就是拖动的限制条件 ，暂时注释掉

    // allowDrop(draggingNode, dropNode, type) {
    //   if (dropNode.data.label === "二级 3-1") {
    //     return type !== "inner";
    //   } else {
    //     return true;
    //   }
    // },
    // allowDrag(draggingNode) {
    //   return draggingNode.data.label.indexOf("") === -1;
    // },
  }
}
</script>
