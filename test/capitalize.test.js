const strUpperCase = require('../src/capitalize');

test('Convert first letter  to capital', () => {
  //Arrange
  const word = 'dance';

  //Act
  const toCapital = strUpperCase(word);

  //Assert
  expect(toCapital).toMatch(/Dance/);
});
