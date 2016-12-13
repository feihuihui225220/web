var roundSetting = [{
    pandaCount: [3, 3, 3, 3, 4, 4, 4, 4],
    pandaturnCount: 1,
    pandaColor: ['images/baby2.png', 'images/baby2.png', 'images/baby2.png', 'images/baby2.png', 'images/baby1.png', 'images/baby1.png', 'images/baby1.png', 'images/baby1.png'],
    pandaSpeedPc: [{ vx: 0.4, vy: 0.4 }, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }, { vx: 0.4, vy: 0.4}, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }],
    pandaSpeedPad:  [{ vx: 1.8, vy: 1.8 }, { vx: 1.8, vy: 1.8}, { vx: 2.3, vy: 2.3 }, { vx: 2.3, vy: 2.3 }, { vx: 1.8, vy: 1.8}, { vx: 1.8, vy: 1.8}, { vx: 2.3, vy: 2.3 }, { vx: 2.3, vy: 2.3 }],
    pandaMoveTime: [5, 10, 5, 10, 5, 10, 5, 10],
    gradeshow: ['第一轮 1/8', '第一轮 2/8', '第一轮 3/8', '第一轮 4/8', '第一轮 5/8', '第一轮 6/8', '第一轮 7/8', '第一轮 8/8']
}, {
    pandaCount: [4, 4, 4, 4, 5, 5, 5, 5],
    pandaturnCount: 2,
    pandaColor: [
        'images/second1.png','images/second1.png','images/second1.png','images/second1.png',
        'images/second2.png','images/second2.png','images/second2.png','images/second2.png'
    ],
    pandaSpeedPc: [{ vx: 0.4, vy: 0.4 }, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }, { vx: 0.4, vy: 0.4}, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }],
    pandaSpeedPad:  [{ vx: 1.8, vy: 1.8 }, { vx: 1.8, vy: 1.8}, { vx: 2.3, vy: 2.3 }, { vx: 2.3, vy: 2.3 }, { vx: 1.8, vy: 1.8}, { vx: 1.8, vy: 1.8}, { vx: 2.3, vy: 2.3 }, { vx: 2.3, vy: 2.3 }],
    pandaMoveTime: [5, 10, 5, 10, 5, 10, 5, 10],
    gradeshow: ['第二轮 1/8', '第二轮 2/8', '第二轮 3/8', '第二轮 4/8', '第二轮 5/8', '第二轮 6/8', '第二轮 7/8', '第二轮 8/8']
}, 
{
    pandaCount: [5, 5, 5, 5, 6, 6, 6, 6],
    pandaturnCount: 3,
    pandaColor: [
        'images/third1.png','images/third1.png','images/third1.png','images/third1.png',
        'images/third2.png','images/third2.png','images/third2.png','images/third2.png'
    ],
    pandaSpeedPc: [{ vx: 0.4, vy: 0.4 }, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }, { vx: 0.4, vy: 0.4}, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }],
    pandaSpeedPad: [{ vx: 1.8, vy: 1.8 }, { vx: 1.8, vy: 1.8}, { vx: 2.3, vy: 2.3 }, { vx: 2.3, vy: 2.3 }, { vx: 1.8, vy: 1.8}, { vx: 1.8, vy: 1.8}, { vx: 2.3, vy: 2.3 }, { vx: 2.3, vy: 2.3 }],
    pandaMoveTime: [5, 10, 5, 10, 5, 10, 5, 10],
    gradeshow: ['第三轮 1/8', '第三轮 2/8', '第三轮 3/8', '第三轮 4/8', '第三轮 5/8', '第三轮 6/8', '第三轮 7/8', '第三轮 8/8']
}

];

var setting = {
    canvasWidth: 700, //熊猫出现的区域宽度
    canvasHeight: 500, //熊猫出现的区域高度
    selectPandaIndexList: [],
    clickedPandaIndexList: [],
    isShow: false,
    timeStart:0,
    timeStop:0,
    timeoutTimer : null
};

function Rotate3Round(pandaCount, canvasWidth, canvasHeight) {
    var $turnPandaList = $('#app img').filter(function(i) {
        return setting.selectPandaIndexList.indexOf(i) >= 0;
    });

    var degree = 0;
    timer = setInterval(function() {
        if (degree == 360) {
            clearInterval(timer);
            $('#app img').removeClass('border');
            pandaMoveAll(pandaCount, canvasWidth, canvasHeight);

            return;
        }
        degree = degree + 1;
        $turnPandaList.css("transform", "rotate(" + degree + "deg)");
    }, 1);
}

//取介于[min, max]之间的随机数，整数
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function init(pandaCount, canvasWidth, canvasHeight) {
    //$('#starcount').text(getStar());
    $('#gradestar').hide();
    setting.selectPandaIndexList = [];
    setting.clickedPandaIndexList = [];

    var pandaPositionList = [];

    var count = 0;

    while (pandaPositionList.length < pandaCount) {
        count++;
        var x = getRandomIntInclusive(0, canvasWidth);
        var y = getRandomIntInclusive(0, canvasHeight);

        var isOk = true;

        for (i=0;i<pandaPositionList.length;i++)
        {
            if(Math.abs(pandaPositionList[i].x - x) < 110 && Math.abs(pandaPositionList[i].y - y) < 110){
                isOk = false;
                break;
            }
        }

        if(isOk){
            pandaPositionList.push({ x: x, y: y });
        }

        if (count >= 100) {
            count = 0;
            pandaPositionList = [];

        }
    }

    var $app = $('#app');

    var lun = getLun();
    var round = getRound();

    for (var i = 0; i < pandaCount; i++) {
        $app.append($('<img class="panda" style="left:' + pandaPositionList[i].x + 'px;top:' + pandaPositionList[i].y + 'px;"  src="' + (setting.isShow ? 'images/baby2.png' : roundSetting[lun].pandaColor[round]) + '"  > '));

    }
    var $img = $('#app img');
    $img.one('click', function() {
        setting.selectPandaIndexList.push($img.index($(this)));
        $(this).addClass('border');
        var lun = getLun();

        if (setting.selectPandaIndexList.length == (setting.isShow ? 1 : roundSetting[lun].pandaturnCount)) {
            Rotate3Round(pandaCount, canvasWidth, canvasHeight);

            $img.off('click');
        }
    });
}


function pandaMoveAll(pandaCount, canvasWidth, canvasHeight) {
    //移动速度
    var vList = [];

    var lun = getLun();
    var round = getRound();

    $('#app img').each(function(index, ele) {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        var vx = roundSetting[lun].pandaSpeedPad[round].vx;
        var vy = roundSetting[lun].pandaSpeedPad[round].vy;
        }
        else
        {   
        var vx = roundSetting[lun].pandaSpeedPc[round].vx;
        var vy = roundSetting[lun].pandaSpeedPc[round].vy;
        }
        //初始移动方向
        var direction = getRandomIntInclusive(0, 360);

        if (direction < 90) {
            vx = -vx;
            vy = -vy;
        } else if (direction < 180) {
            vy = -vy;
        } else if (direction < 270) {

        } else {
            vx = -vx;
        }

        vList.push({
            vx: vx,
            vy: vy
        });
    });


    var timer = setInterval(function() {
        $('#app img').each(function(index, ele) {
            var $ele = $(ele);
            var position = {
                left: parseFloat($ele.css('left')),
                top: parseFloat($ele.css('top'))
            };

            //超出上边界或下边界
            if (position.top <= 0 || position.top >= canvasHeight) {
                vList[index].vy = -vList[index].vy;
            }

            //超出左边界或右边界
            if (position.left <= 0 || position.left >= canvasWidth) {
                vList[index].vx = -vList[index].vx;
            }

            //判断重叠
            $('#app img').each(function(i, n) {
                if (index == i) {
                    return true;
                }

                //判断重叠，top和left同时小于100px才重叠
                if (Math.abs(position.top - parseFloat($(n).css('top'))) <= 100 && Math.abs(position.left - parseFloat($(n).css('left'))) <= 100) {
                    //top先重叠
                    if (Math.abs(position.top - parseFloat($(n).css('top'))) > Math.abs(position.left - parseFloat($(n).css('left')))) {
                        vList[index].vy = -vList[index].vy;
                        //vList[i].vy = -vList[i].vy;
                    } else { //left先重叠
                        vList[index].vx = -vList[index].vx;
                        //vList[i].vx = -vList[i].vx;
                    }

                    return false;
                }
            });

            $ele.css('left', position.left + vList[index].vx);
            $ele.css('top', position.top + vList[index].vy);
        });
    }, 2);

    setTimeout(function() {
        clearInterval(timer);
        selectPanda(pandaCount, canvasWidth, canvasHeight);
        setting.timeoutTimer = setTimeout(
            function() {
                if (!arraysEqual(setting.selectPandaIndexList, setting.clickedPandaIndexList)) {
                    // 插入失败音效
                    var status = localStorage.getItem("status");
                    if (status == 1){
                    var sd = new FUI.soundComponent({ src: 'video/fail.aac', altSrc: 'video/fail.mp3' });
                    sd.play();
                    }
                    $('#continue').show();
                    $('#continue').text('再试一次本回合');
                    $('#continue').one('click', function() {
                        $('#app img').remove();
                        var lun = getLun();
                        var round = getRound();

                        init((setting.isShow ? 3 : roundSetting[lun].pandaCount[round]), canvasWidth, canvasHeight);
                        $(this).hide();
                    });

                    $('#app img').off('click');

                    var cryPandaList = setting.selectPandaIndexList.filter(function(x) {
                        return setting.clickedPandaIndexList.indexOf(x) < 0;
                    });

                    var currentRound = localStorage.getItem('currentRound');
                    if (currentRound >= 0 && currentRound <= 7) {
                        $('#app img').filter(function(i) {
                            return cryPandaList.indexOf(i) >= 0;
                        }).attr('src', './images/cry60.png');

                    } else if (currentRound >= 8 && currentRound <= 15) {
                        $('#app img').filter(function(i) {
                            return cryPandaList.indexOf(i) >= 0;
                        }).attr('src', './images/cry80.png');
                    } else if (currentRound >= 16 && currentRound <= 23) {
                        $('#app img').filter(function(i) {
                            return cryPandaList.indexOf(i) >= 0;
                        }).attr('src', './images/cry100.png');
                    }


                    if (setting.isShow) {
                        $('#app img').filter(function(i) {
                            return cryPandaList.indexOf(i) >= 0;
                        }).append('<span class="fontpanda">我才是您饲养的熊猫</span>');
                    }
                    chooseRightCounts();

                }

            }, 15000);
        setting.timeStart = new Date();
    }, setting.isShow ? 5000 : roundSetting[lun].pandaMoveTime[round] * 1000);

}

function selectPanda(pandaCount, canvasWidth, canvasHeight) {

    var $img = $('#app img');

    $img.one('click', function() {
        //无论是否答对，都取消click事件
        $(this).off('click');
        var index = $img.index($(this));
        setting.clickedPandaIndexList.push(index);
        //选对了
        if (setting.selectPandaIndexList.indexOf(index) >= 0) {
             var currentRound = localStorage.getItem('currentRound');
              if (currentRound >= 0 && currentRound<=7){
                $(this).attr('src', './images/eat60.png');
              }
              else if(currentRound >= 8 && currentRound<=15){
                $(this).attr('src', './images/eat80.png');
              }
              else if(currentRound >= 16 && currentRound<=24){
                $(this).attr('src', './images/eat100.png');
              }
            

            //全部选对了
            if (arraysEqual(setting.selectPandaIndexList, setting.clickedPandaIndexList)) {
                clearTimeout(setting.timeoutTimer);
                $img.off('click');
                //加入成功音乐特效
                var status = localStorage.getItem("status");
                if (status == 1) {
                    var sd = new FUI.soundComponent({ src: 'video/success.aac', altSrc: 'video/success.mp3' });
                    sd.play();
                }


                var lun = getLun();


                var i = roundSetting[lun].pandaturnCount;
                if (!setting.isShow) {
                    $("gradestar").show().html();

                    if (i == 1) {
                        $('#gradestar').html("<img src='images/star.gif'>");
                    } else if (i == 2) {
                        $('#gradestar').html("<img src='images/star.gif'><img src='images/star.gif'>");

                    } else {

                        $('#gradestar').html("<img src='images/star.gif'><img src='images/star.gif'><img src='images/star.gif'>");

                    }
                } else {
                    $("gradestar").show();
                    $('#gradestar').html("<img src='images/star.gif'>");

                    var x = $('#app img').eq(setting.selectPandaIndexList[0]).position().left-70 + 'px';
                    var y = $('#app img').eq(setting.selectPandaIndexList[0]).position().top + 60 + 'px';


                    $('.pandaNote1').show().css({ 'left': x, 'top': y });



                }


                //  每个回合选中目标熊猫的个数
                //  chooseRightCounts();

                var currentRound = parseInt(getCurrentRound());

                currentRound += 1;

                if (!setting.isShow) {
                    if (currentRound <= 24) {
                        localStorage.setItem('currentRound', currentRound);

                    }
                }
                // if (setting.isShow) {
                //     $('#result').show();
                // }

                $('#continue,#gradestar').show();
                $('#continue').text('请继续下一回合');
                var lun = getLun();
                var round = getRound();

                $('#continue').one('click', function() {

                    if (setting.isShow) {
                        $('.pandaNote1').hide();
                        $('.pandaNote').hide();

                    }

                    if (!setting.isShow) {
                        if (getCurrentRound() == 8) {
                            $('.finish1').show();
                            $('.game').hide();
                            // location.href = 'finish1.html';
                            return;
                        }

                        if (getCurrentRound() == 16) {
                            $('.finish2').show();
                            $('.game').hide();
                            //location.href = 'finish2.html';
                            return;
                        }
                        if (getCurrentRound() == 24) {
                            $('.finish3').show();
                            $('.game').hide();
                            //location.href = 'finish3.html';
                            return;
                        }
                    }

                    $('#round').text(roundSetting[lun].gradeshow[round]).show();
                })


            }

        } else { //选错了
            // 插入失败音效
            // var sd = new FUI.soundComponent({ src: 'video/fail.wav', altSrc: 'video/fail.mp3' });
            // sd.play();
            var status = localStorage.getItem("status");
            if (status == 1) {
                var sd = new FUI.soundComponent({ src: 'video/fail.aac', altSrc: 'video/fail.mp3' });
                sd.play();
            }
            var currentRound = localStorage.getItem('currentRound');
            if (currentRound >= 0 && currentRound <= 7) {
                $(this).attr('src', './images/question60.png');
            }
            else if (currentRound >= 8 && currentRound <= 15){
                $(this).attr('src', './images/question80.png');
            }
            else if(currentRound >= 16 && currentRound <= 24){
                $(this).attr('src', './images/question100.png');
            }
            
            $('#continue').show();
            $('#continue').text('请再试本回合');

        }

        //
        if (setting.selectPandaIndexList.length == setting.clickedPandaIndexList.length) {
            //$('#continue').show();
            clearTimeout(setting.timeoutTimer);
            $('#continue').one('click', function() {
                $('#app img').remove();
                $('.pandaNote').hide();
                var lun = getLun();
                var round = getRound();

                init((setting.isShow ? 3 : roundSetting[lun].pandaCount[round]), canvasWidth, canvasHeight);
                $(this).hide();
            });
            chooseRightCounts();

            $img.off('click');


            var cryPandaList = setting.selectPandaIndexList.filter(function(x) {
                return setting.clickedPandaIndexList.indexOf(x) < 0;
            });

            var currentRound = localStorage.getItem('currentRound');
            if (currentRound >= 0 && currentRound <= 7) {
                $('#app img').filter(function(i) {
                    return cryPandaList.indexOf(i) >= 0;
                }).attr('src', './images/cry60.png');

            } else if (currentRound >= 8 && currentRound <= 15) {
                $('#app img').filter(function(i) {
                    return cryPandaList.indexOf(i) >= 0;
                }).attr('src', './images/cry80.png');

            } else if (currentRound >= 16 && currentRound <= 24) {
                $('#app img').filter(function(i) {
                    return cryPandaList.indexOf(i) >= 0;
                }).attr('src', './images/cry100.png');

            }


            if (setting.isShow) {
                var x = $('#app img').filter(function(i) {
                    return cryPandaList.indexOf(i) >= 0;
                }).position().left-70 + 'px';
                var y = $('#app img').filter(function(i) {
                    return cryPandaList.indexOf(i) >= 0;
                }).position().top + 60 + 'px';

                $('.pandaNote').show().css({ 'left': x, 'top': y });

            }

        }

    });
}


function continueGame() {
    $('#gradestar').text();
    $('#continue,#gradestar').css('display', 'none')

    var $img = $('#app img');
    $img.on('click', function() {
        setting.selectedPandaIndex = $img.index($(this));
        Rotate3Round();
        $img.off('click');
    });
    pandaMoveAll();

};

function getLun() {
    var currentRound = getCurrentRound();
    if (currentRound >= 24) {
        currentRound = 23;
    }
    return Math.floor(currentRound / 8);
}

function getRound() {
    var currentRound = getCurrentRound();
    if (currentRound >= 24) {
        currentRound = 23;
    }
    return currentRound % 8;
}

function getStar() {
    var currentRound = getCurrentRound();
    var lun = Math.floor(currentRound / 8);
    var round = currentRound % 8;

    switch (lun) {
        case 0:
            return round;
        case 1:
            return 8 + round * 2;
        case 2:
            return 8 + 16 + round * 3;
        case 3:
            return 8 + 16 + 24;
    }

}


function arraysEqual(a, b) {
    return a.every(function(x) {
        return b.indexOf(x) >= 0
    }) && a.length == b.length;
}
//每个回合不论成败，统计选中目标熊猫个数
function chooseRightCounts() {
    var rightLists = setting.selectPandaIndexList.filter(function(i) {
        return setting.clickedPandaIndexList.indexOf(i) >= 0;
    });
    var rightCounts = rightLists.length;

    setting.timeStop = new Date();
    //选择反应时
    var timecha = (setting.timeStop - setting.timeStart) / 1000;



    var isOrNot = (arraysEqual(setting.selectPandaIndexList, setting.clickedPandaIndexList)) ? 1 : 0;
    var Lun = getLun();
    if (arraysEqual(setting.selectPandaIndexList, setting.clickedPandaIndexList)) {
        switch (Lun) {
            case 0:
                starCounts = 1;
                break;
            case 1:
                starCounts = 2;
                break;
            default:
                starCounts = 3;
                break;

        }

    } else {
        starCounts = 0;
    }



    if (!setting.isShow) {


        $.ajax({
            type: "GET",
            url: "http://lhttest.le-ho.cn/gamedata/addGamedata",
            data: {
                userId: localStorage["userId"],
                gameId: 8,
                a1: isOrNot, //是否通过游戏
                a2: timecha, //反应时间
                a3: rightCounts, //选出正确个数
                a4: starCounts, //得到星星数

            },
            success: function(data) {
                // alert(data);
                $.ajax({
                    type: "GET",
                    url: "http://lhttest.le-ho.cn/gamelevel/addGameLevel",
                    data: {
                        userId: localStorage["userId"],
                        gameId: 8,
                        level: getCurrentRound(),
                        score: starCounts,

                    },
                });
            }
        });
    }
}





//当前回合
function getCurrentRound() {
    return localStorage.getItem('currentRound') || 0;
}

//加入音乐
if (!FUI) {

    var FUI = {};

}

FUI.soundComponent = function(profile) {

    this.profile = {

        src: '',
        　　　　　　　　　 //音频文件地址

        altSrc: '',
        　　　　　　　　 //备选音频文件地址 （不同浏览器支持的音频格式不同，可见附表）

        loop: false　　　　　　　 //是否循环播放，这个参数现在没有用上

    };

    if (profile) {

        $.extend(this.profile, profile);

    }

    this.soundObj = null;

    this.isIE = !-[1, ];



    this.init();

};

FUI.soundComponent.prototype = {

    init: function() {

        this._setSrc();

    },

    _setSrc: function() {

        if (this.soundObj) {

            if (this.isIE) {

                this.soundObj[0].src = this.profile.src;

            } else {

                this.soundObj[0].innerHTML = '<source src="' + this.profile.src + '" /><source src="' + this.profile.altSrc + '" />';

            }

        } else {

            if (this.isIE) {

                this.soundObj = $

                    ('<bgsound volume="-10000" loop="1" src="' + this.profile.src + '">').appendTo('body');

                //-10000是音量的最小值。先把音量关到最小，免得一加载就叮的一声，吓到人。

            } else {

                this.soundObj = $('<audio preload="auto" autobuffer><source src="' + this.profile.src + '" /><source src="' + this.profile.altSrc + '" /></audio>').appendTo('body');

            }

        }

    },

    setSrc: function(src, altSrc) {

        this.profile.src = src;

        if (typeof altSrc != 'undefined') {

            this.profile.altSrc = altSrc;

        }

        this._setSrc();

    },

    play: function() {

        if (this.soundObj) {

            if (this.isIE) {

                this.soundObj[0].volume = 1;　　 //把音量打开。

                this.soundObj[0].src = this.profile.src;

            } else {

                this.soundObj[0].play();

            }

        }

    }

};

function start(){
    $('#app img').remove();
    $('#round').text('第一轮 1/8');

    var lun = getLun();
    var round = getRound();
    $('#round').text(roundSetting[lun].gradeshow[round]).show();
    init(roundSetting[lun].pandaCount[round], setting.canvasWidth, setting.canvasHeight);
}


