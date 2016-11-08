
$(document).ready(function(){
// 全选
	$('#checkq,[name="ddh"]').click(function(){
		$('[name="ddh"],#checkq,[name="qx"]').prop('checked',($(this).prop('checked')));
	});
// 删除
	$('.del').click(function(){
	if(confirm('确定要删除数据吗？')){
  $(this).parent().parent().remove();
	}
	})
})