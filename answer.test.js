
// Input:
let inputValue = {
  hired: {
    be: {
      to: {
        deserve: "I"
      }
    }
  }
};

// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
};

const { reverse } = require('./answer');


test('Reversing inputValue should give outputValue', () => {
  expect(reverse(inputValue)).toStrictEqual(outputValue);
});


test('Reversing inputValue twice should give InputValue', () => {
  expect(reverse(reverse(inputValue))).toStrictEqual(inputValue);
});
