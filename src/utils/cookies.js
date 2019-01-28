// global cookie handler
import Cookie from 'js-cookie'

// ==== Authorization ==== //
const tokenKey = 'TOKEN'

export const getToken = () => {
  return Cookie.get(tokenKey)
}

export const setToken = (token) => {
  return Cookie.set(tokenKey, token)
}

export const removeToken = () => {
  return Cookie.remove(tokenKey)
}
// ==== end Authorization ==== //

// ==== User ==== //
const USERNAME = 'USERNAME'

export const getUsername = () => {
  return Cookie.get(USERNAME)
}

export const setUsername = (username) => {
  return Cookie.set(USERNAME, username)
}

export const removeUsername = () => {
  return Cookie.remove(USERNAME)
}
// ==== end User ==== //