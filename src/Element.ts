export function createElement<T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  builder?: (element: HTMLElementTagNameMap[T]) => void
) {
  const element = document.createElement(tagName);
  if (builder) {
    builder(element);
  }
  return element;
}

export function removeChildren<N extends Node>(parent: N) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
