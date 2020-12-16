interface IDataModelItem {
  type: "string" | "number" | "object" | "array" | "boolean";
  description?: string;
  from: string;
  default: any;
  format?: (val: any) => any;
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
  new (model: IDataModel);
  /**
   * 将原始数据转换新的数据格式
   * @param originData 原始数据
   */
  parse: (originData: any) => IDataReturn;
}
