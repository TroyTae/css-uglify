declare type TagNames = keyof HTMLElementTagNameMap;
declare type Primitive = boolean | number | string;
declare class Noliter<K extends TagNames> {
    dom: HTMLElementTagNameMap[K];
    constructor(tagName: K);
    append(...children: (string | Node | Noliter<TagNames>)[]): this;
    attrs(...attributes: Primitive[]): this;
    props(...properties: Primitive[]): this;
    events<E extends keyof HTMLElementEventMap>(type: E, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): this;
}
export default function $<K extends TagNames>(tagName: K): Noliter<K>;
export {};
