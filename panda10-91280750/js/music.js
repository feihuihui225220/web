$(document).ready(function() {
    var myAuto = document.getElementById('audio1');
    var $musicIcon = $('.autoplay');
    var status= localStorage.getItem("status");

    if (status==0){
      myAuto.pause();
      $musicIcon.css('background-image', 'url(./images/sound1.png)');
    }
    else{
      myAuto.play();
      $musicIcon.css('background-image', 'url(./images/sound.png)');
    }


    $musicIcon.click(function() {
        if (myAuto.paused) {
            myAuto.play();
            localStorage.setItem("status", 1);
            $(this).css('background-image', 'url(./images/sound.png)');
        } else {
            myAuto.pause();
            localStorage.setItem("status", 0);
            $(this).css('background-image', 'url(./images/sound1.png)');
        }
    });
});
