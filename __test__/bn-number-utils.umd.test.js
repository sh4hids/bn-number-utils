const { convertOnlyNumbers } = require("../umd/bn-number-utils");

test("converts 1 to '১'", () => {
  expect(convertOnlyNumbers(1)).toBe("১");
});
