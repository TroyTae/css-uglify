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
function createParagraphElement() { return createElement('p'); }
function createParamElement() { return createElement('param'); }
function createPictureElement() { return createElement('picture'); }
function createPreElement() { return createElement('pre'); }
function createProgressElement() { return createElement('progress'); }
function createQuoteElement() { return createElement('q'); }
function createRpElement() { return createElement('rp'); }
function createRtElement() { return createElement('rt'); }
function createRubyElement() { return createElement('ruby'); }
function createStrikethroughElement() { return createElement('s'); }
function createSampElement() { return createElement('samp'); }
function createScriptElement() { return createElement('script'); }
function createSectionElement() { return createElement('section'); }
function createSelectElement() { return createElement('select'); }
function createSlotElement() { return createElement('slot'); }
function createSmallElement() { return createElement('small'); }
function createSourceElement() { return createElement('source'); }
function createSpanElement() { return createElement('span'); }
function createStrongElement() { return createElement('strong'); }
function createStyleElement() { return createElement('style'); }
function createSubElement() { return createElement('sub'); }
function createTableElement() { return createElement('table'); }
function createTableBodyElement() { return createElement('tbody'); }
function createTableDataElement() { return createElement('td'); }
function createTemplateElement() { return createElement('template'); }
function createTextAreaElement() { return createElement('textarea'); }
function createTableFooterElement() { return createElement('tfoot'); }
function createTableHeaderElement() { return createElement('th'); }
function createTableHeadElement() { return createElement('thead'); }
function createTimeElement() { return createElement('time'); }
function createTitleElement() { return createElement('title'); }
function createTableRowElement() { return createElement('tr'); }
function createTrackElement() { return createElement('track'); }

exports.createAbbrElement = createAbbrElement;
exports.createAddressElement = createAddressElement;
exports.createAnchorElement = createAnchorElement;
exports.createAppletElement = createAppletElement;
exports.createAreaElement = createAreaElement;
exports.createArticleElement = createArticleElement;
exports.createAsideElement = createAsideElement;
exports.createAudioElement = createAudioElement;
exports.createBaseElement = createBaseElement;
exports.createBaseFontElement = createBaseFontElement;
exports.createBdiElement = createBdiElement;
exports.createBdoElement = createBdoElement;
exports.createBlockQuoteElement = createBlockQuoteElement;
exports.createBodyElement = createBodyElement;
exports.createBoldElement = createBoldElement;
exports.createBrElement = createBrElement;
exports.createButtonElement = createButtonElement;
exports.createCanvasElement = createCanvasElement;
exports.createCaptionElement = createCaptionElement;
exports.createCiteElement = createCiteElement;
exports.createCodeElement = createCodeElement;
exports.createColElement = createColElement;
exports.createColGroupElement = createColGroupElement;
exports.createDataElement = createDataElement;
exports.createDataListElement = createDataListElement;
exports.createDdElement = createDdElement;
exports.createDelElement = createDelElement;
exports.createDetailsElement = createDetailsElement;
exports.createDfnElement = createDfnElement;
exports.createDialogElement = createDialogElement;
exports.createDirElement = createDirElement;
exports.createDivElement = createDivElement;
exports.createDlElement = createDlElement;
exports.createDtElement = createDtElement;
exports.createElement = createElement;
exports.createEmElement = createEmElement;
exports.createEmbedElement = createEmbedElement;
exports.createFieldSetElement = createFieldSetElement;
exports.createFigcaptionElement = createFigcaptionElement;
exports.createFigureElement = createFigureElement;
exports.createFontElement = createFontElement;
exports.createFooterElement = createFooterElement;
exports.createFormElement = createFormElement;
exports.createFrameElement = createFrameElement;
exports.createFrameSetElement = createFrameSetElement;
exports.createH1Element = createH1Element;
exports.createH2Element = createH2Element;
exports.createH3Element = createH3Element;
exports.createH4Element = createH4Element;
exports.createH5Element = createH5Element;
exports.createH6Element = createH6Element;
exports.createHGroupElement = createHGroupElement;
exports.createHeadElement = createHeadElement;
exports.createHeaderElement = createHeaderElement;
exports.createHrElement = createHrElement;
exports.createHtmlElement = createHtmlElement;
exports.createIFrameElement = createIFrameElement;
exports.createImageElement = createImageElement;
exports.createInputElement = createInputElement;
exports.createInsElement = createInsElement;
exports.createItalicElement = createItalicElement;
exports.createKbdElement = createKbdElement;
exports.createLabelElement = createLabelElement;
exports.createLegendElement = createLegendElement;
exports.createLiElement = createLiElement;
exports.createLinkElement = createLinkElement;
exports.createMainElement = createMainElement;
exports.createMapElement = createMapElement;
exports.createMarkElement = createMarkElement;
exports.createMarqueeElement = createMarqueeElement;
exports.createMenuElement = createMenuElement;
exports.createMetaElement = createMetaElement;
exports.createMeterElement = createMeterElement;
exports.createNavElement = createNavElement;
exports.createNoScriptElement = createNoScriptElement;
exports.createOListElement = createOListElement;
exports.createObjectElement = createObjectElement;
exports.createOptGroupElement = createOptGroupElement;
exports.createOptionElement = createOptionElement;
exports.createOutputElement = createOutputElement;
exports.createParagraphElement = createParagraphElement;
exports.createParamElement = createParamElement;
exports.createPictureElement = createPictureElement;
exports.createPreElement = createPreElement;
exports.createProgressElement = createProgressElement;
exports.createQuoteElement = createQuoteElement;
exports.createRpElement = createRpElement;
exports.createRtElement = createRtElement;
exports.createRubyElement = createRubyElement;
exports.createSampElement = createSampElement;
exports.createScriptElement = createScriptElement;
exports.createSectionElement = createSectionElement;
exports.createSelectElement = createSelectElement;
exports.createSlotElement = createSlotElement;
exports.createSmallElement = createSmallElement;
exports.createSourceElement = createSourceElement;
exports.createSpanElement = createSpanElement;
exports.createStrikethroughElement = createStrikethroughElement;
exports.createStrongElement = createStrongElement;
exports.createStyleElement = createStyleElement;
exports.createSubElement = createSubElement;
exports.createTableBodyElement = createTableBodyElement;
exports.createTableDataElement = createTableDataElement;
exports.createTableElement = createTableElement;
exports.createTableFooterElement = createTableFooterElement;
exports.createTableHeadElement = createTableHeadElement;
exports.createTableHeaderElement = createTableHeaderElement;
exports.createTableRowElement = createTableRowElement;
exports.createTemplateElement = createTemplateElement;
exports.createTextAreaElement = createTextAreaElement;
exports.createTimeElement = createTimeElement;
exports.createTitleElement = createTitleElement;
exports.createTrackElement = createTrackElement;
exports.setAttributes = setAttributes;
exports.setProperties = setProperties;
