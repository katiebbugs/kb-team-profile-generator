// node modules
const inquirer = require('inquirer');
const fs = require('fs');

// pages
const createPage = require('./src/create-page.js')

// arrays
const employees = [];
const questions = [
    {
        type: 'list',
        name: 'role',
        message:
            () => {
                if (employees.some(employee => employee.role === 'Manager')) {
                    return 'What will be this employee\'s role?'    
                } else {
                    return 'Let\'s start with the team manager?'
                }
            },
        choices: // function to allow only one manager to be created
            () => {
            if (employees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager']
            }
        }
    },
    {
        type: 'input',
        name: 'firstName',
        message: `What is their first name?`
    },
    {
        type: 'input',
        name: 'lastName',
        message: `What is their last name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is their employee ID number?`
    },
    {
        type: 'input',
        name: 'office',
        message: `What is their office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `What is their GitHub username? (required)`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `What school do they go to?`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
]

// prompts
const promptUser = () => {

    return inquirer.prompt(questions)
    .then(userResponse => {
        employees.push(userResponse);

        if (userResponse.addEmployee) {
            return promptUser();
        } else {
            return employees;
        };
    });
};

// create team profile page
const writePage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Your team profile page has been created! Check it out in the dist folder!');
    });
};

// welcome message
console.log(`
===========================
Let's build a team profile!
===========================
`);

// run functions
promptUser()
    .then(data => createPage(data))
    .then(generatedHtml => writePage(generatedHtml))
    .catch(err => console.log(err));
