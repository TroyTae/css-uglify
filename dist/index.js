/**
 * @author undefined
 * @version 1.0.0
 * @name hellper
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _ = document;
function setAttributes(element, attributeMap) {
    var key;
    for (key in attributeMap) {
        element.setAttribute(key, attributeMap[key]);
    }
    return element;
}

exports._ = _;
exports.setAttributes = setAttributes;
