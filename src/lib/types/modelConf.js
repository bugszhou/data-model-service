/*
 * 数据模型配置参数
 */
/**
 * 基本类型：number string integer boolean object array null
 */

// const demo = {
//   name: '222',
//   age: 12,
//   friends: ['1', '2', '3'],
//   grade: [{ math: 123 }, { math: 123 }, { math: 123 }],
//   family: {
//     dad: '123',
//     mom: '456'
//   },
// };
//
// const model = {
//   name: {
//     type: 'String',
//     description: '姓名',
//     from: 'name',
//     required: false,
//   },
//   friend1: {
//     type: 'String',
//     description: '好友1',
//     from: 'friends[0]',
//     required: false,
//   },
//   grade: {
//     type: 'array',
//     description: '成绩列表',
//     from: 'friends[0]',
//     required: false,
//     properties: gradeModel,
//   },
//   family: {
//     type: 'array',
//     description: '成绩列表',
//     from: 'family',
//     required: false,
//     properties: familyModel,
//   },
// };

// 可用类型
export const typeEnum = ['string', 'number', 'integer', 'boolean', 'object', 'array', 'null'];

export default {
  type: '', // 必填
  description: '',
  from: '', // 必填
  properties: 'none', // 默认none
  default: '', // 默认值，默认为空字符串
  required: false, // 默认false
};
