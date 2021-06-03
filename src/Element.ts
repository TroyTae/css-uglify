export function createElement<H extends keyof HTMLElementTagNameMap>(
  tagName: H,
  builder: (element: HTMLElementTagNameMap[H]) => void
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
