/*
// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "editor",
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    type: "editor",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "editor",
    name: "usage",
    message: "How do you use this application?",
  },
  {
    type: "editor",
    name: "tests",
    message: "What are the test instructions?",
  },
  {
    type: "editor",
    name: "contribution",
    message: "How can others contribute to this project?",
  },
  {
    type: "list",
    name: "license",
    message:
      "Choose a license for your project (Use up/down arrow keys, Enter to select):",
    choices: [
      new inquirer.Separator(
        " --------------------- List loop back --------------------- "
      ),
      new inquirer.Separator(" = Permissive Licenses = "),
      "MIT",
      "Apache 2.0",
      "ISC",
      new inquirer.Separator(" = Copyleft Licenses = "),
      "GPL 3.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      new inquirer.Separator(" = Public Domain and Other = "),
      "BSD 2-Clause",
      "BSD 3-Clause",
      "Unlicense",
      "None",
    ],
  },
  {
    type: "editor",
    name: "credits",
    message: "Who should be credited for this project?",
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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md successfully generated!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate README content based on user input
    const markdownContent = generateMarkdown(answers);
    // Write README file
    writeToFile("README.md", markdownContent);
  });
}

// Function call to initialize app
init();
*/





// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter a title for your project.";
    },
  },
  {
    type: "editor",
    name: "description",
    message: "Please provide a description of your project:",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please provide a description.";
    },
  },
  {
    type: "editor",
    name: "installation",
    message: "What are the installation instructions?",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please provide installation instructions.";
    },
  },
  {
    type: "editor",
    name: "usage",
    message: "How do you use this application?",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please provide usage instructions.";
    },
  },
  {
    type: "editor",
    name: "tests",
    message: "What are the test instructions?",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please provide test instructions.";
    },
  },
  {
    type: "editor",
    name: "contribution",
    message: "How can others contribute to this project?",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please provide contribution guidelines.";
    },
  },
  {
    type: "editor",
    name: "credits",
    message: "Who should be credited for this project?",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please provide credits information.";
    },
  },
  {
    type: "list",
    name: "license",
    message:
      "Choose a license for your project (Use up/down arrow keys, Enter to select):",
    choices: [
      new inquirer.Separator(
        " --------------------- List loop back --------------------- "
      ),
      new inquirer.Separator(" = Permissive Licenses = "),
      "MIT",
      "Apache 2.0",
      "ISC",
      new inquirer.Separator(" = Copyleft Licenses = "),
      "GPL 3.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      new inquirer.Separator(" = Public Domain and Other = "),
      "BSD 2-Clause",
      "BSD 3-Clause",
      "Unlicense",
      "None",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter your GitHub username.";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: function (value) {
      // Basic check for non-empty email
      if (value.trim() !== "") {
        // Regex for a basic email format validation
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return true;
        }
        return "Please enter a valid email address.";
      }
      return "Please enter your email address.";
    },
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md successfully generated!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Validate inputs
    const errors = [];

    // Check each answer for validation
    if (!answers.title.trim()) {
      errors.push("Please provide a title for your project.");
    }
    if (!answers.description.trim()) {
      errors.push("Please provide a description of your project.");
    }
    if (!answers.installation.trim()) {
      errors.push("Please provide installation instructions.");
    }
    if (!answers.usage.trim()) {
      errors.push("Please provide usage instructions.");
    }
    if (!answers.tests.trim()) {
      errors.push("Please provide test instructions.");
    }
    if (!answers.contribution.trim()) {
      errors.push("Please provide contribution guidelines.");
    }
    if (!answers.credits.trim()) {
      errors.push("Please provide credits information.");
    }
    if (!answers.github.trim()) {
      errors.push("Please provide your GitHub username.");
    }
    if (!answers.email.trim() || !isValidEmail(answers.email.trim())) {
      errors.push("Please provide a valid email address.");
    }

    // If there are errors, display them and return
    if (errors.length > 0) {
      console.error("Please provide valid inputs:");
      errors.forEach((error) => console.error(`- ${error}`));
      return;
    }

    // Generate README content based on user input
    const markdownContent = generateMarkdown(answers);
    // Write README file
    writeToFile("README.md", markdownContent);
  });
}

// Function to validate email format
function isValidEmail(email) {
  // Basic regex pattern for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function call to initialize app
init();
