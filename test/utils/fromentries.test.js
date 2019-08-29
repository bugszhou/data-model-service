import fromEntries from '../../src/lib/utils/from-entries';

describe('fromEntries测试', () => {
  it('测试输入：[]，输出：{}', () => {
    expect(fromEntries([])).toEqual({});
  });

  it('测试输入：{}，异常', () => {
    try {
      fromEntries({})
    } catch (e) {
      expect(e).toEqual(new Error('input is not array'));
    }
  });

  it('测试输入：[["key1", 1]]，输出：{ key1: 1 }', function() {
    expect(fromEntries([["key1", 1]])).toEqual({ key1: 1 });
  });

  it('测试输入：[["key1", ["key2", "3"]]]，输出：{ key1: { key2: 3 } }', function() {
    expect(fromEntries([["key1", ["key2", "3"]]])).toEqual({ key1: ["key2", "3"] });
  });
});
