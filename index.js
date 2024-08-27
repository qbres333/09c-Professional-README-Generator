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
      "Type a detailed description of your project. Separate paragraphs with double commas (,,)"
    ),
    name: "description",
  },
// We do not ask user for the TOC, we create it
//   {
//     type: "confirm",
//     message: colors.brightCyan(
//       "Would you like to include a table of contents in your README?"
//     ),
//     name: "askContents",
//   },
//   {
//     type: "input",
//     message: colors.brightCyan(
//       "Enter your table of contents labels, separated by double commas (,,)."
//     ),
//     name: "tableOfContents",
//     when: (answers) => answers.askContents === true,
//   },
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

  //   {
  //     type: "confirm",
  //     message: colors.brightCyan(
  //       "Do you want to include badges related to your project?"
  //     ),
  //     name: "askBadges",
  //   },
  //   {
  //     type: "input",
  //     message: colors.brightCyan(
  //       "Enter the badges for your project, separated by double commas (,,)"
  //     ),
  //     name: "badges",
  //     when: (answers) => answers.askBadges === true,
  //   },
  {
    type: "input",
    message: colors.brightCyan("Describe the features of your project."),
    name: "features",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "Explain how others can contribute to your project."
    ),
    name: "contributing",
  },
  {
    type: "input",
    message: colors.brightCyan(
      "Describe the tests users can do with your project. Separate tests by double commas (,,) if needed."
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
      "ISC",
      "MIT",
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

// from class activities
// inquirer
//   .prompt([//array of questions
//   ])
//   .then((response) => {
//     // code

//     fs.writeFile("log.txt", JSON.stringify(response, null, "\t"), (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("Success!");
//       }
//     });
//   });



// TODO: Create a function to write README file
function writeReadme() {
  inquirer.prompt(questions)
  .then((response) => {
    // store responses in an object, then retrieve values later in strings
    const readmeData = {
      projectTitle: response.projectTitle,
      description: response.description.replace(/,,/g, "<br><br>"),
      askContents: response.askContents,
      /*If there's a TOC, replace commas with line breaks and include other markdown syntax
        in the string (down below the object)*/
      tableOfContents: response.tableOfContents
        ? response.tableOfContents.replace(/,,/g, "<br>") //do this in string
        : "",
      installation: response.installation,
      usage: response.usage,
      credits: response.credits,
      license: response.license,
      askBadges: response.askBadges,
      badges: response.badges ? response.badges.replace(/,,/g, "<br>") : "",
      features: response.features,
      askContribute: response.askContribute,
      howToContribute: response.howToContribute ? response.howToContribute : "",
      askTests: response.askTests,
      tests: response.tests ? response.tests.replace(/,,/g, "<br><br>") : "",
    };
    // using <br><br> instead of double trailing spaces; test output
    // build README conditionally
    let inputString = `#${readmeData.projectTitle}<br><br>
    ##Description<br><br>${readmeData.description}<br><br>`;

    // if table of contents exists, add it to the README
    if (readmeData.tableOfContents != "") {
        // response.tableOfContents.replace(/,,/g, "<br>");
        const contentsArray = response.tableOfContents.split(",,");
        for(const contentsLabel of contentsArray) {
            return `- ${contentsLabel} (#)`
        }

        inputString += `##Table of Contents<br><br>${readmeData.tableOfContents}<br><br>`;
    }

    // add other required elements of the README
    inputString += `##Installation<br><br>${readmeData.installation}<br><br>
    ##Usage<br><br>${readmeData.usage}<br><br>
    ##Credits<br><br>${readmeData.credits}<br><br>
    ##License<br><br>${readmeData.license}<br><br>
    `;

    // if badges exist, add to the README
    if (readmeData.badges != "") {
        inputString += `##Badges<br><br>${readmeData.badges}<br><br>`;
    }
    //add features to the README
    inputString += `##Features<br><br>${readmeData.features}<br><br>`

    // if the user wants contributors, add to the README
    if (readmeData.howToContribute != "") {
        inputString += `##How To Contribute<br><br>${readmeData.howToContribute}<br><br>`
    }
    // if user included tests, add to the README
    if (readmeData.tests != "") {
        inputString += `##Tests<br><br>${readmeData.tests}<br><br>`;
    }

    fs.writeFile("proREADME.md", inputString, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Success!");
    }
    });

  });
}

// TODO: Create a function to initialize app
function init() {
    writeReadme();
}

// Function call to initialize app
init();


