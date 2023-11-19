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
    name: "transcations",
    choices: ["fast cash","withdraw"],
    message: "kindly select your transaction",
  }
])