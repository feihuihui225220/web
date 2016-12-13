$(document).ready(function(){
	// 左侧伸缩菜单
	$('.client').click(function(){
		$(this).next().toggle();
	})
	$('.order').click(function(){
		$(this).next().toggle();
	})
 $('.main_left .parent li a').mouseover(function(){
 	$(this).addClass('select');
 })
  $('.main_left .parent li a').mouseout(function(){
 	$(this).removeClass('select');
 })
  $('.textbox').focus(function(){
  	$(this).text('');
  })
})