$(document).ready(function(){
//  首页导航
	$('#nav li').on('mouseenter',function(){
		$(this).addClass('nav_active');
	}).on('mouseleave',function(){
		$(this).removeClass('nav_active');
	});

	$('#spfl').on('mouseenter',function(){
		$("#erjicaidan").css('display','block');
	}).on('mouseleave',function(){
		$("#erjicaidan").css('display','none');
	});
	
		$('#header_topl .span1').on('mouseenter',function(){
		$("#header_topl .sp_child").css('display','block');
	}).on('mouseleave',function(){
		$("#header_topl .sp_child").css('display','none');
	});
// 购物车

	$('#gouwu').on('mouseenter',function(){
		$("#erjigw").css('display','block');
	}).on('mouseleave',function(){
		$("#erjigw").css('display','none');
	});
});