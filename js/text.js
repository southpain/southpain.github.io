/**
 * Created by HH on 2017/6/29.
 */
var left=document.getElementById('left'),
    tits=document.getElementsByClassName('title'),
    exds=document.getElementsByClassName('extend');
    var sign=true;
    function clk(tit,exd,sign){
        tit.onclick=function () {
            if (sign==true) {
                exd.style.display='block';
                sign=false;
            }else{
                exd.style.display='none';
                sign=true;
            }
        }
    }
clk(tits[0],exds[0],sign);
clk(tits[1],exds[1],sign);
clk(tits[2],exds[2],sign);