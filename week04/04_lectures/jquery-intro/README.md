// JQUERY IS JUST A JAVASCRIPT OBJECT
// var $ = function(){
//     // 9200 lines of code
// }

// console.log( $('h1') );

// Selectors
//
$('body') // Element tag selector
$('.some-class') // Class selector
$('#my-id') // ID selector

$('#my-id > p') // Child selector
$('.some-class span') // Descendent selector

$('.some-class, .some-other-class') // Multi-selector

// Can also use variables to pass in for our selector
var mySelector = 'h1'
$(mySelector)
// console.log( $(mySelector) );

//
//

// Can check how many elements are being selected
// using the length property
// console.log( $('h1').length );


// console.log($('.box'))

var $myBox = $('.box')
// Can prefix variable names with '$'
// to semantically denote a variable
// represents a Jquery object

// Javascript is Polymorphic
// Its methods change their functionality
// based on the # of arguments passed to it

// console.log( 'width : ', $('.box').width() )

// $('.box').width('400%');

//---------//
// .width()    -> gets width
// .width(arg) -> sets width
//---------//

// console.log( 'height : ', $myBox.height() )

// $myBox.height(800);

//---------//
// .height()    -> gets height
// .height(arg) -> sets height
//---------//

// console.log( $myBox.css('height') );
// $myBox.css('height', '600px');

// $myBox.css({
//     'height' : '600px',
//     'background-color' : 'blue',
// });

//---------//
// .css(propName)            -> gets value of css property
// .css(propName, propValue) -> sets the css property to the value argument
// .css(obj)                 -> key : value pairs propName : propValue to set css properties
//---------//

// $('.box').show()
// $('.box').hide()


//---------//
// .hide()    -> sets the display to none
// .hide(dur) -> animates hiding for length of dur in milliseconds
// .show()    -> sets the display to block, inline-block, inline
// .show(dur) -> animate showing for length of dur in milliseconds
//--------//

// $myBox.hide(500);
// $myBox.hide();
// $myBox.show(1200);

// var fadeMeIn = function(){
//     console.log('Im done animating')
//     $('some-other-guy').fadeIn()
// }
// $myBox.fadeOut(3000, fadeMeIn);

// fade in will wait for fade out
// $myBox.fadeOut(5000);
// $myBox.fadeIn(1000);
// console.log('!!!');


//-----------//
// .fadeIn()         -> default animation time, fade in object
// .fadeOut()        -> default animation time, fade out object


// .fadeIn(dur)      -> set animation time
// .fadeOut(dur)     -> set animation time

// .fadeIn(dur, cb)  -> set animation time, invoke a callback function when animation is complete
// .fadeOut(dur, cb) -> set animation time, invoke a callback function when animation is complete
//-----------//

// $('.box').addClass('fancy');

// $('.fancy').removeClass('fancy');

// $('.fancy').addClass(); //useless without arguments! does nothing!


//-----------//
// .addClass(className)    -> adds a class to the selected elements
// .removeClass(className) -> removes a class from the selected elements
// .removeClass()          -> removes ALL classes from the selected elements
//-----------//



// $('.my-input').val('duck duck goose');
// console.log( $('.my-input').val() )

// console.log( $('#para').text('!!!!!') )


// $('.nested-content').html('<h1> Jquery is awesome, prompts suck </h1>');
// console.log($('.nested-content').html())

$('.nested-content').html('<script>console.log("YOUR PASSWORD")</script>')

//-----------//
// .html()    -> Gets html content inside of element
// .html(arg) -> Sets html content inside of element
// .text()    -> Gets text of element
// .text(arg) -> Sets text of element
// .val()     -> Gets value of form element
// .val(arg)  -> Sets value of form element

//-----------//










