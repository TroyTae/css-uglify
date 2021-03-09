export default function Notifier<T>(initialState: T): (((newState: T) => void) | ((callback: () => void) => number) | ((listenerKey: number) => void))[];
