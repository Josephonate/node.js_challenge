// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markDownContent = generateMarkDown(answers);

            fs.writeFile('markDown.md', markDownContent, (err) =>
            err ?console.log(err)
            :console.log('Successfully created markDown.md!')
            );
        });
}

// Function call to initialize app
init();