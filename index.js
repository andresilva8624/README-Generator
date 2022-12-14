// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter the project description:",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "test",
  },
  {
    type: "input",
    message: "Please enter the usage of the project:",
    name: "usage",
  },

  {
    type: "input",
    message: "Please enter the credits",
    name: "credits",
  },
  {
    type: "list",
    message: "Please choose a license",
    name: "license",
    choices: ['ISC', 'MIT', 'Apache-2.0', 'UNLICENSED']
  },
  {
    type: "input",
    message: "What's your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What's your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => {
      console.log(response)
      writeToFile('README1.md', response)
    }
    )
}

// Function call to initialize app
init();
