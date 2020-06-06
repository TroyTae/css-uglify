const {
  createAnchorElement,
  createAbbrElement,
  createAddressElement,
  createAppletElement,
  createAreaElement,
  createArticleElement,
  createAsideElement,
  createAudioElement,
  createBoldElement,
  createBaseElement,
  createBaseFontElement,
} = require('../dist/index');

test('HTMLElement creation test', () => {
  expect(createAnchorElement().tagName).toBe('A');
  expect(createAbbrElement().tagName).toBe('ABBR');
  expect(createAddressElement().tagName).toBe('ADDRESS');
  expect(createAppletElement().tagName).toBe('APPLET');
  expect(createAreaElement().tagName).toBe('AREA');
  expect(createArticleElement().tagName).toBe('ARTICLE');
  expect(createAsideElement().tagName).toBe('ASIDE');
  expect(createAudioElement().tagName).toBe('AUDIO');
  expect(createBoldElement().tagName).toBe('B');
  expect(createBaseElement().tagName).toBe('BASE');
  expect(createBaseFontElement().tagName).toBe('BASEFONT');
});
