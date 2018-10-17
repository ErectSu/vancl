var verification = (function () {
    var $from = document.querySelector('.form-box-reg');
    //  console.log($from)
    // console.log($from.phone)
    var $phoneYanzhengma = document.querySelector('.phone-yanzhengma');
    // console.log($phoneYanzhengma)
    // console.log($from.loginMima)
    // console.log($from.loginMimaAgain)
    var $btn = document.querySelector('.btn1');
    // console.log($btn)
    // 获取所有文本框
    var $inpALl = $from.querySelectorAll('input');
    // 表单验证规则
    // console.log($inpALl,$from);
    var checkInput = {
        loginMimaAgain: function (val) {
            var ele = document.querySelector('.inp3');
            console.log(ele.value);
            return ele.value == val ? 1 : 0;
        },
        loginMima: function (val) {
            var reg = /^\w{6,16}$/;
            return reg.test(val) ? 1 : 0;
        },
        phone: function (val) {
            var reg = /^1[35789]\d{9}$/;
            return reg.test(val) ? 1 : 0;
        }
        // username: function (val) {
        //     var reg = /^\w{6,13}$/;
        //     return reg.test(val) ? 1 : 0;
        // }
    }
    return {
        init: function () {
            this.event();
        },
        event: function () {
            var _this = this;
            // 循序安所有文本框,给每一个文本框添加blur事件
            for (var i = 0; i < $inpALl.length - 1; i++) {
                $inpALl[i].onblur = function () {
                    // 文本值去除前后空格
                    var val = this.value.trim();
                    console.log(val);
                    //获取信息提示框
                    var $tipText = this.parentNode.nextElementSibling;
                    $tipText.style.color='#cbcbcb';
                    console.log($tipText);
                    if (val == '') {
                        // 文本框内容为空
                        $tipText.className = 'bg-danger';
                        $tipText.style.display='block';
                        $tipText.style.height='20px';
                        switch (this.name) {
                            case 'yanzhengma':
                                $tipText.innerHTML = '请输入图片验证码';
                                break;
                            case 'phone':
                                $tipText.innerHTML = '请填写真实的手机号，并进行验证';
                                break;
                            case 'phone-yanzhengma':
                                $tipText.innerHTML = '请输入手机接收到的验证码';
                                break;
                            case 'loginMima':
                                $tipText.innerHTML = '6-16位字符，可使用字母数字或符号的组合';
                                break;
                            case 'loginMimaAgain':
                                $tipText.innerHTML = '请再次输入密码，两次输入必须一致';
                                break;

                        }
                        // $tipText.innerHTML = '输入内容不能为空';
                    } else {
                        // 文本内容不为空

                        // 如果bool为1 证明验证成功, 否则验证失败
                        console.log(this.name);
                        
                        var bool = checkInput[this.name](val);
                        console.log(bool);
                        if (bool) {
                            $tipText.className = 'bg-success';
                            $tipText.style.display='block';
                            $tipText.style.height='20px';
                            $tipText.innerHTML = '输入正确';
                        } else {
                            $tipText.className = 'bg-danger';
                            $tipText.style.display='block';
                            console.log($tipText.innerHTML);
                            $tipText.style.height='20px';
                            // 把错误信息提前绑定到对应表单上面
                            // 通过表单找到自定义属性
                            $tipText.innerHTML = this.getAttribute('data-error');
                            console.log($tipText.innerHTML);
                        }
                    }
                }
                
            }
            var $regbt=document.querySelector('.regbt');
            // console.log($regbt);
            $regbt.onclick=function(ev){
                ev=ev||window.event;
                var target=ev.target||ev.srcElement;
                // console.log(target.checked);
                if((target.nodeName=='INPUT'||target.nodeName=='LABEL') && target.checked){
                    // console.log(target.parentNode.nextElementSibling);
                    target.parentNode.nextElementSibling.style.background='#b52024';
                }else{
                    target.parentNode.nextElementSibling.style.background='#9a9a9a';
                }
            }
            
            $btn.onclick = function (ev) {
                ev = ev || window.event;
                for (var i = 0; i < $inpALl.length; i++) {
                    $inpALl[i].focus()
                    $inpALl[i].blur()
                }
                // 获取失败元素
                // 如果有一个， 证明至少有一个表单没有通过验证
                var errorInput = $from.querySelector('.bg-danger');
                if (errorInput) {
                    errorInput.parentNode.querySelector('input').focus();
                } else {
                    console.log('恭喜成功')
                }
                // ev.preventDefault()
            }
        }
    }
}());
var register = (function(){

    return {
        init: function(ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = document.querySelector('.btn1');
            // console.log(this.$loginBtn);
            
            this.$phone = document.querySelector('.inp1');
            // console.log(this.$phone);
            this.$passwordInp = document.querySelector('.inp2');
            // console.log(this.$passwordInp);
            this.event();
        },
        event: function() {
            var _this = this;
            // 提交按钮
            this.$loginBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        phone: _this.$phone.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.register(data);
                    }
                }
                sendAjax('php/register.php', params);
            },
            // 判断用户名称是否存在
            this.$phone. addEventListener('change', function(){
                var params = {
                    method: 'post',
                    data: {
                        phone: _this.$phone.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.checkUsername(data);
                        console.log(data);
                    }
                }
                sendAjax('php/check_phone.php', params);
            }, false);//不在捕获阶段捕获；
        },
        checkUsername: function(data) {
            if(data.code == 200) {
               this.$phone.className = 'inp success';
            //    this.$loginBtn.disabled = '';
            } else {
                alert(data.msg);
                this.$phone.className = 'inp error';
                // this.$loginBtn.disabled = 'true';
            }
        },
        register: function(data) {
            // console.log($inpALl[$inpALl.length-2].value);
            if(data.code == 200) {
                
                //   注册成功
                console.log(this.$loginBtn.parentNode.firstElementChild.firstElementChild.checked);
                if(this.$loginBtn.parentNode.firstElementChild.firstElementChild.checked){
                    // console.log($inpALl[$inpALl.length-2].value);
                    location.href='index.html';
                }
             } else {
                
             }
        }
    }

}());