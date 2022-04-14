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
let a = 0
let b = 0
let op = ""
let total = 0

function Writting() {
  const value = this.getAttribute("value");

  if (lisNumber.find((list) => list == value)) {
    op != "" ? (b += value, opera(op)) : a += value
  } else if (listOperator.find((list) => list == value)) {
    op = value
  } else {
    console.log("no validado", value);
  }
}

function opera(op) {
  let array = {
    "+": parseInt(a) + parseInt(b),
    "-": parseInt(a) - parseInt(b),
  }
  let mm = array[op]
  total += mm
  console.log(total)
  reset()

}

function reset() {
  a = 0
  b = 0
  op = ""
}
