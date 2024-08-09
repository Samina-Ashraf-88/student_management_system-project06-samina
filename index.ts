#!/usr/bin/env node

import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000 + Math.random() * 90000);

let myBalance: number = 0;
let answer = await inquirer.prompt([
  {
    name: "students",
    type: "input",
    message: "enter student name:",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "please enter a non-empty value.";
    },
  },
  {
    name: "courses",
    type: "list",
    message: "select the course to enroll:",
    choices: ["ms.office", "html", "javascript", "typescript", "python"],
  },
]);
const tutionFee:{[key:string]:number}={
    "ms.office":2000,
    "html":2500,
    "javascript":5000,
    "typescript":6000,
    "python":10000,
};
console.log(`\n tutionFees:${tutionFee[answer.courses]}/-\n`);
console.log(`balance:${myBalance}\n`);

let paymentType=await inquirer.prompt([{

    name:"payment",
    type:"list",
    message:"select payment method:",
    choices:["bank transfer","easy paisa","jazz cash"]
},
 {
    name:"amount",
    type:"input",
    message:"transfer money:",
    validate:function(value){
      if(value.trim()!==""){
        return true;
      }
      return"please enter a non-empty value.";
    },
  }
]);

console.log(`\nyou select payment method ${paymentType.payment}`);

const tutionFees=tutionFee[answer.courses];
const paymentAmount=parseFloat(paymentType.amount)

if (tutionFees===paymentAmount){
  console.log(`congratulations,you have successfully enrolled in : ${answer.courses}.\n`);

  let ans=await inquirer.prompt([{

    name:"select",
    type:"list",
    message:"what would you like to do next?",
    choices:["view status","exit"]
     }
])
if(ans.select==="view status"){
  console.log("\nstatus\n");
  console.log(`student name:${answer.students}`);
  console.log(`student id:${randomNumber}`);
  console.log(`course:${answer.courses}`);
  console.log(`tution fees paid:${paymentAmount}`);
  console.log(`balance:${myBalance+=paymentAmount}`);
  
}else{
  console.log("\nexitting student management system.\n");
  }
  }else{
  console.log("invalid amount due to course.\n");
  };
