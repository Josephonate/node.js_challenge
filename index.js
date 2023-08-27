// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why and how of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            "Apache lic 2.0", "GNU Gen Public lic v3.0", "MIT lic",
            'BSD 2-Clause"Simplified" lic', 'BSD 3-Clause "New" or "Revised" lic', "Boost Software lic 1.0", 
            "Creative Commons Zero v1.0", "Eclipse Public lic 2.0", "GNU Affero Gen Public lic v3.0", "GNU General Public lic v2.0",
            "GNU Lesser Gen Public lic v2.1", "Mozilla Public Lic 2.0", "The Unlicense", "None"
        ]
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your gitHub username?',
    },

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//  }
//  writeToFile()

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markDownContent = generateMarkDown(answers);

            fs.writeFile('markDown.md', markDownContent, (err) =>
                err ? console.log(err)
                    : console.log('Successfully created markDown.md!')
            );
        });
}

// Function call to initialize app
init();