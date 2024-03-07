// Dependancies and imports
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Main function that runs the app
async function generateSVG() {
    // questions for the user saved to answers
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            // validates for no more than 3 characters
            validate: value => value.length <= 3 || 'Please enter up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color or hexidecimal:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            // Choice of shape
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color or hexidecimal:'
        }
    ]);

    // Destructuring
    const { text, textColor, shape, shapeColor } = answers;

    const shapeClasses = {
        circle: Circle,
        square: Square,
        triangle: Triangle
    };

    // how shape is used to select the new shape to create
    const ShapeClass = shapeClasses[shape];

    if(!ShapeClass) {
        console.log('Invalid shape choice')
        return;
    }

    // passes in the rest of the arguments to create the new shape for the logo
    const newShapeClass = new ShapeClass(shapeColor, text, textColor);

    // markup for the new file. Uses `\n` with spaces to better format new file.
    const svgMarkup = `<svg width='300' height='200'>\n  ${newShapeClass.createShape()}\n</svg>`;

    // Writes file to examples folder. Then logs 'Generated logo.svg'.
    fs.writeFileSync('./examples/logo.svg', svgMarkup);
    console.log('Generated logo.svg');
}

// Runs main function
generateSVG();