<template>
  <div class="treeMainContainer">
    <ul class="tree">
      <li v-for="(item, index) in treeListData" :key="index" >
        <div @click="show(item)" :title="item.value" :class="{active:item.isOpen}">
          <i class="el-icon-caret-right" v-if="item.children.length!==0" ></i>
          <span>{{item.value}}{{item.isOpen}}</span>
          </div>
        <Ptree :treeListData="item.children" v-if="item.isOpen && item.children.length!==0"></Ptree>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from './bus'
export default {
  name: 'Ptree',
  props: [ 'treeListData' ],
  data () {
    return {
      input: 'input'
    }
  },
  methods: {
    closeAllChild (target) {
      target.forEach(item => {
        console.log(item.children.length)
        if (item.children.length !== 0) {
          this.closeAllChild(item.children)
        }
        item.isOpen = false
      }
      )
    },
    show (item) {
      this.closeAllChild(this.treeListData)
      item.isOpen = true
      bus.$emit('post-message', item.value)
    }
  }
}
</script>
