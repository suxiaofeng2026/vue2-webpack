<template>
    <!-- 拖动右边距改变div宽度 -->
    <div :id="`height${moveId}`" class="y-handle" @mousedown="mouseDown"></div>
   </template>

<script>
export default {
  name: 'ChangeHeight',
  props: ['index', 'moveId'],
  data () {
    return {
      lastY: ''
    }
  },

  created () {
    document.addEventListener('mouseup', this.mouseUp)
  },

  destroyed () {
    document.removeEventListener('mouseup', this.mouseUp)
  },

  methods: {
    mouseDown (event) {
      document.addEventListener('mousemove', this.mouseMove)
      this.lastY = event.screenY
    },
    mouseMove (e) {
      console.log(e, '+__')
      this.$emit('heightChange', { height: e.screenY - this.lastY, index: this.index })
      this.lastY = e.screenY
    },
    mouseUp () {
      this.lastY = ''
      document.removeEventListener('mousemove', this.mouseMove)
      this.$emit('clearEvent')
    }
  }
}
</script>
   <style lang="less" scoped>
   .y-handle {
    width: 30px;
    cursor: n-resize;
    background: #2866f0;
    height: 5px;
    position: absolute;
    left: 40%;
    bottom: 0;
   }
   </style>
