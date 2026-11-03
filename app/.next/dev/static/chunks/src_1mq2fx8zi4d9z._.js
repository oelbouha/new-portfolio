(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SmoothScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SmoothScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$FullscreenMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/FullscreenMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ContactOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ContactOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/CustomCursor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function AppShell({ children }) {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contactOpen, setContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const transitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTransitioningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const safetyTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Listen for custom open-contact events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            const handleOpen = {
                "AppShell.useEffect.handleOpen": ()=>setContactOpen(true)
            }["AppShell.useEffect.handleOpen"];
            window.addEventListener('open-contact', handleOpen);
            return ({
                "AppShell.useEffect": ()=>window.removeEventListener('open-contact', handleOpen)
            })["AppShell.useEffect"];
        }
    }["AppShell.useEffect"], []);
    const handleContactOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleContactOpen]": ()=>{
            setContactOpen(true);
        }
    }["AppShell.useCallback[handleContactOpen]"], []);
    const handleContactClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleContactClose]": ()=>{
            setContactOpen(false);
        }
    }["AppShell.useCallback[handleContactClose]"], []);
    // Cleanup helper
    const completeTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[completeTransition]": ()=>{
            if (safetyTimerRef.current) {
                clearTimeout(safetyTimerRef.current);
                safetyTimerRef.current = null;
            }
            const transition = transitionRef.current;
            const overlay = overlayRef.current;
            const page = pageRef.current;
            if (transition) transition.style.display = 'none';
            if (overlay && page) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                overlay,
                page
            ], {
                clearProps: 'all'
            });
            isTransitioningRef.current = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        }
    }["AppShell.useCallback[completeTransition]"], []);
    // Handle route change during navigation — reveal new page cleanly with overlay fade
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            if (!isTransitioningRef.current) return;
            const transition = transitionRef.current;
            const overlay = overlayRef.current;
            const page = pageRef.current;
            if (!transition || !overlay || !page) return;
            window.scrollTo(0, 0);
            // Reset page transform so new page is positioned normally behind overlay
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(page, {
                clearProps: 'transform,rotation,scale',
                opacity: 1
            });
            // Phase 2: Fade out overlay cleanly to reveal the new page text and content
            requestAnimationFrame({
                "AppShell.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(overlay, {
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: completeTransition
                    });
                }
            }["AppShell.useEffect"]);
        }
    }["AppShell.useEffect"], [
        pathname,
        completeTransition
    ]);
    const handleNavigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleNavigate]": (href)=>{
            setMenuOpen(false);
            if (href.startsWith('#')) {
                const id = href.slice(1);
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({
                    behavior: 'smooth'
                });
                return;
            }
            if (href.startsWith('/#')) {
                const id = href.slice(2);
                if (pathname !== '/') {
                    handleNavigate('/');
                }
                setTimeout({
                    "AppShell.useCallback[handleNavigate]": ()=>{
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }["AppShell.useCallback[handleNavigate]"], 300);
                return;
            }
            if (isTransitioningRef.current) return;
            const transition = transitionRef.current;
            const overlay = overlayRef.current;
            const page = pageRef.current;
            if (!transition || !overlay || !page) {
                router.push(href);
                return;
            }
            const normalizedCurrent = (pathname || '/').replace(/\/$/, '') || '/';
            const normalizedTarget = href.replace(/\/$/, '') || '/';
            const isDark = document.documentElement.classList.contains('is-dark') || document.documentElement.classList.contains('dark');
            const isTargetProject = href.startsWith('/work/');
            const isCurrentProject = (pathname || '').startsWith('/work/');
            const homeBg = isDark ? '#111111' : '#E4E4E4';
            const projectBg = isDark ? '#111111' : '#E4E4E4';
            const startColor = isCurrentProject ? projectBg : homeBg;
            const endColor = isTargetProject ? projectBg : homeBg;
            isTransitioningRef.current = true;
            transition.style.display = 'block';
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(overlay, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                opacity: 1
            });
            // Safety timeout: if route doesn't change in 4s, clean up
            safetyTimerRef.current = setTimeout({
                "AppShell.useCallback[handleNavigate]": ()=>{
                    completeTransition();
                }
            }["AppShell.useCallback[handleNavigate]"], 4000);
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: 'power4.inOut'
                }
            });
            // Phase 1: Match exact menu open timing and transform (rotation 10, x 300, y 450, scale 1.5)
            tl.to(page, {
                rotation: 10,
                x: 300,
                y: 450,
                opacity: 0,
                scale: 1.5,
                duration: 1.8
            }, 0);
            tl.to(overlay, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)',
                duration: 1.8
            }, 0);
            tl.fromTo(overlay, {
                backgroundColor: startColor
            }, {
                backgroundColor: endColor,
                duration: 1.2,
                ease: 'power4.inOut'
            }, 0.4);
            // Midpoint: screen is covered by overlay. Trigger route change.
            tl.call({
                "AppShell.useCallback[handleNavigate]": ()=>{
                    if (normalizedCurrent === normalizedTarget) {
                        window.scrollTo(0, 0);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(overlay, {
                            opacity: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                            onComplete: completeTransition
                        });
                    } else {
                        router.push(href);
                    }
                }
            }["AppShell.useCallback[handleNavigate]"]);
        }
    }["AppShell.useCallback[handleNavigate]"], [
        router,
        pathname,
        completeTransition
    ]);
    // Capture clicks on internal links to guarantee smooth animation BEFORE any navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            const handleDocumentClick = {
                "AppShell.useEffect.handleDocumentClick": (e)=>{
                    // Allow user to cmd/ctrl click to open in a new tab
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                    const target = e.target?.closest('a');
                    if (!target) return;
                    const href = target.getAttribute('href');
                    if (!href) return;
                    // Ignore external links, mailto, tel, target="_blank", or download
                    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || target.getAttribute('target') === '_blank' || target.hasAttribute('download')) {
                        return;
                    }
                    // Hash navigation on same page
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        const id = href.slice(1);
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({
                            behavior: 'smooth'
                        });
                        return;
                    }
                    // Internal route navigation
                    if (href.startsWith('/') && !href.startsWith('//')) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        handleNavigate(href);
                    }
                }
            }["AppShell.useEffect.handleDocumentClick"];
            // Use capture phase to intercept BEFORE Next.js Link or React handles it
            document.addEventListener('click', handleDocumentClick, {
                capture: true
            });
            return ({
                "AppShell.useEffect": ()=>document.removeEventListener('click', handleDocumentClick, {
                        capture: true
                    })
            })["AppShell.useEffect"];
        }
    }["AppShell.useEffect"], [
        handleNavigate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SmoothScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothScroll"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCursor"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/AppShell.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                    onMenuOpen: ()=>setMenuOpen(true),
                    onContactOpen: handleContactOpen,
                    onNavigate: handleNavigate
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppShell.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$FullscreenMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FullscreenMenu"], {
                    isOpen: menuOpen,
                    onClose: ()=>setMenuOpen(false),
                    onNavigate: handleNavigate,
                    onContactOpen: handleContactOpen
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppShell.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ContactOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactOverlay"], {
                    isOpen: contactOpen,
                    onClose: handleContactClose
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppShell.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: transitionRef,
                    className: "page-transition",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: overlayRef,
                        className: "page-transition_overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppShell.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppShell.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: pageRef,
                    className: "page-main",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppShell.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppShell.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/AppShell.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
_s(AppShell, "svWJDKeC1kVOFnGxOCRX5cecjjk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/FullscreenMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FullscreenMenu",
    ()=>FullscreenMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar/Navbar.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function useLiveClock(tz) {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveClock.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const update = {
                "useLiveClock.useEffect.update": ()=>{
                    setTime(new Date().toLocaleTimeString('en-US', {
                        timeZone: tz,
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }));
                }
            }["useLiveClock.useEffect.update"];
            update();
            const id = setInterval(update, 1000);
            return ({
                "useLiveClock.useEffect": ()=>clearInterval(id)
            })["useLiveClock.useEffect"];
        }
    }["useLiveClock.useEffect"], [
        tz
    ]);
    return time;
}
_s(useLiveClock, "PsMgnLgzzQiamQWS0F3M3yb0/nk=");
function SVGMenuItem({ label, href, img, isInteractive, onNavigate }) {
    _s1();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rectClipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(`menu-clip-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
    const targetRectWidth = 120;
    const gap = 14;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SVGMenuItem.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let isCancelled = false;
            const measureAndInit = {
                "SVGMenuItem.useEffect.measureAndInit": ()=>{
                    if (!svgRef.current || !textRef.current || !rectClipRef.current || !imgRef.current) {
                        return;
                    }
                    const fontSize = 86;
                    const fontSpec = `900 ${fontSize}px "PP Neue Corp Tight Ultrabold", "Space Grotesk", sans-serif`;
                    const canvas = document.createElement('canvas');
                    const canvasCtx = canvas.getContext('2d');
                    let ascent = fontSize * 0.72;
                    let descent = 0;
                    if (canvasCtx) {
                        canvasCtx.font = fontSpec;
                        const metrics = canvasCtx.measureText(label);
                        if (metrics.actualBoundingBoxAscent > 0) {
                            ascent = metrics.actualBoundingBoxAscent;
                            descent = metrics.actualBoundingBoxDescent || 0;
                        }
                    }
                    const rectHeight = ascent + descent;
                    const rectY = 4;
                    const baselineY = rectY + ascent;
                    const rectRx = Math.min(rectHeight * 0.12, 10);
                    const textW = textRef.current.getComputedTextLength();
                    const totalWidth = targetRectWidth + gap + textW + 30;
                    const totalHeight = rectHeight + 12;
                    if (!isCancelled && svgRef.current) {
                        svgRef.current.setAttribute('viewBox', `0 0 ${totalWidth} ${totalHeight}`);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rectClipRef.current, {
                            attr: {
                                x: 0,
                                y: rectY,
                                width: 0,
                                height: rectHeight,
                                rx: rectRx
                            }
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imgRef.current, {
                            attr: {
                                x: 0,
                                y: rectY,
                                width: targetRectWidth,
                                height: rectHeight
                            },
                            opacity: 0
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(textRef.current, {
                            attr: {
                                x: 0,
                                y: baselineY
                            }
                        });
                    }
                }
            }["SVGMenuItem.useEffect.measureAndInit"];
            if (document.fonts) {
                document.fonts.ready.then({
                    "SVGMenuItem.useEffect": ()=>{
                        if (!isCancelled) measureAndInit();
                    }
                }["SVGMenuItem.useEffect"]);
            } else {
                measureAndInit();
            }
            return ({
                "SVGMenuItem.useEffect": ()=>{
                    isCancelled = true;
                }
            })["SVGMenuItem.useEffect"];
        }
    }["SVGMenuItem.useEffect"], [
        label
    ]);
    // Reset animation state whenever isInteractive turns false (e.g. menu opening or closing)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SVGMenuItem.useEffect": ()=>{
            if (!isInteractive) {
                if (rectClipRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rectClipRef.current, {
                    attr: {
                        width: 0
                    }
                });
                if (textRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(textRef.current, {
                    attr: {
                        x: 0
                    }
                });
                if (imgRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imgRef.current, {
                    opacity: 0
                });
            }
        }
    }["SVGMenuItem.useEffect"], [
        isInteractive
    ]);
    const handleMouseEnter = ()=>{
        if (!isInteractive || !textRef.current || !rectClipRef.current || !imgRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf([
            rectClipRef.current,
            textRef.current,
            imgRef.current
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(rectClipRef.current, {
            attr: {
                width: targetRectWidth
            },
            duration: 0.82,
            ease: 'power3.out',
            overwrite: 'auto'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
            attr: {
                x: targetRectWidth + gap
            },
            duration: 0.82,
            ease: 'power3.out',
            overwrite: 'auto'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgRef.current, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto'
        });
    };
    const handleMouseLeave = ()=>{
        if (!textRef.current || !rectClipRef.current || !imgRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf([
            rectClipRef.current,
            textRef.current,
            imgRef.current
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(rectClipRef.current, {
            attr: {
                width: 0
            },
            duration: 0.62,
            ease: 'power3.inOut',
            overwrite: 'auto'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
            attr: {
                x: 0
            },
            duration: 0.62,
            ease: 'power3.inOut',
            overwrite: 'auto'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgRef.current, {
            opacity: 0,
            duration: 0.45,
            ease: 'power2.in',
            overwrite: 'auto'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: `block select-none py-1 sm:py-2 w-full text-left ${isInteractive ? 'cursor-pointer' : 'cursor-default'}`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: (e)=>{
            e.preventDefault();
            if (!isInteractive) return;
            if (rectClipRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rectClipRef.current, {
                attr: {
                    width: 0
                }
            });
            if (textRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(textRef.current, {
                attr: {
                    x: 0
                }
            });
            if (imgRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imgRef.current, {
                opacity: 0
            });
            // Navigate directly — handleNavigate will close the menu behind the overlay
            onNavigate?.(href);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: svgRef,
            viewBox: "0 0 500 90",
            preserveAspectRatio: "xMinYMid meet",
            className: "w-full h-auto max-h-[85px] sm:max-h-[110px] lg:max-h-[135px] overflow-visible block text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: clipId.current,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            ref: rectClipRef,
                            x: "0",
                            y: "4",
                            width: "0",
                            height: "80",
                            rx: "8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: `url(#${clipId.current})`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                        ref: imgRef,
                        href: img,
                        x: "0",
                        y: "4",
                        width: targetRectWidth,
                        height: "80",
                        preserveAspectRatio: "xMidYMid slice"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    ref: textRef,
                    x: "0",
                    y: "72",
                    className: "fill-current font-black uppercase",
                    style: {
                        fontFamily: 'var(--font-display)',
                        fontSize: '86px',
                        fontWeight: 900,
                        letterSpacing: '-0.012em'
                    },
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s1(SVGMenuItem, "23YNeqWBjiNBoIWlu885j5Wdk9o=");
_c = SVGMenuItem;
function FullscreenMenu({ isOpen, onClose, onNavigate, onContactOpen }) {
    _s2();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const wasOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isNavigatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isInteractive, setIsInteractive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const moroccoTime = useLiveClock('Africa/Casablanca');
    const { navbar, fullscreenMenu } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutConfig"];
    // Primary Pages in Col 1 — from data
    const col1Items = fullscreenMenu.col1;
    // Services dynamically generated from servicesRegistry in Col 2
    const col2Items = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesRegistry"].map((s)=>({
            label: s.navLabel.toUpperCase(),
            href: `/services/${s.slug}`,
            img: s.hero.image.src
        }));
    // Called by SVGMenuItem when user clicks a nav link
    const handleMenuItemNavigate = (href)=>{
        isNavigatingRef.current = true;
        onNavigate?.(href);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FullscreenMenu.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const page = document.querySelector('.page-main');
            const menu = menuRef.current;
            const content = menuContentRef.current;
            if (!page || !menu || !content) return;
            if (isOpen && !wasOpen.current) {
                wasOpen.current = true;
                setIsInteractive(false);
                if (isAnimating.current) return;
                isAnimating.current = true;
                const tl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openMenu"])(page, menu, content);
                tl?.eventCallback('onComplete', {
                    "FullscreenMenu.useEffect": ()=>{
                        isAnimating.current = false;
                        setIsInteractive(true);
                    }
                }["FullscreenMenu.useEffect"]);
            } else if (!isOpen && wasOpen.current) {
                wasOpen.current = false;
                setIsInteractive(false);
                // If navigating, skip closeMenu's page-restore animation —
                // the page transition overlay is opaque and handles everything.
                if (isNavigatingRef.current) {
                    isNavigatingRef.current = false;
                    isAnimating.current = false;
                    menu.classList.remove('is-open');
                    document.body.style.overflow = '';
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                        menu,
                        content
                    ], {
                        clearProps: 'all'
                    });
                    return;
                }
                if (isAnimating.current) return;
                isAnimating.current = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeMenu"])(page, menu, content, {
                    "FullscreenMenu.useEffect": ()=>{
                        isAnimating.current = false;
                        setIsInteractive(false);
                    }
                }["FullscreenMenu.useEffect"]);
            }
        }
    }["FullscreenMenu.useEffect"], [
        isOpen
    ]);
    // ESC key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FullscreenMenu.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const fn = {
                "FullscreenMenu.useEffect.fn": (e)=>{
                    if (e.key === 'Escape' && isOpen) onClose();
                }
            }["FullscreenMenu.useEffect.fn"];
            window.addEventListener('keydown', fn);
            return ({
                "FullscreenMenu.useEffect": ()=>window.removeEventListener('keydown', fn)
            })["FullscreenMenu.useEffect"];
        }
    }["FullscreenMenu.useEffect"], [
        isOpen,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: menuRef,
        className: "nav-menu",
        "aria-hidden": !isOpen,
        "aria-modal": isOpen,
        role: "dialog",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: menuContentRef,
            className: "nav-menu_component relative w-full h-full overflow-hidden",
            style: {
                opacity: 0.25,
                transform: 'translateX(-100px) translateY(-100px) scale(1.5) rotate(-15deg)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 inset-x-0 w-full px-4 py-4 sm:px-6 lg:px-10 z-30 pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex md:hidden items-center justify-between w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        onClose();
                                        onNavigate?.('/');
                                    },
                                    className: "link",
                                    style: {
                                        textDecoration: 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "link_first",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                children: navbar.brandName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 361,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "link_second",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                children: navbar.brandName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 362,
                                                columnNumber: 44
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 sm:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: toggleTheme,
                                            className: "link flex items-center",
                                            "aria-label": "Toggle theme",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_first",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        children: theme === 'dark' ? 'LIGHT' : 'DARK'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_second",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        children: theme === 'dark' ? 'LIGHT' : 'DARK'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            "aria-label": "Close menu",
                                            className: "link flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_first",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        children: navbar.menuCloseLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_second",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        children: navbar.menuCloseLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 46
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:grid md:grid-cols-12 items-center w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 flex items-center justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            onClose();
                                            onNavigate?.('/');
                                        },
                                        className: "link",
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.brandName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.brandName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 46
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-start-3 col-span-3 flex items-center justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        className: "link",
                                        "aria-label": "Toggle theme",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: theme === 'dark' ? navbar.themeLightLabel : navbar.themeDarkLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: theme === 'dark' ? navbar.themeLightLabel : navbar.themeDarkLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-start-9 col-span-2 flex items-center justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        "aria-label": "Close menu",
                                        className: "link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.menuCloseLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.menuCloseLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 46
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-start-11 col-span-2 flex items-center justify-end text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onClose();
                                            onContactOpen?.();
                                        },
                                        className: "link",
                                        "aria-label": "Open contact",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.ctaLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.ctaHoverLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 46
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pt-24 pb-20 px-4 sm:px-6 lg:px-10 flex items-center justify-start z-10 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0 sm:gap-y-1 w-full items-center ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start w-full",
                                children: col1Items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SVGMenuItem, {
                                        ...item,
                                        isInteractive: isInteractive,
                                        onClose: onClose,
                                        onNavigate: handleMenuItemNavigate
                                    }, item.label, false, {
                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                        lineNumber: 439,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start w-full",
                                children: col2Items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SVGMenuItem, {
                                        ...item,
                                        isInteractive: isInteractive,
                                        onClose: onClose,
                                        onNavigate: handleMenuItemNavigate
                                    }, item.label, false, {
                                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 inset-x-0 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10 border-t border-black/10 dark:border-white/10 z-30 pointer-events-auto bg-[var(--nav-menu-bg)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text} opacity-60`,
                            children: fullscreenMenu.tagline
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text} opacity-60`,
                                    children: fullscreenMenu.locationName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                    children: moroccoTime
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
            lineNumber: 339,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/FullscreenMenu.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_s2(FullscreenMenu, "IVHfwFDNLsWDiTEJM8tfH3LE/dg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        useLiveClock
    ];
});
_c1 = FullscreenMenu;
var _c, _c1;
__turbopack_context__.k.register(_c, "SVGMenuItem");
__turbopack_context__.k.register(_c1, "FullscreenMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar/Navbar.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navbarStyles",
    ()=>navbarStyles
]);
const navbarStyles = {
    wrapper: 'fixed inset-x-0 top-0 z-[1000] pointer-events-none',
    bar: 'pointer-events-auto w-full bg-transparent',
    inner: 'flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-10',
    leftGroup: 'flex items-center gap-3',
    centerGroup: 'flex items-center gap-3 sm:gap-4',
    rightGroup: 'ml-auto flex items-center gap-4 text-right sm:gap-8',
    text: 'font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] text-[var(--nav-fixed-text)]',
    link: 'link',
    clock: 'flex items-center gap-2'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar/Navbar.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function useLiveClock(tz) {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveClock.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const update = {
                "useLiveClock.useEffect.update": ()=>{
                    setTime(new Date().toLocaleTimeString('en-US', {
                        timeZone: tz,
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }));
                }
            }["useLiveClock.useEffect.update"];
            update();
            const id = setInterval(update, 1000);
            return ({
                "useLiveClock.useEffect": ()=>clearInterval(id)
            })["useLiveClock.useEffect"];
        }
    }["useLiveClock.useEffect"], [
        tz
    ]);
    return time;
}
_s(useLiveClock, "PsMgnLgzzQiamQWS0F3M3yb0/nk=");
function CityTime({ city, tz }) {
    _s1();
    const time = useLiveClock(tz);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].clock,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                style: {
                    opacity: 0.55
                },
                children: city
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                suppressHydrationWarning: true,
                children: time
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s1(CityTime, "T3eHO3+D0bPFzuygJ5+7k8d4OPE=", false, function() {
    return [
        useLiveClock
    ];
});
_c = CityTime;
function Navbar({ onContactOpen, onMenuOpen, onNavigate }) {
    _s2();
    const handleContactOpen = onContactOpen ?? (()=>{});
    const handleMenuOpen = onMenuOpen ?? (()=>{});
    const { theme, toggleTheme, mounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const topRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isHiddenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const { navbar } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutConfig"];
    // Initial intro animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(topRef.current, {
                y: 0,
                duration: 1.4,
                ease: 'power4.out',
                delay: 0.1
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(bottomRef.current, {
                y: 0,
                duration: 1.4,
                ease: 'power4.out',
                delay: 0.1
            });
        }
    }["Navbar.useEffect"], []);
    // Directional scroll animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    const diff = currentScrollY - lastScrollY.current;
                    if (Math.abs(diff) < 6 && currentScrollY > 15) return;
                    if (currentScrollY > 60 && diff > 0) {
                        if (!isHiddenRef.current) {
                            isHiddenRef.current = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.nav-item-left', {
                                x: -80,
                                opacity: 0,
                                duration: 0.45,
                                ease: 'power3.out',
                                overwrite: 'auto'
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.nav-item-right', {
                                x: 80,
                                opacity: 0,
                                duration: 0.45,
                                ease: 'power3.out',
                                overwrite: 'auto'
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.nav-item-middle', {
                                y: -45,
                                opacity: 0,
                                duration: 0.45,
                                ease: 'power3.out',
                                overwrite: 'auto'
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(bottomRef.current, {
                                y: 50,
                                opacity: 0,
                                duration: 0.45,
                                ease: 'power3.out',
                                overwrite: 'auto'
                            });
                        }
                    } else if (diff < 0 || currentScrollY <= 15) {
                        if (isHiddenRef.current) {
                            isHiddenRef.current = false;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.nav-item-left, .nav-item-right', {
                                x: 0,
                                opacity: 1,
                                duration: 0.5,
                                ease: 'power3.out',
                                overwrite: 'auto'
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.nav-item-middle', {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                                ease: 'power3.out',
                                overwrite: 'auto'
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(bottomRef.current, {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                                ease: 'power3.out',
                                overwrite: 'auto'
                            });
                        }
                    }
                    lastScrollY.current = currentScrollY;
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleLinkNavigate = (e, href)=>{
        if (onNavigate) {
            e.preventDefault();
            onNavigate(href);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: topRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('nav-top', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].bar),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].inner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex md:hidden items-center justify-between w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-item-left flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        onClick: (e)=>handleLinkNavigate(e, '/'),
                                        className: "link",
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        "data-cursor-hover": navbar.brandHoverText,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.brandName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.brandName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-item-right flex items-center gap-4 sm:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: toggleTheme,
                                            className: "link flex items-center",
                                            "aria-label": "Toggle theme",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_first",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        suppressHydrationWarning: true,
                                                        children: !mounted ? 'DARK' : theme === 'dark' ? 'LIGHT' : 'DARK'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_second",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        suppressHydrationWarning: true,
                                                        children: !mounted ? 'DARK' : theme === 'dark' ? 'LIGHT' : 'DARK'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            id: "menuToggle",
                                            onClick: handleMenuOpen,
                                            className: "link flex items-center",
                                            "aria-label": "Open menu",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_first",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        children: navbar.menuLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "link_second",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                        children: navbar.menuOpenLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:grid md:grid-cols-12 items-center w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-item-left col-span-2 flex items-center justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        onClick: (e)=>handleLinkNavigate(e, '/'),
                                        className: "link",
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        "data-cursor-hover": navbar.brandHoverText,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.brandName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.brandName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-item-middle col-start-3 col-span-3 flex items-center justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        className: "link",
                                        "aria-label": "Toggle theme",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    suppressHydrationWarning: true,
                                                    children: !mounted ? navbar.themeDarkLabel : theme === 'dark' ? navbar.themeLightLabel : navbar.themeDarkLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    suppressHydrationWarning: true,
                                                    children: !mounted ? navbar.themeDarkLabel : theme === 'dark' ? navbar.themeLightLabel : navbar.themeDarkLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-item-middle col-start-9 col-span-2 flex items-center justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: "menuToggle",
                                        onClick: handleMenuOpen,
                                        className: "link",
                                        "aria-label": "Open menu",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.menuLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.menuOpenLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-item-right col-start-11 col-span-2 flex items-center justify-end text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleContactOpen,
                                        className: "link",
                                        "data-cursor-hover": navbar.ctaHoverLabel,
                                        "aria-label": "Open contact",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_first",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.ctaLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link_second",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                                                    children: navbar.ctaHoverLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: bottomRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('nav-bottom hidden md:flex', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].bar),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].inner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].text,
                            style: {
                                opacity: 0.6
                            },
                            children: navbar.tickerText
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarStyles"].rightGroup,
                            children: navbar.clocks.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CityTime, {
                                    city: c.city,
                                    tz: c.tz
                                }, c.city, false, {
                                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar/Navbar.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s2(Navbar, "Rv8TFKj+1T6JePc+knlI4Ez4GQM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "CityTime");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar/Navbar.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScroll",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function SmoothScroll({ children }) {
    _s();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            // Initialize Lenis smooth scroll
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.6,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 0.85,
                touchMultiplier: 2,
                infinite: false
            });
            lenisRef.current = lenis;
            window.__lenis = lenis;
            // Connect Lenis to GSAP ScrollTrigger
            lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            const updateLenis = {
                "SmoothScroll.useEffect.updateLenis": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["SmoothScroll.useEffect.updateLenis"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(updateLenis);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    window.__lenis = null;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(updateLenis);
                    lenis.destroy();
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    // Scroll to top on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, {
                    immediate: true
                });
            }
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }
    }["SmoothScroll.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/SmoothScroll.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(SmoothScroll, "7CRKi2ZDQ3VN/58sJiTq1y0XJBA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ContactOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactOverlay",
    ()=>ContactOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/ui.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SpotlightHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SpotlightHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ContactOverlay({ isOpen, onClose }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const wasOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [interest, setInterest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullyDisplayed, setIsFullyDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { contactModal, buttons } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactOverlay.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const overlay = overlayRef.current;
            const content = contentRef.current;
            const page = document.querySelector('.page-main');
            if (!overlay || !content) return;
            timelineRef.current?.kill();
            timelineRef.current = null;
            if (isOpen && !wasOpen.current) {
                wasOpen.current = true;
                setIsFullyDisplayed(false);
                isAnimating.current = true;
                overlay.classList.add('is-open');
                document.body.style.overflow = 'hidden';
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(content, {
                    opacity: 0.25,
                    x: -100,
                    y: -100,
                    scale: 1.5,
                    rotation: -15
                });
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    defaults: {
                        ease: 'power4.inOut',
                        duration: 1.8
                    },
                    onComplete: {
                        "ContactOverlay.useEffect.tl": ()=>{
                            timelineRef.current = null;
                            isAnimating.current = false;
                            setIsFullyDisplayed(true);
                        }
                    }["ContactOverlay.useEffect.tl"]
                });
                timelineRef.current = tl;
                if (page) tl.to(page, {
                    rotation: 10,
                    x: 300,
                    y: 450,
                    opacity: 0,
                    scale: 1.5
                }, 0);
                tl.to(overlay, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)'
                }, 0);
                tl.to(content, {
                    rotation: 0,
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1
                }, 0);
            } else if (!isOpen && wasOpen.current) {
                wasOpen.current = false;
                setIsFullyDisplayed(false);
                isAnimating.current = true;
                const page2 = document.querySelector('.page-main');
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    defaults: {
                        ease: 'power4.inOut',
                        duration: 1.8
                    },
                    onComplete: {
                        "ContactOverlay.useEffect.tl": ()=>{
                            timelineRef.current = null;
                            overlay.classList.remove('is-open');
                            document.body.style.overflow = '';
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                                content,
                                overlay
                            ], {
                                clearProps: 'all'
                            });
                            if (page2) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(page2, {
                                clearProps: 'all'
                            });
                            isAnimating.current = false;
                            setIsFullyDisplayed(false);
                        }
                    }["ContactOverlay.useEffect.tl"]
                });
                timelineRef.current = tl;
                if (page2) tl.to(page2, {
                    rotation: 0,
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1
                }, 0);
                tl.to(content, {
                    rotation: -15,
                    x: -100,
                    y: -100,
                    scale: 1.5,
                    opacity: 0.25
                }, 0);
                tl.to(overlay, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
                }, 0);
            }
        }
    }["ContactOverlay.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactOverlay.useEffect": ()=>({
                "ContactOverlay.useEffect": ()=>{
                    timelineRef.current?.kill();
                    if (typeof document !== 'undefined') {
                        document.body.style.overflow = '';
                    }
                }
            })["ContactOverlay.useEffect"]
    }["ContactOverlay.useEffect"], []);
    // ESC key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactOverlay.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const fn = {
                "ContactOverlay.useEffect.fn": (e)=>{
                    if (e.key === 'Escape' && isOpen) onClose();
                }
            }["ContactOverlay.useEffect.fn"];
            window.addEventListener('keydown', fn);
            return ({
                "ContactOverlay.useEffect": ()=>window.removeEventListener('keydown', fn)
            })["ContactOverlay.useEffect"];
        }
    }["ContactOverlay.useEffect"], [
        isOpen,
        onClose
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "contact-overlay",
        "data-lenis-prevent": true,
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentRef,
            className: "contact-overlay_panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "contact-close",
                    onClick: onClose,
                    "aria-label": "Close contact modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "1",
                                    y1: "1",
                                    x2: "11",
                                    y2: "11"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "11",
                                    y1: "1",
                                    x2: "1",
                                    y2: "11"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "contact-close-label",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutConfig"].navbar.menuCloseLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "contact-form",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SpotlightHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotlightHeading"], {
                                line1: contactModal.headlineLine1,
                                line2: contactModal.headlineLine2,
                                imageSrc: contactModal.spotlightImage,
                                targetRectWidth: 80,
                                gap: 6,
                                fontSize: 80,
                                triggerOnScroll: false,
                                play: isFullyDisplayed,
                                delay: 0.1,
                                className: "mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-mono",
                                style: {
                                    marginBottom: '1.5rem',
                                    opacity: 0.45,
                                    letterSpacing: '0.1em'
                                },
                                children: [
                                    contactModal.subheadlineLine1,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    contactModal.subheadlineLine2
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-field-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "contact-label",
                                        children: contactModal.fields.nameLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "contact-input",
                                        type: "text",
                                        name: "name",
                                        placeholder: contactModal.fields.namePlaceholder,
                                        autoComplete: "name",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-field-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "contact-label",
                                        children: contactModal.fields.emailLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "contact-input",
                                        type: "email",
                                        name: "email",
                                        placeholder: contactModal.fields.emailPlaceholder,
                                        autoComplete: "email",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-field-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "contact-label",
                                        children: contactModal.fields.interestLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-radios",
                                        children: contactModal.fields.interestOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "contact-radio-label",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "interest",
                                                        value: opt,
                                                        checked: interest === opt,
                                                        onChange: ()=>setInterest(opt)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 23
                                                    }, this),
                                                    opt
                                                ]
                                            }, opt, true, {
                                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-field-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "contact-label",
                                        children: contactModal.fields.messageLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "contact-textarea",
                                        name: "message",
                                        placeholder: contactModal.fields.messagePlaceholder,
                                        rows: 4,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "contact-submit",
                                style: {
                                    fontWeight: 700
                                },
                                children: buttons.sendMsg
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "cta-heading",
                                style: {
                                    color: 'var(--text)',
                                    marginBottom: '1rem'
                                },
                                children: contactModal.success.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-mono",
                                style: {
                                    opacity: 0.6,
                                    marginTop: '1rem'
                                },
                                children: contactModal.success.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "contact-close",
                                style: {
                                    marginTop: '3rem'
                                },
                                children: buttons.continueBrowsing
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                        lineNumber: 227,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/ContactOverlay.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/ContactOverlay.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/ContactOverlay.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(ContactOverlay, "sjeRr3CplZxc+H/ccL4gidVDfmo=");
_c = ContactOverlay;
var _c;
__turbopack_context__.k.register(_c, "ContactOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const cursorPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Only on desktop
            if (window.innerWidth <= 1024) return;
            const cursorEl = cursorRef.current;
            if (!cursorEl) return;
            const speed = 0.12;
            const defaultOffsetX = -7;
            const defaultOffsetY = -16;
            const hoverOffsetX = 16;
            const hoverOffsetY = 16;
            // First move — show cursor
            const handleFirstMove = {
                "CustomCursor.useEffect.handleFirstMove": (e)=>{
                    cursorEl.style.opacity = '1';
                    mousePos.current = {
                        x: e.clientX + defaultOffsetX,
                        y: e.clientY + defaultOffsetY
                    };
                    cursorPos.current = {
                        ...mousePos.current
                    };
                    document.removeEventListener('mousemove', handleFirstMove);
                }
            }["CustomCursor.useEffect.handleFirstMove"];
            document.addEventListener('mousemove', handleFirstMove, {
                once: true
            });
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    const isHover = cursorEl.classList.contains('is-hover');
                    const offsetX = isHover ? hoverOffsetX : defaultOffsetX;
                    const offsetY = isHover ? hoverOffsetY : defaultOffsetY;
                    mousePos.current = {
                        x: e.clientX + offsetX,
                        y: e.clientY + offsetY
                    };
                    // Check if mouse is over fullscreen menu or elements configured to hide cursor
                    const targetEl = e.target;
                    const isInMenu = targetEl?.closest('.nav-menu, [data-no-cursor]');
                    const isMenuOpen = document.querySelector('.nav-menu.is-open');
                    if (isInMenu || isMenuOpen) {
                        cursorEl.classList.add('is-hidden');
                    } else {
                        cursorEl.classList.remove('is-hidden');
                    }
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            document.addEventListener('mousemove', handleMouseMove);
            // Dynamic Hover state via event delegation on document
            const handleMouseOver = {
                "CustomCursor.useEffect.handleMouseOver": (e)=>{
                    const targetEl = e.target;
                    if (!targetEl) return;
                    const isInMenu = targetEl.closest('.nav-menu, [data-no-cursor]');
                    const isMenuOpen = document.querySelector('.nav-menu.is-open');
                    if (isInMenu || isMenuOpen) {
                        cursorEl.classList.add('is-hidden');
                        cursorEl.classList.remove('is-hover');
                        cursorEl.innerHTML = '';
                        return;
                    }
                    const target = targetEl.closest('[data-cursor-hover]');
                    if (target) {
                        const label = target.dataset.cursorHover || '';
                        const icon = target.dataset.cursorIcon || '';
                        cursorEl.classList.add('is-hover');
                        // Render label + icon
                        if (icon) {
                            cursorEl.innerHTML = `<span>${label}</span><span class="cursor-icon">${icon}</span>`;
                        } else {
                            cursorEl.innerHTML = `<span>${label}</span>`;
                        }
                    } else {
                        cursorEl.classList.remove('is-hover');
                        cursorEl.innerHTML = '';
                    }
                }
            }["CustomCursor.useEffect.handleMouseOver"];
            document.addEventListener('mouseover', handleMouseOver);
            // RAF loop — lerp cursor to mouse
            function animate() {
                if (!cursorEl) return;
                cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * speed;
                cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * speed;
                const isHover = cursorEl.classList.contains('is-hover');
                const angle = isHover ? -5 : 0;
                cursorEl.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) rotate(${angle}deg)`;
                rafRef.current = requestAnimationFrame(animate);
            }
            rafRef.current = requestAnimationFrame(animate);
            return ({
                "CustomCursor.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseover', handleMouseOver);
                    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        className: "custom-cursor",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/shared/CustomCursor.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
_s(CustomCursor, "hdFKwq4AIWW1BJLmmfisnL0VtcY=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SpotlightHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotlightHeading",
    ()=>SpotlightHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function SpotlightHeading({ line1, line2, imageSrc, targetRectWidth = 20, fontSize = 110, gap = 16, triggerOnScroll = true, play = true, className = '', delay = 0 }) {
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rectClipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const clipId = `spotlight-clip-${uniqueId.replace(/:/g, '')}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpotlightHeading.useEffect": ()=>{
            let ctx = null;
            const initAnimation = {
                "SpotlightHeading.useEffect.initAnimation": ()=>{
                    if (!svgRef.current || !line1Ref.current || !line2Ref.current || !rectClipRef.current || !imgRef.current) {
                        return;
                    }
                    const line2BaselineY = fontSize * 1.68;
                    const fontSpec = `700 ${fontSize}px "PP Neue Corp Tight Ultrabold", sans-serif`;
                    const canvas = document.createElement('canvas');
                    const canvasCtx = canvas.getContext('2d');
                    let ascent = fontSize * 0.72;
                    let descent = 0;
                    if (canvasCtx) {
                        canvasCtx.font = fontSpec;
                        const metrics = canvasCtx.measureText(line2);
                        if (metrics.actualBoundingBoxAscent > 0) {
                            ascent = metrics.actualBoundingBoxAscent;
                            descent = metrics.actualBoundingBoxDescent || 0;
                        }
                    }
                    const rectHeight = ascent; // uppercase only — match visual cap height
                    const rectY = line2BaselineY - ascent;
                    const rectRx = Math.min(rectHeight * 0.1, 8);
                    const line1W = line1Ref.current.getComputedTextLength();
                    const line2W = line2Ref.current.getComputedTextLength();
                    const rectX = 0;
                    const totalLine2W = rectX + targetRectWidth + gap + line2W;
                    const maxSVGWidth = Math.max(line1W, totalLine2W) + 30;
                    const totalSVGHeight = line2BaselineY + descent + 5;
                    svgRef.current.setAttribute('viewBox', `0 0 ${maxSVGWidth} ${totalSVGHeight}`);
                    // Initial clipPath positions (width = 0)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rectClipRef.current, {
                        attr: {
                            x: rectX,
                            y: rectY,
                            height: rectHeight,
                            rx: rectRx,
                            width: 0
                        }
                    });
                    // Set image to target rect dimensions with opacity 1 from start
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imgRef.current, {
                        attr: {
                            x: rectX,
                            y: rectY,
                            width: targetRectWidth,
                            height: rectHeight
                        },
                        opacity: 1
                    });
                    // Initial text positions (visible and stationary)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                        line1Ref.current,
                        line2Ref.current
                    ], {
                        y: 0,
                        opacity: 1
                    });
                    if (!triggerOnScroll && !play) {
                        return;
                    }
                    const obj = {
                        width: 0
                    };
                    const scrollDelay = delay > 0 ? delay : 0.45;
                    ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                        "SpotlightHeading.useEffect.initAnimation": ()=>{
                            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline(triggerOnScroll ? {
                                scrollTrigger: {
                                    trigger: svgRef.current,
                                    start: 'bottom 90%',
                                    toggleActions: 'restart none none reset'
                                }
                            } : {
                                delay
                            });
                            // Image expands left-to-right by expanding rectClipRef width, pushing line 2
                            tl.to(obj, {
                                width: targetRectWidth,
                                duration: 1.1,
                                ease: 'power3.inOut',
                                onUpdate: {
                                    "SpotlightHeading.useEffect.initAnimation": ()=>{
                                        const w = obj.width;
                                        if (rectClipRef.current) rectClipRef.current.setAttribute('width', `${w}`);
                                        if (line2Ref.current) line2Ref.current.setAttribute('x', `${rectX + w + gap}`);
                                    }
                                }["SpotlightHeading.useEffect.initAnimation"]
                            }, triggerOnScroll ? scrollDelay : 0);
                        }
                    }["SpotlightHeading.useEffect.initAnimation"]);
                }
            }["SpotlightHeading.useEffect.initAnimation"];
            if (document.fonts) {
                document.fonts.ready.then(initAnimation);
            } else {
                initAnimation();
            }
            const handleResize = {
                "SpotlightHeading.useEffect.handleResize": ()=>{
                    initAnimation();
                    if (triggerOnScroll) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }["SpotlightHeading.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "SpotlightHeading.useEffect": ()=>{
                    if (ctx) ctx.revert();
                    window.removeEventListener('resize', handleResize);
                }
            })["SpotlightHeading.useEffect"];
        }
    }["SpotlightHeading.useEffect"], [
        line1,
        line2,
        imageSrc,
        targetRectWidth,
        fontSize,
        gap,
        triggerOnScroll,
        play,
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        viewBox: "0 0 950 212",
        className: `w-full h-auto overflow-visible ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: clipId,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        ref: rectClipRef,
                        x: "0",
                        y: "0",
                        width: "0",
                        height: "0",
                        rx: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                ref: line1Ref,
                x: "0",
                y: fontSize * 0.72,
                className: "fill-current font-black uppercase",
                style: {
                    fontFamily: 'var(--font-display)',
                    fontSize: `${fontSize}px`,
                    fontWeight: 900,
                    letterSpacing: '0.04em'
                },
                children: line1
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: `url(#${clipId})`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                    ref: imgRef,
                    href: imageSrc,
                    x: "0",
                    y: "0",
                    width: "0",
                    height: "0",
                    preserveAspectRatio: "xMidYMid slice"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                ref: line2Ref,
                x: "0",
                y: fontSize * 1.68,
                className: "fill-current font-black uppercase",
                style: {
                    fontFamily: 'var(--font-display)',
                    fontSize: `${fontSize}px`,
                    fontWeight: 900,
                    letterSpacing: '0.04em'
                },
                children: line2
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/SpotlightHeading.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(SpotlightHeading, "/8prbU96w9HezmrHAea5pH9SSmU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = SpotlightHeading;
var _c;
__turbopack_context__.k.register(_c, "SpotlightHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: 'light',
    toggleTheme: ()=>{},
    mounted: false
});
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Read stored preference only on the client after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            try {
                const stored = localStorage.getItem('darkMode');
                if (stored === 'enabled') {
                    setTheme('dark');
                }
            } catch  {}
            setMounted(true);
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (!mounted) return;
            const root = document.documentElement;
            root.setAttribute('data-theme', theme);
            root.classList.toggle('is-dark', theme === 'dark');
            root.classList.toggle('dark', theme === 'dark');
            try {
                localStorage.setItem('darkMode', theme === 'dark' ? 'enabled' : 'disabled');
            } catch  {}
        }
    }["ThemeProvider.useEffect"], [
        theme,
        mounted
    ]);
    const toggleTheme = ()=>{
        document.documentElement.classList.add('theme-toggling');
        setTimeout(()=>document.documentElement.classList.remove('theme-toggling'), 500);
        setTheme((prev)=>prev === 'dark' ? 'light' : 'dark');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            mounted
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThemeContext.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "irO646EbSVqPL90dedilwyEs6oc=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Central data export module.
 * Single entry point for all site data, page content, SEO blocks, and registries.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/ui.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$about$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/about.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/contact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$not$2d$found$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/not-found.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/index.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/keywords.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Exact keyword strategy per page.
 * Derived strictly from specification guidelines.
 * Imported by each page's SEO configuration block.
 */ __turbopack_context__.s([
    "keywords",
    ()=>keywords
]);
const keywords = {
    home: {
        primary: 'full stack web and mobile app development',
        secondary: [
            'full stack development services',
            'full stack web development services',
            'full stack developer for hire'
        ]
    },
    servicesOverview: {
        primary: 'full stack development services',
        secondary: [
            'custom web development',
            'mobile app engineering',
            'Django backend consulting',
            'n8n workflow automation',
            'custom WordPress development'
        ]
    },
    webAppDev: {
        primary: 'full stack web development services',
        secondary: [
            'custom web development',
            'responsive website development',
            'startup web app development',
            'custom website design',
            'affordable web developers',
            'website design services'
        ]
    },
    flutterDev: {
        primary: 'custom mobile application development',
        secondary: [
            'iOS mobile app development services',
            'hybrid mobile app development services',
            'hire iPhone app developer',
            'app design services',
            'mobile UI design services'
        ]
    },
    djangoDev: {
        primary: 'hire Django expert',
        secondary: [
            'Django consulting',
            'hire Django web developers',
            'hire Django REST framework developers',
            'Python development',
            'Django development team'
        ]
    },
    wordpressDev: {
        primary: 'WordPress theme development service',
        secondary: [
            'hire WordPress theme developer',
            'hire dedicated WordPress developer',
            'WordPress speed optimization',
            'enterprise WordPress development',
            'Elementor expert'
        ]
    },
    n8nDev: {
        primary: 'n8n developer',
        secondary: [
            'n8n consulting',
            'workflow consultants',
            'AI agents integration',
            'AI agent development',
            'agentic workflow builder',
            'workflow automation with AI',
            'automated workflow tools for scaling manual processes',
            'hire CRM integration specialists'
        ],
        faqQuestions: [
            'n8n vs Zapier vs Make: which should I use?',
            'n8n cloud vs self-hosted: what\'s the difference?',
            'n8n community vs enterprise edition: which do I need?'
        ]
    },
    about: {
        primary: 'Outman Elbouhali full-stack developer',
        secondary: [
            'freelance full-stack engineer',
            'React and Django engineer',
            'software engineering background',
            'cross-platform mobile developer'
        ]
    },
    projects: {
        primary: 'full stack web and mobile portfolio',
        secondary: [
            'React project case studies',
            'Django production applications',
            'Flutter mobile applications',
            'n8n automation case studies'
        ]
    },
    contact: {
        primary: 'hire full stack developer',
        secondary: [
            'software development consultation',
            'request a project quote',
            'freelance developer contact'
        ]
    },
    notFound: {
        primary: 'page not found',
        secondary: []
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Layout configuration: fixed navigation, fullscreen menu, and footer.
 */ __turbopack_context__.s([
    "layoutConfig",
    ()=>layoutConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
;
const layoutConfig = {
    navbar: {
        brandName: 'OUTMAN',
        brandHoverText: 'Home',
        tickerText: 'I turn ideas into production-ready products.',
        clocks: [
            {
                city: 'Tétouan, Morocco',
                tz: 'Africa/Casablanca'
            }
        ],
        ctaLabel: "LET'S TALK!",
        ctaHoverLabel: 'CONTACT',
        menuLabel: 'MENU',
        menuOpenLabel: 'OPEN',
        menuCloseLabel: 'CLOSE',
        themeDarkLabel: 'DARK MODE',
        themeLightLabel: 'LIGHT MODE'
    },
    fullscreenMenu: {
        tagline: 'WE CRAFT BOLD DESIGN & CLEAN CODE.',
        locationName: 'MOROCCO',
        col1: [
            {
                label: 'HOME',
                href: '/',
                img: '/images/call-to-action/home.jpeg'
            },
            {
                label: 'SERVICES',
                href: '/services',
                img: '/images/call-to-action/services.jpeg'
            },
            {
                label: 'WORK',
                href: '/work',
                img: '/images/call-to-action/work.jpeg'
            },
            {
                label: 'ABOUT',
                href: '/about',
                img: '/images/call-to-action/about.jpeg'
            }
        ],
        col2: [
            {
                label: 'WEB APP',
                href: '/services/web-application-development',
                img: '/images/skatys/skatys.jpeg'
            },
            {
                label: 'MOBILE APP',
                href: '/services/flutter-app-development',
                img: '/images/atlas/atlass.jpeg'
            },
            {
                label: 'DJANGO API',
                href: '/services/django-python-development',
                img: '/images/pong/pong thumbnail.jpeg'
            },
            {
                label: 'AUTOMATION',
                href: '/services/n8n-automation',
                img: '/images/call-to-action/n8n Automation Workflow .png'
            },
            {
                label: 'WORDPRESS',
                href: '/services/wordpress-development',
                img: '/images/salad/salad recipes.png'
            }
        ]
    },
    footer: {
        techStacks: [
            'React.js',
            'Next.js',
            'TypeScript',
            'Flutter',
            'Django',
            'Python',
            'Tailwind CSS',
            'PostgreSQL',
            'Docker',
            'n8n Automation',
            'Node.js',
            'REST APIs',
            'GSAP Animations',
            'GraphQL',
            'Figma',
            'Git / CI/CD'
        ],
        banner: {
            subtitle: "Let's talk!",
            headingLine1: 'READY FOR YOUR',
            headingLine2: 'NEXT PRODUCT?',
            buttonText: 'BOOK A CALL',
            avatar: {
                src: '/profile.png',
                alt: 'Outman Elbouhali - Full Stack Developer'
            }
        },
        brandBadge: {
            icon: {
                src: '/images/icon.png',
                alt: 'Outman Elbouhali Logo Emblem'
            },
            symbol: '⚡',
            text: 'Full Stack & Mobile Pro'
        },
        columns: [
            {
                title: 'Pages',
                links: [
                    {
                        label: 'Home',
                        href: '/'
                    },
                    {
                        label: 'Services',
                        href: '/services'
                    },
                    {
                        label: 'Projects',
                        href: '/work'
                    },
                    {
                        label: 'About me',
                        href: '/about'
                    }
                ]
            },
            {
                title: 'Services',
                links: [
                    {
                        label: 'Custom Web Apps',
                        href: '/services/web-application-development'
                    },
                    {
                        label: 'Flutter Mobile',
                        href: '/services/flutter-app-development'
                    },
                    {
                        label: 'Django / Python',
                        href: '/services/django-python-development'
                    },
                    {
                        label: 'n8n Automation',
                        href: '/services/n8n-automation'
                    },
                    {
                        label: 'WordPress & CMS',
                        href: '/services/wordpress-development'
                    }
                ]
            },
            {
                title: 'Connect',
                links: [
                    {
                        label: 'GitHub',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].socialLinks.github,
                        external: true
                    },
                    {
                        label: 'LinkedIn',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].socialLinks.linkedin,
                        external: true
                    },
                    {
                        label: 'Email',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].socialLinks.email,
                        external: true
                    }
                ]
            }
        ],
        bottomRow: {
            copyright: `© 2026 | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name}`,
            legalNotice: 'Independent Engineering & Architecture',
            location: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].location
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/pages/about.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * About page data and SEO definition.
 * Controls hero headline, bio statement, career timeline, and skills.
 */ __turbopack_context__.s([
    "about",
    ()=>about
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const about = {
    seo: {
        title: 'About Outman Elbouhali | Full Stack Developer & Architect',
        description: 'Learn about Outman Elbouhali: background in software engineering (1337 / 42 Network), expertise across React, Flutter, Django, and production infrastructure.',
        path: '/about',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].about.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].about.secondary,
        schemaType: 'AboutPage'
    },
    hero: {
        line1: 'WAIT.',
        line2: 'WHO IS',
        line3: 'OUTMAN?',
        image: {
            src: '/profile.png',
            alt: 'Outman Elbouhali - Full Stack Software Developer'
        }
    },
    bio: {
        tag: '[ ABOUT OUTMAN ]',
        statement: "I'M A FULL-STACK DEVELOPER BUILDING WEB, MOBILE, AND AUTOMATION PRODUCTS FROM IDEA TO PRODUCTION.",
        paragraph: 'Based in Morocco, I work across the full product stack — from frontend interfaces and backend architecture to databases, integrations, deployment, and automation. I build with React, Next.js, Django, PostgreSQL, Flutter, WordPress, and modern automation tools such as n8n, Make, and Zapier.'
    },
    services: {
        tag: '[ WHAT I DO ]',
        title: 'STUFF I BUILD',
        items: [
            {
                title: 'FULL-STACK WEB DEVELOPMENT',
                level: 'PRO',
                description: 'Production-ready web applications built with React, Next.js, Django, and PostgreSQL. From responsive interfaces to APIs, databases, authentication, and deployment.'
            },
            {
                title: 'MOBILE APP DEVELOPMENT',
                level: 'PRO',
                description: 'Cross-platform mobile applications with Flutter and Dart for iOS and Android, with clean architecture, state management, authentication, APIs, and real-time features.'
            },
            {
                title: 'MVP DEVELOPMENT',
                level: 'PRO',
                description: 'Turn an idea into a working product quickly without sacrificing the foundations. I focus on clean architecture, real user flows, and a codebase that can evolve with the product.'
            },
            {
                title: 'AUTOMATION & INTEGRATIONS',
                level: 'PRO',
                description: 'Automated workflows with n8n, Make, and Zapier. Connect APIs, forms, databases, emails, CRMs, and business tools to remove repetitive work and keep systems moving.'
            },
            {
                title: 'WORDPRESS & CMS',
                level: 'PRO',
                description: 'Custom WordPress websites, content-driven platforms, integrations, and performance-focused implementations that remain easy to manage.'
            }
        ]
    },
    experience: {
        tag: '[ CAREER ]',
        title: 'EXPERIENCE &\nEDUCATION',
        items: [
            {
                company: 'FREELANCE',
                location: 'REMOTE',
                role: 'FULL-STACK DEVELOPER',
                period: '2026 — PRESENT',
                description: 'Building and delivering production web applications and digital products across frontend, backend, databases, integrations, deployment, and automation.'
            },
            {
                company: 'REVO ADVERTISING',
                location: 'MOROCCO',
                role: 'WEB DEVELOPER INTERN',
                period: 'APR 2025 — AUG 2025',
                description: 'Built responsive client websites with React.js, TypeScript, and modern CSS. Translated design mockups into reusable UI components, optimized frontend performance, and collaborated with designers and developers on client-facing projects.'
            },
            {
                company: '1337 — 42 NETWORK',
                location: 'MOROCCO',
                role: 'SOFTWARE ENGINEERING STUDENT',
                period: 'SEP 2022 — PRESENT',
                description: 'Project-based software engineering curriculum focused on algorithms, data structures, system design, problem solving, and building real applications through peer-to-peer learning.'
            }
        ]
    },
    cta: {
        statement: 'I BUILD PRODUCTS THAT ARE CLEAN UNDER THE HOOD, SIMPLE TO USE, AND READY FOR REAL USERS.',
        subtitle: 'Have an idea worth building?',
        buttonText: "let's talk"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/pages/contact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contact modal/page data and SEO definition.
 */ __turbopack_context__.s([
    "contact",
    ()=>contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const contact = {
    seo: {
        title: 'Contact Outman Elbouhali | Full Stack Developer For Hire',
        description: 'Discuss your software project, custom web application, Flutter mobile app, or n8n automation with Outman Elbouhali. Available for freelance contracts.',
        path: '/#contact',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].contact.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].contact.secondary,
        schemaType: 'ContactPage'
    },
    title: 'HAVE A PROJECT IN MIND?',
    subtitle: "Whether you're building a new product from scratch, scaling backend APIs, or automating operations, let's talk."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/pages/home.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Home page data and SEO definition.
 * Controls hero words, intro headline, teaser sections, and main schema.
 */ __turbopack_context__.s([
    "home",
    ()=>home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const home = {
    seo: {
        title: 'Full Stack Web & Mobile App Development | Outman Elbouhali',
        description: 'Independent Full Stack Developer specializing in custom web development, Flutter cross-platform mobile apps, Django APIs, and n8n workflow automation.',
        path: '/',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].home.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].home.secondary,
        schemaType: 'Person'
    },
    hero: {
        words: [
            'I BUILD',
            'DIGITAL',
            'PRODUCTS'
        ]
    },
    intro: {
        tag: '[ FULL-STACK DEVELOPER ]',
        statement: 'FULL STACK WEB AND MOBILE APP DEVELOPMENT — FROM FRONTEND TO BACKEND, MOBILE TO AUTOMATION. I TURN IDEAS INTO PRODUCTS THAT ACTUALLY WORK.'
    },
    video: {
        src: 'https://studionamma.vercel.app/videos/cut/video-matera2.webm',
        type: 'video/webm'
    },
    playground: {
        label: 'SELECTED PROJECTS',
        title: 'PLAYGROUND',
        badge: 'PORTFOLIO',
        href: '/work'
    },
    servicesTeaser: {
        title: 'SERVICES',
        items: [
            {
                slug: 'web-application-development',
                name: 'Web Development',
                sub: 'React / Next.js',
                image: {
                    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=480&q=80',
                    alt: 'Custom web application engineering preview'
                }
            },
            {
                slug: 'wordpress-development',
                name: 'WordPress & CMS',
                sub: 'Custom Themes',
                image: {
                    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80',
                    alt: 'WordPress theme development and CMS architecture'
                }
            },
            {
                slug: 'django-python-development',
                name: 'Backend Engineering',
                sub: 'Django / REST APIs',
                image: {
                    src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=480&q=80',
                    alt: 'Django and Python backend engineering'
                }
            },
            {
                slug: 'flutter-app-development',
                name: 'Mobile Development',
                sub: 'Flutter / iOS & Android',
                image: {
                    src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=480&q=80',
                    alt: 'Flutter mobile application development for iOS and Android'
                }
            },
            {
                slug: 'web-application-development',
                name: 'MVP Development',
                sub: 'Build & Launch Fast',
                image: {
                    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=480&q=80',
                    alt: 'Rapid startup MVP development and prototyping'
                }
            },
            {
                slug: 'n8n-automation',
                name: 'Automation & AI',
                sub: 'n8n / Self-Hosted',
                image: {
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&q=80',
                    alt: 'n8n workflow automation and AI agent pipelines'
                }
            }
        ]
    },
    aboutTeaser: {
        label: 'About',
        title: 'Full-Stack Developer. Product Builder.',
        paragraph1: "I'm Outman Elbouhali, a full-stack developer based in Morocco. I build web and mobile applications using React, Next.js, Django, PostgreSQL, and Flutter — taking products from architecture and UI to APIs, databases, integrations, and deployment.",
        paragraph2: 'I also build automation workflows with n8n, Make, and Zapier, and work with WordPress when a content-driven or business website is the right solution. My focus is simple: clean code, solid architecture, good UX, and products that are built to grow.'
    },
    cta: {
        desc: "Have an idea, a product to build, or a workflow to automate?\nLet's make it real.",
        buttonText: 'say hello',
        line1: "LET'S BUILD",
        line2: 'TOGETHER'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/pages/not-found.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 404 Not Found page copy and SEO definition (noindex).
 */ __turbopack_context__.s([
    "notFound",
    ()=>notFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const notFound = {
    seo: {
        title: '404 - Page Not Found | Outman Elbouhali',
        description: 'The requested page could not be found.',
        path: '/404',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].notFound.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].notFound.secondary,
        schemaType: 'WebSite',
        noindex: true
    },
    code: '404',
    badge: 'Page not found',
    message: 'The page you were looking for does not exist or has been relocated.',
    backHomeText: 'Back home'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/pages/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Projects page content, individual project case studies, and SEO definition.
 * Serves the /work portfolio index and /work/:slug project details.
 */ __turbopack_context__.s([
    "allProjects",
    ()=>allProjects,
    "projectsPage",
    ()=>projectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const allProjects = [
    {
        slug: 'skatys',
        title: 'Skatys',
        category: 'Full Stack Web App',
        year: '2026',
        tagline: 'The modern freelance marketplace built for speed.',
        description: 'A freelance full-stack platform built with Next.js and Django, containerized with Docker and NGINX on a secure production VPS environment.',
        overview: 'Skatys is a custom-engineered web application combining a hyper-fast Next.js frontend with a robust Django REST backend. Deployed on a Linux VPS using Docker containers and NGINX reverse proxy for high security and performance.',
        conclusion: 'Delivered a production-ready freelance platform with high-speed rendering, seamless API integration, and custom UI components.',
        thumbnail: {
            src: '/images/skatys/skatys lab.png',
            alt: 'Skatys freelance marketplace dashboard preview'
        },
        heroImage: {
            src: '/images/skatys/Skatys Website .png',
            alt: 'Skatys web platform hero desktop showcase'
        },
        coverImage: {
            src: '/images/skatys/Skatys Website .png',
            alt: 'Skatys full-stack platform overview screenshot'
        },
        images: [
            {
                src: '/images/skatys/skatys website .png',
                alt: 'Skatys desktop marketplace interface'
            },
            {
                src: '/images/skatys/skatys website.png',
                alt: 'Skatys freelance project discovery view'
            },
            {
                src: '/images/skatys/skatys website mobile 3.png',
                alt: 'Skatys mobile responsive client view'
            },
            {
                src: '/images/skatys/skatys website mobile 1.png',
                alt: 'Skatys mobile job bidding view'
            }
        ],
        services: [
            'Web Architecture',
            'Next.js Frontend',
            'Django API',
            'Docker VPS Setup'
        ],
        client: 'Skatys Inc.',
        website: 'https://skatys.com/',
        tags: [
            'Freelance',
            'Next.js',
            'Django',
            'Docker',
            'PostgreSQL'
        ],
        serviceSlugs: [
            'web-application-development',
            'django-python-development'
        ],
        link: 'https://skatys.com/',
        quote: 'An exceptional team that transformed our vision into a high-performance platform. Delivered beyond expectations.',
        quoteAuthor: 'Skatys Inc.',
        quoteRole: 'Product Owner',
        credits: [
            {
                role: 'Full Stack Development',
                name: 'Outman El Bouhali'
            },
            {
                role: 'Architecture & DevOps',
                name: 'Outman El Bouhali'
            },
            {
                role: 'UI/UX Design',
                name: 'Outman El Bouhali'
            }
        ]
    },
    {
        slug: 'revo',
        title: 'Revo',
        category: 'React Web Application',
        year: '2025',
        tagline: 'A modern web experience built with React.',
        description: 'A responsive web application built with React.js, focused on modern UI, reusable components, and a smooth user experience.',
        overview: 'Revo is a modern web application developed with React.js. The project focuses on building a responsive and scalable frontend architecture using reusable components, clean UI patterns, and optimized rendering for a smooth experience across different screen sizes.',
        conclusion: 'Delivered a responsive React.js web application with a reusable component architecture, polished interface, and strong focus on performance and user experience.',
        thumbnail: {
            src: '/images/revo/revo lab.png',
            alt: 'Revo application user interface laboratory thumbnail'
        },
        heroImage: {
            src: '/images/revo/revo thumbnail.jpeg',
            alt: 'Revo React application showcase hero'
        },
        coverImage: {
            src: '/images/revo/revo4.jpeg',
            alt: 'Revo responsive layouts and interactive cards'
        },
        images: [
            {
                src: '/images/revo/revo.jpeg',
                alt: 'Revo frontend typography and design system'
            },
            {
                src: '/images/revo/revoo.jpeg',
                alt: 'Revo interactive dashboard view'
            }
        ],
        services: [
            'React Development',
            'Frontend Architecture',
            'Responsive UI',
            'UI/UX Implementation'
        ],
        client: 'Revo',
        website: 'https://revo.com',
        tags: [
            'React.js',
            'JavaScript',
            'Frontend',
            'Responsive Design'
        ],
        serviceSlugs: [
            'web-application-development'
        ],
        link: 'https://github.com/oelbouha/Revo',
        quote: 'Engineered with a modular component architecture focused on smooth UI state transitions, clean rendering patterns, and high-performance cross-device layout flexibility.',
        quoteAuthor: 'Architecture Note',
        quoteRole: 'Frontend Design & Technical Highlights',
        credits: [
            {
                role: 'Frontend Development',
                name: 'Outman El Bouhali'
            },
            {
                role: 'React Architecture',
                name: 'Outman El Bouhali'
            },
            {
                role: 'UI/UX Implementation',
                name: 'Outman El Bouhali'
            }
        ]
    },
    {
        slug: 'atlas',
        title: 'Atlas',
        category: 'Cross-Platform Mobile App',
        year: '2026',
        tagline: 'One Flutter application, built for mobile and TV.',
        description: 'A cross-platform application built with Flutter, designed to run across Android phones and TV devices from a shared codebase.',
        overview: 'Atlas is a cross-platform application developed with Flutter and Dart, designed to provide a consistent experience across Android smartphones and TV devices. The project focuses on responsive layouts, adaptive interfaces, and reusable Flutter components that scale across different screen sizes and interaction models.',
        conclusion: 'Built a flexible Flutter application capable of adapting its interface across Android phones and TV platforms while maintaining a consistent and responsive user experience.',
        thumbnail: {
            src: '/images/atlas/atlas book thumbanil.jpeg',
            alt: 'Atlas Flutter cross-platform mobile preview'
        },
        heroImage: {
            src: '/images/atlas/atlass.jpeg',
            alt: 'Atlas mobile and Android TV Flutter application'
        },
        coverImage: {
            src: '/images/atlas/atlass.jpeg',
            alt: 'Atlas unified interface design'
        },
        images: [
            {
                src: '/images/atlas/atlass.jpeg',
                alt: 'Atlas phone interface and touch navigation'
            },
            {
                src: '/images/atlas/atlas 2.jpeg',
                alt: 'Atlas adaptive screen layout'
            },
            {
                src: '/images/atlas/atlas 1.jpeg',
                alt: 'Atlas Android TV directional controls view'
            }
        ],
        services: [
            'Flutter Development',
            'Android Development',
            'TV App Development',
            'Responsive UI'
        ],
        client: 'Atlas',
        website: '',
        tags: [
            'Flutter',
            'Dart',
            'Android',
            'Android TV',
            'Responsive UI'
        ],
        serviceSlugs: [
            'flutter-app-development'
        ],
        link: '',
        quote: 'Designed to seamlessly bridge mobile touch interaction and Android TV directional navigation using a single unified Flutter codebase.',
        quoteAuthor: 'Product Concept',
        quoteRole: 'Cross-Platform Strategy & UX Architecture',
        credits: [
            {
                role: 'Flutter Development',
                name: 'Outman El Bouhali'
            },
            {
                role: 'Cross-Platform Architecture',
                name: 'Outman El Bouhali'
            },
            {
                role: 'Responsive UI Development',
                name: 'Outman El Bouhali'
            }
        ]
    },
    {
        slug: 'pong-arena',
        title: 'Pong Arena',
        category: 'Full Stack Web App',
        year: '2024',
        tagline: 'Real-time multiplayer gaming built for the web.',
        description: 'A full-stack multiplayer gaming platform built with Django and JavaScript, featuring real-time gameplay, WebSockets, and tournament management.',
        overview: 'Pong Arena is a full-stack multiplayer web application built with Django and JavaScript. The platform combines a Django backend with a dynamic JavaScript frontend, using WebSockets to enable real-time multiplayer communication and gameplay. It also includes player management, matchmaking, and tournament functionality.',
        conclusion: 'Built and delivered a complete real-time multiplayer platform, combining backend architecture, WebSocket communication, interactive game logic, and responsive frontend experiences.',
        thumbnail: {
            src: '/images/pong/pong thumbnail.jpeg',
            alt: 'Pong Arena multiplayer game preview'
        },
        heroImage: {
            src: '/images/pong/pong thumbnail.jpeg',
            alt: 'Pong Arena real-time WebSocket match showcase'
        },
        coverImage: {
            src: '/images/pong/Create_a_mockup_2k_202602141753.jpeg',
            alt: 'Pong Arena device mockups'
        },
        images: [
            {
                src: '/images/pong/pongarena1.jpeg',
                alt: 'Pong Arena tournament lobby screen'
            },
            {
                src: '/images/pong/Create_a_mockup_2k_202602141751.jpeg',
                alt: 'Pong Arena live gameplay screen'
            }
        ],
        services: [
            'Full Stack Development',
            'Django Backend',
            'JavaScript Frontend',
            'WebSocket Architecture'
        ],
        client: '42 Network / Open Source',
        website: 'https://github.com/oelbouha/ft_transcendence',
        tags: [
            'Django',
            'JavaScript',
            'WebSockets',
            'Full Stack'
        ],
        serviceSlugs: [
            'django-python-development',
            'web-application-development'
        ],
        link: 'https://github.com/oelbouha/ft_transcendence',
        quote: 'A complete real-time multiplayer experience combining solid backend architecture with responsive gameplay.',
        quoteAuthor: '42 Network',
        quoteRole: 'Open Source Community',
        credits: [
            {
                role: 'Full Stack Development',
                name: 'Outman El Bouha'
            },
            {
                role: 'Real-Time Architecture',
                name: 'Outman El Bouha'
            },
            {
                role: 'Game Development',
                name: 'Outman El Bouha'
            }
        ]
    },
    {
        slug: 'habivio',
        title: 'Habivio',
        category: 'Mobile UX & Product',
        year: '2025',
        tagline: 'Mobile habit tracker & wellness interface built for daily engagement.',
        description: 'A sleek habit tracking and personal wellness mobile application built with cross-platform architecture, fluid gestures, and modern micro-interactions.',
        overview: 'Habivio is a mobile wellness platform designed to turn positive daily rituals into lasting habits. Featuring intuitive progress rings, streak analytics, and bespoke haptic feedback loops, the app provides a frictionless user experience that keeps users focused and motivated.',
        conclusion: 'Engineered a polished cross-platform mobile application combining real-time progress visualization, offline-first data synchronization, and delightful micro-interactions.',
        thumbnail: {
            src: '/images/habivio/habivio.png',
            alt: 'Habivio wellness habit mobile interface'
        },
        heroImage: {
            src: '/images/habivio/habivio.png',
            alt: 'Habivio mobile app daily dashboard screen'
        },
        coverImage: {
            src: '/images/habivio/habivio.png',
            alt: 'Habivio habit analytics and progress tracking view'
        },
        images: [
            {
                src: '/images/habivio/habivio.png',
                alt: 'Habivio streak tracking ring showcase'
            },
            {
                src: '/images/habivio/habivio 1.png',
                alt: 'Habivio morning checklist interface'
            },
            {
                src: '/images/habivio/habivio 2.png',
                alt: 'Habivio weekly performance charts'
            },
            {
                src: '/images/habivio/habivio 3.png',
                alt: 'Habivio settings and profile customization'
            }
        ],
        services: [
            'Mobile Product Design',
            'Mobile App Development',
            'UX Interaction Architecture',
            'Local Storage & Sync'
        ],
        client: 'Habivio Wellness',
        website: '',
        tags: [
            'Mobile UX',
            'Mobile App',
            'TypeScript',
            'Wellness'
        ],
        serviceSlugs: [
            'flutter-app-development'
        ],
        link: '',
        quote: 'A minimal, friction-free mobile product engineering with high-touch tactile feedback.',
        quoteAuthor: 'Product Review',
        quoteRole: 'Mobile UX & Interaction Design',
        credits: [
            {
                role: 'Mobile App Development',
                name: 'Outman El Bouhali'
            },
            {
                role: 'UI/UX Design',
                name: 'Outman El Bouhali'
            }
        ]
    },
    {
        slug: 'saladly',
        title: 'Saladly',
        category: 'WordPress & Automation',
        year: '2026',
        tagline: 'A custom WordPress recipe platform built for SEO, content publishing, and automation.',
        description: 'A custom WordPress platform featuring tailored theme engineering, technical SEO infrastructure, search indexing, and automated social workflows.',
        overview: 'Saladly is a custom WordPress website developed as a freelance project for a recipe and food content platform. I built and customized the WordPress website, developed the content structure for recipes and blog posts, organized the recipe categories, and implemented the website architecture around SEO and content discoverability. The project also included Google Search Console and Bing Webmaster Tools integration, automated social media publishing for new content, and automated workflows for requesting search engine indexing when new recipes and blog posts are published.',
        conclusion: 'Delivered a complete WordPress content platform combining custom development, SEO infrastructure, search engine integrations, social media automation, and automated indexing workflows.',
        thumbnail: {
            src: '/images/salad/daily salad recipes.png',
            alt: 'Saladly food recipe WordPress platform'
        },
        heroImage: {
            src: '/images/salad/salad recipes.png',
            alt: 'Saladly custom theme desktop homepage'
        },
        coverImage: {
            src: '/images/salad/salad recipes.png',
            alt: 'Saladly SEO-optimized recipe article layout'
        },
        images: [
            {
                src: '/images/salad/salad recipes.png',
                alt: 'Saladly recipe listing catalog'
            },
            {
                src: '/images/salad/salad recipes 1.png',
                alt: 'Saladly structured recipe schema and ingredients view'
            },
            {
                src: '/images/salad/salad recipes 2.png',
                alt: 'Saladly automated social card generator preview'
            }
        ],
        services: [
            'WordPress Development',
            'Custom Theme Development',
            'SEO Implementation',
            'Google Search Console Integration',
            'Bing Webmaster Tools Integration',
            'Social Media Automation',
            'Search Indexing Automation'
        ],
        client: 'Daily Salad Recipes',
        website: 'https://dailysaladrecipes.com/',
        tags: [
            'WordPress',
            'PHP',
            'SEO',
            'Google Search Console',
            'Bing Webmaster Tools',
            'Make.com',
            'Automation',
            'Social Media'
        ],
        serviceSlugs: [
            'wordpress-development',
            'n8n-automation'
        ],
        link: 'https://dailysaladrecipes.com/',
        quote: 'A custom WordPress platform combining structured content, SEO infrastructure, automated social publishing, and search indexing workflows.',
        quoteAuthor: 'Daily Salad Recipes',
        quoteRole: 'Freelance Web Development',
        credits: [
            {
                role: 'WordPress Development',
                name: 'Outman El Bouhali'
            },
            {
                role: 'Custom Theme Development',
                name: 'Outman El Bouhali'
            },
            {
                role: 'SEO & Search Integration',
                name: 'Outman El Bouhali'
            },
            {
                role: 'Automation & Integrations',
                name: 'Outman El Bouhali'
            }
        ]
    },
    {
        slug: 'workflow-automation',
        title: 'Workflow Hub',
        category: 'Automation Pipelines',
        year: '2025',
        tagline: 'n8n & Make custom integration pipelines.',
        description: 'An enterprise automation pipeline connecting multiple SaaS tools, webhooks, and AI agents for end-to-end operational workflow optimization.',
        overview: 'Constructed scalable automation architectures using self-hosted n8n instances and Make. Built custom webhooks, data transformation scripts, error recovery loops, and AI-powered categorization pipelines to automate routine business workflows.',
        conclusion: 'Saved hundreds of operational hours per month by bridging CRM, billing, messaging, and database updates seamlessly.',
        thumbnail: {
            src: '/images/call-to-action/n8n Automation Workflow .png',
            alt: 'n8n workflow hub orchestration preview'
        },
        heroImage: {
            src: '/images/call-to-action/n8n Automation Workflow .png',
            alt: 'n8n automation canvas diagram showing multi-step API connectors'
        },
        coverImage: {
            src: '/images/call-to-action/n8n Automation Workflow .png',
            alt: 'n8n visual node workflow execution graph'
        },
        images: [
            {
                src: '/images/call-to-action/n8n Automation Workflow .png',
                alt: 'n8n trigger and webhook integration nodes'
            },
            {
                src: '/images/n8n/automation.png',
                alt: 'Self-hosted n8n workflow execution logs'
            },
            {
                src: '/images/n8n/automation .png',
                alt: 'AI agent routing node and LLM integration in n8n'
            }
        ],
        services: [
            'n8n Architecture',
            'API & Webhook Integrations',
            'Data Transformation',
            'Workflow Optimization'
        ],
        client: 'Internal & Client Systems',
        website: '',
        tags: [
            'n8n',
            'Automation',
            'Webhooks',
            'REST APIs',
            'Pipelines'
        ],
        serviceSlugs: [
            'n8n-automation'
        ],
        link: '',
        quote: 'Turned complex multi-tool operational headaches into reliable, zero-touch background automation.',
        quoteAuthor: 'Automation Engineering',
        quoteRole: 'Integration Systems',
        credits: [
            {
                role: 'Automation Architect',
                name: 'Outman El Bouhali'
            }
        ]
    },
    {
        slug: 'docker-vps',
        title: 'Docker VPS',
        category: 'Cloud & Infrastructure',
        year: '2025',
        tagline: 'VPS container orchestration & CI/CD deployment.',
        description: 'Production VPS orchestration system leveraging Docker containers, NGINX reverse proxy, automated SSL certificates, and streamlined CI/CD flows.',
        overview: 'Designed and deployed a resilient server infrastructure on a Linux VPS. Isolated services into lightweight Docker containers, configured multi-domain SSL with Let’s Encrypt, and orchestrated automated zero-downtime deployment pipelines with GitHub Actions.',
        conclusion: 'Established high availability, sub-100ms response times, and automated container lifecycle management across production servers.',
        thumbnail: {
            src: '/images/docker.jpeg',
            alt: 'Docker VPS server orchestration preview'
        },
        heroImage: {
            src: '/images/docker.jpeg',
            alt: 'Docker containers running in Linux terminal'
        },
        coverImage: {
            src: '/images/docker.jpeg',
            alt: 'Linux VPS and NGINX configuration setup'
        },
        images: [
            {
                src: '/images/docker.jpeg',
                alt: 'Docker compose multi-container orchestration'
            },
            {
                src: '/images/docker1.png',
                alt: 'Docker production containers status'
            },
            {
                src: '/images/docker2.webp',
                alt: 'NGINX reverse proxy and SSL certificate deployment'
            },
            {
                src: '/images/docker5.png',
                alt: 'Automated CI/CD deployment logs'
            }
        ],
        services: [
            'Docker Containerization',
            'VPS Hardening',
            'NGINX Reverse Proxy',
            'CI/CD Pipelines'
        ],
        client: 'Cloud Infrastructure',
        website: '',
        tags: [
            'Docker',
            'Linux VPS',
            'NGINX',
            'DevOps',
            'CI/CD'
        ],
        serviceSlugs: [
            'django-python-development',
            'n8n-automation'
        ],
        link: '',
        quote: 'Robust server hardening and container orchestration that cut deployment friction to zero.',
        quoteAuthor: 'DevOps Architecture',
        quoteRole: 'Infrastructure Highlights',
        credits: [
            {
                role: 'DevOps Engineering',
                name: 'Outman El Bouhali'
            },
            {
                role: 'System Administration',
                name: 'Outman El Bouhali'
            }
        ]
    },
    {
        slug: 'webserv',
        title: 'Webserv',
        category: 'Systems Programming',
        year: '2024',
        tagline: 'Custom C++ HTTP/1.1 web server from scratch.',
        description: 'Non-blocking I/O multiplexed HTTP/1.1 web server written in C++98 handling concurrent connections, CGI execution, and route management.',
        overview: 'Developed a fully compliant HTTP/1.1 web server from scratch in C++ without external libraries. Built using poll/epoll socket multiplexing to handle hundreds of concurrent clients simultaneously with non-blocking I/O, custom NGINX-style configuration parsing, static file streaming, and dynamic CGI support.',
        conclusion: 'Achieved strict RFC compliance, zero memory leaks, and high-throughput network performance verified through rigorous stress testing.',
        thumbnail: {
            src: '/images/webserv.png',
            alt: 'Webserv custom C++ HTTP server terminal preview'
        },
        heroImage: {
            src: '/images/webserv.png',
            alt: 'Webserv architecture socket multiplexing diagram'
        },
        coverImage: {
            src: '/images/webserv.png',
            alt: 'Webserv server configuration parser showcase'
        },
        images: [
            {
                src: '/images/webserv.png',
                alt: 'Webserv terminal execution output'
            },
            {
                src: '/images/webserv2.png',
                alt: 'Webserv concurrent client stress test results'
            },
            {
                src: '/images/webserv1.avif',
                alt: 'Webserv CGI environment handling demonstration'
            }
        ],
        services: [
            'Systems Programming',
            'C++ Network Architecture',
            'HTTP/1.1 Protocol Engine',
            'CGI Execution Layer'
        ],
        client: '42 Network / Systems Project',
        website: 'https://github.com/oelbouha/webserv',
        tags: [
            'C++',
            'HTTP/1.1',
            'Sockets',
            'Network Systems',
            'epoll'
        ],
        serviceSlugs: [
            'django-python-development',
            'web-application-development'
        ],
        link: 'https://github.com/oelbouha/webserv',
        quote: 'A deeply engineered socket server with meticulous state machines and asynchronous I/O multiplexing.',
        quoteAuthor: 'Systems Review',
        quoteRole: 'Core Network Engineering',
        credits: [
            {
                role: 'Lead Systems Developer',
                name: 'Outman El Bouhali'
            }
        ]
    }
];
const projectsPage = {
    seo: {
        title: 'Projects & Case Studies | Outman Elbouhali Portfolio',
        description: 'Explore real-world production projects built by Outman Elbouhali: React web applications, Flutter mobile apps, Django backends, and self-hosted n8n automations.',
        path: '/work',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].projects.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].projects.secondary,
        schemaType: 'CollectionPage'
    },
    header: {
        title: 'PROJECTS',
        badge: 'PORTFOLIO',
        description: "I've helped founders, businesses, and engineering teams build, launch, and scale their digital products with solid architecture."
    },
    projects: allProjects
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services/django-python-development.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service: Django & Python Backend Development & Consulting
 * Primary Keyword: "hire Django expert"
 * Secondary Keywords: Django consulting, hire Django web developers, hire Django REST framework developers, Python development, Django development team
 * Positioned as Django developer and consultant.
 */ __turbopack_context__.s([
    "djangoPythonDevelopment",
    ()=>djangoPythonDevelopment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const djangoPythonDevelopment = {
    slug: 'django-python-development',
    title: 'Django Developer & Python Consulting Services',
    navLabel: 'Django / Python',
    shortDescription: 'Senior Django and Python engineering. High-throughput REST APIs, PostgreSQL optimization, background workers, and secure architecture for scalable software.',
    seo: {
        title: 'Hire Django Expert & Python Consultant | Outman Elbouhali',
        description: 'Hire a Django expert for custom Python development, Django consulting, and scalable REST APIs. Production-grade architecture with PostgreSQL and Celery.',
        path: '/services/django-python-development',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].djangoDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].djangoDev.secondary,
        schemaType: 'Service'
    },
    hero: {
        badge: '// BACKEND ARCHITECT & CONSULTANT',
        headline: 'Hire a Django Expert for High-Performance Python Systems',
        subheadline: 'I engineer secure, production-hardened Django backends, REST APIs, and asynchronous processing pipelines designed to handle complex business logic and massive database throughput.',
        ctaButton: 'Discuss your backend architecture',
        image: {
            src: '/images/pong/pong thumbnail.jpeg',
            alt: 'Hire Django expert for scalable Python backend and API architecture'
        }
    },
    deliverables: {
        tag: '[ DELIVERABLES ]',
        title: 'Robust Python & Django Backend Deliverables',
        items: [
            {
                title: 'Custom Django REST Framework (DRF) APIs',
                description: 'RESTful and GraphQL API backends equipped with granular permission policies, token and OAuth authentication, serialized data validation, and automated Swagger/OpenAPI documentation.'
            },
            {
                title: 'PostgreSQL Database Architecture & Query Tuning',
                description: 'Normalized relational schema design, zero-downtime database migrations, composite indexing, and query optimization eliminating N+1 bottlenecks to sustain sub-50ms database responses.'
            },
            {
                title: 'Asynchronous Task Processing with Celery & Redis',
                description: 'Decoupled background job queues for high-latency workloads: automated bulk emailing, PDF generation, video transcoding, external API polling, and scheduled cron operations.'
            },
            {
                title: 'Real-Time WebSockets & Django Channels',
                description: 'Bi-directional WebSocket communication for live collaborative dashboards, real-time chats, notifications, and multiplayer gaming engines tested under high concurrent load.'
            },
            {
                title: 'Django Consulting, Security Audits & Code Reviews',
                description: 'Expert architectural assessments for growing startups. I audit existing Python applications for OWASP vulnerabilities, slow database queries, memory leaks, and architectural debt.'
            },
            {
                title: 'Dockerization, VPS Infrastructure & CI/CD',
                description: 'Production containerization with multi-stage Docker builds, Gunicorn/Uvicorn application servers, NGINX reverse proxies, SSL certificate provisioning, and automated testing pipelines.'
            }
        ]
    },
    techStack: {
        tag: '[ TECH STACK ]',
        title: 'The Python & Django Backend Stack',
        items: [
            {
                category: 'Core Framework & Languages',
                technologies: [
                    'Python 3.12+',
                    'Django 5.x',
                    'Django REST Framework (DRF)',
                    'Django Channels (ASGI)',
                    'Pydantic & FastAPI'
                ]
            },
            {
                category: 'Databases & Queues',
                technologies: [
                    'PostgreSQL',
                    'Redis (Caching & Pub/Sub)',
                    'Celery Distributed Task Queue',
                    'SQLite for testing'
                ]
            },
            {
                category: 'DevOps & Tooling',
                technologies: [
                    'Docker & Docker Compose',
                    'Linux VPS (Ubuntu / Debian)',
                    'NGINX Reverse Proxy',
                    'Gunicorn / Uvicorn',
                    'GitHub Actions CI/CD'
                ]
            }
        ]
    },
    process: {
        tag: '[ HOW A PROJECT RUNS ]',
        title: 'Strategic Backend Engineering & Delivery Process',
        steps: [
            {
                step: '01',
                title: 'Data Modeling & API Contract Specification',
                duration: 'Week 1',
                description: 'We define all business logic requirements, user permissions, and relational models. I provide a normalized ER diagram and detailed REST API contract before writing code.'
            },
            {
                step: '02',
                title: 'Core Django Architecture & Security Setup',
                duration: 'Weeks 2 — 3',
                description: 'Configuring Django settings, custom user models, authentication flows, rate limiters, and PostgreSQL database migrations with automated unit test suites.'
            },
            {
                step: '03',
                title: 'Business Logic, External Integrations & Queues',
                duration: 'Weeks 3 — 5',
                description: 'Implementing complex API viewsets, Celery background workers, third-party webhook receivers (Stripe, CRMs), and Redis caching layers for high-frequency queries.'
            },
            {
                step: '04',
                title: 'Load Testing, Containerization & VPS Deployment',
                duration: 'Week 6',
                description: 'Stress-testing endpoints under simulated concurrency, profiling slow queries with django-debug-toolbar, configuring Docker and NGINX, and deploying to your production servers.'
            }
        ]
    },
    relevantProjectTags: [
        'django-python-development'
    ],
    audience: {
        tag: '[ WHO THIS IS FOR ]',
        title: 'Senior Python Engineering for Product Teams',
        items: [
            {
                title: 'Founders Needing a Bulletproof Backend for Web or Mobile',
                description: 'You need a battle-tested server architecture that protects customer data, handles complex payment rules, and easily powers both web frontends and mobile apps.'
            },
            {
                title: 'Companies Requiring Targeted Django Consulting',
                description: 'You already have a Django codebase that has grown unruly, slow, or difficult to maintain. I step in to profile bottlenecks, refactor models, and restore team velocity.'
            },
            {
                title: 'Startups Ready to Replace Fragile BaaS Solutions',
                description: 'You have outgrown Firebase or no-code backends and need complete control over your database schemas, server costs, complex transactions, and data governance.'
            },
            {
                title: 'Engineering Leads Looking to Augment Their Development Team',
                description: 'You need a seasoned senior Python developer who can plug into existing Git workflows, write clean self-documenting code, and take complete ownership of API deliverables.'
            }
        ]
    },
    faq: {
        tag: '[ FAQ ]',
        title: 'Frequently Asked Questions About Django Consulting',
        items: [
            {
                question: 'Why hire a Django expert instead of using Node.js or Go for backend development?',
                answer: 'Django provides an unmatched "batteries-included" ecosystem with mature ORM capabilities, rock-solid security defaults (CSRF, SQL injection, XSS protection built-in), and an intuitive administrative interface out of the box. For SaaS platforms and data-intensive products, Python and Django allow you to build complex features in days rather than weeks.'
            },
            {
                question: 'Can Django backends scale to hundreds of thousands of concurrent users?',
                answer: 'Yes. Industry leaders like Instagram, Pinterest, and Disqus run Django at massive global scale. Scalability depends on clean database normalization, avoiding synchronous I/O in the request-response cycle, leveraging Redis caching, and offloading heavy workloads to Celery background task workers.'
            },
            {
                question: 'How do you structure Django REST Framework APIs for frontend and mobile consumption?',
                answer: 'I architect DRF APIs using modular viewsets, strict serializer input validation, paginated responses, and granular permission classes. I generate interactive OpenAPI (Swagger) documentation automatically so frontend and mobile developers have clear endpoint specifications and mock payloads.'
            },
            {
                question: 'Do you offer ongoing Django consulting and maintenance for existing codebases?',
                answer: 'Yes. Beyond greenfield engineering, I provide Django consulting retainers: upgrading legacy Django and Python versions, applying security patches, auditing slow PostgreSQL queries, and conducting comprehensive code reviews for growing engineering teams.'
            },
            {
                question: 'Where do you deploy Django applications?',
                answer: 'I deploy Django across modern Linux VPS hosts (Hetzner, DigitalOcean, AWS, Linode) using containerized Docker setups with NGINX, or fully managed platforms such as Render and Railway. I implement automated GitHub Actions CI/CD for continuous zero-downtime releases.'
            }
        ]
    },
    cta: {
        headline: 'Ready to Engineer Your Python & Django Backend?',
        subheadline: 'Hire a dedicated Django expert to build, optimize, or scale your web APIs and database infrastructure. Book a consultation call today.',
        buttonText: "Let's discuss Django engineering"
    },
    relatedServiceSlugs: [
        'web-application-development',
        'n8n-automation',
        'flutter-app-development'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services/flutter-app-development.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service: Custom Mobile Application Development (Flutter)
 * Primary Keyword: "custom mobile application development"
 * Secondary Keywords: iOS mobile app development services, hybrid mobile app development services, hire iPhone app developer, app design services, mobile UI design services
 * Differentiator: Single codebase for iOS and Android via Flutter.
 */ __turbopack_context__.s([
    "flutterAppDevelopment",
    ()=>flutterAppDevelopment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const flutterAppDevelopment = {
    slug: 'flutter-app-development',
    title: 'Custom Mobile Application Development',
    navLabel: 'Flutter Mobile',
    shortDescription: 'Cross-platform mobile application development with Flutter and Dart. Native performance, adaptive layouts, and a single maintainable codebase for iOS and Android.',
    seo: {
        title: 'Custom Mobile Application Development | Outman Elbouhali',
        description: 'Custom mobile application development with Flutter for iOS and Android. High-performance hybrid mobile app development services and app design services.',
        path: '/services/flutter-app-development',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].flutterDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].flutterDev.secondary,
        schemaType: 'Service'
    },
    hero: {
        badge: '// MOBILE APP SPECIALIST',
        headline: 'Custom Mobile Application Development with Flutter',
        subheadline: 'Ship your mobile product simultaneously to the Apple App Store and Google Play using a single unified Flutter codebase that guarantees 60fps native performance.',
        ctaButton: 'Build your mobile app',
        image: {
            src: '/images/atlas/atlass.jpeg',
            alt: 'Custom mobile application development interface on iOS and Android devices'
        }
    },
    deliverables: {
        tag: '[ DELIVERABLES ]',
        title: 'Native-Grade Mobile Deliverables for iOS & Android',
        items: [
            {
                title: 'Unified iOS & Android Mobile Apps',
                description: 'Complete cross-platform applications delivering native look and feel on iPhones and Android devices. One clean Flutter codebase cuts development timelines and maintenance overhead in half.'
            },
            {
                title: 'Mobile UI Design Services & Architecture',
                description: 'Bespoke, human-centered mobile user interfaces featuring fluid gesture interactions, custom widget libraries, dynamic typography, and dark/light mode support adhering to iOS Human Interface and Material Guidelines.'
            },
            {
                title: 'Offline-First Storage & Local Sync',
                description: 'Resilient data architecture using Hive, SQLite, or ObjectBox with background sync, allowing your users uninterrupted access to their data even under unstable cellular connectivity.'
            },
            {
                title: 'Secure Authentication & Payment Processing',
                description: 'Biometric Face ID / fingerprint login, OAuth (Apple, Google, GitHub), Apple In-App Purchases, Google Play Billing, Stripe mobile SDK, and token-based API authentication.'
            },
            {
                title: 'Real-Time Features & Push Notifications',
                description: 'Instant messaging, live geolocation tracking, WebSocket subscriptions, and targeted push notification orchestration through Firebase Cloud Messaging (FCM) and OneSignal.'
            },
            {
                title: 'App Store & Google Play Submission',
                description: 'End-to-end release management: signing certificates, provisioning profiles, store listing metadata, screenshot preparation, and navigating Apple Review guidelines to guaranteed approval.'
            }
        ]
    },
    techStack: {
        tag: '[ TECH STACK ]',
        title: 'The Modern Flutter & Mobile Ecosystem',
        items: [
            {
                category: 'Framework & Core',
                technologies: [
                    'Flutter 3.x',
                    'Dart',
                    'Bloc / Cubit State Management',
                    'Provider & Riverpod',
                    'Clean Architecture Pattern'
                ]
            },
            {
                category: 'Backend & Services',
                technologies: [
                    'Firebase (Auth, Firestore, Cloud Functions)',
                    'Django REST APIs',
                    'Supabase',
                    'RESTful Endpoints & WebSockets',
                    'PostgreSQL'
                ]
            },
            {
                category: 'Native & Tooling',
                technologies: [
                    'Xcode & Android Studio',
                    'CocoaPods & Gradle',
                    'Fastlane Automated Deployments',
                    'Sentry Performance Monitoring'
                ]
            }
        ]
    },
    process: {
        tag: '[ HOW A MOBILE PROJECT RUNS ]',
        title: 'From Wireframe to App Store Deployment',
        steps: [
            {
                step: '01',
                title: 'UX Flow & Interaction Mapping',
                duration: 'Week 1',
                description: 'We blueprint every user flow, screen transition, and permission prompt. I deliver mobile UI design services wireframes highlighting tactile gesture zones and ergonomic navigation.'
            },
            {
                step: '02',
                title: 'Flutter Foundation & Core Architecture',
                duration: 'Weeks 2 — 3',
                description: 'Setting up Bloc state management, dependency injection, theme systems, and reusable widget primitives. The foundational user authentication and profile flows are delivered.'
            },
            {
                step: '03',
                title: 'API Integration, Offline Sync & Hardware Features',
                duration: 'Weeks 4 — 6',
                description: 'Connecting your backend REST APIs, camera and photo library access, push notification listeners, local persistence caches, and payment gateways with error-boundary recovery.'
            },
            {
                step: '04',
                title: 'TestFlight, Beta Testing & Store Publishing',
                duration: 'Weeks 7 — 8',
                description: 'Distributing builds to your team and stakeholders via Apple TestFlight and Google Play Internal Testing. We iron out edge cases and submit for official App Store review.'
            }
        ]
    },
    relevantProjectTags: [
        'flutter-app-development'
    ],
    audience: {
        tag: '[ WHO THIS IS FOR ]',
        title: 'Built for Founders Needing Reliable Mobile Execution',
        items: [
            {
                title: 'Startup Founders Launching Their First App',
                description: 'You need to release on both iOS and Android simultaneously without hiring two separate native development teams or exhausting your seed capital on redundant engineers.'
            },
            {
                title: 'Established Web Businesses Expanding to Mobile',
                description: 'You have a successful web platform and want to provide your active user base with a fast, dedicated mobile experience that keeps engagement high via push notifications.'
            },
            {
                title: 'Teams Seeking High-Performance Hybrid Mobile App Development',
                description: 'You want the engineering efficiency of cross-platform code without the clunky web-view performance compromises of older hybrid toolkits. Flutter renders directly via Skia / Impeller.'
            },
            {
                title: 'Companies Requiring Dedicated iPhone & Android Expertise',
                description: 'You need a developer who understands native platform conventions, background tasks, App Store guidelines, and mobile performance profiling down to the hardware level.'
            }
        ]
    },
    faq: {
        tag: '[ FAQ ]',
        title: 'Frequently Asked Questions About Flutter Development',
        items: [
            {
                question: 'Why choose Flutter for custom mobile application development over native Swift and Kotlin?',
                answer: 'Flutter compiles directly to native ARM machine code using Google’s Impeller rendering engine, ensuring silky 60fps to 120fps animations. Choosing Flutter allows you to share over 95% of your codebase between iOS and Android. This drastically slashes development costs, speeds up time-to-market, and prevents feature parity bugs between platforms.'
            },
            {
                question: 'Do Flutter apps feel truly native to iOS and Android users?',
                answer: 'Yes. Flutter allows adaptive widget rendering that automatically matches platform idioms—such as Cupertino navigation bars on iPhones and Material 3 transitions on Android. Users cannot distinguish a meticulously engineered Flutter app from one built in pure Swift or Kotlin.'
            },
            {
                question: 'Can you handle the entire Apple App Store and Google Play review process?',
                answer: 'Yes, completely. I configure your Apple Developer and Google Play Console accounts, set up cryptographic distribution certificates and provisioning profiles, write App Store privacy declarations, prepare marketing screenshots, and resolve any feedback or guidelines questions from Apple reviewers.'
            },
            {
                question: 'How do you handle backend integration and API communication?',
                answer: 'I connect Flutter apps to custom Django, Node.js, or Firebase backends using typed API repositories, interceptors for JWT token refreshes, and automatic request caching. If you do not yet have a backend, I can engineer your server APIs concurrently.'
            },
            {
                question: 'What happens when Apple or Google release new OS versions?',
                answer: 'Because Flutter is maintained actively by Google and backed by an enormous global ecosystem, major iOS and Android updates are supported immediately. I build with clean, decoupled state architectures that make future SDK bumps simple and stress-free.'
            }
        ]
    },
    cta: {
        headline: 'Ready to Launch Your iOS & Android Mobile App?',
        subheadline: 'Let’s turn your mobile product concept into a high-performance cross-platform application. Schedule a technical discovery session today.',
        buttonText: "Let's talk mobile apps"
    },
    relatedServiceSlugs: [
        'web-application-development',
        'django-python-development',
        'n8n-automation'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Services Registry & /services Overview Page Content.
 * Central single source of truth for all service routes, navigation dropdowns,
 * footer links, overview cards, sitemap generation, and JSON-LD schemas.
 *
 * To add a new service:
 * 1. Create a service file in src/data/services/<slug>.ts implementing ServiceDetail.
 * 2. Import and append it to the servicesRegistry array below.
 */ __turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "servicesOverviewPage",
    ()=>servicesOverviewPage,
    "servicesRegistry",
    ()=>servicesRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$web$2d$application$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/web-application-development.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$flutter$2d$app$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/flutter-app-development.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$django$2d$python$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/django-python-development.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$n8n$2d$automation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/n8n-automation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$wordpress$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/wordpress-development.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const servicesRegistry = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$web$2d$application$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webApplicationDevelopment"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$flutter$2d$app$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flutterAppDevelopment"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$django$2d$python$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["djangoPythonDevelopment"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$n8n$2d$automation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n8nAutomation"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$wordpress$2d$development$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordpressDevelopment"]
];
function getServiceBySlug(slug) {
    return servicesRegistry.find((s)=>s.slug === slug);
}
const servicesOverviewPage = {
    seo: {
        title: 'Full Stack Development Services | Outman Elbouhali',
        description: 'Full stack development services by Outman Elbouhali: custom web application engineering, Flutter mobile apps, Django REST APIs, and automated n8n workflows.',
        path: '/services',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].servicesOverview.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].servicesOverview.secondary,
        schemaType: 'Service'
    },
    hero: {
        badge: '// ENGINEERING & CONSULTING CAPABILITIES',
        title: 'Full Stack Development Services',
        subtitle: 'I engineer high-performance web applications, cross-platform mobile apps, scalable backend APIs, and automated business workflows for startups and growing businesses.',
        ctaButton: 'Discuss your project'
    },
    intro: {
        tag: '[ ARCHITECTURE & EXECUTION ]',
        statement: 'FROM ARCHITECTURE TO PRODUCTION — PRODUCTION-GRADE CODE, HIGH-PERFORMANCE INTERFACES, AND PURPOSE-BUILT AUTOMATION.'
    },
    faq: {
        tag: '[ SERVICES FAQ ]',
        title: 'Frequently Asked Questions About My Services',
        items: [
            {
                question: 'What types of development services do you offer?',
                answer: 'I offer five focused services: custom web application development (React/Next.js), cross-platform mobile app development (Flutter for iOS & Android), backend API architecture (Django/Python), self-hosted workflow automation (n8n & AI agents), and custom WordPress theme development.'
            },
            {
                question: 'How do you work with clients across different time zones?',
                answer: 'Based in Morocco (GMT+1), my working hours overlap cleanly with European, Middle Eastern, and North American business days. I communicate through Slack, Discord, email, and scheduled video check-ins, providing clear weekly progress demos and asynchronous updates.'
            },
            {
                question: 'Can you help with both new products and existing codebases?',
                answer: 'Yes. I specialize in building new MVPs and full products from the ground up, as well as stepping into established codebases to audit architecture, optimize database latency, add critical features, or automate backend workflows.'
            },
            {
                question: 'How are projects priced and billed?',
                answer: 'I work on milestone-based fixed contracts for clearly scoped projects, or weekly/monthly retainers for ongoing feature engineering and consulting. All pricing is transparent with clear deliverable acceptance criteria and zero surprise add-on charges.'
            }
        ]
    },
    cta: {
        line1: "LET'S BUILD",
        line2: 'YOUR PRODUCT',
        desc: 'Have a product to launch or an operation to automate? Let’s talk about your roadmap.',
        buttonText: 'Start a project conversation'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services/n8n-automation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service: n8n Automation & AI Workflow Engineering
 * Primary Keyword: "n8n developer"
 * Secondary Keywords: n8n consulting, workflow consultants, AI agents integration, AI agent development, agentic workflow builder, workflow automation with AI, automated workflow tools for scaling manual processes, hire CRM integration specialists
 * Dedicated H2: "AI Agents & Integrations"
 * Differentiator: Self-hosted n8n infrastructure on Linux VPS (Docker, NGINX, automated backups, zero execution fees).
 * Real data (no provisional notes).
 */ __turbopack_context__.s([
    "n8nAutomation",
    ()=>n8nAutomation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const n8nAutomation = {
    slug: 'n8n-automation',
    title: 'n8n Developer & AI Workflow Automation',
    navLabel: 'n8n Automation',
    shortDescription: 'Hire an experienced n8n developer for self-hosted workflow automation, AI agents integration, and API connectors. Cut operational costs with zero per-step execution fees.',
    seo: {
        title: 'n8n Developer & AI Workflow Automation | Outman Elbouhali',
        description: 'Hire an n8n developer for self-hosted workflow automation with AI, AI agents integration, and custom CRM connectors. Reduce SaaS expenses with self-hosted n8n.',
        path: '/services/n8n-automation',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].n8nDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].n8nDev.secondary,
        schemaType: 'Service'
    },
    hero: {
        badge: '// AUTOMATION & AI AGENTS SPECIALIST',
        headline: 'n8n Developer for Scalable AI & Workflow Automation',
        subheadline: 'I build robust, self-hosted n8n automation pipelines and intelligent AI agent workflows that connect your business tools, eliminate manual data entry, and reduce SaaS bills.',
        ctaButton: 'Automate your workflows with n8n',
        image: {
            src: '/images/call-to-action/n8n Automation Workflow .png',
            alt: 'n8n developer building complex self-hosted automation workflows and AI agents'
        }
    },
    deliverables: {
        tag: '[ AI AGENTS & INTEGRATIONS ]',
        title: 'AI Agents & Integrations for Automated Workflows',
        items: [
            {
                title: 'AI Agents Integration & Agentic Workflow Builder',
                description: 'Designing intelligent autonomous agents inside n8n powered by OpenAI, Claude, or local LLMs via Ollama. I configure memory buffers, system prompts, vector search retrievers, and decision-tree tools that handle customer queries, parse documents, and execute multistep business actions.'
            },
            {
                title: 'Self-Hosted n8n Server Setup & Infrastructure',
                description: 'Complete turn-key deployment of self-hosted n8n instances on Linux VPS servers using Docker Compose, secure NGINX reverse proxies, automated SSL certificates, and daily encrypted database backups. You get unlimited workflow executions without third-party step fees.'
            },
            {
                title: 'CRM Integration & Pipeline Synchronization',
                description: 'Hire CRM integration specialists to bridge HubSpot, Salesforce, Pipedrive, or Close CRM with your billing software, databases, and customer support desks. Every lead, deal update, and invoice synchronizes bidirectionally in real time.'
            },
            {
                title: 'Automated Workflow Tools for Scaling Manual Processes',
                description: 'Transform manual repetitive operations into automated background routines: PDF invoice parsing, customer onboarding email sequences, Slack and Telegram alerts, spreadsheet data normalization, and search engine indexation triggers.'
            },
            {
                title: 'Custom Webhook Engineering & API Connectors',
                description: 'Building custom JavaScript / Python nodes and webhook receivers inside n8n to integrate legacy platforms, proprietary databases, and internal APIs that lack native third-party pre-built connectors.'
            },
            {
                title: 'Fault-Tolerant Error Handling & Recovery Loops',
                description: 'Enterprise-grade workflow resilience: automated error trigger nodes, dead-letter queues, retry mechanisms with exponential backoff, and instant team notifications whenever external APIs timeout or return non-200 responses.'
            }
        ]
    },
    techStack: {
        tag: '[ TECH STACK ]',
        title: 'Automation, AI Models & Server Infrastructure',
        items: [
            {
                category: 'Core Automation Engines',
                technologies: [
                    'n8n (Self-Hosted & Cloud)',
                    'Make.com (Integromat)',
                    'Zapier Webhooks',
                    'Custom REST & GraphQL Endpoints'
                ]
            },
            {
                category: 'AI & LLM Integrations',
                technologies: [
                    'OpenAI API (GPT-4o)',
                    'Anthropic Claude 3.5',
                    'LangChain & Vector Stores (Qdrant, Pinecone)',
                    'Local LLMs via Ollama'
                ]
            },
            {
                category: 'Infrastructure & Storage',
                technologies: [
                    'Docker & Docker Compose',
                    'PostgreSQL (n8n Production DB)',
                    'Linux VPS (Hetzner, DigitalOcean)',
                    'NGINX Reverse Proxy & Let\'s Encrypt SSL',
                    'Automated Volume Backups'
                ]
            }
        ]
    },
    process: {
        tag: '[ AUTOMATION WORKFLOW ]',
        title: 'How an n8n Automation Project Runs',
        steps: [
            {
                step: '01',
                title: 'Process Audit & System Architecture',
                duration: 'Days 1 — 3',
                description: 'We audit your current manual bottlenecks, third-party software stack, data models, and API rate limits. I map out a clear data-flow diagram connecting every trigger to its target action.'
            },
            {
                step: '02',
                title: 'Server Provisioning & n8n Instance Hardening',
                duration: 'Days 3 — 5',
                description: 'I provision an isolated Linux VPS, deploy containerized n8n backed by PostgreSQL, enforce SSL encryption, configure secure environment credentials, and establish automated daily backups.'
            },
            {
                step: '03',
                title: 'Workflow Construction & AI Agent Tuning',
                duration: 'Weeks 2 — 3',
                description: 'Building the core automation graphs, writing data transformation logic in JavaScript, integrating AI agent nodes with tailored system instructions, and setting up error notification channels.'
            },
            {
                step: '04',
                title: 'Edge Case Testing, Monitoring & Handover',
                duration: 'Week 4',
                description: 'Simulating malformed payloads, rate limit surges, and API downtime to verify recovery loops. I deliver complete workflow documentation and provide training for your internal operators.'
            }
        ]
    },
    relevantProjectTags: [
        'n8n-automation'
    ],
    audience: {
        tag: '[ WHO THIS IS FOR ]',
        title: 'Designed for Businesses Scaling Operational Throughput',
        items: [
            {
                title: 'Companies Tired of Exponential Zapier / Make Invoices',
                description: 'If your operations trigger tens of thousands of tasks monthly, commercial SaaS billing becomes extortionate. Self-hosted n8n gives you infinite executions for the flat monthly price of a basic VPS.'
            },
            {
                title: 'SaaS Founders Building AI-Powered Features',
                description: 'You want to deploy agentic workflow builders and LLM-assisted workflows that process user documents, triage tickets, or generate personalized insights without building complex scaffolding from scratch.'
            },
            {
                title: 'Operations Leads Drowning in Manual Data Entry',
                description: 'Your team spends hours copying data between forms, spreadsheets, CRMs, and email inboxes. I automate these repetitive processes so your team can focus on high-leverage strategic work.'
            },
            {
                title: 'Enterprises Requiring Complete Data Sovereignty',
                description: 'You handle sensitive customer or financial data that cannot pass through multi-tenant US cloud servers. With self-hosted n8n, all data stays strictly on your private, GDPR-compliant infrastructure.'
            }
        ]
    },
    faq: {
        tag: '[ FAQ ]',
        title: 'Frequently Asked Questions About n8n & Workflow Automation',
        items: [
            {
                question: 'n8n vs Zapier vs Make: which should I use?',
                answer: 'Zapier is simple for elementary 2-step tasks but becomes prohibitively expensive at scale. Make offers visual routing but retains usage tiers. n8n is the ultimate choice for technical teams and growing businesses: open-source, easily self-hosted, supports complex branching with custom JavaScript, and incurs zero per-execution costs while keeping all proprietary data on your private infrastructure.'
            },
            {
                question: 'n8n cloud vs self-hosted: what\'s the difference?',
                answer: 'n8n Cloud is a managed subscription hosted on n8n’s servers with monthly execution caps. Self-hosted n8n is installed on your private Linux server via Docker. Self-hosting grants total data privacy, eliminates task execution limits, enables direct database connections, and allows local AI models, costing only the base VPS fee (typically $10–$20/month).'
            },
            {
                question: 'n8n community vs enterprise edition: which do I need?',
                answer: 'The n8n Community Edition is free, open-source, and includes all core nodes, AI agent tools, and webhook features needed by 95% of businesses. The Enterprise Edition adds SSO authentication, advanced role-based access control (RBAC), and external audit logs, which are primarily necessary for large corporate compliance teams.'
            },
            {
                question: 'How do you ensure self-hosted n8n remains reliable and secure?',
                answer: 'I configure production n8n deployments with PostgreSQL (never fragile SQLite), automatic SSL certificates, Docker restart policies, and daily off-site database backups. I also configure webhook secret validation, environment-level credential encryption, and dedicated error-handling notification pipelines.'
            },
            {
                question: 'Can n8n connect to my internal custom database or proprietary software?',
                answer: 'Yes. Because n8n provides native PostgreSQL, MySQL, and MongoDB nodes alongside HTTP Request and Code nodes, I can connect it directly to your private databases, custom APIs, internal microservices, and private webhook endpoints behind your firewall.'
            }
        ]
    },
    cta: {
        headline: 'Ready to Streamline Operations with a Dedicated n8n Developer?',
        subheadline: 'Eliminate manual busywork, reduce software expenses, and harness AI workflow automation on your terms. Schedule an automation consultation today.',
        buttonText: "Let's automate with n8n"
    },
    relatedServiceSlugs: [
        'web-application-development',
        'django-python-development',
        'wordpress-development'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services/web-application-development.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service: Custom Web Application Development
 * Primary Keyword: "custom web development"
 * Secondary Keywords: responsive website development, startup web app development, custom website design, affordable web developers, website design services
 */ __turbopack_context__.s([
    "webApplicationDevelopment",
    ()=>webApplicationDevelopment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const webApplicationDevelopment = {
    slug: 'web-application-development',
    title: 'Full Stack Web Development Services',
    navLabel: 'Custom Web Apps',
    shortDescription: 'Full-stack custom web development for SaaS founders and startups. Scalable React and Next.js applications engineered for speed, clean architecture, and conversion.',
    seo: {
        title: 'Full Stack Web Development Services | Outman Elbouhali',
        description: 'Full stack web development services for startups and SaaS founders. Production React and Next.js web applications, responsive architectures, and robust APIs.',
        path: '/services/web-application-development',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].webAppDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].webAppDev.secondary,
        schemaType: 'Service'
    },
    hero: {
        badge: '// FULL-STACK ENGINEERING',
        headline: 'Full Stack Web Development Services for Scalable Products',
        subheadline: 'I engineer production-grade web applications from architecture and interactive UI to database schemas, third-party integrations, and automated cloud deployments.',
        ctaButton: 'Start your web project',
        image: {
            src: '/images/skatys/Skatys Website .png',
            alt: 'Custom web development dashboard and architecture showcase'
        }
    },
    deliverables: {
        tag: '[ DELIVERABLES ]',
        title: 'What I Build for Web Platforms',
        items: [
            {
                title: 'Full-Stack SaaS Applications',
                description: 'End-to-end software applications with multi-tenant architectures, role-based authentication, real-time dashboards, billing and subscription hooks, and robust database layers.'
            },
            {
                title: 'Startup Web App Development & MVPs',
                description: 'Fast turnaround MVPs engineered with maintainable foundations. I build functional, high-velocity web products that allow startup founders to test hypotheses and onboard paying customers without technical debt.'
            },
            {
                title: 'Responsive Website Development',
                description: 'Pixel-perfect, fluid layouts built with modern Tailwind CSS and semantic markup that guarantee flawless performance and interaction on mobile phones, tablets, and high-resolution desktop displays.'
            },
            {
                title: 'Custom Website Design & Design Systems',
                description: 'Translating brand identity into structured component libraries using modern typography, dark and light mode themes, micro-interactions, and accessible UI primitives.'
            },
            {
                title: 'API Integrations & Payment Gateways',
                description: 'Secure integrations with Stripe, PayPal, Lemon Squeezy, headless CMS platforms, customer messaging services, transactional email providers, and webhooks.'
            },
            {
                title: 'Performance Optimization & Core Web Vitals',
                description: 'Sub-second initial page loads, optimal bundle splitting, font rendering strategies, asset preloading, and Lighthouse scores consistently exceeding 95 across all core audit categories.'
            }
        ]
    },
    techStack: {
        tag: '[ TECH STACK ]',
        title: 'Modern, Battle-Tested Web Technologies',
        items: [
            {
                category: 'Frontend & UI',
                technologies: [
                    'React 19',
                    'Next.js (App Router)',
                    'TypeScript',
                    'Tailwind CSS',
                    'Framer Motion',
                    'GSAP',
                    'Radix UI Primitives'
                ]
            },
            {
                category: 'Backend & Data',
                technologies: [
                    'Node.js',
                    'Django REST Framework',
                    'PostgreSQL',
                    'Redis Caching',
                    'Prisma ORM',
                    'REST & GraphQL APIs'
                ]
            },
            {
                category: 'Deployment & DevOps',
                technologies: [
                    'Docker Containers',
                    'Linux VPS & NGINX',
                    'Vercel Edge Network',
                    'GitHub Actions CI/CD',
                    'Cloudflare CDN & SSL'
                ]
            }
        ]
    },
    process: {
        tag: '[ PROJECT WORKFLOW ]',
        title: 'How a Web Project Runs From Concept to Launch',
        steps: [
            {
                step: '01',
                title: 'Technical Discovery & Architecture',
                duration: 'Week 1',
                description: 'We review your product goals, user journeys, data entities, and integration requirements. I deliver a comprehensive technical roadmap, database schema, and architectural specification.'
            },
            {
                step: '02',
                title: 'Interactive UI & Component Foundations',
                duration: 'Weeks 2 — 3',
                description: 'I establish the component system, responsive layouts, theme context, and design tokens. Core views are built with interactive micro-animations and zero dummy layouts.'
            },
            {
                step: '03',
                title: 'Backend Logic, APIs & Database Integration',
                duration: 'Weeks 3 — 5',
                description: 'I implement secure user authentication, CRUD operations, database queries, webhooks, and third-party service connections, validating data integrity with rigorous typing.'
            },
            {
                step: '04',
                title: 'Testing, Hardening & Production Launch',
                duration: 'Week 6',
                description: 'Cross-device responsive testing, performance benchmarking, Lighthouse optimization, domain and SSL configuration, and zero-downtime deployment to your hosting environment.'
            }
        ]
    },
    relevantProjectTags: [
        'web-application-development'
    ],
    audience: {
        tag: '[ WHO THIS IS FOR ]',
        title: 'Tailored Solutions for Founders and Digital Teams',
        items: [
            {
                title: 'Early-Stage Startups & Solo Founders',
                description: 'You need an engineering partner who can translate your product vision into a live, scalable MVP without hiring an expensive agency or managing disparate contractors.'
            },
            {
                title: 'SaaS Companies Scaling Features',
                description: 'You already have traction and need a dedicated full-stack developer to architect new customer dashboards, optimize frontend latency, or refactor legacy codebases.'
            },
            {
                title: 'Digital Agencies Needing Senior Execution',
                description: 'You have demanding client deliverables and need reliable, high-standard frontend and full-stack execution that hits deadlines and follows strict code standards.'
            },
            {
                title: 'Businesses Modernizing Manual Operations',
                description: 'You want to replace spreadsheets and disconnected off-the-shelf software with a custom web application designed around your company’s exact operational workflows.'
            }
        ]
    },
    faq: {
        tag: '[ FAQ ]',
        title: 'Frequently Asked Questions About Web Development',
        items: [
            {
                question: 'Why hire an independent developer instead of an agency for custom web development?',
                answer: 'Working with me gives you direct access to the senior engineer building your codebase. There are no project managers diluting communication, no hidden overhead fees, and no junior staff assigned to your project. You get faster iteration cycles, consistent engineering standards, and complete accountability from discovery through post-launch support.'
            },
            {
                question: 'How long does a typical startup web app development project take?',
                answer: 'Most focused MVPs and custom web applications launch within 4 to 8 weeks depending on scope, authentication complexity, and third-party integrations. Because I work with modular React and Next.js architectures and pre-tested backend patterns, we move swiftly into user-facing testing without cutting technical corners.'
            },
            {
                question: 'Will I own all code, intellectual property, and deployment infrastructure?',
                answer: 'Yes, 100%. All repository code, database migrations, configuration scripts, and documentation belong completely to you upon project milestone completion. I build using open-source, vendor-neutral tooling without proprietary lock-ins, so your team or future hires can easily build on the foundation.'
            },
            {
                question: 'How do you ensure responsive website development across all screen sizes?',
                answer: 'I test layouts continuously across real iOS and Android mobile viewports, tablets, laptops, and ultra-wide desktop monitors. Using CSS grid, flexible flexbox primitives, and fluid typography, your application delivers an intuitive, thumb-friendly mobile experience alongside an expansive desktop dashboard.'
            },
            {
                question: 'Can you work with my existing design files or wireframes?',
                answer: 'Absolutely. If you have Figma, Sketch, or Adobe XD mockups, I translate them with obsessive attention to spacing, hierarchy, and micro-interactions. If you only have wireframes or product specs, I provide website design services and interactive UI layouts tailored to your brand.'
            }
        ]
    },
    cta: {
        headline: 'Ready to Build Your Custom Web Application?',
        subheadline: 'Let’s discuss your technical requirements, architectural options, and launch timeline. Book a direct discovery call today.',
        buttonText: "Let's talk web development"
    },
    relatedServiceSlugs: [
        'django-python-development',
        'flutter-app-development',
        'n8n-automation'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services/wordpress-development.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service: WordPress Theme Development & CMS Engineering
 * Primary Keyword: "WordPress theme development service"
 * Secondary Keywords: hire WordPress theme developer, hire dedicated WordPress developer, WordPress speed optimization, enterprise WordPress development, Elementor expert
 */ __turbopack_context__.s([
    "wordpressDevelopment",
    ()=>wordpressDevelopment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-client] (ecmascript)");
;
;
const wordpressDevelopment = {
    slug: 'wordpress-development',
    title: 'WordPress Theme Development Service & CMS Solutions',
    navLabel: 'WordPress & CMS',
    shortDescription: 'Custom WordPress theme development service for content platforms, publishers, and businesses. Fast, clean, SEO-optimized WordPress code without bloated plugins.',
    seo: {
        title: 'WordPress Theme Development Service | Outman Elbouhali',
        description: 'Professional WordPress theme development service. Hire a dedicated WordPress developer for custom themes, WordPress speed optimization, and CMS architecture.',
        path: '/services/wordpress-development',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].wordpressDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywords"].wordpressDev.secondary,
        schemaType: 'Service'
    },
    hero: {
        badge: '// WORDPRESS CMS ARCHITECT',
        headline: 'Custom WordPress Theme Development Service for High-Traffic Sites',
        subheadline: 'I engineer lightweight, bespoke WordPress themes and CMS solutions tailored for maximum SEO rankings, blistering page speeds, and effortless content publishing.',
        ctaButton: 'Request WordPress development',
        image: {
            src: '/images/salad/salad recipes.png',
            alt: 'WordPress theme development service showing custom responsive layouts and SEO structure'
        }
    },
    deliverables: {
        tag: '[ DELIVERABLES ]',
        title: 'Custom WordPress & CMS Engineering Deliverables',
        items: [
            {
                title: 'Bespoke WordPress Theme Development',
                description: 'Handcrafted, clean PHP/TypeScript WordPress themes engineered from scratch without bloated generic parent themes. Fully modular templates following modern WordPress coding standards and semantic HTML5 hierarchy.'
            },
            {
                title: 'WordPress Speed Optimization & Core Web Vitals',
                description: 'Drastic latency reductions: database query minimization, critical CSS inlining, native image lazy-loading, WebP conversion, Redis object caching, and achieving 95+ Google PageSpeed Insights mobile scores.'
            },
            {
                title: 'Advanced Custom Fields (ACF Pro) & Custom Post Types',
                description: 'Structured back-office publishing interfaces configured with ACF Pro and Gutenberg blocks. Content editors can create rich, customized landing pages effortlessly without breaking layout consistency.'
            },
            {
                title: 'Technical SEO Infrastructure & Rich Schema Markup',
                description: 'Automated OpenGraph meta generators, dynamic XML sitemaps, breadcrumbs, canonical tag rules, and JSON-LD structured schemas (Article, Recipe, Organization, FAQPage) engineered directly into template files.'
            },
            {
                title: 'Elementor Expert & Page Builder Customization',
                description: 'When visual flexibility is mandatory, I build custom lightweight Elementor widgets and dynamic template systems that empower marketing teams while preserving strict page performance benchmarks.'
            },
            {
                title: 'Search Indexing & Social Automation Pipelines',
                description: 'Automated webhook triggers that notify Google Search Console and Bing Webmaster Tools instantly upon post publication, coupled with automatic branded card generation for social distribution.'
            }
        ]
    },
    techStack: {
        tag: '[ TECH STACK ]',
        title: 'WordPress, PHP & Optimization Technologies',
        items: [
            {
                category: 'Core CMS & Architecture',
                technologies: [
                    'WordPress Core (Latest)',
                    'PHP 8.2+',
                    'Custom Theme Architecture (Roots Sage / Custom)',
                    'Advanced Custom Fields (ACF Pro)',
                    'Custom Post Types & Taxonomies'
                ]
            },
            {
                category: 'Page Builders & Styling',
                technologies: [
                    'Elementor Pro & Custom Widgets',
                    'Tailwind CSS for WordPress',
                    'Gutenberg Full Site Editing (FSE)',
                    'Vanilla JavaScript & Swiper.js'
                ]
            },
            {
                category: 'Performance & Indexing',
                technologies: [
                    'Redis Object Caching',
                    'WP Rocket & Cloudflare CDN',
                    'Rank Math / Yoast SEO Optimization',
                    'Google Indexing API & Webhooks'
                ]
            }
        ]
    },
    process: {
        tag: '[ WORKFLOW ]',
        title: 'How a Custom WordPress Project Runs',
        steps: [
            {
                step: '01',
                title: 'Content Architecture & SEO Planning',
                duration: 'Days 1 — 3',
                description: 'We analyze your editorial workflows, content categories, URL permalinks, and keyword taxonomy. I deliver a clear custom post type schema and SEO tag hierarchy.'
            },
            {
                step: '02',
                title: 'Custom Theme Engineering & Layouts',
                duration: 'Weeks 1 — 2',
                description: 'Developing bespoke PHP templates, responsive header/footer systems, typography scales, and modular ACF block fields with zero dependency on third-party plugin bloat.'
            },
            {
                step: '03',
                title: 'Speed Optimization & Indexing Automations',
                duration: 'Week 3',
                description: 'Configuring server-level caching, optimizing image pipelines, embedding JSON-LD schemas, and integrating search engine indexing webhooks for rapid content discovery.'
            },
            {
                step: '04',
                title: 'Staging Migration & Live Deployment',
                duration: 'Week 4',
                description: 'Performing seamless database migration, 301 redirect mapping, SSL hardening, Google Search Console verification, and delivering comprehensive video walkthroughs for your editors.'
            }
        ]
    },
    relevantProjectTags: [
        'wordpress-development'
    ],
    audience: {
        tag: '[ WHO THIS IS FOR ]',
        title: 'High-Standard WordPress Solutions for Growing Brands',
        items: [
            {
                title: 'Content Publishers & Media Platforms',
                description: 'You rely on organic search traffic and need a lightning-fast editorial site where editors can publish structured articles, recipes, or reviews that index within minutes.'
            },
            {
                title: 'Businesses Tired of Slow, Broken Pre-Made Themes',
                description: 'Your existing site suffers from plugin conflicts, agonizing load times, and fragile page builders. I rebuild your site with clean, purpose-built code that runs flawlessly.'
            },
            {
                title: 'Agencies Looking to Hire a Dedicated WordPress Developer',
                description: 'You need a reliable senior WordPress contractor who can convert complex client Figma designs into responsive custom themes on time and within budget.'
            },
            {
                title: 'Enterprise Teams Seeking Granular CMS Governance',
                description: 'You need enterprise WordPress development featuring custom database tables, robust user role permissions, single sign-on, and automated backup infrastructure.'
            }
        ]
    },
    faq: {
        tag: '[ FAQ ]',
        title: 'Frequently Asked Questions About WordPress Development',
        items: [
            {
                question: 'Why choose a custom WordPress theme development service over off-the-shelf marketplace themes?',
                answer: 'Commercial marketplace themes are packed with tens of thousands of lines of unused code, dozens of required plugins, and slow database queries designed to fit every possible use case. A bespoke WordPress theme is built solely for your specific layout and business goals, resulting in 3x faster page speeds, superior Google rankings, and a backend that is remarkably easy to administer.'
            },
            {
                question: 'How do you achieve 95+ PageSpeed scores on WordPress websites?',
                answer: 'I eliminate bulky plugin dependencies, serve responsive next-gen WebP images, inline critical CSS, defer non-essential scripts, enable server-side Redis object caching, and configure Cloudflare edge caching. Your site loads in fractions of a second even under heavy traffic spikes.'
            },
            {
                question: 'Will I be able to edit and update all content without knowing how to code?',
                answer: 'Yes, absolutely. Using Advanced Custom Fields (ACF Pro) and intuitive custom Gutenberg blocks, I build an effortless editorial dashboard. You can update headlines, photos, callout boxes, and links as easily as typing in a Google Doc, without any danger of breaking page layouts.'
            },
            {
                question: 'Can you migrate my existing content and preserve my Google search rankings?',
                answer: 'Yes. I ensure zero ranking drops by maintaining your exact URL structures, migrating all existing blog posts, images, and categories, and configuring 301 redirects for any modified routes. We verify all canonical tags and XML sitemaps before flipping the live switch.'
            },
            {
                question: 'Do you work with Elementor or only purely coded custom themes?',
                answer: 'I am an experienced Elementor expert and regularly build custom themes that integrate Elementor Pro for marketing landing pages. However, I optimize Elementor setups by disabling unnecessary font files, stripping extraneous DOM nodes, and writing custom CSS widgets to guarantee performance remains exceptional.'
            }
        ]
    },
    cta: {
        headline: 'Ready to Upgrade Your WordPress Website?',
        subheadline: 'Hire a dedicated WordPress developer for custom theme engineering, blazing performance, and reliable CMS architecture. Book a discovery call today.',
        buttonText: "Let's discuss WordPress development"
    },
    relatedServiceSlugs: [
        'web-application-development',
        'n8n-automation',
        'django-python-development'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Global site-wide metadata, brand identifiers, and canonical endpoints.
 */ __turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: 'Outman Elbouhali',
    legalName: 'Outman Elbouhali',
    role: 'Full Stack Web & Mobile App Developer',
    domain: 'https://www.outmanelbouhali.online',
    email: 'outmanelbouhali5@gmail.com',
    location: 'Tétouan, Morocco · Worldwide Remote',
    language: 'en',
    twitterHandle: '@oelbouha',
    defaultOgImage: 'https://www.outmanelbouhali.online/images/icon.png',
    socialLinks: {
        github: 'https://github.com/oelbouha',
        linkedin: 'https://www.linkedin.com/in/outman-elbouhali/',
        email: 'mailto:outmanelbouhali5@gmail.com'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TypeScript interfaces for all content and SEO data.
 * Every content file in src/data/ is strictly typed against these definitions.
 */ __turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/ui.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Micro-copy, form labels, button texts, status messages, and aria accessibility labels.
 */ __turbopack_context__.s([
    "ui",
    ()=>ui
]);
const ui = {
    buttons: {
        sayHello: 'say hello',
        letsTalk: "let's talk",
        bookCall: 'BOOK A CALL',
        sendMsg: 'Send message →',
        backHome: 'Back home',
        visitWebsite: 'Visit website',
        openProject: 'OPEN PROJECT',
        continueBrowsing: 'Continue browsing →',
        allProjects: 'VIEW ALL PROJECTS',
        viewAllServices: 'EXPLORE ALL SERVICES',
        exploreService: 'Explore service →'
    },
    labels: {
        credits: 'CREDITS',
        servicesScope: 'SERVICES / SCOPE',
        projectOverview: 'PROJECT OVERVIEW',
        client: 'CLIENT',
        year: 'YEAR',
        stack: 'TECH STACK',
        nextProject: 'NEXT PROJECT',
        projectInfo: 'Project info',
        strategyInsight: 'PROJECT STRATEGY & INSIGHT',
        selectedProjects: 'SELECTED PROJECTS',
        playground: 'PLAYGROUND',
        portfolioBadge: 'PORTFOLIO',
        servicesTag: '[ SERVICES & EXPERTISE ]',
        faqTag: '[ FREQUENTLY ASKED QUESTIONS ]',
        processTag: '[ HOW A PROJECT RUNS ]',
        deliverablesTag: '[ WHAT I DELIVER ]',
        techStackTag: '[ TOOLS & TECHNOLOGIES ]',
        audienceTag: '[ WHO THIS IS FOR ]',
        relatedServicesTag: '[ COMPLEMENTARY SERVICES ]',
        relevantProjectsTag: '[ CASE STUDIES & CODE ]'
    },
    contactModal: {
        badge: '// GET IN TOUCH',
        headlineLine1: "LET'S WORK",
        headlineLine2: 'TOGETHER',
        subheadlineLine1: "WORK WITH ME IF AVERAGE ISN'T YOUR THING.",
        subheadlineLine2: "DROP YOUR VISION, I'LL BUILD IT.",
        spotlightImage: '/images/call-to-action/lets work.jpeg',
        fields: {
            nameLabel: 'Name',
            namePlaceholder: 'Your Name or Company',
            emailLabel: 'Email',
            emailPlaceholder: 'hello@yourcompany.com',
            interestLabel: 'Interest',
            interestOptions: [
                'Custom Web App',
                'Mobile Development',
                'Django Consulting',
                'n8n Automation',
                'WordPress Solution'
            ],
            messageLabel: 'Message',
            messagePlaceholder: 'Tell me about your product, timeline, and goals…'
        },
        success: {
            title: 'Thank you!',
            message: "I have received your note and will review it promptly within 24 hours."
        }
    },
    notFound: {
        badge: 'Page not found',
        code: '404',
        message: 'The page you requested could not be found or has moved.',
        button: 'Back home'
    },
    preloader: {
        portfolio: 'Portfolio',
        loading: 'Loading',
        status: 'Crafting your experience'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/animations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateNavIn",
    ()=>animateNavIn,
    "closeMenu",
    ()=>closeMenu,
    "initCtaVisual",
    ()=>initCtaVisual,
    "initLineAppear",
    ()=>initLineAppear,
    "initProjectFlyIn",
    ()=>initProjectFlyIn,
    "initSimpleAppear",
    ()=>initSimpleAppear,
    "initTextMonoAnimations",
    ()=>initTextMonoAnimations,
    "openMenu",
    ()=>openMenu,
    "playPageTransition",
    ()=>playPageTransition,
    "useHeroWordRotation",
    ()=>useHeroWordRotation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function animateNavIn(onComplete) {
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
        onComplete
    });
    tl.to('.nav-top', {
        y: 0,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.2
    });
    tl.to('.nav-bottom', {
        y: 0,
        duration: 1.4,
        ease: 'power4.out'
    }, '<');
    return tl;
}
function openMenu(pageEl, menuEl, menuContent) {
    if (!pageEl || !menuEl || !menuContent) return;
    menuEl.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    const links = menuEl.querySelectorAll('.nav-menu_link');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(links, {
        y: (_, el)=>el.offsetHeight * 1.2
    });
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
        defaults: {
            ease: 'power4.inOut',
            duration: 1.8
        }
    });
    tl.to(pageEl, {
        rotation: 10,
        x: 300,
        y: 450,
        opacity: 0,
        scale: 1.5
    }, 0);
    tl.to(menuContent, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1
    }, 0);
    tl.to(menuEl, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)'
    }, 0);
    tl.to(links, {
        y: 0,
        duration: 1.4,
        stagger: 0.05,
        ease: 'power4.out'
    }, 0.6);
    return tl;
}
function closeMenu(pageEl, menuEl, menuContent, onComplete) {
    if (!pageEl || !menuEl || !menuContent) return;
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
        defaults: {
            ease: 'power4.inOut',
            duration: 1.8
        },
        onComplete: ()=>{
            menuEl.classList.remove('is-open');
            document.body.style.overflow = '';
            // Only clear menuContent and menuEl — NOT pageEl.
            // The page transition animation owns pageEl and will reset it itself.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                menuContent,
                menuEl
            ], {
                clearProps: 'all'
            });
            onComplete?.();
        }
    });
    tl.to(pageEl, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1
    }, 0);
    tl.to(menuContent, {
        rotation: -15,
        x: -100,
        y: -100,
        scale: 1.5,
        opacity: 0.25
    }, 0);
    tl.to(menuEl, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
    }, 0);
    return tl;
}
function playPageTransition(url, transitionEl, overlayEl, pageEl) {
    if (!transitionEl || !overlayEl || !pageEl) return;
    const isDark = document.documentElement.classList.contains('is-dark');
    const startColor = isDark ? '#111111' : '#E4E4E4';
    const endColor = isDark ? '#111111' : '#E4E4E4';
    transitionEl.style.display = 'block';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(overlayEl, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
    });
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
        defaults: {
            ease: 'power4.inOut',
            duration: 1.8
        },
        onComplete: ()=>{
            window.location.href = url;
        }
    });
    tl.to(pageEl, {
        rotation: 10,
        x: 300,
        y: -450,
        opacity: 0,
        scale: 1.5
    }, 0);
    tl.to(overlayEl, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)'
    }, 0);
    tl.fromTo(overlayEl, {
        backgroundColor: startColor
    }, {
        backgroundColor: endColor,
        duration: 1.2,
        ease: 'power4.inOut'
    }, 0.8);
    return tl;
}
function initTextMonoAnimations() {
    document.querySelectorAll('.text-mono_wrapper .text-mono').forEach((el)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
            y: '120%',
            scale: 0.9
        }, {
            y: '0%',
            scale: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
}
function initSimpleAppear() {
    document.querySelectorAll('.simple-appear').forEach((el)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
            opacity: 0,
            y: '3rem'
        }, {
            opacity: 1,
            y: '0rem',
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
}
function initLineAppear() {
    document.querySelectorAll('.line-appear').forEach((el)=>{
        const lines = Array.from(el.querySelectorAll('.animated-line'));
        if (lines.length === 0) {
            // No split text — just animate the element directly
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
                y: '100%',
                opacity: 0
            }, {
                y: '0%',
                opacity: 1,
                duration: 1.0,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(lines, {
                y: '110%'
            }, {
                y: '0%',
                duration: 1.2,
                ease: 'power4.out',
                stagger: 0.08,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        }
    });
}
function initProjectFlyIn() {
    document.querySelectorAll('.project-visual-odd').forEach((el)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1.4,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
    document.querySelectorAll('.project-visual-even').forEach((el)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1.4,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
}
function initCtaVisual() {
    document.querySelectorAll('.cta-inline-visual').forEach((el)=>{
        const targetWidth = window.innerWidth <= 767 ? '4rem' : window.innerWidth <= 1024 ? '7rem' : '10rem';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
            width: '0rem'
        }, {
            width: targetWidth,
            duration: 1.2,
            ease: 'power4.out',
            delay: 0.3,
            scrollTrigger: {
                trigger: el,
                start: 'top 92%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
}
function useHeroWordRotation(words) {
    _s();
    const indexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const slotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeroWordRotation.useCallback[animate]": ()=>{
            const slot = slotRef.current;
            if (!slot) return;
            const next = (indexRef.current + 1) % words.length;
            indexRef.current = next;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(slot, {
                y: `-${next * 100}%`,
                duration: 0.9,
                ease: 'power4.inOut'
            });
        }
    }["useHeroWordRotation.useCallback[animate]"], [
        words.length
    ]);
    return {
        slotRef,
        animate
    };
}
_s(useHeroWordRotation, "49FeDp1TuhAVSi0oFCkP1LgXSng=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1mq2fx8zi4d9z._.js.map