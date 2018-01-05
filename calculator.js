var one = document.querySelector(".one");
var two = document.querySelector(".two");
// var three = document.querySelector(".three");
// var four = document.querySelector(".four");
// var five = document.querySelector(".five");
// var six = document.querySelector(".six");
// var seven = document.querySelector(".seven");
// var eight = document.querySelector(".eight");
// var nine = document.querySelector(".nine");
// var zero = document.querySelector(".zero");
// var dot = document.querySelector(".dot");

var display=document.querySelector(".display")
var ac = document.querySelector(".ac")
var equals = document.querySelector(".equals")

// var times = document.querySelector(".times");
// var divide = document.querySelector(".divide");
// var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");


var numberArr=[];
var digit = "";
var result;
var operation;

one.addEventListener("click", function(){
  digit+='1'
  display.textContent = digit;
  console.log(digit)
})


plus.addEventListener("click", function(){
numberArr.push(digit);
operation="+";
digit=""
})

minus.addEventListener("click", function(){
  numberArr.push(digit);
  operation="-"
  digit=""
})

two.addEventListener("click", function(){
  digit+='2'
  display.textContent = digit;
  console.log(digit)
})

ac.addEventListener("click", function(){
  display.textContent="";
  digit='';
  numberArr=[];
})

equals.addEventListener("click", function(){
if(digit!=""){
  numberArr.push(digit)
}
console.log(numberArr)
numberArr=numberArr.map(Number)
if(operation="+"){
  result=numberArr.reduce(function(a,b){return a+b},0)
}
display.textContent = result;
})
