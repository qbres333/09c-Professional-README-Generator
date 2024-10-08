// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: colors.brightCyan("What is the name of your project?"),
    name: "projectTitle",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "Type a detailed description of your project. Separate paragraphs with double commas (,,):"
    ),
    name: "description",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "What are the steps required to install your project (i.e. get the development environment running)? Separate paragraphs with double commas (,,):"
    ),
    name: "installation",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "Provide instructions and examples for use. Include screenshots with relevant syntax as needed. Separate paragraphs with double commas (,,):"
    ),
    name: "usage",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "List any collaborators (if any) with links to their GitHub profiles, or third-party assets employed. Separate paragraphs with double commas (,,):"
    ),
    name: "credits",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "Describe the features of your project. Separate paragraphs with double commas (,,):"
    ),
    name: "features",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "Explain how others can contribute to your project. Separate paragraphs with double commas (,,):"
    ),
    name: "contributing",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "Describe the tests users can do with your project. Separate paragraphs with double commas (,,):"
    ),
    name: "tests",
  },
  {
    type: "list",
    message: colors.brightCyan("Which license was used for your project?"),
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "ISC license",
      "MIT license",
    ],
  },
  {
    /* Questions is a section at the bottom of the file that will hold the 
    responses to github username (then code profile link), user email address */
    type: "input",
    message: colors.brightCyan("What is your GitHub username?"),
    name: "gitUsername",
  },
  {
    type: "input",
    message: colors.brightCyan("What is your email address?"),
    name: "email",
  },
];


// TODO: Create a function to write README file
function writeReadme() {
  inquirer.prompt(questions)
  .then((response) => {
    // store responses in an object, then retrieve values later in string
    const readmeData = {
      projectTitle: response.projectTitle,
      description: response.description.replace(/,,/g, "<br><br>"),
      installation: response.installation.replace(/,,/g, "<br><br>"),
      usage: response.usage.replace(/,,/g, "<br><br>"),
      credits: response.credits.replace(/,,/g, "<br><br>"),
      features: response.features.replace(/,,/g, "<br><br>"),
      contributing: response.contributing.replace(/,,/g, "<br><br>"),
      tests: response.tests.replace(/,,/g, "<br><br>"),
      license: response.license,
      gitUsername: response.gitUsername,
      email: response.email,
    };

    // using <br><br> instead of double trailing spaces
    // in the TOC, the anchor syntax is all lowercase and replaces spaces with hyphens
    // build README
    let inputString = `# ${readmeData.projectTitle}<br><br>
## Description<br><br>${readmeData.description}<br><br>
## Table of Contents<br><br>
- [Installation] (#installation)<br>
- [Usage] (#usage)<br>
- [Credits] (#credits)<br>
- [Features] (#features)<br>
- [Contributing] (#contributing)<br>
- [Tests] (#tests)<br>
- [License] (#license)<br>
- [Questions] (#questions)<br><br>
## Installation<br><br>${readmeData.installation}<br><br>
## Usage<br><br>${readmeData.usage}<br><br>
## Credits<br><br>${readmeData.credits}<br><br>
## Features<br><br>${readmeData.features}<br><br>
## Contributing<br><br>${readmeData.contributing}<br><br>
## Tests<br><br>${readmeData.tests}<br><br>
## License<br><br>This application uses the ${readmeData.license}<br><br>
## Questions<br><br>GitHub Profile: https://github.com/${readmeData.gitUsername}<br>
If you have additional questions, please contact me at ${readmeData.email}
`;


    // add a badge for the license to the top of the README file
    if (readmeData.license == "Apache License 2.0") {
        const apacheBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        const newString = `${apacheBadge}\n\n${inputString}`;

        fs.writeFile("proREADME.md", newString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Your professional README file had been created!");
        }
        });
    } else if (readmeData.license == "GNU General Public License v3.0") {
        const gnuBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        const newString = `${gnuBadge}\n\n${inputString}`;

        fs.writeFile("proREADME.md", newString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Your professional README file had been created!");
        }
        });
    } else if (readmeData.license == "ISC license") {
        const iscBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        const newString = `${iscBadge}\n\n${inputString}`;

        fs.writeFile("proREADME.md", newString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Your professional README file had been created!");
        }
        });
    } else {
        const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        const newString = `${mitBadge}\n\n${inputString}`;

        fs.writeFile("proREADME.md", newString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Your professional README file had been created!");
        }
        });
    }

  });
}

// TODO: Create a function to initialize app
function init() {
    writeReadme();
}

// Function call to initialize app
init();


