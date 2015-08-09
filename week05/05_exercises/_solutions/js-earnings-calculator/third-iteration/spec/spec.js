var code = require('../js/utility.js');

var bill;
var totalEarnings;

describe('Earnings Calculator', function(){

  beforeEach(function(){
    bill = new code.Bill(100, 0.2, 0.2);
    bill2 = new code.Bill(50, 0.22, 0.22);
    totalEarnings = new code.Earnings();
  });

  describe('#calculateTax()', function(){
    it('should calculate the tax rate', function(){
      bill.calculateTax();
      expect(bill.tax).toEqual(20);
    });
  });

  describe('#calculateTip()', function(){
    it('should calculate the tip rate', function(){
      bill.calculateTip();
      expect(bill.tip).toEqual(20);
    });
  });

  describe('#calculateSubtotal()', function(){
    it('should calculate the subtotal', function(){
      bill.calculateSubtotal();
      expect(bill.subtotal).toEqual(120);
    });
  });

  describe('#calculateTotal()', function(){
    it('should calculate the total', function(){
      bill.calculateTip();
      bill.calculateSubtotal();
      bill.calculateTotal();
      expect(bill.total).toEqual(140);
    });
  });

  describe('#calculateAverageTip', function(){
    it('should calculate the total earnings tip', function(){
      bill.calculateTip();
      bill2.calculateTip();
      totalEarnings.updateTipsAndMeals(bill.tip);
      totalEarnings.updateTipsAndMeals(bill2.tip);
      expect(totalEarnings.tips).toEqual(31);
      expect(totalEarnings.meals).toEqual(2);
      totalEarnings.calculateAverageTip();
      expect(totalEarnings.averageTip).toEqual(15.5);
    });
  });

});


