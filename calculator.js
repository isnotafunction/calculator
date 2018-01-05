var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var zero = document.querySelector(".zero");
var dot = document.querySelector(".dot");
var pi = document.querySelector(".pi")

var display=document.querySelector(".display")
var ac = document.querySelector(".ac")
var equals = document.querySelector(".equals")

var times = document.querySelector(".times");
var divide = document.querySelector(".divide");
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");

var arr=[];
var digit = "";
var result;

ac.addEventListener("click", function(){
  display.textContent="";
  digit='';
  arr=[]
})

one.addEventListener("click", function(){
  digit+='1'
  display.textContent = digit;
  console.log(digit)
})
two.addEventListener("click", function(){
  digit+='2'
  display.textContent = digit;
  console.log(digit)
})
three.addEventListener("click", function(){
  digit+='3'
  display.textContent = digit;
  console.log(digit)
})
four.addEventListener("click", function(){
  digit+='4'
  display.textContent = digit;
  console.log(digit)
})
five.addEventListener("click", function(){
  digit+='5'
  display.textContent = digit;
  console.log(digit)
})
six.addEventListener("click", function(){
  digit+='6'
  display.textContent = digit;
  console.log(digit)
})
seven.addEventListener("click", function(){
  digit+='7'
  display.textContent = digit;
  console.log(digit)
})

eight.addEventListener("click", function(){
  digit+='8'
  display.textContent = digit;
  console.log(digit)
})

nine.addEventListener("click", function(){
  digit+='9'
  display.textContent = digit;
  console.log(digit)
})
zero.addEventListener("click", function(){
  digit+='0'
  display.textContent = digit;
  console.log(digit)
})

pi.addEventListener("click", function(){
  digit+='3.14'
  display.textContent = digit;
  console.log(digit)
})
dot.addEventListener("click", function(){
  digit+='.'
  display.textContent = digit;
  console.log(digit)
})
plus.addEventListener("click", function(){
arr.push(digit);
arr.push("+");
digit=""
})

minus.addEventListener("click", function(){
  arr.push(digit);
  arr.push("-");
  digit=""
})

times.addEventListener("click", function(){
  arr.push(digit);
  arr.push("*");
  digit=""
})

divide.addEventListener("click", function(){
  arr.push(digit);
  arr.push("/");
  digit=""
})

equals.addEventListener("click", function(){
if(digit!=""){
  arr.push(digit)
}
console.log(arr)

for (i=0;i<arr.length;i++){
  if(/\d/.test(arr[i])){
    arr[i]=(Number(arr[i]))
  }
}
arr = arr.join("");
result=eval(arr);

display.textContent = result;
arr=[]
digit=result;
})
