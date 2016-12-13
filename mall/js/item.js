$(function(){
	$('.bottom_instruction').on('click',function(){
	$('.item_instruction').css('display','block');
 })
})

// 商品详情页tab选项卡
$(function(){
	$('.jieshao').click(function(){
		$('.jieshao').css('border-top','1px solid #dd6714').siblings().css('border-top','none');
		$(".item_mainbottom_23").css('display','block');
		$(".item_instruction").css('display','none');
		$(".item_judge").css('display','none');
		
	})
	$('.pingjia').click(function(){
		$('.pingjia').css('border-top','1px solid #dd6714').siblings().css('border-top','none');
		$(".item_mainbottom_23").css('display','none');
		$(".item_instruction").css('display','none');
		$(".item_judge").css('display','block');
		
	})
	$('.shuoming').click(function(){
		$('.shuoming').css('border-top','1px solid #dd6714').siblings().css('border-top','none');
		$(".item_mainbottom_23").css('display','none');
		$(".item_instruction").css('display','block');
		$(".item_judge").css('display','none');
		
	})
})
// 商品详情页大小图切换
$(document).ready(function(){
	// 图片上下滚动
	var count = $("#imageMenu li").length - 5; /* 显示 6 个 li标签内容 */
	var interval = $("#imageMenu li:first").width();
	var curIndex = 0;
	
	$('.scrollbutton').click(function(){
		if( $(this).hasClass('disabled') ) return false;
		
		if ($(this).hasClass('smallImgUp')) --curIndex;
		else ++curIndex;
		
		$('.scrollbutton').removeClass('disabled');
		if (curIndex == 0) $('.smallImgUp').addClass('disabled');
		if (curIndex == count-1) $('.smallImgDown').addClass('disabled');
		
		$("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*interval + "px"}, 600);
	});	
    var midChangeHandler = null;
	
    $("#imageMenu li img").bind("click", function(){
		if ($(this).attr("id") != "onlickImg") {
			midChange($(this).attr("src").replace("small", "mid"));
			$("#imageMenu li").removeAttr("id");
			$(this).parent().attr("id", "onlickImg");
		}
	}).bind("mouseover", function(){
		if ($(this).attr("id") != "onlickImg") {
			window.clearTimeout(midChangeHandler);
			midChange($(this).attr("src").replace("small", "mid"));
			$(this).css({ "border": "3px solid #959595" });
		}
	}).bind("mouseout", function(){
		if($(this).attr("id") != "onlickImg"){
			$(this).removeAttr("style");
			midChangeHandler = window.setTimeout(function(){
				midChange($("#onlickImg img").attr("src").replace("small", "mid"));
			}, 1000);
		}
	});
    function midChange(src) {
        $("#midimg").attr("src", src).load(function() {
            changeViewImg();
        });
    }
    //大视窗看图
    function mouseover(e) {
        if ($("#winSelector").css("display") == "none") {
            $("#winSelector,#bigView").show();
        }
        $("#winSelector").css(fixedPosition(e));
        e.stopPropagation();
    }
    function mouseOut(e) {
        if ($("#winSelector").css("display") != "none") {
            $("#winSelector,#bigView").hide();
        }
        e.stopPropagation();
    }
    $("#midimg").mouseover(mouseover); //中图事件
    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件

    var $divWidth = $("#winSelector").width(); //选择器宽度
    var $divHeight = $("#winSelector").height(); //选择器高度
    var $imgWidth = $("#midimg").width(); //中图宽度
    var $imgHeight = $("#midimg").height(); //中图高度
    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度

    function changeViewImg() {
        $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));
    }
    changeViewImg();
    $("#bigView").scrollLeft(0).scrollTop(0);
    function fixedPosition(e) {
        if (e == null) {
            return;
        }
        var $imgLeft = $("#midimg").offset().left; //中图左边距
        var $imgTop = $("#midimg").offset().top; //中图上边距
        X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X
        Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y
        X = X < 0 ? 0 : X;
        Y = Y < 0 ? 0 : Y;
        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;
        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;

        if ($viewImgWidth == null) {
            $viewImgWidth = $("#bigView img").outerWidth();
            $viewImgHeight = $("#bigView img").height();
            if ($viewImgWidth < 200 || $viewImgHeight < 200) {
                $viewImgWidth = $viewImgHeight = 800;
            }
            $height = $divHeight * $viewImgHeight / $imgHeight;
            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);
            $("#bigView").height($height);
        }
        var scrollX = X * $viewImgWidth / $imgWidth;
        var scrollY = Y * $viewImgHeight / $imgHeight;
        $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });
        $("#bigView").css({ "top": 75, "left": $(".preview").offset().left + $(".preview").width() + 15 });

        return { left: X, top: Y };
    }
});
// 选中颜色、型号
$(document).ready(function(){
    $('.item_color2 li').click(function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');


    })
})

$(document).ready(function(){
   $('.item_model2 li').click(function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    })
// 数量值自增、自减
$('.item_number2 .a2').click(function(){
  var i=$('.item_number2input').val();
  i++;
  $('.item_number2input').val(i);
}) 

$('.item_number2 .a1').click(function(){
  var i=$('.item_number2input').val();
  if(i>=2){i--;}
  else {i=1;}
  
  $('.item_number2input').val(i);
}) 

})

// 购物车缩略图累加
$(document).ready(function(e) { 
$(".item_cart").click(function(){ 
$("#num").text($(".item_number2input").val()); 
}) 
}); 

  

