import request from '@/libs/utils.requset'
export function GetList (query) {
  // return request({
  //   url: '/show/page.json',
  //   method: 'get',
  //   data: query
  // })

  return request({
    url: '/index/admin/list',
    method: 'get',
    params: query
  }).then(ret => {
    // 在这里改造成crud所需要的结果
    console.log(ret, '=========')
    console.log(query)
    // ret.data = ret.data ? ret.data : {}
    // ret.data.current = 当前页码
    // ret.data.size = 当前每页条数
    // ret.data.total = 总记录数
    // ret.data.records = 列表数据
    ret.data.pageIndex = query.pageIndex // 当前页码 ret.data.current
    ret.data.size = query.pageSize
    console.log(ret)
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: '/show/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: '/show/update',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/show/delete',
    method: 'post',
    data: { id }
  })
}
export function GetCascadeData () {
  return request({
    url: '/show/cascadeData',
    method: 'get'
  })
}
