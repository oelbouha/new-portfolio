module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/services/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonLd$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jsonLd.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.title,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.description,
    alternates: {
        canonical: '/services'
    },
    openGraph: {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.description,
        url: '/services',
        type: 'website',
        images: [
            {
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.ogImage,
                width: 1200,
                height: 630,
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.title
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.description,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"].seo.ogImage
        ]
    }
};
function ServicesPage() {
    const { hero, intro, faq, cta } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesOverviewPage"];
    const schemas = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonLd$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateProfessionalServiceSchema"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonLd$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])([
            {
                name: 'Home',
                path: '/'
            },
            {
                name: 'Services',
                path: '/services'
            }
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonLd$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFaqSchema"])(faq.items)
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                schema: schemas
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[var(--background)] text-[var(--text)] w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "relative w-full pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start gap-4 sm:gap-6 max-w-5xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-1 rounded-[4px] bg-black/10 dark:bg-white/15 text-[11px] font-mono uppercase tracking-wider font-semibold",
                                                children: hero.badge
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(2.75rem,8vw,8rem)] uppercase leading-[0.95] tracking-[0.04em]",
                                                children: hero.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-['Space_Grotesk'] text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl",
                                                children: hero.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 sm:pt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#services",
                                                    className: "inline-flex items-center gap-2.5 px-6 py-3 rounded-[4px] bg-[var(--text)] text-[var(--background)] font-['PP_Neue_Montreal_Medium',sans-serif] text-sm uppercase tracking-wider font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: hero.ctaButton
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base",
                                                            children: "↗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "py-12 sm:py-16 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs uppercase tracking-widest opacity-60 block mb-2",
                                            children: intro.tag
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.05em] leading-snug",
                                            children: intro.statement
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesRegistry"].map((service, index)=>{
                                            const serviceUrl = `/services/${service.slug}`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group rounded-[4px] border border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between bg-black/[0.02] dark:bg-white/[0.02] hover:border-black/30 dark:hover:border-white/30 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs uppercase tracking-widest opacity-50",
                                                                        children: [
                                                                            "0",
                                                                            index + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/services/page.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-0.5 rounded-[3px] bg-black/5 dark:bg-white/10 font-mono text-[11px] uppercase tracking-wider",
                                                                        children: service.navLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/page.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-2xl sm:text-3xl uppercase tracking-[0.06em] leading-snug mb-3",
                                                                children: service.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-['Space_Grotesk'] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6",
                                                                children: service.shortDescription
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 mb-8",
                                                                children: service.deliverables.items.slice(0, 3).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-2 text-xs font-mono opacity-75",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "opacity-40",
                                                                                children: "✦"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                                lineNumber: 132,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: d.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                                lineNumber: 133,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, d.title, true, {
                                                                        fileName: "[project]/src/app/services/page.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: serviceUrl,
                                                        className: "inline-flex items-center justify-between w-full pt-4 border-t border-black/10 dark:border-white/10 font-['PP_Neue_Montreal_Medium',sans-serif] text-sm uppercase tracking-wider font-semibold opacity-90 group-hover:opacity-100 transition-opacity",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Explore service deliverables"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "transition-transform duration-200 group-hover:translate-x-1",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, service.slug, true, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:col-span-4 lg:sticky lg:top-28",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs uppercase tracking-widest opacity-60 block mb-2",
                                                        children: faq.tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]",
                                                        children: faq.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:col-span-8 space-y-6",
                                                children: faq.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 sm:p-8 rounded-[4px] border border-black/10 dark:border-white/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-xl sm:text-2xl uppercase tracking-[0.06em] leading-snug mb-3",
                                                                children: item.question
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-['Space_Grotesk'] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed",
                                                                children: item.answer
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item.question, true, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.05em] leading-[1.08] max-w-4xl mb-4",
                                            children: [
                                                cta.line1,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this),
                                                cta.line2
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Space_Grotesk'] text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8",
                                            children: cta.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/services/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/index.ts [app-rsc] (ecmascript) <locals>");
;
}),
"[project]/src/components/layout/Footer/Footer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/Footer/Footer.tsx", "Footer");
}),
"[project]/src/components/layout/Footer/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/layout/Footer/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.tsx [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/src/components/shared/JsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function JsonLd({ schema }) {
    const schemas = Array.isArray(schema) ? schema : [
        schema
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: schemas.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(s)
                }
            }, i, false, {
                fileName: "[project]/src/components/shared/JsonLd.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/JsonLd.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/keywords.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/data/services/django-python-development.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
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
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].djangoDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].djangoDev.secondary,
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
}),
"[project]/src/data/services/flutter-app-development.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
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
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].flutterDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].flutterDev.secondary,
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
}),
"[project]/src/data/services/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$web$2d$application$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/web-application-development.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$flutter$2d$app$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/flutter-app-development.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$django$2d$python$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/django-python-development.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$n8n$2d$automation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/n8n-automation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$wordpress$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/wordpress-development.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const servicesRegistry = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$web$2d$application$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webApplicationDevelopment"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$flutter$2d$app$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flutterAppDevelopment"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$django$2d$python$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["djangoPythonDevelopment"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$n8n$2d$automation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n8nAutomation"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$wordpress$2d$development$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordpressDevelopment"]
];
function getServiceBySlug(slug) {
    return servicesRegistry.find((s)=>s.slug === slug);
}
const servicesOverviewPage = {
    seo: {
        title: 'Full Stack Development Services | Outman Elbouhali',
        description: 'Full stack development services by Outman Elbouhali: custom web application engineering, Flutter mobile apps, Django REST APIs, and automated n8n workflows.',
        path: '/services',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].servicesOverview.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].servicesOverview.secondary,
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
}),
"[project]/src/data/services/n8n-automation.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
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
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].n8nDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].n8nDev.secondary,
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
}),
"[project]/src/data/services/web-application-development.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service: Custom Web Application Development
 * Primary Keyword: "custom web development"
 * Secondary Keywords: responsive website development, startup web app development, custom website design, affordable web developers, website design services
 */ __turbopack_context__.s([
    "webApplicationDevelopment",
    ()=>webApplicationDevelopment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
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
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].webAppDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].webAppDev.secondary,
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
}),
"[project]/src/data/services/wordpress-development.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service: WordPress Theme Development & CMS Engineering
 * Primary Keyword: "WordPress theme development service"
 * Secondary Keywords: hire WordPress theme developer, hire dedicated WordPress developer, WordPress speed optimization, enterprise WordPress development, Elementor expert
 */ __turbopack_context__.s([
    "wordpressDevelopment",
    ()=>wordpressDevelopment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
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
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].wordpressDev.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].wordpressDev.secondary,
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
}),
"[project]/src/data/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/jsonLd.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAboutPageSchema",
    ()=>generateAboutPageSchema,
    "generateBreadcrumbSchema",
    ()=>generateBreadcrumbSchema,
    "generateCollectionPageSchema",
    ()=>generateCollectionPageSchema,
    "generateFaqSchema",
    ()=>generateFaqSchema,
    "generatePersonSchema",
    ()=>generatePersonSchema,
    "generateProfessionalServiceSchema",
    ()=>generateProfessionalServiceSchema,
    "generateProjectSchema",
    ()=>generateProjectSchema,
    "generateServiceSchema",
    ()=>generateServiceSchema,
    "generateWebSiteSchema",
    ()=>generateWebSiteSchema
]);
/**
 * JSON-LD Schema Generators for Technical SEO.
 * Generates Person, WebSite, Service, ProfessionalService,
 * BreadcrumbList, FAQPage, and CreativeWork schemas.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
;
function generatePersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        legalName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].legalName,
        jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].role,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain,
        image: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain}/profile.png`,
        sameAs: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].socialLinks.github,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].socialLinks.linkedin
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tétouan',
            addressCountry: 'MA'
        },
        knowsAbout: [
            'Full-Stack Web Development',
            'React',
            'Next.js',
            'TypeScript',
            'Flutter Mobile Development',
            'Django & Python',
            'PostgreSQL',
            'Docker',
            'n8n Workflow Automation',
            'WordPress Development'
        ]
    };
}
function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain,
        author: {
            '@type': 'Person',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name
        },
        inLanguage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].language
    };
}
function generateBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain}${item.path}`
            }))
    };
}
function generateFaqSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
}
function generateServiceSchema(service) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.title,
        name: service.title,
        description: service.shortDescription,
        provider: {
            '@type': 'Person',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: service.deliverables.title,
            itemListElement: service.deliverables.items.map((del)=>({
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: del.title,
                        description: del.description
                    }
                }))
        }
    };
}
function generateProfessionalServiceSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name} - ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].role}`,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain,
        image: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain}/images/icon.png`,
        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].email,
        priceRange: '$$$',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tétouan',
            addressCountry: 'Morocco'
        }
    };
}
function generateProjectSchema(project) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        headline: project.tagline,
        description: project.overview || project.description,
        applicationCategory: project.category,
        author: {
            '@type': 'Person',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain
        },
        image: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain}${project.coverImage.src}`,
        url: project.website || `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain}/work/${project.slug}`
    };
}
function generateAboutPageSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Outman Elbouhali',
        description: 'Learn about Outman Elbouhali: background in software engineering (1337 / 42 Network), expertise across React, Flutter, Django, and production infrastructure.',
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain}/about`,
        mainEntity: generatePersonSchema()
    };
}
function generateCollectionPageSchema(name, description, path) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name,
        description,
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].domain}${path}`
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0v9_gu-67txox._.js.map