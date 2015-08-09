$(document).ready(function(){

	// Add three new cabins to the listing
	var article = '<article class="home" data-price="20000"><img src="img/one.jpg" /><h4>$20,000</h4></article>';

	$('.image-container').append(article).append(article).append(article);

	//toggle the background image
	$(".dark").on("click", function(){
		$("body").css('background-image', 'url(img/dark_wood.png)');
	});

	$(".light").on("click", function(){
		$("body").css('background-image', 'url(img/tileable_wood_texture.png)');
	});

	// add third option to the background toggle
	$('.textures').css("width", "150px").append('<span class="forest"></span>');

	$(".forest").on("click", function(){
		$("body").css({
			'background-image': 'url(img/forest.jpg)',
			'background-size': 'cover'
		});
	});

	// Iteration 1
	$('.high').on('click', function(event) {
		event.preventDefault();
		$('.image-container').html($('.image-container').children().sort(function(a, b) {
			return b.dataset.price - a.dataset.price;
		}));
	});

	$('.low').on('click', function(event) {
		event.preventDefault();
		$('.image-container').html($('.image-container').children().sort(function(a, b) {
			return a.dataset.price - b.dataset.price;
		}));
	});

	// Iteration 2

	// +$('input:checked').val() = number value of checked
	// $('input').change(function() {
	//   var $article = $('article');

	//   if ($(this).is(':checked')) {
	//       var $checkedLow = Number($('input:checked').parent().prev().children().val());
	//       var $checkedHigh = Number($('input:checked').val());
	//       $article.hide();

	//       //if previous child's value is NaN, set the value to zero.
	//       if (isNaN($checkedLow)) {
	//         $checkedLow = 0;
	//       }

	//       for (var i = 0; i < $article.length; i++) {
	//         if (Number($article[i].dataset.price) <= $checkedHigh && Number($article[i].dataset.price >= $checkedLow)) {
	//           $article.eq(i).show();
	//         }
	//       }
	//   } else if ($('input').not(':checked')){
	//       $article.show();
	//   }
	// });

	//Iteration 3
	function createFilter(val, text) {
		$('.filters').append("<label><input type='checkbox' value=" + val + ">" + text + "</label>");
	}

	createFilter(1000000000, '1$ Mil - 1$ Bil');

	$('.filters').find('input:checkbox').on("click", function () {
		var $article = $('article');
		var atLeastOneIsChecked = $('.filters :checkbox:checked').length;

		if (atLeastOneIsChecked > 0) {
			$article.hide();
			$(".filters").find("input:checked").each(function () {
				console.log($checkedLow);
				var $checkedLow = Number($(this).parent().prev().children().val());

				for (var i = 0; i < $article.length; i++) {
					if (isNaN($checkedLow)) {
						$checkedLow = 0;
					}else if ($article[i].dataset.price <= +$(this).val() && $article[i].dataset.price >= $checkedLow) {
						$article.eq(i).show();
					}
				}
			});
		} else {
			$article.show();
		}
	});

});
