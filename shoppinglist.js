/*var tag = document.getElementsByTagName("li")
for (var i = 0; i < tag.length; i++) {
    alert(tag[i]);
}*/


//alert(document.getElementsByTagName("li"));
//alert(document.getElementsByTagName("*").length);
//var shopping = document.getElementById("purchases");
/*var items = shopping.getElementsByTagName("*");
alert(items.length);
//alert(shopping.getElementsByClassName("sale").length);
alert(shopping.getElementsByTagName);*/

/*var paras = document.getElementById("purchases");
alert(paras.getAttribute("title"));
paras.setAttribute("title", "a list of goods");
alert(paras.getAttribute("title"));*/
var stt = document.getElementsByTagName("P");
for (i = 0; i < stt.length; i++) {
    var title_text = stt[i].getAttribute("title");
    if (title_text) {
        stt[i].setAttribute("title", "ha");
    }
}