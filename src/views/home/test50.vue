<template>
  <div class="home">
    <div id="box" v-drag v-for="i in 4"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {}
  },
  directives: {
    drag: {
      // 指令的定义
      inserted: function (el) {
        // el.drag();
        console.log(el)
        // 获取元素
        let x = 0
        let y = 0
        let l = 0
        let t = 0
        let isDown = false
        // 鼠标按下事件
        el.onmousedown = function (e) {
          // 获取x坐标和y坐标
          x = e.clientX
          y = e.clientY

          // 获取左部和顶部的偏移量
          l = el.offsetLeft
          t = el.offsetTop
          // 开关打开
          isDown = true
          // 设置样式
          el.style.cursor = 'move'
          // 鼠标移动
          window.onmousemove = function (e) {
            if (isDown == false) {
              return
            }
            // 获取x和y
            let nx = e.clientX
            let ny = e.clientY
            // 计算移动后的左偏移量和顶部的偏移量
            let nl = nx - (x - l)
            let nt = ny - (y - t)

            el.style.left = nl + 'px'
            el.style.top = nt + 'px'
          }
        }
        // 鼠标抬起事件
        el.onmouseup = function () {
          // 开关关闭
          isDown = false
          el.style.cursor = 'default'
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
#box {
  width: 60px;
  height: 60px;
  background-color: darkorange;
  border-radius: 50%;
  position: absolute;
  //脱离文档流
}
</style>
