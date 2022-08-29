// External packages
import inquirer from 'inquirer';

import fs from 'fs';

import util from 'util';

// internal modules
import { getGitHubUserInfo } from './utils/githubApi.js';

import { getLicense } from './utils/generateLicense.js';

import { generateMarkdown } from './utils/generateMarkdown.js';

// Inquirer prompts for the responses from the user
inquirer
    .prompt([
        {
            name: 'greeting',
            message: 'What would you like to say?',
            type: 'input',
        },
    ])
    .then((answer) => {
        console.log(answer);
    });

// get currentYear for the license file
// const todaysDate = new Date();
// const currentYear = todaysDate.getFullYear();
// console.log(currentYear);
