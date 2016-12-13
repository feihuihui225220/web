$(document).ready(function(){
	$(".input_pass1").focus(function(){         // 地址框获得鼠标焦点
			var txt_value =  $(this).val();   // 得到当前文本框的值
			if(txt_value=="请输入用户名"){  
                $(this).val("");              // 如果符合条件，则清空文本框内容
			} 
	  });
	  $(".input_pass1").blur(function(){		  // 地址框失去鼠标焦点
	  	    var txt_value =  $(this).val();   // 得到当前文本框的值
			if(txt_value==""){
                $(this).val("请输入用户名");// 如果符合条件，则设置内容
			} 
	  })

	  $(".input_pass2").focus(function(){
			var txt_value =  $(this).val();
			if(txt_value=="请输入密码"){
                $(this).val("");
			} 
	  });
	  $(".input_pass2").blur(function(){
	  	    var txt_value =  $(this).val();
			if(txt_value==""){
                $(this).val("请输入密码");
			} 
	  })
})