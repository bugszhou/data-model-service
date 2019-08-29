import opts from '../../src/lib/types/options';

it('测试parse转换的配置字段列表 ', function() {
  expect(opts).toMatchSnapshot();
});

