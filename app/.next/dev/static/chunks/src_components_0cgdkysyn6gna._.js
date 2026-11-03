(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer/Footer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footerStyles",
    ()=>footerStyles
]);
const footerStyles = {
    footer: 'w-full overflow-hidden pt-8  border-black/15 dark:border-white/15 ',
    videosGrid: 'mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 px-4 sm:px-6 lg:px-10 mb-12 w-full',
    videoItem: 'relative aspect-[4/3] rounded-[0.2rem] overflow-hidden bg-black/10 dark:bg-white/10 footer-video-item group',
    videoImg: 'h-full w-full object-cover block transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]',
    navGrid: 'mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-10 py-8  border-black/15 dark:border-white/15 w-full  mb-8',
    navCol: 'flex flex-col gap-2',
    colTitle: 'font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] mb-3 opacity-35 text-[var(--text)]',
    navLink: 'font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] opacity-55 hover:opacity-100 transition-opacity duration-200 cursor-pointer text-[var(--text)]',
    ctaBar: 'mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-8 border-t border-black/15 dark:border-white/15 mb-20 w-full',
    ctaText: 'font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase tracking-[0.08em] opacity-50 text-[var(--text)]',
    ctaButton: 'font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase tracking-[0.08em] inline-flex items-center gap-2 group cursor-pointer opacity-55 hover:opacity-100 transition-opacity duration-200 text-[var(--text)]',
    ctaArrow: 'transition-transform duration-300 group-hover:translate-x-1'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/index.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Footer({ onContactOpen, onNavigate } = {}) {
    const { footer } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutConfig"];
    const handleContact = ()=>{
        if (onContactOpen) {
            onContactOpen();
        } else if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('open-contact'));
        }
    };
    const handleLinkClick = (e, href)=>{
        if (onNavigate) {
            e.preventDefault();
            onNavigate(href);
        }
    };
    // Build columns dynamically so the Services column pulls straight from servicesRegistry
    const footerColumns = [
        footer.columns[0],
        {
            title: 'Services',
            links: [
                {
                    label: 'All Services',
                    href: '/services'
                },
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesRegistry"].map((s)=>({
                        label: s.navLabel,
                        href: `/services/${s.slug}`
                    }))
            ]
        },
        footer.columns[2]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full pt-4 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-6 lg:px-10 w-full mt-2 sm:mt-4 mb-10 sm:mb-16 lg:mb-20 select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full overflow-hidden py-2",
                            style: {
                                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-max whitespace-nowrap animate-[marquee_34s_linear_infinite] will-change-transform",
                                children: [
                                    ...footer.techStacks,
                                    ...footer.techStacks
                                ].map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-['Gt_Pressura_Mono',Georgia,monospace] text-[11px] sm:text-[13px] uppercase tracking-[0.18em] text-[var(--text)] opacity-60 font-normal",
                                                children: skill
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] text-[var(--text)] opacity-30 select-none",
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${skill}-${index}`, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-6 lg:px-10 my-2 sm:my-3 lg:my-4 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-cursor-invert": "true",
                            className: "w-full h-[calc(100vh-2.5rem)] sm:h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-4.5rem)] min-h-[560px] max-h-[860px] rounded-[4px] bg-[#111111] dark:bg-[#161618] border border-black/10 dark:border-white/10 px-6 sm:px-10 flex flex-col items-center justify-center text-center overflow-hidden relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] text-neutral-400 font-normal tracking-normal mb-4 sm:mb-6 select-none",
                                    children: footer.banner.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(3.5rem,9.5vw,10.5rem)] text-[#ebe9e4] uppercase leading-[0.85] tracking-[-0.01em] select-none max-w-6xl",
                                    children: [
                                        footer.banner.headingLine1,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        footer.banner.headingLine2
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleContact,
                                    "data-cursor-hover": footer.banner.buttonText,
                                    "data-cursor-icon": "↗",
                                    "aria-label": footer.banner.buttonText,
                                    className: "mt-8 sm:mt-12 relative overflow-hidden inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4 sm:py-2 rounded-[4px] bg-[#ebe9e4] text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "absolute inset-0 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: footer.banner.avatar.src,
                                            alt: footer.banner.avatar.alt,
                                            className: "relative z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-[3px] object-cover shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 font-['PP_Neue_Montreal_Medium',sans-serif] text-[13px] sm:text-[14px] font-medium tracking-normal text-black transition-colors duration-300 group-hover:text-white",
                                            children: footer.banner.buttonText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                id: "footer",
                className: "footer w-full relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "meta px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 pb-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 md:col-span-6 border-t border-black/15 dark:border-white/15 pt-5 sm:pt-6 flex flex-col justify-start items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: footer.brandBadge.icon.src,
                                            alt: footer.brandBadge.icon.alt,
                                            className: "w-8 h-8 sm:w-10 sm:h-10 mb-4 object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black dark:bg-white/10 text-white dark:text-neutral-200 text-[12px] font-['PP_Neue_Montreal_Medium',sans-serif] tracking-normal select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[12px]",
                                                    children: footer.brandBadge.symbol
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: footer.brandBadge.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "aria-label": "Footer navigation",
                                    className: "contents",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-1 md:col-span-3 border-t border-black/15 dark:border-white/15 pt-5 sm:pt-6 flex flex-col items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[11px] uppercase tracking-wider text-[#888] mb-1",
                                                    children: footerColumns[0].title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                footerColumns[0].links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150",
                                                        children: link.label
                                                    }, link.label, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleContact,
                                                    className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150 text-left cursor-pointer",
                                                    children: "Contact"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-1 md:col-span-3 border-t border-black/15 dark:border-white/15 pt-5 sm:pt-6 flex flex-col items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[11px] uppercase tracking-wider text-[#888] mb-1",
                                                    children: footerColumns[1].title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this),
                                                footerColumns[1].links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150",
                                                        children: link.label
                                                    }, link.label, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[11px] uppercase tracking-wider text-[#888] mt-3 mb-1",
                                                    children: footerColumns[2].title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                footerColumns[2].links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150",
                                                        children: link.label
                                                    }, link.label, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-black/15 dark:border-white/15 text-[14px] leading-[1.2] font-['PP_Neue_Montreal_Medium',sans-serif] text-[#555] dark:text-[#aaa]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 md:col-span-6 text-left",
                                    children: footer.bottomRow.copyright
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 md:col-span-3 text-left",
                                    children: footer.bottomRow.legalNotice
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 md:col-span-3 text-left",
                                    children: footer.bottomRow.location
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer/Footer.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.types.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailClient",
    ()=>ProjectDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailHero/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailCover/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailTagline/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailIntro/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailGallery/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailQuote/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$ProjectDetailQuote$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailInfos$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailInfos/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailInfos$2f$ProjectDetailInfos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailNext/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ProjectDetailClient({ project, nextProject }) {
    _s();
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const taglineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectDetailClient.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!pageRef.current || !project) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                "ProjectDetailClient.useEffect": (t)=>t.kill()
            }["ProjectDetailClient.useEffect"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ProjectDetailClient.useEffect.ctx": ()=>{
                    if (titleRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(titleRef.current, {
                            y: 25,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: 'power3.out',
                            delay: 0.1
                        });
                    }
                    if (coverRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(coverRef.current, {
                            y: 20,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: 'power3.out',
                            delay: 0.15
                        });
                    }
                    if (taglineRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(taglineRef.current, {
                            y: 40,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.2,
                            ease: 'power4.out',
                            scrollTrigger: {
                                trigger: taglineRef.current,
                                start: 'top 88%'
                            }
                        });
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.proj-img-reveal').forEach({
                        "ProjectDetailClient.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                                y: 60,
                                opacity: 0,
                                duration: 1.1,
                                ease: 'power4.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 88%'
                                }
                            });
                        }
                    }["ProjectDetailClient.useEffect.ctx"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.proj-info-row').forEach({
                        "ProjectDetailClient.useEffect.ctx": (el, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                                y: 30,
                                opacity: 0,
                                duration: 0.9,
                                delay: i * 0.07,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 90%'
                                }
                            });
                        }
                    }["ProjectDetailClient.useEffect.ctx"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.proj-next-title', {
                        y: 80,
                        opacity: 0,
                        duration: 1.2,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: '.proj-next-wrap',
                            start: 'top 88%'
                        },
                        onComplete: {
                            "ProjectDetailClient.useEffect.ctx": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.proj-next-title', {
                                    clearProps: 'transform,opacity'
                                });
                            }
                        }["ProjectDetailClient.useEffect.ctx"]
                    });
                    setTimeout({
                        "ProjectDetailClient.useEffect.ctx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
                    }["ProjectDetailClient.useEffect.ctx"], 1200);
                }
            }["ProjectDetailClient.useEffect.ctx"], pageRef);
            return ({
                "ProjectDetailClient.useEffect": ()=>ctx.revert()
            })["ProjectDetailClient.useEffect"];
        }
    }["ProjectDetailClient.useEffect"], [
        project
    ]);
    const coverSrc = project.coverImage?.src || project.heroImage?.src || '';
    const coverAlt = project.coverImage?.alt || project.heroImage?.alt || `${project.title} cover`;
    const [, ...galleryImages] = project.images;
    const midIndex = Math.floor(galleryImages.length / 2);
    const topImages = galleryImages.slice(0, midIndex);
    const bottomImages = galleryImages.slice(midIndex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: pageRef,
        className: "proj-page bg-[var(--project-bg)] text-[var(--text)] overflow-x-hidden",
        "aria-label": `${project.title} case study`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailHero"], {
                        title: project.title,
                        titleRef: titleRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailCover"], {
                        coverImage: coverSrc,
                        alt: coverAlt,
                        title: project.title,
                        coverRef: coverRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    project.tagline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailTagline"], {
                        tagline: project.tagline,
                        year: project.year,
                        taglineRef: taglineRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailIntro"], {
                        overview: project.overview,
                        description: project.description,
                        website: project.website
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    project.quote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailGallery"], {
                                images: topImages,
                                title: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$ProjectDetailQuote$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailQuote"], {
                                quote: project.quote,
                                quoteAuthor: project.quoteAuthor,
                                quoteRole: project.quoteRole
                            }, void 0, false, {
                                fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailGallery"], {
                                images: bottomImages,
                                title: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailGallery"], {
                        images: galleryImages,
                        title: project.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailInfos$2f$ProjectDetailInfos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailInfos"], {
                        credits: project.credits,
                        services: project.services,
                        client: project.client,
                        year: project.year,
                        tags: project.tags
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailNext"], {
                        nextProject: nextProject
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/project/ProjectDetailClient.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(ProjectDetailClient, "IvkAnB3FokVNvaCyMCQihBDqWlY=");
_c = ProjectDetailClient;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetailCoverStyles",
    ()=>projectDetailCoverStyles
]);
const projectDetailCoverStyles = {
    section: 'relative w-full pt-6 pb-0 px-4 sm:px-6 lg:px-8',
    container: 'mx-auto w-full max-w-7xl',
    media: 'w-full overflow-hidden rounded-[4px] will-change-transform',
    img: 'w-full h-auto block'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailCover",
    ()=>ProjectDetailCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.styles.ts [app-client] (ecmascript)");
;
;
function ProjectDetailCover({ coverImage, title, alt, coverRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailCoverStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailCoverStyles"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: coverRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailCoverStyles"].media,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: coverImage,
                    alt: alt || `${title} cover showcase`,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailCoverStyles"].img,
                    loading: "eager"
                }, void 0, false, {
                    fileName: "[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.tsx",
                    lineNumber: 9,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ProjectDetailCover;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailCover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailCover/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailCover$2f$ProjectDetailCover$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailCover/ProjectDetailCover.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetailGalleryStyles",
    ()=>projectDetailGalleryStyles
]);
const projectDetailGalleryStyles = {
    section: 'relative w-full py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8',
    container: 'mx-auto w-full max-w-7xl',
    fullMedia: 'proj-img-reveal w-full overflow-hidden rounded-[4px] mb-8 lg:mb-12 last:mb-0',
    fullImg: 'w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]',
    grid2: 'grid grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12 w-full max-sm:grid-cols-1',
    grid2Item: 'proj-img-reveal overflow-hidden rounded-[4px] aspect-[3/4] relative bg-black/5',
    grid2Img: 'w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailGallery",
    ()=>ProjectDetailGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.styles.ts [app-client] (ecmascript)");
;
;
function getImageSrc(item) {
    return typeof item === 'string' ? item : item.src;
}
function getImageAlt(item, fallback) {
    if (typeof item === 'object' && item.alt) return item.alt;
    return fallback;
}
function ProjectDetailGallery({ images, title }) {
    if (!images || images.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].container,
            children: images.length >= 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].grid2,
                        children: images.slice(0, 2).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].grid2Item,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: getImageSrc(item),
                                    alt: getImageAlt(item, `${title} showcase ${i + 1}`),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].grid2Img,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                                    lineNumber: 25,
                                    columnNumber: 19
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this),
                    images.slice(2).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].fullMedia,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: getImageSrc(item),
                                alt: getImageAlt(item, `${title} detail ${i + 3}`),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].fullImg,
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                                lineNumber: 38,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                lineNumber: 20,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].fullMedia,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: getImageSrc(images[0]),
                    alt: getImageAlt(images[0], `${title} detail`),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailGalleryStyles"].fullImg,
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ProjectDetailGallery;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailGallery/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailGallery$2f$ProjectDetailGallery$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailGallery/ProjectDetailGallery.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetailHeroStyles",
    ()=>projectDetailHeroStyles
]);
const projectDetailHeroStyles = {
    section: 'relative w-full pt-[clamp(7rem,14vw,14rem)] pb-[clamp(2rem,4vw,4rem)] px-[clamp(1rem,2.5vw,2.5rem)]',
    container: 'mx-auto w-full max-w-7xl flex flex-col items-center gap-6 text-center',
    scrollText: 'font-["IBM_Plex_Mono",monospace] text-[clamp(0.65rem,1vw,0.75rem)] font-normal tracking-[0.12em] uppercase opacity-40',
    title: 'font-[family-name:var(--font-display)] text-[clamp(5rem,18vw,18rem)] font-normal tracking-[0.01em] leading-[0.88] text-[var(--text)] m-0 uppercase'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailHero",
    ()=>ProjectDetailHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.styles.ts [app-client] (ecmascript)");
;
;
function ProjectDetailHero({ title, titleRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailHeroStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailHeroStyles"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: titleRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailHeroStyles"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ProjectDetailHero;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailHero/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailHero$2f$ProjectDetailHero$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailHero/ProjectDetailHero.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailInfos",
    ()=>ProjectDetailInfos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/ui.ts [app-client] (ecmascript)");
;
;
;
const fadeIn = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: (custom)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ],
                delay: custom * 0.1
            }
        })
};
function ProjectDetailInfos({ credits, services, client, year, tags }) {
    const { labels } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-[clamp(4rem,8vw,10rem)] px-[clamp(1rem,2.5vw,2.5rem)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-[clamp(2.5rem,5vw,6rem)] items-start",
            children: [
                credits && credits.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex flex-col gap-6",
                    variants: fadeIn,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    custom: 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest uppercase opacity-60",
                                    children: labels.credits
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-current opacity-15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: credits.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 py-1.5 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-['IBM_Plex_Mono',monospace] text-xs uppercase opacity-70",
                                            children: c.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-sm sm:text-base uppercase tracking-tight",
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c.role + c.name, true, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex flex-col gap-6",
                    variants: fadeIn,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    custom: 1,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest uppercase opacity-60",
                                    children: labels.servicesScope
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-current opacity-15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: services.map((svc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 py-1 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs opacity-40",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-sm sm:text-base uppercase tracking-tight",
                                            children: svc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, svc, true, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex flex-col gap-6",
                    variants: fadeIn,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    custom: 2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest uppercase opacity-60",
                                    children: labels.projectOverview
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-current opacity-15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block font-['IBM_Plex_Mono',monospace] text-[0.68rem] tracking-wider uppercase opacity-55 mb-1",
                                            children: labels.client
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-base sm:text-lg uppercase tracking-tight",
                                            children: client || '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block font-['IBM_Plex_Mono',monospace] text-[0.68rem] tracking-wider uppercase opacity-55 mb-1",
                                            children: labels.year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-base sm:text-lg uppercase tracking-tight",
                                            children: year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        tags && tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-['IBM_Plex_Mono',monospace] text-[0.68rem] tracking-wider uppercase opacity-55 mb-2",
                                    children: labels.stack
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-['IBM_Plex_Mono',monospace] text-xs uppercase px-2 py-0.5 rounded bg-current/5 border border-current/10",
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = ProjectDetailInfos;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailInfos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailInfos/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailInfos$2f$ProjectDetailInfos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailInfos$2f$ProjectDetailInfos$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailInfos/ProjectDetailInfos.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetailIntroStyles",
    ()=>projectDetailIntroStyles
]);
const projectDetailIntroStyles = {
    section: 'relative w-full pt-[clamp(3rem,6vw,7rem)] pb-[clamp(3rem,6vw,7rem)] px-[clamp(1rem,2.5vw,2.5rem)]',
    container: 'mx-auto w-full max-w-7xl grid grid-cols-[1fr_2fr] gap-[clamp(2rem,5vw,6rem)] items-start max-md:grid-cols-1 max-md:gap-6',
    labelCol: 'pt-1',
    monoWrapper: 'overflow-hidden',
    monoText: 'block font-["IBM_Plex_Mono",monospace] text-[clamp(0.65rem,1vw,0.75rem)] font-normal tracking-[0.02em] uppercase',
    bodyCol: 'flex flex-col gap-8',
    desc: 'font-["Space_Grotesk",system-ui,sans-serif] text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.75] text-[var(--text)] opacity-85 max-w-[640px]',
    visitLink: 'inline-flex items-center gap-2.5 no-underline text-[var(--text)] cursor-pointer group',
    arrowIcon: 'flex items-center opacity-0 -translate-x-1.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailIntro",
    ()=>ProjectDetailIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/ui.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.styles.ts [app-client] (ecmascript)");
;
;
;
function ArrowIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "8",
        viewBox: "0 0 14 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13 1L7 7L1 1",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ArrowIcon;
function ProjectDetailIntro({ overview, description, website }) {
    const { labels, buttons } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].labelCol,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].monoWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].monoText,
                            children: labels.projectInfo
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].bodyCol,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].desc,
                            children: overview || description
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: website,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].visitLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].monoWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].monoText,
                                        children: buttons.visitWebsite
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailIntroStyles"].arrowIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                                        lineNumber: 38,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c1 = ProjectDetailIntro;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowIcon");
__turbopack_context__.k.register(_c1, "ProjectDetailIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailIntro/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailIntro$2f$ProjectDetailIntro$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailIntro/ProjectDetailIntro.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetailNextStyles",
    ()=>projectDetailNextStyles
]);
const projectDetailNextStyles = {
    section: 'proj- w-full py-20 md:py-32   px-4 sm:px-6 lg:px-8 ',
    container: 'proj-next__container mx-auto w-full max-w-7xl flex flex-col items-center justify-center text-center',
    link: 'proj-next__link relative group flex flex-col items-center justify-center gap-10 w-full py-12 overflow-visible text-center text-[var(--text)] no-underline cursor-pointer',
    label: 'proj-next__label font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-black/50 dark:text-white/50',
    titleWrapper: 'proj-next__title-wrapper relative inline-flex items-center justify-center w-full',
    title: 'proj-next-title font-[family-name:var(--font-display)] text-[clamp(3rem,7.5vw,6.5rem)] font-normal uppercase leading-[0.85] tracking-[0.02em] text-[var(--text)] opacity-35 transition-all duration-600 ease-out group-hover:scale-[1.75] group-hover:opacity-100',
    badge: 'proj-next__open-badge absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-6 scale-60 opacity-0 pointer-events-none bg-[#1d4ed8] text-white px-6 py-2.5 rounded-full font-[family-name:var(--font-mono)] text-xs md:text-sm font-bold tracking-[0.12em] uppercase whitespace-nowrap shadow-[0_12px_30px_-4px_rgba(29,78,216,0.45)] transition-opacity duration-250 ease-out group-hover:opacity-100 z-10'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailNext",
    ()=>ProjectDetailNext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/ui.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProjectDetailNext({ nextProject, onNavigate }) {
    _s();
    const linkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const badgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { labels, buttons } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"];
    const handleMouseMove = (e)=>{
        if (!badgeRef.current || !linkRef.current) return;
        const rect = linkRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        badgeRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(-6deg) scale(1)`;
    };
    const handleMouseEnter = (e)=>{
        if (!badgeRef.current || !linkRef.current) return;
        const rect = linkRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        badgeRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(-6deg) scale(1)`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailNextStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailNextStyles"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: linkRef,
                href: `/work/${nextProject.slug}`,
                onClick: (e)=>{
                    if (onNavigate) {
                        e.preventDefault();
                        onNavigate(`/work/${nextProject.slug}`);
                    }
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailNextStyles"].link,
                onMouseMove: handleMouseMove,
                onMouseEnter: handleMouseEnter,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailNextStyles"].label,
                        children: labels.nextProject
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailNextStyles"].titleWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailNextStyles"].title,
                            children: nextProject.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: badgeRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailNextStyles"].badge,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: buttons.openProject
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(ProjectDetailNext, "b31cC2o3FPYYlK/aePMtwN5tKSY=");
_c = ProjectDetailNext;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailNext/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailNext$2f$ProjectDetailNext$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailNext/ProjectDetailNext.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetailQuoteStyles",
    ()=>projectDetailQuoteStyles
]);
const projectDetailQuoteStyles = {
    section: 'relative w-full py-[clamp(4rem,8vw,10rem)] px-[clamp(1rem,2.5vw,2.5rem)]',
    container: 'mx-auto w-full max-w-[800px] flex flex-col gap-8 text-center',
    quoteText: 'font-["Space_Grotesk",system-ui,sans-serif] text-[clamp(1.4rem,3vw,2.4rem)] font-normal leading-[1.4] tracking-[-0.01em] text-[var(--text)] italic border-0 p-0 m-0',
    meta: 'flex flex-col items-center gap-1',
    monoWrapper: 'overflow-hidden',
    monoText: 'block font-["IBM_Plex_Mono",monospace] text-[clamp(0.65rem,1vw,0.75rem)] font-normal tracking-[0.02em] uppercase opacity-60'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailQuote",
    ()=>ProjectDetailQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/ui.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$ProjectDetailQuote$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.styles.ts [app-client] (ecmascript)");
;
;
;
;
function ProjectDetailQuote({ quote, quoteAuthor, quoteRole }) {
    if (!quote) return null;
    const { labels } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$ProjectDetailQuote$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailQuoteStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$ProjectDetailQuote$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailQuoteStyles"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center justify-center gap-4 mb-8",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6,
                        ease: [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-current opacity-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-['IBM_Plex_Mono',monospace] text-[clamp(0.7rem,1.1vw,0.85rem)] font-bold tracking-[0.12em] uppercase opacity-60 shrink-0",
                            children: labels.strategyInsight
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-current opacity-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text)] uppercase leading-relaxed tracking-tight text-center",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8,
                        ease: [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ],
                        delay: 0.1
                    },
                    children: quote
                }, void 0, false, {
                    fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                (quoteAuthor || quoteRole) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center justify-center gap-3 pt-2 text-[var(--text)] opacity-75",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6,
                        ease: [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ],
                        delay: 0.2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-px bg-current opacity-40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-['IBM_Plex_Mono',monospace] text-xs font-semibold tracking-widest uppercase",
                            children: [
                                quoteAuthor,
                                quoteRole
                            ].filter(Boolean).join(' — ')
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-px bg-current opacity-40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = ProjectDetailQuote;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailQuote");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailQuote/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$ProjectDetailQuote$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailQuote$2f$ProjectDetailQuote$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailQuote/ProjectDetailQuote.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetailTaglineStyles",
    ()=>projectDetailTaglineStyles
]);
const projectDetailTaglineStyles = {
    section: 'relative w-full pt-[clamp(3rem,6vw,7rem)] pb-[clamp(1rem,3vw,4rem)] px-[clamp(1rem,2.5vw,2.5rem)]',
    container: 'mx-auto w-full max-w-7xl flex items-start justify-between gap-8 flex-wrap',
    tagline: 'font-[family-name:var(--font-display)] text-[clamp(2.2rem,5.5vw,5.5rem)] font-normal leading-[0.95] tracking-[0.01em] text-[var(--text)] max-w-[820px] uppercase',
    year: 'font-["IBM_Plex_Mono",monospace] text-[clamp(0.65rem,1vw,0.75rem)] font-normal tracking-[0.02em] uppercase opacity-40 pt-2 whitespace-nowrap shrink-0'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailTagline",
    ()=>ProjectDetailTagline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.styles.ts [app-client] (ecmascript)");
;
;
function ProjectDetailTagline({ tagline, year, taglineRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailTaglineStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: taglineRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailTaglineStyles"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailTaglineStyles"].tagline,
                    children: tagline
                }, void 0, false, {
                    fileName: "[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailTaglineStyles"].year,
                    children: year
                }, void 0, false, {
                    fileName: "[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ProjectDetailTagline;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailTagline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/project/ProjectDetailTagline/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailTagline$2f$ProjectDetailTagline$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailTagline/ProjectDetailTagline.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0cgdkysyn6gna._.js.map