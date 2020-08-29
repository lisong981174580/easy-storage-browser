/**
 * @desc 在浏览器中临时保存同一窗口(或标签页) key/value 对的数据，即对 sessionStorage 再封装
 * @param {string} key 
 * @param {string|number|boolean|object|array} value
 * @param {string} personal 可选参数，作为身份标识，如果设置了 personal，取值也需要传 personal
 * @returns {void}
 */
export function setSessionStorage(
  key: string, 
  value: string|number|boolean|object|any[], 
  personal?: string,
): void {
  if (typeof value === 'function' || value == null) {
    throw new Error('不支持 function、null、undefined 类型');
  }

  window.sessionStorage.setItem(key + personal ? '_' + personal : '', JSON.stringify(value));
}

/**
 * @desc 取 setSessionStorage 存储的值
 * @param {string} key 
 * @param {string} personal 可选参数，作为身份标识，如果 setSessionStorage 传了 personal，则此处必填
 * @returns {any}
 */
export function getSessionStorage(key: string, personal?: string): any {
  // @ts-ignore
  return JSON.parse(window.sessionStorage.getItem(key + personal ? '_' + personal : ''));
}

/**
 * @desc 删除 setSessionStorage 存储的某个值
 * @param {string} key 
 * @param {string} personal 可选参数，作为身份标识，如果 setSessionStorage 传了 personal，则此处必填
 * @returns {void}
 */
export function removeSessionStorage(key: string, personal?: string): void {
  window.sessionStorage.removeItem(key + personal ? '_' + personal : '');
}

/**
 * @desc 删除 setSessionStorage 存储的所有值
 * @returns {void}
 */
export function clearSessionStorage(): void {
  window.sessionStorage.clear();
}