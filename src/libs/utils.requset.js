import axios from 'axios'
import { Message } from 'element-ui'
// import { storage, downloadFile } from "@/libs/utils";
// import store from "@/store";
import qs from 'qs'

const errorHandler = (error) => {
  if (error.response) {
    // const { status, data } = error.response
    // switch (status) {
    //   case 401: {
    //     Message.error("该账号已经重新登录,Token信息已失效");
    //     const token = storage.get(storage.token);
    //     if (token) {
    //       store.dispatch("logout");
    //     }
    //     break;
    //   }
    //   case 500:
    //     Message.error("服务器内部错误");
    //     break;
    //   default:
    //     Message.error(data.message || data.error);
    // }
  }
  return Promise.reject(error)
}
const service = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    // "Content-Type": "application/json",
    // "content-type":'application/x-www-form-urlencoded;charset=UTF-8'
  },
  withCredentials: false,
  timeout: 6000
})

service.interceptors.request.use((config) => {
  config.headers['token'] = 'AAAAAAAAAAA'
  if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
    config.transformRequest = [
      function (data) {
        console.log('----------')
        console.log(data)
        // data={"aa":"bb",...data}
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs
        data = qs.stringify(data)
        return data
      }
    ]
  }

  return config
}, errorHandler)

service.interceptors.response.use((response) => {
  console.log(response.config)
  // if (response.config.type === "download") {
  //   downloadFile(
  //     window.URL.createObjectURL(response.data),
  //     response.headers.filename
  //   );
  //   return Promise.resolve(response);
  // }

  const { code, msg } = response.data
  if (code === 200) {
    return Promise.resolve(response.data)
  }
  // if ([400, 401].includes(code)) {
  //   Message.error("该账号已经重新登录,Token信息已失效");
  //   store.dispatch("logout");
  //   return Promise.reject(response.data);
  // }
  Message.error(msg)
  return Promise.reject(response.data)
}, errorHandler)

export default service
