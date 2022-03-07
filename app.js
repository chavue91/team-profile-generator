const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template');
const pageHTML = generatePage();

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Team generated! Check out index.html to see output!')
});