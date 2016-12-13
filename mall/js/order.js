

$(document).ready(function(){
$('.order-a2').click(function(){
	if(confirm('确定要删除数据吗？')){
  $(this).parent().parent().remove();
	}
})

})

// 遮罩层
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

$(function(){
	$('.order_address').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected')
	})
	$('.order_payment').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected')
	})
})

$(document).ready(function(){
	$('.suborder').click(function(){
		var $i=$('.order_address');
		var $j=$('.order_payment');
	if( ($i.hasClass('selected')||$i.siblings().hasClass('selected')) && ($j.hasClass('selected')||$j.siblings().hasClass('selected') ) ){
		$(this).attr('href','./支付.html');
		}
	else {alert("请选择收货地址或支付方式！")}
	})
})