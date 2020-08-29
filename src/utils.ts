/**
 * @desc 判断是否存在环
 * @param {any} obj 
 * @returns {boolean}
 */
export function cycleDetector(obj: any): boolean {
  let result = false;

  try {
    JSON.stringify(obj);
  } catch (e) {
    result = true;
  } finally {
    return result;
  }
}
