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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pages/projects.ts [app-rsc] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].find((p)=>p.slug === slug);
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
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: 'article',
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
            ]
        }
    };
}
async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const projectIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].findIndex((p)=>p.slug === slug);
    if (projectIndex === -1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"][projectIndex];
    const nextProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"][(projectIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pages$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProjects"].length];
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
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectDetailClient"], {
                project: project,
                nextProject: nextProject
            }, void 0, false, {
                fileName: "[project]/src/app/work/[slug]/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/[slug]/page.tsx",
        lineNumber: 84,
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
"[project]/src/data/pages/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/keywords.ts [app-rsc] (ecmascript)");
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
        ogImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].defaultOgImage,
        primaryKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].projects.primary,
        secondaryKeywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$keywords$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keywords"].projects.secondary,
        schemaType: 'CollectionPage'
    },
    header: {
        title: 'PROJECTS',
        badge: 'PORTFOLIO',
        description: "I've helped founders, businesses, and engineering teams build, launch, and scale their digital products with solid architecture."
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

//# sourceMappingURL=%5Broot-of-the-server%5D__174rw2fh5_u0x._.js.map