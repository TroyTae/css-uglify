declare type PropertyMap = {
    [key: string]: boolean | number | string;
};
declare function setProperties(element: HTMLElement, propertyMap: PropertyMap): HTMLElement;
export { setProperties };
