# professional-README-generator-node-command-line

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
![Last Commit to Current Repo](https://img.shields.io/github/last-commit/TheInfamousGrim/professional-README-generator-node-command-line)
![Commits a month](https://img.shields.io/github/commit-activity/m/TheInfamousGrim/professional-README-generator-node-command-line)

A README.md generator that is used via the command line to help rapidly construct quality README files

## Table of Contents 📃

1. [Description](#description)
2. [Screenshot](#screenshot)
3. [Usage](#usage)
4. [Technology](#technology)
5. [Features](#features)
6. [Credits](#credits)
7. [License](#license)
8. [Contribution Guidelines](#contribution-guidelines)
9. [Feedback](#feedback)

## Description

The purpose of this CLI application is to help a developer to quickly generate a README.md template that they can then update at a later date manually.

Rather than having a dev simply copy and paste a template over from a saved template they might have on github, they can install this application to their local repository.

They then run the application, fill in some prompts and hesto presto the README template is there ready to be edited.

### User Story 👤

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

### What did I Learn 🏫

One of the lessons I took away from this project was the importance of splitting up helper functions into utilities, exporting these functions and importing them into js files that I need them in.

I was already familiar with using npm to install packages and had used node before to run javascript files before.

Other things I learned:

- Developed my understanding of how to use asynchronous functions in JavaScript
- Became more familiar working with the GitHub API
- Deepened my knowledge on how to use badges for GitHub README files

## Installation

In order to generate your own README.md, and simplify your life, follow these steps.

1. Ensure that you have node installed

   - [Download Node](https://nodejs.org/en/download/)

   - For detailed instructions on installing node please follow [this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for instructions

1. Clone this repository into your local repository.

   - `git clone git@github.com:TheInfamousGrim/professional-README-generator-node-command-line.git`.

1. Initialize an npm package by running:

   - `npm init`

1. Install the dependencies to your package.json
   - `npm i axios inquirer`

After following these steps you're all set and ready to generate a plethora of README files from the CLI.

Feel free to write any npm scripts to automate the steps even further.

## Usage

For a video of how to use the application please follow [this link](https://www.youtube.com/watch?v=75thtqfJ6Sc&t=23s)

Written instructions:

1. Initialize a remote repository on GitHub (So that you can link to the remote repository)
2. run the application with `node index.js`
3. Follow the prompts and make sure to input information correctly
4. After choosing the license the README is generated for you 🙌

## Technology

The technology used for the development of this app was:

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)

[![Node.js](https://img.shields.io/badge/node.js-43853d?style=for-the-badge&logo=node.js&logocolor=white)](https://nodejs.org/en/)

packages:

- [axios](https://www.npmjs.com/package/axios)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Features

- Use prompts in the command line to generate a readme section
- Email is validated using a RegEx
- GitHub username is validated using a RegEx
- Interacts with GitHub API to programmatically generate badges

## Credits

🙏 Made with the help of:

- [University of Birmingham Coding Bootcamp](https://www.birmingham.ac.uk/postgraduate/courses/cpd/coding-boot-camp.aspx)

## License

![License: MIT](https://img.shields.io/github/license/TheInfamousGrim/professional-README-generator-node-command-line?color=yellow)

[MIT License](/LICENSE)

## Contribution Guidelines

I'm open to have anyone jump in and contribute just message me on [twitter](https://twitter.com/VaporWhy)

[Guidelines for contributing](/code_of_conduct.md)

## Feedback

![Ask Me Anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:finchergeorge1@gmail.com)

<img src="https://avatars.githubusercontent.com/u/89855075?v=4" alt="TheInfamousGrim">

Any feedback please email [George Fincher](mailto:finchergeorge1@gmail.com)

GitHub: [TheInfamousGrim](https://api.github.com/users/TheInfamousGrim)

Twitter: [GrimFunk](https://twitter.com/VaporWhy)
