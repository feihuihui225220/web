  $(document).ready(function() {
     localStorage["userId"]=parseInt((document.location.href).split("=")[1]);

    $('#restart').click(function() {
      localStorage.setItem('currentRound', 0);
        $('.start').hide();
        $('.game').show();
        start();
      });
      $('#continueLast').click(function() {
          $('.start').hide();
          $('.game').show();
          start();
      })
     // 首页-玩法演示
     $('.show_game .aa').click(function(){
     	$('.index').hide();
     	$('.gamerule').show();
      // $("#video_mp4")[0].play();
     })
     // 首页-开始游戏
     $('.start_game .aa').click(function(){
     	$('.index').hide();
     	$('.start').show();

      $.ajax({
          type: "GET",
          url: "http://lhttest.le-ho.cn/gamelevel/findMaxData",
          data: {
              userId: localStorage["userId"],
              gameId: 8,

          },
          dataType: 'json',
          success: function(data) {
            if(!data.level)
                  {localStorage.setItem('currentRound', 0);}
             else{
              localStorage.setItem('currentRound', data.level);
             } 

              var currentRound = localStorage.getItem('currentRound');
              if (currentRound >= 1) {
                  $('#restart').show();
                  $('#continueLast').show();
              } else {
                  $('#restart').hide();
                  $('#continueLast').hide();
              }
              if (currentRound >= 0 && currentRound <= 7) {
                  // $('.step .pic1').css('opacity', '1');
                   $('.step .pic1').attr("src","./images/1src.png");
                   $('.step .pic1').click(function() {
                      $('.start').hide();
                      $('.rule1').show();
                      localStorage.setItem('currentRound', 0);
                  })

              } else if (currentRound >= 8 && currentRound <= 15) {
                  // $('.step .pic1,.step .pic2').css('opacity', '1');
                  $('.step .tu2').css('visibility', ' visible');
                  $('.step .tu1,.step .tu3').css('visibility', 'hidden');

                  $('.step .pic1').attr("src","./images/1src.png");
                  $('.step .pic2').attr("src","./images/2src.png");
                  $('.step .pic1').click(function() {
                      $('.start').hide();
                      $('.rule1').show();
                      localStorage.setItem('currentRound', 0);
                  })
                  $('.step .pic2').click(function() {
                      $('.start').hide();
                      $('.rule2').show();
                      localStorage.setItem('currentRound', 8);
                  })
              } else if (currentRound >= 16 && currentRound <= 24) {
                  // $('.step .pic1,.step .pic2,.step .pic3').css('opacity', '1');
                  $('.step .tu3').css('visibility', ' visible');
                  $('.step .tu1,.step .tu2').css('visibility', 'hidden');
                  $('.step .pic1').attr("src","./images/1src.png");
                  $('.step .pic2').attr("src","./images/2src.png");
                  $('.step .pic3').attr("src","./images/3src.png");
                  $('.step .pic1').click(function() {
                      $('.start').hide();
                      $('.rule1').show();
                      localStorage.setItem('currentRound', 0);
                  })
                  $('.step .pic2').click(function() {
                      $('.start').hide();
                      $('.rule2').show();
                      localStorage.setItem('currentRound', 8);
                  })
                  $('.step .pic3').click(function() {
                      $('.start').hide();
                      $('.rule3').show();
                      localStorage.setItem('currentRound', 16);
                  })
              }

          }
      });
     })
     // 首页-查看积分
     $('.grade_game .aa').click(function(){
     	 $('.index').hide();
     	 $('.totalscore').show();
       drawChart();
          // $('.container').css('background-image','none');
     })
     // 主页-游戏目的
     $('.purpose_game .aa').click(function(){
     		$('.index').hide();
     	 	$('.purpose').show();

     })
     // 规则页 -开始
     $('.rule_btn a').click(function(){
     	
     	$('.gamerule').hide();
     	$('.gameshow').show();
     })
     // 玩法演示-返回首页
     $('.gameshow .return').click(function(){
     	$('.gameshow').hide();
     	$('.index').show();
      // $("#video_mp4")[0].pause();
     })
     // 游戏-返回首页
     $('#returnindex').click(function(){
     	$('.game').hide();
     	$('.index').show();
     })
     // 积分-返回首页
     $('.totalscore .return').click(function(){
     	$('.totalscore').hide();
     	$('.index').show();
     })
     // 游戏目的-返回首页
     $('.purpose .rule_btn a').click(function(){
     		$('.purpose').hide();
     		$('.gameshow').hide();
     		$('.index').show();
     })
     // 结束页1-查看积分
     $('.finish1 .btn .a1').click(function(){
          $('.finish1').hide();
          $('.totalscore').show();
          drawChart();
     })
     // 结束页1-开始下一轮
      $('.finish1 .btn .a2').click(function(){
          $('.finish1').hide();
          $('.rule2').show();
     })
       // 结束页2-查看积分
     $('.finish2 .btn .a1').click(function(){
          $('.finish2').hide();
          $('.totalscore').show();
          drawChart();
     })
     // 结束页2-开始下一轮
      $('.finish2 .btn .a2').click(function(){
          $('.finish2').hide();
          $('.rule3').show();
     })
         // 结束页3-查看积分
     $('.finish3 .btn .a1').click(function(){
          $('.finish3').hide();
          $('.totalscore').show();
          drawChart();
     })
     // 结束页3-返回首页
      $('.finish3 .btn .a2').click(function(){
          $('.finish3').hide();
          $('.index').show();
     })
      // 规则页-开始
      $('.rule1 .rule11 .begin').click(function(){
          
          $('.rule1').hide();
          $('.rule2').hide();
          $('.rule3').hide();
          $('.game').show();
          start();
      })

      $('.rule2 .rule11 .begin').click(function(){
          $('.rule1').hide();
          $('.rule2').hide();
          $('.rule3').hide();
          $('.game').show();
          start();
      })

      $('.rule3 .rule11 .begin').click(function(){
          $('.rule1').hide();
          $('.rule2').hide();
          $('.rule3').hide();
          $('.game').show();
          start();
      })

  })
