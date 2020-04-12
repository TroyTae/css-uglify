declare const _: Document;
declare type AttributeMap = {
    [key: string]: string;
};
declare function setAttributes(element: HTMLElement, attributeMap: AttributeMap): HTMLElement;
export { _, setAttributes, };
