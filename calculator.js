var nums = document.querySelectorAll(".numbers");
var operators=document.querySelectorAll(".operators");
var display = document.querySelector(".display");
var clear = document.querySelector(".ac");
var equals = document.querySelector(".equals");

var arr = [];
var digits=''
var result;

for(var i=0;i<nums.length;i++){
  nums[i].addEventListener("click", function(){
        digits+=this.value;
          console.log(digits)
        display.textContent=digits

    })
}

for(var j=0; j<operators.length;j++){
  operators[j].addEventListener("click", function(){
    if(digits!==""){
     arr.push(digits);
     digits="";
    }

  var lastEntry=arr[arr.length-1];
   if(lastEntry!=="+" && lastEntry!=="-" && lastEntry!=="*" && lastEntry!=="/"){
     arr.push(this.value);
   } else {
     display.classList.add("red")
     window.setTimeout(function () {
      display.classList.remove('red');
}, 1000);
   }
    console.log(arr)
 })
}

clear.addEventListener("click", function(){
  digits = "";
  display.textContent = "";
  arr = [];
})

equals.addEventListener("click", function(){
  arr.push(digits);
  console.log(arr)
  digits="";
  arr=arr.join("");
  result = eval(arr);
  display.textContent = result;
  arr=[];
  digits=result;
})
