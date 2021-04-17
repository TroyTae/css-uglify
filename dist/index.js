'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createElement(tagName, builder) {
    var element = document.createElement(tagName);
    if (builder) {
        builder(element);
    }
    return element;
}
function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

function createObserver(initialValue) {
    var key = 0;
    var value = initialValue;
    var subscribers = {};
    return [
        function getValue() {
            return value;
        },
        function setValue(newValue) {
            value = newValue;
            for (var k in subscribers) {
                subscribers[k](value);
            }
        },
        function subscribeValue(callback) {
            subscribers[key] = callback;
            return key++;
        },
        function unsubscribeValue(listenerKey) {
            delete subscribers[listenerKey];
        },
    ];
}

exports.createElement = createElement;
exports.createObserver = createObserver;
exports.removeChildren = removeChildren;
