type PropertyMap = {
  [key: string]: boolean | number | string;
};

function setProperties(element: HTMLElement, propertyMap: PropertyMap): HTMLElement {
  let key: string;
  for (key in propertyMap) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (element as any)[key] = propertyMap[key];
  }
  return element;
}

export {setProperties};
