(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playgroundHeaderStyles",
    ()=>playgroundHeaderStyles
]);
const playgroundHeaderStyles = {
    header: 'mb-8 sm:mb-12 flex w-full flex-col items-center text-center',
    labelWrap: 'w-full flex justify-start items-center mb-2 sm:mb-4',
    label: 'font-[family-name:var(--font-mono)] text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[var(--text)] opacity-70',
    titleLink: 'inline-block w-full text-center no-underline group cursor-pointer',
    title: 'font-[family-name:var(--font-display)] text-[clamp(4.25rem,13vw,13.5rem)] uppercase leading-[0.82] tracking-[-0.015em] text-[var(--text)] text-center w-full block transition-opacity duration-300 group-hover:opacity-85 select-none'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaygroundHeader",
    ()=>PlaygroundHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function PlaygroundHeader({ className = '', onNavigate }) {
    const { playground } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"];
    const href = playground.href;
    const handleClick = (event)=>{
        if (!onNavigate) return;
        event.preventDefault();
        onNavigate(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundHeaderStyles"].header} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundHeaderStyles"].labelWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundHeaderStyles"].label,
                    children: playground.label
                }, void 0, false, {
                    fileName: "[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                onClick: handleClick,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundHeaderStyles"].titleLink,
                "data-cursor-hover": playground.badge,
                "data-cursor-icon": "↗",
                "aria-label": "View all portfolio projects",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundHeaderStyles"].title,
                    children: playground.title
                }, void 0, false, {
                    fileName: "[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = PlaygroundHeader;
var _c;
__turbopack_context__.k.register(_c, "PlaygroundHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ProjectCard/ProjectCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectCardMotion",
    ()=>projectCardMotion,
    "projectCardStyles",
    ()=>projectCardStyles
]);
const projectCardStyles = {
    motionShell: 'w-full will-change-transform',
    card: 'group relative block text-inherit no-underline transition-all duration-300',
    imageWrapper: 'relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--card-bg)] lg:aspect-[5/4]',
    image: 'block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]',
    hoverOverlay: 'hidden',
    hoverBadge: 'hidden',
    hoverBottomRow: 'hidden',
    hoverTitle: 'hidden',
    hoverArrow: 'hidden'
};
const projectCardMotion = {
    fromLeft: {
        initial: {
            opacity: 0,
            x: -120,
            rotate: -12
        },
        whileInView: {
            opacity: 1,
            x: 0,
            rotate: 0
        },
        viewport: {
            once: true,
            amount: 0.08
        },
        transition: {
            duration: 1.1,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    },
    fromRight: {
        initial: {
            opacity: 0,
            x: 120,
            rotate: 12
        },
        whileInView: {
            opacity: 1,
            x: 0,
            rotate: 0
        },
        viewport: {
            once: true,
            amount: 0.08
        },
        transition: {
            duration: 1.1,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ProjectCard/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ProjectCard/ProjectCard.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const MotionCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
function ProjectCard({ project, index = 0, className = '', onNavigate }) {
    const motionVariant = index % 2 === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardMotion"].fromLeft : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardMotion"].fromRight;
    const href = `/work/${project.slug}`;
    const handleClick = (event)=>{
        if (!onNavigate) return;
        event.preventDefault();
        onNavigate(href);
    };
    const imageSrc = typeof project.thumbnail === 'string' ? project.thumbnail : project.thumbnail?.src || project.heroImage?.src || project.heroImage || '';
    const imageAlt = typeof project.thumbnail === 'object' && project.thumbnail?.alt ? project.thumbnail.alt : `${project.title} portfolio thumbnail`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionCard, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].motionShell,
        initial: motionVariant.initial,
        whileInView: motionVariant.whileInView,
        viewport: motionVariant.viewport,
        transition: motionVariant.transition,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            onClick: handleClick,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].card, className),
            "data-cursor-hover": "Open project",
            "data-cursor-icon": "↗",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].imageWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageSrc,
                        alt: imageAlt,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].image,
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].hoverOverlay,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].hoverBadge,
                                children: project.category || 'Case Study'
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].hoverBottomRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].hoverTitle,
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCardStyles"].hoverArrow,
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/ProjectCard/ProjectCard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ProjectCard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ProjectCard/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ProjectCard/ProjectCard.styles.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ServiceItem/ServiceItem.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serviceItemStyles",
    ()=>serviceItemStyles
]);
const serviceItemStyles = {
    item: 'group flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-1 sm:py-2 text-center cursor-pointer transition-all duration-300',
    leftGroup: 'flex flex-1 flex-col items-center gap-4 md:flex-row md:items-baseline md:gap-8',
    index: 'font-[family-name:var(--font-mono)] text-sm text-[var(--text)] opacity-40',
    titleGroup: 'flex flex-col items-center gap-1 text-center',
    title: 'font-[family-name:var(--font-display)] text-[clamp(2.1rem,6.5vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.01em] text-[var(--text)] transition-opacity duration-300 select-none text-center max-w-full',
    subtitle: 'font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.08em] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--text)] pointer-events-none self-center whitespace-nowrap',
    description: 'max-w-xl font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--text)] opacity-60'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ServiceItem/ServiceItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceItem",
    ()=>ServiceItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ServiceItem/ServiceItem.styles.ts [app-client] (ecmascript)");
;
;
function ServiceItem({ service, index }) {
    const formattedIndex = String(index + 1).padStart(2, '0');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].item,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].leftGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].index,
                        children: [
                            "/",
                            formattedIndex
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ServiceItem/ServiceItem.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].titleGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].title,
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ServiceItem/ServiceItem.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].subtitle,
                                children: service.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ServiceItem/ServiceItem.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ServiceItem/ServiceItem.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ServiceItem/ServiceItem.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].description,
                children: service.description
            }, void 0, false, {
                fileName: "[project]/src/components/home/ServiceItem/ServiceItem.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/ServiceItem/ServiceItem.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ServiceItem;
var _c;
__turbopack_context__.k.register(_c, "ServiceItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ServiceItem/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ServiceItem/ServiceItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ServiceItem/ServiceItem.styles.ts [app-client] (ecmascript)");
;
;
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
"[project]/src/components/shared/ScrollHeadline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollHeadline",
    ()=>ScrollHeadline
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
function ScrollHeadline({ heading, tag, statement, lines, className = '', lineClassName = '', as = 'p' }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const items = statement ? [
        statement
    ] : lines || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollHeadline.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const lineEls = Array.from(container.querySelectorAll('[data-scroll-line]'));
            const triggers = [];
            lineEls.forEach({
                "ScrollHeadline.useEffect": (line)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(line, {
                        opacity: 0.14
                    });
                    const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: line,
                        start: 'top 85%',
                        end: 'top 40%',
                        scrub: 0.6,
                        onUpdate: {
                            "ScrollHeadline.useEffect.st": (self)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(line, {
                                    opacity: 0.14 + self.progress * 0.86
                                });
                            }
                        }["ScrollHeadline.useEffect.st"]
                    });
                    triggers.push(st);
                }
            }["ScrollHeadline.useEffect"]);
            return ({
                "ScrollHeadline.useEffect": ()=>triggers.forEach({
                        "ScrollHeadline.useEffect": (t)=>t.kill()
                    }["ScrollHeadline.useEffect"])
            })["ScrollHeadline.useEffect"];
        }
    }["ScrollHeadline.useEffect"], [
        statement,
        lines
    ]);
    const Tag = as;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `flex w-full flex-col items-center gap-3 text-center ${className}`,
        children: [
            heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-[family-name:var(--font-mono)] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text)] opacity-60 text-center mb-1",
                children: heading
            }, void 0, false, {
                fileName: "[project]/src/components/shared/ScrollHeadline.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-[family-name:var(--font-mono)] text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)] opacity-50 text-center mb-4 sm:mb-6",
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/components/shared/ScrollHeadline.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                    "data-scroll-line": idx,
                    className: `max-w-5xl lg:max-w-6xl font-[family-name:var(--font-display)] text-[clamp(2.8rem,6.5vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[0.01em] text-[var(--text)] [text-wrap:balance] ${lineClassName}`,
                    style: {
                        willChange: 'opacity'
                    },
                    children: item
                }, idx, false, {
                    fileName: "[project]/src/components/shared/ScrollHeadline.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/ScrollHeadline.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(ScrollHeadline, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = ScrollHeadline;
var _c;
__turbopack_context__.k.register(_c, "ScrollHeadline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useScrollReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollReveal",
    ()=>useScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function useScrollReveal(options) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const { y = 50, opacity = 0, duration = 1.0, delay = 0, ease = 'power3.out', start = 'top 88%', stagger } = options || {};
            const targets = stagger ? Array.from(el.children) : [
                el
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(targets, {
                y,
                opacity
            });
            const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: el,
                start,
                once: true,
                onEnter: {
                    "useScrollReveal.useEffect.st": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(targets, {
                            y: 0,
                            opacity: 1,
                            duration,
                            delay,
                            ease,
                            stagger: stagger || 0
                        });
                    }
                }["useScrollReveal.useEffect.st"]
            });
            return ({
                "useScrollReveal.useEffect": ()=>{
                    st.kill();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(targets);
                }
            })["useScrollReveal.useEffect"];
        }
    }["useScrollReveal.useEffect"], []);
    return ref;
}
_s(useScrollReveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/HeroSection/HeroSection.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "heroSectionStyles",
    ()=>heroSectionStyles
]);
const heroSectionStyles = {
    section: 'relative flex min-h-[60vh] sm:min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-28 pb-16 sm:py-20 text-center sm:px-6 lg:px-10',
    inner: 'relative z-10 mx-auto flex w-full flex-col items-center justify-center text-center',
    title: 'flex flex-col items-center justify-center  text-center font-[family-name:var(--font-display)] text-[clamp(5.2rem,14.5vw,15.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] w-full',
    // h-[0.9em] gives full height to prevent clipping bottom of letters
    hoverWord: 'relative flex flex-col h-[0.9em]  overflow-hidden items-center justify-center text-center cursor-default select-none leading-[0.85] mx-auto',
    noise: 'pointer-events-none absolute inset-0 z-[1] opacity-[0.18] [background-image:url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")]'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/HeroSection/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$HeroSection$2f$HeroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/home/HeroSection/HeroSection.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/home.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Curated image pool — web/design/craft themed
const CRAFT_IMAGES = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80',
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80',
    'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=400&q=80',
    'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&q=80'
];
let imgIndex = 0;
let zBase = 9000;
const SPREAD = 35;
const IMAGE_SIZES = [
    {
        W: 180,
        H: 138
    },
    {
        W: 270,
        H: 215
    },
    {
        W: 230,
        H: 310
    }
];
function spawnImage(cx, cy, container) {
    const src = CRAFT_IMAGES[imgIndex % CRAFT_IMAGES.length];
    imgIndex++;
    zBase++;
    const { W, H } = IMAGE_SIZES[imgIndex % IMAGE_SIZES.length];
    const spreadX = (Math.random() - 0.5) * SPREAD * 2;
    const spreadY = (Math.random() - 0.5) * SPREAD * 2;
    const left = Math.round(cx + spreadX - W / 2);
    const top = Math.round(cy + spreadY - H / 2);
    const rotation = (Math.random() - 0.5) * 20;
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
    position: fixed;
    left: ${left}px;
    top: ${top}px;
    width: ${W}px;
    height: ${H}px;
    object-fit: cover;
    border-radius: 4px;
    pointer-events: none;
    z-index: ${zBase};
    will-change: transform, opacity;
    transform-origin: center center;
    box-shadow: 0 12px 40px rgba(0,0,0,0.28);
  `;
    container.appendChild(img);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
        onComplete: ()=>img.remove()
    }).fromTo(img, {
        scale: 0.7,
        opacity: 0,
        rotate: rotation - 6
    }, {
        scale: 1,
        opacity: 1,
        rotate: rotation,
        duration: 0.28,
        ease: 'back.out(1.6)'
    }).to(img, {
        opacity: 0,
        scale: 0.9,
        duration: 0.24,
        ease: 'power2.in',
        delay: 0.58
    });
}
;
function HeroSection({ preloaderDone = true } = {}) {
    _s();
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (!preloaderDone) {
                // Hide words while preloader is active so they don't animate hidden behind curtain
                wordsRef.current.forEach({
                    "HeroSection.useEffect": (wordEl)=>{
                        if (wordEl) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(wordEl, {
                                y: '100%',
                                opacity: 0
                            });
                        }
                    }
                }["HeroSection.useEffect"]);
                return;
            }
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "HeroSection.useEffect.ctx": ()=>{
                    wordsRef.current.forEach({
                        "HeroSection.useEffect.ctx": (wordEl, i)=>{
                            if (!wordEl) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(wordEl, {
                                y: '100%',
                                opacity: 0
                            }, {
                                y: '0%',
                                opacity: 1,
                                duration: 0.85,
                                ease: 'power3.out',
                                delay: 0.15 + i * 0.12
                            });
                        }
                    }["HeroSection.useEffect.ctx"]);
                }
            }["HeroSection.useEffect.ctx"]);
            return ({
                "HeroSection.useEffect": ()=>ctx.revert()
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        preloaderDone
    ]);
    const killHoverImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[killHoverImages]": ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            if (containerRef.current) {
                const c = containerRef.current;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(Array.from(c.children), {
                    opacity: 0,
                    scale: 0.85,
                    duration: 0.18,
                    stagger: 0.02,
                    ease: 'power2.in',
                    onComplete: {
                        "HeroSection.useCallback[killHoverImages]": ()=>c.remove()
                    }["HeroSection.useCallback[killHoverImages]"]
                });
                containerRef.current = null;
            }
        }
    }["HeroSection.useCallback[killHoverImages]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleOutsidePointer = {
                "HeroSection.useEffect.handleOutsidePointer": (e)=>{
                    if (heroRef.current && !heroRef.current.contains(e.target)) {
                        killHoverImages();
                    }
                }
            }["HeroSection.useEffect.handleOutsidePointer"];
            document.addEventListener('pointerdown', handleOutsidePointer);
            return ({
                "HeroSection.useEffect": ()=>{
                    document.removeEventListener('pointerdown', handleOutsidePointer);
                    killHoverImages();
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        killHoverImages
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[handleMouseMove]": (e)=>{
            cursorRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        }
    }["HeroSection.useCallback[handleMouseMove]"], []);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[handleMouseEnter]": (e)=>{
            cursorRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            const container = document.createElement('div');
            container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:8999;';
            document.body.appendChild(container);
            containerRef.current = container;
            spawnImage(cursorRef.current.x, cursorRef.current.y, container);
            intervalRef.current = setInterval({
                "HeroSection.useCallback[handleMouseEnter]": ()=>{
                    spawnImage(cursorRef.current.x, cursorRef.current.y, container);
                }
            }["HeroSection.useCallback[handleMouseEnter]"], 340);
        }
    }["HeroSection.useCallback[handleMouseEnter]"], []);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[handleMouseLeave]": ()=>{
            killHoverImages();
        }
    }["HeroSection.useCallback[handleMouseLeave]"], [
        killHoverImages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: heroRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$HeroSection$2f$HeroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSectionStyles"].section,
        id: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "fixed inset-0 pointer-events-none z-[8999]"
            }, void 0, false, {
                fileName: "[project]/src/sections/home/HeroSection/HeroSection.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$HeroSection$2f$HeroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSectionStyles"].inner,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$HeroSection$2f$HeroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSectionStyles"].title,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Full Stack Web & Mobile Developer"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/home/HeroSection/HeroSection.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"].hero.words.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                ref: (el)=>{
                                    wordsRef.current[i] = el;
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$HeroSection$2f$HeroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSectionStyles"].hoverWord,
                                onMouseEnter: handleMouseEnter,
                                onMouseLeave: handleMouseLeave,
                                onMouseMove: handleMouseMove,
                                children: word
                            }, word, false, {
                                fileName: "[project]/src/sections/home/HeroSection/HeroSection.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/home/HeroSection/HeroSection.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/home/HeroSection/HeroSection.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$HeroSection$2f$HeroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSectionStyles"].noise
            }, void 0, false, {
                fileName: "[project]/src/sections/home/HeroSection/HeroSection.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/home/HeroSection/HeroSection.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "F5VGssUkFGVA1xys8v5zyqMZ0ec=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/IntroSection/IntroSection.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "introSectionStyles",
    ()=>introSectionStyles
]);
const introSectionStyles = {
    section: 'w-full px-4 py-24 sm:px-6 lg:px-10 lg:py-36 dark:border-white/10',
    inner: 'mx-auto flex w-full flex-col items-center font-bold gap-8',
    tag: 'font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.08em] text-[var(--text)] opacity-50 text-center'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/IntroSection/IntroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntroSection",
    ()=>IntroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollHeadline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ScrollHeadline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$IntroSection$2f$IntroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/home/IntroSection/IntroSection.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function IntroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$IntroSection$2f$IntroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["introSectionStyles"].section,
        id: "intro",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$IntroSection$2f$IntroSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["introSectionStyles"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollHeadline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollHeadline"], {
                    heading: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"].intro.heading || 'Web & Mobile App Development',
                    tag: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"].intro.tag,
                    statement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"].intro.statement,
                    as: "p"
                }, void 0, false, {
                    fileName: "[project]/src/sections/home/IntroSection/IntroSection.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-3xl text-center font-['Space_Grotesk'] text-base sm:text-lg text-[var(--text)] opacity-80 font-normal leading-relaxed mt-2 sm:mt-4",
                    children: "Full stack developer building high-performance web and mobile apps with React, Next.js, and Flutter. I help startups and SaaS teams architect, build, launch, and scale their MVP fast."
                }, void 0, false, {
                    fileName: "[project]/src/sections/home/IntroSection/IntroSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/home/IntroSection/IntroSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/home/IntroSection/IntroSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = IntroSection;
var _c;
__turbopack_context__.k.register(_c, "IntroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/PlaygroundSection/PlaygroundSection.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playgroundSectionStyles",
    ()=>playgroundSectionStyles
]);
const playgroundSectionStyles = {
    section: 'w-full px-4 py-24 sm:px-6 lg:px-10 lg:py-36 dark:border-white/10',
    inner: 'mx-auto w-full',
    grid: 'mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/PlaygroundSection/PlaygroundSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaygroundSection",
    ()=>PlaygroundSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/PlaygroundHeader/PlaygroundHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/home/ProjectCard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ProjectCard/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects/projects.data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$PlaygroundSection$2f$PlaygroundSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/home/PlaygroundSection/PlaygroundSection.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function PlaygroundSection({ onNavigate }) {
    _s();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        y: 40,
        duration: 0.9,
        delay: 0
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$PlaygroundSection$2f$PlaygroundSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundSectionStyles"].section,
        id: "playground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$PlaygroundSection$2f$PlaygroundSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundSectionStyles"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headerRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PlaygroundHeader$2f$PlaygroundHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaygroundHeader"], {
                        onNavigate: onNavigate
                    }, void 0, false, {
                        fileName: "[project]/src/sections/home/PlaygroundSection/PlaygroundSection.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/home/PlaygroundSection/PlaygroundSection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$PlaygroundSection$2f$PlaygroundSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playgroundSectionStyles"].grid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsData"].slice(0, 4).map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCard"], {
                            project: project,
                            index: index,
                            onNavigate: onNavigate
                        }, project.slug, false, {
                            fileName: "[project]/src/sections/home/PlaygroundSection/PlaygroundSection.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/sections/home/PlaygroundSection/PlaygroundSection.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/home/PlaygroundSection/PlaygroundSection.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/home/PlaygroundSection/PlaygroundSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(PlaygroundSection, "MkhhF6aPwOaLwiNsIRaUY0+YjPs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = PlaygroundSection;
var _c;
__turbopack_context__.k.register(_c, "PlaygroundSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/ServicesSection/ServicesSection.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "servicesSectionStyles",
    ()=>servicesSectionStyles
]);
const servicesSectionStyles = {
    section: 'w-full px-4 py-24 sm:px-6 lg:px-10 lg:py-36',
    container: 'mx-auto w-full',
    sectionTitle: 'mb-8 sm:mb-12 text-left font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase tracking-[0.16em] text-[var(--text)] opacity-50',
    listWrapper: 'flex flex-col items-center justify-center text-center gap-1 sm:gap-2 w-full mx-auto',
    previewBox: 'service-video-preview is-visible fixed'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/ServicesSection/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesSection",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/home/ServiceItem/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ServiceItem/ServiceItem.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$ServicesSection$2f$ServicesSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/home/ServicesSection/ServicesSection.styles.ts [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ServicesSection({ onNavigate } = {}) {
    _s();
    const [hoveredService, setHoveredService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrollService, setScrollService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [hasMouseMoved, setHasMouseMoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const previewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { servicesTeaser } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"];
    const items = servicesTeaser.items;
    const activeService = hoveredService !== null ? hoveredService : scrollService;
    const updateActiveOnScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServicesSection.useCallback[updateActiveOnScroll]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.bottom < window.innerHeight * 0.25 || rect.top > window.innerHeight * 0.75) {
                setScrollService(null);
                return;
            }
            const probeY = window.innerHeight * 0.5;
            let closestIndex = -1;
            let minDistance = Infinity;
            itemRefs.current.forEach({
                "ServicesSection.useCallback[updateActiveOnScroll]": (el, index)=>{
                    if (!el) return;
                    const itemRect = el.getBoundingClientRect();
                    const centerY = itemRect.top + itemRect.height / 2;
                    const distance = Math.abs(centerY - probeY);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                }
            }["ServicesSection.useCallback[updateActiveOnScroll]"]);
            if (closestIndex !== -1) {
                setScrollService(closestIndex);
            }
        }
    }["ServicesSection.useCallback[updateActiveOnScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesSection.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const handleMouseMove = {
                "ServicesSection.useEffect.handleMouseMove": (e)=>{
                    setHasMouseMoved(true);
                    setMousePos({
                        x: e.clientX + 24,
                        y: e.clientY + 24
                    });
                }
            }["ServicesSection.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            const onScroll = {
                "ServicesSection.useEffect.onScroll": ()=>{
                    requestAnimationFrame(updateActiveOnScroll);
                }
            }["ServicesSection.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            let trigger = null;
            if (sectionRef.current) {
                trigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    onUpdate: {
                        "ServicesSection.useEffect": ()=>{
                            updateActiveOnScroll();
                        }
                    }["ServicesSection.useEffect"],
                    onLeave: {
                        "ServicesSection.useEffect": ()=>setScrollService(null)
                    }["ServicesSection.useEffect"],
                    onLeaveBack: {
                        "ServicesSection.useEffect": ()=>setScrollService(null)
                    }["ServicesSection.useEffect"]
                });
            }
            return ({
                "ServicesSection.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('scroll', onScroll);
                    if (trigger) trigger.kill();
                }
            })["ServicesSection.useEffect"];
        }
    }["ServicesSection.useEffect"], [
        updateActiveOnScroll
    ]);
    let previewLeft = mousePos.x;
    let previewTop = mousePos.y;
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !hasMouseMoved && activeService !== null && itemRefs.current[activeService]) {
        const itemRect = itemRefs.current[activeService].getBoundingClientRect();
        previewLeft = Math.min(window.innerWidth - 260, itemRect.right + 24);
        previewTop = itemRect.top + itemRect.height / 2 - 80;
    }
    const handleLinkClick = (e, href)=>{
        if (onNavigate) {
            e.preventDefault();
            onNavigate(href);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$ServicesSection$2f$ServicesSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesSectionStyles"].section,
        id: "services",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$ServicesSection$2f$ServicesSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesSectionStyles"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$ServicesSection$2f$ServicesSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesSectionStyles"].sectionTitle,
                        children: servicesTeaser.title
                    }, void 0, false, {
                        fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$ServicesSection$2f$ServicesSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesSectionStyles"].listWrapper,
                        children: items.map((service, i)=>{
                            const isActive = activeService === i;
                            const serviceUrl = `/services/${service.slug}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ref: (el)=>{
                                    itemRefs.current[i] = el;
                                },
                                href: serviceUrl,
                                className: "relative flex items-center justify-center w-full py-1 sm:py-2 text-center cursor-pointer select-none group text-current",
                                style: {
                                    textDecoration: 'none'
                                },
                                onMouseEnter: ()=>setHoveredService(i),
                                onMouseLeave: ()=>setHoveredService(null),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative inline-flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServiceItem$2f$ServiceItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceItemStyles"].title,
                                            style: {
                                                opacity: activeService !== null && !isActive ? 0.3 : 1
                                            },
                                            children: service.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `hidden md:inline-block absolute left-full ml-4 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase tracking-[0.08em] text-[var(--text)] pointer-events-none transition-all duration-300 ${isActive ? '!opacity-100 !translate-x-0' : 'opacity-0 -translate-x-2'}`,
                                            children: service.sub
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this)
                            }, service.name + i, false, {
                                fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            activeService !== null && items[activeService] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: previewRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$ServicesSection$2f$ServicesSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesSectionStyles"].previewBox,
                style: {
                    left: previewLeft,
                    top: previewTop
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: items[activeService].image.src,
                    alt: items[activeService].image.alt,
                    className: "w-full h-full object-cover transition-opacity duration-200"
                }, activeService, false, {
                    fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/home/ServicesSection/ServicesSection.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(ServicesSection, "65Glj+cDvKLvFDdpixANC+3M7bw=");
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/VideoSection/VideoSection.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "videoSectionStyles",
    ()=>videoSectionStyles
]);
const videoSectionStyles = {
    section: 'w-full px-0 py-8',
    container: 'mx-auto w-full px-4 sm:px-6 lg:px-10',
    videoWrapper: 'relative aspect-video overflow-hidden rounded-2xl bg-[#0d0d0d] shadow-[0_20px_40px_rgba(0,0,0,0.2)]',
    video: 'block h-full w-full object-cover',
    controls: 'absolute bottom-6 right-6 z-10 flex gap-3',
    controlBtn: 'flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white transition-all duration-300 hover:scale-105 hover:bg-white/20',
    badge: 'absolute left-6 top-6 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-[0.75rem] tracking-[0.05em] text-white backdrop-blur-md'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/home/VideoSection/VideoSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoSection",
    ()=>VideoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$VideoSection$2f$VideoSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/home/VideoSection/VideoSection.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function VideoSection() {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        y: 60,
        duration: 1.2,
        ease: 'power4.out',
        start: 'top 90%'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$VideoSection$2f$VideoSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoSectionStyles"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$VideoSection$2f$VideoSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoSectionStyles"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$VideoSection$2f$VideoSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoSectionStyles"].videoWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$VideoSection$2f$VideoSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoSectionStyles"].video,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        disablePictureInPicture: true,
                        controlsList: "nodownload nofullscreen noremoteplayback",
                        onContextMenu: (e)=>e.preventDefault(),
                        style: {
                            pointerEvents: 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"].video.src,
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"].video.type
                        }, void 0, false, {
                            fileName: "[project]/src/sections/home/VideoSection/VideoSection.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/home/VideoSection/VideoSection.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$home$2f$VideoSection$2f$VideoSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoSectionStyles"].controls
                    }, void 0, false, {
                        fileName: "[project]/src/sections/home/VideoSection/VideoSection.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/home/VideoSection/VideoSection.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/sections/home/VideoSection/VideoSection.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/home/VideoSection/VideoSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(VideoSection, "RJODD9VdzYW99WS2WvgPoXqgEjQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = VideoSection;
var _c;
__turbopack_context__.k.register(_c, "VideoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_214gylet_3tg3._.js.map