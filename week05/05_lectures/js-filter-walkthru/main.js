// *** DOM Manipulation *** //


/*

LOGIC:

1. On button click, grab the value from the 'data-' attribute
2. Pass the value to a helper function to create an array with a high and low values,
  representing the range
3. Find values in from the DOM that are in the range (using filter)
4. Append values back to DOM

*/

$(document).ready(function(){

  $('button').on('click', function(){

    var domValues = [];
    // get upper limit from data-attr
    var upperLimit = $(this).data('val');
    // create range bucket
    var range = getRanges(upperLimit);
    // grab the values from the li, pushing them to the domValues array
    $('#original-values li').each(function(i, li){
      domValues.push($(li).text());
    });
    // filter
    newValues = getValues(range, domValues);
    $('#filtered-values').html('<li>' + newValues.join("</li><li>") + '</li>');
  });

});
