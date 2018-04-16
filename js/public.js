//顶部slid
$(".country").mouseenter(function(){
	$(".slid_down").slideDown(1000);
})
$(".country").parent().mouseleave(function(){
	$(".slid_down").slideUp(1000);
})



//顶部淡入淡出效果
setInterval(function(){
	$("#top_fix span").animate({opacity:0},1000,function(){
		$("#top_fix span").fadeTo(1000,1);
	})
},5000);

//顶部吸顶效果
var htmlw = $(window).width();
var top_fix_l = (htmlw - $("#top_fix").width())/2;
$(window).scroll(function(){
	if( $(window).scrollTop() >= $("#top_fix").height() ){
		$("#top_fix").css({
			"position":"fixed",
			"left":top_fix_l,
			"top":0
		});
	}else{
		$("#top_fix").css({
			"position":"static",
		});
	}
})

//购物车上下文字层级轮播
var index1 = 0;
setInterval(function(){
	index1++;
	if(index1==2){
		index1=0;
	}
	$(".text_scroll p").eq(index1).animate({top:0},500,function(){
		$(this).css("z-index",0).siblings().css({
			"top":23,
			"z-index":1
		});
	})
},5000)
	//鼠标上浮，购物车背景颜色和字体颜色更换
$(".text_scroll").mouseenter(function(){
	$(".text_scroll p").addClass("active1");
})
$(".text_scroll").mouseleave(function(){
	$(".text_scroll p").removeClass("active1");
})
//footer_fixed上的时间显示
setInterval(function(){
	var d = new Date();
	var timeStr = d.getFullYear();
	timeStr += ".";
	timeStr+=d.getMonth()+1;
	timeStr+=".";
	timeStr+=d.getDate();
	timeStr+=" ";
	timeStr+=d.getHours();
	timeStr+=":";
	timeStr+=d.getMinutes();
	timeStr+=":";
	timeStr+=d.getSeconds();
	timeStr+=" HKT";
	$(".time").html(timeStr);
},1000)

// side_banner固定
var sideB_l = ($(window).width()-950)/2+950;
var sideB_t = $(".body_wrap").offset().top-40;
$(".side_banner").css({
	"left":sideB_l,
	"top":sideB_t
})
//side_banner淡入淡出效果
var index2 = 0;
setInterval(function(){
	index2++;
	if(index2>3){
		index2=0;
	}
	$(".side_banner a").eq(index2).fadeIn().siblings().fadeOut();
},3000)



//左侧列表页显示隐藏
$li = $(".side_classify_bar ul li")
$li.children("a").click(function(){
 	$(this).siblings().toggle(1000);
 	$(this).parent().siblings().children("ul").hide(1000);
 	return false;
})



