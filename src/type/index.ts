/**
 * @description 获取原始类型
 * @param {*} value
 * @returns {String} 类型字符串，如'String', 'Object', 'Null', 'Boolean', 'Number', 'Array'
 */
 export const getRawDataType=(value: any): string=> {
  return Object.prototype.toString.call(value).slice(8, -1);
}

/**
 * 是否是数组
 * @param {*} value 
 * @returns {Boolean}
 */
export const isArray = (value:any): boolean => {
  return getRawDataType(value) === 'Array';
}

/**
 * 是否是对象
 * @param {*} value 
 * @returns {Boolean}
 */
 export const isObject = (value:any): boolean => {
  return getRawDataType(value) === 'Object';
 }

 /**
 * 是否是String
 * @param {*} value 
 * @returns {Boolean}
 */
  export const isString = (value:any): boolean => {
    return getRawDataType(value) === 'String';
  }

 /**
 * 是否是Number
 * @param {*} value 
 * @returns {Boolean}
 */
  export const isNumber = (value:any): boolean => {
    return getRawDataType(value) === 'Number';
  }
  