import {createElement} from './element';

function createAnchorElement(): HTMLAnchorElement {
  return createElement('a');
}

function createDivElement(): HTMLDivElement {
  return createElement('div');
}

function createSpanElement(): HTMLSpanElement {
  return createElement('span');
}

function createParagraphElement(): HTMLParagraphElement {
  return createElement('p');
}

function createInputElement(): HTMLInputElement {
  return createElement('input');
}

function createSelectElement(): HTMLSelectElement {
  return createElement('select');
}

export {
  createAnchorElement,
  createDivElement,
  createSpanElement,
  createParagraphElement,
  createInputElement,
  createSelectElement,
};
