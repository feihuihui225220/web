// 全选
$(document).ready(function(){
	$('#checkq,[name="qx"]').click(function(){
		$('[name="spbh"],#checkq,[name="qx"]').prop('checked',($(this).prop('checked')));
		jiSuan();
	});

// 增1
	$('.cart-item-b4 .plus').click(function(){
		var i=$(this).siblings('.text-amount').val();
		i++;
		$(this).siblings('.text-amount').val(i);
		$(this).parent().parent().prev().children('[name="spbh"]').attr("checked",true);
		var j=$(this).parent().prev().html();
		var q=$(this).siblings('.text-amount').val();
	  	$(this).parent().next().html(parseFloat(j*q).toFixed(2));
	  	jiSuan();
	})


	// 减1
	$('.cart-item-b4 .minus').click(function(){
		var i=$(this).siblings('.text-amount').val();
		if(i>1){i--}
			else{i=1;}
		$(this).siblings('.text-amount').val(i);
		$(this).parent().parent().prev().children('[name="spbh"]').attr("checked",true);
			var j=$(this).parent().prev().html();
			var q=$(this).siblings('.text-amount').val();
	  $(this).parent().next().html(parseFloat(j*q).toFixed(2));
	  jiSuan();
	})

	$('[name="spbh"]').click(function(){
		jiSuan();
	});
// 直接输入
	$('.text-amount').keyup(function(){
		$(this).parent().parent().prev().children('[name="spbh"]').attr("checked",true);
	if (!isNaN(( parseInt($(this).val())  ) ) ) 
		{
		var j=$(this).parent().prev().html();
		var q=$(this).val();
	  $(this).parent().next().html(parseFloat(j*q).toFixed(2));
			jiSuan();}
	else{alert('请输入数字后回车！'); return false;}
		
	
	})
	
})
$(document).ready(function(){
$('.del').click(function(){
	if(confirm('确定要删除数据吗？')){
  $(this).parent().parent().parent().remove();
	}
})

$('.btn_js').click(function(){
	
	if($('[name="spbh"]').is(":checked")){
	$(this).attr('href','下单.html')}
	else{
		alert('请至少选中一种商品');
	}
})
})
// 计算总件数和总钱数
function jiSuan(){
	var totalAmount = 0;
	var totalMoney = 0.00;
	$('[name="spbh"]:checked').each(function(i,n){
		totalAmount += parseInt($(this).parent().next().find('.text-amount').val());
		totalMoney += parseFloat($(this).parent().next().find('.cart-item-b5').html());
	});

	$('.jianshu').html(totalAmount);
	$('.zongjia').html(totalMoney.toFixed(2));
}
