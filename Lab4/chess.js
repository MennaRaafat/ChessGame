var chessboard=document.getElementById("chessboard");
var steps=document.getElementById("steps");
var points=document.getElementById("score");
var c_par=document.getElementById("c_par");
var x_par=document.getElementById("x_par");

var c_show=document.getElementById("c_show");
var x_show=document.getElementById("x_show");


function start(){
let number=[1,2,3,4,5,6,7];
let letter=["a","b","c","d","e","f","g"];

function random(max) {
  return Math.floor(Math.random() * max);
}

var randomSteps= `${letter[random(7)]}${number[random(7)]}`;
steps.innerHTML = `${randomSteps}`;

var timer=1;
var points=0;

let c_array=[];
let x_array=[];

function play(event) {

  if(randomSteps===event.target.id){
    points++;
    document.getElementById("score").innerHTML = "Score = "+points;
    var c_array=randomSteps;

    randomSteps = `${letter[random(7)]}${number[random(7)]}`;

    steps.innerHTML = `${randomSteps}`;

    for(let i=0;i<c_array.length;i++)
     {
    c_par.innerHTML="Correct :";
    c_show.innerHTML+=`${c_array[i]}`+"";
    c_show.style.color = "green";
     }
     }
    else {
    var x_array=randomSteps;
    randomSteps = `${letter[random(7)]}${number[random(7)]}`;
    steps.innerHTML = `${randomSteps}`;

    for(let i=0;i<x_array.length;i++)
     {
    x_par.innerHTML="Wrong :";
    x_show.style.color = "red";
    x_show.innerHTML+=`${x_array[i]}`+ "" ;
     }
    }
}

chessboard.addEventListener('click',play);

  var chess_time = setInterval (()=>{
    if (timer > 30) {
      clearInterval(chess_time);
      chessboard.removeEventListener("click", play);
      
    }else{
          document.getElementById("countdown").innerHTML = " 0 : "+timer ;
          timer+=1;
    }
  },1000)

 function restart(){
  let points=0;
  let c_array=[];
  let x_array=[];
  document.getElementById("score").innerHTML=points;
  c_par.innerHTML=" ";
  x_par.innerHTML=" ";
  c_show.innerHTML=c_array;
  x_show.innerHTML=x_array;
 };

restart();

}

