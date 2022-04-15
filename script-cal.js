let allbtn = document.querySelectorAll(".btn");
for (let i = 0; i < allbtn.length; i++) {
  allbtn[i].addEventListener("click", Writting);
}

let calc = document.querySelector("#calculated");
let result = document.querySelector("#result");
let signal_igual = document.querySelector("#signaligual");

const lisNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listOperator = ["+", "-", "*", "/"];

let listResult = ["123", "-", "673", "*", "2"];

//add max
let a = ""
let b = ""
let op = ""
let total = ""
let historial = ""

function Writting() {
  const value = this.getAttribute("value");
  if (lisNumber.find((list) => list == value)) {
    calc.innerHTML = value
    op != "" && a != "" ? (b += value, opera(op)) : a += value    
  } else if (listOperator.find((list) => list == value)) {
    a && b && op ? (a = total, reset() ) : ""
    op = value
  } else {
    console.log("no validado number or operation", value);
  }
  historial += value
  console.log(`${a}${op}${b} = ${total}`)
  calc.innerHTML = historial;
  result.innerHTML = total;
  total == ""? result.innerHTML = a :   signal_igual.innerHTML = "="
}

function opera(op) {
  total = ""
  let array = {
    "+": parseInt(a) + parseInt(b),
    "-": parseInt(a) - parseInt(b),
    "*": parseInt(a) * parseInt(b),
    "/": parseInt(a) / parseInt(b),
    "%": ((parseInt(a) / 100) * parseInt(b)).toFixed(2),
  }
  let mm = array[op]
  total += mm
}

function reset() {
  b = ""
  op = ""
  total = ""
}
