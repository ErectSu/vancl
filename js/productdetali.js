// console.log(document.cookie);
// var _cookie=new OprationCookie();
// var hobbyid=_cookie.getCookie('hobbyid');
// console.log(hobbyid);//001
// var options = {
//   method: "get",
//   async: true,
//   data: {
//       'sid':hobbyid
//   },
//   success: function(data){
      
//       data=JSON.parse(data);
//       console.log(data);//数组对象；
//   //     [
//   //         {
//   //            "sid":"001",
//   //            "introduce":"ERYAN尔晏 抽象撞色纹中筒袜(男款)2双装",
//   //            "price":"78.00",
//   //             "src":"images/shop/load01.jpg"
//   //         },
//   //         {
//   //            "sid":"002",
//   //            "introduce":"ERY 克尔晏 画风撞色纹中筒袜(男款)1双装",
//   //            "price":"88.00",
//   //             "src":"images/shop/load02.jpg"
//   //         }
//   //    ]
//       var str=[];
//       for(var i=0;i<data.length;i++){
//           console.log(data[i].sid);
//           if(data[i].sid == $id){
//               str += `
              
//               <div class="danpin_colLef newclear">
//               <div class="danpinLeft">
//                   <div class="smallImg">
//                       <div class="smallImgUp upper" style='visibility: hidden;'></div>
//                       <ul id='imageMenu'>
//                           <li name='item-item-img-1' class="track" id='onclickImg'>
//                               <span class="SpriteSmallImgs" name='' style='background: url(${data[i].srcSmall01}) no-repeat'>
//                                   &nbsp;
//                               </span>
//                           </li>
//                           <li name='item-item-img-2' class="track">
//                               <span class="SpriteSmallImgs" name='' style='background: url(${data[i].srcSmall02}) no-repeat'>
//                                   &nbsp;
//                               </span>
//                           </li>
//                           <li name='item-item-img-2' class="track">
//                               <span class="SpriteSmallImgs" name='' style='background: url(images/small/small01_03.jpg) no-repeat'>
//                                   &nbsp;
//                               </span>
//                           </li>
//                           <li name='item-item-img-2' class="track">
//                               <span class="SpriteSmallImgs" name='' style='background: url(images/small/small01_04.jpg) no-repeat'>
//                                   &nbsp;
//                               </span>
//                           </li>
//                           <li name='item-item-img-2' class="track">
//                               <span class="SpriteSmallImgs" name='' style='background: url(images/small/small01_05.jpg) no-repeat'>
//                                   &nbsp;
//                               </span>
//                           </li>
//                       </ul>
//                       <div class="smallImgDown downer" style='visibility: hidden;'></div>
//                   </div>
//               </div>
//               <div class="danpinColCenter">
//                   <div class="bigImg">
//                       <img id="midImg" src="images/big/big01_01.jpg" title="" alt="">
//                       <span class="filter"></span>
//                   </div>
//               </div>
//               <div class="showlargerImg">
//                   <div class="largerImg">
//                       <img id="largerImg" src="images/larger/larger01_01.jpg" title="" alt="">
//                   </div>
//               </div>
//           </div>
//           <div id="danpinRight" class="danpinRight newclear" style="top: 0px; display: block;">


//               <div class="danpinFixedRightContent">
//                   <div name="Normal" id="pricearea">
//                       <span class="blank10"></span>
//                       <div class="cuxiaoPrice ">
//                           <span class="tehuiMoney" style="line-height: 26px;">
//                               <span>售价：</span>
//                               <span style="font-family: '微软雅黑';">￥
//                                   <strong>78.00</strong>
//                               </span>
//                           </span>
//                           <a id="czwenan" href="http://cz.vancl.com/DepositPre.aspx" target="_blank" style="float: left;
//                                   height: 26px; display: inline-block; margin-left: 20px; line-height: 26px; margin-top: 7px;
//                                   color: #a10000;">充100返100，点击充值
//                           </a>
//                       </div>
//                       <span class="blank10"></span>
//                   </div>
//                   <div class="selectArea">
//                       <div class="selColorArea">
//                           <span class="blank10"></span>
//                           <div class="danpinColor_Select">
//                               <div class="danpinColorTitle" style="line-height: 18px;">
//                                   <p>
//                                       颜色：</p>
//                               </div>
//                               <div class="selColor">
//                                   <ul>
//                                       <li id="onlickColor" name="6382975" title="藏青色+暖褐" class="">
//                                           <div class="colorBlock" name="True">
//                                               <a class="track" name="item-item-select-color_1" href="6382975.html?ref=item_color_6382975">
//                                                   <span class="SpriteColors" style="background-position: 0px -0px">&nbsp;</span>
//                                                   <p>
//                                                       藏青色+暖褐</p>
//                                               </a>
//                                           </div>
//                                           <span class="colorHoverok"></span>

//                                       </li>

//                                   </ul>
//                               </div>
//                           </div>
//                           <div class="selSizeArea">
//                               <div class="danpinColorTitle">
//                                   <p>
//                                       尺码：</p>
//                               </div>
//                               <div class="selSize">
//                                   <ul>
//                                       <li id="onlickSelSize" title="10" name="15797968" class="">
//                                           <p>26-28CM</p>
//                                           <span></span>
//                                       </li>
//                                       <span class="colorHoverok"></span>
//                                   </ul>
//                               </div>
//                               <div class="danpin_xuanzeGMcm" style="display:none;">
//                                   <span style="height: 16px; display: block; width: 16px; background-position: -1911px 0pt; margin: 2px;float: left; " class="sprites"></span>
//                                   <p>
//                                       请选择您要购买的商品尺码</p>
//                               </div>
//                           </div>
//                           <div class="blank8ie">
//                           </div>
//                           <div class="goodsNum">
//                               <div class="danpinColorTitle" style="line-height: 18px;">
//                                   <p>
//                                       数量：</p>
//                               </div>
//                               <div class="danpinnumSelect">
//                                   <select id="selectedAmount">
//                                       <option value="1">
//                                           1</option>
//                                       <option value="2">
//                                           2</option>
//                                       <option value="3">
//                                           3</option>
//                                       <option value="4">
//                                           4</option>
//                                       <option value="5">
//                                           5</option>
//                                       <option value="6">
//                                           6</option>
//                                       <option value="7">
//                                           7</option>
//                                       <option value="8">
//                                           8</option>
//                                       <option value="9">
//                                           9</option>
//                                       <option value="10">
//                                           10</option>
//                                   </select>
//                                   <span id="comeon" class="LastNum" style="display: inline;">余量有限</span>
//                                   <span class="blank15"></span>
//                               </div>
//                           </div>
//                           <span class="blank0"></span>
//                           <div class="AreaItotal SelectGoods">
//                               <div class="SelectAreaItotal SelectGoods">
//                                   <div class="goodsAddArea SelectGoods">
//                                       <div class="danpinColorTitle">
//                                           <p class="SelectDetail">
//                                               已选：</p>
//                                       </div>
//                                       <div class="goodsAdd">
//                                           <p class="SelectName">藏青色+暖褐</p>
//                                           <span class="SelectPoint">，</span>
//                                           <p class="SelectSize">26-28CM</p>
//                                           <p class="NowHasGoods">现在有货</p>
//                                           <span class="blank0"></span>
//                                       </div>
//                                   </div>
//                               </div>
//                           </div>
//                           <div class="shoppingNews">
//                               <a id="nowbuy" name="item-item-select-shopping" href="#" class="btnnowbuy track">
//                                   <span>立即购买</span>
//                               </a>
//                               <a id="addToShoppingCar" name="item-item-select-shopping" href="#" class="btnaddtocart track">
//                                   <span>加入购物车</span>
//                               </a>
//                           </div>
//                           <span class="blank20"></span>

//                       </div>
//                       <div class="blank0">
//                       </div>
//                   </div>
//                   <div id="promotion">
//                       <div class="danpin_YhTsBox danpin_YhTsTab ">
//                           <ul>
//                               <li>
//                                   <span style="display: block; float: left;
//           width: auto; height: 16px; background: #b81c22; margin: 4px 5px 0  0; color: #fff;
//           line-height: 16px; text-align: center; padding: 0 5px;">
//                                       免邮
//                                   </span>
//                                   全场购物满199元免运费
//                                   <span class='cut'>优惠提示</span>
//                               </li>
//                           </ul>
//                       </div>
//                   </div>
//                   <div class="blank15">
//                   </div>
//               </div>
//           </div>
//               `;
//               console.log($('section'));
//               $('section').html(str);
//           }

//       }
//   }
// }
// var url='json/details.json';
// sendAjax(url, options);


// localStorage.removeItem('minelist');
var big = (function () {
  return {
    init: function () {
      // 获取最大的盒子
      this.$box = document.querySelector('.danpin_colLef');
      console.log(this.$box);
      // 获取展示图片的盒子
      this.$showImage = this.$box.querySelector('.bigImg');
      // 获取放大图片的盒子
      this.$showlargerImage = this.$box.querySelector('.showlargerImg');
      console.log(this.$showlargerImage);
      this.$showBigImage = this.$box.querySelector('.largerImg');
      // 获取放大图片盒子里面的图片
      this.$bigImage = this.$showBigImage.firstElementChild;
      // 获取小图片的盒子
      this.$ulbox = this.$box.querySelector('#imageMenu');
      console.log(this.$ulbox);
      // 获取每一张图片的li集合
      this.$liAll = this.$ulbox.children;

      // 获取移动的小黑块(放大镜)
      this.$filter = this.$showImage.querySelector('.filter');
      // 给每一li添加索引， 方便获取
      for (var i = 0; i < this.$liAll.length; i++) {
        this.$liAll[i].index = i;
      }
      this.event();
    },
    event: function () {
      var _this = this;
      // 利用事件委托,给每一个小图片添加点击事件
      this.$ulbox.onclick = function (ev) {
        ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        console.log(target.parentNode.index);
        if (target.nodeName == "SPAN") {
          _this.showImage(target.parentNode.index);
        }
      }
      // 鼠标移入展示图片的盒子,出现放大镜
      this.$showImage.onmouseenter = function () {
        _this.$filter.style.display = 'block';
        _this.$showlargerImage.style.display = 'block';
        _this.$showBigImage.style.display = 'block';

        // 先让放大镜显示,在获取宽度
        // 计算边界
        console.log(this.clientWidth);
        console.log(_this.$filter.offsetWidth);
        _this.maxX = this.clientWidth - _this.$filter.offsetWidth;//400-220;
        _this.maxY = this.clientHeight - _this.$filter.offsetHeight;
      }
      // 移出放大镜隐藏
      this.$showImage.onmouseleave = function () {
        _this.$filter.style.display = 'none';
        _this.$showBigImage.style.display = 'none';
        _this.$showlargerImage.style.display = 'none';
      }
      // 鼠标在showimage里面移动，放大镜跟随
      this.$showImage.onmousemove = function (ev) {
        ev = ev || window.event;
        // 定点坐标计算
        // console.log(ev.pageY);//相对整个文档的位置（含滚条，类似绝对定位；）
        // console.log(this.offsetTop);//相对父级的位置；
        // console.log(this.clientTop);//边框宽
        var x = ev.pageX - this.offsetLeft - this.clientLeft - _this.$filter.offsetWidth / 2;
        var y = ev.pageY - (this.offsetTop + 310) - this.clientTop - _this.$filter.offsetHeight / 2;
        //   var y = ev.offsetY - this.offsetTop - this.clientTop -  _this.$filter.offsetHeight / 2;
        // 边界处理
        if (x < 0) {
          x = 0
        } else if (x > _this.maxX) {
          x = _this.maxX;
        }
        if (y < 0) {
          y = 0
        } else if (y > _this.maxY) {
          y = _this.maxY;
        }
        // 放大镜移动
        _this.$filter.style.left = x + 'px';
        _this.$filter.style.top = y + 'px';
        // 放大的图片移动
        // console.log(_this.$bigImage);
        _this.$bigImage.style.left = -x * 2 + 'px';
        _this.$bigImage.style.top = -y * 2 + 'px';
      }
    },
    showImage: function (index) {
      // for (var i = 0; i < this.$liAll.length; i++) {
      // //   this.$liAll[i].removeAttribute('class');
      //     this.$liAll[i].id='';
      // }
      // this.$liAll[index].id = 'onclickImg';
      // 获取小图片的图片地址
      console.log(this.$liAll[index].firstElementChild.style.backgroundImage);//url("images/small2.jpg")
      var src = this.$liAll[index].firstElementChild.style.backgroundImage.replace('url("', '');
      src = src.replace('")', '');
      console.log(src);
      // 改变战术图片的地址

      this.$showImage.firstElementChild.src = src.replace('small/small', 'big/big');
      this.$bigImage.src = src.replace('small/small', 'larger/larger');
    }
  }

}());
var $name=document.querySelector('#productTitle h2');
console.log($name.title);
var $id=document.querySelector('#productTitle span');
console.log($id.getAttribute('attr-id'));
$id=$id.getAttribute('attr-id');
var $btn = document.querySelector("#addToShoppingCar");
var $newnum = document.querySelector(".new");

console.log($btn);
$btn.onclick= function () {
  var $num = document.querySelector("#selectedAmount");
  console.dir($num.value);
  var obj = {
    id: $id,
    name:$name.title,
    num: $num.value,//商品数量；
    // color: 345645453
  }
  var minelist = localStorage.getItem("minelist") || "[]";//还有set和clear（不传清除所有）方法，
  minelist = JSON.parse(minelist);//转成对象，判断此id是否已存在；
  var flag = true;
  for (var i = 0; i < minelist.length; i++) {
    if (minelist[i].id == obj.id) {
      minelist[i].num =Number(minelist[i].num)+Number(obj.num);
      flag = false;
    }
  }
  console.log(minelist)
  if (flag) {
    minelist.push(obj)
  }
  // localStorage.setItem("minelist",null);
  // 
  // console.log(localStorage);
  localStorage.setItem("minelist", JSON.stringify(minelist))
  
  var str=localStorage.minelist;
  console.log(localStorage.minelist);
  $newnum.innerHTML=JSON.parse(str)[0].num;
  
  
}//当前商品详情页只有这一个商品，若是其他商品页面，id会变；




