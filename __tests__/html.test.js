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
  createBdiElement,
  createBdoElement,
  createBlockQuoteElement,
  createBodyElement,
  createBrElement,
  createButtonElement,
  createCanvasElement,
  createCaptionElement,
  createCiteElement,
  createCodeElement,
  createColElement,
  createColGroupElement,
  createDataElement,
  createDataListElement,
  createDdElement,
  createDelElement,
  createDetailsElement,
  createDfnElement,
  createDialogElement,
  createDirElement,
  createDivElement,
  createDlElement,
  createDtElement,
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
  expect(createBdiElement().tagName).toBe('BDI');
  expect(createBdoElement().tagName).toBe('BDO');
  expect(createBlockQuoteElement().tagName).toBe('BLOCKQUOTE');
  expect(createBodyElement().tagName).toBe('BODY');
  expect(createBrElement().tagName).toBe('BR');
  expect(createButtonElement().tagName).toBe('BUTTON');
  expect(createCanvasElement().tagName).toBe('CANVAS');
  expect(createCaptionElement().tagName).toBe('CAPTION');
  expect(createCiteElement().tagName).toBe('CITE');
  expect(createCodeElement().tagName).toBe('CODE');
  expect(createColElement().tagName).toBe('COL');
  expect(createColGroupElement().tagName).toBe('COLGROUP');
  expect(createDataElement().tagName).toBe('DATA');
  expect(createDataListElement().tagName).toBe('DATALIST');
  expect(createDdElement().tagName).toBe('DD');
  expect(createDelElement().tagName).toBe('DEL');
  expect(createDetailsElement().tagName).toBe('DETAILS');
  expect(createDfnElement().tagName).toBe('DFN');
  expect(createDialogElement().tagName).toBe('DIALOG');
  expect(createDirElement().tagName).toBe('DIR');
  expect(createDivElement().tagName).toBe('DIV');
  expect(createDlElement().tagName).toBe('DL');
  expect(createDtElement().tagName).toBe('DT');
});
