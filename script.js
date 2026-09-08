let currentNumber = "";
let previousNumber = "";
let operator = "";

function addNumber(number) {
  if (currentNumber === "0") {
    currentNumber = "";
  }

  currentNumber += number;

  document.getElementById("result").innerHTML = currentNumber;
}


function addDecimal() {
  if (!currentNumber.includes(".")) {
    if (currentNumber === "") {
      currentNumber = "0";
    }

    currentNumber += ".";

    document.getElementById("result").innerHTML = currentNumber;
  }
}


function chooseOperator(selectedOperator) {
  if (currentNumber === "") {
    return;
  }

  previousNumber = currentNumber;
  operator = selectedOperator;
  currentNumber = "";

  let symbol = selectedOperator;

  if (selectedOperator === "*") {
    symbol = "×";
  }

  if (selectedOperator === "/") {
    symbol = "÷";
  }

  document.getElementById("expression").innerHTML =
    previousNumber + " " + symbol;

  document.getElementById("result").innerHTML = "0";
}


function calculate() {
  if (previousNumber === "" || currentNumber === "") {
    return;
  }

  let num1 = Number(previousNumber);
  let num2 = Number(currentNumber);
  let answer;

  if (operator === "+") {
    answer = num1 + num2;
  } else if (operator === "-") {
    answer = num1 - num2;
  } else if (operator === "*") {
    answer = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      answer = "Error";
    } else {
      answer = num1 / num2;
    }
  }

  if (typeof answer === "number") {
    answer = Number(answer.toFixed(10));
  }

  let symbol = operator;

  if (operator === "*") {
    symbol = "×";
  }

  if (operator === "/") {
    symbol = "÷";
  }

  document.getElementById("expression").innerHTML =
    previousNumber + " " + symbol + " " + currentNumber;

  document.getElementById("result").innerHTML = answer;

  currentNumber = answer.toString();
  previousNumber = "";
  operator = "";
}


function percentage() {
  if (currentNumber === "") {
    return;
  }

  currentNumber = (Number(currentNumber) / 100).toString();

  document.getElementById("result").innerHTML = currentNumber;
}

// Change positive/negative

function changeSign() {
  if (currentNumber === "") {
    return;
  }

  currentNumber = (Number(currentNumber) * -1).toString();

  document.getElementById("result").innerHTML = currentNumber;
}


function deleteNumber() {
  if (currentNumber === "") {
    return;
  }

  currentNumber = currentNumber.slice(0, -1);

  if (currentNumber === "") {
    document.getElementById("result").innerHTML = "0";
  } else {
    document.getElementById("result").innerHTML = currentNumber;
  }
}


function clearCalculator() {
  currentNumber = "";
  previousNumber = "";
  operator = "";

  document.getElementById("expression").innerHTML = "";
  document.getElementById("result").innerHTML = "0";
}
