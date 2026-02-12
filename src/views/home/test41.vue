<template>
    <div class="draggable_box">
      <el-row :gutter="15">
        <el-col :span="6">
          <div></div>
        </el-col>
        <el-col :span="6">
          <div class="area">
            <div class="card">
              <div class="card_top">
                <div class="title">组件列表</div>
              </div>
              <draggable v-model="menus" chosenClass="chosen"
                         :options="{group:{name: 'first',pull:'clone',put: true},sort: true}" forceFallback="true"
                         animation="100"
                         filter=".unmover"
                         handle=".mover"
                         @start="onStart" @end="onEndMenu" :move="onMoveMenu">
                <transition-group class="menu_area">
                  <div class="item" :class="element.disabled?'unmover':'mover'" v-for="element in menus"
                       :key="element.id+'-menus'">{{ element.name }}
                  </div>
                </transition-group>
              </draggable>
            </div>
            <!-- <div class="card">
              <div class="card_top">
                <div class="title">二级菜单选项</div>
              </div>
              <draggable v-model="submenus" chosenClass="chosen" forceFallback="true"
                         :options="{group:{name: 'second',pull:'clone',put: true},sort: true}" animation="100"
                         @start="onStart" @end="onEnd" :move="onMoveSubmenu">
                <transition-group class="submenu_area">
                  <div class="item" v-for="element in submenus" :key="element.id+'-submenus'">{{ element.name }}</div>
                </transition-group>
              </draggable>
            </div> -->
          </div>
        </el-col>
        <el-col :span="12">
          <div class="area card">
            <div class="card_top">
              <div class="title">表单布局</div>
            </div>
            <draggable v-model="resultArr" chosenClass="chosen" forceFallback="true"
                       :group="{name: 'first',pull: true,put: true}" animation="100"
                       @start="onStart" @end="onEndResultMenu" :move="onMoveResultMenu">
              <transition-group class="result_menu_area">
                <div v-for="(firstEl,index) in resultArr" @click="openPlain(index)" :key="firstEl.id+'firstEl'">
                  <div class="item" v-if="firstEl.type===1">
                    <div>{{ firstEl.name }}</div>
                    <draggable v-model="firstEl.seconds" chosenClass="chosen" forceFallback="true"
                               :group="{name: 'second',pull: true,put: true,index}"
                               dataIdAttr="data-id"
                               animation="100"
                               @start="onStart" @end="onEndResultSubMenu" :move="onMoveResultSubMenu">
                      <transition-group class="result_submenu_area" :index="index">
                        <div class="item" v-for="secondEl in firstEl.seconds" :key="secondEl.id+'secondEl'">
                          <div>{{ secondEl.name }}</div>
                        </div>
                      </transition-group>
                    </draggable>
                  </div>
                </div>
              </transition-group>
            </draggable>

          </div>
        </el-col>
      </el-row>            <pre>
                 {{ resultArr }}
            </pre>
    </div>
  </template>

<script>
// 导入draggable组件
import draggable from 'vuedraggable'

export default {
  // 注册draggable组件
  components: {
    draggable
  },
  data () {
    return {
      drag: false,
      // 定义要被拖拽对象的数组
      menus: [
        { id: 1, name: '组件1', type: 1, seconds: [], disabled: false },
        { id: 2, name: '组件2', type: 1, seconds: [], disabled: false },
        { id: 3, name: '组件3', type: 1, seconds: [], disabled: false },
        { id: 4, name: '组件4', type: 1, seconds: [], disabled: false }
      ],
      submenus: [
        { id: 1, name: '二级菜单1', type: 2 },
        { id: 2, name: '二级菜单2', type: 2 },
        { id: 3, name: '二级菜单3', type: 2 },
        { id: 4, name: '二级菜单4', type: 2 }], // 空数组
      resultArr: [],
      style: 'min-height:120px;display: block;',
      moveItem: ''
    }
  },
  mounted () {

  },
  methods: {
    openPlain (index) {
      alert('编辑属性' + index)
    },
    // 开始拖拽事件
    onStart () {
      this.drag = true
    },
    // 拖拽结束事件
    onEnd () {
      this.drag = false
    },
    // move回调方法
    onMove (e, originalEvent) {
      this.moveItem = e.draggedContext.element // 拖拽对象
      // false表示阻止拖拽
      return true
    },
    /**
       * 拖拽一级菜单回调事件，用来控制那个元素不允许被拖拽和获取当前拖动元素的对象
       * @param e //e对象结构
       * draggedContext: 被拖拽的元素
       *       index: 被拖拽的元素的序号
       *       element: 被拖拽的元素对应的对象
       *       futureIndex: 预期位置、目标位置
       * relatedContext: 将停靠的对象
       *       index: 目标停靠对象的序号
       *       element: 目标的元素对应的对象
       *       list:  目标数组
       *       component: 将停靠的vue组件对象
       * @param originalEvent
       * @return {boolean} false表示阻止拖拽
       */
    onMoveMenu (e, originalEvent) {
      this.moveItem = e.draggedContext // 拖拽对象
      // false表示阻止拖拽：不允许重复拖拽，不允许拖拽到同级子元素下
      return !this.resultArr.some(item => item.id === this.moveItem.element.id) && originalEvent.rootEl._prevClass === 'result_menu_area'
    },

    // 一级菜单拖拽结束事件
    onEndMenu (e) {
      this.drag = false
      const result = this.resultArr.filter((item) => {
        return item.id === this.moveItem.element.id
      })
      //  对象不存在, 原来就有一个，在加上新拖拽的就是两个
      if (result.length < 2) {
        this.$set(this.menus[this.moveItem.index], 'disabled', true)
        return
      }
      // 对象存在,删除新增对象
      this.resultArr.splice(e.newDraggableIndex, 1)
    },

    // 拖拽二级菜单回调事件，用来控制那个元素不允许被拖拽和获取当前拖动元素的对象
    onMoveSubmenu (e, originalEvent) {
      this.moveItem = e.draggedContext // 拖拽对象

      // false表示阻止拖拽：不允许重复拖拽，不允许拖拽到同级子元素下
      return !(e.relatedContext.list && e.relatedContext.list.some(item => item.id === this.moveItem.element.id)) && originalEvent.rootEl._prevClass === 'result_submenu_area'
    },

    // 拖拽结果目录一级菜单回调
    onMoveResultMenu (e, originalEvent) {
      this.moveItem = e.draggedContext // 拖拽对象
      let list = e.relatedContext.list
      // false表示阻止拖拽：不允许重复拖拽，不允许拖拽到同级子元素下
      if (e.to._prevClass === 'result_menu_area') {
        // 拖动至结果区域
        return !(list && list.filter(item => item.id === this.moveItem.element.id).length > 2)
      } else {
        return e.to._prevClass === 'menu_area'
      }
    },
    // 拖拽结果目录一级菜单结束事件
    onEndResultMenu (e) {
      this.drag = false
      // 判断目标区域是否为 一级菜单选项
      if (e.to._prevClass === 'menu_area') {
        let list = []
        // menus 数组去重
        this.menus.forEach((item) => {
          if (!list.some(el => el.id === item.id)) {
            list.push(item)
          }
        })
        this.menus = list
        // 找到原数组的对象下标
        this.$nextTick(() => {
          this.menus.forEach((item) => {
            item.seconds = []
            if (item.id === this.moveItem.element.id) {
              item.disabled = false
            }
          })
        })
      }
    },
    // 拖拽结果目录二级菜单回调
    onMoveResultSubMenu (e, originalEvent) {
      this.moveItem = e.draggedContext // 拖拽对象
      let list = e.relatedContext.list
      // false表示阻止拖拽：不允许重复拖拽，不允许拖拽到同级子元素下且不能与父级元素同级
      if (e.to._prevClass === 'result_submenu_area') {
        return !(list && list.filter(item => item.id === this.moveItem.element.id).length > 2)
      } else {
        return e.to._prevClass === 'submenu_area'
      }
    },
    // 拖拽结果目录二级菜单结束事件，支持排序
    onEndResultSubMenu (e) {
      this.drag = false
      if (e.to._prevClass === 'result_submenu_area') {
        // 获取目标区域所在的下标
        let index = e.to.__vue__.$attrs.index
        // 判断目标区域的二级菜单是否已经存在拖拽对象
        const result = this.resultArr[index].seconds.filter(item => item.id === this.moveItem.element.id)
        //  对象不存在, 原来就有一个，在加上新拖拽的就是两个
        if (result.length < 2) {
          return
        }
        // 对象存在,删除新增对象
        this.resultArr[index].seconds.splice(e.newDraggableIndex, 1)
      } else {
        const result = this.submenus.filter((item) => {
          return item.id === this.moveItem.element.id
        })
        //  对象不存在, 原来就有一个，在加上新拖拽的就是两个
        if (result.length < 2) {
          return
        }
        // 对象存在,删除新增对象
        this.submenus.splice(e.newDraggableIndex, 1)
      }
    }
  }
}
</script>

  <style scoped>
  /*被拖拽对象的样式*/
  .item {
    padding: 6px;
    background-color: #ffffff;
    border: solid 2px #ffffff;
    margin-bottom: 10px;
    cursor: move;
  }

  .unmover {
    background-color: #C0C4CC;
    border: solid 2px #C0C4CC;
    margin-bottom: 10px;
    cursor: not-allowed;
  }

  /*选中样式*/
  .chosen {
    border: solid 2px #3089dc !important;
  }

  .draggable_box {
    overflow: hidden;
  }

  .area {
    height: 76vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .area > .card {
    flex: 1;
  }

  .card {
    background-color: #EBEEF5;
    border-radius: 4px;
    padding: 15px;
    font-size: 14px;
    box-sizing: border-box;
  }

  .card_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #111111;
    font-size: 16px;
  }

  .result_menu_area {
    display: block;
    height: calc(76vh - 71px);
    overflow: auto;
  }

  .result_menu_area::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .result_menu_area::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #e1e1e1;
  }

  .result_menu_area::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: #f1f1f1;
  }

  .submenu_area, .result_submenu_area, .menu_area {
    display: block;
    min-height: 120px;
  }
  </style>
