import { createElement } from "./Element";

export function createAnchor(builder: Builder<"a">) {
  return createElement("a", builder);
}
export function createAbbr(builder: Builder<"abbr">) {
  return createElement("abbr", builder);
}
export function createAddress(builder: Builder<"address">) {
  return createElement("address", builder);
}
export function createApplet(builder: Builder<"applet">) {
  return createElement("applet", builder);
}
export function createArea(builder: Builder<"area">) {
  return createElement("area", builder);
}