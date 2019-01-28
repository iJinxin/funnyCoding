import Mock from 'mockjs'
import UserApi from './user'
import funnyCodingApi from './funnyCoding'

// 用户登录
Mock.mock(/\/user\/login/, 'post', UserApi.loginByUsername)

// funnycoding
Mock.mock(/\/funnycoding\/queryBarrages/, 'get', funnyCodingApi.queryBarrages)
Mock.mock(/\/funnycoding\/addBarrage/, 'post', funnyCodingApi.addBarrage)

export default Mock