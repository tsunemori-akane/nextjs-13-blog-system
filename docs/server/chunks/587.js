exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 4889:
/***/ ((module) => {

function e(r){var o,t,f="";if("string"==typeof r||"number"==typeof r)f+=r;else if("object"==typeof r)if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(f&&(f+=" "),f+=t);else for(o in r)r[o]&&(f&&(f+=" "),f+=o);return f}function r(){for(var r,o,t=0,f="";t<arguments.length;)(r=arguments[t++])&&(o=e(r))&&(f&&(f+=" "),f+=o);return f}module.exports=r,module.exports.clsx=r;

/***/ }),

/***/ 8205:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(9247);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 6330:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(9247);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 9447:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.detectDomainLocale = void 0;
const detectDomainLocale = (...args)=>{
    if (false) {}
};
exports.detectDomainLocale = detectDomainLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 6494:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 9804:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.hasBasePath = hasBasePath;
var _pathHasPrefix = __webpack_require__(4567);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 3700:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = initHeadManager;
exports.isEqualNode = isEqualNode;
exports.DOMAttributeNames = void 0;
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === "link" && h.props["data-optimized-fonts"]) {
                    if (document.querySelector(`style[data-href="${h.props["data-href"]}"]`)) {
                        return;
                    } else {
                        h.props.href = h.props["data-href"];
                        h.props["data-href"] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = "";
            if (titleComponent) {
                const { children  } = titleComponent.props;
                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            if (title !== document.title) document.title = title;
            [
                "meta",
                "base",
                "link",
                "style",
                "script"
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
const DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
exports.DOMAttributeNames = DOMAttributeNames;
function reactElementToDOM({ type , props  }) {
    const el = document.createElement(type);
    for(const p in props){
        if (!props.hasOwnProperty(p)) continue;
        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    const { children , dangerouslySetInnerHTML  } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute("nonce")) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute("nonce", "");
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
function updateElements(type, components) {
    const headEl = document.getElementsByTagName("head")[0];
    const headCountEl = headEl.querySelector("meta[name=next-head-count]");
    if (false) {}
    const headCount = Number(headCountEl.content);
    const oldTags = [];
    for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
        var ref;
        if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
            oldTags.push(j);
        }
    }
    const newTags = components.map(reactElementToDOM).filter((newTag)=>{
        for(let k = 0, len = oldTags.length; k < len; k++){
            const oldTag = oldTags[k];
            if (isEqualNode(oldTag, newTag)) {
                oldTags.splice(k, 1);
                return false;
            }
        }
        return true;
    });
    oldTags.forEach((t)=>{
        var ref;
        return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
    });
    newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
    headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map


/***/ }),

/***/ 9797:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _head = _interop_require_default(__webpack_require__(2989));
var _imageBlurSvg = __webpack_require__(4486);
var _imageConfig = __webpack_require__(5843);
var _imageConfigContext = __webpack_require__(744);
var _warnOnce = __webpack_require__(8513);
var _imageLoader = _interop_require_default(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number" || typeof x === "undefined") {
        return x;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentNode) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current(_extends({}, event, {
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            }));
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
const ImageElement = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , className , imgStyle , blurStyle , isLazy , fill , placeholder , loading , srcString , config , unoptimized , loader , onLoadRef , onLoadingCompleteRef , setBlurComplete , setShowAltText , onLoad , onError  } = _param, rest = _object_without_properties_loose(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "fill",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadRef",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setShowAltText",
        "onLoad",
        "onError"
    ]);
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        // @ts-ignore - TODO: upgrade to `@types/react@17`
        loading: loading,
        style: _extends({}, imgStyle, blurStyle),
        ref: (0, _react).useCallback((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })));
});
const Image = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { src , sizes , unoptimized =false , priority =false , loading , className , quality , width , height , fill , style , onLoad , onLoadingComplete , placeholder ="empty" , blurDataURL , layout , objectFit , objectPosition , lazyBoundary , lazyRoot  } = _param, all = _object_without_properties_loose(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "className",
        "quality",
        "width",
        "height",
        "fill",
        "style",
        "onLoad",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL",
        "layout",
        "objectFit",
        "objectPosition",
        "lazyBoundary",
        "lazyRoot"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return _extends({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageLoader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        var _tmp;
        _tmp = (obj)=>{
            const { config: _  } = obj, opts = _object_without_properties_loose(obj, [
                "config"
            ]);
            return customImageLoader(opts);
        }, loader = _tmp, _tmp;
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = _extends({}, style, layoutStyle);
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio1 = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio1);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const [blurComplete, setBlurComplete] = (0, _react).useState(false);
    const [showAltText, setShowAltText] = (0, _react).useState(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,${(0, _imageBlurSvg).getImageBlurSvg({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL
        })}")`
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const linkProps = {
        // @ts-expect-error upgrade react types to react 18
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin
    };
    const onLoadRef = (0, _react).useRef(onLoad);
    (0, _react).useEffect(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = _extends({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs, {
        ref: forwardedRef
    })), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src
    }, linkProps))) : null);
});
var _default = Image;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 2919:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
var _router = __webpack_require__(4387);
var _formatUrl = __webpack_require__(3938);
var _addLocale = __webpack_require__(6330);
var _routerContext = __webpack_require__(4964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(4717);
var _getDomainLocale = __webpack_require__(6494);
var _addBasePath = __webpack_require__(8205);
const prefetched = new Set();
function prefetch(router, href, as, options) {
    if (true) {
        return;
    }
    if (!(0, _router).isLocalURL(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const { target  } = event.currentTarget;
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        // @ts-expect-error startTransition exists.
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formatUrl).formatUrl(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    const pagesRouter = _react.default.useContext(_routerContext.RouterContext);
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    const { href: href1 , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref1, resolvedAs] = (0, _router).resolveHref(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref1,
            as: asProp ? (0, _router).resolveHref(pagesRouter, asProp) : resolvedAs || resolvedHref1
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href1);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) { var ref; }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href1) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href1;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href1,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href1, as, {
            locale
        });
    }, [
        as,
        href1,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href1, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href1, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            });
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href1, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getDomainLocale).getDomainLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 9247:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 3910:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeBasePath = removeBasePath;
var _hasBasePath = __webpack_require__(9804);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = `/${path}`;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 6477:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeLocale = removeLocale;
var _parsePath = __webpack_require__(8854);
function removeLocale(path, locale) {
    if (false) {}
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map


/***/ }),

/***/ 3179:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 169:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _getAssetPathFromRoute = _interop_require_default(__webpack_require__(9565));
var _trustedTypes = __webpack_require__(5443);
var _requestIdleCallback = __webpack_require__(3179);
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ("future" in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function hasPrefetch(link) {
    try {
        link = document.createElement("link");
        return(// with relList.support
        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch"));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
    return new Promise((resolve, reject)=>{
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
            return resolve();
        }
        link = document.createElement("link");
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = undefined;
        link.onload = resolve;
        link.onerror = ()=>reject(markAssetError(new Error(`Failed to prefetch: ${href}`)));
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement("script");
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms));
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + "/_next/" + encodeURI(entry));
        return {
            scripts: allFiles.filter((v)=>v.endsWith(".js")).map((v)=>(0, _trustedTypes).__unsafeCreateTrustedScriptURL(v)),
            css: allFiles.filter((v)=>v.endsWith(".css"))
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src.toString());
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector(`script[src^="${src}"]`)) {
                return Promise.resolve();
            }
            loadedScripts.set(src.toString(), prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to load stylesheet: ${href}`);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && "resolve" in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts , css  })=>{
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet))
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint , styles  })=>{
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return "error" in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), "script")) : [])).then(()=>{
                (0, _requestIdleCallback).requestIdleCallback(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 5497:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleClientScriptLoad = handleClientScriptLoad;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _reactDom = _interop_require_default(__webpack_require__(8704));
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _headManagerContext = __webpack_require__(2796);
var _headManager = __webpack_require__(3700);
var _requestIdleCallback = __webpack_require__(3179);
const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = [
    "onLoad",
    "onReady",
    "dangerouslySetInnerHTML",
    "children",
    "onError",
    "strategy"
];
const loadScript = (props)=>{
    const { src , id , onLoad =()=>{} , onReady =null , dangerouslySetInnerHTML , children ="" , strategy ="afterInteractive" , onError  } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement("script");
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener("load", function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener("error", function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    for (const [k, value] of Object.entries(props)){
        if (value === undefined || ignoreProps.includes(k)) {
            continue;
        }
        const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
    }
    if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
    }
    el.setAttribute("data-nscript", strategy);
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy ="afterInteractive"  } = props;
    if (strategy === "lazyOnload") {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === "complete") {
        (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
    } else {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
function Script(props) {
    const { id , src ="" , onLoad =()=>{} , onReady =null , strategy ="afterInteractive" , onError  } = props, restProps = _object_without_properties_loose(props, [
        "id",
        "src",
        "onLoad",
        "onReady",
        "strategy",
        "onError"
    ]);
    // Context is available only during SSR
    const { updateScripts , scripts , getIsSsr , appDir , nonce  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react).useRef(false);
    (0, _react).useEffect(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react).useRef(false);
    (0, _react).useEffect(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === "afterInteractive") {
                loadScript(props);
            } else if (strategy === "lazyOnload") {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                _extends({
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError
                }, restProps)
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === "beforeInteractive") {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ _react.default.createElement("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            _extends({}, restProps)
                        ])})`
                    }
                });
            }
            // @ts-ignore
            _reactDom.default.preload(src, restProps.integrity ? {
                as: "script",
                integrity: restProps.integrity
            } : {
                as: "script"
            });
            return /*#__PURE__*/ _react.default.createElement("script", {
                nonce: nonce,
                dangerouslySetInnerHTML: {
                    __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                        src
                    ])})`
                }
            });
        } else if (strategy === "afterInteractive") {
            if (src) {
                // @ts-ignore
                _reactDom.default.preload(src, restProps.integrity ? {
                    as: "script",
                    integrity: restProps.integrity
                } : {
                    as: "script"
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, "__nextScript", {
    value: true
});
var _default = Script;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map


/***/ }),

/***/ 5443:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === "undefined" && "undefined" !== "undefined") { var ref; }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var ref;
    return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map


/***/ }),

/***/ 4717:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(8038);
var _requestIdleCallback = __webpack_require__(3179);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react).useState(false);
    const [element, setElement] = (0, _react).useState(null);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    }, [
        element,
        isDisabled,
        rootMargin,
        rootRef,
        visible
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 2989:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaultHead = defaultHead;
exports["default"] = void 0;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _sideEffect = _interop_require_default(__webpack_require__(2470));
var _ampContext = __webpack_require__(3918);
var _headManagerContext = __webpack_require__(2796);
var _ampMode = __webpack_require__(5732);
var _warnOnce = __webpack_require__(8513);
function defaultHead(inAmpMode = false) {
    const head = [
        /*#__PURE__*/ _react.default.createElement("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode  } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = _extends({}, c.props || {});
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children  }) {
    const ampState = (0, _react).useContext(_ampContext.AmpStateContext);
    const headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
    return /*#__PURE__*/ _react.default.createElement(_sideEffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampMode).isInAmpMode(ampState)
    }, children);
}
var _default = Head;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 4387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.matchesMiddleware = matchesMiddleware;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;
var _async_to_generator = (__webpack_require__(4432)/* ["default"] */ .Z);
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _normalizeTrailingSlash = __webpack_require__(9247);
var _removeTrailingSlash = __webpack_require__(3297);
var _routeLoader = __webpack_require__(169);
var _script = __webpack_require__(5497);
var _isError = _interop_require_wildcard(__webpack_require__(9253));
var _denormalizePagePath = __webpack_require__(4406);
var _normalizeLocalePath = __webpack_require__(4014);
var _mitt = _interop_require_default(__webpack_require__(8020));
var _utils = __webpack_require__(9232);
var _isDynamic = __webpack_require__(1428);
var _parseRelativeUrl = __webpack_require__(1292);
var _querystring = __webpack_require__(979);
var _resolveRewrites = _interop_require_default(__webpack_require__(6052));
var _routeMatcher = __webpack_require__(4226);
var _routeRegex = __webpack_require__(5052);
var _formatUrl = __webpack_require__(3938);
var _detectDomainLocale = __webpack_require__(9447);
var _parsePath = __webpack_require__(8854);
var _addLocale = __webpack_require__(6330);
var _removeLocale = __webpack_require__(6477);
var _removeBasePath = __webpack_require__(3910);
var _addBasePath = __webpack_require__(8205);
var _hasBasePath = __webpack_require__(9804);
var _isApiRoute = __webpack_require__(8533);
var _getNextPathnameInfo = __webpack_require__(5789);
var _formatNextPathnameInfo = __webpack_require__(299);
var _compareStates = __webpack_require__(6220);
var _isBot = __webpack_require__(1897);
function buildCancellationError() {
    return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
    });
}
function matchesMiddleware(options) {
    return _matchesMiddleware.apply(this, arguments);
}
function _matchesMiddleware() {
    _matchesMiddleware = _async_to_generator(function*(options) {
        const matchers = yield Promise.resolve(options.router.pageLoader.getMiddleware());
        if (!matchers) return false;
        const { pathname: asPathname  } = (0, _parsePath).parsePath(options.asPath);
        // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`
        const cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
        const asWithBasePathAndLocale = (0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, options.locale));
        // Check only path match on client. Matching "has" should be done on server
        // where we can access more info such as headers, HttpOnly cookie, etc.
        return matchers.some((m)=>new RegExp(m.regexp).test(asWithBasePathAndLocale));
    });
    return _matchesMiddleware.apply(this, arguments);
}
function stripOrigin(url) {
    const origin = (0, _utils).getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
}
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils).isAbsoluteUrl(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
    } catch (_) {
        return false;
    }
}
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat , optional  } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
}
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formatUrl).formatWithValidation(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?");
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
            const { result , params  } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formatUrl).formatWithValidation({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: omit(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_1) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
    const origin = (0, _utils).getLocationOrigin();
    const hrefWasAbsolute = resolvedHref.startsWith(origin);
    const asWasAbsolute = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefWasAbsolute ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
    const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asWasAbsolute ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
    if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}
function getMiddlewareData(source, response, options) {
    const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
            locales: options.router.locales
        },
        trailingSlash: Boolean(false)
    };
    const rewriteHeader = response.headers.get("x-nextjs-rewrite");
    let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
    const matchedPath = response.headers.get("x-matched-path");
    if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
        // leverage x-matched-path to detect next.config.js rewrites
        rewriteTarget = matchedPath;
    }
    if (rewriteTarget) {
        if (rewriteTarget.startsWith("/")) {
            const parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
            const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
                nextConfig,
                parseData: true
            });
            let fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
            return Promise.all([
                options.router.pageLoader.getPageList(),
                (0, _routeLoader).getClientBuildManifest()
            ]).then(([pages, { __rewrites: rewrites  }])=>{
                let as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);
                if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
                    const parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
                        parseData: true
                    });
                    as = (0, _addBasePath).addBasePath(parsedSource.pathname);
                    parsedRewriteTarget.pathname = as;
                }
                if (false) {} else if (!pages.includes(fsPathname)) {
                    const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
                    if (resolvedPathname !== fsPathname) {
                        fsPathname = resolvedPathname;
                    }
                }
                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
                if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
                    const matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
                    Object.assign(parsedRewriteTarget.query, matches || {});
                }
                return {
                    type: "rewrite",
                    parsedAs: parsedRewriteTarget,
                    resolvedHref
                };
            });
        }
        const src = (0, _parsePath).parsePath(source);
        const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
            nextConfig,
            parseData: true
        }), {
            defaultLocale: options.router.defaultLocale,
            buildId: ""
        }));
        return Promise.resolve({
            type: "redirect-external",
            destination: `${pathname}${src.query}${src.hash}`
        });
    }
    const redirectTarget = response.headers.get("x-nextjs-redirect");
    if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
            const src1 = (0, _parsePath).parsePath(redirectTarget);
            const pathname1 = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src1.pathname, {
                nextConfig,
                parseData: true
            }), {
                defaultLocale: options.router.defaultLocale,
                buildId: ""
            }));
            return Promise.resolve({
                type: "redirect-internal",
                newAs: `${pathname1}${src1.query}${src1.hash}`,
                newUrl: `${pathname1}${src1.query}${src1.hash}`
            });
        }
        return Promise.resolve({
            type: "redirect-external",
            destination: redirectTarget
        });
    }
    return Promise.resolve({
        type: "next"
    });
}
function withMiddlewareEffects(options) {
    return _withMiddlewareEffects.apply(this, arguments);
}
function _withMiddlewareEffects() {
    _withMiddlewareEffects = _async_to_generator(function*(options) {
        const matches = yield matchesMiddleware(options);
        if (!matches || !options.fetchData) {
            return null;
        }
        try {
            const data = yield options.fetchData();
            const effect = yield getMiddlewareData(data.dataHref, data.response, options);
            return {
                dataHref: data.dataHref,
                json: data.json,
                response: data.response,
                text: data.text,
                cacheKey: data.cacheKey,
                effect
            };
        } catch (e) {
            /**
     * TODO: Revisit this in the future.
     * For now we will not consider middleware data errors to be fatal.
     * maybe we should revisit in the future.
     */ return null;
        }
    });
    return _withMiddlewareEffects.apply(this, arguments);
}
const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
function fetchRetry(url, attempts, options) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
            "x-nextjs-data": "1"
        })
    }).then((response)=>{
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
    });
}
function handleSmoothScroll(fn) {
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
    // Otherwise it will not pickup the change in scrollBehavior
    // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
    htmlElement.getClientRects();
    fn();
    htmlElement.style.scrollBehavior = existing;
}
function tryToParseAsJSON(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
}
function fetchNextData({ dataHref , inflightCache , isPrefetch , hasMiddleware , isServerRender , parseJSON , persistCache , isBackground , unstable_skipClientCache  }) {
    const { href: cacheKey  } = new URL(dataHref, window.location.href);
    var ref1;
    const getData = (params)=>{
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
            headers: Object.assign({}, isPrefetch ? {
                purpose: "prefetch"
            } : {}, isPrefetch && hasMiddleware ? {
                "x-middleware-prefetch": "1"
            } : {}),
            method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : "GET"
        }).then((response)=>{
            if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
                return {
                    dataHref,
                    response,
                    text: "",
                    json: {},
                    cacheKey
                };
            }
            return response.text().then((text)=>{
                if (!response.ok) {
                    /**
             * When the data response is a redirect because of a middleware
             * we do not consider it an error. The headers must bring the
             * mapped location.
             * TODO: Change the status code in the handler.
             */ if (hasMiddleware && [
                        301,
                        302,
                        307,
                        308
                    ].includes(response.status)) {
                        return {
                            dataHref,
                            response,
                            text,
                            json: {},
                            cacheKey
                        };
                    }
                    if (!hasMiddleware && response.status === 404) {
                        var ref;
                        if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
                            return {
                                dataHref,
                                json: {
                                    notFound: SSG_DATA_NOT_FOUND
                                },
                                response,
                                text,
                                cacheKey
                            };
                        }
                    }
                    const error = new Error(`Failed to load static props`);
                    /**
             * We should only trigger a server-side transition if this was
             * caused on a client-side transition. Otherwise, we'd get into
             * an infinite loop.
             */ if (!isServerRender) {
                        (0, _routeLoader).markAssetError(error);
                    }
                    throw error;
                }
                return {
                    dataHref,
                    json: parseJSON ? tryToParseAsJSON(text) : null,
                    response,
                    text,
                    cacheKey
                };
            });
        }).then((data)=>{
            if (!persistCache || "production" !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
                delete inflightCache[cacheKey];
            }
            return data;
        }).catch((err)=>{
            if (!unstable_skipClientCache) {
                delete inflightCache[cacheKey];
            }
            if (err.message === "Failed to fetch") {
                (0, _routeLoader).markAssetError(err);
            }
            throw err;
        });
    };
    // when skipping client cache we wait to update
    // inflight cache until successful data response
    // this allows racing click event with fetching newer data
    // without blocking navigation when stale data is available
    if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data)=>{
            inflightCache[cacheKey] = Promise.resolve(data);
            return data;
        });
    }
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
    } : {});
}
function createKey() {
    return Math.random().toString(36).slice(2, 10);
}
function handleHardNavigation({ url , router  }) {
    // ensure we don't trigger a hard navigation to the same
    // URL as this can end up with an infinite refresh
    if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
        throw new Error(`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`);
    }
    window.location.href = url;
}
const getCancelledHandler = ({ route , router  })=>{
    let cancelled = false;
    const cancel = router.clc = ()=>{
        cancelled = true;
    };
    const handleCancelled = ()=>{
        if (cancelled) {
            const error = new Error(`Abort fetching component for route: "${route}"`);
            error.cancelled = true;
            throw error;
        }
        if (cancel === router.clc) {
            router.clc = null;
        }
    };
    return handleCancelled;
};
class Router {
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Go forward in history
   */ forward() {
        window.history.forward();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options = {}) {
        if (false) {}
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options = {}) {
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
    }
    change(method, url, as, options, forcedScroll) {
        var _this = this;
        return _async_to_generator(function*() {
            if (!isLocalURL(url)) {
                handleHardNavigation({
                    url,
                    router: _this
                });
                return false;
            }
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.
            const isQueryUpdating = options._h === 1;
            let shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
            const nextState = _extends({}, _this.state);
            // for static pages with query params in the URL we delay
            // marking the router ready until after the query is updated
            // or a navigation has occurred
            const readyStateChange = _this.isReady !== true;
            _this.isReady = true;
            const isSsr = _this.isSsr;
            if (!isQueryUpdating) {
                _this.isSsr = false;
            }
            // if a route transition is already in progress before
            // the query updating is triggered ignore query updating
            if (isQueryUpdating && _this.clc) {
                return false;
            }
            const prevLocale = nextState.locale;
            if (false) { var ref; }
            // marking route changes as a navigation start entry
            if (_utils.ST) {
                performance.mark("routeChange");
            }
            const { shallow =false , scroll =true  } = options;
            const routeProps = {
                shallow
            };
            if (_this._inFlightRoute && _this.clc) {
                if (!isSsr) {
                    Router.events.emit("routeChangeError", buildCancellationError(), _this._inFlightRoute, routeProps);
                }
                _this.clc();
                _this.clc = null;
            }
            as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
            const cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
            _this._inFlightRoute = as;
            const localeChange = prevLocale !== nextState.locale;
            // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            if (!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange) {
                nextState.asPath = cleanedAs;
                Router.events.emit("hashChangeStart", as, routeProps);
                // TODO: do we need the resolved href when only a hash change?
                _this.changeState(method, url, as, _extends({}, options, {
                    scroll: false
                }));
                if (scroll) {
                    _this.scrollToHash(cleanedAs);
                }
                try {
                    yield _this.set(nextState, _this.components[nextState.route], null);
                } catch (err) {
                    if ((0, _isError).default(err) && err.cancelled) {
                        Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                    }
                    throw err;
                }
                Router.events.emit("hashChangeComplete", as, routeProps);
                return true;
            }
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            // The build manifest needs to be loaded before auto-static dynamic pages
            // get their query parameters to allow ensuring they can be parsed properly
            // when rewritten to
            let pages, rewrites;
            try {
                [pages, { __rewrites: rewrites  }] = yield Promise.all([
                    _this.pageLoader.getPageList(),
                    (0, _routeLoader).getClientBuildManifest(),
                    _this.pageLoader.getMiddleware()
                ]);
            } catch (err1) {
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url
            if (!_this.urlIsNew(cleanedAs) && !localeChange) {
                method = "replaceState";
            }
            // we need to resolve the as value using rewrites for dynamic SSG
            // pages to allow building the data URL correctly
            let resolvedAs = as;
            // url and as should always be prefixed with basePath by this
            // point by either next/link or router.push/replace so strip the
            // basePath from the pathname to match the pages dir 1-to-1
            pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname;
            let route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            const parsedAsPathname = as.startsWith("/") && (0, _parseRelativeUrl).parseRelativeUrl(as).pathname;
            const isMiddlewareRewrite = !!(parsedAsPathname && route !== parsedAsPathname && (!(0, _isDynamic).isDynamicRoute(route) || !(0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(route))(parsedAsPathname)));
            // we don't attempt resolve asPath when we need to execute
            // middleware as the resolving will occur server-side
            const isMiddlewareMatch = !options.shallow && (yield matchesMiddleware({
                asPath: as,
                locale: nextState.locale,
                router: _this
            }));
            if (isQueryUpdating && isMiddlewareMatch) {
                shouldResolveHref = false;
            }
            if (shouldResolveHref && pathname !== "/_error") {
                options._shouldResolveHref = true;
                if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);
                    if (parsed.pathname !== pathname) {
                        pathname = parsed.pathname;
                        parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                        if (!isMiddlewareMatch) {
                            url = (0, _formatUrl).formatWithValidation(parsed);
                        }
                    }
                }
            }
            if (!isLocalURL(as)) {
                if (false) {}
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
            route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            let routeMatch = false;
            if ((0, _isDynamic).isDynamicRoute(route)) {
                const parsedAs1 = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                const asPathname = parsedAs1.pathname;
                const routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                const shouldInterpolate = route === asPathname;
                const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
                if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                    const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param] && !routeRegex.groups[param].optional);
                    if (missingParams.length > 0 && !isMiddlewareMatch) {
                        if (false) {}
                        throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
                    }
                } else if (shouldInterpolate) {
                    as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs1, {
                        pathname: interpolatedAs.result,
                        query: omit(query, interpolatedAs.params)
                    }));
                } else {
                    // Merge params into `query`, overwriting any specified in search
                    Object.assign(query, routeMatch);
                }
            }
            if (!isQueryUpdating) {
                Router.events.emit("routeChangeStart", as, routeProps);
            }
            try {
                var ref2, ref3, ref4;
                let routeInfo = yield _this.getRouteInfo({
                    route,
                    pathname,
                    query,
                    as,
                    resolvedAs,
                    routeProps,
                    locale: nextState.locale,
                    isPreview: nextState.isPreview,
                    hasMiddleware: isMiddlewareMatch,
                    unstable_skipClientCache: options.unstable_skipClientCache,
                    isQueryUpdating: isQueryUpdating && !_this.isFallback,
                    isMiddlewareRewrite
                });
                if ("route" in routeInfo && isMiddlewareMatch) {
                    pathname = routeInfo.route || route;
                    route = pathname;
                    if (!routeProps.shallow) {
                        query = Object.assign({}, routeInfo.query || {}, query);
                    }
                    const cleanedParsedPathname = (0, _hasBasePath).hasBasePath(parsed.pathname) ? (0, _removeBasePath).removeBasePath(parsed.pathname) : parsed.pathname;
                    if (routeMatch && pathname !== cleanedParsedPathname) {
                        Object.keys(routeMatch).forEach((key)=>{
                            if (routeMatch && query[key] === routeMatch[key]) {
                                delete query[key];
                            }
                        });
                    }
                    if ((0, _isDynamic).isDynamicRoute(pathname)) {
                        const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                        let rewriteAs = prefixedAs;
                        if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                            rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                        }
                        if (false) {}
                        const routeRegex1 = (0, _routeRegex).getRouteRegex(pathname);
                        const curRouteMatch = (0, _routeMatcher).getRouteMatcher(routeRegex1)(new URL(rewriteAs, location.href).pathname);
                        if (curRouteMatch) {
                            Object.assign(query, curRouteMatch);
                        }
                    }
                }
                // If the routeInfo brings a redirect we simply apply it.
                if ("type" in routeInfo) {
                    if (routeInfo.type === "redirect-internal") {
                        return _this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
                    } else {
                        handleHardNavigation({
                            url: routeInfo.destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                }
                const component = routeInfo.Component;
                if (component && component.unstable_scriptLoader) {
                    const scripts = [].concat(component.unstable_scriptLoader());
                    scripts.forEach((script)=>{
                        (0, _script).handleClientScriptLoad(script.props);
                    });
                }
                // handle redirect on client-transition
                if ((routeInfo.__N_SSG || routeInfo.__N_SSP) && routeInfo.props) {
                    if (routeInfo.props.pageProps && routeInfo.props.pageProps.__N_REDIRECT) {
                        // Use the destination from redirect without adding locale
                        options.locale = false;
                        const destination = routeInfo.props.pageProps.__N_REDIRECT;
                        // check if destination is internal (resolves to a page) and attempt
                        // client-navigation if it is falling back to hard navigation if
                        // it's not
                        if (destination.startsWith("/") && routeInfo.props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                            const { url: newUrl , as: newAs  } = prepareUrlAs(_this, destination, destination);
                            return _this.change(method, newUrl, newAs, options);
                        }
                        handleHardNavigation({
                            url: destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                    nextState.isPreview = !!routeInfo.props.__N_PREVIEW;
                    // handle SSG data 404
                    if (routeInfo.props.notFound === SSG_DATA_NOT_FOUND) {
                        let notFoundRoute;
                        try {
                            yield _this.fetchComponent("/404");
                            notFoundRoute = "/404";
                        } catch (_) {
                            notFoundRoute = "/_error";
                        }
                        routeInfo = yield _this.getRouteInfo({
                            route: notFoundRoute,
                            pathname: notFoundRoute,
                            query,
                            as,
                            resolvedAs,
                            routeProps: {
                                shallow: false
                            },
                            locale: nextState.locale,
                            isPreview: nextState.isPreview
                        });
                        if ("type" in routeInfo) {
                            throw new Error(`Unexpected middleware effect on /404`);
                        }
                    }
                }
                if (isQueryUpdating && _this.pathname === "/_error" && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && ((ref4 = routeInfo.props) == null ? void 0 : ref4.pageProps)) {
                    // ensure statusCode is still correct for static 500 page
                    // when updating query information
                    routeInfo.props.pageProps.statusCode = 500;
                }
                var _route;
                // shallow routing is only allowed for same page URL changes.
                const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
                var _scroll;
                const shouldScroll = (_scroll = options.scroll) != null ? _scroll : !isQueryUpdating && !isValidShallowRoute;
                const resetScroll = shouldScroll ? {
                    x: 0,
                    y: 0
                } : null;
                const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
                // the new state that the router gonna set
                const upcomingRouterState = _extends({}, nextState, {
                    route,
                    pathname,
                    query,
                    asPath: cleanedAs,
                    isFallback: false
                });
                // When the page being rendered is the 404 page, we should only update the
                // query parameters. Route changes here might add the basePath when it
                // wasn't originally present. This is also why this block is before the
                // below `changeState` call which updates the browser's history (changing
                // the URL).
                if (isQueryUpdating && (_this.pathname === "/404" || _this.pathname === "/_error")) {
                    var ref5, ref6, ref7;
                    routeInfo = yield _this.getRouteInfo({
                        route: _this.pathname,
                        pathname: _this.pathname,
                        query,
                        as,
                        resolvedAs,
                        routeProps: {
                            shallow: false
                        },
                        locale: nextState.locale,
                        isPreview: nextState.isPreview
                    });
                    if ("type" in routeInfo) {
                        throw new Error(`Unexpected middleware effect on ${_this.pathname}`);
                    }
                    if (_this.pathname === "/_error" && ((ref5 = self.__NEXT_DATA__.props) == null ? void 0 : (ref6 = ref5.pageProps) == null ? void 0 : ref6.statusCode) === 500 && ((ref7 = routeInfo.props) == null ? void 0 : ref7.pageProps)) {
                        // ensure statusCode is still correct for static 500 page
                        // when updating query information
                        routeInfo.props.pageProps.statusCode = 500;
                    }
                    try {
                        yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                    } catch (err2) {
                        if ((0, _isError).default(err2) && err2.cancelled) {
                            Router.events.emit("routeChangeError", err2, cleanedAs, routeProps);
                        }
                        throw err2;
                    }
                    return true;
                }
                Router.events.emit("beforeHistoryChange", as, routeProps);
                _this.changeState(method, url, as, options);
                // for query updates we can skip it if the state is unchanged and we don't
                // need to scroll
                // https://github.com/vercel/next.js/issues/37139
                const canSkipUpdating = isQueryUpdating && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);
                if (!canSkipUpdating) {
                    try {
                        yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                    } catch (e) {
                        if (e.cancelled) routeInfo.error = routeInfo.error || e;
                        else throw e;
                    }
                    if (routeInfo.error) {
                        if (!isQueryUpdating) {
                            Router.events.emit("routeChangeError", routeInfo.error, cleanedAs, routeProps);
                        }
                        throw routeInfo.error;
                    }
                    if (false) {}
                    if (!isQueryUpdating) {
                        Router.events.emit("routeChangeComplete", as, routeProps);
                    }
                    // A hash mark # is the optional last part of a URL
                    const hashRegex = /#.+$/;
                    if (shouldScroll && hashRegex.test(as)) {
                        _this.scrollToHash(as);
                    }
                }
                return true;
            } catch (err11) {
                if ((0, _isError).default(err11) && err11.cancelled) {
                    return false;
                }
                throw err11;
            }
        })();
    }
    changeState(method, url, as, options = {}) {
        if (false) {}
        if (method !== "pushState" || (0, _utils).getURL() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                key: this._key = method !== "pushState" ? this._key : createKey()
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            "", as);
        }
    }
    handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        var _this = this;
        return _async_to_generator(function*() {
            console.error(err);
            if (err.cancelled) {
                // bubble up cancellation errors
                throw err;
            }
            if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
                Router.events.emit("routeChangeError", err, as, routeProps);
                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.
                throw buildCancellationError();
            }
            try {
                let props;
                const { page: Component , styleSheets  } = yield _this.fetchComponent("/_error");
                const routeInfo = {
                    props,
                    Component,
                    styleSheets,
                    err,
                    error: err
                };
                if (!routeInfo.props) {
                    try {
                        routeInfo.props = yield _this.getInitialProps(Component, {
                            err,
                            pathname,
                            query
                        });
                    } catch (gipErr) {
                        console.error("Error in error page `getInitialProps`: ", gipErr);
                        routeInfo.props = {};
                    }
                }
                return routeInfo;
            } catch (routeInfoErr) {
                return _this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
            }
        })();
    }
    getRouteInfo({ route: requestedRoute , pathname , query , as , resolvedAs , routeProps , locale , hasMiddleware , isPreview , unstable_skipClientCache , isQueryUpdating , isMiddlewareRewrite  }) {
        var _this = this;
        return _async_to_generator(function*() {
            /**
     * This `route` binding can change if there's a rewrite
     * so we keep a reference to the original requested route
     * so we can store the cache for it and avoid re-requesting every time
     * for shallow routing purposes.
     */ let route = requestedRoute;
            try {
                var ref, ref8, ref9, ref10;
                const handleCancelled = getCancelledHandler({
                    route,
                    router: _this
                });
                let existingInfo = _this.components[route];
                if (routeProps.shallow && existingInfo && _this.route === route) {
                    return existingInfo;
                }
                if (hasMiddleware) {
                    existingInfo = undefined;
                }
                let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && "production" !== "development" ? existingInfo : undefined;
                const isBackground = isQueryUpdating;
                const fetchNextDataParams = {
                    dataHref: _this.pageLoader.getDataHref({
                        href: (0, _formatUrl).formatWithValidation({
                            pathname,
                            query
                        }),
                        skipInterpolation: true,
                        asPath: resolvedAs,
                        locale
                    }),
                    hasMiddleware: true,
                    isServerRender: _this.isSsr,
                    parseJSON: true,
                    inflightCache: isBackground ? _this.sbc : _this.sdc,
                    persistCache: !isPreview,
                    isPrefetch: false,
                    unstable_skipClientCache,
                    isBackground
                };
                let data = isQueryUpdating && !isMiddlewareRewrite ? null : yield withMiddlewareEffects({
                    fetchData: ()=>fetchNextData(fetchNextDataParams),
                    asPath: resolvedAs,
                    locale: locale,
                    router: _this
                }).catch((err)=>{
                    // we don't hard error during query updating
                    // as it's un-necessary and doesn't need to be fatal
                    // unless it is a fallback route and the props can't
                    // be loaded
                    if (isQueryUpdating) {
                        return null;
                    }
                    throw err;
                });
                if (isQueryUpdating) {
                    if (!data) {
                        data = {
                            json: self.__NEXT_DATA__.props
                        };
                    } else {
                        data.json = self.__NEXT_DATA__.props;
                    }
                }
                handleCancelled();
                if ((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === "redirect-internal" || (data == null ? void 0 : (ref8 = data.effect) == null ? void 0 : ref8.type) === "redirect-external") {
                    return data.effect;
                }
                if ((data == null ? void 0 : (ref9 = data.effect) == null ? void 0 : ref9.type) === "rewrite") {
                    const resolvedRoute = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
                    const pages = yield _this.pageLoader.getPageList();
                    // during query updating the page must match although during
                    // client-transition a redirect that doesn't match a page
                    // can be returned and this should trigger a hard navigation
                    // which is valid for incremental migration
                    if (!isQueryUpdating || pages.includes(resolvedRoute)) {
                        route = resolvedRoute;
                        pathname = data.effect.resolvedHref;
                        query = _extends({}, query, data.effect.parsedAs.query);
                        resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname);
                        // Check again the cache with the new destination.
                        existingInfo = _this.components[route];
                        if (routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware) {
                            // If we have a match with the current route due to rewrite,
                            // we can copy the existing information to the rewritten one.
                            // Then, we return the information along with the matched route.
                            return _extends({}, existingInfo, {
                                route
                            });
                        }
                    }
                }
                if ((0, _isApiRoute).isAPIRoute(route)) {
                    handleHardNavigation({
                        url: as,
                        router: _this
                    });
                    return new Promise(()=>{});
                }
                const routeInfo = cachedRouteInfo || (yield _this.fetchComponent(route).then((res)=>({
                        Component: res.page,
                        styleSheets: res.styleSheets,
                        __N_SSG: res.mod.__N_SSG,
                        __N_SSP: res.mod.__N_SSP
                    })));
                if (false) {}
                const wasBailedPrefetch = data == null ? void 0 : (ref10 = data.response) == null ? void 0 : ref10.headers.get("x-middleware-skip");
                const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
                // For non-SSG prefetches that bailed before sending data
                // we clear the cache to fetch full response
                if (wasBailedPrefetch && (data == null ? void 0 : data.dataHref)) {
                    delete _this.sdc[data.dataHref];
                }
                const { props , cacheKey  } = yield _this._getData(_async_to_generator(function*() {
                    if (shouldFetchData) {
                        if ((data == null ? void 0 : data.json) && !wasBailedPrefetch) {
                            return {
                                cacheKey: data.cacheKey,
                                props: data.json
                            };
                        }
                        const dataHref = (data == null ? void 0 : data.dataHref) ? data.dataHref : _this.pageLoader.getDataHref({
                            href: (0, _formatUrl).formatWithValidation({
                                pathname,
                                query
                            }),
                            asPath: resolvedAs,
                            locale
                        });
                        const fetched = yield fetchNextData({
                            dataHref,
                            isServerRender: _this.isSsr,
                            parseJSON: true,
                            inflightCache: wasBailedPrefetch ? {} : _this.sdc,
                            persistCache: !isPreview,
                            isPrefetch: false,
                            unstable_skipClientCache
                        });
                        return {
                            cacheKey: fetched.cacheKey,
                            props: fetched.json || {}
                        };
                    }
                    return {
                        headers: {},
                        props: yield _this.getInitialProps(routeInfo.Component, {
                            pathname,
                            query,
                            asPath: as,
                            locale,
                            locales: _this.locales,
                            defaultLocale: _this.defaultLocale
                        })
                    };
                }));
                // Only bust the data cache for SSP routes although
                // middleware can skip cache per request with
                // x-middleware-cache: no-cache as well
                if (routeInfo.__N_SSP && fetchNextDataParams.dataHref && cacheKey) {
                    delete _this.sdc[cacheKey];
                }
                // we kick off a HEAD request in the background
                // when a non-prefetch request is made to signal revalidation
                if (!_this.isPreview && routeInfo.__N_SSG && "production" !== "development" && !isQueryUpdating) {
                    fetchNextData(Object.assign({}, fetchNextDataParams, {
                        isBackground: true,
                        persistCache: false,
                        inflightCache: _this.sbc
                    })).catch(()=>{});
                }
                props.pageProps = Object.assign({}, props.pageProps);
                routeInfo.props = props;
                routeInfo.route = route;
                routeInfo.query = query;
                routeInfo.resolvedAs = resolvedAs;
                _this.components[route] = routeInfo;
                return routeInfo;
            } catch (err) {
                return _this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
            }
        })();
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers
        if (hash === "" || hash === "top") {
            handleSmoothScroll(()=>window.scrollTo(0, 0));
            return;
        }
        // Decode hash to make non-latin anchor works.
        const rawHash = decodeURIComponent(hash);
        // First we check if the element by id is found
        const idEl = document.getElementById(rawHash);
        if (idEl) {
            handleSmoothScroll(()=>idEl.scrollIntoView());
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(rawHash)[0];
        if (nameEl) {
            handleSmoothScroll(()=>nameEl.scrollIntoView());
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ prefetch(url, asPath = url, options = {}) {
        var _this = this;
        return _async_to_generator(function*() {
            // Prefetch is not supported in development mode because it would trigger on-demand-entries
            if (false) {}
            if (false) {}
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            const originalPathname = pathname;
            if (false) {}
            const pages = yield _this.pageLoader.getPageList();
            let resolvedAs = asPath;
            const locale = typeof options.locale !== "undefined" ? options.locale || undefined : _this.locale;
            const isMiddlewareMatch = yield matchesMiddleware({
                asPath: asPath,
                locale: locale,
                router: _this
            });
            if (false) {}
            parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
            if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
                if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                }
            }
            const data =  false ? 0 : yield withMiddlewareEffects({
                fetchData: ()=>fetchNextData({
                        dataHref: _this.pageLoader.getDataHref({
                            href: (0, _formatUrl).formatWithValidation({
                                pathname: originalPathname,
                                query
                            }),
                            skipInterpolation: true,
                            asPath: resolvedAs,
                            locale
                        }),
                        hasMiddleware: true,
                        isServerRender: _this.isSsr,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true
                    }),
                asPath: asPath,
                locale: locale,
                router: _this
            });
            /**
     * If there was a rewrite we apply the effects of the rewrite on the
     * current parameters for the prefetch.
     */ if ((data == null ? void 0 : data.effect.type) === "rewrite") {
                parsed.pathname = data.effect.resolvedHref;
                pathname = data.effect.resolvedHref;
                query = _extends({}, query, data.effect.parsedAs.query);
                resolvedAs = data.effect.parsedAs.pathname;
                url = (0, _formatUrl).formatWithValidation(parsed);
            }
            /**
     * If there is a redirect to an external destination then we don't have
     * to prefetch content as it will be unused.
     */ if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
                return;
            }
            const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            yield Promise.all([
                _this.pageLoader._isSsg(route).then((isSsg)=>{
                    return isSsg ? fetchNextData({
                        dataHref: (data == null ? void 0 : data.json) ? data == null ? void 0 : data.dataHref : _this.pageLoader.getDataHref({
                            href: url,
                            asPath: resolvedAs,
                            locale: locale
                        }),
                        isServerRender: false,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true,
                        unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                    }).then(()=>false) : false;
                }),
                _this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
            ]);
        })();
    }
    fetchComponent(route) {
        var _this = this;
        return _async_to_generator(function*() {
            const handleCancelled = getCancelledHandler({
                route,
                router: _this
            });
            try {
                const componentResult = yield _this.pageLoader.loadPage(route);
                handleCancelled();
                return componentResult;
            } catch (err) {
                handleCancelled();
                throw err;
            }
        })();
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData({
            dataHref,
            isServerRender: true,
            parseJSON: false,
            inflightCache: this.sdc,
            persistCache: false,
            isPrefetch: false
        }).then(({ text  })=>({
                data: text
            }));
    }
    getInitialProps(Component, ctx) {
        const { Component: App  } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
    constructor(pathname1, query1, as1, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview  }){
        // Server Data Cache (full data requests)
        this.sdc = {};
        // Server Background Cache (HEAD requests)
        this.sbc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e)=>{
            const { isFirstPopStateEvent  } = this;
            this.isFirstPopStateEvent = false;
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname , query  } = this;
                this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
                    pathname: (0, _addBasePath).addBasePath(pathname),
                    query
                }), (0, _utils).getURL());
                return;
            }
            // __NA is used to identify if the history entry can be handled by the app-router.
            if (state.__NA) {
                window.location.reload();
                return;
            }
            if (!state.__N) {
                return;
            }
            // Safari fires popstateevent when reopening the browser.
            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
                return;
            }
            let forcedScroll;
            const { url , as , options , key  } = state;
            if (false) {}
            this._key = key;
            const { pathname: pathname1  } = (0, _parseRelativeUrl).parseRelativeUrl(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === (0, _addBasePath).addBasePath(this.asPath) && pathname1 === (0, _addBasePath).addBasePath(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change("replaceState", url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale,
                // @ts-ignore internal value not exposed on types
                _h: 0
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname1 !== "/_error") {
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP
            };
        }
        this.components["/_app"] = {
            Component: App,
            styleSheets: []
        };
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath =  false || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
        if (false) {}
        this.state = {
            route,
            pathname: pathname1,
            query: query1,
            asPath: autoExportDynamic ? pathname1 : as1,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (false) {}
    }
}
Router.events = (0, _mitt).default();
exports["default"] = Router; //# sourceMappingURL=router.js.map


/***/ }),

/***/ 8533:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isAPIRoute = isAPIRoute;
function isAPIRoute(value) {
    return value === "/api" || Boolean(value == null ? void 0 : value.startsWith("/api/"));
}

//# sourceMappingURL=is-api-route.js.map

/***/ }),

/***/ 9253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isError;
exports.getProperError = getProperError;
var _isPlainObject = __webpack_require__(8524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 8421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9797)


/***/ }),

/***/ 1621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2919)


/***/ }),

/***/ 9483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2575)


/***/ }),

/***/ 1874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ twMerge)
});

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/_virtual/_rollupPluginBabelHelpers.mjs
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return undefined;
      },
      set: function set() {}
    };
  }

  var cacheSize = 0;
  var cache = new Map();
  var previousCache = new Map();

  function update(key, value) {
    cache.set(key, value);
    cacheSize++;

    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }

  return {
    get: function get(key) {
      var value = cache.get(key);

      if (value !== undefined) {
        return value;
      }

      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}


//# sourceMappingURL=lru-cache.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  var classMap = createClassMap(config);

  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR); // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.

    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }

    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }

  function getConflictingClassGroupIds(classGroupId) {
    return config.conflictingClassGroups[classGroupId] || [];
  }

  return {
    getClassGroupId: getClassGroupId,
    getConflictingClassGroupIds: getConflictingClassGroupIds
  };
}

function getGroupRecursive(classParts, classPartObject) {
  var _classPartObject$vali;

  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }

  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;

  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }

  if (classPartObject.validators.length === 0) {
    return undefined;
  }

  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_classPartObject$vali = classPartObject.validators.find(function (_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })) == null ? void 0 : _classPartObject$vali.classGroupId;
}

var arbitraryPropertyRegex = /^\[(.+)\]$/;

function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(':'));

    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */


function createClassMap(config) {
  var theme = config.theme,
      prefix = config.prefix;
  var classMap = {
    nextPart: new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
        classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}

function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }

    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }

      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId: classGroupId
      });
      return;
    }

    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
          classGroup = _ref3[1];
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}

function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }

    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}

function isThemeGetter(func) {
  return func.isThemeGetter;
}

function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }

  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
        classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }

      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
          var key = _ref5[0],
              value = _ref5[1];
          return [prefix + key, value];
        }));
      }

      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}


//# sourceMappingURL=class-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  var separator = config.separator || ':'; // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js

  return function splitModifiers(className) {
    var bracketDepth = 0;
    var modifiers = [];
    var modifierStart = 0;

    for (var index = 0; index < className.length; index++) {
      var _char = className[index];

      if (bracketDepth === 0 && _char === separator[0]) {
        if (separator.length === 1 || className.slice(index, index + separator.length) === separator) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separator.length;
        }
      }

      if (_char === '[') {
        bracketDepth++;
      } else if (_char === ']') {
        bracketDepth--;
      }
    }

    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    return {
      modifiers: modifiers,
      hasImportantModifier: hasImportantModifier,
      baseClassName: baseClassName
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */

function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }

  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '[';

    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}


//# sourceMappingURL=modifier-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/config-utils.mjs





function createConfigUtils(config) {
  return _extends({
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config)
  }, createClassUtils(config));
}


//# sourceMappingURL=config-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-classlist.mjs


var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
      getClassGroupId = configUtils.getClassGroupId,
      getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */

  var classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName),
        modifiers = _splitModifiers.modifiers,
        hasImportantModifier = _splitModifiers.hasImportantModifier,
        baseClassName = _splitModifiers.baseClassName;

    var classGroupId = getClassGroupId(baseClassName);

    if (!classGroupId) {
      return {
        isTailwindClass: false,
        originalClassName: originalClassName
      };
    }

    var variantModifier = sortModifiers(modifiers).join(':');
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId: modifierId,
      classGroupId: classGroupId,
      originalClassName: originalClassName
    };
  }).reverse() // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(function (parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }

    var modifierId = parsed.modifierId,
        classGroupId = parsed.classGroupId;
    var classId = modifierId + classGroupId;

    if (classGroupsInConflict.has(classId)) {
      return false;
    }

    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId).forEach(function (group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function (parsed) {
    return parsed.originalClassName;
  }).join(' ');
}


//# sourceMappingURL=merge-classlist.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = '';

  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }

  return string;
}

function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }

  var resolvedValue;
  var string = '';

  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }

  return string;
}


//# sourceMappingURL=tw-join.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs




function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }

  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;

  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
        restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }

  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);

    if (cachedResult) {
      return cachedResult;
    }

    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }

  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}


//# sourceMappingURL=create-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter(theme) {
    return theme[key] || [];
  };

  themeGetter.isThemeGetter = true;
  return themeGetter;
}


//# sourceMappingURL=from-theme.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(.+)\]$/;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
var tshirtUnitRegex = /^(\d+)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/; // Shadow always begins with x and y offset separated by underscore

var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(classPart) {
  return !Number.isNaN(Number(classPart)) || stringLengths.has(classPart) || fractionRegex.test(classPart) || isArbitraryLength(classPart);
}
function isArbitraryLength(classPart) {
  var _arbitraryValueRegex$;

  var arbitraryValue = (_arbitraryValueRegex$ = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$[1];

  if (arbitraryValue) {
    return arbitraryValue.startsWith('length:') || lengthUnitRegex.test(arbitraryValue);
  }

  return false;
}
function isArbitrarySize(classPart) {
  var _arbitraryValueRegex$2;

  var arbitraryValue = (_arbitraryValueRegex$2 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$2[1];
  return arbitraryValue ? arbitraryValue.startsWith('size:') : false;
}
function isArbitraryPosition(classPart) {
  var _arbitraryValueRegex$3;

  var arbitraryValue = (_arbitraryValueRegex$3 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$3[1];
  return arbitraryValue ? arbitraryValue.startsWith('position:') : false;
}
function isArbitraryUrl(classPart) {
  var _arbitraryValueRegex$4;

  var arbitraryValue = (_arbitraryValueRegex$4 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$4[1];
  return arbitraryValue ? arbitraryValue.startsWith('url(') || arbitraryValue.startsWith('url:') : false;
}
function isArbitraryNumber(classPart) {
  var _arbitraryValueRegex$5;

  var arbitraryValue = (_arbitraryValueRegex$5 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$5[1];
  return arbitraryValue ? !Number.isNaN(Number(arbitraryValue)) || arbitraryValue.startsWith('number:') : false;
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */

var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isInteger(classPart) {
  var _arbitraryValueRegex$6;

  var arbitraryValue = (_arbitraryValueRegex$6 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$6[1];

  if (arbitraryValue) {
    return Number.isInteger(Number(arbitraryValue));
  }

  return Number.isInteger(Number(classPart));
}
function isArbitraryValue(classPart) {
  return arbitraryValueRegex.test(classPart);
}
function isAny() {
  return true;
}
function isTshirtSize(classPart) {
  return tshirtUnitRegex.test(classPart);
}
function isArbitraryShadow(classPart) {
  var _arbitraryValueRegex$7;

  var arbitraryValue = (_arbitraryValueRegex$7 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$7[1];

  if (arbitraryValue) {
    return shadowRegex.test(arbitraryValue);
  }

  return false;
}


//# sourceMappingURL=validators.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/default-config.mjs



function getDefaultConfig() {
  var colors = fromTheme('colors');
  var spacing = fromTheme('spacing');
  var blur = fromTheme('blur');
  var brightness = fromTheme('brightness');
  var borderColor = fromTheme('borderColor');
  var borderRadius = fromTheme('borderRadius');
  var borderSpacing = fromTheme('borderSpacing');
  var borderWidth = fromTheme('borderWidth');
  var contrast = fromTheme('contrast');
  var grayscale = fromTheme('grayscale');
  var hueRotate = fromTheme('hueRotate');
  var invert = fromTheme('invert');
  var gap = fromTheme('gap');
  var gradientColorStops = fromTheme('gradientColorStops');
  var inset = fromTheme('inset');
  var margin = fromTheme('margin');
  var opacity = fromTheme('opacity');
  var padding = fromTheme('padding');
  var saturate = fromTheme('saturate');
  var scale = fromTheme('scale');
  var sepia = fromTheme('sepia');
  var skew = fromTheme('skew');
  var space = fromTheme('space');
  var translate = fromTheme('translate');

  var getOverscroll = function getOverscroll() {
    return ['auto', 'contain', 'none'];
  };

  var getOverflow = function getOverflow() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  };

  var getSpacingWithAuto = function getSpacingWithAuto() {
    return ['auto', spacing];
  };

  var getLengthWithEmpty = function getLengthWithEmpty() {
    return ['', isLength];
  };

  var getIntegerWithAuto = function getIntegerWithAuto() {
    return ['auto', isInteger];
  };

  var getPositions = function getPositions() {
    return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  };

  var getLineStyles = function getLineStyles() {
    return ['solid', 'dashed', 'dotted', 'double', 'none'];
  };

  var getBlendModes = function getBlendModes() {
    return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  };

  var getAlign = function getAlign() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly'];
  };

  var getZeroAndEmpty = function getZeroAndEmpty() {
    return ['', '0', isArbitraryValue];
  };

  var getBreaks = function getBreaks() {
    return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  };

  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryLength],
      brightness: [isInteger],
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryLength],
      borderSpacing: [spacing],
      borderWidth: getLengthWithEmpty(),
      contrast: [isInteger],
      grayscale: getZeroAndEmpty(),
      hueRotate: [isInteger],
      invert: getZeroAndEmpty(),
      gap: [spacing],
      gradientColorStops: [colors],
      inset: getSpacingWithAuto(),
      margin: getSpacingWithAuto(),
      opacity: [isInteger],
      padding: [spacing],
      saturate: [isInteger],
      scale: [isInteger],
      sepia: getZeroAndEmpty(),
      skew: [isInteger, isArbitraryValue],
      space: [spacing],
      translate: [spacing]
    },
    classGroups: {
      // Layout

      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],

      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],

      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],

      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],

      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],

      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],

      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],

      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],

      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],

      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ['right', 'left', 'none']
      }],

      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none']
      }],

      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],

      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],

      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],

      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],

      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],

      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],

      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],

      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],

      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],

      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],

      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],

      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],

      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],

      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],

      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],

      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],

      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],

      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],

      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger]
      }],
      // Flexbox and Grid

      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [spacing]
      }],

      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],

      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],

      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],

      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],

      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],

      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger]
      }],

      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],

      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: [isInteger]
        }]
      }],

      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getIntegerWithAuto()
      }],

      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getIntegerWithAuto()
      }],

      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],

      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger]
        }]
      }],

      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getIntegerWithAuto()
      }],

      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getIntegerWithAuto()
      }],

      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],

      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],

      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],

      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],

      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],

      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],

      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: getAlign()
      }],

      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],

      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],

      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: [].concat(getAlign(), ['baseline'])
      }],

      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],

      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],

      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [].concat(getAlign(), ['baseline', 'stretch'])
      }],

      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],

      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing

      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],

      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],

      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],

      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],

      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],

      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],

      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],

      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],

      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],

      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],

      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],

      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],

      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],

      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],

      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],

      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],

      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],

      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing

      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', spacing]
      }],

      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': ['min', 'max', 'fit', isLength]
      }],

      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryLength]
      }],

      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [spacing, 'auto', 'min', 'max', 'fit']
      }],

      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['min', 'max', 'fit', isLength]
      }],

      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [spacing, 'min', 'max', 'fit']
      }],
      // Typography

      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],

      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],

      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],

      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],

      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],

      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryLength]
      }],

      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength]
      }],

      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],

      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],

      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],

      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],

      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],

      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],

      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],

      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],

      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [].concat(getLineStyles(), ['wavy'])
      }],

      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength]
      }],

      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength]
      }],

      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],

      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],

      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],

      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [spacing]
      }],

      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryLength]
      }],

      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']
      }],

      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ['normal', 'words', 'all', 'keep']
      }],

      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds

      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],

      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],

      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],

      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],

      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],

      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],

      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],

      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryUrl]
      }],

      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],

      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],

      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],

      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders

      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],

      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],

      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],

      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],

      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],

      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],

      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],

      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],

      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],

      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],

      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],

      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],

      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],

      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],

      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],

      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],

      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],

      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [].concat(getLineStyles(), ['hidden'])
      }],

      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],

      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],

      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],

      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],

      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],

      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],

      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],

      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],

      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],

      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],

      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],

      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],

      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],

      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],

      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [''].concat(getLineStyles())
      }],

      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength]
      }],

      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength]
      }],

      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],

      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmpty()
      }],

      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],

      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],

      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],

      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength]
      }],

      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects

      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],

      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],

      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],

      /**
       * Mix Beldn Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': getBlendModes()
      }],

      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters

      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],

      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],

      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],

      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],

      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],

      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],

      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],

      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],

      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],

      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],

      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],

      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],

      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],

      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],

      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],

      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],

      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],

      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],

      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],

      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables

      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],

      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],

      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],

      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],

      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      // Transitions and Animation

      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],

      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isInteger]
      }],

      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],

      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isInteger]
      }],

      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms

      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],

      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],

      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],

      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],

      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],

      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],

      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],

      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],

      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],

      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity

      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],

      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],

      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],

      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],

      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],

      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],

      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],

      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': [spacing]
      }],

      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': [spacing]
      }],

      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': [spacing]
      }],

      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': [spacing]
      }],

      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': [spacing]
      }],

      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': [spacing]
      }],

      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': [spacing]
      }],

      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': [spacing]
      }],

      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': [spacing]
      }],

      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': [spacing]
      }],

      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': [spacing]
      }],

      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': [spacing]
      }],

      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': [spacing]
      }],

      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': [spacing]
      }],

      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],

      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],

      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],

      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],

      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
          pan: ['x', 'left', 'right', 'y', 'up', 'down']
        }]
      }],

      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],

      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG

      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],

      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryNumber]
      }],

      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility

      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only']
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      'col-start-end': ['col-start', 'col-end'],
      'row-start-end': ['row-start', 'row-end'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: ['rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb']
    }
  };
}


//# sourceMappingURL=default-config.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs



var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);


//# sourceMappingURL=tw-merge.mjs.map


/***/ })

};
;