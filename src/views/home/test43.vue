<script>
 import draggable from 'vuedraggable'
export default {
    components: {
      draggable,
    },
  props: {
    fatherid: {
      type: Number,
      default: 0
    }
  },
  data () {
      return {
        drag: false,
        resultArr:  [
  {
    "id": 3,
    "name": "一级菜单3",
    "type": 1,
    "seconds": [
      {
        "id": 4,
        "name": "二级菜单4",
        "type": 2
      },
      {
        "id": 2,
        "name": "二级菜单2",
        "type": 2
      }
    ],
    "disabled": true
  },
  {
    "id": 1,
    "name": "一级菜单1",
    "type": 1,
    "seconds": [],
    "disabled": true
  }
]
        
      }
    },
  methods: {
    onStart() {
        this.drag = true;
      },
      //拖拽结束事件
      onEnd() {
        this.drag = false;
      },
      //move回调方法
      onMove(e, originalEvent) {
        this.moveItem = e.draggedContext.element   //拖拽对象
        //false表示阻止拖拽
        return true;
      },

    handleClick () {
      console.log('-----------------')
      this.$emit('fathermethod', '我是子组件的数据')
    }
  },
  render (createElement) {
    let todos = [
      { text: 'child1' },
      { text: 'child2' },
      { text: 'child3' }
    ]
    let todoList = todos.map((item,index) => {
      return createElement('div',
        {
          class: {
            btn: true,
            red: this.fatherid === 111
          },
          key:index,
          on: {
            click: this.handleClick
            //  mouseover:this.handleClick
          },
          style: {
            fontSize: '20px'
          }

        }
        , item.text + this.fatherid)
    })

    
    let transitionGroup =  [createElement('transition-group',{key:"12"} , todoList)]
    return createElement('draggable', {
          class: {
            area: true,
            card: true
          },
           

        },transitionGroup)
  }
}
</script>
<style lang="less">
 
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
  // min-height: 120px;
}
</style>
