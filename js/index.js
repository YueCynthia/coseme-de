

//banner淡入淡出效果
var index=0;
var timer = setInterval(autoplay,2000);
function autoplay(){
	index++;
	if(index>3){
		index=0;
	}
	$(".cir_num div").eq(index).animate({opacity:0.8},0).siblings().animate({opacity:0.3},0);
	$(".banner img").eq(index).fadeIn(1000).siblings().not("div").fadeOut(1000);
}

$(".cir_num div").mouseenter(function(){
	clearInterval(timer);
	index = $(this).index();
	$(this).animate({opacity:0.8},0).siblings().animate({opacity:0.3},0);
	$(".banner img").eq($(this).index()).fadeIn(1000).siblings().not("div").fadeOut(1000);	
})
$(".cir_num").mouseout(function(){
	clearInterval(timer);
	timer = setInterval(autoplay,2000)
})



//brand_carousel点击滚动
var brand_img_width = $(".brand_carousel img").width();
$(".arrow_l").click(function(){
	if($(".brand_carousel").position().left <=-2*brand_img_width){
		$(".brand_carousel").css("left",-2*brand_img_width)
	}else{
		var disx = $(".brand_carousel").position().left;
		var x = disx-brand_img_width;
		$(".brand_carousel").animate({"left":x},500);
	}
})
$(".arrow_r").click(function(){
	if($(".brand_carousel").position().left >=0){
		$(".brand_carousel").css("left",0)
	}else{
		var disx = $(".brand_carousel").position().left;
		var x = disx+brand_img_width;
		$(".brand_carousel").animate({"left":x},500);
	}
})

//shoplist内容展示通过ajax
 var deff = $.ajax({
	url:"data/shoplist.json",
	type:"get"
});
deff.done(function(json){
	var contentStr = "";
	for(var i = 0; i < json["newlist"].length; i++){
		contentStr+= `<li>
				<img class="list_img" src="images/index/${json["newlist"][i].src}">
				<img class="status" src="images/index/${json["newlist"][i].status}">
				<p class= "list_name">${json["newlist"][i].name}</p>
				<p class="list_intro">${json["newlist"][i].intro}</p>
				<p>CNY <span class="cny">${json["newlist"][i].cny}</span></p>
				<p class="wt900">USD <span class="usd">${json["newlist"][i].usd}</span></p>
				<p>节省<span class="save wt900">${json["newlist"][i].save}</span></p>
			</li>`
	}
	$(".shoplist").html(contentStr);
	//点击tag_bar切换tag_content中的内容
	$(".tag_bar table").click(function(){
		var contentStr = "";
		for(var i = 0; i < json[$(this).data("tagname")].length; i++){
			var pro = json[$(this).data("tagname")][i];
			contentStr+= `<li>
				<img class="list_img" src="images/index/${pro.src}">
				<img class="status" src="images/index/${pro.status}">
				<p class= "list_name">${pro.name}</p>
				<p class="list_intro">${pro.intro}</p>
				<p>CNY <span class="cny">${pro.cny}</span></p>
				<p class="wt900">USD <span class="usd">${pro.usd}</span></p>
				<p>节省<span class="save wt900">${pro.save}</span></p>
			</li>`
		}
		$(".shoplist").html(contentStr);
		//点击tag_bar 移动箭头
		$(".tag_arrow img").eq($(this).index()).show().siblings().hide();
	})
})



