/*
 * 不缓存源数据，避免不必要的内存损耗
 */

class Base {
  /**
   * 获取数据模型
   * @returns {{object}}
   */
  getModel() {
    return {};
  }

  /**
   * 缓存解析后的数据
   * @type {{object}}
   */
  parsedData = {};

  /**
   * 将data转换成数据模型格式的数据
   * @param data
   * @param opts 转换配置
   * @returns {{object}}
   */
  parse(data = {}, opts = {}) {
    return {};
  }

  /**
   * 将parse后的数据，反向编译出源数据
   * @returns {{}}
   */
  traverse() {
    return {};
  }
}

export default Base;
