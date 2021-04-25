export function createHTML<H extends keyof HTMLElementTagNameMap>(
  tagName: H,
  builder: (element: HTMLElementTagNameMap[H]) => void
) {
  const html = document.createElement(tagName);
  builder(html);
  return html;
}

export function createSVG<S extends keyof SVGElementTagNameMap>(
  qualifiedName: S,
  builder: (element: SVGElementTagNameMap[S]) => void
) {
  const svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    qualifiedName
  );
  builder(svg);
  return svg;
}

export function removeChildren<N extends Node>(parent: N) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
