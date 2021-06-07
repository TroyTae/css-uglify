const { createElement, removeChildren } = require("../dist/index");

test("create element", () => {
  expect(createElement("div").tagName).toBe("DIV");
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
