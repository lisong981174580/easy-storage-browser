# easy-storage-browser
简化浏览器 localStorage、sessionStorage、cookie 存储方式，自动做 JSON.parse、JSON.stringify 且保证存储前后数据类型一致，支持私有化存储，定时存储。

## Installment

```sh
npm install easy-storage-browser --save
```

## Documentation

### localStorage

1. setLocalStorage(key: string, value: string|number|boolean|object|any[], personal?: string)
   * @desc 在浏览器中长久存储 key/value 对的数据，即对 localStorage 再封装
   * @param {string} key
   * @param {string|number|boolean|object|array} value
   * @param {string} personal 可选参数，作为身份标识，如果设置了 personal，取值也需要传 personal
   * @returns {void}

2. getLocalStorage(key: string,  personal?: string)
   * @desc 取 setLocalStorage 存储的值
   * @param {string} key
   * @param {string} personal 可选参数，作为身份标识，如果 setLocalStorage 传了 personal，则此处必填
   * @returns {any}

3. removeLocalStorage(key: string,  personal?: string)
   * @desc 删除 setLocalStorage 存储的某个值
   * @param {string} key
   * @param {string} personal 可选参数，作为身份标识，如果 setLocalStorage 传了 personal，则此处必填
   * @returns {void}

4. clearLocalStorage()
   * @desc 删除 setLocalStorage 存储的所有值
   * @returns {void}

#### Usage

```js
import { setLocalStorage, getLocalStorage, removeLocalStorage, clearLocalStorage } from 'easy-storage-browser';

// 1.不带 personal
// 存：
setLocalStorage('key1', {a: 1, b: {c: 3}});  // 仅存储，无返回值, value 支持 string|number|boolean|object|array

// 取：
getLocalStorage('key1'); // 原样返回 key1，{a: 1, b: {c: 3}}

// 删：
removeLocalStorage('key1'); // 仅删除，无返回值

// 2.带 personal
// 存：
setLocalStorage('key1', {a: 1, b: {c: 3}}, 'uid_123456');  // 仅存储，无返回值，value 支持 string|number|boolean|object|array

// 取：
getLocalStorage('key1'); // 因为没有传 personal 故返回 null
getLocalStorage('key1', 'uid_123456'); // 原样返回 key1，{a: 1, b: {c: 3}}

// 删：
removeLocalStorage('key1'); // 因为没有传 personal 故未能删除成功
removeLocalStorage('key1', 'uid_123456'); // 仅删除，无返回值


clearLocalStorage() // 删除 setLocalStorage 存储的所有值，一个不留
```

### sessionStorage

1. setSessionStorage(key: string, value: string|number|boolean|object|any[], personal?: string)
   * @desc 在浏览器中临时保存同一窗口(或标签页) key/value 对的数据，即对 sessionStorage 再封装
   * @param {string} key
   * @param {string|number|boolean|object|array} value
   * @param {string} personal 可选参数，作为身份标识，如果设置了 personal，取值也需要传 personal
   * @returns {void}

2. getSessionStorage(key: string,  personal?: string)
   * @desc 取 setSessionStorage 存储的值
   * @param {string} key
   * @param {string} personal 可选参数，作为身份标识，如果 setSessionStorage 传了 personal，则此处必填
   * @returns {any}

3. removeSessionStorage(key: string,  personal?: string)
   * @desc 删除 setSessionStorage 存储的某个值
   * @param {string} key
   * @param {string} personal 可选参数，作为身份标识，如果 setSessionStorage 传了 personal，则此处必填
   * @returns {void}

4. clearSessionStorage()
   * @desc 删除 setSessionStorage 存储的所有值
   * @returns {void}

#### Usage

```js
import { setSessionStorage, getSessionStorage, removeSessionStorage, clearSessionStorage } from 'easy-storage-browser';

// 1.不带 personal
// 存：
setSessionStorage('key1', {a: 1, b: {c: 3}});  // 仅存储，无返回值，value 支持 string|number|boolean|object|array

// 取：
getSessionStorage('key1'); // 原样返回 key1，{a: 1, b: {c: 3}}

// 删：
removeSessionStorage('key1'); // 仅删除，无返回值

// 2.带 personal
// 存：
setSessionStorage('key1', {a: 1, b: {c: 3}}, 'uid_123456');  // 仅存储，无返回值，value 支持 string|number|boolean|object|array

// 取：
getSessionStorage('key1'); // 因为没有传 personal 故返回 null
getSessionStorage('key1', 'uid_123456'); // 原样返回 key1，{a: 1, b: {c: 3}}

// 删：
removeSessionStorage('key1'); // 因为没有传 personal 故未能删除成功
removeSessionStorage('key1', 'uid_123456'); // 仅删除，无返回值


clearSessionStorage() // 删除 setSessionStorage 存储的所有值，一个不留
```

### cookie

1. setCookie(key: string, value: string | number | boolean | object | any[], exdays: number = 1)
   * @desc 在浏览器中以 cookie 方式存储 key/value 对的数据，即对 cookie 再封装，支持有效期，即定时存储
   * @param {string} key
   * @param {string|number|boolean|object|array} value
   * @param {number} exdays 有效天数
   * @returns {void}

2. getCookie(key: string)
   * @desc 获取 setCookie 设置的 key 对应的 value
   * @param {string} key
   * @returns {void}

3. removeCookie(key: string)
   * @desc 删除 setCookie 设置的 key 对应的 value
   * @param {string} key
   * @returns {void}

#### Usage

```js
import { setCookie, getCookie, removeCookie } from 'easy-storage-browser';

// 存储 3 天，即 3天后失效
setCookie('key2', {a: 1, b:{c:3, f: false}}, 3); // 仅存储，无返回值，value 支持 string|number|boolean|object|array

// 取
getCookie('key2') // 原样返回 key2, {a: 1, b:{c:3, f: false}}

// 删
removeCookie('key2') // 仅删除，无返回值
```
