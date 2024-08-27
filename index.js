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
      message: colors.brightCyan("Type a detailed description of your project"),
      name: "description",
    },
    {
      type: "confirm",
      message: colors.brightCyan(
        "Would you like to include a table of contents in your README?"
      ),
      name: "askContents",
      //   name: "tableOfContents",
    },
    {
      type: "input",
      message: colors.brightCyan(
        "Enter your table of contents labels, separated by commas."
      ),
      name: "tableOfContents",
      when: (answers) => answers.askContents,
      //   name: "tableOfContents",
    },
    {
      type: "input",
      message: colors.brightCyan(
        "What are the steps required to install your project (i.e. get the development environment running)?"
      ),
      name: "installation",
    },
    {
      type: "input",
      message: colors.brightCyan(
        "Provide instructions and examples for use. Include screenshots with relevant syntax as needed."
      ),
      name: "usage",
    },
    {
      type: "input",
      message: colors.brightCyan(
        "List any collaborators (if any) with links to their GitHub profiles, or third-party assets employed."
      ),
      name: "credits",
    },
    {
      type: "input",
      message: colors.brightCyan("Provide the license used for your project."),
      name: "license",
    },
    {
      type: "confirm",
      message: colors.brightCyan(
        "Do you want to include badges related to your project?"
      ),
      name: "askBadges",
    },
    {
      type: "input",
      message: colors.brightCyan("Enter the badges for your project."),
      name: "badges",
      when: (answers) => answers.askBadges,
    },
    {
      type: "input",
      message: colors.brightCyan("Describe the features of your project."),
      name: "features",
    },
    {
      type: "confirm",
      message: colors.brightCyan(
        "Would you like others to contribute to your project?"
      ),
      name: "askContribute",
    },
    {
      type: "input",
      message: colors.brightCyan(
        "Explain how others can contribute to your project."
      ),
      name: "howToContribute",
      when: (answers) => answers.askContribute,
    },
    {
      type: "confirm",
      message: colors.brightCyan(
        "Would you like include tests for your project?"
      ),
      name: "askTests",
    },
    {
      type: "input",
      message: colors.brightCyan(
        "Describe the tests users can do with your project."
      ),
      name: "tests",
      when: (answers) => answers.askTests
    },
];

inquirer
  .prompt([

  ])
  .then((response) => {
    const projectTitle = response.projectTitle;
    // description
    // Table of Contents (make an option)
    // Installation
    // Usage; add choice to add project preview image
    // credits
    // Badges (make an option)
    // features
    // How to Contribute (make an option)
    // Tests (make an option)

    fs.writeFile("log.txt", JSON.stringify(response, null, "\t"), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
