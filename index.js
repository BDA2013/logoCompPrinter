const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./lib/shapes.js');

const userInput = [
    {
        type: 'input',
        message: 'What three characters you want on your logo?',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'What color do you want for the text?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape is your logo',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: 'What color do you want for your shape?',
        name: 'shapeColor'
    }
];

function writeToFile(fileName, data) {
    fs.appendFile(fileName, generateLogo(data), (error) =>
  error ? console.error(error) : console.log("Success!")
)};

function init() {
    inquirer.prompt(
        userInput
        )
        .then((data) => 
        writeToFile('./examples/logo.svg', data));
}

init()