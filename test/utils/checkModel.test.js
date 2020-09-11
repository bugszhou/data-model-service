import checkModel from "../../src/lib/utils/checkModel";
import modelSchema from "../../src/lib/types/modelSchema";

describe("测试checkModel", () => {
  it("传入数据不为object时", function () {
    expect(checkModel(123, modelSchema)).toEqual({
      isPass: false,
      reason: {
        msg: "args[0] require object",
        property: "",
        value: "",
        type: "string",
        expected: {
          type: "",
          oneOf: [],
        },
      },
    });
  });
  it("测试modelSchema", () => {
    expect(
      checkModel(
        {
          name: {
            type: "string",
            description: "姓名",
            from: "name",
          },
          friend1: {
            type: "string",
            description: "好友1",
            from: "friends[0]",
          },
        },
        modelSchema,
      ),
    ).toEqual({
      isPass: true,
      reason: {
        msg: "",
        property: "",
        value: "",
        type: "",
        expected: {
          type: "",
          oneOf: [],
        },
      },
    });
  });
  it("测试modelSchema无from", () => {
    expect(
      checkModel(
        {
          name: {
            type: "string",
            description: "姓名",
          },
          friend1: {
            type: "string",
            description: "好友1",
            from: "friends[0]",
          },
        },
        modelSchema,
      ),
    ).toEqual({
      isPass: false,
      reason: {
        msg: "Lose from",
        property: "from",
        value: "undefined",
        type: "string",
        expected: {
          type: "string",
          oneOf: [],
        },
      },
    });
  });
});
