var e=function(){function e(e){this.dom=document.createElement(e)}return e.prototype.append=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];for(var r=t.length;r--;)t[r]instanceof e&&(t[r]=t[r].dom);return this.dom.append.apply(this.dom,t),this},e.prototype.attrs=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var o=0;o<e.length;++o)this.dom.setAttribute(e[o],e[++o]);return this},e.prototype.props=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var o=0;o<e.length;++o)this.dom[e[o]]=e[++o];return this},e.prototype.on=function(e,t,o){return this.dom.addEventListener(e,t,o),this},e}();function t(t){return new e(t)}var o="id",r="value",a="class",n="type",i="style",s="text",d="radio",l="checkbox",c="id",u="type",p="className",h="value",m="checked",g="disabled",f="blur",v="change",b="click",y="dblclick",k="drag",x="dragend",w="dragenter",q="dragexit",E="dragleave",j="dragover",z="dragstart",A="drop",L="focus",N="input",B="keydown",C="keypress",D="keyup",F="load",G="mousedown",H="mouseenter",I="mouseleave",J="mousemove",K="mouseover",M="mouseup",O="pause",P="play",Q="progress",R="resize",S="scroll",T="touchcancel",U="touchend",V="touchmove",W="touchstart",X="transitioncancel",Y="transitionend",Z="transitionrun",$="transitionstart",_="wheel",ee="a",te="abbr",oe="address",re="area",ae="article",ne="aside",ie="audio",se="b",de="bdi",le="bdo",ce="blockquote",ue="br",pe="button",he="canvas",me="caption",ge="cite",fe="code",ve="col",be="colgroup",ye="data",ke="datalist",xe="dd",we="del",qe="details",Ee="dfn",je="dialog",ze="div",Ae="dl",Le="dt",Ne="em",Be="embed",Ce="fieldset",De="figcaption",Fe="figure",Ge="footer",He="form",Ie="h1",Je="h2",Ke="h3",Me="h4",Oe="h5",Pe="h6",Qe="header",Re="hr",Se="i",Te="iframe",Ue="img",Ve="input",We="ins",Xe="kbd",Ye="label",Ze="legend",$e="li",_e="link",et="main",tt="map",ot="mark",rt="meter",at="nav",nt="noscript",it="object",st="ol",dt="optgroup",lt="option",ct="output",ut="p",pt="param",ht="picture",mt="pre",gt="progress",ft="q",vt="samp",bt="section",yt="select",kt="small",xt="source",wt="span",qt="strong",Et="sub",jt="textarea",zt="table",At="thead",Lt="tbody",Nt="tfoot",Bt="th",Ct="tr",Dt="td",Ft="time",Gt="track",Ht="ul",It="var",Jt="video";export{t as $,a as ATTR_CLASS,o as ATTR_ID,i as ATTR_STYLE,n as ATTR_TYPE,r as ATTR_VALUE,f as EVENT_TYPE_BLUR,v as EVENT_TYPE_CHANGE,b as EVENT_TYPE_CLICK,y as EVENT_TYPE_DBLCLICK,k as EVENT_TYPE_DRAG,x as EVENT_TYPE_DRAGEND,w as EVENT_TYPE_DRAGENTER,q as EVENT_TYPE_DRAGEXIT,E as EVENT_TYPE_DRAGLEAVE,j as EVENT_TYPE_DRAGOVER,z as EVENT_TYPE_DRAGSTART,A as EVENT_TYPE_DROP,L as EVENT_TYPE_FOCUS,N as EVENT_TYPE_INPUT,B as EVENT_TYPE_KEYDOWN,C as EVENT_TYPE_KEYPRESS,D as EVENT_TYPE_KEYUP,F as EVENT_TYPE_LOAD,G as EVENT_TYPE_MOUSEDOWN,H as EVENT_TYPE_MOUSEENTER,I as EVENT_TYPE_MOUSELEAVE,J as EVENT_TYPE_MOUSEMOVE,K as EVENT_TYPE_MOUSEOVER,M as EVENT_TYPE_MOUSEUP,O as EVENT_TYPE_PAUSE,P as EVENT_TYPE_PLAY,Q as EVENT_TYPE_PROGRESS,R as EVENT_TYPE_RESIZE,S as EVENT_TYPE_SCROLL,T as EVENT_TYPE_TOUCHCANCEL,U as EVENT_TYPE_TOUCHEND,V as EVENT_TYPE_TOUCHMOVE,W as EVENT_TYPE_TOUCHSTART,X as EVENT_TYPE_TRANSITIONCANCEL,Y as EVENT_TYPE_TRANSITIONEND,Z as EVENT_TYPE_TRANSITIONRUN,$ as EVENT_TYPE_TRANSITIONSTART,_ as EVENT_TYPE_WHEEL,l as INPUT_TYPE_CHECKBOX,d as INPUT_TYPE_RADIO,s as INPUT_TYPE_TEXT,m as PROP_CHECKED,p as PROP_CLASS,g as PROP_DISABLED,c as PROP_ID,u as PROP_TYPE,h as PROP_VALUE,te as TAG_NAME_ABBR,oe as TAG_NAME_ADDRESS,ee as TAG_NAME_ANCHOR,re as TAG_NAME_AREA,ae as TAG_NAME_ARTICLE,ne as TAG_NAME_ASIDE,ie as TAG_NAME_AUDIO,de as TAG_NAME_BDI,le as TAG_NAME_BDO,ce as TAG_NAME_BLOCKQUOTE,se as TAG_NAME_BOLD,ue as TAG_NAME_BR,pe as TAG_NAME_BUTTON,he as TAG_NAME_CANVAS,me as TAG_NAME_CAPTION,ge as TAG_NAME_CITE,fe as TAG_NAME_CODE,ve as TAG_NAME_COL,be as TAG_NAME_COLGROUP,ye as TAG_NAME_DATA,ke as TAG_NAME_DATALIST,xe as TAG_NAME_DD,we as TAG_NAME_DEL,qe as TAG_NAME_DETAILS,Ee as TAG_NAME_DFN,je as TAG_NAME_DIALOG,ze as TAG_NAME_DIV,Ae as TAG_NAME_DL,Le as TAG_NAME_DT,Ne as TAG_NAME_EM,Be as TAG_NAME_EMBED,Ce as TAG_NAME_FIELDSET,De as TAG_NAME_FIGCAPTION,Fe as TAG_NAME_FIGURE,Ge as TAG_NAME_FOOTER,He as TAG_NAME_FORM,Ie as TAG_NAME_H1,Je as TAG_NAME_H2,Ke as TAG_NAME_H3,Me as TAG_NAME_H4,Oe as TAG_NAME_H5,Pe as TAG_NAME_H6,Qe as TAG_NAME_HEADER,Re as TAG_NAME_HR,Te as TAG_NAME_IFRAME,Ue as TAG_NAME_IMG,Ve as TAG_NAME_INPUT,We as TAG_NAME_INS,Se as TAG_NAME_ITALIC,Xe as TAG_NAME_KBD,Ye as TAG_NAME_LABEL,Ze as TAG_NAME_LEGEND,$e as TAG_NAME_LI,_e as TAG_NAME_LINK,et as TAG_NAME_MAIN,tt as TAG_NAME_MAP,ot as TAG_NAME_MARK,rt as TAG_NAME_METER,at as TAG_NAME_NAV,nt as TAG_NAME_NOSCRIPT,it as TAG_NAME_OBJECT,st as TAG_NAME_OL,dt as TAG_NAME_OPTGROUP,lt as TAG_NAME_OPTION,ct as TAG_NAME_OUTPUT,ut as TAG_NAME_PARAGRAPH,pt as TAG_NAME_PARAM,ht as TAG_NAME_PICTURE,mt as TAG_NAME_PRE,gt as TAG_NAME_PROGRESS,ft as TAG_NAME_QUOTE,vt as TAG_NAME_SAMP,bt as TAG_NAME_SECTION,yt as TAG_NAME_SELECT,kt as TAG_NAME_SMALL,xt as TAG_NAME_SOURCE,wt as TAG_NAME_SPAN,qt as TAG_NAME_STRONG,Et as TAG_NAME_SUB,zt as TAG_NAME_TABLE,Lt as TAG_NAME_TBODY,Dt as TAG_NAME_TD,jt as TAG_NAME_TEXTAREA,Nt as TAG_NAME_TFOOT,Bt as TAG_NAME_TH,At as TAG_NAME_THEAD,Ft as TAG_NAME_TIME,Ct as TAG_NAME_TR,Gt as TAG_NAME_TRACK,Ht as TAG_NAME_UL,It as TAG_NAME_VAR,Jt as TAG_NAME_VIDEO};
