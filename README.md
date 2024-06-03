# 09-Node-js-Professional-README-Generator

## Description

When creating an open source project on GitHub, it’s important to include a high-quality, professional README to increase the likelihood that other developers will contribute to the success of the project. 

This `Node.js` command-line application will quickly and easily generate a dynamic `README.md` file  based on the user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to allow the project creator more time working on the project.

It follows the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) to include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

From your terminal, install the inquirer package if you haven't already:

```bash
npm install inquirer
```

[<p align="right">Back to Table of Contents</p>](#table-of-contents)

## Usage

The application will be invoked by using the following command:

```bash
node index.js
```

The `-- INSERT --` message indicates that you are in insert mode in Vim, which is often the default editor in terminal environments if not otherwise configured. To handle multi-paragraph input and exit back to `inquirer` correctly, you need to know how to save and exit Vim properly.

Here’s a step-by-step guide for this process:

### Using Vim in VS Code Integrated Terminal

1. **Start the `inquirer` Prompt:**

   Run your Node.js script using the `inquirer` `editor` prompt:

   ```sh
   node index.js
   ```

2. **Enter Your Multi-line Input in Vim:**

   When Vim opens, you’ll be in insert mode if you see `-- INSERT --` at the bottom.

   - Paste or type your multi-paragraph content.

3. **Exit Insert Mode:**

   - Press `Esc` to exit insert mode. The `-- INSERT --` message will disappear.

4. **Save and Exit Vim:**

   - Type `:wq` and press `Enter` to save and quit Vim. 
   - If you want to exit without saving, type `:q!` and press `Enter`.

5. **Return to `inquirer`:**

   After saving and exiting Vim, you will return to the integrated terminal, and `inquirer` will capture the input you provided.

### Setting VS Code as Default Editor (Optional)

If you prefer to use VS Code as the default editor for multi-line input instead of Vim, you can set it up by configuring the `EDITOR` environment variable.

1. **Set VS Code as Default Editor:**

   Add the following line to your shell configuration file (e.g., `~/.zshrc` for Zsh or `~/.bash_profile` for Bash):

   ```sh
   export EDITOR="code --wait"
   ```

2. **Reload Your Shell Configuration:**

   - For Zsh: `source ~/.zshrc`
   - For Bash: `source ~/.bash_profile`

### Running `inquirer` with VS Code as Default Editor

After setting VS Code as the default editor:

1. **Run Your Node.js Script:**

   ```sh
   node index.js
   ```

2. **Enter and Edit Multi-line Input in VS Code:**

   - VS Code will open for multi-line input.
   - Paste or type your content, save the file (`Cmd + S` on Mac or `Ctrl + S` on Windows/Linux), and close the editor (`Cmd + W` on Mac or `Ctrl + W` on Windows/Linux).

3. **Return to the Terminal:**

   - Control will return to the terminal, and `inquirer` will capture the input.

By following these steps, you can efficiently manage multi-paragraph input using either Vim or VS Code as your editor in the VS Code integrated terminal.

[<p align="right">Back to Table of Contents</p>](#table-of-contents)

## Contribution

We welcome contributions from the community! Here’s how you can get involved:

### 1. Fork the Repository

Start by forking the repository to your GitHub account. This creates a personal copy of the project where you can make changes.

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```sh
git clone https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator
cd 09-Node-js-Professional-README-Generator
```

### 3. Create a Branch

Create a new branch to work on your changes. Use a descriptive branch name that explains what you're working on:

```sh
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

Make the necessary changes in your local repository. Be sure to follow the project's coding standards and best practices.

### 5. Commit Your Changes

Commit your changes with a clear and concise commit message:

```sh
git add .
git commit -m "Add feature/fix description"
```

### 6. Push Your Changes

Push your changes to your forked repository:

```sh
git push origin feature/your-feature-name
```

### 7. Open a Pull Request

Go to the original repository on GitHub and open a pull request. Provide a clear title and description for your pull request, explaining what changes you made and why:

1. Navigate to the [original repository](https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator).
2. Click on the "Pull requests" tab.
3. Click the "New pull request" button.
4. Select the branch you created from the "Compare" dropdown.
5. Click "Create pull request".

### 8. Participate in the Code Review

Be responsive to feedback and questions from the maintainers. You may need to make additional changes based on the review comments.

### 9. Wait for Approval and Merge

Once your pull request is approved, it will be merged into the main branch by a maintainer.

### Contribution Guidelines

To ensure a smooth contribution process, please follow these guidelines:

- **Code of Conduct**: Adhere to our [Code of Conduct](link-to-code-of-conduct).
- **Style Guide**: Follow the project's [coding standards and style guide](link-to-style-guide).
- **Testing**: Write and run tests for your changes. Include unit tests where appropriate.
- **Documentation**: Update documentation to reflect any changes made.

Thank you for contributing!

[<p align="right">Back to Table of Contents</p>](#table-of-contents)

## Tests

Here's a more specific explanation of how users can test this README generator application:

**Testing the README Generator**

1.  **Prerequisites:**
    -   **Node.js and npm (or yarn):** Make sure you have Node.js and npm (or yarn) installed on your system. You can check by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.

2.  **Get the Code:**
    -   If you haven't already, clone or download the repository containing the README generator code to your local machine.

3.  **Install Dependencies:**
    -   Open your terminal and navigate to the project directory.
    -   Run `npm install` (or `yarn install`) to install the required dependencies (in this case, Inquirer).

4.  **Run the Application:**
    -   Execute the command `node index.js` in your terminal. This will start the README generator.

5.  **Answer the Prompts:**
    -   The application will ask you a series of questions about your project.
    -   Provide the necessary details like title, description, installation instructions, usage, contributing guidelines, test instructions, license, GitHub username, and email address.
    -   For multi-line input (description, installation, usage, contributing), a text editor will open. Enter your content and save the file to continue.

6.  **Verify the README:**
    -   Once you've answered all the prompts, a `README.md` file will be created in the project's root directory.
    -   Open the `README.md` file in a text editor or Markdown viewer (like VS Code or Typora) to see the generated content.
    -   Carefully review the README to ensure all the information you provided is accurate and well-formatted.
    -   Pay special attention to the links (license badge, GitHub profile link) and the table of contents to make sure they work correctly.

**Additional Testing Tips:**

-   **Different Scenarios:** Test the generator with various input combinations. Try different licenses, include and omit test instructions, etc., to see if the generated README adapts correctly.
-   **Edge Cases:**  Enter very short or very long answers to check if the formatting remains consistent.
-   **Error Handling:** Intentionally provide invalid input (like an empty title) to see if the validation messages work as expected.


**If you encounter any issues:**

-   Double-check your Node.js and npm/yarn versions.
-   Ensure you've installed the dependencies correctly.
-   Look for error messages in the terminal, which might indicate problems with the code or input.

Let me know if you have any other questions!

[<p align="right">Back to Table of Contents</p>](#table-of-contents)

## License

![License](https://img.shields.io/badge/License-GNU%20AGPLv3-blue.svg)

This project is licensed under the GNU AGPLv3 license.

[<p align="right">Back to Table of Contents</p>](#table-of-contents)

## Questions

If you have any questions, feel free to reach out to me:

GitHub: [ngojohn2002](https://github.com/ngojohn2002)

Email: ngojohn2002@yahoo.com

[<p align="right">Back to Table of Contents</p>](#table-of-contents)

---

Copyright &copy; 2024 - All Rights Reserved.

--------------------------------


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

1. WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

2. WHEN I enter my project title
THEN this is displayed as the title of the README

3. WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

4. WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

5. WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

6. WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

7. WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
