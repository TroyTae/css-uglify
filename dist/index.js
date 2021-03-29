'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createElement(tagName, builder) {
    var element = document.createElement(tagName);
    if (builder) {
        builder(element);
    }
    return element;
}
function append(element) {
    var nodes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nodes[_i - 1] = arguments[_i];
    }
    element.append.apply(element, nodes);
}
function removeChild(parent, child) {
    parent.removeChild(child);
}
function removeChildren(parent) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    var index = children.length;
    if (index) {
        while (index) {
            parent.removeChild(children[--index]);
        }
    }
    else {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    }
}
function addEventListener(el, type, listener, options) {
    el.addEventListener(type, listener, options);
}

var BLUR = "blur";
var CHANGE = "change";
var CLICK = "click";
var DBLCLICK = "dblclick";
var DRAG = "drag";
var DRAGEND = "dragend";
var DRAGENTER = "dragenter";
var DRAGEXIT = "dragexit";
var DRAGLEAVE = "dragleave";
var DRAGOVER = "dragover";
var DRAGSTART = "dragstart";
var DROP = "drop";
var FOCUS = "focus";
var INPUT = "input";
var KEYDOWN = "keydown";
var KEYPRESS = "keypress";
var KEYUP = "keyup";
var LOAD = "load";
var MOUSEDOWN = "mousedown";
var MOUSEENTER = "mouseenter";
var MOUSELEAVE = "mouseleave";
var MOUSEMOVE = "mousemove";
var MOUSEOVER = "mouseover";
var MOUSEUP = "mouseup";
var PAUSE = "pause";
var PLAY = "play";
var RESIZE = "resize";
var SCROLL = "scroll";
var TOUCHCANCEL = "touchcancel";
var TOUCHEND = "touchend";
var TOUCHMOVE = "touchmove";
var TOUCHSTART = "touchstart";
var TRANSITIONCANCEL = "transitioncancel";
var TRANSITIONEND = "transitionend";
var TRANSITIONRUN = "transitionrun";
var TRANSITIONSTART = "transitionstart";
var WHEEL = "wheel";
var ID = "id";
var REL = "rel";
var TYPE = "type";
var CLASS_NAME = "className";
var VALUE = "value";
var CHECKED = "checked";
var DISABLED = "disabled";
var HREF = "href";
var TEXT_CONTENT = "textContent";
var INNER_TEXT = "innerText";
var INNER_HTML = "innerHTML";
var OUTER_HTML = "outerHTML";
var WIDTH = "width";
var HEIGHT = "height";
var PARENT_ELEMENT = "parentElement";
var CLIENT_WIDTH = "clientWidth";
var CLIENT_HEIGHT = "clientHeight";
var OFFSET_X = "offsetX";
var OFFSET_Y = "offsetY";
var TEXT = "text";
var RADIO = "radio";
var CHECKBOX = "checkbox";
var ANCHOR = "a";
var ABBR = "abbr";
var ADDRESS = "address";
var AREA = "area";
var ARTICLE = "article";
var ASIDE = "aside";
var AUDIO = "audio";
var BOLD = "b";
var BDI = "bdi";
var BDO = "bdo";
var BLOCKQUOTE = "blockquote";
var BR = "br";
var BUTTON = "button";
var CANVAS = "canvas";
var CAPTION = "caption";
var CITE = "cite";
var CODE = "code";
var COL = "col";
var COLGROUP = "colgroup";
var DATA = "data";
var DATALIST = "datalist";
var DD = "dd";
var DEL = "del";
var DETAILS = "details";
var DFN = "dfn";
var DIALOG = "dialog";
var DIV = "div";
var DL = "dl";
var DT = "dt";
var EM = "em";
var EMBED = "embed";
var FIELDSET = "fieldset";
var FIGCAPTION = "figcaption";
var FIGURE = "figure";
var FOOTER = "footer";
var FORM = "form";
var H1 = "h1";
var H2 = "h2";
var H3 = "h3";
var H4 = "h4";
var H5 = "h5";
var H6 = "h6";
var HEADER = "header";
var HR = "hr";
var ITALIC = "i";
var IFRAME = "iframe";
var IMG = "img";
var INS = "ins";
var KBD = "kbd";
var LABEL = "label";
var LEGEND = "legend";
var LI = "li";
var LINK = "link";
var MAIN = "main";
var MAP = "map";
var MARK = "mark";
var METER = "meter";
var NAV = "nav";
var NOSCRIPT = "noscript";
var OBJECT = "object";
var OL = "ol";
var OPTGROUP = "optgroup";
var OPTION = "option";
var OUTPUT = "output";
var PARAGRAPH = "p";
var PARAM = "param";
var PICTURE = "picture";
var PRE = "pre";
var PROGRESS = "progress";
var QUOTE = "q";
var SAMP = "samp";
var SECTION = "section";
var SELECT = "select";
var SMALL = "small";
var SOURCE = "source";
var SPAN = "span";
var STRONG = "strong";
var SUB = "sub";
var TEXTAREA = "textarea";
var TABLE = "table";
var THEAD = "thead";
var TBODY = "tbody";
var TFOOT = "tfoot";
var TH = "th";
var TR = "tr";
var TD = "td";
var TIME = "time";
var TRACK = "track";
var UL = "ul";
var VAR = "var";
var VIDEO = "video";

exports.ABBR = ABBR;
exports.ADDRESS = ADDRESS;
exports.ANCHOR = ANCHOR;
exports.AREA = AREA;
exports.ARTICLE = ARTICLE;
exports.ASIDE = ASIDE;
exports.AUDIO = AUDIO;
exports.BDI = BDI;
exports.BDO = BDO;
exports.BLOCKQUOTE = BLOCKQUOTE;
exports.BLUR = BLUR;
exports.BOLD = BOLD;
exports.BR = BR;
exports.BUTTON = BUTTON;
exports.CANVAS = CANVAS;
exports.CAPTION = CAPTION;
exports.CHANGE = CHANGE;
exports.CHECKBOX = CHECKBOX;
exports.CHECKED = CHECKED;
exports.CITE = CITE;
exports.CLASS_NAME = CLASS_NAME;
exports.CLICK = CLICK;
exports.CLIENT_HEIGHT = CLIENT_HEIGHT;
exports.CLIENT_WIDTH = CLIENT_WIDTH;
exports.CODE = CODE;
exports.COL = COL;
exports.COLGROUP = COLGROUP;
exports.DATA = DATA;
exports.DATALIST = DATALIST;
exports.DBLCLICK = DBLCLICK;
exports.DD = DD;
exports.DEL = DEL;
exports.DETAILS = DETAILS;
exports.DFN = DFN;
exports.DIALOG = DIALOG;
exports.DISABLED = DISABLED;
exports.DIV = DIV;
exports.DL = DL;
exports.DRAG = DRAG;
exports.DRAGEND = DRAGEND;
exports.DRAGENTER = DRAGENTER;
exports.DRAGEXIT = DRAGEXIT;
exports.DRAGLEAVE = DRAGLEAVE;
exports.DRAGOVER = DRAGOVER;
exports.DRAGSTART = DRAGSTART;
exports.DROP = DROP;
exports.DT = DT;
exports.EM = EM;
exports.EMBED = EMBED;
exports.FIELDSET = FIELDSET;
exports.FIGCAPTION = FIGCAPTION;
exports.FIGURE = FIGURE;
exports.FOCUS = FOCUS;
exports.FOOTER = FOOTER;
exports.FORM = FORM;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.HEADER = HEADER;
exports.HEIGHT = HEIGHT;
exports.HR = HR;
exports.HREF = HREF;
exports.ID = ID;
exports.IFRAME = IFRAME;
exports.IMG = IMG;
exports.INNER_HTML = INNER_HTML;
exports.INNER_TEXT = INNER_TEXT;
exports.INPUT = INPUT;
exports.INS = INS;
exports.ITALIC = ITALIC;
exports.KBD = KBD;
exports.KEYDOWN = KEYDOWN;
exports.KEYPRESS = KEYPRESS;
exports.KEYUP = KEYUP;
exports.LABEL = LABEL;
exports.LEGEND = LEGEND;
exports.LI = LI;
exports.LINK = LINK;
exports.LOAD = LOAD;
exports.MAIN = MAIN;
exports.MAP = MAP;
exports.MARK = MARK;
exports.METER = METER;
exports.MOUSEDOWN = MOUSEDOWN;
exports.MOUSEENTER = MOUSEENTER;
exports.MOUSELEAVE = MOUSELEAVE;
exports.MOUSEMOVE = MOUSEMOVE;
exports.MOUSEOVER = MOUSEOVER;
exports.MOUSEUP = MOUSEUP;
exports.NAV = NAV;
exports.NOSCRIPT = NOSCRIPT;
exports.OBJECT = OBJECT;
exports.OFFSET_X = OFFSET_X;
exports.OFFSET_Y = OFFSET_Y;
exports.OL = OL;
exports.OPTGROUP = OPTGROUP;
exports.OPTION = OPTION;
exports.OUTER_HTML = OUTER_HTML;
exports.OUTPUT = OUTPUT;
exports.PARAGRAPH = PARAGRAPH;
exports.PARAM = PARAM;
exports.PARENT_ELEMENT = PARENT_ELEMENT;
exports.PAUSE = PAUSE;
exports.PICTURE = PICTURE;
exports.PLAY = PLAY;
exports.PRE = PRE;
exports.PROGRESS = PROGRESS;
exports.QUOTE = QUOTE;
exports.RADIO = RADIO;
exports.REL = REL;
exports.RESIZE = RESIZE;
exports.SAMP = SAMP;
exports.SCROLL = SCROLL;
exports.SECTION = SECTION;
exports.SELECT = SELECT;
exports.SMALL = SMALL;
exports.SOURCE = SOURCE;
exports.SPAN = SPAN;
exports.STRONG = STRONG;
exports.SUB = SUB;
exports.TABLE = TABLE;
exports.TBODY = TBODY;
exports.TD = TD;
exports.TEXT = TEXT;
exports.TEXTAREA = TEXTAREA;
exports.TEXT_CONTENT = TEXT_CONTENT;
exports.TFOOT = TFOOT;
exports.TH = TH;
exports.THEAD = THEAD;
exports.TIME = TIME;
exports.TOUCHCANCEL = TOUCHCANCEL;
exports.TOUCHEND = TOUCHEND;
exports.TOUCHMOVE = TOUCHMOVE;
exports.TOUCHSTART = TOUCHSTART;
exports.TR = TR;
exports.TRACK = TRACK;
exports.TRANSITIONCANCEL = TRANSITIONCANCEL;
exports.TRANSITIONEND = TRANSITIONEND;
exports.TRANSITIONRUN = TRANSITIONRUN;
exports.TRANSITIONSTART = TRANSITIONSTART;
exports.TYPE = TYPE;
exports.UL = UL;
exports.VALUE = VALUE;
exports.VAR = VAR;
exports.VIDEO = VIDEO;
exports.WHEEL = WHEEL;
exports.WIDTH = WIDTH;
exports.addEventListener = addEventListener;
exports.append = append;
exports.createElement = createElement;
exports.removeChild = removeChild;
exports.removeChildren = removeChildren;
