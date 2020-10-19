declare type Primitive = boolean | number | string;
export default class Noliter<K extends HTMLElement> {
    dom: K;
    constructor(tagName: keyof HTMLElementTagNameMap);
    append(...children: (string | Node | Noliter<K>)[]): this;
    attrs(...attributes: Primitive[]): this;
    props(...properties: Primitive[]): this;
    events<E extends keyof HTMLElementEventMap>(type: E, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): this;
}
export {};
