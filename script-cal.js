let allbtn = document.querySelectorAll(".btn");
for (let i = 0; i < allbtn.length; i++) {
  allbtn[i].addEventListener("click", Writting);
}

let calc = document.querySelector("#calculated");
let result = document.querySelector("#result");

const lisNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listOperator = ["+", "-", "*", "/"];

let listResult = ["123", "-", "673", "*", "2"];

let temp1 = "";
let temp2 = "";
let res = "";

let operator = "";
let type = "number"; //number or operator

function Writting() {
  const value = this.getAttribute("value");

  if (lisNumber.find((list) => list == value)) {
    type = "number";
    console.log(value);
    if (operator.length == "") {
      temp1 += value;
      temp2 = "";
    } else {
      temp2 += value;
    }
    if (temp1.length > 0 && temp2.length > 0) {
      console.log("operation", temp1, operator, temp2);
      opera(operator);
    }
  } else if (listOperator.find((list) => list == value)) {
    console.log(value);
    if (operator.length == "" && temp1.length > 0) {
      operator = value;
    } else {
      operator = "";
    }
    type = "operator";
  } else if (value == "C") {
    clean()
  } else {
    console.log("no validado", value);
  }
}

function opera(op) {
  let array = {
    "+": parseInt(temp1) + parseInt(temp2),
    "-": parseInt(temp1) - parseInt(temp2),
    "*": parseInt(temp1) * parseInt(temp2),
    "/": parseInt(temp1) / parseInt(temp2),
  };

  let mm = array[op] || 0;
  console.log(mm);
  if (type == "operator") {
    temp1 = mm;
    temp2 = "";
    console.log("new operator", type);
  }
}

function clean() {
  temp1 = "";
  temp2 = "";
  res = "";
  operator = "";
  type = "number";
  console.log("cleaning...")
  //AHORA SI CON PERMISOS :V MAX
  
}
