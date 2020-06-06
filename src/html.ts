import {createElement} from './element';

function createAnchorElement(): HTMLAnchorElement { return createElement('a'); }
function createAbbrElement(): HTMLElement { return createElement('abbr'); }
function createAddressElement(): HTMLElement { return createElement('address'); }
function createAppletElement(): HTMLAppletElement { return createElement('applet'); }
function createAreaElement(): HTMLAreaElement { return createElement('area'); }
function createArticleElement(): HTMLElement { return createElement('article'); }
function createAsideElement(): HTMLElement { return createElement('aside'); }
function createAudioElement(): HTMLAudioElement { return createElement('audio'); }

export {
  createAnchorElement,
  createAbbrElement,
  createAddressElement,
  createAppletElement,
  createAreaElement,
  createArticleElement,
  createAsideElement,
  createAudioElement,
};
