import {createElement} from './element';

function createDivElement(): HTMLDivElement {
  return createElement('DIV') as HTMLDivElement;
}

export {createDivElement};
