const {notifier} = require('../dist/index');

test('add listener', () => {
  const [setValue, addValueListener] = notifier();

  let result = 0;
  addValueListener(function(value) {
    result += value;
  });
  addValueListener(function(value) {
    result += value * 2;
  });

  setValue(10);
  expect(result).toBe(30);
});

test('delete listener', () => {
  const [setValue, addValueListener, deleteValueListener] = notifier();

  let result = 0;
  const key1 = addValueListener(function(value) {
    result += value;
  });
  const key2 = addValueListener(function(value) {
    result += value * 2;
  });

  deleteValueListener(key1);
  setValue(10);
  expect(result).toBe(20);

  deleteValueListener(key2);
  setValue(100);
  expect(result).toBe(20);
});
