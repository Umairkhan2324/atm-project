import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "UserID",
    message: "kindly enter your ID",
  }  
])