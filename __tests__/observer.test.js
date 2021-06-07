const { createElement, createObserver } = require("../dist/index");

test("subscribe value", () => {
  const [getValue, setValue, subscribeValue] = createObserver(0);
  subscribeValue((value) => {
    expect(value).toBe(10);
  });
  expect(getValue()).toBe(0);
  setValue(10);
  expect(getValue()).toBe(10);
});

test("unsubscribe value", () => {
  const span = createElement("span");
  const [getValue, setValue, subscribeValue, unsubscribeValue] =
    createObserver();

  subscribeValue(() => {
    span.textContent = "first";
  });
  const key = subscribeValue(() => {
    span.textContent = "second";
  });

  setValue();
  expect(span.textContent).toBe("second");
  unsubscribeValue(key);

  setValue();
  expect(span.textContent).toBe("first");
  expect(getValue()).toBe(undefined);
});
