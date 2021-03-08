export default function Notifier<T>() {
  let key = 0;
  const listeners: {
    [key: number]: (value: T) => void;
  } = {};
  return [
    function setValue(value: T) {
      for (const k in listeners) {
        listeners[k](value);
      }
    },
    function addValueListener(callback: (value: T) => void) {
      listeners[key] = callback;
      return key++;
    },
    function deleteValueListener(listenerKey: number) {
      delete listeners[listenerKey];
    },
  ];
}
