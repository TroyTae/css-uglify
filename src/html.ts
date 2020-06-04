import {createElement} from './element';

function createDivElement(): HTMLDivElement {
  return createElement('DIV') as HTMLDivElement;
}

function createSpanElement(): HTMLSpanElement {
  return createElement('SPAN') as HTMLSpanElement;
}

function createInputElement(): HTMLInputElement {
  return createElement('INPUT') as HTMLInputElement;
}

export {
  createDivElement,
  createSpanElement,
  createInputElement,
};
