  $(function(){
    // 增1
    $('.plus').click(function(){
      var i=$('.textinput').val();
      i++;
      $('.textinput').val(i);
      fun_submit(30*i);
    })
    // 减1
    $('.minus').click(function(){
      var i=$('.textinput').val();
      if(i>1){
        i--;
      }
      else{i=1;}
      $('.textinput').val(i);
      fun_submit(30*i);
    })
    // 时间计算
 function fun_submit(arg){
        var date1 = new Date();
        var date2 = new Date(date1);
        date2.setDate(date1.getDate()+arg);
        var year=date2.getFullYear();
        var month=date2.getMonth()+1;
        var day=date2.getDate();
        $('.year').html(year);
        $('.month').html(month);
        $('.day').html(day);
      }
      fun_submit(30);
      $('.payNow').click(function(){
        window.location.href="pay.html";
      })
  })