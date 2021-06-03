type HTMLElementTagNames = keyof HTMLElementTagNameMap;

type Builder<H extends HTMLElementTagNames> = (
  element: HTMLElementTagNameMap[H]
) => void;

export function createElement<H extends HTMLElementTagNames>(
  tagName: H,
  builder: Builder<H>
) {
  const html = document.createElement(tagName);
  builder(html);
  return html;
}

export function createAnchor(builder: Builder<"a">) {
  return createElement("a", builder);
}

export function createAbbr(builder: Builder<"abbr">) {
  return createElement("abbr", builder);
}

export function createAddress(builder: Builder<"address">) {
  return createElement("address", builder);
}

export function removeChildren<N extends Node>(parent: N) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
