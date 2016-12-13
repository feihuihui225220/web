$(document).ready(function(){


(function(){
            var fuwu="";
            var zhuanye="";
            var jiangjie="";
            var xuqiu="";

            initEvent1();
            initEvent2();
            initEvent3();
            initEvent4();

            function initEvent1() {
            var tableWjx = document.getElementById("fuWuTaiDu"); 
            var tds = tableWjx.getElementsByTagName("td"); 
                for (var i = 0; i < tds.length; i++) { 
                    var td = tds[i];
                    td.onclick = change1; 
                }        
            } 
            function initEvent2() {
            var tableWjx = document.getElementById("ZyChanP"); 
            var tds = tableWjx.getElementsByTagName("td"); 
                for (var i = 0; i < tds.length; i++) { 
                    var td = tds[i];
                    td.onclick = change2; 
                }        
            } 
            function initEvent3() {
            var tableWjx = document.getElementById("JiangJYd"); 
            var tds = tableWjx.getElementsByTagName("td"); 
                for (var i = 0; i < tds.length; i++) { 
                    var td = tds[i];
                    td.onclick = change3; 
                }        
            } 
            function initEvent4() {
            var tableWjx = document.getElementById("JieJueFF"); 
            var tds = tableWjx.getElementsByTagName("td"); 
                for (var i = 0; i < tds.length; i++) { 
                    var td = tds[i];
                    td.onclick = change4; 
                }        
            } 


            function change1() {
                    var tableWjx = document.getElementById("fuWuTaiDu"); 
                    var tds = tableWjx.getElementsByTagName("td"); 
                    // var tds = tableWjx.getElementsByTagName("td");
                    for (var i = 0; i < 5; i++) { 
                        var td = tds[i]; 
                        // td.innerText = "☆"; 
                        td.innerHTML = "<img src='images/huibai.png'>"; 
                    }
                    var index = indexof(tds, this); 
                    fuwu=index+1;
                    console.log(index+1);
                    for (var i = 0; i < index + 1; i++) { 
                        var td = tds[i]; 
                        td.innerHTML = "<img src='images/huangjin.png'>"; 
                    }
            }

            function change2(its) {
                    var tableWjx = document.getElementById("ZyChanP"); 
                    var tds = tableWjx.getElementsByTagName("td");
                    for (var i = 0; i < 5; i++) { 
                        var td = tds[i]; 
                        // td.innerText = "☆"; 
                        td.innerHTML = "<img src='images/huibai.png'>"; 
                    }
                    var index = indexof(tds, this); 
                    zhuanye=index+1;
                    console.log(index+1);
                    for (var i = 0; i < index + 1; i++) { 
                        var td = tds[i]; 
                        td.innerHTML = "<img src='images/huangjin.png'>"; 
                    }
            }

            function change3(its) {
                    var tableWjx = document.getElementById("JiangJYd"); 
                    var tds = tableWjx.getElementsByTagName("td");
                    for (var i = 0; i < 5; i++) { 
                        var td = tds[i]; 
                        // td.innerText = "☆"; 
                        td.innerHTML = "<img src='images/huibai.png'>"; 
                    }
                    var index = indexof(tds, this); 
                    jiangjie=index+1;
                    console.log(index+1);
                    for (var i = 0; i < index + 1; i++) { 
                        var td = tds[i]; 
                        td.innerHTML = "<img src='images/huangjin.png'>"; 
                    }
            }

            function change4(its) {
                    var tableWjx = document.getElementById("JieJueFF"); 
                    var tds = tableWjx.getElementsByTagName("td");
                    for (var i = 0; i < 5; i++) { 
                        var td = tds[i]; 
                        // td.innerText = "☆"; 
                        td.innerHTML = "<img src='images/huibai.png'>"; 
                    }
                    var index = indexof(tds, this);
                    xuqiu=index+1;
                    console.log(index+1); 
                    for (var i = 0; i < index + 1; i++) { 
                        var td = tds[i]; 
                        td.innerHTML = "<img src='images/huangjin.png'>"; 
                    }
            }

            function indexof(arr, ele) {
                for (var i = 0; i < arr.length; i++) { 
                    if (arr[i] == ele) { 
                        return i; 
                    } 
                } 
                return -1; 
            }  


           document.getElementById("submitSampleUp").onclick=function(){
                if(fuwu=="" || zhuanye=="" || jiangjie=="" || xuqiu==""){
                    alert("请评价完整");
                    return;
                }
                console.log(fuwu+"-"+zhuanye+"-"+jiangjie+"-"+xuqiu);
                alert("评价成功");
           }
        })()

})