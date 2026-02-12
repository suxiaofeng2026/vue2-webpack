<template>
  <div class="custom">
    <button @click="goUrl()">返回登录</button>
    <pre>
      {{treeData}}
    </pre>
    <Ptree :treeListData="treeData"></Ptree>
  </div>
</template>
<script>
import Ptree from './child'
export default {
  data () {
    return {
      treeData: [
        {
          isOpen: false,
          label: '一级01',
          value: '1',
          children: [
            {
              isOpen: false,
              label: '二级01',
              value: '1-1',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  value: '1-1-1',
                  children: [
                    {
                      isOpen: false,
                      label: '四级',
                      value: '1-1-1-1',
                      children: [
                        {
                          isOpen: false,
                          label: '五级',
                          value: '1-1-1-1-1',
                          children: [
                            {
                              isOpen: false,
                              label: '六级',
                              value: '1-1-1-1-1'
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
              value: '1-1',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  value: '1-1-1',
                  children: []
                }
              ]
            }
          ]
        },
        {
          isOpen: false,
          label: '一级02',
          value: '1',
          children: [
            {
              isOpen: false,
              label: '二级01',
              value: '1-1',
              children: []
            },
            {
              isOpen: false,
              label: '二级02',
              value: '1-1',
              children: [
                {
                  isOpen: false,
                  label: '三级',
                  value: '1-1-1',
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    Ptree
  },
  methods: {
    goUrl () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
