import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "Students",
        type: "Input",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty value...";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["Ms.Office", "HTML", "Jawascript", "Typescript", "Python"]
    }
]);
const tutionFees = {
    "Ms.Office": 2000,
    "HTML": 2500,
    "Jawascript": 5000,
    "Typescript": 6000,
    "Python": 10000
};
console.log(`\n Tution Fees: ${tutionFees[answer.courses]}/-\n`);
console.log(`Balance : ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easy Paisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value..";
        },
    }
]);
console.log(`\n You select payment method ${paymentType.payment}`);
const TutionFees = tutionFees[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (TutionFees === paymentAmount) {
    console.log(`Congratulation , You have successfully enrolled in ${answer.courses}....\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n**********Status*********\n");
        console.log(`Student Name : ${answer.Students}`);
        console.log(`Student ID : ${randomNumber}`);
        console.log(`Courses : ${answer.courses}`);
        console.log(`Tution Fees Paid : ${paymentAmount}`);
        console.log(`Balance : ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\n Existing Student Management System\n");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
