const {
  createAnchor,
  createAbbr,
  createAddress,
  createArea,
  createArticle,
  createAside,
  createAudio,
  createBold,
  createBdi,
  createBdo,
  createBlockQuote,
  createBr,
  createButton,
  createCanvas,
  createCaption,
  createCite,
  createCode,
  createCol,
  createColGroup,
  createData,
  createDataList,
  createDd,
  createDel,
  createDetails,
  createDfn,
  createDialog,
  createDiv,
  createDl,
  createDt,
  createEm,
  createEmbed,
  createFieldSet,
  createFigCaption,
  createFigure,
  createFooter,
  createForm,
  createH1,
  createH2,
  createH3,
  createH4,
  createH5,
  createH6,
  createHeader,
  createHr,
  createItalic,
  createIframe,
  createImg,
  createInput,
  createIns,
  createKbd,
  createLabel,
  createLegend,
  createLi,
  createLink,
  createMain,
  createMap,
  createMark,
  createMeter,
  createNav,
  createObject,
  createOl,
  createOptGroup,
  createOption,
  createOutput,
  createParagraph,
  createParam,
  createPicture,
  createPre,
  createProgress,
  createQuote,
  createSamp,
  createSection,
  createSelect,
  createSmall,
  createSource,
  createSpan,
  createStrong,
  createSub,
  createTextArea,
  createTable,
  createThead,
  createTbody,
  createTfoot,
  createTh,
  createTr,
  createTd,
  createTime,
  createTrack,
  createUl,
  createVar,
  createVideo,
} = require('../dist/index');

test('createAnchor', () => {
  expect(
    createAnchor()
      .dom
      .tagName
  ).toBe('A');
});

test('createAbbr', () => {
  expect(
    createAbbr()
      .dom
      .tagName
  ).toBe('ABBR');
});

test('createAddress', () => {
  expect(
    createAddress()
      .dom
      .tagName
  ).toBe('ADDRESS');
});

test('createArea', () => {
  expect(
    createArea()
      .dom
      .tagName
  ).toBe('AREA');
});

test('createArticle', () => {
  expect(
    createArticle()
      .dom
      .tagName
  ).toBe('ARTICLE');
});

test('createAside', () => {
  expect(
    createAside()
      .dom
      .tagName
  ).toBe('ASIDE');
});

test('createAudio', () => {
  expect(
    createAudio()
      .dom
      .tagName
  ).toBe('AUDIO');
});

test('createBold', () => {
  expect(
    createBold()
      .dom
      .tagName
  ).toBe('B');
});

test('createBdi', () => {
  expect(
    createBdi()
      .dom
      .tagName
  ).toBe('BDI');
});

test('createBdo', () => {
  expect(
    createBdo()
      .dom
      .tagName
  ).toBe('BDO');
});

test('createBlockQuote', () => {
  expect(
    createBlockQuote()
      .dom
      .tagName
  ).toBe('BLOCKQUOTE');
});

test('createBr', () => {
  expect(
    createBr()
      .dom
      .tagName
  ).toBe('BR');
});

test('createButton', () => {
  expect(
    createButton()
      .dom
      .tagName
  ).toBe('BUTTON');
});

test('createCanvas', () => {
  expect(
    createCanvas()
      .dom
      .tagName
  ).toBe('CANVAS');
});

test('createCaption', () => {
  expect(
    createCaption()
      .dom
      .tagName
  ).toBe('CAPTION');
});

test('createCite', () => {
  expect(
    createCite()
      .dom
      .tagName
  ).toBe('CITE');
});

test('createCode', () => {
  expect(
    createCode()
      .dom
      .tagName
  ).toBe('CODE');
});
