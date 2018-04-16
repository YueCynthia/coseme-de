//验证码随机出现
var code_num = rand(1,10);
var path = `images/enroll/code${code_num}.gif`;
var code_letter=letter_judge();
$(".code_img span img").attr("src",path);
$(".code_img b").click(function(){
	code_num = rand(1,10);
	path = `images/enroll/code${code_num}.gif`;
	$(".code_img span img").attr("src",path);
	code_letter=letter_judge();
})
	//判断图片上的字母
function letter_judge(){
	switch(code_num){
		case 1 : return "FENK"; break;
		case 2 : return "LDMT"; break;
		case 3 : return "JQSK"; break;
		case 4 : return "BFZO"; break;
		case 5 : return "ZJHU"; break;
		case 6 : return "FTTE"; break;
		case 7 : return "VSBV"; break;
		case 8 : return "WMNR"; break;
		case 9 : return "GGVI"; break;
		case 10 : return "VKLL"; break;
	}
}
//提交事件
	//存cookie变量的定义
var enroll_json = {
	"call":"",
	"uname":"",
	"email" : "",
	"password" : ""
} 
var enroll_arr = [];
var oldCookie = [];

$("#sub_btn").click(function(){
	// //表单验证
	var call_flag,addr_flag,email_flag,psd_flag,clause_flag,code_flag,cookie_flag = true;
	if($(".call").val()=="--" || $(".uname input").val()==""){
		$(".warn_tips").show();
		$("#warn_name").show();
		call_flag = false;
	}else{
		$(".warn_tips").hide();
		$("#warn_name").hide();
		call_flag = true;
	}

	if($(".addr").val()=="-- 请选择 --"){
		$(".warn_tips").show();
		$("#warn_addr").show();
		addr_flag = false;
	}else{
		$(".warn_tips").hide();
		$("#warn_addr").hide();
		addr_flag = true;
	}

	if($(".email input").val()=="" || !email_judge()){
		$(".warn_tips").show();
		$("#warn_email").show();
		email_flag = false;
	}else if($(".email input").val()!=$(".reemail input").val()){
		$(".warn_tips").show();
		$("#warn_reemail").show();
		email_flag = false;
	}else{
		$(".warn_tips").hide();
		$("#warn_email").hide();
		$("#warn_reemail").hide();
		email_flag = true;
	}

	if($(".password input").val()=="" || !psd_judge()){
		$(".warn_tips").show();
		$("#warn_psd").show();
		psd_flag = false;
	}else if($(".password input").val()!=$(".repassword input").val()){
		$(".warn_tips").show();
		$("#warn_repsd").show();
		psd_flag = false;
	}else{
		$(".warn_tips").hide();
		$("#warn_psd").hide();
		$("#warn_repsd").hide();
		psd_flag = true;
	}
	// alert($(".clause input").prop("checked"));
	if(!$(".clause input").is(":checked")){
		$(".warn_tips").show();
		$("#warn_clause").show();
		clause_flag = false;
	}else{
		$(".warn_tips").hide();
		$("#warn_clause").hide();
		clause_flag = true;
	}

	if($(".id_code_in input").val()!=code_letter){
		$(".warn_tips").show();
		$("#warn_code").show();
		code_flag = false;
	}else{
		$(".warn_tips").hide();
		$("#warn_code").hide();
		code_flag = true;
	}
 
	if( email_flag && psd_flag && call_flag && addr_flag && clause_flag && code_flag ){
		//存储旧的cookie
		oldCookie = getCookie("userInfo");
		if(oldCookie.length != 0){//有cookie
			enroll_arr = oldCookie;
			for(var i = 0; i < enroll_arr.length; i++){
				if($(".email input").val()==enroll_arr[i]["email"]){
					$(".warn_tips").show();
					$("#warn_already").show();
					$("#warn_already").siblings().hide();
					$("html,body").scrollTop(200);
					cookie_flag = false;
				}
			}
		}
		if(cookie_flag){
				$(".warn_tips").hide();
				$("#warn_already").hide();
				//存cookie
				// enroll_json["email"]=$(".email input").val();
				// enroll_json["password"]=$(".password input").val();此写法有问题
				enroll_json = {
					"call":$(".call option:selected").val(),
					"uname":$(".uname input").val(),
					"email":$(".email input").val(),
					"password":$(".password input").val()
				};
				console.log(enroll_json);
				enroll_arr.push(enroll_json);
				console.log(enroll_arr);
				setCookie("userInfo",JSON.stringify(enroll_arr),3);
				// location.href = "register.html";
			}
	}else{
		$("html,body").scrollTop(200);
	}
	return false;

})



	//邮箱格式验证
function email_judge(){
	var regMail = /^\w+@\w+(\.\w+)*\.(com|cn)$/;
	if(regMail.test($(".email input").val())){
		return true;
	}else{
		return false;
	}
}
	//密码格式验证
function psd_judge(){
	var regPsd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
	if(regPsd.test($(".password input").val())){
		return true;
	}else{
		return false;
	}
}
