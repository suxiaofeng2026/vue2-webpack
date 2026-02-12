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
/*
按照等长拆分字符串为数组
*/
export const splitByString = (str, strSize) => {
  const strArray = []
  let tempStr = ''
  let tempStrLength = 0
  for (let i = 0; i < str.length; i++) {
    const iCount = getBytesCount(str[i]) // 获取当前字符的字节长度
    if (tempStrLength + iCount <= strSize) {
      tempStr += str[i]
      tempStrLength += iCount
    } else {
      strArray.push(tempStr)
      tempStr = str[i]
      tempStrLength = iCount
    }
  }
  if (tempStr.length > 0) {
    strArray.push(tempStr)
  }

  return strArray
}

export const getBytesCount = (str) => {
  let bytesCount = 0
  if (str != null) {
    for (let i = 0; i < str.length; i++) {
      const c = str.charAt(i)
      if (c.match(/[^\x00-\xff]/gi) != null) {
        bytesCount += 2 // 全角
      } else {
        bytesCount += 1
      }
    }
  }
  return bytesCount
}
