<template>
    <div >
      图片懒加载
      <img v-lazy="imgUrl" alt="我是图片">

      <pre>
          是因为该 模块 版本问题， 可安装低版本的 vue-lazyload 来解决该问题：

          # 先写在原有的安装
          npm uninstall vue-lazyload --save

          # 再安装低版本的
          npm install vue-lazyload@1.3.3 --save
      </pre>

      <form-create v-model="formJsonContainer" :rule="rule" @on-submit="onSubmit" @on-reset="onSubmit"></form-create>
      <span @click="addComponent">新增控件</span>
      <button @click="getAjax">请求示例</button>
    </div>
  </template>
<script>
import formCreate from '@form-create/element-ui'
export default {
  data () {
    return {
      imgUrl: '/img/1.png',
      // 表单实例对象
      formJsonContainer: {},
      // 表单生成规则
      rule: [
        {
          type: 'input',
          field: 'goods_name',
          title: '商品名称'
        },
        {
          type: 'datePicker',
          field: 'created_at',
          title: '创建时间'
        },
        {
          type: 'autoComplete',
          title: '自动完成',
          field: 'auto',
          value: 'xaboy',
          props: {
            'fetchSuggestions': function (queryString, cb) {
              cb([
                { value: queryString }, { value: queryString + queryString }
              ])
            }
          }
        }
      ]
    }
  },
  components: {
    formCreate: formCreate.$form()
  },
  created () {

  },
  mounted () {
    console.log(this.$, '-------')
  },
  methods: {
    getAjax () {
      let that = this
      //   http://localhost/index/index/stream
      that.$http.get('api/index/index/stream', {})
        .then(function (response) {
          console.log(response)
          console.log(response.data)
          console.log(response.data.age)
          //   console.log(response.data.ID)
        })
    },
    addComponent () {
      this.formJsonContainer.append({
        type: 'input',
        title: '商品简介',
        field: 'goods_info',
        value: '',
        props: {
          'type': 'text',
          'placeholder': '请输入商品简介'
        },
        validate: [
          { required: true, message: '请输入商品简介', trigger: 'blur' }
        ]
      })
    },
    onSubmit (formData) {
      console.log(formData)
      // TODO 提交表单
    }
  }
}
</script>
