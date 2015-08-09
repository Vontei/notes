// add scripts

$(document).on('ready', function() {

  var totalEarnings = new Earnings();

  $('form').on('submit', function(event){

    // -------------------------------- //
    // *** STEP 1: Grab form values *** //
    // -------------------------------- //

    // prevent default form behavior
    event.preventDefault();
    // grab values from the form, add them to the object
    var mealPrice = $('.form-input[name="meal-price"]').val();
    var mealTaxRate = $('.form-input[name="meal-taxrate"]').val();
    var mealTipRate = $('.form-input[name="meal-tiprate"]').val();
    // clear the values
    $('.form-input').val('');


    // ------------------------------------- //
    // *** STEP 2: Calculate Meal Totals *** //
    // ------------------------------------- //

    // create bill instance
    var bill = new Bill(mealPrice, mealTaxRate, mealTipRate);
    // calculate customer totals
    bill.calculateTax();
    bill.calculateTip();
    bill.calculateSubtotal();
    bill.calculateTotal();
    // append values to the DOM
    $('#customer-subtotal').html('$'+bill.subtotal.toFixed(2));
    $('#customer-tip').html('$'+bill.tip.toFixed(2));
    $('#customer-total').html('$'+bill.total.toFixed(2));


    // ---------------------------------------- //
    // *** STEP 3: Calculate Running Totals *** //
    // ---------------------------------------- //

    // update tallys
    totalEarnings.updateTipsAndMeals(bill.tip);
    // calculate average tip
    totalEarnings.calculateAverageTip();
    // append values to the DOM
    $('#total-tips').html('$'+totalEarnings.tips);
    $('#meal-count').html(totalEarnings.meals);
    $('#average-tip').html('$'+totalEarnings.averageTip.toFixed(2));

  });

  // // ------------------------------------------------------------ //
  // // *** STEP 4: Add Functionality to Clear and Reset Buttons *** //
  // // ------------------------------------------------------------ //

  // clear button
  $('input[value="Clear"]').on('click', function(){
    $('.form-input').val('');
  });

  // reset button
  $('input[value="Reset"]').on('click', function(){
    // clear DOM
    $('#customer-subtotal').html('');
    $('#customer-tip').html('');
    $('#customer-total').html('');
    $('#meal-count').html('');
    $('#average-tip').html('');
    $('#total-tips').html('');
    // clear total earnings
    totalEarnings.tips = 0;
    totalEarnings.meals = 0;
    totalEarnings.averageTip = 0;
  });

});
