<template>
<div >
根据id查询父级路径
{{parentPath}}
</div>
</template>
<script>

export default {

  data () {
    return {
      parentPath: [],
      treeList: [{
        id: 11,
        pid: 'a1',
        text: 11,
        children: [{
          id: 21,
          pid: 'b1',
          text: 21,
          children: [{
            id: 31,
            pid: 'c1',
            text: 31,
            children: [{
              id: 41,
              pid: 'd1',
              text: 41,
              children: []
            },
            {
              id: 42,
              pid: 'd2',
              text: 42,
              children: []
            }
            ]
          },
          {
            id: 32,
            pid: 'c2',
            text: 32,
            children: []
          }
          ]
        },
        {
          id: 22,
          pid: 'b2',
          text: 22,
          children: []
        }
        ]
      },
      {
        id: 12,
        pid: 'a2',
        text: 12,
        children: []
      }
      ],

      value: '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。'
    }
  },

  methods: {

    findIndexArray (data, id, indexArray) {
      let arr = Array.from(indexArray)
      for (let i = 0, len = data.length; i < len; i++) {
        arr.push({ id: data[i].id, pid: data[i].pid, text: data[i].text })
        if (data[i].id === id) {
          return arr
        }
        let children = data[i].children
        if (children && children.length) {
          let result = this.findIndexArray(children, id, arr)
          if (result) return result
        }
        arr.pop()
      }
      return false
    }
  },
  created () {
    this.parentPath = this.findIndexArray(this.treeList, 32, [])
    // console.log(this.findIndexArray(this.treeList, 1, []).map(item => { item.text = item.text + 'zzm'; return item.text }))
  }
}
</script>
