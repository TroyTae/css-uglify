export default function Notifier<T>(initialState: T): readonly [() => T, (newState: T) => void, (callback: () => void) => number, (listenerKey: number) => void];
