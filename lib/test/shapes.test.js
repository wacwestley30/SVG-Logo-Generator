const { Circle, Square, Triangle } = require('../shapes');

describe('Shape Classes', () => {
    test('Missing argument when generating a new Shape Class', () => {
        expect(() => new Circle()).toThrow();
        expect(() => new Square()).toThrow();
        expect(() => new Triangle()).toThrow();
    })
})

describe('Circle', () => {
    test('Generates Circle with correct attributes', () => {
        const circle = new Circle('red', 'ABC', 'white');
        const newCircleSVG = circle.createShape();

        expect(newCircleSVG).toContain(`<circle`);
        expect(newCircleSVG).toContain(`cx='150'`);
        expect(newCircleSVG).toContain(`cy='100'`);
        expect(newCircleSVG).toContain(`r='80'`);
        expect(newCircleSVG).toContain(`fill='red'`);
        expect(newCircleSVG).toContain(`<text`);
        expect(newCircleSVG).toContain(`x='150'`);
        expect(newCircleSVG).toContain(`y='105'`);
        expect(newCircleSVG).toContain(`fill='white'`);
        expect(newCircleSVG).toContain(`ABC`);
    })
})

describe('Square', () => {
    test('Generates Square with correct attributes', () => {
        const square = new Square('pink', 'BCA', 'purple');
        const newSquareSVG = square.createShape();

        expect(newSquareSVG).toContain(`<rect`);
        expect(newSquareSVG).toContain(`x='50'`);
        expect(newSquareSVG).toContain(`y='0'`);
        expect(newSquareSVG).toContain(`width='200'`);
        expect(newSquareSVG).toContain(`height='200'`);
        expect(newSquareSVG).toContain(`fill='pink'`);
        expect(newSquareSVG).toContain(`<text`);
        expect(newSquareSVG).toContain(`x='150'`);
        expect(newSquareSVG).toContain(`y='115'`);
        expect(newSquareSVG).toContain(`fill='purple'`);
        expect(newSquareSVG).toContain(`BCA`);
    })
})

describe('Triangle', () => {
    test('Generates Triangle with correct attributes', () => {
        const triangle = new Triangle('blue', 'CAB', 'green');
        const newTriangleSVG = triangle.createShape();

        expect(newTriangleSVG).toContain(`<polygon`);
        expect(newTriangleSVG).toContain(`points='150,25 250,175 50,175'`);
        expect(newTriangleSVG).toContain(`fill='blue'`);
        expect(newTriangleSVG).toContain(`<text`);
        expect(newTriangleSVG).toContain(`x='150'`);
        expect(newTriangleSVG).toContain(`y='150'`);
        expect(newTriangleSVG).toContain(`fill='green'`);
        expect(newTriangleSVG).toContain(`CAB`);
    })
})