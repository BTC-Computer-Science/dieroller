// Code for madlibs.js
var dSides = document.getElementById("sides");
var rollResult = document.getElementById("showResult");
var dNum = document.getElementById("dNum");
var sButton = document.getElementById("submit").addEventListener("click", rollDice);

function rollDice(){
  let sides = dSides.value;
  let dice = dNum.value;
  let result = 0;
  rollResult.style.color = "black";
  for ( let die =0; die<dice; die++){
    roll = Math.floor(Math.random()*+sides)+1;
    result+=roll; 
  }
  rollResult.innerHTML = result;
  //console.log(result);
}
