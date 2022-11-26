
for(var i=0; i< document.querySelectorAll("button").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", func)
function func()
{


var t= this.innerHTML;


switch(t)
{
case "w": 
var audio1 = new Audio('./sounds/tom-4.mp3');
audio1.play();
console.log(this.style.color="black")
break;

case "a":
 var audio2 = new Audio('./sounds/tom-1.mp3')
 audio2.play();
 console.log(this.style.color="black")
 break;

case "s":
var audio3 = new Audio('./sounds/tom-2.mp3')
audio3.play();
console.log(this.style.color="black")
break;

case "d":
    var audio4 = new Audio('./sounds/tom-3.mp3')
    audio4.play();
    console.log(this.style.color="black")
    break;
case "j":
    var audio4 = new Audio('./sounds/crash.mp3')
    audio4.play();
    console.log(this.style.color="black")
    break;
case "k":
    var audio4 = new Audio('./sounds/snare.mp3')
    audio4.play();
    console.log(this.style.color="black")
    break;
case "l":
    var audio4 = new Audio('./sounds/kick-bash.mp3')
    audio4.play();
    console.log(this.style.color="black")
    break;

default:
}
}
}



//search first button on the doc, and listen click and handle the function at the eventlistener 
// (type, eventlistener)

// mdn///selector //addeventlistener
// and seelct only the first button and every single time 
