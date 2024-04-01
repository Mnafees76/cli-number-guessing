#! /usr/bin/env node
import inquire from "inquirer";
const randomNumber = Math.floor(Math.random() * 7 + 1);
const answers = await inquire.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-7:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
