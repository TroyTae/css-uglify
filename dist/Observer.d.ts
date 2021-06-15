declare type Subscriber<T> = (value?: T) => void;
export declare function createObserver<T>(initialValue: T): readonly [() => T, (newValue: T) => void, (callback: Subscriber<T>) => number, (listenerKey: number) => void];
export {};
