<template>
    <!-- 拖动右边距改变div宽度 -->
    <div :id="`widthAndHeight${moveId}`" class="xy-handle" @mousedown="mouseDown" ></div>
   </template>

<script>
export default {
  name: 'ChangeWidthAndHeight',
  props: ['index', 'moveId'],
  data () {
    return {
      lastX: ''
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
      this.lastX = event.screenX
      this.lastY = event.screenY
    },
    mouseMove (e) {
      this.$emit('widthAndHeightChange', { width: e.screenX - this.lastX, height: e.screenY - this.lastY, index: this.index })
      this.lastX = e.screenX

      this.lastY = e.screenY
    },
    mouseUp () {
      this.lastX = ''
      document.removeEventListener('mousemove', this.mouseMove)
      this.$emit('clearEvent')
    }
  }
}
</script>
   <style lang="less" scoped>
   .xy-handle {
    width: 8px;
    cursor: nwse-resize;
    background: #2866f0;
    height: 8px;
    position: absolute;
    bottom: 0;
    right: 0;
   }
   </style>
