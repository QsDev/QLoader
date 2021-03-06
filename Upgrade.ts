declare var __extends;
var exports: any = {};
var __global: { supportTemplate: boolean, useListenerOrMutation: boolean };
var envirenment: { isBrowser: boolean, isWebWorker: boolean, isOpera: boolean };
var clone: (obj) => any;
var $: (selector, context) => void;
var $defineProperty: (o: any, p: string, attributes: PropertyDescriptor & ThisType<any>, onError?: (o: any, p: string, attributes: PropertyDescriptor & ThisType<any>) => any) => any;
var $bench: (f: () => any, timeSpan: number) => number;
declare var w: Window;
((window: any) => {
    function bench(f, timeSpan) {
        var t = performance.now();
        var i = 0;
        while ((performance.now() - t) < timeSpan) {
            i++;
            f();
        }
        return i;
    }

    $defineProperty = function(o: any, p: string, attributes: PropertyDescriptor & ThisType<any>, onError: (o: any, p: string, attributes: PropertyDescriptor & ThisType<any>) => any): any {
        try {
            return Object.defineProperty(o, p, attributes);
        } catch (e) {
            onError && onError(o, p, attributes);
            return false;
        }
    }
    __global = {
        supportTemplate: (function supportsTemplate() { return 'content' in document.createElement('template'); })(),
        useListenerOrMutation: true
    };



    var __extends1 = function (d, b) {
        $defineProperty(d, 'base', {
            value: b,
            writable: false,
            enumerable: true,
            configurable: false
        });
        for (var p in b) {
            if (p == 'base' || p.indexOf('_') === 0 || p == 'ctor')
                continue;
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        }
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    delete window.__extends;
    
    $defineProperty(window, '__extends', { get: function () { return __extends1 }, set: function () { }, configurable: false, enumerable: false }, (o, p, a) => { __extends = __extends1; });
    var isBrowser: boolean = isBrowser = (!!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document));
    envirenment = <any>{
        isBrowser: isBrowser,
        isWebWorker: !isBrowser && typeof importScripts !== 'undefined',
        isOpera: typeof (window as any).opera !== 'undefined' && (window as any).opera.toString() === '[object Opera]'
    };
    if (!__global.supportTemplate) $defineProperty(HTMLUnknownElement.prototype, 'content', { get: function () { return this; } });
    clone = function (obj) {
        if (!obj) return obj;
        if (typeof obj === 'object') {
            var copy = obj.constructor();
            for (var attr in obj)
                if (obj.hasOwnProperty(attr))
                    copy[attr] = obj[attr];
            return copy;
        }
        else if (obj instanceof Array)
            return obj.splice(0);
        return obj;
    }

    //if ((Object.prototype as any).clone === void 0)
    //    (Object.prototype as any).clone = function (obj) {
    //        for (var i in obj)
    //            this[i] = obj[i];
    //        return this;
    //    }
    function getScrollArea(x:Element) {
        var h = []; var t = x; while (t) {
            var oy = getComputedStyle(t).overflowY;
            if (oy == "auto") return t;
            t = t.parentElement;
        }
    }
    (Element.prototype as any).getScrollArea = function () { return getScrollArea(this); };
    (Object as any).clone = clone;
    if ((Element.prototype as any).scrollIntoViewIfNeeded == void 0)
        (Element.prototype as any).scrollIntoViewIfNeeded = function () {
            var r = this.getBoundingClientRect();
            var v = getScrollArea(this);
            if (!v) {
                this.scrollIntoView({ inline: 'center' });
                return;
            }
            var t = document.body;
            var prRect = (v || t).getBoundingClientRect();
            var chRect = this.getBoundingClientRect();

            var x = new IDBDatabase();
            
            if (prRect.top - r.top > 0)
                v.scrollTop -= prRect.top - r.top;
            else if (prRect.bottom < r.bottom)
                v.scrollTop -= prRect.bottom - r.bottom;
            //var maxTop = prRect.top + prRect.height - chRect.height;
            //if (!v) {
            //    v.scrollIntoView({ inline: 'center' });
            //    return;
            //}
            //else if (chRect.top - chRect.height < prRect.top) {
            //    v.scrollTop += chRect.top - chRect.height;
            //}
            //else if (chRect.bottom > prRect.bottom)
            //    v.scrollTop += chRect.top - chRect.height - prRect.top;
        }
    if ((String.prototype as any).endsWith === void 0)
        (String.prototype as any).endsWith = function (suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    if ((String.prototype as any).startsWith === void 0)
        (String.prototype as any).startsWith = function (suffix) {
            return this.indexOf(suffix) === 0;
        };
    if ((HTMLElement.prototype as any).remove === void 0) {
        (HTMLElement.prototype as any).remove = function () {
            this.removeNode(true);
        };
    }
    if ((HTMLElement.prototype as any).parent === void 0) {
        (HTMLElement.prototype as any).parent = function () {
            return this.parentElement || this.parentNode;
        };
    }
    (HTMLElement.prototype as any).insertChildAtIndex = function (v, i) {
        var c = this.children.length;
        if (i < c)
            this.insertBefore(v, this.children.item(i));
        else
            this.appendChild(v);
    }


    $ = function (selector, context) {
        var b = document.body;
        var d = document;
        context = context === d ? b : context || b;
        //if (!b.contains(context)) throw "";
        var o = context === b;
        var s = selector[0] || '';
        if (s === '#') {
            if (o) return document.getElementById(selector.substr(1));
            return getElementById(selector.substr(1), context);
        }
        if (s === '.') {
            if (o) return document.getElementsByClassName(selector.substr(1));
            return getElementByClassName(selector.substr(1), context);
        }
        if (s === '[')
            return getElementByAttribute(selector.substr(1, selector.length - 2), context);


        if (o) return document.getElementsByTagName(selector);
        return getElementByTagName(selector, context);
    }

    function getElementById(id, context) {
        if (context instanceof HTMLElement) {
            if (id === context.id) return context;
            return _getElementById(id, context);
        }
        if (context instanceof Element)
            return context.id == id ? context : undefined;
        return undefined;
    }
    function _getElementById(id, cntxt) {
        const t = new Array(1000);
        t[0] = cntxt;
        var it = 0;
        while (it >= 0) {
            var root = t[it--];
            for (var i = 0, l = root.children.length; i < l; i++) {
                var child = root.children[i];
                if (child.id === id) return child;
                if (child instanceof HTMLElement)
                    t[++it] = child;
            }
        }
    }

    function getElementByTagName(tag, context) {
        tag = tag.toUpperCase();
        if (context instanceof HTMLElement)
            return _getElementByTagName(tag, context);

        if (context instanceof Element)
            return context.tagName === tag ? [context] : [];
        return [];
    }
    function _getElementByTagName(tag, cntxt) {
        var t = new Array(1000);
        if (tag === cntxt.tagName) var ret = [cntxt];
        else ret = [];
        t[0] = cntxt;
        var it = 0;
        while (it >= 0) {
            var root = t[it--];
            for (var i = 0, l = root.children.length; i < l; i++) {
                var child = root.children[i];
                if (child.tagName === tag) ret.push(child);
                if (child instanceof HTMLElement)
                    t[++it] = child;
            }
        }
        return ret;
    }

    function getElementByClassName(tag, context) {
        if (context instanceof HTMLElement)
            return _getElementByClassName(tag, context);
        if (context instanceof Element)
            return context.classList.contains(tag) ? [context] : [];
        return [];
    }
    function _getElementByClassName(tag, cntxt) {
        var t = new Array(1000);
        t[0] = cntxt;
        var it = 0;
        if (cntxt.classList.contains(tag)) var ret = [cntxt];
        else ret = [];
        while (it >= 0) {
            var root = t[it--];
            for (var i = 0, l = root.children.length; i < l; i++) {
                var child = root.children[i];
                if (child.classList.contains(tag))
                    ret.push(child);
                if (child instanceof HTMLElement)
                    t[++it] = child;
            }
        }
        return ret;
    }

    function getElementByAttribute(tag, context) {
        if (context instanceof HTMLElement)
            return _getElementByAttribute(tag, context);

        if (context instanceof Element)
            return context.hasAttribute(tag) ? [context] : [];
        return [];
    }
    function _getElementByAttribute(tag, cntxt) {
        var t = new Array(1000);
        if (cntxt.hasAttribute(tag)) var ret = [cntxt];
        else ret = [];
        t[0] = cntxt;
        var it = 0;
        while (it >= 0) {
            var root = t[it--];
            for (var i = 0, l = root.children.length; i < l; i++) {
                var child = root.children[i];
                if (child.hasAttribute(tag)) ret.push(child);
                if (child instanceof HTMLElement)
                    t[++it] = child;
            }
        }
        return ret;
    }


    if (!DocumentFragment.prototype.hasOwnProperty('firstElementChild'))
        $defineProperty(DocumentFragment.prototype, 'firstElementChild', {
            get: function () {
                var c = this.children || this.childNodes;

                for (var i = 0; i < c.length; i++)
                    if (c[i] instanceof Element)
                        return c[i];
                return null;
            },
            configurable: false,
        });


    function test(fn, iter) {
        var t = Date.now();
        iter = iter || 200000;
        for (var i = 0; i < iter; i++) {
            fn();
        }
        return Date.now() - t;
    }

    if (typeof DOMParser === 'undefined')
        window.DOMParser = function DOMParser() {
            this.parseFromString = function (markup, type) {
                if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
                    var
                        doc = document.implementation.createHTMLDocument("")
                        ;
                    if (markup.toLowerCase().indexOf('<!doctype') > -1) {
                        doc.documentElement.innerHTML = markup;
                    }
                    else {
                        doc.body.innerHTML = markup;
                    }
                    return doc;
                } else {
                    return (window as any).DOMParser.prototype.nativeParse.apply(this, arguments);
                }
            };
            (function (DOMParser) {
                "use strict";

                var proto = DOMParser.prototype,
                    nativeParse = proto.parseFromString;


                try {
                    if ((new DOMParser()).parseFromString("", "text/html")) {
                        return;
                    }
                } catch (ex) { }

                proto.parseFromString = function (markup, type) {
                    if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
                        var
                            doc = document.implementation.createHTMLDocument("")
                            ;
                        if (markup.toLowerCase().indexOf('<!doctype') > -1) {
                            doc.documentElement.innerHTML = markup;
                        }
                        else {
                            doc.body.innerHTML = markup;
                        }
                        return doc;
                    } else {
                        return nativeParse.apply(this, arguments);
                    }
                };
            })(DOMParser)
        };

    var s;
    window.stop = function stop() {
        if (s)
            debugger;
    }

    if (typeof localStorage === 'undefined') {
        var str = {};
        window.localStorage = {
            setItem: function (a, b) { str[a] = b; },
            getItem: function (a) { return str[a]; },
            clear: function () { },
            key: function (i: number) { return str[i]; },
            length: 0,
            removeItem: (a) => { }
        };
    }

})(window);
