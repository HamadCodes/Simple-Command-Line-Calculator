#! /usr/bin/env node

import inqirer from "inquirer";

const answer = await inqirer.prompt([
  { message: "Enter first number:", type: "number", name: "firstnumber" },
  { message: "Enter second number:", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if(answer.operator==="Addition"){
    console.log(`Your answer is ${answer.firstnumber+answer.secondnumber}`)
}
else if(answer.operator==="Subtraction"){
    console.log(`Your answer is ${answer.firstnumber-answer.secondnumber}`)
}
else if(answer.operator==="Multiplication"){
    console.log(`Your answer is ${answer.firstnumber*answer.secondnumber}`)
}
else if(answer.operator==="Division"){
    console.log(`Your answer is ${answer.firstnumber/answer.secondnumber}`)
}
else{
    console.log("Please select a valid operator")
}

