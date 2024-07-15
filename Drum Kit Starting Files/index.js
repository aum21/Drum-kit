// Clicked function will be called when user click
// document.querySelector(".drum").addEventListener("click",clicked);


 
// function clicked() {
//     alert("I got Clcked");
// }


const arr = document.querySelectorAll("button.drum");
// adding eventlistener to all html button having class drum  "CSS combine selector -> button.drum"

for (let index = 0; index < arr.length; index++) {

    arr[index].addEventListener("click",function () {
        /* console.log(this); */
        
        // alert("I got Clcked");


        // this.style.color = "red";

        // console.log(this.classList[0]);
        
        // Error -> this.classList[0].toggle('red');  !Remaining

        playsound(this.innerHTML);
       
        /*
        var letter = this.innerHTML;
        console.log(letter);
        switch (letter) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                console.log(letter);
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
        
            default:
                console.log(letter);
                break;
        
        }
     */   
        
    });
    
}

document.addEventListener("keydown", function(preessed){
    // console.log(preessed);
    // console.log(this); --> NO
    playsound(preessed.key);
    

})

function playsound(letter) {
    switch (letter) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            // console.log(letter);
            audio.play();
            addAnimation(letter);
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            addAnimation(letter);
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            addAnimation(letter);
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            addAnimation(letter);
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            addAnimation(letter);
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            addAnimation(letter);
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            addAnimation(letter);
            break;
    
        default:
            console.log(letter);
            break;
    }
}

function addAnimation(addAnimationTo) {
   /*
    var arr = document.querySelectorAll(".drum");
    for(let i=0; i<arr.length ;i++){

        console.log(arr[i] + " ");
        arr[i].classList.remove("pressed");

    }
    var activebutton = document.querySelector("." + addAnimationTo).classList.toggle("pressed");
   */

    // both way are diffenrent and gave different outcome
    var activebutton = document.querySelector("." + addAnimationTo);
    activebutton.classList.add("pressed");
    setTimeout(() => {
        activebutton.classList.remove("pressed");
    },100);
}

/*
document.querySelector(".drum").addEventListener("click",clicked());
clicked function will be called after event listener is added even if user do not click

*/ 