$(document).ready(function() {
    var lun = getLun();
    var round = getRound();
    //var score = getStar();
    //$('#totalStar').text(score);
})

function drawChart(){
    $.ajax({
        type: "GET",
        
        url: "http://lhttest.le-ho.cn/gamelevel/findByUserIdAndGameId",
        data: {
            userId: localStorage["userId"],
            gameId: 8,
        },
        dataType: 'json',
        success: function(data) {
       
            // $('#totalStar').text(data[0].dayScore);
            // $('#ranking').text(getRanking(data[0].dayScore));

            var dateList = [];
            var dateScoreList = [];

            for (var i = data.length - 1; i >= 0; i--) {
                dateList.push(new Date(data[i].createTime).Format("yyyy-MM-dd"));
                dateScoreList.push(data[i].score);
            }
            var date=new Date().Format("yyyy-MM-dd");  
            if(dateList.indexOf(date)>=0)
            {
                $('#totalStar').text(data[0].dayScore);
                $('#ranking').text(getRanking(data[0].dayScore)); 
            }
            else
            {
                $('#totalStar').text(0);
                $('#ranking').text(0); 
            }

            $('#container').highcharts({
                title: {
                    text: '游戏累计分数',
                    x: -20 //center
                },
             
                xAxis: {
                    categories: dateList
                },
                yAxis: {
                    title: {
                        text: '累计分数：'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
             
                series: [
                    {
                        name: '得分',
                        data: dateScoreList
                    }
                ]
            });
        }
    });
}



function getRanking(score) {
    if (score >= 0 && score < 8) {
        return '第五';
    } else if (score >= 8 && score < 24) {
        return '第四';
    } else if (score >= 24 && score < 36) {
        return '第三';
    } else if (score >= 36 && score < 48) {
        return '第二';
    } else if (score >= 48) {
        return '第一';
    }
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}




