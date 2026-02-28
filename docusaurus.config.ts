import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Codevelo Docs",
  tagline:
    "Expert software consulting and development services to help businesses build smarter, scale faster, and reduce costs.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.codevelo.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  staticDirectories: ["static"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "codevelo-pub", // Usually your GitHub org/user name.
  projectName: "cdv-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexDocs: true,
        indexBlog: false,
        language: "en",
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "",
      logo: { alt: "Codevelo Logo", src: "img/logo.svg", width: 160 },
      items: [
        {
          type: "doc",
          docId: "initial/README",
          position: "left",
          label: "Getting Started",
        },
        { type: "doc", docId: "web/README", position: "left", label: "Web" },
        {
          type: "doc",
          docId: "mobile/README",
          position: "left",
          label: "Mobile",
        },
        { type: "doc", docId: "api/README", position: "left", label: "API" },
        {
          type: "doc",
          docId: "fastKit/README",
          position: "left",
          label: "FastKit",
        },
        {
          href: "https://codevelo.io",
          label: "Codevelo",
          position: "right",
        },
        {
          href: "https://github.com/codevelo-pub",
          label: "GitHub",
          position: "right",
        },
        { type: "search", position: "right" },
      ],
    },
    footer: {
      style: "dark",
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        "bash",
        "typescript",
        "javascript",
        "json",
        "jsx",
        "tsx",
        "java",
        "kotlin",
        "swift",
        "ruby",
        "python",
        "csharp",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
