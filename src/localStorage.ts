/**
 * @desc 在浏览器中长久存储 key/value 对的数据，即对 localStorage 再封装
 * @param {string} key 
 * @param {string|number|boolean|object|array} value
 * @param {string} personal 可选参数，作为身份标识，如果设置了 personal，取值也需要传 personal
 * @returns {void}
 */
export function setLocalStorage(
  key: string, 
  value: string|number|boolean|object|any[], 
  personal?: string,
): void {
  if (typeof value === 'function' || value == null) {
    throw new Error('不支持 function、null、undefined 类型');
  }

  window.localStorage.setItem(key + personal ? '_' + personal : '', JSON.stringify(value));
}

/**
 * @desc 取 setLocalStorage 存储的值
 * @param {string} key 
 * @param {string} personal 可选参数，作为身份标识，如果 setLocalStorage 传了 personal，则此处必填
 * @returns {any}
 */
export function getLocalStorage(key: string, personal?: string): any {
  // @ts-ignore
  return JSON.parse(window.localStorage.getItem(key + personal ? '_' + personal : ''));
}

/**
 * @desc 删除 setLocalStorage 存储的某个值
 * @param {string} key 
 * @param {string} personal 可选参数，作为身份标识，如果 setLocalStorage 传了 personal，则此处必填
 * @returns {void}
 */
export function removeLocalStorage(key: string, personal?: string): void {
  window.localStorage.removeItem(key + personal ? '_' + personal : '');
}

/**
 * @desc 删除 setLocalStorage 存储的所有值
 * @returns {void}
 */
export function clearLocalStorage(): void {
  window.localStorage.clear();
}