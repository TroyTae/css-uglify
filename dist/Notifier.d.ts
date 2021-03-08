export default function Notifier<T>(): (((value: T) => void) | ((callback: (value: T) => void) => number) | ((listenerKey: number) => void))[];
