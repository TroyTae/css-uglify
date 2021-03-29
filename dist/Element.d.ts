declare type TagNames = keyof HTMLElementTagNameMap;
declare type EventNames = keyof HTMLElementEventMap;
export declare function createElement<T extends TagNames>(tagName: T, builder?: (element: HTMLElementTagNameMap[T]) => void): HTMLElementTagNameMap[T];
export declare function append<E extends Element>(element: E, ...nodes: (string | Node)[]): void;
export declare function removeChild<N extends Node>(parent: N, child: N): void;
export declare function removeChildren<N extends Node>(parent: N, ...children: N[]): void;
export declare function addEventListener<T extends TagNames, E extends EventNames, H extends HTMLElementTagNameMap[T], O extends HTMLElementEventMap[E]>(el: H, type: E, listener: (this: H, evt: O) => void, options?: boolean | AddEventListenerOptions): void;
export {};
