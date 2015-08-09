// Bill constructor
function Bill(mealPrice, mealTaxRate, mealTipRate) {
  this.mealPrice = mealPrice;
  this.mealTaxRate = mealTaxRate;
  this.mealTipRate = mealTipRate;
  this.tax = 0;
  this.tip = 0;
  this.subtotal = 0;
  this.total = this.subtotal + this.tip;
}

// Bill methods
Bill.prototype.calculateTax = function() {
  this.tax = parseFloat(this.mealPrice) * parseFloat(this.mealTaxRate);
};

Bill.prototype.calculateTip = function() {
  this.tip = parseFloat(this.mealTipRate) * parseFloat(this.mealPrice);
};

Bill.prototype.calculateSubtotal = function() {
  this.subtotal = parseFloat(this.mealPrice) + parseFloat(this.mealPrice) * parseFloat(this.mealTaxRate);
};

Bill.prototype.calculateTotal = function() {
  this.total = this.subtotal + this.tip;
};

// Earnings constructor
function Earnings() {
  this.tips = 0;
  this.meals = 0;
  this.averageTip = 0;
}

// Earnings methods
Earnings.prototype.calculateAverageTip = function() {
  this.averageTip = parseFloat(this.tips) / parseFloat(this.meals);
};

Earnings.prototype.updateTipsAndMeals = function(tipAmt) {
  this.tips += tipAmt;
  this.meals++;
};

module.exports = {
  Bill: Bill,
  Earnings: Earnings
};
