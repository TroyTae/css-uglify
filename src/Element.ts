import Noliter from './Noliter';

export function createAnchor() { return new Noliter<HTMLAnchorElement>('a'); }
export function createAbbr() { return new Noliter('abbr'); }
export function createAddress() { return new Noliter('address'); }
export function createArea() { return new Noliter<HTMLAreaElement>('area'); }
export function createArticle() { return new Noliter('article'); }
