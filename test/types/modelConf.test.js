import modelConf, { typeEnum } from '../../src/lib/types/modelConf';

it('测试 model字段列表', function() {
  expect(modelConf).toMatchSnapshot();
});

it('测试 model的type字段类型集合', () => {
  expect(typeEnum).toMatchSnapshot();
});

