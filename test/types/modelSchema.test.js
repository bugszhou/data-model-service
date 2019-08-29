import modelSchema from '../../src/lib/types/modelSchema';

describe('model的schema测试', () => {
  it('model schema快照', () => {
    expect(modelSchema).toMatchSnapshot();
  });
});

