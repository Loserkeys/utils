import {
  isArray,
  isObject,
  isString,
  isNumber,
  getRawDataType,
} from '../../src/type'

const array = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer']
const object = {
  a: 'b',
  c: 123,
}
const number = 1

test('获取原始数据类型', () => {
  expect(getRawDataType(array)).toBe("Array")
  expect(getRawDataType(object)).toBe("Object")
  expect(getRawDataType(number)).toBe("Number")
})

test('test isArray true', () => {
  expect(isArray(array)).toBe(true)
})

test('test isArray false', () => {
  expect(isArray(object)).toBe(false)
})
