// user module
import request from '@/utils/request'
import api from './api'

export const userLogin = (userInfo) => {
  const data = {
    username: userInfo.username,
    password: userInfo.password
  }
  return request({
    url: api.login,
    method: 'post',
    data
  })
}