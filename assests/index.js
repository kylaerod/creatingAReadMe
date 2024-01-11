const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./generateMarkdown'); 

// Function to write README file
function writeToFile(projectTitle, description, installation, usage, credits, license, altText) {
  const content = generateMarkdown({
    projectTitle,
    description,
    installation,
    usage,
    credits,
    license,
    altText,
  });

  fs.writeFile('README.md', content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully generated!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your Project Title?',
        validate: function (input) {
          return input !== '' ? true : 'Project Title cannot be empty.';
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        validate: function (input) {
          return input !== '' ? true : 'Description cannot be empty.';
        },
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: function (input) {
          return input !== '' ? true : 'Installation steps cannot be empty.';
        },
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        validate: function (input) {
          return input !== '' ? true : 'Usage instructions cannot be empty.';
        },
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'altText',
        message: 'Write some Alt Text for your screenshots.',
      },
    ])
    .then((answers) => {
      writeToFile(
        answers.projectTitle,
        answers.description,
        answers.installation,
        answers.usage,
        answers.credits,
        answers.license,
        answers.altText
      );
    });
}

// Function call to initialize app
init();
