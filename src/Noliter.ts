type Primitive = boolean | number | string;

class Noliter<
  T extends keyof HTMLElementTagNameMap,
  H extends HTMLElementTagNameMap[T],
> {
  dom: H;

  constructor(tagName: T) {
    this.dom = <H>document.createElement(tagName);
  }

  append(...children: (string | Node | Noliter<T, H>)[]) {
    let index = children.length;
    while (index--) {
      if (children[index] instanceof Noliter) {
        children[index] = (children[index] as Noliter<T, H>).dom;
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
    while (index < attributes.length) {
      this.dom.setAttribute(
        attributes[index++] as string,
        attributes[index++] as string,
      );
    }
    return this;
  }

  props(...properties: Primitive[]) {
    let index = 0;
    while (index < properties.length) {
      (this.dom as any)
        [properties[index++] as string]
          = properties[index++];
    }
    return this;
  }

  on<E extends keyof HTMLElementEventMap>(
    type: E,
    listener: (this: H, e: HTMLElementEventMap[E]) => void,
    options?: boolean | AddEventListenerOptions,
  ) {
    this.dom.addEventListener(
      type,
      listener as EventListener,
      options,
    );
    return this;
  }
}

export default function $<
  T extends keyof HTMLElementTagNameMap,
  H extends HTMLElementTagNameMap[T],
>(tagName: T) {
  return new Noliter<T, H>(tagName);
}
