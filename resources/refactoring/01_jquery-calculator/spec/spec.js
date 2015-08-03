var code = require('../js/utility.js');

describe("jQuery Calculator", function() {

  it("multiplies double-digit numbers correctly", function() {
    var arr1 = ['81', '*', '81'];
    expect(code.caculateValue(arr1)).toEqual(6561);
    var arr2 = ['81', '*', '8'];
    expect(code.caculateValue(arr2)).toEqual(648);
  });

  it("divides double-digit numbers correctly", function() {
    var arr1 = ['81', '/', '81'];
    expect(code.caculateValue(arr1)).toEqual(1);
    var arr2 = ['81', '/', '9'];
    expect(code.caculateValue(arr2)).toEqual(9);
  });

  it("adds double-digit numbers correctly", function() {
    var arr1 = ['81', '+', '81'];
    expect(code.caculateValue(arr1)).toEqual(162);
    var arr2 = ['81', '+', '9'];
    expect(code.caculateValue(arr2)).toEqual(90);
  });

  it("subtracts double-digit numbers correctly", function() {
    var arr1 = ['81', '-', '81'];
    expect(code.caculateValue(arr1)).toEqual(0);
    var arr2 = ['81', '-', '9'];
    expect(code.caculateValue(arr2)).toEqual(72);
  });

  // it("subtracts three double-digit numbers correctly", function() {
  //   var arr1 = ['81', '-', '9', '-', '9'];
  //   expect(code.caculateValue(arr1)).toEqual(63);
  // });

});
