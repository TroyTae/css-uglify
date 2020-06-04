import {createElement} from './element';

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

export {
  createDivElement,
  createSpanElement,
  createParagraphElement,
  createInputElement,
};
