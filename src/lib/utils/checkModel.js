import isObject from 'lodash.isobject';
import vaildData from './vaild-data';

export default function(data, schema) {
  if (!isObject(data)) {
    return {
      isPass: false,
      reason: {
        msg: 'args[0] require object',
        property: '',
        value: '',
        type: 'string',
        expected: {
          type: '',
          oneOf: [],
        },
      },
    };
  }

  let error = null;

  Object.keys(data).some((key) => {
    const result = vaildData(data[key], schema);
    if (!result.isPass) {
      error = result;
      return true;
    }
    return false;
  });

  if (error) {
    return error;
  }
  return {
    isPass: true,
    reason: {
      msg: '',
      property: '',
      value: '',
      type: '',
      expected: {
        type: '',
        oneOf: [],
      },
    },
  };
}
