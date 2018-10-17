var verification = (function () {
    // 获取form表单
    var $from = document.querySelector('.form-box');
    // 找form表单的元素, 直接通过form表单点他的name就可以获取
    // console.log($from);
    // 获取确定按钮
    var $btn = document.querySelector('.btn1');
    // console.log($btn);
    // 获取所有文本框
    var $inpALl = $from.querySelectorAll('input');
    // console.log($inpALl);
    return {
        init: function () {
            this.event();
        },
        event: function () {
            var _this = this;
            // 循序安所有文本框,给每一个文本框添加blur事件
            for (var i = 0; i < $inpALl.length; i++) {
                $inpALl[i].onblur = function () {
                    // 文本值去除前后空格
                    var val =  this.value.trim();
                    //获取信息提示框
                    console.log(this.parentNode.nextElementSibling);
                    var $tipText = this.parentNode.nextElementSibling;

                    if (val == '') {
                        // 文本框内容为空
                        $tipText.className = 'bg-danger';
                        $tipText.style.height = '21px';
                        // $tipText.innerHTML = '输入内容不能为空';
                        switch (this.name) {
                            case 'username':
                                $tipText.innerHTML = '用户名不能为空';
                                break;
                            case 'password':
                                $tipText.innerHTML = '密码不能为空';
                                break;
                        }
                    
                    }
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
                if(errorInput) {
                    errorInput.parentNode.parentNode.querySelector('input').focus();
                } else {
                    console.log('恭喜成功')
                }
                // ev.preventDefault()
            }
        }
    }
}())
var login = (function(){

    return {
        init: function(ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele.querySelector('.btn1');
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            // console.log(this.$loginBtn,this.$usernameInp,this.$passwordInp);
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
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('php/login.php', params);
            }
        },
        loginSuccess: function(data) {
            if(data.code == 200) {
                // 后台会返回一个token值
                // token 是用户登录成功时,后台自动生成的一串代码
                // 每次发送请求时,都携带这个token值,后台才能确定当前用户登录成功,才会返回数据
                document.cookie = "token=" + data.data.token;
                document.cookie = "user-id=" + data.data.id;
                document.cookie = "user-name=" + data.data.username;//让cookie里面多保存一个信息：用户名；以方便主页获取登录的用户名；
                location.href = 'index.html';//从登录页面跳转至主页面
            } else {
                alert(data.msg);
            }
        }
    }

}())