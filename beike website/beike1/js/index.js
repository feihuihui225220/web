$(document).ready(function() {
    
    $('.sidebar-info').hover(function() {
        $('.side-opacity').show();
        $(this).stop().animate({ right: '0px' },500);
        },function() {
        $('.side-opacity').hide();
        $(this).stop().animate({ right: '-400px' },500);
    });

    
    $('#header nav .nav-menu ul li a').mouseover(function() {

        $(this).addClass('active').siblings().removeClass('active');
    })
    $('#header nav .nav-menu ul li a').mouseout(function() {

        $(this).removeClass('active');
    })

// 电脑导航
    $('.nav-menu .index,.footerlink .f_index').click(function() {
        $('body').scrollTop(0);
    })
    $('.nav-menu .about,.footerlink .f_aboutus').click(function() {
        $("html,body").animate({ scrollTop: $("#aboutUs").offset().top-120 }, 1000)
    })

    $('.nav-menu .exchange').click(function() {
        $("html,body").animate({ scrollTop: $("#communicate").offset().top-120 }, 1000)
    })
    $('.nav-menu .scentific,.footerlink .f_research').click(function() {
        $("html,body").animate({ scrollTop: $("#research").offset().top-120 }, 1000)
    })
    $('.nav-menu .news,.footerlink .f_news').click(function() {
        $("html,body").animate({ scrollTop: $("#News").offset().top-120 }, 1000)
    })
     $('.nav-menu .contact,.footerlink .f_contact').click(function() {
        $("html,body").animate({ scrollTop: $("#footer").offset().top }, 1000)
    })
     // 手机导航
      $('.menu-ul .shouye').click(function() {
        $('.menu-ul').hide();
        $('body').scrollTop(0);
    })
    $('.menu-ul .guanyu').click(function() {
        $('.menu-ul').hide();
        $("html,body").animate({ scrollTop: $("#aboutUs").offset().top-60 }, 1000)
    })

    $('.menu-ul .duiwai').click(function() {
        $('.menu-ul').hide();
        $("html,body").animate({ scrollTop: $("#communicate").offset().top-60 }, 1000)
    })
    $('.menu-ul .kexue').click(function() {
        $('.menu-ul').hide();
        $("html,body").animate({ scrollTop: $("#research").offset().top-60 }, 1000)
    })
    $('.nav-menu .news,.footerlink .f_news,.menu-ul .xinwen').click(function() {
        $('.menu-ul').hide();
        $("html,body").animate({ scrollTop: $("#News").offset().top-60 }, 1000)
    })
     $('.nav-menu .contact,.footerlink .f_contact,.menu-ul .lianxi').click(function() {
        $('.menu-ul').hide();
        $("html,body").animate({ scrollTop: $("#footer").offset().top }, 1000)
    })


     $('#return').click(function() {
        $("html,body").animate({ scrollTop: $("#header").offset().top }, 1000)
    })

    $('.newsMain .less').click(function(){
                $('.recentnews li:first').animate({marginLeft:"-275px"},function(){
                    $(this).css('margin-left','26.5px').appendTo('.recentnews');
                });
            });
    $('.newsMain .larger').click(function(){
                $('.recentnews li:last').prependTo('.recentnews').css('margin-left','-275px').animate({marginLeft:"26.5px"});
            });


$('.brand .lht').hover(function(){
    $(this).attr('src','./images/lht1.png');
},function(){
    $(this).attr('src','./images/lht.png')
})
$('.brand .ylpt').hover(function(){
    $(this).attr('src','./images/ylpt1.png');
},function(){
    $(this).attr('src','./images/ylpt.png')
})
$('.brand .chpx').hover(function(){
    $(this).attr('src','./images/chpx1.png');
},function(){
    $(this).attr('src','./images/chpx.png')
})

$('.brand .gjlt').hover(function(){
    $(this).attr('src','./images/gjlt1.png');
},function(){
    $(this).attr('src','./images/gjlt.png')
})

$('.brand .qyzr').hover(function(){
    $(this).attr('src','./images/qyzr1.png');
},function(){
    $(this).attr('src','./images/qyzr.png')
})




// document.getElementsByTagName('body')[0].onscroll=function(){
//     var scroll_top = $(document).scrollTop(); 
//     var return1=document.getElementById('return');
//     //console.log(scroll_top);
//     if(scroll_top>0){return1.style.display='block';}
//     else{return1.style.display='none';}
// }

$("#header .btn1").click(function(){
if($(".menu-ul").css("display")=="none"){
$(".menu-ul").show();
}else{
$(".menu-ul").hide();
}
});




})