type TagNames = keyof HTMLElementTagNameMap;
type EventNames = keyof HTMLElementEventMap;

export function createElement<T extends TagNames>(tagName: T) {
  return document.createElement(tagName);
}

export function append<E extends Element>(
  element: E,
  ...nodes: (string | Node)[]
) {
  element.append(...nodes);
  return element;
}

export function removeChild<N extends Node>(parent: N, child: N) {
  return parent.removeChild(child);
}

export function removeChildren<N extends Node>(parent: N, ...children: N[]) {
  if (children.length) {
    children.forEach((child) => parent.removeChild(child));
  } else {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  }
  return parent;
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
