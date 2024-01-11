// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Use a switch statement to determine the license badge URL based on the license type
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    // Add more cases for other licenses if needed
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Use a switch statement to determine the license link based on the license type
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    // Add more cases for other licenses if needed
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, email) {
  // Check if a license is provided
  if (license) {
    return `## License

This project is licensed under the ${license} - see the [LICENSE.md](${renderLicenseLink(license)}) file for details.\n`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Use the license-related functions to include license badge, link, and section
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license, data.email);

  // Generate the main README content
  return `# ${data.projectTitle}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

![${data.altText}](<insert screenshot here>)

## Credits
${data.credits}

## Tests
${data.tests}

## Questions 
${data.questions}

Please also check out my GitHub Profile if you would like:

https://github.com/${data.githubUsername}/

${licenseSection}`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
