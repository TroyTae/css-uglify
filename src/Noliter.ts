type Primitive = boolean | number | string;

class Noliter<K extends keyof HTMLElementTagNameMap> {
  dom: HTMLElementTagNameMap[K];

  constructor(tagName: K) {
    this.dom = document.createElement(tagName);
  }

  update(callback: (dom: HTMLElementTagNameMap[K]) => void) {
    callback(this.dom);
    return this;
  }

  setAttributes(...attributes: Primitive[]) {
    let index = 0;
    for (; index < attributes.length; ++index) {
      this.dom.setAttribute(
        attributes[index] as string,
        attributes[++index] as string,
      );
    }
    return this;
  }

  setProperties(...properties: Primitive[]) {
    let index = 0;
    for (; index < properties.length; ++index) {
      (this.dom as any)
        [properties[index] as string]
          = properties[++index];
    }
    return this;
  }
}

export default function $<
  K extends keyof HTMLElementTagNameMap
>(tagName: K): Noliter<keyof HTMLElementTagNameMap> {
  return new Noliter(tagName);
}
