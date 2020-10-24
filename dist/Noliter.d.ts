declare type Primitive = boolean | number | string;
declare class Noliter<T extends keyof HTMLElementTagNameMap, H extends HTMLElementTagNameMap[T]> {
    dom: H;
    constructor(tagName: T);
    add(...children: (string | Node | Noliter<T, H>)[]): this;
    attr(...attributes: Primitive[]): string | this | null;
    prop(...properties: Primitive[]): any;
    on<E extends keyof HTMLElementEventMap>(type: E, listener: (this: H, e: HTMLElementEventMap[E]) => void, options?: boolean | AddEventListenerOptions): this;
}
export default function $<T extends keyof HTMLElementTagNameMap, H extends HTMLElementTagNameMap[T]>(tagName: T): Noliter<T, H>;
export {};
