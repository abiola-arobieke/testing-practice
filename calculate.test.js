const calculator = require('./calculate');
describe('Calculator', () => {
    // Arrange
    const num1 = 6;
    const num2 = 2;
    const calc = new calculator(num1, num2);
  
    // Add two number
  test('add two numbers', () => {
    // Act
    const plus = calc.add();
    // Assert
    expect(plus).toBe(8);
  });

  test('subtract two numbers', () => {
    // Act
    const minus = calc.subtract();
    // Assert
    expect(minus).toBe(4);
  });

  test('multiply two numbers', () => {
    // Act
    const times = calc.multiply();
    // Assert
    expect(times).toBe(12);
  });

  test('divide two numbers', () => {
    // Act
    const divide = calc.divide();
    // Assert
    expect(divide).toBe(3);
  });
});
