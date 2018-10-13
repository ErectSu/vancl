console.log(localStorage.minelist);
var str=localStorage.minelist;
console.log(JSON.parse(str)[0].id);
var $numm=JSON.parse(str)[0].num;
console.log($numm);
var $id=JSON.parse(str)[0].id;
var options = {
    method: "get",
    async: true,
    data: {
        'sid':$id
    },
    success: function(data){
        
        data=JSON.parse(data);
        console.log(data);//数组对象；
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
        var str=[];
        for(var i=0;i<data.length;i++){
            console.log(data[i].sid);
            if(data[i].sid == $id){
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
                    <input class="numbox" type="text" value="${$numm}" />
                    <input class="plus" type="button" value="+" />
                  </div>
                  <div class="list_item subtotal"></div>
                  <div class="sid" style="display:none">${data[i].sid}</div>
                  <div class="list_item delete">删除</div>
                </li>
                `;
                console.log(str);
                $('.list').html(str);
            }

        }
    }
}
var url='json/shop.json';
sendAjax(url, options);

