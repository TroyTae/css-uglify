export type HTMLElementTagNames = keyof HTMLElementTagNameMap;

export type Builder<H extends HTMLElementTagNames> = (
  element: HTMLElementTagNameMap[H]
) => void;
