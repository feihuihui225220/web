$(document).ready(function(){
$('#fuwu').on('mouseenter',function(){
		$(this).addClass('tongb');
	}).on('mouseleave',function(){
		$(this).removeClass('tongb');
	});
$('#sc').on('mouseenter',function(){
		$(this).addClass('tongb');
	}).on('mouseleave',function(){
		$(this).removeClass('tongb');
	});
$('#aixin').on('mouseenter',function(){
		$(this).addClass('tongb');
	}).on('mouseleave',function(){
		$(this).removeClass('tongb');
	});

});

$(function(){
			

				//手动控制轮播图
				$('#one li').eq(0).show();

				$('#two li').mouseover(function(){
					$(this).addClass('on').siblings().removeClass('on');
					var index=$(this).index();
					i=index;
					$('#one li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
				})
				//自动播放
				var i=0;
				var t=setInterval(move,1500);
				//自动播放核心函数
				function move(){
					i++;
					if(i==5){
						i=0;
					}
					$('#two li').eq(i).addClass('on').siblings().removeClass('on');
					$('#one li').eq(i).fadeIn(1000).siblings().fadeOut(1000);
				}

				//向右播放核心函数
				function moveL(){
					i--;
					if(i==-1){
						i=4;
					}
					$('#two li').eq(i).addClass('on').siblings().removeClass('on');
					$('#one li').eq(i).fadeIn(1000).siblings().fadeOut(1000);
				}
				$('#left').click(function(){
						moveL();
				})
				$('#right').click(function(){
					move();
				})
				//鼠标移入移除
				$('#lunbo').hover(function(){
					clearInterval(t);
				},function(){
					t=setInterval(move,4000);
				})
				
})

// 购物车缩略图累加
$(document).ready(function(e) { 
$(".ljqg").click(function(){ 
var j=$("#num").text(); 
var i= parseInt(j); 
i=i+1; 
$("#num").text(i); 
}) 
}); 






