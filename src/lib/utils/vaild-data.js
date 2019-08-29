import isEmpty from 'lodash.isempty';
import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import typeOf from 'type-of';


function error({ isPass = false, msg = '', val = '', expectedType = '', keyName = '', oneOf = [] } = {}) {
  return {
    isPass,
    reason: {
      msg,
      property: keyName,
      value: val || '',
      type: typeof val,
      expected: {
        type: expectedType,
        oneOf,
      },
    },
  };
}

function checkFn(data, schema) {
  let errors = [],
    passData = [];
  Object.entries(schema).some(([keyName, schemaItem]) => {
    let originVal = data[keyName];
    if (typeOf(schemaItem.required) === 'boolean' && !schemaItem.required) {
      passData.push(error({
        isPass: true,
        val: originVal,
        expectedType: schemaItem.type,
        keyName,
        msg: '',
      }));
      return false;
    }
    if (typeOf(originVal) === 'undefined') {
      errors.push(error({
        isPass: false,
        val: 'undefined',
        expectedType: schemaItem.type,
        keyName,
        msg: `Lose ${keyName}`,
      }));
      return true;
    }
    if (typeOf(originVal) !== schemaItem.type) {
      errors.push(error({
        isPass: false,
        val: originVal,
        expectedType: schemaItem.type,
        keyName,
        msg: 'type error',
      }));
      return true;
    }

    let oneOf = schemaItem.oneOf;
    if (isArray(oneOf) && oneOf.length > 0) {
      if (oneOf.includes(originVal)) {
        passData.push(error({
          isPass: true,
          val: originVal,
          expectedType: schemaItem.type,
          keyName,
          msg: '',
        }));
        return false;
      } else {
        errors.push(error({
          isPass: false,
          val: originVal,
          expectedType: schemaItem.type,
          keyName,
          msg: `oneOf not found ${originVal}`,
          oneOf,
        }));
        return true;
      }
    }

    passData.push(error({
      isPass: true,
      val: originVal,
      expectedType: schemaItem.type,
      keyName,
      msg: '',
    }));
  });

  return { errors, passData };
}

function vaildData(data, schema) {
  // 检测参数
  if (!data || !schema) {
    return error({
      isPass: false,
      msg: 'valid-data require 2 args(data & schema)',
    });
  }

  if (!isObject(data)) {
    return error({
      isPass: false,
      msg: 'args[0] require object',
    });
  }

  if (!isObject(schema) || isArray(schema)) {
    return error({
      isPass: false,
      msg: 'args[1](schema) require object',
    });
  }

  if (isEmpty(schema)) {
    return error({
      isPass: true,
      msg: 'args[1](schema) is empty',
    });
  }

  if (isArray(data)) {
    return error({
      isPass: false,
      msg: 'args[0](data) require object',
    });
  }

  const { errors } = checkFn(data, schema);

  if (errors.length > 0) {
    return errors.shift();
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
    }
  };
}

export default vaildData;
