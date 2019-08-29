import DataBase from '../src/lib/interface';

describe('对外提供的接口(Base)测试用例', () => {

  let dataBase = null;
  beforeAll(() => {
    dataBase = new DataBase();
  });

  it('DataBase 构造函数是否被调用', function() {
    expect(dataBase instanceof DataBase).toBeTruthy();
  });

  it('根据模型数据的定义对象转换后的数据', () => {
    expect(typeof dataBase.parsedData).toBe('object');
  });

  it('获取模型数据的定义对象', () => {
    expect(typeof dataBase.getModel).toBe('function');
  });

  it('获取模型数据的定义对象', () => {
    expect(dataBase.getModel()).toEqual({});
  });

  it('对外提供parse方法', () => {
    expect(typeof dataBase.parse).toBe('function');
  });

  it('parse：将API接口数据转换成前端定义的数据，返回object', () => {
    const parseData = dataBase.parse();
    expect(typeof parseData).toBe('object');
  });

  it('对外提供traverse方法', () => {
    expect(typeof dataBase.traverse).toBe('function');
  });

  it('traverse：将parse后的数据，反向编译出源数据', function() {
    const traverseData = dataBase.traverse();
    expect(typeof traverseData).toBe('object');
  });
});
