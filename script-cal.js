// add event to all buttons
let allbtn = document.querySelectorAll(".btn");
for (let i = 0; i < allbtn.length; i++) {
  allbtn[i].addEventListener("click", Writting);
}

// calculator and result items
let calc = document.querySelector("#calculated");
let result = document.querySelector("#result");

// list of numbers and operators to be used
const lisNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listOperator = ["+", "-", "*", "/", "%"];

// declare variables globally
let op = "";
let total = 0; // total of all operations in progress
let temp1 = "";
let temp2 = "";
let res = "";

// capture keypress
function Writting() {
  const value = this.getAttribute("value");
  validator(value);
  calc.innerHTML = temp1 + " " + op + " " + temp2;
}

// validate input
function validator(value) {
  switch (value) {
    case lisNumber.find((list) => list == value):
      if (op == "") {
        temp1 += value;
        temp2 = "";
        calc.innerHTML = temp1;
      }
      if (op != "") {
        temp2 += value;
        calc.innerHTML = temp2;
      }
      break;
    case listOperator.find((list) => list == value):
      op = value;
      if (res != "") {
        temp1 = res;
        temp2 = "";
      }
      break;
    case "=":
      opera(op);
      result.innerHTML = res;
      break;
    case "C":
      clean();
      break;
    default:
      break;
  }
}

// calculate
function opera(op) {
  let array = {
    "+": parseInt(temp1) + parseInt(temp2),
    "-": parseInt(temp1) - parseInt(temp2),
    "*": parseInt(temp1) * parseInt(temp2),
    "/": parseInt(temp1) / parseInt(temp2),
    "%": ((parseInt(temp1) / 100) * parseInt(temp2)).toFixed(2),
  };
  let mm = array[op] || 0;
  res = mm;
  result.innerHTML = res;
  total += res;
  console.log("operation", temp1, op, temp2, "result:", res, "total:", total);
}

// clean calculator
function clean() {
  op = "";
  total = 0;
  temp1 = "";
  temp2 = "";
  res = "";
  calc.innerHTML = 0;
  result.innerHTML = 0;
  console.log("cleaning...");
}
