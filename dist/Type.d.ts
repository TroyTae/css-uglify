export declare type HTMLElementTagNames = keyof HTMLElementTagNameMap;
export declare type Builder<H extends HTMLElementTagNames> = (element: HTMLElementTagNameMap[H]) => void;
