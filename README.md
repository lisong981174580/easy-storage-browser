# easy-storage-browser
简化浏览器 localStorage、sessionStorage、cookie 存储方式，自动做 JSON.parse、JSON.stringify 且保证存储前后数据类型一致，支持私有化存储，定时存储。

## localStorage

1. setLocalStorage(key: string, value: any, personal?: string)

2. getLocalStorage(key: string,  personal?: string)

3. removeLocalStorage(key: string,  personal?: string)

4. clearLocalStorage(personal?: string)

## sessionStorage

1.setSessionStorage(key: string, value: any, personal?: string)

2.getSessionStorage(key: string,  personal?: string)

3.removeSessionStorage(key: string,  personal?: string)

4.clearSessionStorage(personal?: string)

## cookie

1.setCookie(key: string, value: any, effectiveDays: number )

2.getCookie(key: string)

3.removeCookie(key: string)
