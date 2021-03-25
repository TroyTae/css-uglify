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

  get<P extends keyof H>(propertyName: P) {
    return this.dom[propertyName];
  }

  set(...properties: Primitive[]) {
    for (let index = 0; index < properties.length; ) {
      (this.dom as any)[properties[index++] as string] = properties[index++];
    }
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
