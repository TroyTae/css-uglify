declare type Primitive = boolean | number | string;
declare type TagNameKeys = keyof HTMLElementTagNameMap;
declare class Noliter<T extends TagNameKeys, H extends HTMLElementTagNameMap[T]> {
    dom: H;
    constructor(tagName: T);
    add(...children: (string | Node | Noliter<TagNameKeys, HTMLElementTagNameMap[TagNameKeys]>)[]): this;
    remove(...children: (Node | Noliter<TagNameKeys, HTMLElementTagNameMap[TagNameKeys]>)[]): this;
    clear(): this;
    get<P extends keyof H>(name: P): H[P];
    set<P extends keyof H>(key: P, value: Primitive[]): this;
    on<E extends keyof HTMLElementEventMap>(type: E, listener: (this: H, e: HTMLElementEventMap[E]) => void, options?: boolean | AddEventListenerOptions): this;
}
export default function $<T extends TagNameKeys, H extends HTMLElementTagNameMap[T]>(tagName: T): Noliter<T, H>;
export {};
