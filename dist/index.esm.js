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
function createBdiElement() { return createElement('bdi'); }
function createBdoElement() { return createElement('bdo'); }
function createBlockQuoteElement() { return createElement('blockquote'); }
function createBodyElement() { return createElement('body'); }
function createBrElement() { return createElement('br'); }
function createButtonElement() { return createElement('button'); }
function createCanvasElement() { return createElement('canvas'); }
function createCaptionElement() { return createElement('caption'); }
function createCiteElement() { return createElement('cite'); }
function createCodeElement() { return createElement('code'); }
function createColElement() { return createElement('col'); }
function createColGroupElement() { return createElement('colgroup'); }
function createDataElement() { return createElement('data'); }
function createDataListElement() { return createElement('datalist'); }
function createDdElement() { return createElement('dd'); }

export { createAElement, createAbbrElement, createAddressElement, createAppletElement, createAreaElement, createArticleElement, createAsideElement, createAudioElement, createBElement, createBaseElement, createBaseFontElement, createBdiElement, createBdoElement, createBlockQuoteElement, createBodyElement, createBrElement, createButtonElement, createCanvasElement, createCaptionElement, createCiteElement, createCodeElement, createColElement, createColGroupElement, createDataElement, createDataListElement, createDdElement, createElement, setAttributes, setProperties };
