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

export {setAttributes};
