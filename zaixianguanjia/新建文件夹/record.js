$(document).ready(function() {
    $('.thumbnail img').click(function() {
        $(this).next().children().eq(1).show();
    });
    $('.deletePic').click(function() {
        var $closePics = $('.thumbnail').has('.closePic:visible');
        if($closePics.length <= 0){
            alert('请至少选择一张照片！');
            return;
        }

        $closePics.parent().fadeOut(function(){
            $(this).remove();
        });
    })
    // 清空所有
    $('.clearAll').click(function() {
            $('.closePic').show();
            $('.deletePic').text('完成');
            $('.deletePic').click(function() {
                var $closePics = $('.thumbnail').has('.closePic:visible');
                $closePics.parent().fadeOut(function(){
                $(this).remove();
                });
            })
        })
        // 单击显示关闭按钮
    $('.closePic').click(function() {
        $(this).hide();
    })
})
