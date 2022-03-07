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

const promptEngineer = teamData => {
    // If there's no 'Employee' array property, create one
    if (!teamData.employee) {
        teamData.employee = [];
    }
    console.log(`
    ==================
    Add a New Engineer
    ==================
    `);
        return inquirer.prompt([
            // {
            //     type: 'list',
            //     name: 'employeePosition',
            //     message: 'Would you like to add an Engineer or Intern to your team?',
            //     choices: ['Engineer', 'Intern', 'Finish building my team'],
            //     default: 'Finish building my team'
            // },
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
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another project?',
                default: false
            }
        ])
        .then(employeeData => {
            teamData.employee.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptEngineer(teamData);
            } else {
                return teamData;
            }
        });

}
const promptIntern = internData => {
    // If there's no 'Intern' array property, create one
    if (!internData.person) {
        internData.person = [];
    }
    console.log(`
    ================
    Add a New Intern
    ================
    `);
        return inquirer.prompt([
            // {
            //     type: 'list',
            //     name: 'employeePosition',
            //     message: 'Would you like to add an Engineer or Intern to your team?',
            //     choices: ['Engineer', 'Intern', 'Finish building my team'],
            //     default: 'Finish building my team'
            // },
            {
                type: 'input',
                name: 'internName',
                message: 'What is the intern name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the intern!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the intern ID?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the ID of the intern!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the intern email?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the email of the intern');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the intern school?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the school of the intern');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddIntern',
                message: 'Would you like to enter another project?',
                default: false
            }
        ])
        .then(personData => {
            internData.person.push(personData);
            if (personData.confirmAddIntern) {
                return promptIntern(internData);
            } else {
                return internData;
            }
        });

}


promptUser()

    .then(promptEngineer)
    .then(promptIntern)
    
    .then(teamData => {
        console.log(teamData);
        // const pageHTML = generatePage(engData);
        // fs.writeFile('./index.html', pageHTML, err => {
        //   if (err) throw new Error(err);
        //   console.log('Page created! Check out index.html in this directory to see it!');
        // });
    })
    .then(internData => {
        console.log(internData);
        // const pageHTML = generatePage(engData);
        // fs.writeFile('./index.html', pageHTML, err => {
        //   if (err) throw new Error(err);
        //   console.log('Page created! Check out index.html in this directory to see it!');
        // });
    })
    