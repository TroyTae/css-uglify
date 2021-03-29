type TagNames = keyof HTMLElementTagNameMap;
type EventNames = keyof HTMLElementEventMap;

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

export function append<E extends Element>(
  element: E,
  ...nodes: (string | Node)[]
) {
  element.append(...nodes);
}

export function removeChild<N extends Node>(parent: N, child: N) {
  parent.removeChild(child);
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

export function addEventListener<
  T extends TagNames,
  E extends EventNames,
  H extends HTMLElementTagNameMap[T],
  O extends HTMLElementEventMap[E]
>(
  el: H,
  type: E,
  listener: (this: H, evt: O) => void,
  options?: boolean | AddEventListenerOptions
) {
  el.addEventListener(
    type,
    listener as EventListenerOrEventListenerObject,
    options
  );
}
