const {
  createAnchorElement,
  createAbbrElement,
  createAddressElement,
  createAppletElement,
  createAreaElement,
  createArticleElement,
} = require('../dist/index');

test('HTMLElement creation test', () => {
  expect(createAnchorElement().tagName).toBe('A');
  expect(createAbbrElement().tagName).toBe('ABBR');
  expect(createAddressElement().tagName).toBe('ADDRESS');
  expect(createAppletElement().tagName).toBe('APPLET');
  expect(createAreaElement().tagName).toBe('AREA');
  expect(createArticleElement().tagName).toBe('ARTICLE');
});
