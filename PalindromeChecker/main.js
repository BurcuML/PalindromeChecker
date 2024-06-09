const btn = document.getElementById("check-btn").addEventListener("click", chck);
const text = document.getElementById("text-input");
const result = document.getElementById("result");

function chck(){
  if(text.value===""){
    alert("Please input a value")
  }
    else if(text.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()===text.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('')){
    result.innerText=(`"${text.value} is a palindrome"`)
  }
  else{
    result.innerText=(`"${text.value} is not a palindrome"`)
  }
}
