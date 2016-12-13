  $(document).ready(function() {
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

      $('#restart').click(function() {
      localStorage.setItem('currentRound', 0);
        $('.start').hide();
        $('.game').show();
      });
      $('#continueLast').click(function() {
          $('.start').hide();
          $('.game').show();
      })
  })
