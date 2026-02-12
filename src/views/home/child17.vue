<template>
  <div>
    <ul class="tree">
      <li v-for="(item, index) in treeListData" :key="index" >
          <component :is="item.cType" v-model="item.value"></component>
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
import textInput from '@/components/basicComponent/TextInput'
import timeSelector from '@/components/basicComponent/TimeSelector'
export default {
  name: 'Ptree',
  props: [ 'treeListData' ],
  components: {
    textInput, timeSelector
  },
  data () {
    return {
      input: 'input'
    }
  },
  methods: {
  }
}
</script>
