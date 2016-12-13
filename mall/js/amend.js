// 修改资料页面
function isLeapYear(year) {  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);  }

$(document).ready(function(){
		$('.amend_mainl ul li').on('mouseenter',function(){
		if(!$(this).hasClass('active')){
			$(this).removeClass('default');
			$(this).addClass('active');
		}
	}).on('mouseleave',function(){
		$(this).removeClass('active');
		$(this).addClass('default');
	});

/获取select日历 年-月-日/ 
	    var d=new Date();
	    var vYear=d.getFullYear();
		for(var i=vYear;i>=1920;i--){
			$('#birthdayYear').append('<option value='+i+'>'+i+'</option>');
		}

		$('#birthdayYear,#birthdayMonth').change(function(){
			var year = $('#birthdayYear').val();
			var month = $('#birthdayMonth').val();
			var day;

			switch(month){
				case "1":
				case "3":
				case "5":
				case "7":
				case "8":
				case "10":
				case "12":
				day=31;
				break;
				case "2":
					if(isLeapYear(year)){
						day = 29;
					}
					else{
						day =28;
					}
					break;
				case "4":
				case "6":
				case "9":
				case "11":
				day =30;
				break;

			}

			$('#birthdayDay option:gt(1)').remove();
			for(var i=1;i<=day;i++){
			$('#birthdayDay').append('<option value='+i+'>'+i+'</option>');
		}
		});

})

// 新增收货地址 遮罩层
function ShowDiv(show_div,bg_div){
document.getElementById(show_div).style.display='block';
document.getElementById(bg_div).style.display='block' ;
var bgdiv = document.getElementById(bg_div);
bgdiv.style.width = document.body.scrollWidth;
// bgdiv.style.height = $(document).height();
$("#"+bg_div).height($(document).height());
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
document.getElementById(show_div).style.display='none';
document.getElementById(bg_div).style.display='none';
};
//添加收货地址 onblur事件

$(document).ready(function(){
	$('.item .input1').blur(function(){
		if(this.value==""){
			$('.a_sh1').css('display','block');
		}
		else{
			$('.a_sh1').css('display','none');
		}
	})
		$('.item .input2').blur(function(){
		if(this.value==""){
			$('.a_sh2').css('display','block');
		}
		else{
			$('.a_sh2').css('display','none');
		}
	})
			$('.item .input3').blur(function(){
		if(this.value==""){
			$('.a_sh3').css('display','block');
		}
		else{
			$('.a_sh3').css('display','none');
		}
	})
})
// 收获地址删除
$(document).ready(function(){
	$('.a3').click(function(){
		if(confirm('确定删除该地址吗？')){
				$(this).parent().parent().remove();
		}
	})
})

