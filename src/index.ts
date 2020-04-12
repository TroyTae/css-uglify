const _ = document;

type AttributeMap = {
  [key: string]: string;
};

function setAttributes(element: HTMLElement, attributeMap: AttributeMap): HTMLElement {
  let key;
  for (key in attributeMap) {
    _.createAttribute;
    element.setAttribute(key, attributeMap[key]);
  }
  return element;
}

export {
  _,
  setAttributes,
};
