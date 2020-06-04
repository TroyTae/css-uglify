const doc = document;

type AttributeMap = {
  [key: string]: string;
};

function setAttributes(element: HTMLElement, attributeMap: AttributeMap): HTMLElement {
  let key;
  for (key in attributeMap) {
    element.setAttribute(key, attributeMap[key]);
  }
  return element;
}


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

export {
  doc,
  setAttributes,
  setProperties,
};
