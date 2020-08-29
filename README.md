# easy-storage-browser
简化浏览器 localStorage、sessionStorage、cookie 存储方式，自动做 JSON.parse、JSON.stringify 且保证存储前后数据类型一致，支持私有化存储，定时存储。

## localStorage

1. setLocalStorage(key: string, value: string|number|boolean|object|any[], personal?: string)

2. getLocalStorage(key: string,  personal?: string)

3. removeLocalStorage(key: string,  personal?: string)

4. clearLocalStorage()

## sessionStorage

1.setSessionStorage(key: string, value: string|number|boolean|object|any[], personal?: string)

2.getSessionStorage(key: string,  personal?: string)

3.removeSessionStorage(key: string,  personal?: string)

4.clearSessionStorage()

## cookie

1.setCookie(key: string, value: any, effectiveDays: number )

2.getCookie(key: string)

3.removeCookie(key: string)
