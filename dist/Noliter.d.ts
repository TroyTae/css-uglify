declare type Primitive = boolean | number | string;
declare class Noliter<K extends keyof HTMLElementTagNameMap> {
    dom: HTMLElementTagNameMap[K];
    constructor(tagName: K);
    append(...children: (string | Node | Noliter<K>)[]): this;
    attrs(...attributes: Primitive[]): this;
    props(...properties: Primitive[]): this;
    events<E extends keyof HTMLElementEventMap>(type: E, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): this;
}
export default function $<K extends keyof HTMLElementTagNameMap>(tagName: K): Noliter<keyof HTMLElementTagNameMap>;
export {};
