import Noliter from './Noliter';

export function createAnchor() { return new Noliter<HTMLAnchorElement>('a'); }
export function createAbbr() { return new Noliter('abbr'); }
export function createAddress() { return new Noliter('address'); }
export function createArea() { return new Noliter<HTMLAreaElement>('area'); }
export function createArticle() { return new Noliter('article'); }
export function createAside() { return new Noliter('aside'); }
export function createAudio() { return new Noliter<HTMLAudioElement>('audio'); }
export function createBold() { return new Noliter('b'); }
