function generateMarkdown(userResponses, gitHubAvatar) {
    const draftMarkdown = `
    # ${userResponses.title}
    
    ![Last Commit to Current Repo](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo})
    
    ${userResponses.about}
    
    ## Table of Contents 📃
    
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Technology](#technology)
    5. [Features](#features)
    6. [Credits](#credits)
    7. [License](#license)
    8. [Feedback](#feedback-and-contribution)
    
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
    
    ## Credits
    
    🙏 Made with the help of:
    
    ${userResponses.credits}
    
    ## License
    
    ![${userResponses.license}](https://img.shields.io/github/license/${userResponses.username}/${userResponses.repo}?color=yellow)
    
    [${userResponses.license}](/LICENSE.md)
    
    ## Feedback and Contribution
    
    ![Ask Me Anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
    
    <img src="${gitHubAvatar}" alt="${userResponses.username}">
    
    Any feedback please feel free to get in contact
    `;

    return draftMarkdown;
}

export { generateMarkdown };
