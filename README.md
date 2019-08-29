## data-model-service
----------------------------

数据模型服务：主要解耦前后端数据交互出现的问题：

* 如果后端接口传递的数据嵌套很多层，前端在使用时会出现很多防御性代码；

例如，后端接口数据：
```javascript
{
    user: {
        friends: [
            {
                name: '小明',
                age: 12
            }
        ]
    }
}
```
前端在请求接口拿到数据后：
```javascript
const data = {
    user: {
        friends: [
            {
                name: '小明',
                age: 12
            }
        ]
    }
}
// 获取第一个好友的姓名：
const friendName = data.user.friends[0].name;
```
上述例子存在以下几个问题：<br>

1. 链式调用很长难以理解
2. 很书写很多防御性代码
3. 链式调用需要保证每个环节必须有值，否则会抛出异常。如果`friends`为空数组，那么`data.user.friends[0]`的值就是`undefined`，此时如果没有防御性代码，取`name`值就会报错，导致之后的代码无法运行

* 解决空数据使用默认值

### 使用文档

[点击查看](docs/usual.md)



