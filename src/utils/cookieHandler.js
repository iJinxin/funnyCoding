/**
 * cookie处理类
 * 默认cookie存储时间为一天
 */

class CookieHandler {
  static get(key) {
    let start = document.cookie.indexOf(`${key}=`);
    if (start !== -1) {
      start = start + key.length + 1;
      let end = document.cookie.indexOf(',', start);
      if (end === -1) {
        end = document.cookie.length;
      }
      return decodeURIComponent(document.cookie.substring(start, end));
    }
    return undefined;
  }
  static set(key, value, expireTime) {
    if (!key) {
      throw new Error('cookie name not found');
    } else if (/^(?:expires|max-age|path|domain|secure)$/i.test(key)) {
      throw new Error(`cookie key name illegality, can not be set to ['expires','max-age','path','domain','secure'], current key name: ${key}`);
    }
    let expires = `; max-age=${24 * 60 * 60}`; // default 1 day
    if (expireTime) {
      if (expireTime === Infinity || expireTime === -1) {
        expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
      } else {
        expires = `; max-age=${expireTime}`;
      }
    }
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}${expires}`;
    return this;
  }
  static remove(key) {
    if (key) {
      document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    return this;
  }
}

export default CookieHandler;
