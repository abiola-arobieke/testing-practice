const strUpperCase = require('./capitalize');

test('Convert first letter  to capital', () => {
  //Arrange
  const word = 'dance';

  //Act
  const toCapital = strUpperCase(word);

  //Assert
  expect(toCapital).toMatch(/Dance/);
});
