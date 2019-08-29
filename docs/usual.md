## 使用说明

### 安装

```shell
npm install --save data-model-service
```

### 引入

```javascript
import DataModel from 'data-model-service';
```

### 使用

1. 定义数据模型

```javascript
const userModel = {
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
};

const userData = new DataModel(userModel);

```

2. 创建数据模型实例

```javascript

const userDataIns = new DataModel(userModel);

```

#### 方法

##### `parse`

将源数据转换成模型定义的数据格式

```javascript

const originData = {
    nickname: '张三',
    friends: [
        {
            name: '李四',
            age: 80
        }
    ]
};

const userData = userDataIns.parse(originData);

//userData的值为： {name: '张三', myFristFriendName: '李四'}

```

#### 复杂结构转换(不推荐使用)

复杂结构：通常是指转换的数据中包含嵌套数据，建议使用分层思想，将含有复杂的结构单独管理，不要使用一个大的对象包含页面所有需要的数据


1. 定义数据模型

```javascript
const userModel = {
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
};

const userData = new DataModel(userModel);

```

2. 创建数据模型实例

```javascript

const userDataIns = new DataModel(userModel);

```
3. 转换

```javascript

const originData = {
      names: {
        friends: ['张三', '王五', '李四']
      },
      age: 12,
    }
};

const userData = userDataIns.parse(originData);

// userData的值为：
{
 name: {
   friend1: '张三',
 },
 age: '12',
}

```

