// Function returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  }

  // Manually provide badge URLs for BSD licenses
  if (license === "BSD 2-Clause") {
    return "![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)";
  }
  if (license === "BSD 3-Clause") {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  }

  // For other licenses, use the standardized badge URL format
  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(
    license
  )}-blue.svg)`;
}

// Function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
        "MIT": "https://opensource.org/licenses/MIT",
        "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
        "ISC": "https://opensource.org/licenses/ISC",
        "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0.html",
        "GNU AGPLv3": "https://www.gnu.org/licenses/agpl-3.0.html",
        "GNU GPLv3": "https://www.gnu.org/licenses/gpl-3.0.html",
        "GNU LGPLv3": "https://www.gnu.org/licenses/lgpl-3.0.html",
        "BSD 2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
        "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
        "Unlicense": "https://unlicense.org/",
        "None": ""
    };

    return licenseLinks[license] || "";
}

// Function returns the license section of README
function renderLicenseSection(license) {
    // If there is no license, display as such
    if (license === "None") {
        return "This project is not licensed.";
    }

    const licenseLink = renderLicenseLink(license);

    return `This project is licensed under the [${license}](${licenseLink}) license.`;
}

// Function to generate README.md content
  function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contribution](#contribution)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

[Back to Table of Contents](#table-of-contents)

## Usage

${data.usage}

[Back to Table of Contents](#table-of-contents)

## Tests

${data.tests}

[Back to Table of Contents](#table-of-contents)

## Contribution

${data.contribution}

[Back to Table of Contents](#table-of-contents)

## Credits

${data.credits}

[Back to Table of Contents](#table-of-contents)

## Questions

If you have any questions, feel free to reach out to me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}

[Back to Table of Contents](#table-of-contents)

## License

${renderLicenseSection(data.license)}

[Back to Table of Contents](#table-of-contents)

---

Copyright &copy; ${new Date().getFullYear()} - All Rights Reserved.`;
}

module.exports = generateMarkdown;
