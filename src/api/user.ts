import request from '@/utils/request.js'


interface UserInfo {
  username: string,
  password: string
}
// export function login(userInfo: UserInfo) {
//   return request({
//     url: "/api",
//     method: "post",
//     userInfo
//   })
// }

export function logout(data: object) {
  return request({
    url: "",
    method: "post",
    data
  })
}