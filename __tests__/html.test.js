const {
  createAElement,
  createAbbrElement,
  createAddressElement,
  createAppletElement,
  createAreaElement,
  createArticleElement,
  createAsideElement,
  createAudioElement,
  createBElement,
  createBaseElement,
  createBaseFontElement,
  createBDIElement,
  createBDOElement,
  createBlockQuoteElement,
  createBodyElement,
  createBRElement,
  createButtonElement,
  createCanvasElement,
} = require('../dist/index');

test('HTMLElement creation test', () => {
  expect(createAElement().tagName).toBe('A');
  expect(createAbbrElement().tagName).toBe('ABBR');
  expect(createAddressElement().tagName).toBe('ADDRESS');
  expect(createAppletElement().tagName).toBe('APPLET');
  expect(createAreaElement().tagName).toBe('AREA');
  expect(createArticleElement().tagName).toBe('ARTICLE');
  expect(createAsideElement().tagName).toBe('ASIDE');
  expect(createAudioElement().tagName).toBe('AUDIO');
  expect(createBElement().tagName).toBe('B');
  expect(createBaseElement().tagName).toBe('BASE');
  expect(createBaseFontElement().tagName).toBe('BASEFONT');
  expect(createBDIElement().tagName).toBe('BDI');
  expect(createBDOElement().tagName).toBe('BDO');
  expect(createBlockQuoteElement().tagName).toBe('BLOCKQUOTE');
  expect(createBodyElement().tagName).toBe('BODY');
  expect(createBRElement().tagName).toBe('BR');
  expect(createButtonElement().tagName).toBe('BUTTON');
  expect(createCanvasElement().tagName).toBe('CANVAS');
});
