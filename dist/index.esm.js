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

export { ABBR, ADDRESS, ANCHOR, AREA, ARTICLE, ASIDE, AUDIO, BDI, BDO, BLOCKQUOTE, BLUR, BOLD, BR, BUTTON, CANVAS, CAPTION, CHANGE, CHECKBOX, CHECKED, CITE, CLASS_NAME, CLICK, CODE, COL, COLGROUP, DATA, DATALIST, DBLCLICK, DD, DEL, DETAILS, DFN, DIALOG, DISABLED, DIV, DL, DRAG, DRAGEND, DRAGENTER, DRAGEXIT, DRAGLEAVE, DRAGOVER, DRAGSTART, DROP, DT, EM, EMBED, FIELDSET, FIGCAPTION, FIGURE, FOCUS, FOOTER, FORM, H1, H2, H3, H4, H5, H6, HEADER, HR, HREF, ID, IFRAME, IMG, INNER_HTML, INNER_TEXT, INPUT, INS, ITALIC, KBD, KEYDOWN, KEYPRESS, KEYUP, LABEL, LEGEND, LI, LINK, LOAD, MAIN, MAP, MARK, METER, MOUSEDOWN, MOUSEENTER, MOUSELEAVE, MOUSEMOVE, MOUSEOVER, MOUSEUP, NAV, NOSCRIPT, OBJECT, OL, OPTGROUP, OPTION, OUTER_HTML, OUTPUT, PARAGRAPH, PARAM, PAUSE, PICTURE, PLAY, PRE, PROGRESS, QUOTE, RADIO, REL, RESIZE, SAMP, SCROLL, SECTION, SELECT, SMALL, SOURCE, SPAN, STRONG, SUB, TABLE, TBODY, TD, TEXT, TEXTAREA, TEXT_CONTENT, TFOOT, TH, THEAD, TIME, TOUCHCANCEL, TOUCHEND, TOUCHMOVE, TOUCHSTART, TR, TRACK, TRANSITIONCANCEL, TRANSITIONEND, TRANSITIONRUN, TRANSITIONSTART, TYPE, UL, VALUE, VAR, VIDEO, WHEEL, addEventListener, append, createElement, removeChild, removeChildren };
