let allbtn = document.querySelectorAll(".btn");
for (let i = 0; i < allbtn.length; i++) {
  allbtn[i].addEventListener("click", Writting);
}

let calc = document.querySelector("#calculated");
let result = document.querySelector("#result");

const lisNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listOperator = ["+", "-", "*", "/"];

let listResult = ["123", "-", "673", "*", "2"];

//add max
let a = ""
let b = ""
let op = ""
let total = 0

function Writting() {
  const value = this.getAttribute("value");

  if (lisNumber.find((list) => list == value)) {
    op != "" && a != "" ? (b += value, opera(op)) : a += value    
  } else if (listOperator.find((list) => list == value)) {
    a && b && op ? (a = total, reset() ) : ""
    op = value
  } else {
    console.log("no validado number or operation", value);
  }
  console.log(`${a}${op}${b} = ${total}`)
}

function opera(op) {
  total = 0
  let array = {
    "+": parseInt(a) + parseInt(b),
    "-": parseInt(a) - parseInt(b),
  }
  let mm = array[op]
  total += mm
}

function reset() {
  b = ""
  op = ""
  total = 0
}
