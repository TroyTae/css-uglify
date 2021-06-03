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

export function removeChildren<N extends Node>(parent: N) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
