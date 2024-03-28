import inquirer from "inquirer";
import ListPrompt from "inquirer/lib/prompts/list.js";

let myBalance = 10000; //Dollar
let myPin = 786104;
const denominations = [5000, 4000, 3000, 2000, 1000];

let pinAnswer = await inquirer.prompt(
  [{
    name: "pin",
    message: "enter your pin",
    type: "number"
  }]
);

if (pinAnswer.pin === myPin) {

console.log("correct pin code!!");

 let operationAns = await inquirer.prompt(
  [
    {
      name:"operation",
      message:"please select option",
      type:"list",
      choices:["withdraw", "check balance"]
    }
  ]
 );
 console.log(operationAns.operation);
 if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt(
    [
      {
        name: "amount",
        message: "enter your amount",
        type:"number"
      }
    ]
  );

  myBalance -= amountAns.amount;
  console.log("your current balance is:" + myBalance)

 } else if (operationAns.operation === "check balance"){
  console.log("your balance is:" + myBalance)
 }

} 

else {
  console.log("incorrect pin number");
}
