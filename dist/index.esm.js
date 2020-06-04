/**
 * @author undefined
 * @version 1.0.0
 * @name hellper
 */
var _ = document;
function createElement(tagName) {
    return _.createElement(tagName);
}

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

function createDivElement() {
    return createElement('div');
}
function createSpanElement() {
    return createElement('span');
}
function createParagraphElement() {
    return createElement('p');
}
function createInputElement() {
    return createElement('input');
}
function createSelectElement() {
    return createElement('select');
}

export { createDivElement, createElement, createInputElement, createParagraphElement, createSelectElement, createSpanElement, setAttributes, setProperties };
