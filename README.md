# Node.js: Professional README Generator

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

Creating a high-quality, professional README for an open-source project on GitHub is crucial for attracting contributions from other developers. This `Node.js` command-line application uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to generate a dynamic `README.md` file based on user input, allowing project creators to focus more on their projects.

The generated README follows the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) and includes comprehensive details about the app's purpose, usage, installation, issue reporting, and contribution guidelines.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contribution](#contribution)
- [Credits](#credits)
- [Deliverables](#deliverables)
- [Questions](#questions)
- [License](#license)

## Installation

### Prerequisites

- **Node.js and npm (or yarn):** Ensure Node.js and npm (or yarn) are installed on your system. Verify by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.

### Get the Code

- Clone or download the [repository](https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator) containing the README generator code to your local machine.

### Install Dependencies

- Navigate to the project directory in your terminal.
- Run `npm install` (or `yarn install`) to install required dependencies, including Inquirer:

  ```bash
  npm install inquirer

[Back to Table of Contents](#table-of-contents)

## Usage

### Run the Application

- Execute `node index.js` in your terminal to start the README generator.

### Answer the Prompts

- The application prompts for project details such as title, description, installation instructions, usage, contributing guidelines, test instructions, license, GitHub username, and email address.
- For multi-line inputs (e.g., description, installation, usage, contributing), a text editor opens for input. Save the file to continue.

### Using Vim in VS Code Integrated Terminal

- **Insert Mode:** When Vim opens, you're in insert mode if `-- INSERT --` is shown. Paste or type your content.
- **Exit Insert Mode:** Press `Esc` to exit insert mode (the `-- INSERT --` message disappears).
- **Save and Exit Vim:** Type `:wq` and press `Enter` to save and quit Vim. To exit without saving, type `:q!` and press `Enter`.
- **Return to `inquirer`:** After saving and exiting Vim, return to the integrated terminal, where `inquirer` captures your input.

### Setting VS Code as Default Editor (Optional)

- Add this line to your shell config file (e.g., `~/.zshrc` for Zsh or `~/.bash_profile` for Bash):

  ```sh
  export EDITOR="code --wait"
  ```

- Reload Your Shell Configuration:

  ```sh
  source ~/.zshrc  # for Zsh
  source ~/.bash_profile  # for Bash
  ```

### Running `inquirer` with VS Code as Default Editor

- **Run Your Node.js Script:**

  ```sh
  node index.js
  ```

- **Enter and Edit Multi-line Input in VS Code:** VS Code opens for multi-line input. Paste or type content, save the file (`Cmd + S` on Mac or `Ctrl + S` on Windows/Linux), and close the editor (`Cmd + W` on Mac or `Ctrl + W` on Windows/Linux).
- **Return to Terminal:** Control returns to the terminal, and `inquirer` captures input.

[Back to Table of Contents](#table-of-contents)

## Tests

### Prerequisites

- Ensure Node.js and npm (or yarn) are installed. Verify with `node -v` and `npm -v` (or `yarn -v`) in your terminal.

### Get the Code

- Clone or download the [repository](https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator) containing the README generator code to your local machine.

### Install Dependencies

- Navigate to the project directory in your terminal.
- Run `npm install` (or `yarn install`) to install required dependencies, including Inquirer.

### Run the Application

- Execute `node index.js` in your terminal to start the README generator.

### Answer the Prompts

- Provide necessary project details as prompted.

### Verify the README

- After answering prompts, a `README.md` file is created in the project's root directory.
- Open `README.md` in a text editor or Markdown viewer to review the generated content.
- Verify links and table of contents for correctness.

### Additional Testing Tips

- **Different Scenarios:** Test with various input combinations, including different licenses and optional test instructions.
- **Edge Cases:** Test with very short or long answers to check formatting consistency.
- **Error Handling:** Provide invalid input (e.g., an empty title) to validate error messages.

### If You Encounter Issues

- Verify Node.js and npm/yarn versions.
- Ensure dependencies are installed correctly.
- Check terminal for error messages for troubleshooting.

[Back to Table of Contents](#table-of-contents)

## Contribution

We welcome contributions from the community! Here's how you can get involved:

### 1. Fork the Repository

Fork the repository to your GitHub account to create a personal copy.

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```sh
git clone https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator
cd 09-Node-js-Professional-README-Generator
```

### 3. Create a Branch

Create a new branch for your changes with a descriptive name:

```sh
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

Make necessary changes, following project coding standards and best practices.

### 5. Commit Your Changes

Commit changes with a clear, concise message:

```sh
git add .
git commit -m "Add feature/fix description"
```

### 6. Push Your Changes

Push changes to your forked repository:

```sh
git push origin feature/your-feature-name
```

### 7. Open a Pull Request

Go to the original repository on GitHub, open a pull request, and explain your changes:

1. Navigate to the [original repository](https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator).
2. Click "Pull requests."
3. Click "New pull request."
4. Select your branch from the "Compare" dropdown.
5. Click "Create pull request."

### 8. Participate in Code Review

Respond to feedback and questions from maintainers. Make additional changes as needed.

### 9. Wait for Approval and Merge

Once approved, your pull request will be merged into the main branch.

### Contribution Guidelines

- **Code of Conduct:** Follow the [GitHub Community Code of Conduct](https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct).
- **Style Guide:** Adhere to [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
- **Testing:** Write and execute tests for changes, including unit tests where appropriate.
- **Documentation:** Update documentation to reflect changes made.

Thank you for contributing!

[Back to Table of Contents](#table-of-contents)

## Credits

This project was made possible with the help of [ChatGPT](https://chatgpt.com/).

[Back to Table of Contents](#table-of-contents)

## Deliverables

1. [Sample README](./Develop/README.md) generated using the application.
2. [GitHub repository](https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator) containing your application code.
3. [Walkthrough video](#link-to-video) demonstrates the functionality of the README generator:
	- How a user would invoke the application from the command line.
	- How a user would enter responses to all of the prompts in the application.
	- Demonstrate a generated README that matches the user input and has a functioning table of contents.

[Back to Table of Contents](#table-of-contents)

## Questions

If you have any questions, feel free to reach out to me:

GitHub: [ngojohn2002](https://github.com/ngojohn2002)

Email: ngojohn2002@yahoo.com

[Back to Table of Contents](#table-of-contents)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

[Back to Table of Contents](#table-of-contents)

---

Copyright &copy; 2024 - All Rights Reserved.