/**
 * @author undefined
 * @version 1.0.0
 * @name hellper
 */
var doc = document;
function setAttributes(element, attributeMap) {
    var key;
    for (key in attributeMap) {
        element.setAttribute(key, attributeMap[key]);
    }
    return element;
}
function setProperties(element, propertyMap) {
    var key;
    for (key in propertyMap) {
        element[key] = propertyMap[key];
    }
    return element;
}

export { doc, setAttributes, setProperties };
