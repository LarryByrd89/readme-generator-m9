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
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Demo](#demo)
- [How to Contribute](#how-to-contribute)
- [References](#references)

## Installation
To run this project, follow these steps:

1. Clone this repository to your local machine:
   \`\`\`
   git clone ${data.repoURL}
   \`\`\`

2. Navigate to the project's directory:
   \`\`\`
   cd ${data.directory}
   \`\`\`

3. Install the required dependencies in package.json terminal:
   \`\`\`
   npm install
   \`\`\`

4. Start the application by directing to index.js terminal:
   \`\`\`
   node index.js
   \`\`\`

## Usage
This section should help users understand how to interact with your project, what it does, and how they can benefit from it.
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

For more details, see the [${data.license} License](${renderLicenseLink(data.license)}).

## Features

- Add a feature here // You can list your project's features as bullet points

## Demo

You can view a demo of the project here:

### Live Page

You can see a demo of this project by [clicking here](https://www.example.com/demo).

### Video

[![Project Video](https://img.youtube.com/vi/YOUR_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE)

### Heroku

You can access the live project on Heroku by [clicking here](https://your-heroku-app-url.herokuapp.com/).

### Screenshots

![Screenshot 1](assets/images/screenshot1.png)
![Screenshot 2](assets/images/screenshot2.png)

## How to Contribute
If you'd like to contribute to this project, please follow these guidelines:

1. Fork the project on GitHub.
2. Clone the project to your local machine.
3. Create a new branch.
4. Make your changes, commit them, and push them to your forked repository.
5. Create a pull request on the original repository, describing your changes and providing any necessary context.

If you have any questions or suggestions, you can reach out to me at ${data.email}.

## References
Please add any references or citations related to your project in this section. If you have online references, you can include them as links using the following format:

- [Reference Name 1](https://www.example.com/reference1)
- [Reference Name 2](https://www.example.com/reference2)

`;
}

module.exports = generateMarkdown;
