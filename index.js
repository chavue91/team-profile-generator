const inquirer = require('inquirer');
const fs = require('fs');

// const generatePage = require('./src/page-template');
// const pageHTML = generatePage();

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Team generated! Check out index.html to see output!')
// });



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the manager email.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the manager office number.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager office number!');
                    return false;
                }
            }
        }
        
    ]);
};

const promptEmployee = teamData => {
    // If there's no 'Employee' array property, create one
    if (!teamData.employee) {
        teamData.employee = [];
    }
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);
        return inquirer.prompt([
            {
                type: 'list',
                name: 'employeePosition',
                message: 'Would you like to add an Engineer or Intern to your team?',
                choices: ['Engineer', 'Intern', 'Finish building my team'],
                default: 'Finish building my team'
            },
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the Engineer!');
                        return false;
                    }
                },
                when: ({ confirmEmployee }) => {
                    if (confirmEmployee) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the Engineer ID?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the ID of the Engineer?');
                        return false;
                    }
                },
                when: ({ confirmEngineer }) => {
                    if (confirmEngineer) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the Engineer email?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the email of the Engineer');
                        return false;
                    }
                },
                when: ({ confirmEngineer }) => {
                    if (confirmEngineer) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the Engineer github username?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the github username of the Engineer');
                        return false;
                    }
                },
                when: ({ confirmEngineer }) => {
                    if (confirmEngineer) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(employeeData => {
            teamData.employee.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptEmployee(teamData);
            } else {
                return teamData;
            }
        });

}


promptUser()
    .then(promptEmployee)
    .then(teamData => {
        console.log(teamData);
        // const pageHTML = generatePage(engData);
        // fs.writeFile('./index.html', pageHTML, err => {
        //   if (err) throw new Error(err);
        //   console.log('Page created! Check out index.html in this directory to see it!');
        // });
    });