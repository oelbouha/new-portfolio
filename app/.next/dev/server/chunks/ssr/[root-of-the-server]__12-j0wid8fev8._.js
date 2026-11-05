module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/work/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects/projects.data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonLd$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jsonLd.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailClient.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].find((p)=>p.slug === slug);
    if (!project) {
        return {
            title: 'Project Not Found | Outman Elbouhali',
            description: 'The requested project could not be found.'
        };
    }
    const title = `${project.title} Case Study | Outman Elbouhali`;
    const description = project.description;
    const canonicalUrl = `/work/${project.slug}`;
    const ogImage = project.coverImage?.src || '/images/icon.png';
    return {
        title,
        description,
        authors: [
            {
                name: 'Outman Elbouhali'
            }
        ],
        category: project.category,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: 'article',
            siteName: 'Outman Elbouhali Portfolio',
            publishedTime: `${project.year}-01-01T00:00:00.000Z`,
            authors: [
                'Outman Elbouhali'
            ],
            tags: project.tags,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} Case Study Preview`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [
                ogImage
            ],
            creator: '@oelbouha',
            site: '@oelbouha'
        }
    };
}
async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const projectIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].findIndex((p)=>p.slug === slug);
    if (projectIndex === -1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"][projectIndex];
    const nextProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"][(projectIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$projects$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].length];
    const schemas = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonLd$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateProjectSchema"])(project),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonLd$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])([
            {
                name: 'Home',
                path: '/'
            },
            {
                name: 'Projects',
                path: '/work'
            },
            {
                name: project.title,
                path: `/work/${project.slug}`
            }
        ])
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                schema: schemas
            }, void 0, false, {
                fileName: "[project]/src/app/work/[slug]/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectDetailClient"], {
                project: project,
                nextProject: nextProject
            }, void 0, false, {
                fileName: "[project]/src/app/work/[slug]/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/[slug]/page.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/work/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/work/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/project/ProjectDetailClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailClient",
    ()=>ProjectDetailClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProjectDetailClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProjectDetailClient() from the server but ProjectDetailClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/project/ProjectDetailClient.tsx", "ProjectDetailClient");
}),
"[project]/src/components/project/ProjectDetailClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetailClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/src/data/projects/projects.data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allProjects",
    ()=>allProjects,
    "projectsData",
    ()=>projectsData,
    "projectsPage",
    ()=>projectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
;
;
const projectsData = [
    {
        slug: 'skatys',
        title: 'Skatys',
        category: 'Full-Stack Corporate Website',
        year: '2026',
        tagline: 'A modern digital presence for an SAP and digital transformation company.',
        description: 'A full-stack corporate website developed for SKATYS Inc., presenting the company, its expertise, SAP solutions, services, and industry insights through a modern digital experience.',
        overview: 'SKATYS is a corporate web platform developed to establish and strengthen the company’s digital presence. The website presents the company’s identity, expertise, business solutions, and services while providing an Insights & News section for sharing industry knowledge and company updates. Built with Next.js and Django, the platform combines a modern frontend with a structured backend architecture, supported by PostgreSQL and Docker-based deployment on a production VPS.',
        conclusion: 'Delivered a full-stack corporate website combining company presentation, business solution showcases, content sections, and production infrastructure.',
        thumbnail: '/images/skatys/skatys lab.png',
        heroImage: '/images/skatys/Skatys Website .png',
        coverImage: '/images/skatys/Skatys Website .png',
        images: [
            '/images/skatys/skatys website.png',
            '/images/skatys/skatys website mobile 3.png',
            '/images/skatys/skatys website mobile 1.png'
        ],
        services: [
            'Corporate Website Development',
            'Full-Stack Development',
            'Next.js Frontend',
            'Django Backend & API',
            'Content & Insights Presentation',
            'Docker VPS Deployment'
        ],
        serviceSlugs: [
            'web-application-development',
            'django-python-development'
        ],
        client: 'Skatys Inc.',
        website: 'https://skatys.com/',
        tags: [
            'Next.js',
            'Django',
            'Python',
            'PostgreSQL',
            'Docker',
            'Corporate Website',
            'Full Stack'
        ],
        link: 'https://skatys.com/',
        quote: 'A modern corporate digital platform connecting company information, business solutions, and industry insights through a full-stack architecture.',
        quoteAuthor: 'Project Highlights',
        quoteRole: 'Full-Stack Development'
    },
    {
        slug: 'atlas',
        title: 'Sahara Flora',
        category: 'Cross-Platform Mobile Application',
        year: '2026',
        tagline: 'A unified Flutter application across mobile and Android TV.',
        description: 'A cross-platform application developed with Flutter and Dart, designed to deliver an adaptive experience across Android smartphones and TV devices.',
        overview: 'Sahara Flora is a cross-platform application developed using Flutter and Dart. The project focuses on a shared application architecture that adapts to different Android environments, including smartphones and television screens. It emphasizes responsive layouts, reusable components, and adaptive interfaces for different screen sizes and interaction methods.',
        conclusion: 'Developed a unified Flutter application architecture supporting mobile and Android TV experiences through a shared codebase.',
        thumbnail: '/images/atlas/atlas book thumbanil.jpeg',
        heroImage: '/images/atlas/atlass.jpeg',
        coverImage: '/images/atlas/atlass.jpeg',
        images: [
            // '/images/atlas/atlass.jpeg',
            '/images/atlas/atlas 2.jpeg',
            '/images/atlas/atlas 1.jpeg'
        ],
        services: [
            'Flutter Development',
            'Dart Development',
            'Android Application Development',
            'Android TV Development',
            'Adaptive UI Architecture',
            'Cross-Platform Engineering'
        ],
        serviceSlugs: [
            'flutter-app-development'
        ],
        client: 'Sahara Flora',
        website: '',
        tags: [
            'Flutter',
            'Dart',
            'Android',
            'Android TV',
            'Mobile Development',
            'Cross-Platform'
        ],
        link: '',
        quote: 'One unified Flutter codebase designed to adapt to mobile touch interactions and Android TV navigation.',
        quoteAuthor: 'Project Highlights',
        quoteRole: 'Cross-Platform Architecture'
    },
    {
        slug: 'revo',
        title: 'Revo Advertising',
        category: 'Agency Portfolio Website',
        year: '2025',
        tagline: 'A digital portfolio showcasing the creative identity of Revo Advertising.',
        description: 'A modern React-based agency portfolio website developed for Revo Advertising, presenting the agency’s identity, creative work, and professional services through a responsive digital experience.',
        overview: 'Revo Advertising is a portfolio website created to establish the agency’s online presence and showcase its brand identity, creative capabilities, and services. Developed with React.js, the website focuses on presenting the agency professionally through a modern interface, structured content, reusable components, and responsive layouts optimized for different devices.',
        conclusion: 'Delivered a modern agency portfolio website that communicates Revo Advertising’s identity and presents its creative work and services through a responsive React experience.',
        thumbnail: '/images/revo/revo lab.png',
        heroImage: '/images/revo/revo thumbnail.jpeg',
        coverImage: '/images/revo/revo4.jpeg',
        images: [
            '/images/revo/revo.jpeg',
            '/images/revo/revoo.jpeg'
        ],
        services: [
            'Agency Portfolio Development',
            'React.js Development',
            'Frontend Architecture',
            'Creative Work Presentation',
            'Responsive Web Design',
            'UI/UX Implementation'
        ],
        serviceSlugs: [
            'web-application-development'
        ],
        client: 'Revo Advertising',
        website: 'https://revo.com',
        tags: [
            'React.js',
            'JavaScript',
            'Agency Portfolio',
            'Web Development',
            'Responsive Design',
            'UI/UX'
        ],
        link: 'https://github.com/oelbouha/Revo',
        quote: 'A professional digital portfolio designed to communicate an advertising agency’s identity, showcase its work, and present its services.',
        quoteAuthor: 'Project Highlights',
        quoteRole: 'Frontend Development'
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
        thumbnail: '/images/pong/pong thumbnail.jpeg',
        heroImage: '/images/pong/pong thumbnail.jpeg',
        coverImage: '/images/pong/Create_a_mockup_2k_202602141753.jpeg',
        images: [
            '/images/pong/pongarena1.jpeg',
            '/images/pong/pongarena1.jpeg'
        ],
        services: [
            'Full Stack Development',
            'Django Backend',
            'JavaScript Frontend',
            'WebSocket Architecture'
        ],
        serviceSlugs: [
            'django-python-development',
            'web-application-development'
        ],
        client: '42 Network / Open Source',
        website: 'https://github.com/oelbouha/ft_transcendence',
        tags: [
            'Django',
            'JavaScript',
            'WebSockets',
            'Full Stack'
        ],
        link: 'https://github.com/oelbouha/ft_transcendence',
        quote: 'A complete real-time multiplayer experience combining solid backend architecture with responsive gameplay.',
        quoteAuthor: '42 Network',
        quoteRole: 'Open Source Community'
    },
    {
        slug: 'quickdrop',
        title: 'QuickDrop',
        category: 'Peer-to-Peer Mobile Application',
        year: '2025',
        tagline: 'A Flutter marketplace connecting senders with travelers for package delivery.',
        description: 'A peer-to-peer package delivery mobile application built with Flutter and Firebase, connecting senders with travelers through secure payments, messaging, and real-time delivery updates.',
        overview: 'QuickDrop is a cross-platform mobile application that connects people who need to ship packages with travelers moving along the same route. Senders can create shipment listings, while couriers can publish trips, manage deliveries, and earn money along their routes. The platform includes Google authentication, Firebase-backed user and shipment management, in-app messaging, real-time status tracking, push notifications, ratings, and secure Stripe payments.',
        conclusion: 'Delivered a complete peer-to-peer delivery platform combining mobile product design, Firebase services, real-time communication, push notifications, and secure payment processing.',
        thumbnail: '/images/quickdrop/quickdrop-app.png',
        heroImage: '/images/quickdrop/quickdrop-app.png',
        coverImage: '/images/quickdrop/quickdrop-app.png',
        images: [
            '/images/quickdrop/quickdrop-app2.png',
            '/images/quickdrop/quickdrop-app.png',
            '/images/quickdrop/quickdrop-app1.png'
        ],
        services: [
            'Flutter Mobile Development',
            'Firebase Authentication',
            'Cloud Firestore & Storage',
            'Google Sign-In',
            'Push Notifications',
            'Stripe Payment Integration',
            'Real-Time Messaging & Tracking'
        ],
        serviceSlugs: [
            'flutter-app-development'
        ],
        client: 'QuickDrop',
        website: '',
        tags: [
            'Flutter',
            'Dart',
            'Firebase',
            'Google Sign-In',
            'Cloud Firestore',
            'Firebase Messaging',
            'Stripe',
            'Peer-to-Peer Delivery'
        ],
        link: 'https://github.com/oelbouha/quickdrop',
        quote: 'A connected delivery marketplace that turns everyday travel routes into a reliable way to move packages between people.',
        quoteAuthor: 'Project Highlights',
        quoteRole: 'Mobile Product Development'
    },
    {
        slug: 'habivio',
        title: 'Habivio',
        category: 'Mobile UX & Product',
        year: '2025',
        tagline: 'Mobile habit tracker & wellness interface built for daily engagement.',
        description: 'A sleek habit tracking and personal wellness iOS & Android app built with React Native and modern micro-interactions.',
        overview: 'Habivio is a mobile wellness platform designed to turn positive daily rituals into lasting habits. Featuring intuitive progress rings, streak analytics, and bespoke haptic feedback loops, the app provides a frictionless user experience that keeps users focused and motivated.',
        conclusion: 'Engineered a polished cross-platform mobile application combining real-time progress visualization, offline-first data synchronization, and delightful micro-interactions.',
        thumbnail: '/images/habivio/habivio.png',
        heroImage: '/images/habivio/habivio.png',
        coverImage: '/images/habivio/habivio.png',
        images: [
            // '/images/habivio/habivio.png',
            '/images/habivio/habivio 1.png',
            '/images/habivio/habivio 2.png'
        ],
        services: [
            'Mobile Product Design',
            'React Native Development',
            'UX Interaction Architecture',
            'Local Storage & Sync'
        ],
        serviceSlugs: [
            'flutter-app-development'
        ],
        client: 'Habivio Wellness',
        website: '',
        tags: [
            'Mobile UX',
            'React Native',
            'TypeScript',
            'Wellness'
        ],
        link: '',
        quote: 'A masterclass in minimal, friction-free mobile product engineering with high-touch tactile feedback.',
        quoteAuthor: 'Product Review',
        quoteRole: 'Mobile UX & Interaction Design'
    },
    {
        slug: 'saladly',
        title: 'Saladly',
        category: 'WordPress & Automation',
        year: '2026',
        tagline: 'A custom WordPress recipe platform built for SEO, content publishing, and automation.',
        description: 'A freelance WordPress project involving custom website development, SEO infrastructure, search engine integrations, social media automation, and automated indexing workflows.',
        overview: 'Saladly is a custom WordPress website developed as a freelance project for a recipe and food content platform. I built and customized the WordPress website, developed the content structure for recipes and blog posts, organized the recipe categories, and implemented the website architecture around SEO and content discoverability. The project also included Google Search Console and Bing Webmaster Tools integration, automated social media publishing for new content, and automated workflows for requesting search engine indexing when new recipes and blog posts are published.',
        conclusion: 'Delivered a complete WordPress content platform combining custom development, SEO infrastructure, search engine integrations, social media automation, and automated indexing workflows.',
        thumbnail: '/images/salad/daily salad recipes.png',
        heroImage: '/images/salad/salad recipes.png',
        coverImage: '/images/salad/salad recipes.png',
        images: [
            // '/images/salad/salad recipes.png',
            '/images/salad/salad recipes 1.png',
            '/images/salad/salad recipes 2.png'
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
        serviceSlugs: [
            'wordpress-development',
            'n8n-automation'
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
        link: 'https://dailysaladrecipes.com/',
        quote: 'A custom WordPress platform combining structured content, SEO infrastructure, automated social publishing, and search indexing workflows.',
        quoteAuthor: 'Daily Salad Recipes',
        quoteRole: 'Freelance Web Development'
    },
    {
        slug: 'docker-vps',
        title: 'Docker VPS',
        category: 'Cloud & Infrastructure',
        year: '2025',
        tagline: 'VPS container orchestration & CI/CD deployment.',
        description: 'Production VPS orchestration system leveraging Docker containers, NGINX reverse proxy, and automated CI/CD.',
        overview: 'Designed and deployed a resilient server infrastructure on a Linux VPS. Isolated services into lightweight Docker containers, configured multi-domain SSL with Let’s Encrypt, and orchestrated automated zero-downtime deployment pipelines with GitHub Actions.',
        conclusion: 'Established high availability, sub-100ms response times, and automated container lifecycle management across production servers.',
        thumbnail: '/images/docker.jpeg',
        heroImage: '/images/docker.jpeg',
        coverImage: '/images/docker.jpeg',
        images: [
            // '/images/docker.jpeg',
            '/images/docker1.png',
            '/images/docker2.webp'
        ],
        services: [
            'Docker Containerization',
            'VPS Hardening',
            'NGINX Reverse Proxy',
            'CI/CD Pipelines'
        ],
        serviceSlugs: [
            'n8n-automation'
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
        link: '',
        quote: 'Robust server hardening and container orchestration that cut deployment friction to zero.',
        quoteAuthor: 'DevOps Architecture',
        quoteRole: 'Infrastructure Highlights'
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
        thumbnail: '/images/webserv.png',
        heroImage: '/images/webserv.png',
        coverImage: '/images/webserv.png',
        images: [
            // '/images/webserv.png',
            '/images/webserv2.png',
            '/images/webserv1.avif'
        ],
        services: [
            'Systems Programming',
            'C++ Network Architecture',
            'HTTP/1.1 Protocol Engine',
            'CGI Execution Layer'
        ],
        serviceSlugs: [
            'web-application-development'
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
        link: 'https://github.com/oelbouha/webserv',
        quote: 'A deeply engineered socket server with meticulous state machines and asynchronous I/O multiplexing.',
        quoteAuthor: 'Systems Review',
        quoteRole: 'Core Network Engineering'
    },
    {
        slug: 'workflow-automation',
        title: 'Workflow Hub',
        category: 'Automation Pipelines',
        year: '2025',
        tagline: 'n8n & Make custom integration pipelines.',
        description: 'Enterprise automation pipeline connecting multiple SaaS tools, webhooks, and AI agents for workflow optimization.',
        overview: 'Constructed scalable automation architectures using self-hosted n8n instances and Make. Built custom webhooks, data transformation scripts, error recovery loops, and AI-powered categorization pipelines to automate routine business workflows.',
        conclusion: 'Saved hundreds of operational hours per month by bridging CRM, billing, messaging, and database updates seamlessly.',
        thumbnail: '/images/call-to-action/n8n Automation Workflow .png',
        heroImage: '/images/call-to-action/n8n Automation Workflow .png',
        coverImage: '/images/call-to-action/n8n Automation Workflow .png',
        images: [
            // '/images/call-to-action/n8n Automation Workflow .png',
            '/images/n8n/automation.png',
            '/images/n8n/automation .png'
        ],
        services: [
            'n8n Architecture',
            'API & Webhook Integrations',
            'Data Transformation',
            'Workflow Optimization'
        ],
        serviceSlugs: [
            'n8n-automation'
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
        link: '',
        quote: 'Turned complex multi-tool operational headaches into reliable, zero-touch background automation.',
        quoteAuthor: 'Automation Engineering',
        quoteRole: 'Integration Systems'
    }
];
function toImage(src, alt) {
    return {
        src,
        alt
    };
}
const allProjects = projectsData.map((project)=>({
        ...project,
        tagline: project.tagline || project.title,
        overview: project.overview || project.description,
        conclusion: project.conclusion || project.description,
        thumbnail: toImage(project.thumbnail, `${project.title} project thumbnail`),
        heroImage: toImage(project.heroImage, `${project.title} project hero preview`),
        coverImage: toImage(project.coverImage || project.heroImage, `${project.title} project showcase`),
        images: project.images.map((src, index)=>toImage(src, `${project.title} project showcase image ${index + 1}`)),
        client: project.client || 'Independent Project',
        website: project.website || '',
        tags: project.tags || [],
        serviceSlugs: project.serviceSlugs || [],
        link: project.link || ''
    }));
const projectsPage = {
    seo: {
        title: 'Projects & Case Studies | Outman Elbouhali Portfolio',
        description: 'Explore real projects by Outman Elbouhali, including full-stack websites, mobile applications, Django systems, WordPress platforms, and workflow automation.',
        path: '/work',
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].projects.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].projects.secondary,
        schemaType: 'CollectionPage'
    },
    header: {
        title: 'PROJECTS',
        badge: 'PORTFOLIO',
        description: "I've helped founders, businesses, and engineering teams build, launch, and scale digital products with solid architecture."
    },
    projects: allProjects
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
    defaultOgImage: 'https://www.outmanelbouhali.online/og.png',
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

//# sourceMappingURL=%5Broot-of-the-server%5D__12-j0wid8fev8._.js.map