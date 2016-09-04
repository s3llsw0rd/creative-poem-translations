$(document).ready(function(){

	$('span').on('click', function(){
		$('.translate').html(function(){
			var str = '<div class="uil-magnify-css" style="transform:scale(0.6);"><div class="group"><div class="grip"></div><div class="inner-circle"></div><div class="outer-circle"></div></div></div>';
			return str;
		}); 
		var object = { 'word': $(this).attr('word') };
		$.post('/api_call', object, function(res){
			if (res.result){
				$('.translate').html('');
				for (var i = 0; i < res.result.length; i++){
					var htmlstr = res.result[i];
					$('.translate').append(function(){
						return htmlstr;
					});
				}
			} else {
				$('.translate').html('<p>Search term has no results</p>');
			}
		}, 'json');
	});

});
