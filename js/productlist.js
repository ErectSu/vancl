
var options = {
    method: "get",
    async: true,
    data:null,
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
            // console.log(data[i].sid);
            str += `<li>
            <div class="shop_pic" attr-aid='${data[i].sid}'>
                    <a href='javascript:;'><img style='width:240px;' src="${data[i].src}"/></a>
            </div>
            <span class="sid" style="display:none">${data[i].sid}</span>
            <p>${data[i].introduce}</p>
            <div class="price">￥${data[i].price}</div>
            
        </li>`;
                console.log(str);
                $('.shop_box').html(str);

        }
    }
}
var url='json/shop.json';
sendAjax(url, options);

var $shop_box=document.querySelector('.shop_box');
$shop_box.onclick=function(ev){
    ev=ev||window.event;
    var target=ev.target||ev.srcElement;
    console.log(target.nodeName);
    if(target.nodeName='IMG'){
        var numn=target.parentNode.parentNode.getAttribute('attr-aid');
        console.log(numn);
        var _cookie=new OprationCookie();
        _cookie.setCookie('hobbyid',numn);
        console.log(document.cookie);
        location.href = "productdetail.html?id="+numn;
    }

}
// //点击商品图片跳转到详情页，同时将该商品信息保存至cookie，一次保存一个就行
// $(".shop_box").delegate(".shop_pic","click",function(){
//     var num = $(this).parent().find(".sid").html();
//     //alert(num);
//     setCookie("shopId",num);
//     location.href = "details.html";
// });

