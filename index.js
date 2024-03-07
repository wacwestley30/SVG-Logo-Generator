const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

async function generateSVG() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
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
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color or hexidecimal:'
        }
    ]);

    const { text, textColor, shape, shapeColor } = answers;

    const shapeClasses = {
        circle: Circle,
        square: Square,
        triangle: Triangle
    };

    const ShapeClass = shapeClasses[shape];

    if(!ShapeClass) {
        console.log('Invalid shape choice')
        return;
    }

    const newShapeClass = new ShapeClass(shapeColor, text, textColor);

    const svgMarkup = `<svg width='300' height='200'>\n  ${newShapeClass.createShape()}\n</svg>`;

    fs.writeFileSync('./examples/logo.svg', svgMarkup);
    console.log('Generated logo.svg');
}

generateSVG();