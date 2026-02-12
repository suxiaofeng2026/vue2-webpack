<template>
    <div>
      <button @click="startStream">开始流式请求</button>
      <div v-for="(chunk, index) in chunks" :key="index">{{ chunk }}</div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      chunks: []
    }
  },
  methods: {
    startStream () {
      const eventSource = new EventSource('/api/stream.php')
      eventSource.onmessage = (event) => {
        console.log('接收到数据:', event.data)
        this.chunks.push(event.data)
      }
      eventSource.onerror = (error) => {
        console.error('流式请求错误:', error)
        eventSource.close()
      }
    }
  }
}
</script>
