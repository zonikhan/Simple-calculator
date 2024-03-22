#! /usr/bin/env node 


import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name:"firstNumber"},
    {messge: "Enter Second  Number", type: "number", name: "secondNumber"},
    {
        message: "Select one operatior  to perform opertion",
        type: "list",
        name: "operator",
        choices:["Addition", "Subtraction", "Multiplication","Division"],
    },
]);

// conditions
if (answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator ==="Subtraction"){
    console.log(answers. firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
    
















