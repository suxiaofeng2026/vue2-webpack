<template>
  <div class="area card">
    <!-- <el-col :span="12">
          <div class="area card">
            <div class="card_top">
              <div class="title">权限分配结果</div>
            </div> -->
    <draggable
      v-model="resultArr"
      chosenClass="chosen"
      forceFallback="true"
      :group="{ name: 'first', pull: true, put: true }"
      animation="100"
      @start="onStart"
      @end="onEnd"
    >
      <transition-group class="result_menu_area">
        <div
          v-for="(firstEl, index) in resultArr"
          :key="firstEl.id + 'firstEl'"
        >
          <div class="item">
            <div>{{ firstEl.name }}</div>
            <draggable
              v-model="firstEl.seconds"
              chosenClass="chosen"
              forceFallback="true"
              :group="{ name: 'second', pull: true, put: true, index }"
              dataIdAttr="data-id"
              animation="100"
              @start="onStart"
              @end="onEnd"
            >
              <transition-group class="result_submenu_area" :index="index">
                <div
                  class="item"
                  v-for="secondEl in firstEl.seconds"
                  :key="secondEl.id + 'secondEl'"
                >
                  <div>{{ secondEl.name }}</div>

                  <draggable
                    v-model="secondEl.seconds"
                    chosenClass="chosen"
                    forceFallback="true"
                    :group="{ name: 'third', pull: true, put: true, index }"
                    dataIdAttr="data-id"
                    animation="100"
                    @start="onStart"
                    @end="onEnd"
                  >
                    <transition-group
                      class="result_submenu_area"
                      :index="index"
                    >
                      <div
                        class="item"
                        v-for="thirdEl in secondEl.seconds"
                        :key="thirdEl.id + 'thirdEl'"
                      >
                        <div>{{ thirdEl.name }}</div>
                      </div>
                    </transition-group>
                  </draggable>
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>
      </transition-group>
    </draggable>

    <!-- </div>
        </el-col> -->
    <pre>
                 {{ resultArr }}
            </pre
    >
  </div>
</template>
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
  background-color: #c0c4cc;
  border: solid 2px #c0c4cc;
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
  background-color: #ebeef5;
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

.submenu_area,
.result_submenu_area,
.menu_area {
  display: block;
  // min-height: 120px;
}
</style>

<script>
import draggable from "vuedraggable";
export default {
  //注册draggable组件
  components: {
    draggable
  },
  data() {
    return {
      drag: false,
      resultArr: [
        {
          id: 3,
          name: "一级菜单3",
          type: 1,
          seconds: [
            {
              id: 4,
              name: "二级菜单4",
              type: 2
            },
            {
              id: 2,
              name: "二级菜单2",
              type: 2
            }
          ],
          disabled: true
        },
        {
          id: 1,
          name: "一级菜单1",
          type: 1,
          seconds: [],
          disabled: true
        }
      ]
    };
  },

  created() {},
  mounted() {},
  methods: {
    dataFilter(val) {},
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
    //move回调方法
    onMove(e, originalEvent) {
      this.moveItem = e.draggedContext.element; //拖拽对象
      //false表示阻止拖拽
      return true;
    }
  }
};
</script>
