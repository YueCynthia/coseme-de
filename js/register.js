var login_flag = true;
var call_str = "";
$(".login_button").click(function(){
	var cookie_arr = getCookie("userInfo");
	for (var i = 0; i < cookie_arr.length; i++) {
		if(cookie_arr[i]["email"]==$("#register_email").val() && cookie_arr[i]["password"]==$("#register_psd").val()){
			$(".login_warn").hide();
			login_flag = false;
			call_str = cookie_arr[i]["call"]+cookie_arr[i]["uname"];
			console.log(call_str);
			location.href = "index.html";
		}
	}
	if(login_flag){
		$(".login_warn").show();
	}
})
