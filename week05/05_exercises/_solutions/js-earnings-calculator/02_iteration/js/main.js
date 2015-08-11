// add scripts

$(document).on('ready', function() {

  // container for running totals
  var runningTotalArray = [];

  $('form').on('submit', function(event){

    // -------------------------------- //
    // *** STEP 1: Grab form values *** //
    // -------------------------------- //

    // prevent default form behavior
    event.preventDefault();
    // container for each meal
    var allValues = {};
    // grab values from the form, add them to the object
    allValues.mealPrice = $('.form-input[name="meal-price"]').val();
    allValues.mealTaxRate = $('.form-input[name="meal-taxrate"]').val();
    allValues.mealTipRate = $('.form-input[name="meal-tiprate"]').val();
    // clear the values
    $('.form-input').val('');


    // ------------------------------------- //
    // *** STEP 2: Calculate Meal Totals *** //
    // ------------------------------------- //

    // calculate customer totals
    var customerTotals = calculateTotals(allValues);
    // append values to the DOM
    $('#customer-subtotal').html('$'+customerTotals.subtotal.toFixed(2));
    $('#customer-tip').html('$'+customerTotals.tip.toFixed(2));
    $('#customer-total').html('$'+customerTotals.total.toFixed(2));


    // ---------------------------------------- //
    // *** STEP 3: Calculate Running Totals *** //
    // ---------------------------------------- //

    // add a customerTotals object to array
    runningTotalArray.push(customerTotals);
    var runningTotals = calculateRunningTotals(runningTotalArray);
    // append values to the DOM
    $('#total-tips').html('$'+runningTotals.totalTips);
    $('#meal-count').html(runningTotals.mealCount);
    $('#average-tip').html('$'+runningTotals.avgTip.toFixed(2));

  });

  // ------------------------------------------------------------ //
  // *** STEP 4: Add Functionality to Clear and Reset Buttons *** //
  // ------------------------------------------------------------ //

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
    // clear runningTotal Array
    runningTotalArray = [];
  });

});
