import { Builder, HTMLElementTagNames } from "./Type";
export declare function createElement<H extends HTMLElementTagNames>(tagName: H, builder?: Builder<H>): HTMLElementTagNameMap[H];
export declare function removeChildren<N extends Node>(parent: N): void;
