// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for using your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license does your project have?',
      choices: [
        'MIT',
        'Apache 2.0',
        'GPL 3.0',
        'Other',
        'None',
      ],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What should other developers know about contributing to your project?',
    },
    {
      type: 'input',
      name: 'repoURL',
      message: 'What is the URL of your GitHub repository?',
    },
    {
      type: 'input',
      name: 'directory',
      message: 'What is the name of your project directory?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    });
  }
// Function call to initialize app
init();
