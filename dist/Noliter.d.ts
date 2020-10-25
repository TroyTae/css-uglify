declare type Primitive = boolean | number | string;
declare class Noliter<T extends keyof HTMLElementTagNameMap, H extends HTMLElementTagNameMap[T]> {
    dom: H;
    constructor(tagName: T);
    add(...children: (string | Node | Noliter<T, H>)[]): this;
    ga(attributeName: string): string | null;
    sa(...attributes: Primitive[]): this;
    prop(...properties: Primitive[]): any;
    on<E extends keyof HTMLElementEventMap>(type: E, listener: (this: H, e: HTMLElementEventMap[E]) => void, options?: boolean | AddEventListenerOptions): this;
}
export default function $<T extends keyof HTMLElementTagNameMap, H extends HTMLElementTagNameMap[T]>(tagName: T): Noliter<T, H>;
export {};
