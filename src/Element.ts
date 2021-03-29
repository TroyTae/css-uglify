type TagNames = keyof HTMLElementTagNameMap;

export function createElement<T extends TagNames>(
  tagName: T,
  builder?: (element: HTMLElementTagNameMap[T]) => void
) {
  const element = document.createElement(tagName);
  if (builder) {
    builder(element);
  }
  return element;
}

export function removeChildren<N extends Node>(parent: N, ...children: N[]) {
  let index = children.length;
  if (index) {
    while (index) {
      parent.removeChild(children[--index]);
    }
  } else {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  }
}
