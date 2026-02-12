<template>
  <div class="custom">
      <!-- <pre>
      {{postJson}}
    </pre> -->
    <!-- <button @click="getSubmitJson()">获取json键值对</button>
    <button @click="change()">change</button> -->
    <Ptree :treeListData="treeData" class="treeContainer"></Ptree>
  </div>
</template>
<style lang="less">
.treeContainer{
  position: relative;
  margin-left: -180px;
}
</style>
<script>
import bus from './bus'
import Ptree from './child22'
export default {
  data () {
    return {
      postJson: {},
      treeData: [
        {
          isOpen: false,
          label: '一级01',
          name: 'name1',
          value: '2020-01-10',
          cType: 'textInput',
          children: [
            {
              isOpen: false,
              label: '二级01',
              value: '1-1',
              name: 'name11',
              cType: 'textInput',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  value: '1-1-1',
                  name: 'name111',
                  cType: 'textInput',
                  children: [
                    {
                      isOpen: false,
                      cType: 'textInput',
                      label: '四级',
                      value: '1-1-1-1',
                      name: 'name1111',
                      children: [
                        {
                          isOpen: false,
                          label: '五级',
                          cType: 'textInput',
                          value: '1-1-1-1-1',
                          name: 'name11111',
                          children: [
                            {
                              isOpen: false,
                              label: '六级',
                              cType: 'textInput',
                              name: 'name111111',
                              value: '1-1-1-1-1-1',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              isOpen: false,
              label: '二级02',
              cType: 'textInput',
              name: 'name12',
              value: '1-2',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  cType: 'textInput',
                  name: 'name121',
                  value: '1-2-1',
                  children: []
                }
              ]
            }
          ]
        },
        {
          isOpen: false,
          label: '一级02',
          cType: 'textInput',
          name: 'name2',
          value: '乱七八糟乱七八糟乱七八糟乱七八糟乱七八糟',
          children: [
            {
              isOpen: false,
              label: '二级01',
              cType: 'textInput',
              name: 'name21',
              value: '2-1',
              children: []
            },
            {
              isOpen: false,
              label: '二级02',
              cType: 'textInput',
              name: 'name211',
              value: '2-1-1',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  name: 'name2111',
                  value: '2020-01-05',
                  cType: 'textInput',
                  children: []
                }
              ]
            }
          ]
        },
        {
          isOpen: false,
          label: '一级03',
          cType: '乱七八糟',
          name: '乱七八糟',
          value: 'dgfgdfg',
          children: []
        }
      ],
      treeData22: [
        {
          isOpen: false,
          label: 'hkkkkkkkkkff',
          name: 'name1',
          value: 'hkkkkkkkkkff10',
          cType: 'textInput',
          children: [
            {
              isOpen: false,
              label: '二级01',
              value: '1-1',
              name: 'name11',
              cType: 'textInput',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  value: '1-1-1',
                  name: 'name111',
                  cType: 'textInput',
                  children: [
                    {
                      isOpen: false,
                      cType: 'textInput',
                      label: '四级',
                      value: '1-1-1-1',
                      name: 'name1111',
                      children: [
                        {
                          isOpen: false,
                          label: '五级',
                          cType: 'textInput',
                          value: '1-1-1-1-1',
                          name: 'name11111',
                          children: [
                            {
                              isOpen: false,
                              label: '六级',
                              cType: 'textInput',
                              name: 'name111111',
                              value: '1-1-1-1-1-1',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              isOpen: false,
              label: '二级02',
              cType: 'textInput',
              name: 'name12',
              value: '1-2',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  cType: 'textInput',
                  name: 'name121',
                  value: '1-2-1',
                  children: []
                }
              ]
            }
          ]
        },
        {
          isOpen: false,
          label: '一级02',
          cType: 'textInput',
          name: 'name2',
          value: '乱七八糟乱七八糟乱七八糟乱七八糟乱七八糟',
          children: [
            {
              isOpen: false,
              label: '二级01',
              cType: 'textInput',
              name: 'name21',
              value: '2-1',
              children: []
            },
            {
              isOpen: false,
              label: '二级02',
              cType: 'textInput',
              name: 'name211',
              value: '2-1-1',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  name: 'name2111',
                  value: '2020-01-05',
                  cType: 'textInput',
                  children: []
                }
              ]
            }
          ]
        },
        {
          isOpen: false,
          label: '一级03',
          cType: '乱七八糟',
          name: '乱七八糟',
          value: 'dgfgdfg',
          children: []
        }
      ]
    }
  },
  components: {
    Ptree
  },
  mounted () {
    bus.$on('post-message', (msg) => {
      console.log(msg)
      this.outPut()
    })
  },
  methods: {
    change () {
      this.treeData = this.treeData22
    },
    outPut () {
      console.log('zzz')
    },
    getSubmitJson () {
      const filterArr = (target, init = []) => {
        target.forEach(item => {
          console.log(item.children)
          if (item.children) {
            init.push({ 'value': item.value, children: [] })
            filterArr(item.children, init[init.length - 1].children)
          } else {
            init.push({ 'value': item.value })
          }
        }); return init
      }
      this.postJson = filterArr(this.treeData)
      // console.log(filterArr(this.treeData))
    },
    goUrl () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
