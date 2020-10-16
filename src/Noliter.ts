type Primitive = boolean | number | string;

export default class Noliter<K extends HTMLElement> {
  dom: K;

  constructor(tagName: keyof HTMLElementTagNameMap) {
    this.dom = <K>document.createElement(tagName);
  }

  append(...children: (string | Node | Noliter<K>)[]) {
    let index = children.length;
    while (index--) {
      if (children[index] instanceof Noliter) {
        children[index] = (children[index] as Noliter<K>).dom;
      }
    }
    this.dom.append.apply(
      this.dom,
      children as (string | Node)[],
    );
    return this;
  }

  attrs(...attributes: Primitive[]) {
    let index = 0;
    for (; index < attributes.length; ++index) {
      this.dom.setAttribute(
        attributes[index] as string,
        attributes[++index] as string,
      );
    }
    return this;
  }

  props(...properties: Primitive[]) {
    let index = 0;
    for (; index < properties.length; ++index) {
      (this.dom as any)
        [properties[index] as string]
          = properties[++index];
    }
    return this;
  }

  events<E extends keyof HTMLElementEventMap>(
    type: E,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) {
    this.dom.addEventListener(type, listener, options);
    return this;
  }
}
