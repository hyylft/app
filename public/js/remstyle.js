// remstyle.js
$(function(){
	 function setRem(){
        var clientWidth=$(window).width();
        var nowRem=(clientWidth*14/420);
        $("html").css("font-size",parseInt(nowRem, 10)+"px");
    };
    setRem();

    $(function(){
        var timer;
       $(window).bind("resize",function(){
            clearTimeout(timer)
            timer=setTimeout(function(){
                setRem();
            }, 100)
       })
    });
});