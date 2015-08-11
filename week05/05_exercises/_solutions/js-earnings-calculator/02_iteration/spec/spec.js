var code = require('../js/utility.js');


describe('#calculateTotals()', function() {
  it('should return a totals object', function() {
    var obj = {
      mealPrice: 100,
      mealTaxRate: 0.20,
      mealTipRate: 0.20,
    };
    var expectedOutput = {
      subtotal: 120,
      tip: 20,
      total: 140
    };
    expect(code.calculateTotals(obj)).toEqual(expectedOutput);
  });
});

describe('#calculateRunningTotals()', function() {
  it('should return a running totals object', function() {
    var obj = {
      mealPrice: 100,
      mealTaxRate: 0.20,
      mealTipRate: 0.20,
    };
    var obj2 = {
      mealPrice: 50,
      mealTaxRate: 0.25,
      mealTipRate: 0.25,
    };
    totalsArray = [];
    totalsArray.push(code.calculateTotals(obj));
    totalsArray.push(code.calculateTotals(obj2));
    var expectedOutput = { mealCount: 2, totalTips: 32.5, avgTip: 16.25 };
    expect(code.calculateRunningTotals(totalsArray)).toEqual(expectedOutput);
  });

});

