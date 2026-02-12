
import _ from 'lodash'
/*
element-ui 表单自定义验证规则
1.检测是否全为空格
2.检测是否含有特殊字符
*/
export const checkStr = (rule, value, callback) => {
  if (!_.trim(value)) {
    return callback(new Error('数据不能为空或者全部为空格'))
  } else {
    if (hasSpecialCharacters(value)) {
      callback(new Error('数据包含有特殊字符'))
    } else {
      callback()
    }
  }
}
/*
检测是否含有特殊字符
*/
export const hasSpecialCharacters = (str) => {
  // 根据实际情况 自己添加相关特殊字符
  let regEn = /[`!@#$%^&*()_+<>?:"{},./;'[]/im
  let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[]/im
  if (regEn.test(str) || regCn.test(str)) {
    return true
  } else {
    return false
  }
}
/*
去掉收尾空格
*/
export const trimStr = (str) => {
  return _.trim(str)
}
/*
过滤一层Json中数据前后空格
*/
export const trimJson = (jsonArr) => {
  let newJson = {}
  for (let keyName in jsonArr) {
    newJson[keyName] = _.trim(jsonArr[keyName])
  }
  return newJson
}
