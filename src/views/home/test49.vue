<template>
    <div class="myDrageContainer">
      <span>
        <h1>元件框库</h1>
        <ul>
          <li
            draggable
            v-for="(item, index) in nodeList"
            @dragstart="handleDragstart($event, item)"
            @dragend="handleDragEnd($event, item)"
            :key="'node' + index"
            class="source"
          >
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </span>
      <div>

        <div
        >
          <child49 :treeListData="treeData" :dragInfo="dragInfo"  sourceNode="{}" :currentNode="currentNode"></child49>

          <!-- <pre>
                {{ treeData }}
          </pre> -->

          <pre>
            {{ dragInfo }}
          </pre>
        </div>
      <!--   <div
          class="dropzone2"
          @dragover="allowDrop"
          @drop="handleDrap($event, '+++')"
        >
          ++++++++++++++
        </div> -->
      </div>
    </div>
  </template>

<script>
import { guid } from '@/utils/common'
import draggable from 'vuedraggable'
import child49 from './child49'
export default {
  data () {
    return {
      dragInfo: {
        source: { id: '' },
        target: { id: '' }

      },
      currentNode: {},
      nodeList: [
        {
          label: '分组',
          type: 'group',
          target: 'container'
        },
        {
          label: '面板',
          type: 'panel',
          target: 'container'
        },
        {
          label: '选项卡',
          type: 'tab',
          target: 'container'
        },
        {
          label: '拆分面板',
          type: 'dblpanel',
          target: 'container'
        },
        {
          label: '普通组件',
          type: 'input',
          target: 'component'
        }
      ],

      treeData: [

        {
          label: '一级02',
          type: 'group',
          target: 'container',
          id: guid(),
          children: []
        }
      ]

    }
  },
  components: {
    child49, draggable
  },
  methods: {
    init () {},
    updata (data) {
      this.currentNode = data
    },
    handleDragstart (e, item) {
      console.log(e, '====start====')
      console.log(item)
      console.log(e.target.className)
      this.currentNode = JSON.parse(JSON.stringify(item))
    },
    handleDragEnd (e, item) {
      // console.log(e, "========");
      // console.log(item);
      console.log(e.target.className)
    },
    allowDrop (e) {
      e.preventDefault()
    },
    handleDrap (e, data) {
      e.preventDefault()
      console.log(e, '========')
      console.log(data, '========')
      console.log(e.target.className)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
  <style lang="less">
  .myDrageContainer {
    display: flex;
    height: calc(100vh - 120px);
    & > span {
      width: 200px;
      // display: block;
      background-color: #fdf8f8;
      padding: 10px;
      height: 100%;
      &>h1{
        font-size: 16px;
      }
      & > ul {
        margin-top: 10px;
        margin-left: 10px;
        &>li{
            line-height: 2;
            font-size: 14px;
            cursor: move;
        }
      }
    }
    & > div {
      flex: 2;
      height: 100%;
      .dropzone{
        border: 1px #dbd4d4;
        border-style: dashed;
        padding: 10px;
        margin: 5px;
        min-height: 200px;
        position: relative;
        background-color: #fff;
      }
      .dblpanelContainer{

        &>div{
            display: flex;
        justify-content: space-between;
             &>div{
            flex: 1;
        }
        }

      }
      .componentzone{
        position: absolute;
      }
    }
  }
  </style>
