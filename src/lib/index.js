import isObject from "lodash.isobject";
import isEmpty from "lodash.isempty";
import isArray from "lodash.isarray";
import mapValues from "lodash.mapvalues";
import getVal from "lodash.get";
import Base from "./interface";
import checkModel from "./utils/checkModel";
import modelSchema from "./types/modelSchema";

class DataModel extends Base {
  /**
   * 缓存用户设置的数据模型
   * @type {{object}}
   */
  #model = {};

  constructor(model) {
    super();
    this.#init(model);
  }

  #init(model) {
    const result = checkModel(model, modelSchema);
    if (!result.isPass) {
      throw new Error(result);
    }
    this.#setModel(model);
  }

  #setModel(model) {
    this.#model = model;
  }

  getModel() {
    return this.#model;
  }

  parse(data = {}) {
    if (!isObject(data)) {
      return this.#parseNotObject();
    }
    if (isEmpty(data) && !isArray(data)) {
      return this.#parseNotObject();
    }
    if (isArray(data)) {
      return this.#parseArray(data);
    }

    return this.#parseObject(data);
  }

  #parseObject(data) {
    return mapValues(this.#model, (schema) => {
      let firstVal = getVal(data, schema.from, this.#getDefult(schema.default));

      if (firstVal === null) {
        firstVal = this.#getDefult(schema.default);
      }

      if (typeof schema.stopConvert === "function") {
        const stopResult = schema.stopConvert(getVal(data, schema.from), data);
        if (stopResult === true) {
          return this.#formatVal(firstVal, schema.type);
        }
      }

      let val = "";
      if (schema.from === ".") {
        val = this.#deepParse(data, schema);
      } else {
        if (firstVal === "") {
          firstVal = this.#getDefult(schema.default);
        }
        val = this.#deepParse(firstVal, schema);
      }
      if (val === null) {
        val = this.#getDefult(schema.default);
      }
      let formatVal = this.#formatVal(val, schema.type);
      if (typeof schema.format === "function") {
        formatVal = schema.format(formatVal, data);
      }
      return formatVal;
    });
  }

  #deepParse(data, schema) {
    if (schema.type === "object" || schema.type === "array") {
      if (schema.properties) {
        const tmpDataModel = createDataModel(schema.properties);
        return tmpDataModel.parse(data);
      }
    }
    return data;
  }

  #parseArray(data) {
    if (typeof data[0] === "undefined") {
      return data;
    }
    if (["number", "boolean", "string"].includes(typeof data[0])) {
      return data;
    }
    return data.map((item) => {
      return this.#parseObject(item);
    });
  }

  /**
   * 获取默认值
   * @param defaultVal
   * @returns {*}
   */
  #getDefult(defaultVal) {
    if (typeof defaultVal === "function") {
      return defaultVal();
    }

    if (typeof defaultVal === "undefined" || defaultVal === null) {
      return "";
    }

    return defaultVal;
  }

  #formatVal(val, expectedType) {
    const valType = typeof val;
    if (valType === expectedType) {
      return val;
    }

    if (expectedType === "number") {
      return Number(val);
    }

    if (expectedType === "string") {
      return `${val}`;
    }

    if (expectedType === "boolean") {
      return !!val;
    }
    return val;
  }

  #parseNotObject() {
    return mapValues(this.#model, (item) => {
      let val = this.#getDefult(item.default);
      return val;
    });
  }
}

export const MODULE_NAME = "data-model-service";

export function createDataModel(model = {}) {
  return new DataModel(model);
}

export default DataModel;
