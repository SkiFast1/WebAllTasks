$(function(){

	$('.load-more').on('click', function(){
		const btn = $(this);
		const loader = btn.find('span');
		$.ajax({
			url: '/data.html',
			type: 'GET',
			beforeSend: function(){
				btn.attr('disabled', true);
				loader.addClass('d-inline-block');
			},
			success: function(responce){
				setTimeout(function(){
					loader.removeClass('d-inline-block');
					btn.attr('disabled', false);
					$('.after-posts').before(responce);
				}, 1000);
			},
			error: function(){
				alert('Error!');
				loader.removeClass('d-inline-block');
				btn.attr('disabled', false);
			}
		});
	});

});

$(".fab").mouseover(function(){
    $("footer").css("background-color","black");
    $("#tt1").css("color","white");
    $("#tt2").css("color","white");
    $("#tt3").css("color","white");
});
$(".fab").mouseout(function(){
    $("footer").css("background-color","#f0f0f0");
    $("#tt1").css("color","black");
    $("#tt2").css("color","black");
    $("#tt3").css("color","black");
});
