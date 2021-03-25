type Primitive = boolean | number | string;
type TagNameKeys = keyof HTMLElementTagNameMap;

class Noliter<T extends TagNameKeys, H extends HTMLElementTagNameMap[T]> {
  dom: H;

  constructor(tagName: T) {
    this.dom = <H>document.createElement(tagName);
  }

  add(
    ...children: (
      | string
      | Node
      | Noliter<TagNameKeys, HTMLElementTagNameMap[TagNameKeys]>
    )[]
  ) {
    this.dom.append(
      ...children.map(function (child) {
        return child instanceof Noliter ? child.dom : child;
      })
    );
    return this;
  }

  remove(
    ...children: (
      | Node
      | Noliter<TagNameKeys, HTMLElementTagNameMap[TagNameKeys]>
    )[]
  ) {
    children.forEach((child) =>
      this.dom.removeChild(child instanceof Noliter ? child.dom : child)
    );
    return this;
  }

  clear() {
    while (this.dom.lastChild) {
      this.dom.removeChild(this.dom.lastChild);
    }
    return this;
  }

  get<P extends keyof H>(name: P) {
    return this.dom[name];
  }

  set<P extends keyof H>(key: P, value: Primitive[]) {
    this.dom[key] = value as any;
    return this;
  }

  on<E extends keyof HTMLElementEventMap>(
    type: E,
    listener: (this: H, e: HTMLElementEventMap[E]) => void,
    options?: boolean | AddEventListenerOptions
  ) {
    this.dom.addEventListener(type, listener as EventListener, options);
    return this;
  }
}

export default function $<
  T extends TagNameKeys,
  H extends HTMLElementTagNameMap[T]
>(tagName: T) {
  return new Noliter<T, H>(tagName);
}
