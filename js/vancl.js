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


console.log($('.BayWindow'));
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