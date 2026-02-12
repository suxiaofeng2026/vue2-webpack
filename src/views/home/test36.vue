<template>
  <div>
    <i v-for="index of 10000" :key="index">
    <span v-if='defer(500)'
      :key="index"
    >
    {{ index }}
    </span>
  </i>
  </div>
</template>

<script>
import { defer } from '@/utils/common.js'
export default {

  data () {
    return {

    }
  },
  methods: {

    defer (n) {
      return defer(n)
    }
  }
}
</script>
