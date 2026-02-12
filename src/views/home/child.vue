<template>
  <div>
    <ul class="tree">
      <li v-for="(item, index) in treeListData" :key="index" :class="[item.isOpen ? 'open' : 'close', item.children && item.children.length ? '' : 'no-children']">
        <span @click="treeItem(item)">
<!--          <input type="text" v-model="item.label">-->
          <component :is="cName" v-model="item.label"></component>

          </span>
        <Ptree :treeListData="item.children"></Ptree>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.tree{
  margin-left: 50px;
}
</style>
<script>
import textInput from './input'
export default {
  name: 'Ptree',
  props: [ 'treeListData' ],
  components: {
    textInput
  },
  data () {
    return {
      cName: 'textInput',
      input: 'input'
    }
  },
  methods: {
    treeItem (item) {
      item.isOpen = !item.isOpen
    }
  }
}
</script>
