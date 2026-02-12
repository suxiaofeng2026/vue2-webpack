<script>
export default {
  props: {
    fatherid: {
      type: Number,
      default: 0
    }
  },
  methods: {
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
    let todoList = todos.map(item => {
      return createElement('div',
        {
          class: {
            btn: true,
            red: this.fatherid === 111
          },
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

    console.log(createElement())
    return createElement('div', todoList)
  }
}
</script>
<style>
    .btn{border-bottom:1px solid green}
    .red{color:red}
</style>
