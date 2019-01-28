import Mock from 'mockjs'
import UserApi from './user'

// 用户登录
Mock.mock(/\/user\/login/, 'post', UserApi.loginByUsername)

export default Mock