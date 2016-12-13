$(document).ready(function() {
    // 大图小图切换
    var imgs = $('.smallPic img');
    var lens = imgs.length;
    $('.smallPic img').click(function() {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        $('.smallPic').hide();
        $('#bigPic').show();
        var src1 = $(this).attr('src');
        $('#bigPic img').attr('src', src1);
    })
    $('#bigPic').click(function() {
            $(this).hide();
            $('.smallPic').show();
        })
        // 清空所有
    $('.clearAll').click(function() {
        if($('.closePic').length>0){
            $('.closePic').show();
            // $('.deletePic').text('完成');
            if (confirm("确定要删除所有照片？")) {
                $('.thumbnail').has('.closePic:visible').parent().fadeOut(function() {
                    $(this).remove();
                });
            } else { $('.closePic').hide(); }
            }
        else{alert('没有图片可以清除！');}


        })
        // 删除单张图片
    $('.deletePic').click(function() {
        if ($('.thumbnail').length>0) {
            if ($(this).html() == '删除') { $('.closePic').show(); }
        }
        else{alert('没有图片可以清除！');}
        })
        // 单击显示关闭按钮
    $('.closePic').click(function() {
        $(this).parent().parent().remove();
    })
})
