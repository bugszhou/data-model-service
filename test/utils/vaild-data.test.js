import validData from '../../src/lib/utils/vaild-data';
import modelSchema from '../../src/lib/types/modelSchema';

const testData = {
  name1: '222',
  age: 12,
};

const testSchema = {
  name: {
    type: 'string',
    description: '姓名',
    oneOf: ['111'],
  },
};

describe('validData测试', () => {
  it('不传参数', () => {
    expect(validData()).toEqual({
      isPass: false,
      reason: {
        msg: 'valid-data require 2 args(data & schema)',
        property: '',
        value: '',
        type: 'string',
        expected: {
          type: '',
          oneOf: [],
        },
      }
    });
  });

  it('不传schema', () => {
    expect(validData(testData)).toEqual({
      isPass: false,
      reason: {
        msg: 'valid-data require 2 args(data & schema)',
        property: '',
        value: '',
        type: 'string',
        expected: {
          type: '',
          oneOf: [],
        },
      }
    });
  });

  it('传源数据为非对象时', () => {
    expect(validData(123, testSchema)).toEqual({
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
      }
    });
  });

  it('传入的schema为非对象时', () => {
    expect(validData(testData, 123)).toEqual({
      isPass: false,
      reason: {
        msg: 'args[1](schema) require object',
        property: '',
        value: '',
        type: 'string',
        expected: {
          type: '',
          oneOf: [],
        },
      }
    });
  });

  it('传入的schema为数组时', () => {
    expect(validData(testData, [])).toEqual({
      isPass: false,
      reason: {
        msg: 'args[1](schema) require object',
        property: '',
        value: '',
        type: 'string',
        expected: {
          type: '',
          oneOf: [],
        },
      }
    });
  });

  it('传空schema对象，数据校验通过', () => {
    expect(validData(testData, {})).toBeTruthy();
  });

  it('传入的源数据为数组时', () => {
    expect(validData([], testSchema)).toEqual({
      isPass: false,
      reason: {
        msg: 'args[0](data) require object',
        property: '',
        value: '',
        type: 'string',
        expected: {
          type: '',
          oneOf: [],
        },
      }
    });
  });

  it('传入的类型为number，schema中定义的类型为字符串', () => {
    expect(validData({
      age: 10
    }, {
      age: {
        type: 'string',
        description: '年龄',
      },
    })).toEqual({
      isPass: false,
      reason: {
        msg: 'type error',
        property: 'age',
        value: 10,
        type: 'number',
        expected: {
          type: 'string',
          oneOf: [],
        },
      }
    });
  });

  it('测试传入的数据有缺失，和schema定义的不一致', () => {
    expect(validData({
      age: 10,
    }, {
      name: {
        type: 'string',
        description: '姓名',
      },
      age: {
        type: 'number',
        description: '年龄',
      },
    })).toEqual({
      isPass: false,
      reason: {
        msg: 'Lose name',
        property: 'name',
        value: 'undefined',
        type: 'string',
        expected: {
          type: 'string',
          oneOf: [],
        },
      }
    });
  });

  it('测试传入的数据中的值为schema中定义的oneOf中的某个值', () => {
    expect(validData({
      name: '张三',
    }, {
      name: {
        type: 'string',
        description: '姓名',
        oneOf: ['张三', '李四', '王五'],
      },
    })).toEqual({
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
    });
  });

  it('测试传入的数据中的值不是schema中定义的oneOf中的某个值', () => {
    expect(validData({
      name: '张三',
    }, {
      name: {
        type: 'string',
        description: '姓名',
        oneOf: ['李四', '王五'],
      },
    })).toEqual({
      isPass: false,
      reason: {
        msg: 'oneOf not found 张三',
        property: 'name',
        value: '张三',
        type: 'string',
        expected: {
          type: 'string',
          oneOf: ['李四', '王五'],
        },
      }
    });
  });
});
