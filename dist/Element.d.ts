declare type TagNames = keyof HTMLElementTagNameMap;
declare type EventNames = keyof HTMLElementEventMap;
export declare function createElement<T extends TagNames>(tagName: T): HTMLElementTagNameMap[T];
export declare function append<E extends Element>(element: E, ...nodes: (string | Node)[]): E;
export declare function removeChild<N extends Node>(parent: N, child: N): N;
export declare function removeChildren<N extends Node>(parent: N, ...children: N[]): N;
export declare function addEventListener<T extends TagNames, E extends EventNames, H extends HTMLElementTagNameMap[T], O extends HTMLElementEventMap[E]>(el: H, type: E, listener: (this: H, evt: O) => void, options?: boolean | AddEventListenerOptions): void;
export {};
