export default function Notifier<T>(initialState: T) {
  let key = 0;
  let state = initialState;
  const listeners: {
    [key: number]: () => void;
  } = {};

  return [
    function getState() { return state; },
    function setState(newState: T) {
      state = newState;
      for (const k in listeners) {
        listeners[k]();
      }
    },
    function addStateListener(callback: () => void) {
      listeners[key] = callback;
      return key++;
    },
    function deleteStateListener(listenerKey: number) {
      delete listeners[listenerKey];
    },
  ] as const;
}
