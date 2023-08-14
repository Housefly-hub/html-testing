// document.addEventListener("scroll",function(){
//     var welcome=new Audio("./Yousoro.mp3");
//     welcome.play();
//     // alert("YOusoro");
// });





document.querySelectorAll("img")[1].addEventListener("click",function(){
    var Hello=new Audio("./konichiwa.mp3")
    Hello.play()
});
document.querySelectorAll("img")[0].addEventListener("click",function(){
    var tiger=new Audio("./Alien_Tiger.wav")
    tiger.play()
});
document.querySelector("h1").addEventListener("click",function(){
    var welcome=new Audio("./Yousoro.mp3");
    welcome.play();
    document.querySelector("h1").innerHTML="Welcome";
    document.querySelector("h1").style.fontSize="100px";
});