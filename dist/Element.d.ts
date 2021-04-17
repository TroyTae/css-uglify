export declare function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, builder?: (element: HTMLElementTagNameMap[T]) => void): HTMLElementTagNameMap[T];
export declare function removeChildren<N extends Node>(parent: N): void;
