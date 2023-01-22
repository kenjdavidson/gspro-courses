const { toJson, fromJson } = require("../json");

describe("json filters", () => {
  test("to json", () => {
    const input = {
      name: "ken davidson",
    };
    const output = toJson(input);
    expect(output).toEqual(JSON.stringify(input));
  });

  test("from json", () => {
    const input = '{ "name": "ken davidson" }';
    const output = fromJson(input);
    expect(output).toEqual(JSON.parse(input));
  });
});
