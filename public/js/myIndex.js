// myIndex.js

$(function(){
	$(document).on('tap','.myFoot div',function(){
		$(".myFoot div").removeClass('myColor');
		$(".myFoot div i").removeClass('imgOn');
		$(this).addClass('myColor');
		$(this).find('i').addClass('imgOn');
	})	

})