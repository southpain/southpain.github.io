/**
 * Created by HH on 2017/7/4.
 */
var main=document.getElementById('main'),
    con=document.getElementById('con'),
    ps=con.getElementsByTagName('p'),
    p1=main.getElementsByTagName('p')[0],
    num=document.getElementById('num'),
    lis=num.getElementsByTagName('li'),
    left=document.getElementById('left'),
    right=document.getElementById('right');
var a=0;//代表当前数字的索引值
var b=1;//代表当前图片的索引值
var timer1,timer2;

var firstP=con.children[0].cloneNode(true);//复制第一个节点
var lastP=con.children[ps.length-1].cloneNode(true);//复制最后一个节点
con.appendChild(firstP);
con.insertBefore(lastP,con.children[0]);

main.scrollLeft=con.children[0].clientWidth;//初始位置


function move(){
    var start=main.scrollLeft;//运动起点
    var end=p1.offsetWidth*b;//运动终点
    var change=end-start;//运动量
    var minstep=0;//起始步数
    var maxstep=20;//最大步数
    var everystep=change/maxstep;//每步所走的距离
    clearInterval(timer2);
    timer2=setInterval(function (){//运动过程
        minstep++;
        if (minstep>=maxstep) {
            clearInterval(timer2);
        }
         start+=everystep;//不是整数
         main.scrollLeft=start;
    },30);
    for (var i = 0; i < lis.length; i++) {
        lis[i].className='';
    }
    lis[a].className='show';
}
function autoMove(){
    clearInterval(timer1);
    timer1=setInterval(function (){//每隔两秒走一张
        a++;
        if (a>=lis.length) {
            a=0;
        }
        b++;
        if (b>=ps.length) {
            b=2;
            main.scrollLeft=con.children[0].clientWidth;
        }
        move();
    },3000);
}
autoMove();//进入页面自动执行
right.onclick=function (){
    clearInterval(timer1);
    a++;
    if (a>=lis.length) {
        a=0;
    }
    b++;
    if (b>=ps.length) {
        b=2;
        main.scrollLeft=con.children[0].clientWidth;
    }
    move();
    autoMove();//控制结束，自动走
}
left.onclick=function (){
    clearInterval(timer1);
    a--;
    if (a<0) {
        a=lis.length-1;
    }
    b--;
    if (b<0) {
        b=ps.length-3;
        main.scrollLeft=con.children[0].clientWidth*(b+1);
    }
    move();
    autoMove();//控制结束，自动走
}

for (var i = 0; i < lis.length; i++) {
    lis[i].onclick=function (){
        clearInterval(timer1);
        for (var i = 0; i < lis.length; i++) {
            if (lis[i]==this) {
                a=i;
                b=i+1;
                move();
                autoMove();//控制结束，自动走
            }
        }
    }
}
//================下拉框=================================
$('#project').toggle(function (){
    $('#choice').css('display','block');
},function (){
    $('#choice').css('display','none');
});
$('#choice').mouseleave(function(){
    $('#choice').css('display','none');
});

//===========回到顶部========================
$('#move_top').click(function(){
    $('body').animate({
        scrollTop:'0'
    },400)
});

window.onscroll=function(){
    var t3=$('body').scrollTop();
    //alert('5');
    if(t3<200){
        //$('#move_top').css('display','none');
        $('#move_top').fadeOut();
    }else{
        $('#move_top').fadeIn();
    }
};

//====================heart==============================
var flag=true;
    $('.m_con li').on('click','.bgcolor',function (){
        //alert($(this).find('.fa-heart').css('color'));
        if(flag==true){
            $(this).find('.fa-heart').css('color','#c9302c');
            flag=false;
        }else {
            $(this).find('.fa-heart').css('color','#fff');
            flag=true;
        }
    });

