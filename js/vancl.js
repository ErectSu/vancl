window.onload = function () {


  var index = 0;
  var timer = setInterval(autoPlay, 3000);


  function autoPlay() {
    if (index == 7) {
      index = 0;
    } else {
      index++;
    }
    $(".ubox li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(".obox li").eq(index).addClass("current").siblings().removeClass();
  }//实现



  $(".arrow_l").click(function () {
    console.log(1)
    index--;
    if (index < 0) {
      index = 7;
    }
    $(".ubox li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(".obox li").eq(index).addClass("current").siblings().removeClass();
  })
  
  $(".arrow_l").hover(function(){
    this.style.backgroundPosition='-3px -66px';
  },function(){
    this.style.backgroundPosition='-3px -6px';
  })

  $(".arrow_r").click(function () {
    index++;
    if (index > 7) {
      index = 0;
    }
    $(".ubox li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(".obox li").eq(index).addClass("current").siblings().removeClass();
  })
  $(".arrow_r").hover(function(){
    this.style.backgroundPosition='-60px -66px';
  },function(){
    this.style.backgroundPosition='-60px -6px';
  })



  $(".banner").hover(function () {
    clearInterval(timer);
  }, function () {
    timer = setInterval(autoPlay, 3000);
  })//实现



  $(".obox li").hover(function () {
    index = $(this).index();
    $(".ubox li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(".obox li").eq(index).addClass("current").siblings().removeClass();
  }, function () {
    clearInterval(timer);
  })//实现


}


// console.log($('.BayWindow'));
$('.backTop').click(function(){
  
});

//
// var $box = document.querySelector('.box');
// // 获取回到顶部的按钮
// var $up = document.querySelector('.up');
// // 添加滚动事件
window.onscroll = function() {
    // 获取滚动距离
    var top = document.documentElement.scrollTop
    if(top >= 140) {
        // 回到顶部按钮显示
        $('.BayWindow')[0].style.display = 'block';
    } else {
        // 回到顶部按钮隐藏
        $('.BayWindow')[0].style.display = 'none';
    }
}
$('.backTop').click(function() {
  // 让滚动高度为0；
  var timer = setInterval(function() {
      var top = document.documentElement.scrollTop - 200;
      // 党当滚动条小于0时，时间函数停止
      if(top <=0 ) {
          top = 0;
          clearInterval(timer);
      }
      document.documentElement.scrollTop = top;
  }, 10)
});
//此部分功能：登录或者注册成功后，改变眉头用户名；
var _cookie=new OprationCookie();//调用构造函数，通过login.php里输入正确时的返回值，以及login.js里面登录成功时，保存的cookie值；
var str=_cookie.getCookie("user-name");//获取保存的cookie值
var $span=document.querySelector('.greet');//插入到主页眉头的span标签内；
var $spanNext=$span.nextElementSibling;
var $headRight=document.querySelector('.headRight');
var $topRight=document.querySelector('.topRight');
// console.log($spanNext);
if(str){
  $span.innerHTML=str;
  $span.style.width='78px';
  $headRight.style.width='321px';
  $headRight.style.marginLeft='752px';
  $topRight.style.marginLeft='2px';
  $spanNext.innerHTML='<a href="index.html" style="color:red;" class="exit">退出登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="login.html" style="color:red;">更换用户</a>';
  $spanNext.style.color='red';

  // $span.innerHTML="欢迎"+str+"光临凡客诚品！";
};//优化：如果没有登录即str不存在，眉头不变；
var $exit=document.querySelector('.exit');
if($exit){
  var str=_cookie.clearCookie("user-name");
  // location.href='index.html';
}
//倒计时
function toDB(num){
	return num < 10 ? "0" + num : num;
}
var endTime=new Date("2018/10/18 11:00:00");
var nowTime=new Date();
var difTime=(endTime.getTime()-nowTime.getTime())/1000;
var timer=setInterval(function(){
	difTime--;
	var hour=parseInt(difTime/3600);
//	alert(hour)
	var mintues=parseInt((difTime-hour*3600)/60);
//	alert(mintues)
	var seconds=parseInt(difTime-hour*3600-mintues*60);
//	alert(seconds)
	$("#seckill_2017_timecounting .em2").html(toDB(hour));
	$("#seckill_2017_timecounting .em3").html(toDB(mintues));
	$("#seckill_2017_timecounting .em4").html(toDB(seconds));
},1000)