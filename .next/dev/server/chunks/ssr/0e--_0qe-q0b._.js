module.exports = [
"[project]/power-orbit/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/power-orbit/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/power-orbit/node_modules/countup.js/dist/countUp.umd.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, i) {
    ("TURBOPACK compile-time truthy", 1) ? i(exports) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(t) {
    "use strict";
    var i = function() {
        return i = Object.assign || function(t) {
            for(var i, n = 1, s = arguments.length; n < s; n++)for(var e in i = arguments[n])Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
            return t;
        }, i.apply(this, arguments);
    }, n = function() {
        function t(t, n, s) {
            var e = this;
            this.endVal = n, this.options = s, this.version = "2.9.0", this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1
            }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
                e.startTime || (e.startTime = t);
                var i = t - e.startTime;
                e.remaining = e.duration - i, e.useEasing ? e.countDown ? e.frameVal = e.startVal - e.easingFn(i, 0, e.startVal - e.endVal, e.duration) : e.frameVal = e.easingFn(i, e.startVal, e.endVal - e.startVal, e.duration) : e.frameVal = e.startVal + (e.endVal - e.startVal) * (i / e.duration);
                var n = e.countDown ? e.frameVal < e.endVal : e.frameVal > e.endVal;
                e.frameVal = n ? e.endVal : e.frameVal, e.frameVal = Number(e.frameVal.toFixed(e.options.decimalPlaces)), e.printValue(e.frameVal), i < e.duration ? e.rAF = requestAnimationFrame(e.count) : null !== e.finalEndVal ? e.update(e.finalEndVal) : e.options.onCompleteCallback && e.options.onCompleteCallback();
            }, this.formatNumber = function(t) {
                var i, n, s, a, o = t < 0 ? "-" : "";
                i = Math.abs(t).toFixed(e.options.decimalPlaces);
                var r = (i += "").split(".");
                if (n = r[0], s = r.length > 1 ? e.options.decimal + r[1] : "", e.options.useGrouping) {
                    a = "";
                    for(var l = 3, u = 0, h = 0, p = n.length; h < p; ++h)e.options.useIndianSeparators && 4 === h && (l = 2, u = 1), 0 !== h && u % l == 0 && (a = e.options.separator + a), u++, a = n[p - h - 1] + a;
                    n = a;
                }
                return e.options.numerals && e.options.numerals.length && (n = n.replace(/[0-9]/g, function(t) {
                    return e.options.numerals[+t];
                }), s = s.replace(/[0-9]/g, function(t) {
                    return e.options.numerals[+t];
                })), o + e.options.prefix + n + s + e.options.suffix;
            }, this.easeOutExpo = function(t, i, n, s) {
                return n * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i;
            }, this.options = i(i({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof t ? document.getElementById(t) : t, n = null == n ? this.parse(this.el.innerHTML) : n, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != ("TURBOPACK compile-time value", "undefined") && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                return e.handleScroll(e);
            }), window.onscroll = function() {
                window.onScrollFns.forEach(function(t) {
                    return t();
                });
            }, this.handleScroll(this)));
        }
        return t.prototype.handleScroll = function(t) {
            if (t && window && !t.once) {
                var i = window.innerHeight + window.scrollY, n = t.el.getBoundingClientRect(), s = n.top + window.pageYOffset, e = n.top + n.height + window.pageYOffset;
                e < i && e > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function() {
                    return t.start();
                }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > e || s > i) && !t.paused && t.reset();
            }
        }, t.prototype.determineDirectionAndSmartEasing = function() {
            var t = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > t;
            var i = t - this.startVal;
            if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
                this.finalEndVal = t;
                var n = this.countDown ? 1 : -1;
                this.endVal = t + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
            } else this.endVal = t, this.finalEndVal = null;
            null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
        }, t.prototype.start = function(t) {
            this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
        }, t.prototype.pauseResume = function() {
            this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
        }, t.prototype.reset = function() {
            cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
        }, t.prototype.update = function(t) {
            cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
        }, t.prototype.printValue = function(t) {
            var i;
            if (this.el) {
                var n = this.formattingFn(t);
                if (null === (i = this.options.plugin) || void 0 === i ? void 0 : i.render) this.options.plugin.render(this.el, n);
                else if ("INPUT" === this.el.tagName) this.el.value = n;
                else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
            }
        }, t.prototype.ensureNumber = function(t) {
            return "number" == typeof t && !isNaN(t);
        }, t.prototype.validateValue = function(t) {
            var i = Number(t);
            return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
        }, t.prototype.resetDuration = function() {
            this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
        }, t.prototype.parse = function(t) {
            var i = function(t) {
                return t.replace(/([.,'  ])/g, "\\$1");
            }, n = i(this.options.separator), s = i(this.options.decimal), e = t.replace(new RegExp(n, "g"), "").replace(new RegExp(s, "g"), ".");
            return parseFloat(e);
        }, t;
    }();
    t.CountUp = n;
});
}),
"[project]/power-orbit/node_modules/react-countup/build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/power-orbit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var countup_js = __turbopack_context__.r("[project]/power-orbit/node_modules/countup.js/dist/countUp.umd.js [app-ssr] (ecmascript)");
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/**
 * Silence SSR Warnings.
 * Borrowed from Formik v2.1.1, Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : React.useEffect;
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Create a stable reference to a callback which is updated after each render is committed.
 * Typed version borrowed from Formik v2.2.1. Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ function useEventCallback(fn) {
    var ref = React.useRef(fn);
    // we copy a ref to the callback scoped to the current state/props on each render
    useIsomorphicLayoutEffect(function() {
        ref.current = fn;
    });
    return React.useCallback(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
}
var createCountUpInstance = function createCountUpInstance(el, props) {
    var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce, plugin = props.plugin;
    return new countup_js.CountUp(el, end, {
        startVal: start,
        duration: duration,
        decimal: decimal,
        decimalPlaces: decimals,
        easingFn: easingFn,
        formattingFn: formattingFn,
        numerals: numerals,
        separator: separator,
        prefix: prefix,
        suffix: suffix,
        plugin: plugin,
        useEasing: useEasing,
        useIndianSeparators: useIndianSeparators,
        useGrouping: useGrouping,
        enableScrollSpy: enableScrollSpy,
        scrollSpyDelay: scrollSpyDelay,
        scrollSpyOnce: scrollSpyOnce
    });
};
var _excluded$1 = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate"
];
var DEFAULTS = {
    decimal: '.',
    separator: ',',
    delay: null,
    prefix: '',
    suffix: '',
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: true,
    enableReinitialize: true,
    useEasing: true,
    useGrouping: true,
    useIndianSeparators: false
};
var useCountUp = function useCountUp(props) {
    var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
        return value !== undefined;
    }));
    var _useMemo = React.useMemo(function() {
        return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
    }, [
        props
    ]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
    var countUpRef = React.useRef();
    var timerRef = React.useRef();
    var isInitializedRef = React.useRef(false);
    var createInstance = useEventCallback(function() {
        return createCountUpInstance(typeof ref === 'string' ? ref : ref.current, instanceProps);
    });
    var getCountUp = useEventCallback(function(recreate) {
        var countUp = countUpRef.current;
        if (countUp && !recreate) {
            return countUp;
        }
        var newCountUp = createInstance();
        countUpRef.current = newCountUp;
        return newCountUp;
    });
    var start = useEventCallback(function() {
        var run = function run() {
            return getCountUp(true).start(function() {
                onEnd === null || onEnd === void 0 || onEnd({
                    pauseResume: pauseResume,
                    reset: reset,
                    start: restart,
                    update: update
                });
            });
        };
        if (delay && delay > 0) {
            timerRef.current = setTimeout(run, delay * 1000);
        } else {
            run();
        }
        onStart === null || onStart === void 0 || onStart({
            pauseResume: pauseResume,
            reset: reset,
            update: update
        });
    });
    var pauseResume = useEventCallback(function() {
        getCountUp().pauseResume();
        onPauseResume === null || onPauseResume === void 0 || onPauseResume({
            reset: reset,
            start: restart,
            update: update
        });
    });
    var reset = useEventCallback(function() {
        // Quick fix for https://github.com/glennreyes/react-countup/issues/736 - should be investigated
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (getCountUp().el) {
            timerRef.current && clearTimeout(timerRef.current);
            getCountUp().reset();
            onReset === null || onReset === void 0 || onReset({
                pauseResume: pauseResume,
                start: restart,
                update: update
            });
        }
    });
    var update = useEventCallback(function(newEnd) {
        getCountUp().update(newEnd);
        onUpdate === null || onUpdate === void 0 || onUpdate({
            pauseResume: pauseResume,
            reset: reset,
            start: restart
        });
    });
    var restart = useEventCallback(function() {
        reset();
        start();
    });
    var maybeInitialize = useEventCallback(function(shouldReset) {
        if (startOnMount) {
            if (shouldReset) {
                reset();
            }
            start();
        }
    });
    React.useEffect(function() {
        if (!isInitializedRef.current) {
            isInitializedRef.current = true;
            maybeInitialize();
        } else if (enableReinitialize) {
            maybeInitialize(true);
        }
    }, [
        enableReinitialize,
        isInitializedRef,
        maybeInitialize,
        delay,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.formattingFn
    ]);
    React.useEffect(function() {
        return function() {
            reset();
        };
    }, [
        reset
    ]);
    return {
        start: restart,
        pauseResume: pauseResume,
        reset: reset,
        update: update,
        getCountUp: getCountUp
    };
};
var _excluded = [
    "className",
    "redraw",
    "containerProps",
    "children",
    "style"
];
var CountUp = function CountUp(props) {
    var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
    var containerRef = React.useRef(null);
    var isInitializedRef = React.useRef(false);
    var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
        ref: containerRef,
        startOnMount: typeof children !== 'function' || props.delay === 0,
        // component manually restarts
        enableReinitialize: false
    })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
    var restart = useEventCallback(function() {
        start();
    });
    var update = useEventCallback(function(end) {
        if (!props.preserveValue) {
            reset();
        }
        updateCountUp(end);
    });
    var initializeOnMount = useEventCallback(function() {
        if (typeof props.children === 'function') {
            // Warn when user didn't use containerRef at all
            if (!(containerRef.current instanceof Element)) {
                console.error("Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an Element, eg. <span ref={containerRef} />.");
                return;
            }
        }
        // unlike the hook, the CountUp component initializes on mount
        getCountUp();
    });
    React.useEffect(function() {
        initializeOnMount();
    }, [
        initializeOnMount
    ]);
    React.useEffect(function() {
        if (isInitializedRef.current) {
            update(props.end);
        }
    }, [
        props.end,
        update
    ]);
    var redrawDependencies = redraw && props;
    // if props.redraw, call this effect on every props change
    React.useEffect(function() {
        if (redraw && isInitializedRef.current) {
            restart();
        }
    }, [
        restart,
        redraw,
        redrawDependencies
    ]);
    // if not props.redraw, call this effect only when certain props are changed
    React.useEffect(function() {
        if (!redraw && isInitializedRef.current) {
            restart();
        }
    }, [
        restart,
        redraw,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.className,
        props.formattingFn
    ]);
    React.useEffect(function() {
        isInitializedRef.current = true;
    }, []);
    if (typeof children === 'function') {
        // TypeScript forces functional components to return JSX.Element | null.
        return children({
            countUpRef: containerRef,
            start: start,
            reset: reset,
            update: updateCountUp,
            pauseResume: pauseResume,
            getCountUp: getCountUp
        });
    }
    return /*#__PURE__*/ React.createElement("span", _extends({
        className: className,
        ref: containerRef,
        style: style
    }, containerProps), typeof props.start !== 'undefined' ? getCountUp().formattingFn(props.start) : '');
};
exports.default = CountUp;
exports.useCountUp = useCountUp;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/clones.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function getOriginalCounterPart(index, _a, childrenArr) {
    var slidesToShow = _a.slidesToShow, currentSlide = _a.currentSlide;
    return childrenArr.length > 2 * slidesToShow ? index + 2 * slidesToShow : currentSlide >= childrenArr.length ? childrenArr.length + index : index;
}
function getOriginalIndexLookupTableByClones(slidesToShow, childrenArr) {
    if (childrenArr.length > 2 * slidesToShow) {
        for(var table = {}, firstBeginningOfClones = childrenArr.length - 2 * slidesToShow, firstEndOfClones = childrenArr.length - firstBeginningOfClones, firstCount = firstBeginningOfClones, i = 0; i < firstEndOfClones; i++)table[i] = firstCount, firstCount++;
        var secondBeginningOfClones = childrenArr.length + firstEndOfClones, secondEndOfClones = secondBeginningOfClones + childrenArr.slice(0, 2 * slidesToShow).length, secondCount = 0;
        for(i = secondBeginningOfClones; i <= secondEndOfClones; i++)table[i] = secondCount, secondCount++;
        var originalEnd = secondBeginningOfClones, originalCounter = 0;
        for(i = firstEndOfClones; i < originalEnd; i++)table[i] = originalCounter, originalCounter++;
        return table;
    }
    table = {};
    var totalSlides = 3 * childrenArr.length, count = 0;
    for(i = 0; i < totalSlides; i++)table[i] = count, ++count === childrenArr.length && (count = 0);
    return table;
}
function getClones(slidesToShow, childrenArr) {
    return childrenArr.length < slidesToShow ? childrenArr : childrenArr.length > 2 * slidesToShow ? childrenArr.slice(childrenArr.length - 2 * slidesToShow, childrenArr.length).concat(childrenArr, childrenArr.slice(0, 2 * slidesToShow)) : childrenArr.concat(childrenArr, childrenArr);
}
function getInitialSlideInInfiniteMode(slidesToShow, childrenArr) {
    return childrenArr.length > 2 * slidesToShow ? 2 * slidesToShow : childrenArr.length;
}
function checkClonesPosition(_a, childrenArr, props) {
    var isReachingTheEnd, currentSlide = _a.currentSlide, slidesToShow = _a.slidesToShow, itemWidth = _a.itemWidth, totalItems = _a.totalItems, nextSlide = 0, nextPosition = 0, isReachingTheStart = 0 === currentSlide, originalFirstSlide = childrenArr.length - (childrenArr.length - 2 * slidesToShow);
    return childrenArr.length < slidesToShow ? (nextPosition = nextSlide = 0, isReachingTheStart = isReachingTheEnd = !1) : childrenArr.length > 2 * slidesToShow ? ((isReachingTheEnd = currentSlide >= originalFirstSlide + childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = -itemWidth * (nextSlide = originalFirstSlide + (childrenArr.length - 2 * slidesToShow)))) : ((isReachingTheEnd = currentSlide >= 2 * childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = props.showDots ? -itemWidth * (nextSlide = childrenArr.length) : -itemWidth * (nextSlide = totalItems / 3))), {
        isReachingTheEnd: isReachingTheEnd,
        isReachingTheStart: isReachingTheStart,
        nextSlide: nextSlide,
        nextPosition: nextPosition
    };
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getOriginalCounterPart = getOriginalCounterPart, exports.getOriginalIndexLookupTableByClones = getOriginalIndexLookupTableByClones, exports.getClones = getClones, exports.getInitialSlideInInfiniteMode = getInitialSlideInInfiniteMode, exports.checkClonesPosition = checkClonesPosition;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/elementWidth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var hasWarnAboutTypo = !1;
function getPartialVisibilityGutter(responsive, partialVisible, serverSideDeviceType, clientSideDeviceType) {
    var gutter = 0, deviceType = clientSideDeviceType || serverSideDeviceType;
    return partialVisible && deviceType && (!hasWarnAboutTypo && "production" !== ("TURBOPACK compile-time value", "development") && responsive[deviceType].paritialVisibilityGutter && (hasWarnAboutTypo = !0, console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")), gutter = responsive[deviceType].partialVisibilityGutter || responsive[deviceType].paritialVisibilityGutter), gutter;
}
function getWidthFromDeviceType(deviceType, responsive) {
    var itemWidth;
    responsive[deviceType] && (itemWidth = (100 / responsive[deviceType].items).toFixed(1));
    return itemWidth;
}
function getItemClientSideWidth(props, slidesToShow, containerWidth) {
    return Math.round(containerWidth / (slidesToShow + (props.centerMode ? 1 : 0)));
}
exports.getPartialVisibilityGutter = getPartialVisibilityGutter, exports.getWidthFromDeviceType = getWidthFromDeviceType, exports.getItemClientSideWidth = getItemClientSideWidth;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var elementWidth_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/elementWidth.js [app-ssr] (ecmascript)");
function notEnoughChildren(state) {
    var slidesToShow = state.slidesToShow;
    return state.totalItems < slidesToShow;
}
function getInitialState(state, props) {
    var flexBisis, domLoaded = state.domLoaded, slidesToShow = state.slidesToShow, containerWidth = state.containerWidth, itemWidth = state.itemWidth, deviceType = props.deviceType, responsive = props.responsive, ssr = props.ssr, partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
    ssr && deviceType && !domFullyLoaded && (flexBisis = elementWidth_1.getWidthFromDeviceType(deviceType, responsive));
    var shouldRenderOnSSR = Boolean(ssr && deviceType && !domFullyLoaded && flexBisis);
    return {
        shouldRenderOnSSR: shouldRenderOnSSR,
        flexBisis: flexBisis,
        domFullyLoaded: domFullyLoaded,
        partialVisibilityGutter: elementWidth_1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType),
        shouldRenderAtAll: shouldRenderOnSSR || domFullyLoaded
    };
}
function getIfSlideIsVisbile(index, state) {
    var currentSlide = state.currentSlide, slidesToShow = state.slidesToShow;
    return currentSlide <= index && index < currentSlide + slidesToShow;
}
function getTransformForCenterMode(state, props, transformPlaceHolder) {
    var transform = transformPlaceHolder || state.transform;
    return !props.infinite && 0 === state.currentSlide || notEnoughChildren(state) ? transform : transform + state.itemWidth / 2;
}
function isInLeftEnd(_a) {
    return !(0 < _a.currentSlide);
}
function isInRightEnd(_a) {
    var currentSlide = _a.currentSlide, totalItems = _a.totalItems;
    return !(currentSlide + _a.slidesToShow < totalItems);
}
function getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) {
    void 0 === partialVisibilityGutter && (partialVisibilityGutter = 0);
    var currentSlide = state.currentSlide, slidesToShow = state.slidesToShow, isRightEndReach = isInRightEnd(state), shouldRemoveRightGutter = !props.infinite && isRightEndReach, baseTransform = transformPlaceHolder || state.transform;
    if (notEnoughChildren(state)) return baseTransform;
    var transform = baseTransform + currentSlide * partialVisibilityGutter;
    return shouldRemoveRightGutter ? transform + (state.containerWidth - (state.itemWidth - partialVisibilityGutter) * slidesToShow) : transform;
}
function parsePosition(props, position) {
    return props.rtl ? -1 * position : position;
}
function getTransform(state, props, transformPlaceHolder) {
    var partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, responsive = props.responsive, deviceType = props.deviceType, centerMode = props.centerMode, transform = transformPlaceHolder || state.transform, partialVisibilityGutter = elementWidth_1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType);
    return parsePosition(props, partialVisible || partialVisbile ? getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) : centerMode ? getTransformForCenterMode(state, props, transformPlaceHolder) : transform);
}
function getSlidesToSlide(state, props) {
    var domLoaded = state.domLoaded, slidesToShow = state.slidesToShow, containerWidth = state.containerWidth, itemWidth = state.itemWidth, deviceType = props.deviceType, responsive = props.responsive, slidesToScroll = props.slidesToSlide || 1, domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
    return props.ssr && props.deviceType && !domFullyLoaded && Object.keys(responsive).forEach(function(device) {
        var slidesToSlide = responsive[device].slidesToSlide;
        deviceType === device && slidesToSlide && (slidesToScroll = slidesToSlide);
    }), domFullyLoaded && Object.keys(responsive).forEach(function(item) {
        var _a = responsive[item], breakpoint = _a.breakpoint, slidesToSlide = _a.slidesToSlide, max = breakpoint.max, min = breakpoint.min;
        slidesToSlide && window.innerWidth >= min && window.innerWidth <= max && (slidesToScroll = slidesToSlide);
    }), slidesToScroll;
}
exports.notEnoughChildren = notEnoughChildren, exports.getInitialState = getInitialState, exports.getIfSlideIsVisbile = getIfSlideIsVisbile, exports.getTransformForCenterMode = getTransformForCenterMode, exports.isInLeftEnd = isInLeftEnd, exports.isInRightEnd = isInRightEnd, exports.getTransformForPartialVsibile = getTransformForPartialVsibile, exports.parsePosition = parsePosition, exports.getTransform = getTransform, exports.getSlidesToSlide = getSlidesToSlide;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/throttle.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var throttle = function(func, limit, setIsInThrottle) {
    var inThrottle;
    return function() {
        var args = arguments;
        inThrottle || (func.apply(this, args), inThrottle = !0, "function" == typeof setIsInThrottle && setIsInThrottle(!0), setTimeout(function() {
            inThrottle = !1, "function" == typeof setIsInThrottle && setIsInThrottle(!1);
        }, limit));
    };
};
exports.default = throttle;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/throwError.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function throwError(state, props) {
    var partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, centerMode = props.centerMode, ssr = props.ssr, responsive = props.responsive;
    if ((partialVisbile || partialVisible) && centerMode) throw new Error("center mode can not be used at the same time with partialVisible");
    if (!responsive) throw ssr ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
    if (responsive && "object" != typeof responsive) throw new Error("responsive prop must be an object");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = throwError;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/next.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var common_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)");
function populateNextSlides(state, props, slidesHavePassed) {
    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var nextSlides, nextPosition, slidesToShow = state.slidesToShow, currentSlide = state.currentSlide, itemWidth = state.itemWidth, totalItems = state.totalItems, slidesToSlide = common_1.getSlidesToSlide(state, props), nextMaximumSlides = currentSlide + 1 + slidesHavePassed + slidesToShow + (0 < slidesHavePassed ? 0 : slidesToSlide);
    return nextPosition = nextMaximumSlides <= totalItems ? -itemWidth * (nextSlides = currentSlide + slidesHavePassed + (0 < slidesHavePassed ? 0 : slidesToSlide)) : totalItems < nextMaximumSlides && currentSlide !== totalItems - slidesToShow ? -itemWidth * (nextSlides = totalItems - slidesToShow) : nextSlides = void 0, {
        nextSlides: nextSlides,
        nextPosition: nextPosition
    };
}
exports.populateNextSlides = populateNextSlides;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/previous.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = __turbopack_context__.r("[project]/power-orbit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), common_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)"), common_2 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)");
function populatePreviousSlides(state, props, slidesHavePassed) {
    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var nextSlides, nextPosition, currentSlide = state.currentSlide, itemWidth = state.itemWidth, slidesToShow = state.slidesToShow, children = props.children, showDots = props.showDots, infinite = props.infinite, slidesToSlide = common_1.getSlidesToSlide(state, props), nextMaximumSlides = currentSlide - slidesHavePassed - (0 < slidesHavePassed ? 0 : slidesToSlide), additionalSlides = (React.Children.toArray(children).length - slidesToShow) % slidesToSlide;
    return nextPosition = 0 <= nextMaximumSlides ? (nextSlides = nextMaximumSlides, showDots && !infinite && 0 < additionalSlides && common_2.isInRightEnd(state) && (nextSlides = currentSlide - additionalSlides), -itemWidth * nextSlides) : nextSlides = nextMaximumSlides < 0 && 0 !== currentSlide ? 0 : void 0, {
        nextSlides: nextSlides,
        nextPosition: nextPosition
    };
}
exports.populatePreviousSlides = populatePreviousSlides;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function populateSlidesOnMouseTouchMove(state, props, initialX, lastX, clientX, transformPlaceHolder) {
    var direction, nextPosition, itemWidth = state.itemWidth, slidesToShow = state.slidesToShow, totalItems = state.totalItems, currentSlide = state.currentSlide, infinite = props.infinite, canContinue = !1, slidesHavePassedRight = Math.round((initialX - lastX) / itemWidth), slidesHavePassedLeft = Math.round((lastX - initialX) / itemWidth), isMovingLeft = initialX < clientX;
    if (clientX < initialX && !!(slidesHavePassedRight <= slidesToShow)) {
        direction = "right";
        var translateXLimit = Math.abs(-itemWidth * (totalItems - slidesToShow)), nextTranslate = transformPlaceHolder - (lastX - clientX), isLastSlide = currentSlide === totalItems - slidesToShow;
        (Math.abs(nextTranslate) <= translateXLimit || isLastSlide && infinite) && (nextPosition = nextTranslate, canContinue = !0);
    }
    isMovingLeft && slidesHavePassedLeft <= slidesToShow && (direction = "left", ((nextTranslate = transformPlaceHolder + (clientX - lastX)) <= 0 || 0 === currentSlide && infinite) && (canContinue = !0, nextPosition = nextTranslate));
    return {
        direction: direction,
        nextPosition: nextPosition,
        canContinue: canContinue
    };
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.populateSlidesOnMouseTouchMove = populateSlidesOnMouseTouchMove;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var clones_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/clones.js [app-ssr] (ecmascript)");
exports.getOriginalCounterPart = clones_1.getOriginalCounterPart, exports.getClones = clones_1.getClones, exports.checkClonesPosition = clones_1.checkClonesPosition, exports.getInitialSlideInInfiniteMode = clones_1.getInitialSlideInInfiniteMode;
var elementWidth_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/elementWidth.js [app-ssr] (ecmascript)");
exports.getWidthFromDeviceType = elementWidth_1.getWidthFromDeviceType, exports.getPartialVisibilityGutter = elementWidth_1.getPartialVisibilityGutter, exports.getItemClientSideWidth = elementWidth_1.getItemClientSideWidth;
var common_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)");
exports.getInitialState = common_1.getInitialState, exports.getIfSlideIsVisbile = common_1.getIfSlideIsVisbile, exports.getTransformForCenterMode = common_1.getTransformForCenterMode, exports.getTransformForPartialVsibile = common_1.getTransformForPartialVsibile, exports.isInLeftEnd = common_1.isInLeftEnd, exports.isInRightEnd = common_1.isInRightEnd, exports.notEnoughChildren = common_1.notEnoughChildren, exports.getSlidesToSlide = common_1.getSlidesToSlide;
var throttle_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/throttle.js [app-ssr] (ecmascript)");
exports.throttle = throttle_1.default;
var throwError_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/throwError.js [app-ssr] (ecmascript)");
exports.throwError = throwError_1.default;
var next_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/next.js [app-ssr] (ecmascript)");
exports.populateNextSlides = next_1.populateNextSlides;
var previous_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/previous.js [app-ssr] (ecmascript)");
exports.populatePreviousSlides = previous_1.populatePreviousSlides;
var mouseOrTouchMove_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js [app-ssr] (ecmascript)");
exports.populateSlidesOnMouseTouchMove = mouseOrTouchMove_1.populateSlidesOnMouseTouchMove;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    };
    return function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = __turbopack_context__.r("[project]/power-orbit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function isMouseMoveEvent(e) {
    return "clientY" in e;
}
exports.isMouseMoveEvent = isMouseMoveEvent;
var Carousel = function(_super) {
    function Carousel() {
        return null !== _super && _super.apply(this, arguments) || this;
    }
    return __extends(Carousel, _super), Carousel;
}(React.Component);
exports.default = Carousel;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/dots.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var clones_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/clones.js [app-ssr] (ecmascript)"), common_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)");
function getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr) {
    var table = {}, slidesToSlide = common_1.getSlidesToSlide(state, props);
    return Array(numberOfDotsToShow).fill(0).forEach(function(_, i) {
        var nextSlide = clones_1.getOriginalCounterPart(i, state, childrenArr);
        if (0 === i) table[0] = nextSlide;
        else {
            var now = table[i - 1] + slidesToSlide;
            table[i] = now;
        }
    }), table;
}
exports.getLookupTableForNextSlides = getLookupTableForNextSlides;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/Dots.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = __turbopack_context__.r("[project]/power-orbit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), clones_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/clones.js [app-ssr] (ecmascript)"), dots_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/dots.js [app-ssr] (ecmascript)"), common_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)"), Dots = function(_a) {
    var props = _a.props, state = _a.state, goToSlide = _a.goToSlide, getState = _a.getState, showDots = props.showDots, customDot = props.customDot, dotListClass = props.dotListClass, infinite = props.infinite, children = props.children;
    if (!showDots || common_1.notEnoughChildren(state)) return null;
    var numberOfDotsToShow, currentSlide = state.currentSlide, slidesToShow = state.slidesToShow, slidesToSlide = common_1.getSlidesToSlide(state, props), childrenArr = React.Children.toArray(children);
    numberOfDotsToShow = infinite ? Math.ceil(childrenArr.length / slidesToSlide) : Math.ceil((childrenArr.length - slidesToShow) / slidesToSlide) + 1;
    var nextSlidesTable = dots_1.getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr), lookupTable = clones_1.getOriginalIndexLookupTableByClones(slidesToShow, childrenArr), currentSlides = lookupTable[currentSlide];
    return React.createElement("ul", {
        className: "react-multi-carousel-dot-list " + dotListClass
    }, Array(numberOfDotsToShow).fill(0).map(function(_, index) {
        var isActive, nextSlide;
        if (infinite) {
            nextSlide = nextSlidesTable[index];
            var cloneIndex = lookupTable[nextSlide];
            isActive = currentSlides === cloneIndex || cloneIndex <= currentSlides && currentSlides < cloneIndex + slidesToSlide;
        } else {
            var maximumNextSlide = childrenArr.length - slidesToShow, possibileNextSlides = index * slidesToSlide;
            isActive = (nextSlide = maximumNextSlide < possibileNextSlides ? maximumNextSlide : possibileNextSlides) === currentSlide || nextSlide < currentSlide && currentSlide < nextSlide + slidesToSlide && currentSlide < childrenArr.length - slidesToShow;
        }
        return customDot ? React.cloneElement(customDot, {
            index: index,
            active: isActive,
            key: index,
            onClick: function() {
                return goToSlide(nextSlide);
            },
            carouselState: getState()
        }) : React.createElement("li", {
            "data-index": index,
            key: index,
            className: "react-multi-carousel-dot " + (isActive ? "react-multi-carousel-dot--active" : "")
        }, React.createElement("button", {
            "aria-label": "Go to slide " + (index + 1),
            onClick: function() {
                return goToSlide(nextSlide);
            }
        }));
    }));
};
exports.default = Dots;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/Arrows.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = __turbopack_context__.r("[project]/power-orbit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), LeftArrow = function(_a) {
    var customLeftArrow = _a.customLeftArrow, getState = _a.getState, previous = _a.previous, disabled = _a.disabled, rtl = _a.rtl;
    if (customLeftArrow) return React.cloneElement(customLeftArrow, {
        onClick: function() {
            return previous();
        },
        carouselState: getState(),
        disabled: disabled,
        rtl: rtl
    });
    var rtlClassName = rtl ? "rtl" : "";
    return React.createElement("button", {
        "aria-label": "Go to previous slide",
        className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " + rtlClassName,
        onClick: function() {
            return previous();
        },
        type: "button",
        disabled: disabled
    });
};
exports.LeftArrow = LeftArrow;
var RightArrow = function(_a) {
    var customRightArrow = _a.customRightArrow, getState = _a.getState, next = _a.next, disabled = _a.disabled, rtl = _a.rtl;
    if (customRightArrow) return React.cloneElement(customRightArrow, {
        onClick: function() {
            return next();
        },
        carouselState: getState(),
        disabled: disabled,
        rtl: rtl
    });
    var rtlClassName = rtl ? "rtl" : "";
    return React.createElement("button", {
        "aria-label": "Go to next slide",
        className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " + rtlClassName,
        onClick: function() {
            return next();
        },
        type: "button",
        disabled: disabled
    });
};
exports.RightArrow = RightArrow;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/CarouselItems.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = __turbopack_context__.r("[project]/power-orbit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), utils_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/index.js [app-ssr] (ecmascript)"), CarouselItems = function(_a) {
    var props = _a.props, state = _a.state, goToSlide = _a.goToSlide, clones = _a.clones, notEnoughChildren = _a.notEnoughChildren, itemWidth = state.itemWidth, children = props.children, infinite = props.infinite, itemClass = props.itemClass, itemAriaLabel = props.itemAriaLabel, partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, _b = utils_1.getInitialState(state, props), flexBisis = _b.flexBisis, shouldRenderOnSSR = _b.shouldRenderOnSSR, domFullyLoaded = _b.domFullyLoaded, partialVisibilityGutter = _b.partialVisibilityGutter;
    return _b.shouldRenderAtAll ? (partialVisbile && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), React.createElement(React.Fragment, null, (infinite ? clones : React.Children.toArray(children)).map(function(child, index) {
        return React.createElement("li", {
            key: index,
            "data-index": index,
            onClick: function() {
                props.focusOnSelect && goToSlide(index);
            },
            "aria-hidden": utils_1.getIfSlideIsVisbile(index, state) ? "false" : "true",
            "aria-label": itemAriaLabel || (child.props.ariaLabel ? child.props.ariaLabel : null),
            style: {
                flex: shouldRenderOnSSR ? "1 0 " + flexBisis + "%" : "auto",
                position: "relative",
                width: domFullyLoaded ? ((partialVisbile || partialVisible) && partialVisibilityGutter && !notEnoughChildren ? itemWidth - partialVisibilityGutter : itemWidth) + "px" : "auto"
            },
            className: "react-multi-carousel-item " + (utils_1.getIfSlideIsVisbile(index, state) ? "react-multi-carousel-item--active" : "") + " " + itemClass
        }, child);
    }))) : null;
};
exports.default = CarouselItems;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/Carousel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    };
    return function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = __turbopack_context__.r("[project]/power-orbit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), utils_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/index.js [app-ssr] (ecmascript)"), types_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/types.js [app-ssr] (ecmascript)"), Dots_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/Dots.js [app-ssr] (ecmascript)"), Arrows_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/Arrows.js [app-ssr] (ecmascript)"), CarouselItems_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/CarouselItems.js [app-ssr] (ecmascript)"), common_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/utils/common.js [app-ssr] (ecmascript)"), defaultTransitionDuration = 400, defaultTransition = "transform 400ms ease-in-out", Carousel = function(_super) {
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        return _this.containerRef = React.createRef(), _this.listRef = React.createRef(), _this.state = {
            itemWidth: 0,
            slidesToShow: 0,
            currentSlide: 0,
            totalItems: React.Children.count(props.children),
            deviceType: "",
            domLoaded: !1,
            transform: 0,
            containerWidth: 0
        }, _this.onResize = _this.onResize.bind(_this), _this.handleDown = _this.handleDown.bind(_this), _this.handleMove = _this.handleMove.bind(_this), _this.handleOut = _this.handleOut.bind(_this), _this.onKeyUp = _this.onKeyUp.bind(_this), _this.handleEnter = _this.handleEnter.bind(_this), _this.setIsInThrottle = _this.setIsInThrottle.bind(_this), _this.next = utils_1.throttle(_this.next.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.previous = utils_1.throttle(_this.previous.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.goToSlide = utils_1.throttle(_this.goToSlide.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.onMove = !1, _this.initialX = 0, _this.lastX = 0, _this.isAnimationAllowed = !1, _this.direction = "", _this.initialY = 0, _this.isInThrottle = !1, _this.transformPlaceHolder = 0, _this;
    }
    return __extends(Carousel, _super), Carousel.prototype.resetTotalItems = function() {
        var _this = this, totalItems = React.Children.count(this.props.children), currentSlide = utils_1.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, totalItems));
        this.setState({
            totalItems: totalItems,
            currentSlide: currentSlide
        }, function() {
            _this.setContainerAndItemWidth(_this.state.slidesToShow, !0);
        });
    }, Carousel.prototype.setIsInThrottle = function(isInThrottle) {
        void 0 === isInThrottle && (isInThrottle = !1), this.isInThrottle = isInThrottle;
    }, Carousel.prototype.setTransformDirectly = function(position, withAnimation) {
        var additionalTransfrom = this.props.additionalTransfrom;
        this.transformPlaceHolder = position;
        var currentTransform = common_1.getTransform(this.state, this.props, this.transformPlaceHolder);
        this.listRef && this.listRef.current && (this.setAnimationDirectly(withAnimation), this.listRef.current.style.transform = "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)");
    }, Carousel.prototype.setAnimationDirectly = function(animationAllowed) {
        this.listRef && this.listRef.current && (this.listRef.current.style.transition = animationAllowed ? this.props.customTransition || defaultTransition : "none");
    }, Carousel.prototype.componentDidMount = function() {
        this.setState({
            domLoaded: !0
        }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    }, Carousel.prototype.setClones = function(slidesToShow, itemWidth, forResizing, resetCurrentSlide) {
        var _this = this;
        void 0 === resetCurrentSlide && (resetCurrentSlide = !1), this.isAnimationAllowed = !1;
        var childrenArr = React.Children.toArray(this.props.children), initialSlide = utils_1.getInitialSlideInInfiniteMode(slidesToShow || this.state.slidesToShow, childrenArr), clones = utils_1.getClones(this.state.slidesToShow, childrenArr), currentSlide = childrenArr.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
        this.setState({
            totalItems: clones.length,
            currentSlide: forResizing && !resetCurrentSlide ? currentSlide : initialSlide
        }, function() {
            _this.correctItemsPosition(itemWidth || _this.state.itemWidth);
        });
    }, Carousel.prototype.setItemsToShow = function(shouldCorrectItemPosition, resetCurrentSlide) {
        var _this = this, responsive = this.props.responsive;
        Object.keys(responsive).forEach(function(item) {
            var _a = responsive[item], breakpoint = _a.breakpoint, items = _a.items, max = breakpoint.max, min = breakpoint.min, widths = [
                window.innerWidth
            ];
            window.screen && window.screen.width && widths.push(window.screen.width);
            var screenWidth = Math.min.apply(Math, widths);
            min <= screenWidth && screenWidth <= max && (_this.setState({
                slidesToShow: items,
                deviceType: item
            }), _this.setContainerAndItemWidth(items, shouldCorrectItemPosition, resetCurrentSlide));
        });
    }, Carousel.prototype.setContainerAndItemWidth = function(slidesToShow, shouldCorrectItemPosition, resetCurrentSlide) {
        var _this = this;
        if (this.containerRef && this.containerRef.current) {
            var containerWidth = this.containerRef.current.offsetWidth, itemWidth_1 = utils_1.getItemClientSideWidth(this.props, slidesToShow, containerWidth);
            this.setState({
                containerWidth: containerWidth,
                itemWidth: itemWidth_1
            }, function() {
                _this.props.infinite && _this.setClones(slidesToShow, itemWidth_1, shouldCorrectItemPosition, resetCurrentSlide);
            }), shouldCorrectItemPosition && this.correctItemsPosition(itemWidth_1);
        }
    }, Carousel.prototype.correctItemsPosition = function(itemWidth, isAnimationAllowed, setToDomDirectly) {
        isAnimationAllowed && (this.isAnimationAllowed = !0), !isAnimationAllowed && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
        var nextTransform = this.state.totalItems < this.state.slidesToShow ? 0 : -itemWidth * this.state.currentSlide;
        setToDomDirectly && this.setTransformDirectly(nextTransform, !0), this.setState({
            transform: nextTransform
        });
    }, Carousel.prototype.onResize = function(value) {
        var shouldCorrectItemPosition;
        shouldCorrectItemPosition = !!this.props.infinite && ("boolean" != typeof value || !value), this.setItemsToShow(shouldCorrectItemPosition);
    }, Carousel.prototype.componentDidUpdate = function(_a, _b) {
        var _this = this, keyBoardControl = _a.keyBoardControl, autoPlay = _a.autoPlay, children = _a.children, containerWidth = _b.containerWidth, domLoaded = _b.domLoaded, currentSlide = _b.currentSlide;
        if (this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== containerWidth && (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), this.itemsToShowTimeout = setTimeout(function() {
            _this.setItemsToShow(!0);
        }, this.props.transitionDuration || defaultTransitionDuration)), keyBoardControl && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !keyBoardControl && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), autoPlay && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), autoPlay || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), children.length !== this.props.children.length ? Carousel.clonesTimeout = setTimeout(function() {
            _this.props.infinite ? _this.setClones(_this.state.slidesToShow, _this.state.itemWidth, !0, !0) : _this.resetTotalItems();
        }, this.props.transitionDuration || defaultTransitionDuration) : this.props.infinite && this.state.currentSlide !== currentSlide && this.correctClonesPosition({
            domLoaded: domLoaded
        }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform), this.props.autoPlay && this.props.rewind && !this.props.infinite && utils_1.isInRightEnd(this.state)) {
            var rewindBuffer = this.props.transitionDuration || defaultTransitionDuration;
            Carousel.isInThrottleTimeout = setTimeout(function() {
                _this.setIsInThrottle(!1), _this.resetAutoplayInterval(), _this.goToSlide(0, void 0, !!_this.props.rewindWithAnimation);
            }, rewindBuffer + this.props.autoPlaySpeed);
        }
    }, Carousel.prototype.correctClonesPosition = function(_a) {
        var _this = this, domLoaded = _a.domLoaded, childrenArr = React.Children.toArray(this.props.children), _b = utils_1.checkClonesPosition(this.state, childrenArr, this.props), isReachingTheEnd = _b.isReachingTheEnd, isReachingTheStart = _b.isReachingTheStart, nextSlide = _b.nextSlide, nextPosition = _b.nextPosition;
        this.state.domLoaded && domLoaded && (isReachingTheEnd || isReachingTheStart) && (this.isAnimationAllowed = !1, Carousel.transformTimeout = setTimeout(function() {
            _this.setState({
                transform: nextPosition,
                currentSlide: nextSlide
            });
        }, this.props.transitionDuration || defaultTransitionDuration));
    }, Carousel.prototype.next = function(slidesHavePassed) {
        var _this = this;
        void 0 === slidesHavePassed && (slidesHavePassed = 0);
        var _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange;
        if (!utils_1.notEnoughChildren(this.state)) {
            var _b = utils_1.populateNextSlides(this.state, this.props, slidesHavePassed), nextSlides = _b.nextSlides, nextPosition = _b.nextPosition, previousSlide = this.state.currentSlide;
            void 0 !== nextSlides && void 0 !== nextPosition && ("function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                transform: nextPosition,
                currentSlide: nextSlides
            }, function() {
                "function" == typeof afterChange && (Carousel.afterChangeTimeout = setTimeout(function() {
                    afterChange(previousSlide, _this.getState());
                }, _this.props.transitionDuration || defaultTransitionDuration));
            }));
        }
    }, Carousel.prototype.previous = function(slidesHavePassed) {
        var _this = this;
        void 0 === slidesHavePassed && (slidesHavePassed = 0);
        var _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange;
        if (!utils_1.notEnoughChildren(this.state)) {
            var _b = utils_1.populatePreviousSlides(this.state, this.props, slidesHavePassed), nextSlides = _b.nextSlides, nextPosition = _b.nextPosition;
            if (void 0 !== nextSlides && void 0 !== nextPosition) {
                var previousSlide = this.state.currentSlide;
                "function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                    transform: nextPosition,
                    currentSlide: nextSlides
                }, function() {
                    "function" == typeof afterChange && (Carousel.afterChangeTimeout2 = setTimeout(function() {
                        afterChange(previousSlide, _this.getState());
                    }, _this.props.transitionDuration || defaultTransitionDuration));
                });
            }
        }
    }, Carousel.prototype.resetAutoplayInterval = function() {
        this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    }, Carousel.prototype.componentWillUnmount = function() {
        window.removeEventListener("resize", this.onResize), this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), Carousel.clonesTimeout && clearTimeout(Carousel.clonesTimeout), Carousel.isInThrottleTimeout && clearTimeout(Carousel.isInThrottleTimeout), Carousel.transformTimeout && clearTimeout(Carousel.transformTimeout), Carousel.afterChangeTimeout && clearTimeout(Carousel.afterChangeTimeout), Carousel.afterChangeTimeout2 && clearTimeout(Carousel.afterChangeTimeout2), Carousel.afterChangeTimeout3 && clearTimeout(Carousel.afterChangeTimeout3);
    }, Carousel.prototype.resetMoveStatus = function() {
        this.onMove = !1, this.initialX = 0, this.lastX = 0, this.direction = "", this.initialY = 0;
    }, Carousel.prototype.getCords = function(_a) {
        var clientX = _a.clientX, clientY = _a.clientY;
        return {
            clientX: common_1.parsePosition(this.props, clientX),
            clientY: common_1.parsePosition(this.props, clientY)
        };
    }, Carousel.prototype.handleDown = function(e) {
        if (!(!types_1.isMouseMoveEvent(e) && !this.props.swipeable || types_1.isMouseMoveEvent(e) && !this.props.draggable || this.isInThrottle)) {
            var _a = this.getCords(types_1.isMouseMoveEvent(e) ? e : e.touches[0]), clientX = _a.clientX, clientY = _a.clientY;
            this.onMove = !0, this.initialX = clientX, this.initialY = clientY, this.lastX = clientX, this.isAnimationAllowed = !1;
        }
    }, Carousel.prototype.handleMove = function(e) {
        if (!(!types_1.isMouseMoveEvent(e) && !this.props.swipeable || types_1.isMouseMoveEvent(e) && !this.props.draggable || utils_1.notEnoughChildren(this.state))) {
            var _a = this.getCords(types_1.isMouseMoveEvent(e) ? e : e.touches[0]), clientX = _a.clientX, clientY = _a.clientY, diffX = this.initialX - clientX, diffY = this.initialY - clientY;
            if (this.onMove) {
                if (!(Math.abs(diffX) > Math.abs(diffY))) return;
                var _b = utils_1.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, clientX, this.transformPlaceHolder), direction = _b.direction, nextPosition = _b.nextPosition, canContinue = _b.canContinue;
                direction && (this.direction = direction, canContinue && void 0 !== nextPosition && this.setTransformDirectly(nextPosition)), this.lastX = clientX;
            }
        }
    }, Carousel.prototype.handleOut = function(e) {
        this.props.autoPlay && !this.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
        var shouldDisableOnMobile = "touchend" === e.type && !this.props.swipeable, shouldDisableOnDesktop = ("mouseleave" === e.type || "mouseup" === e.type) && !this.props.draggable;
        if (!shouldDisableOnMobile && !shouldDisableOnDesktop && this.onMove) {
            if (this.setAnimationDirectly(!0), "right" === this.direction) if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
                var slidesHavePassed = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
                this.next(slidesHavePassed);
            } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
            if ("left" === this.direction) if (this.lastX - this.initialX > this.props.minimumTouchDrag) {
                slidesHavePassed = Math.round((this.lastX - this.initialX) / this.state.itemWidth);
                this.previous(slidesHavePassed);
            } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
            this.resetMoveStatus();
        }
    }, Carousel.prototype.isInViewport = function(el) {
        var _a = el.getBoundingClientRect(), _b = _a.top, top = void 0 === _b ? 0 : _b, _c = _a.left, left = void 0 === _c ? 0 : _c, _d = _a.bottom, bottom = void 0 === _d ? 0 : _d, _e = _a.right, right = void 0 === _e ? 0 : _e;
        return 0 <= top && 0 <= left && bottom <= (window.innerHeight || document.documentElement.clientHeight) && right <= (window.innerWidth || document.documentElement.clientWidth);
    }, Carousel.prototype.isChildOfCarousel = function(el) {
        return !!(el instanceof Element && this.listRef && this.listRef.current) && this.listRef.current.contains(el);
    }, Carousel.prototype.onKeyUp = function(e) {
        var target = e.target;
        switch(e.keyCode){
            case 37:
                if (this.isChildOfCarousel(target)) return this.previous();
                break;
            case 39:
                if (this.isChildOfCarousel(target)) return this.next();
                break;
            case 9:
                if (this.isChildOfCarousel(target) && target instanceof HTMLInputElement && this.isInViewport(target)) return this.next();
        }
    }, Carousel.prototype.handleEnter = function(e) {
        types_1.isMouseMoveEvent(e) && this.autoPlay && this.props.autoPlay && this.props.pauseOnHover && (clearInterval(this.autoPlay), this.autoPlay = void 0);
    }, Carousel.prototype.goToSlide = function(slide, skipCallbacks, animationAllowed) {
        var _this = this;
        if (void 0 === animationAllowed && (animationAllowed = !0), !this.isInThrottle) {
            var itemWidth = this.state.itemWidth, _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange, previousSlide = this.state.currentSlide;
            "function" != typeof beforeChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipBeforeChange) || beforeChange(slide, this.getState()), this.isAnimationAllowed = animationAllowed, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                currentSlide: slide,
                transform: -itemWidth * slide
            }, function() {
                _this.props.infinite && _this.correctClonesPosition({
                    domLoaded: !0
                }), "function" != typeof afterChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipAfterChange) || (Carousel.afterChangeTimeout3 = setTimeout(function() {
                    afterChange(previousSlide, _this.getState());
                }, _this.props.transitionDuration || defaultTransitionDuration));
            });
        }
    }, Carousel.prototype.getState = function() {
        return this.state;
    }, Carousel.prototype.renderLeftArrow = function(disbaled) {
        var _this = this, _a = this.props, customLeftArrow = _a.customLeftArrow, rtl = _a.rtl;
        return React.createElement(Arrows_1.LeftArrow, {
            customLeftArrow: customLeftArrow,
            getState: function() {
                return _this.getState();
            },
            previous: this.previous,
            disabled: disbaled,
            rtl: rtl
        });
    }, Carousel.prototype.renderRightArrow = function(disbaled) {
        var _this = this, _a = this.props, customRightArrow = _a.customRightArrow, rtl = _a.rtl;
        return React.createElement(Arrows_1.RightArrow, {
            customRightArrow: customRightArrow,
            getState: function() {
                return _this.getState();
            },
            next: this.next,
            disabled: disbaled,
            rtl: rtl
        });
    }, Carousel.prototype.renderButtonGroups = function() {
        var _this = this, customButtonGroup = this.props.customButtonGroup;
        return customButtonGroup ? React.cloneElement(customButtonGroup, {
            previous: function() {
                return _this.previous();
            },
            next: function() {
                return _this.next();
            },
            goToSlide: function(slideIndex, skipCallbacks) {
                return _this.goToSlide(slideIndex, skipCallbacks);
            },
            carouselState: this.getState()
        }) : null;
    }, Carousel.prototype.renderDotsList = function() {
        var _this = this;
        return React.createElement(Dots_1.default, {
            state: this.state,
            props: this.props,
            goToSlide: this.goToSlide,
            getState: function() {
                return _this.getState();
            }
        });
    }, Carousel.prototype.renderCarouselItems = function() {
        var clones = [];
        if (this.props.infinite) {
            var childrenArr = React.Children.toArray(this.props.children);
            clones = utils_1.getClones(this.state.slidesToShow, childrenArr);
        }
        return React.createElement(CarouselItems_1.default, {
            clones: clones,
            goToSlide: this.goToSlide,
            state: this.state,
            notEnoughChildren: utils_1.notEnoughChildren(this.state),
            props: this.props
        });
    }, Carousel.prototype.render = function() {
        var _a = this.props, deviceType = _a.deviceType, arrows = _a.arrows, renderArrowsWhenDisabled = _a.renderArrowsWhenDisabled, removeArrowOnDeviceType = _a.removeArrowOnDeviceType, infinite = _a.infinite, containerClass = _a.containerClass, sliderClass = _a.sliderClass, customTransition = _a.customTransition, additionalTransfrom = _a.additionalTransfrom, renderDotsOutside = _a.renderDotsOutside, renderButtonGroupOutside = _a.renderButtonGroupOutside, className = _a.className, rtl = _a.rtl;
        "production" !== ("TURBOPACK compile-time value", "development") && utils_1.throwError(this.state, this.props);
        var _b = utils_1.getInitialState(this.state, this.props), shouldRenderOnSSR = _b.shouldRenderOnSSR, shouldRenderAtAll = _b.shouldRenderAtAll, isLeftEndReach = utils_1.isInLeftEnd(this.state), isRightEndReach = utils_1.isInRightEnd(this.state), shouldShowArrows = arrows && !(removeArrowOnDeviceType && (deviceType && -1 < removeArrowOnDeviceType.indexOf(deviceType) || this.state.deviceType && -1 < removeArrowOnDeviceType.indexOf(this.state.deviceType))) && !utils_1.notEnoughChildren(this.state) && shouldRenderAtAll, disableLeftArrow = !infinite && isLeftEndReach, disableRightArrow = !infinite && isRightEndReach, currentTransform = common_1.getTransform(this.state, this.props);
        return React.createElement(React.Fragment, null, React.createElement("div", {
            className: "react-multi-carousel-list " + containerClass + " " + className,
            dir: rtl ? "rtl" : "ltr",
            ref: this.containerRef
        }, React.createElement("ul", {
            ref: this.listRef,
            className: "react-multi-carousel-track " + sliderClass,
            style: {
                transition: this.isAnimationAllowed ? customTransition || defaultTransition : "none",
                overflow: shouldRenderOnSSR ? "hidden" : "unset",
                transform: "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)"
            },
            onMouseMove: this.handleMove,
            onMouseDown: this.handleDown,
            onMouseUp: this.handleOut,
            onMouseEnter: this.handleEnter,
            onMouseLeave: this.handleOut,
            onTouchStart: this.handleDown,
            onTouchMove: this.handleMove,
            onTouchEnd: this.handleOut
        }, this.renderCarouselItems()), shouldShowArrows && (!disableLeftArrow || renderArrowsWhenDisabled) && this.renderLeftArrow(disableLeftArrow), shouldShowArrows && (!disableRightArrow || renderArrowsWhenDisabled) && this.renderRightArrow(disableRightArrow), shouldRenderAtAll && !renderButtonGroupOutside && this.renderButtonGroups(), shouldRenderAtAll && !renderDotsOutside && this.renderDotsList()), shouldRenderAtAll && renderDotsOutside && this.renderDotsList(), shouldRenderAtAll && renderButtonGroupOutside && this.renderButtonGroups());
    }, Carousel.defaultProps = {
        slidesToSlide: 1,
        infinite: !1,
        draggable: !0,
        swipeable: !0,
        arrows: !0,
        renderArrowsWhenDisabled: !1,
        containerClass: "",
        sliderClass: "",
        itemClass: "",
        keyBoardControl: !0,
        autoPlaySpeed: 3e3,
        showDots: !1,
        renderDotsOutside: !1,
        renderButtonGroupOutside: !1,
        minimumTouchDrag: 80,
        className: "",
        dotListClass: "",
        focusOnSelect: !1,
        centerMode: !1,
        additionalTransfrom: 0,
        pauseOnHover: !0,
        shouldResetAutoplay: !0,
        rewind: !1,
        rtl: !1,
        rewindWithAnimation: !1
    }, Carousel;
}(React.Component);
exports.default = Carousel;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var Carousel_1 = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/Carousel.js [app-ssr] (ecmascript)");
exports.default = Carousel_1.default;
}),
"[project]/power-orbit/node_modules/react-multi-carousel/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/power-orbit/node_modules/react-multi-carousel/lib/index.js [app-ssr] (ecmascript)");
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "progress",
    ()=>progress
]);
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/power-orbit/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
];

//# sourceMappingURL=0e--_0qe-q0b._.js.map