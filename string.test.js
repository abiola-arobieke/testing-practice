const {stringLength, reverseString} = require('./string');

// Test string length method
test('count the character of a string', () => {
  // Arrange
  const str = 'blue';
  // Act
  const checkLength = stringLength(str);
  // Assert
  expect(checkLength).toBeGreaterThanOrEqual(1);
  expect(checkLength).toBeLessThanOrEqual(10);
});

// Test reverse string method
test('reverse a string', () => {
    // Arrange
    const str = 'red';
    // Act
    const descendString = reverseString(str);
    //Assert 
    expect(descendString).toMatch(/der/)
});







