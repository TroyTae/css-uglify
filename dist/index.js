/**
 * @author undefined
 * @version 1.0.0
 * @name hellper
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    return createElement('DIV');
}
function createInputElement() {
    return createElement('INPUT');
}

exports.createDivElement = createDivElement;
exports.createElement = createElement;
exports.createInputElement = createInputElement;
exports.setAttributes = setAttributes;
exports.setProperties = setProperties;
