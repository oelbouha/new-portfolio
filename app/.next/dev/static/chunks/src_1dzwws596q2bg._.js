(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/sections/work/WorkProjectsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkProjectsList",
    ()=>WorkProjectsList,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects/projects.data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function WorkProjectsList({ onNavigate }) {
    _s();
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrollActiveIndex, setScrollActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const { header, projects } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsPage"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkProjectsList.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const checkMobile = {
                "WorkProjectsList.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1024);
                }
            }["WorkProjectsList.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "WorkProjectsList.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["WorkProjectsList.useEffect"];
        }
    }["WorkProjectsList.useEffect"], []);
    const activeIndex = hoveredIndex !== null ? hoveredIndex : isMobile ? scrollActiveIndex : -1;
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkProjectsList.useCallback[handleScroll]": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || window.innerWidth >= 1024) return;
            const probeY = window.innerHeight * 0.48;
            let closestIndex = 0;
            let minDistance = Infinity;
            rowRefs.current.forEach({
                "WorkProjectsList.useCallback[handleScroll]": (el, index)=>{
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const centerY = rect.top + rect.height / 2;
                    const distance = Math.abs(centerY - probeY);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                }
            }["WorkProjectsList.useCallback[handleScroll]"]);
            setScrollActiveIndex(closestIndex);
        }
    }["WorkProjectsList.useCallback[handleScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkProjectsList.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "WorkProjectsList.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["WorkProjectsList.useEffect"];
        }
    }["WorkProjectsList.useEffect"], [
        handleScroll
    ]);
    const handleClick = (e, href)=>{
        if (onNavigate) {
            e.preventDefault();
            onNavigate(href);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 items-start w-full gap-6 lg:gap-8 pb-12 sm:pb-16 lg:pb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-1 lg:col-span-8 flex items-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(4.5rem,12vw,12.5rem)] uppercase leading-[0.82] tracking-[-0.01em] text-[var(--text)] select-none",
                                children: [
                                    header.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: " — Full Stack Web and Mobile Portfolio Case Studies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-1 lg:col-start-9 lg:col-span-4 flex items-start gap-3 sm:gap-4 pt-1 sm:pt-2 lg:pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 px-2.5 py-1 rounded-[4px] bg-black/10 dark:bg-white/15 text-[11px] font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold select-none",
                                    children: header.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-['Space_Grotesk'] text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-snug",
                                    children: header.description
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-full relative",
                    onMouseLeave: ()=>setHoveredIndex(null),
                    children: projects.map((project, index)=>{
                        const isActive = activeIndex === index;
                        const projectUrl = `/work/${project.slug}`;
                        const thumbnailSrc = project.thumbnail?.src || project.heroImage?.src || project.coverImage?.src;
                        const thumbnailAlt = project.thumbnail?.alt || `${project.title} preview screenshot`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                rowRefs.current[index] = el;
                            },
                            className: "relative w-full border-b border-black/15 dark:border-white/15",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: projectUrl,
                                onClick: (e)=>handleClick(e, projectUrl),
                                onMouseEnter: ()=>setHoveredIndex(index),
                                "data-cursor-hover": "Open project",
                                "data-cursor-icon": "↗",
                                className: "relative flex items-center justify-between w-full py-3.5 sm:py-4 lg:py-5 px-0 select-none text-decoration-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute -inset-y-[1px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-[4px] pointer-events-none ${isActive ? '-inset-x-2 sm:-inset-x-3 lg:-inset-x-4 bg-[#111111] dark:bg-white/[0.13] dark:border dark:border-white/25 shadow-xl opacity-100 z-0' : 'inset-x-0 opacity-0 z-0'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 w-[140px] sm:w-[220px] lg:w-[35%] shrink-0 text-left flex items-center pl-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-mono text-[11px] sm:text-xs lg:text-[13px] tracking-wider uppercase font-medium transition-colors duration-200 ${isActive ? 'text-neutral-300 dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400'}`,
                                            children: [
                                                project.year,
                                                ", ",
                                                project.category
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                            lineNumber: 130,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 flex-1 flex items-center justify-start gap-3 sm:gap-5 lg:gap-6 overflow-hidden pr-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: false,
                                                animate: {
                                                    width: isActive ? ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 640 ? 90 : 145 : 0,
                                                    opacity: isActive ? 1 : 0,
                                                    scale: isActive ? 1 : 0.92
                                                },
                                                transition: {
                                                    duration: 0.32,
                                                    ease: [
                                                        0.16,
                                                        1,
                                                        0.3,
                                                        1
                                                    ]
                                                },
                                                className: "overflow-hidden rounded-[3px] shrink-0 aspect-[1.5/1] shadow-2xl pointer-events-none bg-neutral-900 border border-white/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: thumbnailSrc,
                                                    alt: thumbnailAlt,
                                                    className: "w-full h-full object-cover",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(1.85rem,3.4vw,3.75rem)] uppercase leading-[0.88] tracking-[-0.01em] transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis ${isActive ? 'text-white' : 'text-[var(--text)]'}`,
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 shrink-0 flex items-center justify-end text-right pr-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-6 h-6 flex items-center justify-end transition-all duration-200 ${isActive ? 'text-white translate-x-0.5 -translate-y-0.5' : 'text-neutral-400 dark:text-neutral-500'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 sm:w-5 sm:h-5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "15 3 21 3 21 9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "10",
                                                        y1: "14",
                                                        x2: "21",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                                lineNumber: 187,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this)
                        }, project.slug, false, {
                            fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/work/WorkProjectsList.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(WorkProjectsList, "uo8auS9+P6HEkcAHiSWe3amzRWo=");
_c = WorkProjectsList;
const __TURBOPACK__default__export__ = WorkProjectsList;
var _c;
__turbopack_context__.k.register(_c, "WorkProjectsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1dzwws596q2bg._.js.map