// var obj=document.getElementsByTagName("body");
// console.log(obj);
var ball=document.getElementById("move-ball");

ball.style.top="5vh";
ball.style.left="30vw";
document.addEventListener("keydown",function(event){
    console.log("jjj"+ event.keyCode);

    if(event.keyCode==87){
        console.log("Up");
        console.log(ball);
        // console.log(ball.style.top);
        console.log(parseInt(ball.style.top));
       if(parseInt(ball.style.top)>2){
           ball.style.top=parseInt(ball.style.top)-2+"vh";
       }

    }
   else if(event.keyCode==65){
    console.log("left");
    console.log(parseInt(ball.style.left));
   if(parseInt(ball.style.left)>2){
       ball.style.left=parseInt(ball.style.left)-2+"vw";
     }
   } 
   else if(event.keyCode==83){
    console.log(parseInt(ball.style.top));
   if(parseInt(ball.style.top)<84){
       ball.style.top=parseInt(ball.style.top)+2+"vh";
   }
   }
   else if(event.keyCode==68){
    console.log("left");
    console.log(parseInt(ball.style.left));
   if(parseInt(ball.style.left)<82){
       ball.style.left=parseInt(ball.style.left)+2+"vw";
     }  
   }
     
});