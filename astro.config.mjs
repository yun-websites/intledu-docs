// @ts-check
// Basic
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// Starlight Integrations
import react from "@astrojs/react";
// Starlight Plugins
import starlightFullViewMode from "starlight-fullview-mode";
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightLlmsTxt from "starlight-llms-txt";
// Vite Plugins
import tailwindcss from "@tailwindcss/vite";
// Markdown Plugins
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const GoogleAnalyticsScript = 
`
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-GCCTMKM3TW");
`

// https://astro.build/config
export default defineConfig({
    site: "https://intledu.lingyunawa.top",

    integrations: [
        starlight({
            title: "IntlEDU Docs",
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/yun-websites/intledu-docs" }],
            head: [
                {
                    tag: "script",
                    attrs: { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-GCCTMKM3TW" },
                },
                {
                    tag: "script",
                    content: GoogleAnalyticsScript,
                },
            ],
            defaultLocale: "zh-cn",
            locales: {
                "en-gb": {
                    label: "English (United Kingdom)",
                    lang: "en-GB",
                },
                "zh-cn": {
                    label: "简体中文",
                    lang: "zh-CN",
                },
            },
            plugins: [starlightFullViewMode({ leftSidebarEnabled: false }), viewTransitions(), starlightLlmsTxt()],
        }),
        react(),
    ],

    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },

    vite: {
        plugins: [tailwindcss()],
    },
});
