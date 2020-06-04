import {createElement} from './element';

function createDivElement(): HTMLDivElement {
  return createElement('DIV') as HTMLDivElement;
}

function createInputElement(): HTMLInputElement {
  return createElement('INPUT') as HTMLInputElement;
}

export {
  createDivElement,
  createInputElement,
};
