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

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        if(!color || !text || !textColor) {
            throw new Error('Missing argument for generating new Circle')
        }
    }

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

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        if(!color || !text || !textColor) {
            throw new Error('Missing argument for generating new Square')
        }
    }

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

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        if(!color || !text || !textColor) {
            throw new Error('Missing argument for generating new Triangle')
        }
    }

    createShape() {
        const points = '150,25 250,175 50,175';
        const triangle = `<polygon points='${points}' fill='${this.color}' />\n`
        const text = `  <text x='150' y='150' text-anchor='middle' fill='${this.textColor}' font-size='60'>${this.text}</text>`
        return triangle + text;
    }
}

module.exports = { Circle, Square, Triangle };