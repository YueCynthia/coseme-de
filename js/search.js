










//shoplist内容展示通过ajax
 var deff = $.ajax({
	url:`data/shoplist.json?id=${new Date().getTime()}`,
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
})
