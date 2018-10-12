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
        this.$bigImage =  this.$showBigImage.firstElementChild;
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
        this.$ulbox.onclick = function(ev) {
          ev = ev || window.event;
          var target = ev.target || ev.srcElement;
          console.log(target.parentNode.index);
          if(target.nodeName == "SPAN") {
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
          console.log(ev.pageY);//相对整个文档的位置（含滚条，类似绝对定位；）
          console.log(this.offsetTop);//相对父级的位置；
          console.log(this.clientTop);//边框宽
          var x = ev.pageX - this.offsetLeft - this.clientLeft - _this.$filter.offsetWidth / 2;
          var y = ev.pageY - (this.offsetTop+310) - this.clientTop -  _this.$filter.offsetHeight / 2;
        //   var y = ev.offsetY - this.offsetTop - this.clientTop -  _this.$filter.offsetHeight / 2;
          // 边界处理
          if(x < 0) {
            x = 0
          } else if(x > _this.maxX) {
            x = _this.maxX;
          }
          if(y < 0) {
            y = 0
          } else if(y > _this.maxY) {
            y = _this.maxY;
          }
          // 放大镜移动
          _this.$filter.style.left = x + 'px';
          _this.$filter.style.top = y + 'px';
          // 放大的图片移动
          console.log(_this.$bigImage);
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
        var src = this.$liAll[index].firstElementChild.style.backgroundImage.replace('url("','');
        src=src.replace('")','');
        console.log(src);
        // 改变战术图片的地址

        this.$showImage.firstElementChild.src = src.replace('small', 'big');
        this.$bigImage.src = src.replace('small', 'large');
      }
    }

  }())
  