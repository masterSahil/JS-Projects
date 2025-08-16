function arithmetic(num1, num2, operator){
    if (operator == "+") return num1 + num2;
    else if (operator == "-") return num1 - num2;
    else if (operator == "*") return num1 * num2;
    else if (operator == "/") return num1 / num2;
    else if (operator == "%") return num1 % num2;
    else return "Invalid Operator";
}

function squareFinder(num) {
    return num * num;
}   

function cubeFinder(num) {
    return num * num * num;
}

function evenOddCheck(num) {
    return num % 2;
}

function factorial(num) {
    if (num < 0) return "Negative number is not valid";
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

const outputDiv = document.getElementById("output");
let history = "";

let choice;
do {
    choice = prompt(`Choose Option & Enter Choice
    1. Arithmetic Calculator
    2. Square & Cube Calculator
    3. Factorial Calculator
    4. Even/Odd Checker
    0. Exit`);

    let resultMessage = "";

    if (choice == 1) {
        let num1 = parseInt(prompt("Enter Num1: "));
        let num2 = parseInt(prompt("Enter Num2: "));
        const operator = prompt("Enter Operator(+, -, *, /, %) :");
        const total = arithmetic(num1, num2, operator);
        resultMessage = `Arithmetic: ${num1} ${operator} ${num2} = ${total}`;
        console.log(`\nArithmetic Calculator: \n${num1} ${operator} ${num2} = ${total}`);
        
    } else if (choice == 2) {
        let num = parseInt(prompt("Enter Num: "));
        let square = squareFinder(num), cube = cubeFinder(num);
        resultMessage = `Square of ${num} = ${square}, Cube of ${num} = ${cube}`;
        console.log(`\nSquare & Cube Calculator:\nSquare of ${num} is : ${square}\nCube of ${num} is : ${cube}`);

    } else if (choice == 3) {
        let num = parseInt(prompt("Enter Num: "));
        resultMessage = `Factorial of ${num} = ${factorial(num)}`;
        console.log(`\nFactorial Calculator:\nFactorial of ${num} is : ${factorial(num)}`);
        
    } else if (choice == 4) {
        let num2 = parseInt(prompt("Enter Num: "));
        let final = evenOddCheck(num2);
        resultMessage = (final == 0) ? `${num2} is Even` : `${num2} is Odd`;
        console.log(`\nEven/Odd Checker:\n${final == 0 ? `${num2} is Even` : `${num2} is Odd`}`);

    } else if (choice == 0) {
        alert("Exited Successfully.");
    } else {
        alert("Invalid Choice");
    }

    if (choice != 0 && resultMessage) {
        history += resultMessage + "<br>";
        outputDiv.innerHTML = history;
    }

} while (choice != 0);