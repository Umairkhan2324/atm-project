import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "UserID",
    message: "kindly enter your ID",
  },
  {
    type: "number",
    name: "Password",
    message: "kindly enter your password",
  },
  {
    type: "list",
    name: "AccountType",
    choices: ["current","savings"],
    message: "kindly select your account type",

  },
  {
     type: "list",
     name: "transcations",
     choices: ["fast cash","withdraw"],
     message: "kindly select your transaction",
     when (answers) {
      return answers.AccountType
     },
   },
   {
    type: "list",
    name: "withdrawmethod",
    choices: [1000,2000,5000,20000,10000],
    message: "kindly select your amount=",
    when (answers) {
      return answers.transcations === "withdraw"
    },
   }

])
console.log(answers);