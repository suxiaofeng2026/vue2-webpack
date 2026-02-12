export const textToHtml = (str) => {
  str = str.replace(/\n/g, '<br/>')
  str = str.replace(/ /g, '&nbsp')
  return str
}

export const filterArr = (target, init = []) => {
  target.forEach(item => {
    if (item.children.length !== 0) {
      init.push({ id: item.id, name: item.name, children: [] })
      filterArr(item.children, init[init.length - 1].children)
    } else {
      init.push({ id: item.id, name: item.name })
    }
  })
  return init
}

export function defer (maxFrameCount = 1000) {
  let frameCount = 0
  const refreshFrameCount = () => {
    requestAnimationFrame(() => {
      frameCount++// 计数帧数加一
      if (frameCount < maxFrameCount) {
        refreshFrameCount()// 只要没到最大帧数就一直持续调用函数
      }
    })
  }
  refreshFrameCount()
  return function (showInframeCoount) {
    return frameCount >= showInframeCoount// 判断当前渲染帧数又是否大于自定义n
  }
}

export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0; var v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
  