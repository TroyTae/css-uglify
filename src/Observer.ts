type Subscriber<T> = (value?: T) => void;

export function createObserver<T>(initialValue: T) {
  let key = 0;
  let value = initialValue;
  const subscribers: {
    [key: number]: Subscriber<T>;
  } = {};

  return [
    function getValue() {
      return value;
    },
    function setValue(newValue: T) {
      value = newValue;
      for (const k in subscribers) {
        subscribers[k](value);
      }
    },
    function subscribeValue(callback: Subscriber<T>) {
      subscribers[key] = callback;
      return key++;
    },
    function unsubscribeValue(listenerKey: number) {
      delete subscribers[listenerKey];
    },
  ] as const;
}
