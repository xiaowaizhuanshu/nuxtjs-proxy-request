/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
 import { Message } from 'element-ui'  //引用饿了么UI消息组件
 import axios from 'axios' //引用axios
 import { showNotify } from 'vant'
 
 // create an axios instance
 const service = axios.create({
   withCredentials: true, // send cookies when cross-domain requests
   timeout: 5000 // request timeout
 })
 
 // request interceptor
 service.interceptors.request.use(
   config => {
     // do something before request is sent
     // config.headers['-Token'] = getToken()
     return config
   },
   error => {
     // do something with request error
     console.log(error) // for debug
     return Promise.reject(error)
   }
 )
 
 // response interceptor
 service.interceptors.response.use(
   response => {
    let res = {}
    if (response.config.userHeader) {
      res = response
    } else {
      res = response.data
    }
    const statusCode = response.statusCode
    // 自定义状态码
    if (statusCode !== 200) {
      if (statusCode === 403) {
        showNotify({ type: 'danger', message: res.data.msg || '权限不足' })
      } else if (statusCode === 401) {
        showNotify({ type: 'danger', message: res.msg || '授权失败' })
      } else if ((statusCode === 500) | (statusCode === 400)) {
        showNotify({ type: 'danger', message: res.data.msg || 'Error' })
        return res
      } else {
        return res
      }
    } else {
      return res
    }
   },
   error => {
    console.error('response:', error) // for debug
    if (error.response && error.response.status === 500) {
      showNotify({ type: 'danger', message: error.response.data.msg })
    } else if (error.response && error.response.status === 401) {
      showNotify({ type: 'danger', message: '授权失败' })
      localStorage.removeItem('openId')
      Cookies.remove('openId')
    } else {
      showNotify({ type: 'danger', message: error.response.data.msg || error.msg })
    }
    return Promise.reject(error)
  }
 )
 
 export default service //导出封装后的axios