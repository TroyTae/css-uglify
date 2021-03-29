declare type TagNames = keyof HTMLElementTagNameMap;
export declare function createElement<T extends TagNames>(tagName: T, builder?: (element: HTMLElementTagNameMap[T]) => void): HTMLElementTagNameMap[T];
export declare function removeChildren<N extends Node>(parent: N, ...children: N[]): void;
export {};
