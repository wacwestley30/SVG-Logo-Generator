class Shape {
    constructor(color) {
        this.color = color;
    }

    createShape() {
        throw new Error('createShape method must be used on shape class')
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    createShape() {
        return `<circle cx='150' cy='100' r='50' fill='${this.color} />`
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    createShape() {
        return `<rect x='100' y='50' width='100' height='100' fill='${this.color} />`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    createShape() {
        return `<polygon points='150,50 100,150 200,150 fill='${this.color} />`
    }
}

module.exports = { Circle, Square, Triangle };