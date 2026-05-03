(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/power-orbit/components/elements/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const speed = 0.2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const move = {
                "CustomCursor.useEffect.move": (e)=>{
                    target.current.x = e.clientX;
                    target.current.y = e.clientY;
                }
            }["CustomCursor.useEffect.move"];
            const animate = {
                "CustomCursor.useEffect.animate": ()=>{
                    pos.current.x += (target.current.x - pos.current.x) * speed;
                    pos.current.y += (target.current.y - pos.current.y) * speed;
                    const x = pos.current.x;
                    const y = pos.current.y;
                    if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                    if (cursorRef2.current) cursorRef2.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                    requestAnimationFrame(animate);
                }
            }["CustomCursor.useEffect.animate"];
            // Hover detection
            const addHover = {
                "CustomCursor.useEffect.addHover": ()=>{
                    cursorRef.current?.classList.add("hover");
                    cursorRef2.current?.classList.add("hover");
                }
            }["CustomCursor.useEffect.addHover"];
            const removeHover = {
                "CustomCursor.useEffect.removeHover": ()=>{
                    cursorRef.current?.classList.remove("hover");
                    cursorRef2.current?.classList.remove("hover");
                }
            }["CustomCursor.useEffect.removeHover"];
            // Add hover events for interactive elements
            const interactiveElements = document.querySelectorAll("a, button, [data-cursor='hover']");
            interactiveElements.forEach({
                "CustomCursor.useEffect": (el)=>{
                    el.addEventListener("mouseenter", addHover);
                    el.addEventListener("mouseleave", removeHover);
                }
            }["CustomCursor.useEffect"]);
            window.addEventListener("mousemove", move);
            animate();
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", move);
                    interactiveElements.forEach({
                        "CustomCursor.useEffect": (el)=>{
                            el.removeEventListener("mouseenter", addHover);
                            el.removeEventListener("mouseleave", removeHover);
                        }
                    }["CustomCursor.useEffect"]);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: "custom-cursor__cursor"
            }, void 0, false, {
                fileName: "[project]/power-orbit/components/elements/CustomCursor.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef2,
                className: "custom-cursor__cursor-two"
            }, void 0, false, {
                fileName: "[project]/power-orbit/components/elements/CustomCursor.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "hc+3E3ds0hdwYaarr2Nc20jnAXw=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/power-orbit/components/elements/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/power-orbit/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SmoothScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return;
            }
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$power$2d$orbit$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                lerp: 0.06,
                smoothWheel: true,
                wheelMultiplier: 0.9
            });
            let rafId = 0;
            const raf = {
                "SmoothScroll.useEffect.raf": (time)=>{
                    lenis.raf(time);
                    rafId = requestAnimationFrame(raf);
                }
            }["SmoothScroll.useEffect.raf"];
            rafId = requestAnimationFrame(raf);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    lenis.destroy();
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return null;
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=power-orbit_components_elements_05samya._.js.map