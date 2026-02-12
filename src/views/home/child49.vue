<template>
  <div>
    <!-- {{ currentAction }} -->

    <div v-for="(item, index) in treeListData" :key="item.value">
      <div
        draggable
        @dragover="allowDrop"
        @drop.stop="handleDrap($event, item)"
        @dragenter.stop="handleEnter($event, item)"
        class="dropzone"
        v-if="item.target === 'container' && item.type==='group'"
      >
        <child49
          :treeListData="item.children"
          :currentNode="currentNode"
          :dragInfo="dragInfo"
          :sourceNode="item"
        ></child49>
      </div>

      <div
        draggable
        @dragover="allowDrop"
        @drop.stop="handleDrap($event, item)"
        @dragenter.stop="handleEnter($event, item)"
        class="dropzone"
        v-if="item.target === 'container' && item.type==='subPanel'"
      >
        <child49
          :treeListData="item.children"
          :currentNode="currentNode"
          :dragInfo="dragInfo"
          :sourceNode="item"
        ></child49>
      </div>
      <div
        draggable
        @dragover="allowDrop"
        @drop.stop="handleDrap($event, item)"
        @dragenter.stop="handleEnter($event, item)"
        class="dropzone"
        v-if="item.target === 'container' && item.type==='dblpanel'"
      >
      <div class="dblpanelContainer">
        <child49
          :treeListData="item.children"
          :currentNode="currentNode"
          :dragInfo="dragInfo"
          :sourceNode="item"
        ></child49>
      </div>

      </div>

      <div
        v-if="item.target !== 'container'"
        class="componentzone"
        draggable
        @dragover="allowDrop"
        @dragstart="handleDragstart($event, item)"
        @dragend.stop="handleMove($event, item)"
        :style="fomatePosition(item.position)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<style lang="less">
.tree {
  margin-left: 50px;
}
</style>
<script>
import textInput from './input'
import { guid } from '@/utils/common'
import draggable from 'vuedraggable'
export default {
  name: 'child49',
  //   props: [ 'treeListData' ],

  props: {
    treeListData: {
      required: true,
      type: Array
    },
    currentNode: {
      required: true
    },
    dragInfo: {},
    sourceNode: {}
  },
  components: {
    textInput,
    draggable
  },
  computed: {
    currentAction () {
      return this.$store.getters.getFormAction
    }
  },
  data () {
    return {
      drag: false,
      style: {},
      cName: 'textInput',
      input: 'input',
      groupA: {
        name: guid(),
        put: true, // 可以拖入
        pull: true
        // pull: () => {
        //   if (this.arr1.length <= 3) {
        //     this.message = "元素小于等于3不允许再拖拽了";
        //   }
        //   return this.arr1.length > 3;
        // },
      }
    }
  },

  methods: {
    // 开始拖拽事件
    onStart () {
      this.drag = true
    },
    // 拖拽结束事件
    onEnd () {
      this.drag = false
    },
    currentId () {
      return guid()
    },
    treeItem (item) {
      item.isOpen = !item.isOpen
    },

    handleEnter (e, item) {
      console.log(item, 'enter')
      this.dragInfo.target = item
    },
    // handleLeave(e, item) {
    //     console.log(item, "leave");
    // },
    handleDragstart (e, item) {
      console.log(item, 'www')
      this.dragInfo.source = this.sourceNode
      if (item.inform) {
        this.$store.commit('setFormAction', 'move')
      }
    },
    fomatePosition (data) {
      return {
        left: data.left + 'px',
        top: data.top + 'px'
      }
    },
    allowDrop (e) {
      e.preventDefault()
    },
    handleMove (e, data) {
      e.preventDefault()
      //   console.log(e);
      if (this.dragInfo.source.id !== '' && this.dragInfo.target.id !== '' && this.dragInfo.source.id !== this.dragInfo.target.id) {
        console.log('跨页布局拖拽')
        this.dragInfo.target.children.push({
          ...data,
          position: {
            left: data.position.left + (this.dragInfo.source.type !== 'subPanel' ? e.offsetX : 0),
            top: data.position.top
          }
        })

        // =========== 删除被移除的元素 start

        var myIndex = 0

        this.dragInfo.source.children.map((item, index) => {
          if (item.id === data.id) {
            myIndex = index
          }
        })
        console.log(myIndex, 'index')
        this.dragInfo.source.children.splice(myIndex, 1)
        // ============= 删除被移除的元素 end
        this.dragInfo.source = { id: '' }
        this.dragInfo.target = { id: '' }
        this.$store.commit('setFormAction', 'default')
        return false
      } else {
        (data.position.left = data.position.left + e.offsetX),
        (data.position.top = data.position.top + e.offsetY)
      }
    },
    handleDrap (e, data) {
      e.preventDefault()

      console.log(e, '========')
      //   console.log(this.currentNode, "====++==");
      //   console.log(data, "----------===");
      //   console.log(e, "---++----===");
      //   console.log(e.target.className);
      //

      // 做拽处理
      if (this.currentAction === 'move') {
        this.$store.commit('setFormAction', 'default')
        return false
      }

      if (this.currentNode.target === '') {
        return false
      }
      if (this.currentNode.target === 'container') {
        const arrList = []
        if (this.currentNode.type === 'dblpanel') {
          arrList.push({
            'label': '子面板1',
            'type': 'subPanel',
            'target': 'container',
            id: guid(),
            'children': []
          })
          arrList.push({
            'label': '子面板2',
            'type': 'subPanel',
            'target': 'container',
            id: guid(),
            'children': []
          })
        }
        data.children.push({
          ...this.currentNode,
          id: guid(),
          children: arrList
        })
      } else {
        data.children.push({
          ...this.currentNode,
          id: guid(),
          inform: true,
          position: {
            left: e.offsetX,
            top: e.offsetY
          }
        })
      }
      //   拖拽完成 设置动作为空，避免用户拖动空元素 添加组件
      this.currentNode.target = ''
    }
  }
}
</script>
