import {createElement} from './element';

function createAElement(): HTMLAnchorElement { return createElement('a'); }
function createAbbrElement(): HTMLElement { return createElement('abbr'); }
function createAddressElement(): HTMLElement { return createElement('address'); }
function createAppletElement(): HTMLAppletElement { return createElement('applet'); }
function createAreaElement(): HTMLAreaElement { return createElement('area'); }
function createArticleElement(): HTMLElement { return createElement('article'); }
function createAsideElement(): HTMLElement { return createElement('aside'); }
function createAudioElement(): HTMLAudioElement { return createElement('audio'); }
function createBElement(): HTMLElement { return createElement('b'); }
function createBaseElement(): HTMLBaseElement { return createElement('base'); }
function createBaseFontElement(): HTMLBaseFontElement { return createElement('basefont'); }
function createBDIElement(): HTMLElement { return createElement('bdi'); }
function createBDOElement(): HTMLElement { return createElement('bdo'); }
function createBlockQuoteElement(): HTMLQuoteElement { return createElement('blockquote'); }

export {
  createAElement,
  createAbbrElement,
  createAddressElement,
  createAppletElement,
  createAreaElement,
  createArticleElement,
  createAsideElement,
  createAudioElement,
  createBElement,
  createBaseElement,
  createBaseFontElement,
  createBDIElement,
  createBDOElement,
  createBlockQuoteElement,
};
