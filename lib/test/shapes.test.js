// Imports for testing from shapes.js
const { Circle, Square, Triangle } = require('../shapes');

// Error testing to throw error for missing arguments when creating a class
describe('Shape Classes', () => {
    test('Missing argument when generating a new Shape Class', () => {
        expect(() => new Circle()).toThrow();
        expect(() => new Square()).toThrow();
        expect(() => new Triangle()).toThrow();
    })
})

// Test for successfully generating Circle
describe('Circle', () => {
    test('Generates Circle with correct attributes', () => {
        const circle = new Circle('red', 'ABC', 'white');
        const newCircleSVG = circle.createShape();

        // Multiple expects used to better test for each individual value being generated
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

// Test for successfully generating Square
describe('Square', () => {
    test('Generates Square with correct attributes', () => {
        const square = new Square('pink', 'BCA', 'purple');
        const newSquareSVG = square.createShape();

        // Multiple expects used to better test for each individual value being generated
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

// Test for successfully generating Triangle
describe('Triangle', () => {
    test('Generates Triangle with correct attributes', () => {
        const triangle = new Triangle('blue', 'CAB', 'green');
        const newTriangleSVG = triangle.createShape();

        // Multiple expects used to better test for each individual value being generated
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