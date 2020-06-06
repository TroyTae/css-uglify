import {createElement} from './element';

function createAnchorElement(): HTMLAnchorElement {
  return createElement('a');
}

function createAppletElement(): HTMLAppletElement {
  return createElement('applet');
}

export {
  createAnchorElement,
  createAppletElement,
};
