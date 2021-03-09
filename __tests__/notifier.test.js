const {notifier} = require('../dist/index');

test('add listener', () => {
  const [
    getValue,
    setValue,
    addValueListener,
  ] = notifier(0);

  addValueListener(function() {
    expect(getValue()).toBe(10);
  });
  addValueListener(function() {
    expect(getValue()).toBe(10);
  });

  expect(getValue()).toBe(0);
  setValue(10);
});

test('delete listener', () => {
  const [
    getValue,
    setValue,
    addValueListener,
    deleteValueListener,
  ] = notifier(0);

  let count = 0;
  const key1 = addValueListener(function() {
    ++count;
  });
  const key2 = addValueListener(function() {
    ++count;
  });

  deleteValueListener(key1);
  setValue(10);
  expect(count).toBe(1);
  expect(getValue()).toBe(10);

  deleteValueListener(key2);
  setValue(100);
  expect(count).toBe(1);
  expect(getValue()).toBe(100);
});
