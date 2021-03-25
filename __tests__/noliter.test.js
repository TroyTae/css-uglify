const {
  $,
  DIV,
  INPUT,
  PARAGRAPH,
  TYPE,
  TEXT,
  TEXT_CONTENT,
} = require("../dist/index");

test("string", () => {
  const text = "Something Text";
  expect($(PARAGRAPH).add(text).get(TEXT_CONTENT)).toBe(text);
});

test("element", () => {
  const children = $(DIV).add(
    document.createElement("input"),
    document.createElement("button")
  ).dom.children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe("INPUTBUTTON");
});

test("noliter instance", () => {
  const children = $(DIV).add($(DIV), $(PARAGRAPH)).dom.children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe("DIVP");
});

test("set property", () => {
  const input = $(INPUT).set(TYPE, TEXT);
  expect(input.get(TYPE)).toBe(TEXT);
});

test("remove", () => {
  const child = $(DIV);
  const parent = $(DIV).add(child, $(PARAGRAPH));

  expect(parent.dom.children.length).toBe(2);
  parent.remove(child);
  expect(parent.dom.children.length).toBe(1);
});

test("clear", () => {
  const div = $(DIV).add($(DIV), $(PARAGRAPH));

  expect(div.dom.children.length).toBe(2);
  div.clear();
  expect(div.dom.children.length).toBe(0);
});
