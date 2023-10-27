// 私有接口部分
import request from './request'
export const getAdressInfo = function (params) {
    return request({
        url: '/api/h5/vip/channel/share/history',
        method: 'GET',
        params
    })
  }
