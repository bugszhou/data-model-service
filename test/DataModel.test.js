import DataModel, { createDataModel } from '../src/entry';

describe('DataModel所有测试用例', () => {

  let dataModel = null;
  beforeAll(() => {
    dataModel = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
      },
      friend1: {
        type: 'string',
        description: '好友1',
        from: 'friends[0]',
      },
    });
  });

  it('校验不传模型参数', function() {
    expect(() => {
      new DataModel();
    }).toThrow();
  });

  it('校验模型参数', function() {
    expect(() => {
      new DataModel({
        name: {
          type: 'string',
          description: '姓名',
          from: 'name',
        },
        friend1: {
          type: 'string',
          description: '好友1',
          from: 'friends[0]',
        },
      });
    }).not.toThrow();
  });

  it('获取模型参数', function() {
    expect(dataModel.getModel()).toEqual({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
      },
      friend1: {
        type: 'string',
        description: '好友1',
        from: 'friends[0]',
      },
    });
  });

  it('parse传非对象数据', () => {
    expect(dataModel.parse(123)).toEqual({
      name: '',
      friend1: '',
    });
  });

  it('parse传空对象数据', () => {
    expect(dataModel.parse({})).toEqual({
      name: '',
      friend1: '',
    });
  });

  it('parse传空数组数组', () => {
    expect(dataModel.parse([])).toEqual([]);
  });

  it('parse传基本类型数组', () => {
    expect(dataModel.parse(['ee', '22', '33'])).toEqual(['ee', '22', '33']);
  });

  it('parse传对象数组', () => {
    expect(dataModel.parse([{
      name: '张三',
      friends: ['李四', '王五'],
    }])).toEqual([{
      name: '张三',
      friend1: '李四',
    }]);
  });

  it('parse传对象', () => {
    expect(dataModel.parse({
      name: '张三',
      friends: ['李四', '王五'],
    })).toEqual({
      name: '张三',
      friend1: '李四',
    });
  });

  it('parse传字符串转数值', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
      },
      age: {
        type: 'number',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      name: '张三',
      age: '12',
    })).toEqual({
      name: '张三',
      age: 12,
    });
  });

  it('parse传数值转字符串', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      name: '张三',
      age: 12,
    })).toEqual({
      name: '张三',
      age: '12',
    });
  });

  it('parse传boolean', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
      },
      isMember: {
        type: 'boolean',
        description: '是否是会员',
        from: 'is_member',
      },
    });
    expect(dataModel1.parse({
      name: '张三',
      is_member: false,
    })).toEqual({
      name: '张三',
      isMember: false,
    });
  });

  it('parse传schema类型为boolean，传入为0', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
      },
      isMember: {
        type: 'boolean',
        description: '是否是会员',
        from: 'is_member',
      },
    });
    expect(dataModel1.parse({
      name: '张三',
      is_member: 0,
    })).toEqual({
      name: '张三',
      isMember: false,
    });
  });

  it('测试默认值为函数', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
        default() {
          return '王五'
        },
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      age: 12,
    })).toEqual({
      name: '王五',
      age: '12',
    });
  });

  it('测试默认值', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
        default: '王五',
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      age: 12,
    })).toEqual({
      name: '王五',
      age: '12',
    });
  });

  it('测试默认值为null', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
        default: null,
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      age: 12,
    })).toEqual({
      name: '',
      age: '12',
    });
  });

  it('测试默认值为undefined', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
        default: undefined,
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      age: 12,
    })).toEqual({
      name: '',
      age: '12',
    });
  });

  it('测试createDataModel 工厂函数', () => {
    const dataModel1 = createDataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'name',
        default: undefined,
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1 instanceof DataModel).toBeTruthy();
  });

  it('复杂结构', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'object',
        description: '姓名',
        from: 'names',
        properties: {
          friend1: {
            type: 'string',
            description: '好友1',
            from: 'friends[0]',
          },
        },
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      names: {
        friends: ['张三', '王五', '李四']
      },
      age: 12,
    })).toEqual({
      name: {
        friend1: '张三',
      },
      age: '12',
    });
  });

  it('复杂结构 - 对象数组', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'object',
        description: '姓名',
        from: 'names',
        properties: {
          friend1: {
            type: 'string',
            description: '好友1',
            from: 'friends[0].name',
          },
        },
      },
      age: {
        type: 'string',
        description: '好友1',
        from: 'age',
      },
    });
    expect(dataModel1.parse({
      names: {
        friends: [{
          name: '张三'
        }, {
          name: '王五'
        }, {
          name: '李四'
        }]
      },
      age: 12,
    })).toEqual({
      name: {
        friend1: '张三',
      },
      age: '12',
    });
  });

  it('测试数据', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'nickname',
        default: null, // 默认值, 有两种类型：function和其他基本数据类型
      },
      myFristFriendName: {
        type: 'string',
        description: '第一个好友的姓名',
        from: 'friends[0].name',
        default() {
          return '暂无姓名';
        },
      },
    });
    expect(dataModel1.parse({
      nickname: '张三',
      friends: [
        {
          name: '李四',
          age: 80
        }
      ]
    })).toEqual({ name: '张三', myFristFriendName: '李四' });
  });

  it('测试数据 为null', () => {
    const dataModel1 = new DataModel({
      name: {
        type: 'string',
        description: '姓名',
        from: 'nickname',
        default: null, // 默认值, 有两种类型：function和其他基本数据类型
      },
      myFristFriendName: {
        type: 'string',
        description: '第一个好友的姓名',
        from: 'friends[0].name',
        default() {
          return '暂无姓名';
        },
      },
    });
    expect(dataModel1.parse({
      nickname: '张三',
      friends: [
        {
          name: null,
          age: 80
        }
      ]
    })).toEqual({ name: '张三', myFristFriendName: '暂无姓名' });
  });

  it('测试数据 为根属性', () => {
    const dataModel1 = new DataModel({
      userInfo: {
        type: 'object',
        description: '用户信息',
        from: '.',
        properties: {
          nickname: {
            type: 'string',
            description: '昵称',
            from: 'nickname',
            default: '全家粉丝',
          },
          avatar: {
            type: 'string',
            description: '头像',
            from: 'headimgurl',
            default: '',
          },
        },
        default: {},
      },
    });
    expect(dataModel1.parse({
      headimgurl: "123",
      nickname: "",
    })).toEqual({ userInfo: { nickname: '全家粉丝', avatar: '123' }});
  });
});
