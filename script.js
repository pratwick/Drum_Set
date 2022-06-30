var numberOfDrumButtons = document.querySelectorAll(".btn").length;

for (var i=0 ;i<numberOfDrumButtons ;i++)
{
       document.querySelectorAll(".btn")[i].addEventListener("click",function(){
       var alpha = this.innerHTML;
       console.log(alpha);
       if(alpha=='w'){
          var audio = new Audio ('sounds/tom-1.mp3');
          audio.play();
       }
       
       else if(alpha=='a'){
          var audio = new Audio ('sounds/tom-2.mp3');
          audio.play();
       }
       
       else if(alpha=='s'){
          var audio = new Audio ('sounds/tom-3.mp3');
          audio.play();
       }
       
       else if(alpha=='d'){
          var audio = new Audio ('sounds/tom-4.mp3');
          audio.play();
       }
       
       else if(alpha=='j'){
          var audio = new Audio ('sounds/crash.mp3');
          audio.play();
       }
       
       else if(alpha=='k'){
          var audio = new Audio ('sounds/kick-bass.mp3');
          audio.play();
       }
       else if(alpha=='l'){
          var audio = new Audio ('sounds/snare.mp3');
          audio.play();
       }

     });
}
