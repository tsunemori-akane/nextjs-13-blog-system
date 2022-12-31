"use strict";
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 1711:
/***/ ((module) => {


function e(r) {
    var o, t, f = "";
    if ("string" == typeof r || "number" == typeof r) f += r;
    else if ("object" == typeof r) if (Array.isArray(r)) for(o = 0; o < r.length; o++)r[o] && (t = e(r[o])) && (f && (f += " "), f += t);
    else for(o in r)r[o] && (f && (f += " "), f += o);
    return f;
}
function r() {
    for(var r, o, t = 0, f = ""; t < arguments.length;)(r = arguments[t++]) && (o = e(r)) && (f && (f += " "), f += o);
    return f;
}
module.exports = r, module.exports.clsx = r;


/***/ }),

/***/ 2269:
/***/ (() => {


// UNUSED EXPORTS: guards, isType, pick

;// CONCATENATED MODULE: ./node_modules/@contentlayer/client/dist/guards.js

const fileName_1 = "packages/@contentlayer/client/src/guards.ts";
function is(typeName, _) {
    if (_) {
        if (Array.isArray(typeName)) {
            // TODO make type field name dynamic (probably will require to code-gen the guard function)
            return typeName.some((typeName_)=>_?.type === typeName_);
        } else {
            return typeName === _?.type;
        }
    } else {
        return (_)=>is(typeName, _);
    }
}
const isType = (/* unused pure expression or super */ null && (is));
const guards = {
    is,
    // isType,
    // hasAllFields,
    // allFields,
    hasField
};
function hasField(_, property) {
    return _.hasOwnProperty(property);
} //# sourceMappingURL=guards.js.map

;// CONCATENATED MODULE: ./node_modules/@contentlayer/client/dist/index.js

 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/contentlayer/dist/client/index.js
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 1313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useMDXComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3402);
/* harmony import */ var _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7588);

const fileName_1 = "packages/next-contentlayer/src/hooks/useMDXComponent.ts";
// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503

// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503

// @ts-expect-error React version workaround (This CJS workaround can be removed once Contentlayer is only targeting React 18+)

const getMDXComponent = (code, globals = {})=>{
    const scope = {
        React: react__WEBPACK_IMPORTED_MODULE_0__,
        ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__,
        _jsx_runtime: _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__/* ._jsx_runtime */ .i,
        ...globals
    };
    const fn = new Function(...Object.keys(scope), code);
    return fn(...Object.values(scope)).default;
};
const useMDXComponent = (code, globals = {})=>{
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>getMDXComponent(code, globals), [
        code,
        globals
    ]);
}; //# sourceMappingURL=useMDXComponent.js.map


/***/ }),

/***/ 415:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __webpack_require__(7311);
var _staticGenerationAsyncStorage = __webpack_require__(683);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage && "getStore" in _staticGenerationAsyncStorage.staticGenerationAsyncStorage ? _staticGenerationAsyncStorage.staticGenerationAsyncStorage == null ? void 0 : _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore() : _staticGenerationAsyncStorage.staticGenerationAsyncStorage;
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 9509:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(5468);
var _appRouterContext = __webpack_require__(4056);
var _hooksClientContext = __webpack_require__(698);
var _bailoutToClientRendering = __webpack_require__(415);
var _serverInsertedHtml = __webpack_require__(5350);
var _redirect = __webpack_require__(4615);
var _notFound = __webpack_require__(3164);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        // Since `new Headers` uses `this.append()` to fill the headers object ReadonlyHeaders can't extend from Headers directly as it would throw.
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    const readonlySearchParams = (0, _react).useMemo(()=>{
        return new ReadonlyURLSearchParams(searchParams || new URLSearchParams());
    }, [
        searchParams
    ]);
    if ((0, _bailoutToClientRendering).bailoutToClientRendering()) {
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        return readonlySearchParams;
    }
    if (!searchParams) {
        throw new Error("invariant expected search params to be mounted");
    }
    return readonlySearchParams;
}
function usePathname() {
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 3164:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.NOT_FOUND_ERROR_CODE = void 0;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
exports.NOT_FOUND_ERROR_CODE = NOT_FOUND_ERROR_CODE;
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 4615:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.REDIRECT_ERROR_CODE = void 0;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
exports.REDIRECT_ERROR_CODE = REDIRECT_ERROR_CODE;
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + url;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 3372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/cal/front_end/unname/my-blog/node_modules/next/dist/client/image.js");
 //# sourceMappingURL=image.js.map


/***/ }),

/***/ 6259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/cal/front_end/unname/my-blog/node_modules/next/dist/client/link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 4056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/cal/front_end/unname/my-blog/node_modules/next/dist/shared/lib/app-router-context.js");
 //# sourceMappingURL=app-router-context.js.map


/***/ }),

/***/ 7311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/cal/front_end/unname/my-blog/node_modules/next/dist/shared/lib/dynamic-no-ssr.js");
 //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/cal/front_end/unname/my-blog/node_modules/next/dist/shared/lib/hooks-client-context.js");
 //# sourceMappingURL=hooks-client-context.js.map


/***/ }),

/***/ 5350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/cal/front_end/unname/my-blog/node_modules/next/dist/shared/lib/server-inserted-html.js");
 //# sourceMappingURL=server-inserted-html.js.map


/***/ }),

/***/ 634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(3372);


/***/ }),

/***/ 2890:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(6259);


/***/ }),

/***/ 5560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(9509);


/***/ }),

/***/ 5313:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

function r() {
    for(var r, o, t = 0, n = ""; t < arguments.length;)(r = arguments[t++]) && (o = e(r)) && (n && (n += " "), n += o);
    return n;
}
function e(r) {
    if ("string" == typeof r) return r;
    for(var o, t = "", n = 0; n < r.length; n++)r[n] && (o = e(r[n])) && (t && (t += " "), t += o);
    return t;
}
function o() {
    return o = Object.assign ? Object.assign.bind() : function(r) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var t in o)Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
        }
        return r;
    }, o.apply(this, arguments);
}
function t(r) {
    if (r < 1) return {
        get: function() {},
        set: function() {}
    };
    var e = 0, o = new Map, t = new Map;
    function n(n, i) {
        o.set(n, i), ++e > r && (e = 0, t = o, o = new Map);
    }
    return {
        get: function(r) {
            var e = o.get(r);
            return void 0 !== e ? e : void 0 !== (e = t.get(r)) ? (n(r, e), e) : void 0;
        },
        set: function(r, e) {
            o.has(r) ? o.set(r, e) : n(r, e);
        }
    };
}
function n(r) {
    var e = function(r) {
        var e = r.theme, o = r.prefix, t = {
            nextPart: new Map,
            validators: []
        };
        return (function(r, e) {
            return e ? r.map(function(r) {
                return [
                    r[0],
                    r[1].map(function(r) {
                        return "string" == typeof r ? e + r : "object" == typeof r ? Object.fromEntries(Object.entries(r).map(function(r) {
                            return [
                                e + r[0],
                                r[1]
                            ];
                        })) : r;
                    })
                ];
            }) : r;
        })(Object.entries(r.classGroups), o).forEach(function(r) {
            l(r[1], t, r[0], e);
        }), t;
    }(r);
    return {
        getClassGroupId: function(r) {
            var o = r.split("-");
            return "" === o[0] && 1 !== o.length && o.shift(), i(o, e) || function(r) {
                if (a.test(r)) {
                    var e = a.exec(r)[1], o = null == e ? void 0 : e.substring(0, e.indexOf(":"));
                    if (o) return "arbitrary.." + o;
                }
            }(r);
        },
        getConflictingClassGroupIds: function(e) {
            return r.conflictingClassGroups[e] || [];
        }
    };
}
function i(r, e) {
    var o;
    if (0 === r.length) return e.classGroupId;
    var t = e.nextPart.get(r[0]), n = t ? i(r.slice(1), t) : void 0;
    if (n) return n;
    if (0 !== e.validators.length) {
        var a = r.join("-");
        return null == (o = e.validators.find(function(r) {
            return (0, r.validator)(a);
        })) ? void 0 : o.classGroupId;
    }
}
__webpack_unused_export__ = ({
    value: !0
});
var a = /^\[(.+)\]$/;
function l(r, e, o, t) {
    r.forEach(function(r) {
        if ("string" != typeof r) {
            if ("function" == typeof r) return r.isThemeGetter ? void l(r(t), e, o, t) : void e.validators.push({
                validator: r,
                classGroupId: o
            });
            Object.entries(r).forEach(function(r) {
                l(r[1], s(e, r[0]), o, t);
            });
        } else ("" === r ? e : s(e, r)).classGroupId = o;
    });
}
function s(r, e) {
    var o = r;
    return e.split("-").forEach(function(r) {
        o.nextPart.has(r) || o.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), o = o.nextPart.get(r);
    }), o;
}
function c(r) {
    var e = r.separator || ":";
    return function(r) {
        for(var o = 0, t = [], n = 0, i = 0; i < r.length; i++){
            var a = r[i];
            0 === o && a === e[0] && (1 !== e.length && r.slice(i, i + e.length) !== e || (t.push(r.slice(n, i)), n = i + e.length)), "[" === a ? o++ : "]" === a && o--;
        }
        var l = 0 === t.length ? r : r.substring(n), s = l.startsWith("!");
        return {
            modifiers: t,
            hasImportantModifier: s,
            baseClassName: s ? l.substring(1) : l
        };
    };
}
function d(r) {
    return o({
        cache: t(r.cacheSize),
        splitModifiers: c(r)
    }, n(r));
}
var u = /\s+/;
function p(r, e) {
    var o = e.splitModifiers, t = e.getClassGroupId, n = e.getConflictingClassGroupIds, i = new Set;
    return r.trim().split(u).map(function(r) {
        var e = o(r), n = e.modifiers, i = e.hasImportantModifier, a = t(e.baseClassName);
        if (!a) return {
            isTailwindClass: !1,
            originalClassName: r
        };
        var l = (function(r) {
            if (r.length <= 1) return r;
            var e = [], o = [];
            return r.forEach(function(r) {
                "[" === r[0] ? (e.push.apply(e, o.sort().concat([
                    r
                ])), o = []) : o.push(r);
            }), e.push.apply(e, o.sort()), e;
        })(n).join(":");
        return {
            isTailwindClass: !0,
            modifierId: i ? l + "!" : l,
            classGroupId: a,
            originalClassName: r
        };
    }).reverse().filter(function(r) {
        if (!r.isTailwindClass) return !0;
        var e = r.modifierId, o = r.classGroupId, t = e + o;
        return !i.has(t) && (i.add(t), n(o).forEach(function(r) {
            return i.add(e + r);
        }), !0);
    }).reverse().map(function(r) {
        return r.originalClassName;
    }).join(" ");
}
function b() {
    for(var e = arguments.length, o = new Array(e), t = 0; t < e; t++)o[t] = arguments[t];
    var n, i, a, l = s;
    function s(r) {
        var e = o[0], t = o.slice(1).reduce(function(r, e) {
            return e(r);
        }, e());
        return n = d(t), i = n.cache.get, a = n.cache.set, l = c, c(r);
    }
    function c(r) {
        var e = i(r);
        if (e) return e;
        var o = p(r, n);
        return a(r, o), o;
    }
    return function() {
        return l(r.apply(null, arguments));
    };
}
function f(r) {
    var e = function(e) {
        return e[r] || [];
    };
    return e.isThemeGetter = !0, e;
}
var g = /^\[(.+)\]$/, m = /^\d+\/\d+$/, v = new Set([
    "px",
    "full",
    "screen"
]), h = /^(\d+)?(xs|sm|md|lg|xl)$/, y = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/, x = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function w(r) {
    return !Number.isNaN(Number(r)) || v.has(r) || m.test(r) || k(r);
}
function k(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && (o.startsWith("length:") || y.test(o));
}
function z(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && o.startsWith("size:");
}
function j(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && o.startsWith("position:");
}
function C(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && (o.startsWith("url(") || o.startsWith("url:"));
}
function G(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && (!Number.isNaN(Number(o)) || o.startsWith("number:"));
}
function I(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return Number.isInteger(Number(o || r));
}
function N(r) {
    return g.test(r);
}
function A() {
    return !0;
}
function M(r) {
    return h.test(r);
}
function O(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && x.test(o);
}
var S = {
    __proto__: null,
    isLength: w,
    isArbitraryLength: k,
    isArbitrarySize: z,
    isArbitraryPosition: j,
    isArbitraryUrl: C,
    isArbitraryNumber: G,
    isArbitraryWeight: G,
    isInteger: I,
    isArbitraryValue: N,
    isAny: A,
    isTshirtSize: M,
    isArbitraryShadow: O
};
function P() {
    var r = f("colors"), e = f("spacing"), o = f("blur"), t = f("brightness"), n = f("borderColor"), i = f("borderRadius"), a = f("borderSpacing"), l = f("borderWidth"), s = f("contrast"), c = f("grayscale"), d = f("hueRotate"), u = f("invert"), p = f("gap"), b = f("gradientColorStops"), g = f("inset"), m = f("margin"), v = f("opacity"), h = f("padding"), y = f("saturate"), x = f("scale"), S = f("sepia"), P = f("skew"), W = f("space"), T = f("translate"), E = function() {
        return [
            "auto",
            e
        ];
    }, _ = function() {
        return [
            "",
            w
        ];
    }, R = function() {
        return [
            "auto",
            I
        ];
    }, $ = function() {
        return [
            "",
            "0",
            N
        ];
    };
    return {
        cacheSize: 500,
        theme: {
            colors: [
                A
            ],
            spacing: [
                w
            ],
            blur: [
                "none",
                "",
                M,
                k
            ],
            brightness: [
                I
            ],
            borderColor: [
                r
            ],
            borderRadius: [
                "none",
                "",
                "full",
                M,
                k
            ],
            borderSpacing: [
                e
            ],
            borderWidth: _(),
            contrast: [
                I
            ],
            grayscale: $(),
            hueRotate: [
                I
            ],
            invert: $(),
            gap: [
                e
            ],
            gradientColorStops: [
                r
            ],
            inset: E(),
            margin: E(),
            opacity: [
                I
            ],
            padding: [
                e
            ],
            saturate: [
                I
            ],
            scale: [
                I
            ],
            sepia: $(),
            skew: [
                I,
                N
            ],
            space: [
                e
            ],
            translate: [
                e
            ]
        },
        classGroups: {
            aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        N
                    ]
                }
            ],
            container: [
                "container"
            ],
            columns: [
                {
                    columns: [
                        M
                    ]
                }
            ],
            "break-after": [
                {
                    "break-after": [
                        "auto",
                        "avoid",
                        "all",
                        "avoid-page",
                        "page",
                        "left",
                        "right",
                        "column"
                    ]
                }
            ],
            "break-before": [
                {
                    "break-before": [
                        "auto",
                        "avoid",
                        "all",
                        "avoid-page",
                        "page",
                        "left",
                        "right",
                        "column"
                    ]
                }
            ],
            "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden"
            ],
            float: [
                {
                    float: [
                        "right",
                        "left",
                        "none"
                    ]
                }
            ],
            clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none"
                    ]
                }
            ],
            isolation: [
                "isolate",
                "isolation-auto"
            ],
            "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            "object-position": [
                {
                    object: [].concat([
                        "bottom",
                        "center",
                        "left",
                        "left-bottom",
                        "left-top",
                        "right",
                        "right-bottom",
                        "right-top",
                        "top"
                    ], [
                        N
                    ])
                }
            ],
            overflow: [
                {
                    overflow: [
                        "auto",
                        "hidden",
                        "clip",
                        "visible",
                        "scroll"
                    ]
                }
            ],
            "overflow-x": [
                {
                    "overflow-x": [
                        "auto",
                        "hidden",
                        "clip",
                        "visible",
                        "scroll"
                    ]
                }
            ],
            "overflow-y": [
                {
                    "overflow-y": [
                        "auto",
                        "hidden",
                        "clip",
                        "visible",
                        "scroll"
                    ]
                }
            ],
            overscroll: [
                {
                    overscroll: [
                        "auto",
                        "contain",
                        "none"
                    ]
                }
            ],
            "overscroll-x": [
                {
                    "overscroll-x": [
                        "auto",
                        "contain",
                        "none"
                    ]
                }
            ],
            "overscroll-y": [
                {
                    "overscroll-y": [
                        "auto",
                        "contain",
                        "none"
                    ]
                }
            ],
            position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            inset: [
                {
                    inset: [
                        g
                    ]
                }
            ],
            "inset-x": [
                {
                    "inset-x": [
                        g
                    ]
                }
            ],
            "inset-y": [
                {
                    "inset-y": [
                        g
                    ]
                }
            ],
            top: [
                {
                    top: [
                        g
                    ]
                }
            ],
            right: [
                {
                    right: [
                        g
                    ]
                }
            ],
            bottom: [
                {
                    bottom: [
                        g
                    ]
                }
            ],
            left: [
                {
                    left: [
                        g
                    ]
                }
            ],
            visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            z: [
                {
                    z: [
                        I
                    ]
                }
            ],
            basis: [
                {
                    basis: [
                        e
                    ]
                }
            ],
            "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            "flex-wrap": [
                {
                    flex: [
                        "wrap",
                        "wrap-reverse",
                        "nowrap"
                    ]
                }
            ],
            flex: [
                {
                    flex: [
                        "1",
                        "auto",
                        "initial",
                        "none",
                        N
                    ]
                }
            ],
            grow: [
                {
                    grow: $()
                }
            ],
            shrink: [
                {
                    shrink: $()
                }
            ],
            order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        I
                    ]
                }
            ],
            "grid-cols": [
                {
                    "grid-cols": [
                        A
                    ]
                }
            ],
            "col-start-end": [
                {
                    col: [
                        "auto",
                        {
                            span: [
                                I
                            ]
                        }
                    ]
                }
            ],
            "col-start": [
                {
                    "col-start": R()
                }
            ],
            "col-end": [
                {
                    "col-end": R()
                }
            ],
            "grid-rows": [
                {
                    "grid-rows": [
                        A
                    ]
                }
            ],
            "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                I
                            ]
                        }
                    ]
                }
            ],
            "row-start": [
                {
                    "row-start": R()
                }
            ],
            "row-end": [
                {
                    "row-end": R()
                }
            ],
            "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            "auto-cols": [
                {
                    "auto-cols": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        N
                    ]
                }
            ],
            "auto-rows": [
                {
                    "auto-rows": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        N
                    ]
                }
            ],
            gap: [
                {
                    gap: [
                        p
                    ]
                }
            ],
            "gap-x": [
                {
                    "gap-x": [
                        p
                    ]
                }
            ],
            "gap-y": [
                {
                    "gap-y": [
                        p
                    ]
                }
            ],
            "justify-content": [
                {
                    justify: [
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly"
                    ]
                }
            ],
            "justify-items": [
                {
                    "justify-items": [
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            "justify-self": [
                {
                    "justify-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            "align-content": [
                {
                    content: [].concat([
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly"
                    ], [
                        "baseline"
                    ])
                }
            ],
            "align-items": [
                {
                    items: [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            "align-self": [
                {
                    self: [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "baseline"
                    ]
                }
            ],
            "place-content": [
                {
                    "place-content": [].concat([
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly"
                    ], [
                        "baseline",
                        "stretch"
                    ])
                }
            ],
            "place-items": [
                {
                    "place-items": [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            "place-self": [
                {
                    "place-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            p: [
                {
                    p: [
                        h
                    ]
                }
            ],
            px: [
                {
                    px: [
                        h
                    ]
                }
            ],
            py: [
                {
                    py: [
                        h
                    ]
                }
            ],
            pt: [
                {
                    pt: [
                        h
                    ]
                }
            ],
            pr: [
                {
                    pr: [
                        h
                    ]
                }
            ],
            pb: [
                {
                    pb: [
                        h
                    ]
                }
            ],
            pl: [
                {
                    pl: [
                        h
                    ]
                }
            ],
            m: [
                {
                    m: [
                        m
                    ]
                }
            ],
            mx: [
                {
                    mx: [
                        m
                    ]
                }
            ],
            my: [
                {
                    my: [
                        m
                    ]
                }
            ],
            mt: [
                {
                    mt: [
                        m
                    ]
                }
            ],
            mr: [
                {
                    mr: [
                        m
                    ]
                }
            ],
            mb: [
                {
                    mb: [
                        m
                    ]
                }
            ],
            ml: [
                {
                    ml: [
                        m
                    ]
                }
            ],
            "space-x": [
                {
                    "space-x": [
                        W
                    ]
                }
            ],
            "space-x-reverse": [
                "space-x-reverse"
            ],
            "space-y": [
                {
                    "space-y": [
                        W
                    ]
                }
            ],
            "space-y-reverse": [
                "space-y-reverse"
            ],
            w: [
                {
                    w: [
                        "auto",
                        "min",
                        "max",
                        "fit",
                        e
                    ]
                }
            ],
            "min-w": [
                {
                    "min-w": [
                        "min",
                        "max",
                        "fit",
                        w
                    ]
                }
            ],
            "max-w": [
                {
                    "max-w": [
                        "0",
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                M
                            ]
                        },
                        M,
                        k
                    ]
                }
            ],
            h: [
                {
                    h: [
                        e,
                        "auto",
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            "min-h": [
                {
                    "min-h": [
                        "min",
                        "max",
                        "fit",
                        w
                    ]
                }
            ],
            "max-h": [
                {
                    "max-h": [
                        e,
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            "font-size": [
                {
                    text: [
                        "base",
                        M,
                        k
                    ]
                }
            ],
            "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            "font-style": [
                "italic",
                "not-italic"
            ],
            "font-weight": [
                {
                    font: [
                        "thin",
                        "extralight",
                        "light",
                        "normal",
                        "medium",
                        "semibold",
                        "bold",
                        "extrabold",
                        "black",
                        G
                    ]
                }
            ],
            "font-family": [
                {
                    font: [
                        A
                    ]
                }
            ],
            "fvn-normal": [
                "normal-nums"
            ],
            "fvn-ordinal": [
                "ordinal"
            ],
            "fvn-slashed-zero": [
                "slashed-zero"
            ],
            "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractons"
            ],
            tracking: [
                {
                    tracking: [
                        "tighter",
                        "tight",
                        "normal",
                        "wide",
                        "wider",
                        "widest",
                        k
                    ]
                }
            ],
            leading: [
                {
                    leading: [
                        "none",
                        "tight",
                        "snug",
                        "normal",
                        "relaxed",
                        "loose",
                        w
                    ]
                }
            ],
            "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        N
                    ]
                }
            ],
            "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            "placeholder-color": [
                {
                    placeholder: [
                        r
                    ]
                }
            ],
            "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        v
                    ]
                }
            ],
            "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            "text-color": [
                {
                    text: [
                        r
                    ]
                }
            ],
            "text-opacity": [
                {
                    "text-opacity": [
                        v
                    ]
                }
            ],
            "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            "text-decoration-style": [
                {
                    decoration: [].concat([
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ], [
                        "wavy"
                    ])
                }
            ],
            "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        w
                    ]
                }
            ],
            "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        w
                    ]
                }
            ],
            "text-decoration-color": [
                {
                    decoration: [
                        r
                    ]
                }
            ],
            "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            indent: [
                {
                    indent: [
                        e
                    ]
                }
            ],
            "vertical-align": [
                {
                    align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        k
                    ]
                }
            ],
            whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap"
                    ]
                }
            ],
            break: [
                {
                    break: [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            content: [
                {
                    content: [
                        "none",
                        N
                    ]
                }
            ],
            "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            "bg-opacity": [
                {
                    "bg-opacity": [
                        v
                    ]
                }
            ],
            "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            "bg-position": [
                {
                    bg: [].concat([
                        "bottom",
                        "center",
                        "left",
                        "left-bottom",
                        "left-top",
                        "right",
                        "right-bottom",
                        "right-top",
                        "top"
                    ], [
                        j
                    ])
                }
            ],
            "bg-repeat": [
                {
                    bg: [
                        "no-repeat",
                        {
                            repeat: [
                                "",
                                "x",
                                "y",
                                "round",
                                "space"
                            ]
                        }
                    ]
                }
            ],
            "bg-size": [
                {
                    bg: [
                        "auto",
                        "cover",
                        "contain",
                        z
                    ]
                }
            ],
            "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            "gradient-to": [
                                "t",
                                "tr",
                                "r",
                                "br",
                                "b",
                                "bl",
                                "l",
                                "tl"
                            ]
                        },
                        C
                    ]
                }
            ],
            "bg-color": [
                {
                    bg: [
                        r
                    ]
                }
            ],
            "gradient-from": [
                {
                    from: [
                        b
                    ]
                }
            ],
            "gradient-via": [
                {
                    via: [
                        b
                    ]
                }
            ],
            "gradient-to": [
                {
                    to: [
                        b
                    ]
                }
            ],
            rounded: [
                {
                    rounded: [
                        i
                    ]
                }
            ],
            "rounded-t": [
                {
                    "rounded-t": [
                        i
                    ]
                }
            ],
            "rounded-r": [
                {
                    "rounded-r": [
                        i
                    ]
                }
            ],
            "rounded-b": [
                {
                    "rounded-b": [
                        i
                    ]
                }
            ],
            "rounded-l": [
                {
                    "rounded-l": [
                        i
                    ]
                }
            ],
            "rounded-tl": [
                {
                    "rounded-tl": [
                        i
                    ]
                }
            ],
            "rounded-tr": [
                {
                    "rounded-tr": [
                        i
                    ]
                }
            ],
            "rounded-br": [
                {
                    "rounded-br": [
                        i
                    ]
                }
            ],
            "rounded-bl": [
                {
                    "rounded-bl": [
                        i
                    ]
                }
            ],
            "border-w": [
                {
                    border: [
                        l
                    ]
                }
            ],
            "border-w-x": [
                {
                    "border-x": [
                        l
                    ]
                }
            ],
            "border-w-y": [
                {
                    "border-y": [
                        l
                    ]
                }
            ],
            "border-w-t": [
                {
                    "border-t": [
                        l
                    ]
                }
            ],
            "border-w-r": [
                {
                    "border-r": [
                        l
                    ]
                }
            ],
            "border-w-b": [
                {
                    "border-b": [
                        l
                    ]
                }
            ],
            "border-w-l": [
                {
                    "border-l": [
                        l
                    ]
                }
            ],
            "border-opacity": [
                {
                    "border-opacity": [
                        v
                    ]
                }
            ],
            "border-style": [
                {
                    border: [].concat([
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ], [
                        "hidden"
                    ])
                }
            ],
            "divide-x": [
                {
                    "divide-x": [
                        l
                    ]
                }
            ],
            "divide-x-reverse": [
                "divide-x-reverse"
            ],
            "divide-y": [
                {
                    "divide-y": [
                        l
                    ]
                }
            ],
            "divide-y-reverse": [
                "divide-y-reverse"
            ],
            "divide-opacity": [
                {
                    "divide-opacity": [
                        v
                    ]
                }
            ],
            "divide-style": [
                {
                    divide: [
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ]
                }
            ],
            "border-color": [
                {
                    border: [
                        n
                    ]
                }
            ],
            "border-color-x": [
                {
                    "border-x": [
                        n
                    ]
                }
            ],
            "border-color-y": [
                {
                    "border-y": [
                        n
                    ]
                }
            ],
            "border-color-t": [
                {
                    "border-t": [
                        n
                    ]
                }
            ],
            "border-color-r": [
                {
                    "border-r": [
                        n
                    ]
                }
            ],
            "border-color-b": [
                {
                    "border-b": [
                        n
                    ]
                }
            ],
            "border-color-l": [
                {
                    "border-l": [
                        n
                    ]
                }
            ],
            "divide-color": [
                {
                    divide: [
                        n
                    ]
                }
            ],
            "outline-style": [
                {
                    outline: [
                        ""
                    ].concat([
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ])
                }
            ],
            "outline-offset": [
                {
                    "outline-offset": [
                        w
                    ]
                }
            ],
            "outline-w": [
                {
                    outline: [
                        w
                    ]
                }
            ],
            "outline-color": [
                {
                    outline: [
                        r
                    ]
                }
            ],
            "ring-w": [
                {
                    ring: _()
                }
            ],
            "ring-w-inset": [
                "ring-inset"
            ],
            "ring-color": [
                {
                    ring: [
                        r
                    ]
                }
            ],
            "ring-opacity": [
                {
                    "ring-opacity": [
                        v
                    ]
                }
            ],
            "ring-offset-w": [
                {
                    "ring-offset": [
                        w
                    ]
                }
            ],
            "ring-offset-color": [
                {
                    "ring-offset": [
                        r
                    ]
                }
            ],
            shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        M,
                        O
                    ]
                }
            ],
            "shadow-color": [
                {
                    shadow: [
                        A
                    ]
                }
            ],
            opacity: [
                {
                    opacity: [
                        v
                    ]
                }
            ],
            "mix-blend": [
                {
                    "mix-blend": [
                        "normal",
                        "multiply",
                        "screen",
                        "overlay",
                        "darken",
                        "lighten",
                        "color-dodge",
                        "color-burn",
                        "hard-light",
                        "soft-light",
                        "difference",
                        "exclusion",
                        "hue",
                        "saturation",
                        "color",
                        "luminosity",
                        "plus-lighter"
                    ]
                }
            ],
            "bg-blend": [
                {
                    "bg-blend": [
                        "normal",
                        "multiply",
                        "screen",
                        "overlay",
                        "darken",
                        "lighten",
                        "color-dodge",
                        "color-burn",
                        "hard-light",
                        "soft-light",
                        "difference",
                        "exclusion",
                        "hue",
                        "saturation",
                        "color",
                        "luminosity",
                        "plus-lighter"
                    ]
                }
            ],
            filter: [
                {
                    filter: [
                        "",
                        "none"
                    ]
                }
            ],
            blur: [
                {
                    blur: [
                        o
                    ]
                }
            ],
            brightness: [
                {
                    brightness: [
                        t
                    ]
                }
            ],
            contrast: [
                {
                    contrast: [
                        s
                    ]
                }
            ],
            "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        M,
                        N
                    ]
                }
            ],
            grayscale: [
                {
                    grayscale: [
                        c
                    ]
                }
            ],
            "hue-rotate": [
                {
                    "hue-rotate": [
                        d
                    ]
                }
            ],
            invert: [
                {
                    invert: [
                        u
                    ]
                }
            ],
            saturate: [
                {
                    saturate: [
                        y
                    ]
                }
            ],
            sepia: [
                {
                    sepia: [
                        S
                    ]
                }
            ],
            "backdrop-filter": [
                {
                    "backdrop-filter": [
                        "",
                        "none"
                    ]
                }
            ],
            "backdrop-blur": [
                {
                    "backdrop-blur": [
                        o
                    ]
                }
            ],
            "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        t
                    ]
                }
            ],
            "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        s
                    ]
                }
            ],
            "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        c
                    ]
                }
            ],
            "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        d
                    ]
                }
            ],
            "backdrop-invert": [
                {
                    "backdrop-invert": [
                        u
                    ]
                }
            ],
            "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        v
                    ]
                }
            ],
            "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        y
                    ]
                }
            ],
            "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        S
                    ]
                }
            ],
            "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            "border-spacing": [
                {
                    "border-spacing": [
                        a
                    ]
                }
            ],
            "border-spacing-x": [
                {
                    "border-spacing-x": [
                        a
                    ]
                }
            ],
            "border-spacing-y": [
                {
                    "border-spacing-y": [
                        a
                    ]
                }
            ],
            "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            transition: [
                {
                    transition: [
                        "none",
                        "all",
                        "",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        N
                    ]
                }
            ],
            duration: [
                {
                    duration: [
                        I
                    ]
                }
            ],
            ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        N
                    ]
                }
            ],
            delay: [
                {
                    delay: [
                        I
                    ]
                }
            ],
            animate: [
                {
                    animate: [
                        "none",
                        "spin",
                        "ping",
                        "pulse",
                        "bounce",
                        N
                    ]
                }
            ],
            transform: [
                {
                    transform: [
                        "",
                        "gpu",
                        "none"
                    ]
                }
            ],
            scale: [
                {
                    scale: [
                        x
                    ]
                }
            ],
            "scale-x": [
                {
                    "scale-x": [
                        x
                    ]
                }
            ],
            "scale-y": [
                {
                    "scale-y": [
                        x
                    ]
                }
            ],
            rotate: [
                {
                    rotate: [
                        I,
                        N
                    ]
                }
            ],
            "translate-x": [
                {
                    "translate-x": [
                        T
                    ]
                }
            ],
            "translate-y": [
                {
                    "translate-y": [
                        T
                    ]
                }
            ],
            "skew-x": [
                {
                    "skew-x": [
                        P
                    ]
                }
            ],
            "skew-y": [
                {
                    "skew-y": [
                        P
                    ]
                }
            ],
            "transform-origin": [
                {
                    origin: [
                        "center",
                        "top",
                        "top-right",
                        "right",
                        "bottom-right",
                        "bottom",
                        "bottom-left",
                        "left",
                        "top-left",
                        N
                    ]
                }
            ],
            accent: [
                {
                    accent: [
                        "auto",
                        r
                    ]
                }
            ],
            appearance: [
                "appearance-none"
            ],
            cursor: [
                {
                    cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        N
                    ]
                }
            ],
            "caret-color": [
                {
                    caret: [
                        r
                    ]
                }
            ],
            "pointer-events": [
                {
                    "pointer-events": [
                        "none",
                        "auto"
                    ]
                }
            ],
            resize: [
                {
                    resize: [
                        "none",
                        "y",
                        "x",
                        ""
                    ]
                }
            ],
            "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            "scroll-m": [
                {
                    "scroll-m": [
                        e
                    ]
                }
            ],
            "scroll-mx": [
                {
                    "scroll-mx": [
                        e
                    ]
                }
            ],
            "scroll-my": [
                {
                    "scroll-my": [
                        e
                    ]
                }
            ],
            "scroll-mt": [
                {
                    "scroll-mt": [
                        e
                    ]
                }
            ],
            "scroll-mr": [
                {
                    "scroll-mr": [
                        e
                    ]
                }
            ],
            "scroll-mb": [
                {
                    "scroll-mb": [
                        e
                    ]
                }
            ],
            "scroll-ml": [
                {
                    "scroll-ml": [
                        e
                    ]
                }
            ],
            "scroll-p": [
                {
                    "scroll-p": [
                        e
                    ]
                }
            ],
            "scroll-px": [
                {
                    "scroll-px": [
                        e
                    ]
                }
            ],
            "scroll-py": [
                {
                    "scroll-py": [
                        e
                    ]
                }
            ],
            "scroll-pt": [
                {
                    "scroll-pt": [
                        e
                    ]
                }
            ],
            "scroll-pr": [
                {
                    "scroll-pr": [
                        e
                    ]
                }
            ],
            "scroll-pb": [
                {
                    "scroll-pb": [
                        e
                    ]
                }
            ],
            "scroll-pl": [
                {
                    "scroll-pl": [
                        e
                    ]
                }
            ],
            "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "pinch-zoom",
                        "manipulation",
                        {
                            pan: [
                                "x",
                                "left",
                                "right",
                                "y",
                                "up",
                                "down"
                            ]
                        }
                    ]
                }
            ],
            select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        N
                    ]
                }
            ],
            fill: [
                {
                    fill: [
                        r,
                        "none"
                    ]
                }
            ],
            "stroke-w": [
                {
                    stroke: [
                        w,
                        G
                    ]
                }
            ],
            stroke: [
                {
                    stroke: [
                        r,
                        "none"
                    ]
                }
            ],
            sr: [
                "sr-only",
                "not-sr-only"
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            "col-start-end": [
                "col-start",
                "col-end"
            ],
            "row-start-end": [
                "row-start",
                "row-end"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
            rounded: [
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ]
        }
    };
}
var W = b(P);
function T(r, e) {
    for(var o in e)R(r, o, e[o]);
    return r;
}
var E = Object.prototype.hasOwnProperty, _ = new Set([
    "string",
    "number",
    "boolean"
]);
function R(r, e, o) {
    if (E.call(r, e) && !_.has(typeof o) && null !== o) {
        if (Array.isArray(o) && Array.isArray(r[e])) r[e] = r[e].concat(o);
        else if ("object" == typeof o && "object" == typeof r[e]) {
            if (null === r[e]) return void (r[e] = o);
            for(var t in o)R(r[e], t, o[t]);
        }
    } else r[e] = o;
}
var $ = r;
__webpack_unused_export__ = b, __webpack_unused_export__ = function(r) {
    for(var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)o[t - 1] = arguments[t];
    return b.apply(void 0, "function" == typeof r ? [
        P,
        r
    ].concat(o) : [
        function() {
            return T(P(), r);
        }
    ].concat(o));
}, __webpack_unused_export__ = f, __webpack_unused_export__ = P, __webpack_unused_export__ = $, __webpack_unused_export__ = T, __webpack_unused_export__ = r, exports.m6 = W, __webpack_unused_export__ = S; //# sourceMappingURL=tailwind-merge.cjs.production.min.js.map


/***/ }),

/***/ 7588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const _jsx_runtime = __webpack_require__(8499);
module.exports.i = _jsx_runtime;


/***/ })

};
;