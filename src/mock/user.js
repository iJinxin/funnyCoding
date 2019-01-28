const userMap = {

}

export default {
  loginByUsername: config => {
    // 直接通过并返回token  
    const { username, password } = JSON.parse(config.body)
    // 如何生成标准token，todo
    const response = {
      token: `${username}-token`
    }
    return response
  },
  getUserInfo: config => {
    
  }
}