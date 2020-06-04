/**
 * @author undefined
 * @version 1.0.0
 * @name hellper
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.doc = doc;
exports.setAttributes = setAttributes;
exports.setProperties = setProperties;
