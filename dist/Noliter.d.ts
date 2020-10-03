declare type Primitive = boolean | number | string;
declare class Noliter<K extends keyof HTMLElementTagNameMap> {
    dom: HTMLElementTagNameMap[K];
    constructor(tagName: K);
    update(callback: (dom: HTMLElementTagNameMap[K]) => void): this;
    setAttributes(...attributes: Primitive[]): this;
    setProperties(...properties: Primitive[]): this;
}
export default function $<K extends keyof HTMLElementTagNameMap>(tagName: K): Noliter<keyof HTMLElementTagNameMap>;
export {};
