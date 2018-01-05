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
    arr.push(digits);
    digits="";
    arr.push(this.value);
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
