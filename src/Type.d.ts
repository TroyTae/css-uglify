type HTMLElementTagNames = keyof HTMLElementTagNameMap;

type Builder<H extends HTMLElementTagNames> = (
  element: HTMLElementTagNameMap[H]
) => void;
