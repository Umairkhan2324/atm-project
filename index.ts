import inquirer from "inquirer";
interface ansType{
  UserID: string;
  UserPIN: number;
  accountType: string;
  transactionType: string;
  amount: number;
}

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
      return answers.transcations == "fast cash"
    },
   },
   {
    type: "number",
    name: "amount",
    message: "enter your amount=",
    when (answers) {
      return answers.transcations == "withdraw"
    },
   }

])
console.log(answers);
if (answers.UserID && answers.UserPIN){
  const balance= Math.floor(Math.random()*10000);
  console.log(balance)
  const EnteredAmount = answers.amount;
  if(balance > EnteredAmount){
    const remaining = balance - EnteredAmount;
    console.log(`your remaining balance is ${remaining}`)
  }else {
    console.log("your current balance is insufficient!")
  }
}