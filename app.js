// Main H1 heading
document.getElementById("mainHeading").innerText = "JavaScript Calculator";

//const numberButtons = document.querySelectorAll('[data-number]')

// Creating the textbox for calculator Input's
let inputCalcOne = document.createElement("INPUT");
inputCalcOne.setAttribute("type", "text");
inputCalcOne.setAttribute("name", "userInputOne");
inputCalcOne.setAttribute("id", "inputOne");
inputCalcOne.setAttribute("value", "");
inputCalcOne.setAttribute("disabled", "");

// Memory stored of user inputs
const userLabelOne = document.createElement("LABEL");
userLabelOne.setAttribute("id", "inputLabel");
document.getElementById("calcArea").appendChild(userLabelOne);
document.getElementById("calcArea").appendChild(inputCalcOne);

// Code for taking user inputs and restricting multiple decimal points
function userInputOne(val) {
    let fieldValue = document.getElementById("inputOne").value;

    let calculator = {
        fieldValue: fieldValue, userLabelOne: userLabelOne
    }

    //console.log("pressed number", val);
    let valueInput = document.getElementById("inputOne");
    calculator.fieldValue = valueInput.value;

    let check = [".", "+", "-", "*", "/"];

    if (check.some(checkLastFieldInput) &&
        check.some(checkData)) {
        this.calculator.fieldValue.value = calculator.fieldValue.slice(0, calculator.fieldValue.length - 1) + 
        val.toString()
        return;
    }

    valueInput.value += val.toString();

    function checkLastFieldInput(operator) {
        return operator === fieldValue.charAt(fieldValue.length - 1);
    }

    function checkData(operator) {
        return operator === val;
    };

}

let btnsArea = document.getElementById("btnsArea");

//Digit One
let digitOne = document.createElement("BUTTON");
digitOne.innerText = "1";
digitOne.setAttribute("data-number", "");
//document.body.appendChild(digitOne);
btnsArea.appendChild(digitOne);

digitOne.addEventListener("click", function () {
    userInputOne('1');
});

//Digit Two
let digitTwo = document.createElement("BUTTON");
digitTwo.innerText = "2";
digitTwo.setAttribute("data-number", "");
//document.body.appendChild(digitTwo);
btnsArea.appendChild(digitTwo);

digitTwo.addEventListener("click", function () {
    userInputOne('2');
});

//Digit Three
let digitThree = document.createElement("BUTTON");
digitThree.innerText = "3";
digitThree.setAttribute("data-number", "");
//document.body.appendChild(digitTwo);
btnsArea.appendChild(digitThree);

digitThree.addEventListener("click", function () {
    userInputOne('3');
});

//Digit Four
let digitFour = document.createElement("BUTTON");
digitFour.innerText = "4";
digitFour.setAttribute("data-number", "");
btnsArea.appendChild(digitFour);

digitFour.addEventListener("click", function () {
    userInputOne('4');
});

//Digit Five
let digitFive = document.createElement("BUTTON");
digitFive.innerText = "5";
digitFive.setAttribute("data-number", "");
btnsArea.appendChild(digitFive);

digitFive.addEventListener("click", function () {
    userInputOne('5');
});

//Digit Six
let digitSix = document.createElement("BUTTON");
digitSix.innerText = "6";
digitSix.setAttribute("data-number", "");
btnsArea.appendChild(digitSix);

digitSix.addEventListener("click", function () {
    userInputOne('6');
});

//Digit Seven
let digitSeven = document.createElement("BUTTON");
digitSeven.innerText = "7";
digitSeven.setAttribute("data-number", "");
btnsArea.appendChild(digitSeven);

digitSeven.addEventListener("click", function () {
    userInputOne('7');
});

//Digit Eight
let digitEight = document.createElement("BUTTON");
digitEight.innerText = "8";
digitEight.setAttribute("data-number", "");
btnsArea.appendChild(digitEight);

digitEight.addEventListener("click", function () {
    userInputOne('8');
});

//Digit Nine
let digitNine = document.createElement("BUTTON");
digitNine.innerText = "9";
digitNine.setAttribute("data-number", "");
btnsArea.appendChild(digitNine);

digitNine.addEventListener("click", function () {
    userInputOne('9');
});

//Digit Zero
let digitZero = document.createElement("BUTTON");
digitZero.innerText = "0";
digitZero.setAttribute("data-number", "");
btnsArea.appendChild(digitZero);

digitZero.addEventListener("click", function () {
    userInputOne('0');
});

//Decimal
let digitDecimal = document.createElement("BUTTON");
digitDecimal.innerText = ".";
btnsArea.appendChild(digitDecimal);

digitDecimal.addEventListener("click", function () {
    userInputOne('.');
});

//Backspace
let digitBackSpace = document.createElement("BUTTON");
digitBackSpace.innerText = "<-";
btnsArea.appendChild(digitBackSpace);

digitBackSpace.addEventListener("click", function () {
    digitCut();
});

//Operator +
let digitAdd = document.createElement("BUTTON");
digitAdd.innerText = "+";
//document.body.appendChild(digitAdd);
btnsArea.appendChild(digitAdd);

digitAdd.addEventListener("click", function () {
    userInputOne('+');
});

//Operator -
let digitSubtract = document.createElement("BUTTON");
digitSubtract.innerText = "-";
//document.body.appendChild(digitAdd);
btnsArea.appendChild(digitSubtract);

digitSubtract.addEventListener("click", function () {
    userInputOne('-');
});

//Operator *
let digitMultiply = document.createElement("BUTTON");
digitMultiply.innerText = "*";
//document.body.appendChild(digitAdd);
btnsArea.appendChild(digitMultiply);

digitMultiply.addEventListener("click", function () {
    userInputOne('*');
});

//Operator /
let digitDivide = document.createElement("BUTTON");
digitDivide.innerText = "/";
//document.body.appendChild(digitAdd);
btnsArea.appendChild(digitDivide);

digitDivide.addEventListener("click", function () {
    userInputOne('/');
});

let btnSolve = document.createElement("BUTTON");
btnSolve.innerText = "=";
//document.body.appendChild(btnSolve);
btnsArea.appendChild(btnSolve);
btnSolve.addEventListener("click", function () {
    solve();
});

//Operator =
function solve() {
    let x = document.getElementById("inputOne").value
    let y = eval(x)
    document.getElementById("inputOne").value = y;
    document.getElementById("inputLabel").innerText = x;
}

//Clear Screen
let clrScreen = document.createElement("BUTTON");
clrScreen.innerText = "C";
btnsArea.appendChild(clrScreen);

clrScreen.addEventListener("click", function () {
    clr();
});

//function for clearing the display
function clr() {
    let valueInput = document.getElementById("inputOne");
    valueInput.value = ""
}

//function for clearing the display
function digitCut() {
    let valueInput = document.getElementById("inputOne");
    let inputDigits = valueInput.value;
    valueInput.value = inputDigits.slice(0, inputDigits.length - 1);
}

