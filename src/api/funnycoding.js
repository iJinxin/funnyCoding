// funnyCoding module
import request from '@/utils/request'
import api from './api'

// ==== 弹幕 ==== //
// 获取弹幕
export const queryBarrages = () => {
  return request({
    url: api.query_barrages,
    method: 'get'
  })
}

export const addBarrage = (barrage) => {
  return request({
    url: api.add_barrage,
    method: 'post',
    barrage
  })
}
// ==== end ==== //