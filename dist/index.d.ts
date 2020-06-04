declare const doc: Document;
declare type AttributeMap = {
    [key: string]: string;
};
declare function setAttributes(element: HTMLElement, attributeMap: AttributeMap): HTMLElement;
declare type PropertyMap = {
    [key: string]: boolean | number | string;
};
declare function setProperties(element: HTMLElement, propertyMap: PropertyMap): HTMLElement;
export { doc, setAttributes, setProperties, };
