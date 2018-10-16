// console.log(localStorage.minelist);
var str = localStorage.minelist;
aaa = JSON.parse(str);
// console.log(JSON.parse(str)[0].id);
// var $numm=JSON.parse(str)[0].num;
// console.log($numm);
// var $id=JSON.parse(str)[0].id;
var options = {
    method: "get",
    async: true,
    data: {
        'sid': '001'
    },
    success: function (data) {
        data = JSON.parse(data);
        // console.log(data);//数组对象；
        //     [
        //         {
        //            "sid":"001",
        //            "introduce":"ERYAN尔晏 抽象撞色纹中筒袜(男款)2双装",
        //            "price":"78.00",
        //             "src":"images/shop/load01.jpg"
        //         },
        //         {
        //            "sid":"002",
        //            "introduce":"ERY 克尔晏 画风撞色纹中筒袜(男款)1双装",
        //            "price":"88.00",
        //             "src":"images/shop/load02.jpg"
        //         }
        //    ]
        var str = '';
        for (var j = 0; j < aaa.length; j++) {
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i].sid);
                // console.log($id,'$id')
                if (data[i].sid == aaa[j].id) {
                    str += `
                    <li id="shopInfo">
                      <div class="list_item check">
                        <input class="checkone" type="checkbox" />
                      </div>
                      <div class="list_item goods">
                        <div class="pickture"><img src="${data[i].src}" /></div>
                        <div class="name">${data[i].introduce}</div>
                      </div>
                      <div class="list_item price">￥<span class="priceone">${data[i].price}</span></div>
                      <div class="list_item number">
                        <input class="reduce" type="button" value="-" />
                        <input class="numbox" min="1" type="text" value="${aaa[j].num}" />
                        <input class="plus" type="button" value="+" />
                      </div>
                      <div class="list_item subtotal">
                      <span class='price only'></span>
                      </div>
                      <div class="sid" style="display:none">${data[i].sid}</div>
                      <div class="list_item delete">删除</div>
                    </li>
                    `;
                    // console.log(str);
                    $('.list').html(str);
                }

            }
        }

    }
}
var url = 'json/shop.json';
sendAjax(url, options);
$(function () {
    var $b1 = 0;
    var $c1 = 0;
    var len = $('.priceone').length;
    for (var i = 0; i < len; i++) {
        var $a2 = $('.priceone')[i].innerText;
        var $a3 = $('.numbox')[i].value;
        $('.price.only')[i].innerText = $a2 * $a3;
        $b1 += Number($('.numbox')[i].value);
        $c1 += Number($('.price.only')[i].innerText);
        $('#checknum')[0].innerText = $b1;
        $('#allPrice')[0].innerText = $c1;
    }

    // console.log();
    // var $numcon = Number($numbox.value);

    // alert('Dom加载完成！');
    // console.log($('.reduce'));
    $('.plus').click(function () {
        var $div = $(this)[0].parentNode;
        var $numbox = $div.querySelector('.numbox');
        var $numcon = Number($numbox.value);
        $numbox.value = $numcon + 1;
        $b1 += 1;
        $('#checknum')[0].innerText = $b1;
        var $divnext = $div.nextElementSibling.innerHtml;
        var $divpre = $div.previousElementSibling.querySelector('.priceone');
        // $div.nextElementSibling.innerHtml=$numbox.value;
        $divnext = $divpre.innerText * ($numbox.value);
        console.log($div.nextElementSibling.querySelector('.price').innerText);
        $div.nextElementSibling.querySelector('.price').innerText = $divnext.toString();
        $c1 += Number($divpre.innerText);
        $('#allPrice')[0].innerText = $c1;
        
       
    });
    $('.reduce').click(function () {
        var $div = $(this)[0].parentNode;
        var $numbox = $div.querySelector('.numbox');
        var $numcon = Number($numbox.value);
        var $divnext = $div.nextElementSibling.innerHtml;
        var $divpre = $div.previousElementSibling.querySelector('.priceone');
        $numbox.value = $numcon - 1;
        $b1 -= 1;
        $('#checknum')[0].innerText = $b1;
        $divnext = $divpre.innerText * ($numbox.value);
        console.log($div.nextElementSibling.querySelector('.price').innerText);
        $div.nextElementSibling.querySelector('.price').innerText = $divnext.toString();
        $c1 -= Number($divpre.innerText);
        $('#allPrice')[0].innerText = $c1;
        if ($numbox.value <= 1) {
            $numbox.value = 1;
            
        }
        // $div.nextElementSibling.innerHtml=$numbox.value;
    });
    $('.list_item.delete').click(function () {
        $(this)[0].parentNode.remove();
        console.log($(this)[0].parentNode);
        $c1 -= Number($(this)[0].parentNode.querySelector('.price.only').innerText);
        $('#allPrice')[0].innerText = $c1;
        $b1 -= Number($(this)[0].parentNode.querySelector('.numbox').value);
        $('#checknum')[0].innerText = $b1;
    })
    var $checknum = $('.checknum').html;
    // console.log($checknum);
});