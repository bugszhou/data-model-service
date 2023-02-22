interface IDataModelItem {
  type: "string" | "number" | "object" | "array" | "boolean";
  description?: string;
  from: string;
  default: any;
  /**
   * 数据格式化
   * @param val 当前字段原始值
   * @param originModelData 所有数据原始值
   */
  format?: (val: any, originModelData?: any) => any;
  /**
   * 是否终止转换
   * @param val 当前字段原始值
   * @param originModelData 所有数据原始值
   */
  stopConvert?: (val: any, originModelData?: any) => any;
}

interface IProperties {
  [key: string]: IDataModelItem & {
    properties?: IProperties;
  };
}

interface IDataModel {
  [key: string]: IDataModelItem & {
    properties?: IProperties;
  };
}

declare class DataModel<IDataReturn, IModel = any> {
  /**
   * 构造函数
   * @param model 定义的数据模型
   */
  constructor(model: Record<string, IModel>);
  /**
   * 将原始数据转换新的数据格式
   * @param originData 原始数据
   */
  parse: (originData: any) => IDataReturn;
}

declare module "data-model-service" {
  export type IDataModelDO<ISchema extends Record<string, any>> = {
    [key in keyof ISchema]: ISchema[key]["default"];
  };

  export type IDO<ISchema extends Record<string, any>> = {
    [key in keyof ISchema]: ISchema[key]["default"] extends any[]
      ? ISchema[key]["properties"] extends object
        ? ISchema[key]["elementType"][]
        : IDO<ISchema[key]["properties"]>[]
      : ISchema[key]["default"] extends object
      ? IDO<ISchema[key]["properties"]>
      : ISchema[key]["default"];
  };

  export default DataModel;
}
