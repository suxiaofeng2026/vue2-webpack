// export * as storage from "./utils.storage";

/**
 * @description 更新标题
 * @param {String} titleText 标题
 */
export const updateTitle = (titleText) => {
  const processTitle = process.env.VUE_APP_TITLE || '智能共模分析系统'
  window.document.title = `${processTitle}${
    titleText ? ` | ${titleText}` : ''
  }`
}

export const openLink = function (url) {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'lwadmin-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('lwadmin-link-temp'))
}

export const downloadFile = (url, fileName) => {
  const link = document.createElement('a')
  link.href = url
  link.download = decodeURI(fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const sleepFunc = (time = 800) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
