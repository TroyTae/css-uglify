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

function createAElement() { return createElement('a'); }
function createAbbrElement() { return createElement('abbr'); }
function createAddressElement() { return createElement('address'); }
function createAppletElement() { return createElement('applet'); }
function createAreaElement() { return createElement('area'); }
function createArticleElement() { return createElement('article'); }
function createAsideElement() { return createElement('aside'); }
function createAudioElement() { return createElement('audio'); }
function createBElement() { return createElement('b'); }
function createBaseElement() { return createElement('base'); }
function createBaseFontElement() { return createElement('basefont'); }
function createBDIElement() { return createElement('bdi'); }
function createBDOElement() { return createElement('bdo'); }
function createBlockQuoteElement() { return createElement('blockquote'); }

export { createAElement, createAbbrElement, createAddressElement, createAppletElement, createAreaElement, createArticleElement, createAsideElement, createAudioElement, createBDIElement, createBDOElement, createBElement, createBaseElement, createBaseFontElement, createBlockQuoteElement, createElement, setAttributes, setProperties };
