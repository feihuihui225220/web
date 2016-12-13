var roundSetting = [{
    pandaCount: [3, 3, 3, 3, 4, 4, 4, 4],
    pandaturnCount: 1,
    pandaColor: ['images/baby2.png', 'images/baby2.png', 'images/baby2.png', 'images/baby2.png', 'images/baby1.png', 'images/baby1.png', 'images/baby1.png', 'images/baby1.png'],
    pandaSpeedPc: [{ vx: 0.4, vy: 0.4 }, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }, { vx: 0.4, vy: 0.4}, { vx: 0.4, vy: 0.4}, { vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8 }],
    pandaSpeedPad:  [{ vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8}, { vx: 1.3, vy: 1.3 }, { vx: 1.3, vy: 1.3 }, { vx: 0.8, vy: 0.8}, { vx: 0.8, vy: 0.8}, { vx: 1.3, vy: 1.3 }, { vx: 1.3, vy: 1.3 }],
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
    pandaSpeedPad:  [{ vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8}, { vx: 1.3, vy: 1.3 }, { vx: 1.3, vy: 1.3 }, { vx: 0.8, vy: 0.8}, { vx: 0.8, vy: 0.8}, { vx: 1.3, vy: 1.3 }, { vx: 1.3, vy: 1.3 }],
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
    pandaSpeedPad:  [{ vx: 0.8, vy: 0.8 }, { vx: 0.8, vy: 0.8}, { vx: 1.3, vy: 1.3 }, { vx: 1.3, vy: 1.3 }, { vx: 0.8, vy: 0.8}, { vx: 0.8, vy: 0.8}, { vx: 1.3, vy: 1.3 }, { vx: 1.3, vy: 1.3 }],
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



$(document).ready(function() {
    var lun = getLun();
    var round = getRound();
    $('#round').text(roundSetting[lun].gradeshow[round]).show();
    init(roundSetting[lun].pandaCount[round], setting.canvasWidth, setting.canvasHeight);
});
