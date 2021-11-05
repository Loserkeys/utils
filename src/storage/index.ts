/**
 *  本文件 为操作本地数据的集合
 *
 * */

/**
 * @desc 存储localStorage
 * @param key
 * @param value
 * @param expired 过期时间 ms 级别
 * @returns
 */
 export const setLocalStorage = (key: any, value: any, validTime?: number) => {
  if (!key) return
  let source = {}
  let __expired = {}
  if (validTime) {
    __expired = Date.now() + validTime
  } else {
    __expired = 0
  }
  source = {
    value,
    __expired,
  }
  window.localStorage.setItem(key, JSON.stringify(source))
}
/**
 * 获取localStorage
 */
export const getLocalStorage = (key: any) => {
  if (!key) return
  const sourceData = window.localStorage.getItem(key)
  if (!sourceData) return null
  const { value, __expired } = JSON.parse(sourceData)
  if (__expired < Date.now() && __expired !== 0) {
    removeLocalStorage(key)
    return null
  }
  return value
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = (key: any) => {
  if (!key) return
  window.localStorage.removeItem(key)
}

/**
 * 存储sessionstorage
 */
export const setSessionStorage = (key: any, value: any) => {
  if (!key) return
  const source = {
    value,
  }
  window.sessionStorage.setItem(key, JSON.stringify(source))
}
/**
 * 获取sessionstorage
 */
export const getSessionStorage = (key: any) => {
  if (!key) return
  const sourceData = window.sessionStorage.getItem(key)
  if (!sourceData) return null
  const { value } = JSON.parse(sourceData)
  return value
}

/**
 * 删除sessionstorage
 */
export const removeSessionStorage = (key: any) => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}
