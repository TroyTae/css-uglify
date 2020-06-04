const _ = document;

function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K] {
  return _.createElement<K>(tagName);
}

export {createElement};
