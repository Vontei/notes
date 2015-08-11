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

Bill.prototype.updateLocalStorage = function(newBill) {
  // get object from localStorage, parsing the data, giving us back an array
  var localStorageBillArray = JSON.parse(localStorage.getItem('bills'));
  // push new bill to array
  localStorageBillArray.push(newBill);
  // set object back to localStorage
  localStorage.setItem('bills', JSON.stringify(localStorageBillArray));
};


// Earnings constructor
function Earnings(tips, meals, averageTip) {
  this.tips = tips;
  this.meals = meals;
  this.averageTip = averageTip;
}

// Earnings methods
Earnings.prototype.calculateAverageTip = function() {
  this.averageTip = parseFloat(this.tips) / parseFloat(this.meals);
};

Earnings.prototype.updateTipsAndMeals = function(tipAmt) {
  this.tips += tipAmt;
  this.meals++;
};

Earnings.prototype.updateLocalStorage = function(localStorageObject) {
  // set object back to localStorage
  localStorage.setItem('earnings', JSON.stringify(localStorageObject));
};

module.exports = {
  Bill: Bill,
  Earnings: Earnings
};










