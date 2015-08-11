function calculateTotals(obj) {
  // container for customer totals
  var totalsObject = {};
  // calculate totals
  var subtotal = parseFloat(obj.mealPrice) * parseFloat(obj.mealTaxRate) + parseFloat(obj.mealPrice);
  var tip = parseFloat(obj.mealTipRate) * parseFloat(obj.mealPrice);
  var total = subtotal + tip;
  // add values to new object
  totalsObject.subtotal = subtotal;
  totalsObject.tip = tip;
  totalsObject.total = total;
  // return new object
  return totalsObject;
}

function calculateRunningTotals(arr) {
  // container for running totals
  var totalsObject = {};
  // calculate totals
  var mealCount = arr.length;
  var totalTips = 0;
  for (var i = 0; i < arr.length; i++) {
    totalTips += arr[i].tip;
  }
  var avgTip = totalTips / mealCount;
  // add values to new object
  totalsObject.mealCount = mealCount;
  totalsObject.totalTips = totalTips;
  totalsObject.avgTip = avgTip;
  // return new object
  return totalsObject;
}


module.exports = {
  calculateTotals: calculateTotals,
  calculateRunningTotals: calculateRunningTotals
};
