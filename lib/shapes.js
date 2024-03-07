// Parent class
class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    createShape() {
        throw new Error('createShape method must be used on shape class')
    }
}

// Circle class based on Shape with error handling
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        if(!color || !text || !textColor) {
            throw new Error('Missing argument for generating new Circle')
        }
    }

    // Poly method to better customize and edit logo as needed
    createShape() {
        const cx = 150;
        const cy = 100;
        const ty = 105;
        const r = 80;
        const circle = `<circle cx='${cx}' cy='${cy}' r='${r}' fill='${this.color}' />\n`;
        const text = `  <text x='${cx}' y='${ty}' text-anchor='middle' alignment-baseline='middle' fill='${this.textColor}' font-size='60'>${this.text}</text>`;
        return circle + text;
    }
}

// Square class based on Shape with error handling
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        if(!color || !text || !textColor) {
            throw new Error('Missing argument for generating new Square')
        }
    }

    // Poly method to better customize and edit logo as needed
    createShape() {
        const x = 50;
        const y = 0;
        const width = 200;
        const height = 200;
        const square = `<rect x='${x}' y='${y}' width='${width}' height='${height}' fill='${this.color}' />\n`;
        const text = `  <text x='150' y='115' text-anchor='middle' fill='${this.textColor}' font-size='60'>${this.text}</text>`
        return square + text;
    }
}

// Triangle class based on Shape with error handling
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        if(!color || !text || !textColor) {
            throw new Error('Missing argument for generating new Triangle')
        }
    }

    // Poly method to better customize and edit logo as needed
    createShape() {
        const points = '150,25 250,175 50,175';
        const triangle = `<polygon points='${points}' fill='${this.color}' />\n`
        const text = `  <text x='150' y='150' text-anchor='middle' fill='${this.textColor}' font-size='60'>${this.text}</text>`
        return triangle + text;
    }
}

// Exports for both index.js and shapes.test.js
module.exports = { Circle, Square, Triangle };