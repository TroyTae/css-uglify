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

function createAnchorElement() { return createElement('a'); }
function createAbbrElement() { return createElement('abbr'); }
function createAddressElement() { return createElement('address'); }
function createAppletElement() { return createElement('applet'); }
function createAreaElement() { return createElement('area'); }
function createArticleElement() { return createElement('article'); }
function createAsideElement() { return createElement('aside'); }
function createAudioElement() { return createElement('audio'); }
function createBoldElement() { return createElement('b'); }
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
function createDelElement() { return createElement('del'); }
function createDetailsElement() { return createElement('details'); }
function createDfnElement() { return createElement('dfn'); }
function createDialogElement() { return createElement('dialog'); }
function createDirElement() { return createElement('dir'); }
function createDivElement() { return createElement('div'); }
function createDlElement() { return createElement('dl'); }
function createDtElement() { return createElement('dt'); }
function createEmElement() { return createElement('em'); }
function createEmbedElement() { return createElement('embed'); }
function createFieldSetElement() { return createElement('fieldset'); }
function createFigcaptionElement() { return createElement('figcaption'); }
function createFigureElement() { return createElement('figure'); }
function createFontElement() { return createElement('font'); }
function createFooterElement() { return createElement('footer'); }
function createFormElement() { return createElement('form'); }
function createFrameElement() { return createElement('frame'); }
function createFrameSetElement() { return createElement('frameset'); }
function createH1Element() { return createElement('h1'); }
function createH2Element() { return createElement('h2'); }
function createH3Element() { return createElement('h3'); }
function createH4Element() { return createElement('h4'); }
function createH5Element() { return createElement('h5'); }
function createH6Element() { return createElement('h6'); }
function createHeadElement() { return createElement('head'); }
function createHeaderElement() { return createElement('header'); }
function createHGroupElement() { return createElement('hgroup'); }
function createHrElement() { return createElement('hr'); }
function createHtmlElement() { return createElement('html'); }
function createItalicElement() { return createElement('i'); }
function createIFrameElement() { return createElement('iframe'); }
function createImageElement() { return createElement('img'); }
function createInputElement() { return createElement('input'); }
function createInsElement() { return createElement('ins'); }
function createKbdElement() { return createElement('kbd'); }
function createLabelElement() { return createElement('label'); }
function createLegendElement() { return createElement('legend'); }
function createLiElement() { return createElement('li'); }
function createLinkElement() { return createElement('link'); }
function createMainElement() { return createElement('main'); }
function createMapElement() { return createElement('map'); }
function createMarkElement() { return createElement('mark'); }
function createMarqueeElement() { return createElement('marquee'); }
function createMenuElement() { return createElement('menu'); }
function createMetaElement() { return createElement('meta'); }
function createMeterElement() { return createElement('meter'); }
function createNavElement() { return createElement('nav'); }
function createNoScriptElement() { return createElement('noscript'); }
function createObjectElement() { return createElement('object'); }
function createOListElement() { return createElement('ol'); }
function createOptGroupElement() { return createElement('optgroup'); }
function createOptionElement() { return createElement('option'); }
function createOutputElement() { return createElement('output'); }

export { createAbbrElement, createAddressElement, createAnchorElement, createAppletElement, createAreaElement, createArticleElement, createAsideElement, createAudioElement, createBaseElement, createBaseFontElement, createBdiElement, createBdoElement, createBlockQuoteElement, createBodyElement, createBoldElement, createBrElement, createButtonElement, createCanvasElement, createCaptionElement, createCiteElement, createCodeElement, createColElement, createColGroupElement, createDataElement, createDataListElement, createDdElement, createDelElement, createDetailsElement, createDfnElement, createDialogElement, createDirElement, createDivElement, createDlElement, createDtElement, createElement, createEmElement, createEmbedElement, createFieldSetElement, createFigcaptionElement, createFigureElement, createFontElement, createFooterElement, createFormElement, createFrameElement, createFrameSetElement, createH1Element, createH2Element, createH3Element, createH4Element, createH5Element, createH6Element, createHGroupElement, createHeadElement, createHeaderElement, createHrElement, createHtmlElement, createIFrameElement, createImageElement, createInputElement, createInsElement, createItalicElement, createKbdElement, createLabelElement, createLegendElement, createLiElement, createLinkElement, createMainElement, createMapElement, createMarkElement, createMarqueeElement, createMenuElement, createMetaElement, createMeterElement, createNavElement, createNoScriptElement, createOListElement, createObjectElement, createOptGroupElement, createOptionElement, createOutputElement, setAttributes, setProperties };
