/**
 * @desc 在浏览器中以 cookie 方式存储 key/value 对的数据，即对 cookie 再封装，支持有效期，即定时存储
 * @param {string} key 
 * @param {string|number|boolean|object|array} value
 * @param {number} exdays 有效天数
 * @returns {void}
 */
export function setCookie(
  key: string,
  value: string | number | boolean | object | any[],
  exdays: number = 1,
): void {
  if (typeof value === 'function' || value == null) {
		throw new Error('不支持 function、null、undefined 类型');
  }
  
	// 为了安全考虑编码一次
	value = escape(JSON.stringify(value));
	
	// 将有效天数转化为毫秒
	const millisecond = (exdays: number) => exdays * 24 * 60 * 60 * 1000;

  const date = new Date();
  date.setTime(date.getTime() + millisecond(exdays));

  document.cookie = `${key}=${value}; expires=${date.toUTCString()}`;
}

/**
 * @desc 获取 setCookie 设置的 key 对应的 value
 * @param {string} key 
 * @returns {void}
 */
export function getCookie(key: string): any {
	key = `${key}=`;
	const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		
    if (cookie.indexOf(key) === 0) {
			return JSON.parse(unescape(cookie.substring(key.length, cookie.length)));
		}
	}
	
  return null;
}

/**
 * @desc 删除 setCookie 设置的 key 对应的 value
 * @param {string} key 
 * @returns {void}
 */
export function removeCookie(key: string): void {
  const date = new Date();
	date.setTime(date.getTime() - 1);
	
	const value = getCookie(key);

	if (value !== null) {
		document.cookie = `${key}=${value}; expires=${date.toUTCString()}`;
	}
}
