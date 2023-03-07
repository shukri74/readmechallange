const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you use?",
    choices: [
      {
        name: "MIT License",
        value: "MIT",
      },
      {
        name: "Apache License 2.0",
        value: "Apache-2.0",
      },
      {
        name: "GPL 3.0 License",
        value: "GPL-3.0",
      },
      {
        name: "No License",
        value: "None",
      },
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("successfully generated")
    );
  }
  
  // function to initialize program
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log(responses);
      const answers = generateMarkdown(responses);
      writeToFile("README.md", answers, (err) =>
        err ? console.log(err) : console.log("made it")
      );
    });
  }

// function call to initialize program
init();
