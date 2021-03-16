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

declare class DataModel<IDataReturn> {
  /**
   * 构造函数
   * @param model 定义的数据模型
   */
  constructor(model: IDataModel);
  /**
   * 将原始数据转换新的数据格式
   * @param originData 原始数据
   */
  parse: (originData: any) => IDataReturn;
}

declare module "data-model-service" {
    export default DataModel;
}
