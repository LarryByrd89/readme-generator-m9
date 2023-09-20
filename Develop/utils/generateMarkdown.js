// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GPL 3.0") {
    return "![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license}.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run this project, follow these steps:

1. Clone this repository to your local machine.
   \`\`\`
   git clone ${data.repoURL}
   \`\`\`

2. Navigate to the project's directory.
   \`\`\`
   cd ${data.directory}
   \`\`\`

3. Install the required dependencies.
   \`\`\`
   npm install
   \`\`\`

4. Start the application.
   \`\`\`
   npm start
   \`\`\`

## Usage

${data.usage}

![Screenshot Placeholder](assets/images/screenshot.png)

## Credits

- [${data.author}](https://github.com/${data.github}) - Project Developer

Third-party assets 

## License

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

For more details, see the ${renderLicenseLink(data.license)}.

## Badges

![GitHub language count](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
![GitHub top language](https://img.shields.io/github/languages/top/${data.github}/${data.repo})

## Features



## How to Contribute

If you'd like to contribute to this project, please follow me on [GitHub](https://github.com/LarryByrd89/readme-generator-m9).

## Tests


\`\`\`
npm test
\`\`\`

\`\`\`
npm run test:coverage
\`\`\`

\`\`\`
npm run lint
\`\`\`

\`\`\`
npm run lint:fix
\`\`\`


`;
}

module.exports = generateMarkdown;
