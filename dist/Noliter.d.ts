declare type Primitive = boolean | number | string;
declare type TagNameKeys = keyof HTMLElementTagNameMap;
declare class Noliter<T extends TagNameKeys, H extends HTMLElementTagNameMap[T]> {
    dom: H;
    constructor(tagName: T);
    add(...children: (string | Node | Noliter<TagNameKeys, HTMLElementTagNameMap[TagNameKeys]>)[]): this;
    ga(attributeName: string): string | null;
    sa(...attributes: Primitive[]): this;
    gp<P extends keyof H>(propertyName: P): H[P];
    sp(...properties: Primitive[]): this;
    on<E extends keyof HTMLElementEventMap>(type: E, listener: (this: H, e: HTMLElementEventMap[E]) => void, options?: boolean | AddEventListenerOptions): this;
}
export default function $<T extends keyof HTMLElementTagNameMap, H extends HTMLElementTagNameMap[T]>(tagName: T): Noliter<T, H>;
export {};
