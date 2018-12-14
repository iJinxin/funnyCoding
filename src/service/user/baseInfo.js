import cookieHandler from '@/utils/cookieHandler';

export const isLogin = function isLogin() {
  const userId = cookieHandler.get('USER_ID');
  return userId !== null && userId !== undefined;
};

export const isLogin2 = function isLogin2() {
  const userId = cookieHandler.get('USER_ID');
  return userId !== null && userId !== undefined;
};

export const login = function login(userInfo, token) {
  cookieHandler.set('TOKEN', token)
    .set('USER_ID', userInfo.id)
    .set('USER_ACCOUNT', userInfo.account);
};

export const logout = function logout() {
  cookieHandler.remove('TOKEN')
    .remove('USER_ID')
    .remove('USER_ACCOUNT');
};
