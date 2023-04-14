const stringLength = require('./string');

test('count the character of a string', () => {
  // Arrange
  const str = 'blue';
  // Act
  const checkLength = stringLength(str);
  // Assert
  expect(checkLength).toBeGreaterThanOrEqual(1);
  expect(checkLength).toBeLessThanOrEqual(10);
});


