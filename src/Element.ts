import { Builder, HTMLElementTagNames } from "./Type";

export function createElement<H extends HTMLElementTagNames>(
  tagName: H,
  builder?: Builder<H>
) {
  const html = document.createElement(tagName);
  builder && builder(html);
  return html;
}

export function removeChildren<N extends Node>(parent: N) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
