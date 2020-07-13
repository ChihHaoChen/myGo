
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

const { reverse1, reverse2 } = require('./answer');

console.log("test another method => ", JSON.stringify(reverse2(inputValue)));

test('Reversing inputValue should give outputValue with the 1st method', () => {
  expect(reverse1(inputValue)).toStrictEqual(outputValue);
});


test('Reversing inputValue twice should give InputValue the 1st method', () => {
  expect(reverse1(reverse1(inputValue))).toStrictEqual(inputValue);
});


test('Reversing inputValue should give outputValue with the 2nd method', () => {
  expect(reverse2(inputValue)).toStrictEqual(outputValue);
});


test('Reversing inputValue twice should give InputValue the 2nd method', () => {
  expect(reverse2(reverse2(inputValue))).toStrictEqual(inputValue);
});


