var button = document.getElementById('first-button');
var second = document.getElementById('second-button');
var blockfirst = document.getElementById('first-block');
var blocksecond = document.getElementById('second-block');
button.addEventListener("click",function(e){
    button.style.display="none";
    second.style.display="flex";
    blockfirst.style.display="none";
    blocksecond.style.display="block";
},false);
second.addEventListener("click",function(e){
    second.style.display="none";
    button.style.display="flex";
    blocksecond.style.display="none";
    blockfirst.style.display="block";

},false);

$.fn.toggleHTML = function(a, b) {
    return this.html(function(_, html) {
        return $.trim(html) === a ? b : a;
    });
}
