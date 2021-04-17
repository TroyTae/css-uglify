const { createElement, removeChildren } = require("../dist/index");

test("create element", () => {
  expect(createElement("div").tagName).toBe("DIV");
});

test("set property", () => {
  const input = createElement("input", (input) => {
    input.type = "text";
    input.value = "I'm groot!";
    input.disabled = true;
  });
  expect(input.type).toBe("text");
  expect(input.value).toBe("I'm groot!");
  expect(input.disabled).toBe(true);
});

test("append children", () => {
  expect(
    createElement("div", (div) => {
      div.appendChild(createElement("div"));
      div.appendChild(createElement("div"));
    }).children.length
  ).toBe(2);
});

test("remove children", () => {
  const div = createElement("div", (div) => {
    div.appendChild(createElement("div"));
    div.appendChild(createElement("div"));
  });
  expect(div.children.length).toBe(2);
  removeChildren(div);
  expect(div.children.length).toBe(0);
});
