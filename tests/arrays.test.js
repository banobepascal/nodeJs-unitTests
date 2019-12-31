const lib = require("../lib");

describe("getCurrencies", () => {
  it("should return true if currency is available", () => {
    const result = lib.getCurrencies();
    // not general (proper way)
    expect(result).toContain("USD");
    // ideal way
    expect(result).toEqual(expect.arrayContaining(['AUD', 'USD', 'AUD']));
  });
});
