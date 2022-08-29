function generateMarkdown(userResponses, gitHubAvatar, gitHubUserUrl, licenseSpdxID, licenseName) {
    const draftMarkdown = `
# ${userResponses.title}

![Last Commit to Current Repo](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}) ![License: ${licenseSpdxID}](https://img.shields.io/github/license/${userResponses.username}/${userResponses.repo}?color=yellow)

${userResponses.about}

## Table of Contents 📃

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technology](#technology)
5. [Features](#features)
6. [Contribution](#contribution)
7. [Tests](#tests)
8. [Credits](#credits)
9. [License](#license)
9. [Questions](#questions)

## Description

${userResponses.description}

### User Story 👤

${userResponses.userStory}

### What did I Learn 🏫

${userResponses.lessons}

## Installation

The steps to install the application are as follows:

${userResponses.installation}

## Usage

${userResponses.usage}

## Technology

Consider using badges from either [shields.io](https://shields.io/) or [Awesome Badges](https://dev.to/envoy_/150-badges-for-github-pnk#skills) to show of your tech used in a visual way 📛

The technology used for the development of this app was:

${userResponses.technology}

## Features

${userResponses.features}

## Contribution

${userResponses.contribution}

## Tests

${userResponses.tests}

## Credits

🙏 Made with the help of:

${userResponses.credits}

## License

![License: ${licenseSpdxID}](https://img.shields.io/github/license/${userResponses.username}/${userResponses.repo}?color=yellow)

[${licenseName}](/LICENSE.md)

## questions

![Ask Me Anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

<img src="${gitHubAvatar}" alt="${userResponses.username}">

GitHub: [${userResponses.username}](${gitHubUserUrl})

Any feedback please email: [${userResponses.fullName}](mailto:${userResponses.email})
`;

    return draftMarkdown;
}

export { generateMarkdown };
