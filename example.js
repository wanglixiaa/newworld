/*window.onload = function() {
    var testdiv = document.getElementById("testdiv");
    alert(testdiv.innerHTML);
}
window.onload = function() {
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";

}*/
/*window.onload = function() {
    var para = document.createElement("p");
    var info = "nodename:";
    info += para.nodeName;
    info += "nodetype:";
    info += para.nodeType;
    alert(info);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello world");

    para.appendChild(txt);
}
window.onload = function() {
    var para = document.createElement("p");
    var txt = document.createTextNode("Hello world!");
    para.appendChild(txt);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}*/
window.onload = function() {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is");
    var txt3 = document.createTextNode("content.");
    var txt2 = document.createTextNode("my ");
    var emphasis = document.createElement("em");
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    para.appendChild(txt1);
    para.appendChild(emphasis);
    para.appendChild(txt3);
    emphasis.appendChild(txt2);
}