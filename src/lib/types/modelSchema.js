import { typeEnum } from './modelConf';

export default {
  type: {
    type: 'string',
    description: '类型',
    oneOf: typeEnum,
    required: true,
  },
  description: {
    type: 'string',
    description: '描述',
    required: false,
  },
  from: {
    type: 'string',
    description: '数据来源',
    required: true,
  },
  properties: {
    type: 'object',
    description: '属性',
    required: false,
  },
  default: {
    type: 'function',
    description: '默认值',
    required: false,
  },
  required: {
    type: 'boolean',
    description: '是否必传',
    required: false,
  },
};