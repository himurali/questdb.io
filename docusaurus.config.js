const visit = require("unist-util-visit")
const ssrTemplate = require("./src/internals/ssr.template")
const consts = require("./src/config/consts")
const customFields = require("./src/config/customFields")
const math = require("remark-math")
const katex = require("rehype-katex")
const admonitions = require("remark-admonitions")

function variable() {
  const RE_VAR = /{@([\w-_]+)@}/g
  const getVariable = (full, partial) =>
    partial ? customFields[partial] : full

  function textVisitor(node) {
    node.value = node.value.replace(RE_VAR, getVariable)
  }

  function linkVisitor(node) {
    node.url = node.url.replace(RE_VAR, getVariable)

    if (node.title) {
      node.title = node.title.replace(RE_VAR, getVariable)
    }
  }

  function transformer(ast) {
    visit(ast, "text", textVisitor)
    visit(ast, "code", textVisitor)
    visit(ast, "link", linkVisitor)
  }

  return transformer
}

const config = {
  title: "Namma Nimma Cycle Foundation",
  tagline: "Thought and Action leader in Active Mobility",
  url: `https://nncf.onrender.com`,
  baseUrl: "/",
  baseUrlIssueBanner: false,
  favicon: "/img/favicon.png",
  organizationName: "Namma Nimma Cycle Foundation",
  projectName: "nncfwebsite",
  customFields: customFields,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [
    require.resolve("./plugins/fetch-latest-release/index"),
    require.resolve("./plugins/fetch-repo/index"),
    require.resolve("./plugins/fetch-contributors-count/index"),
    require.resolve("./plugins/webpack-ts/index"),
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    require.resolve("./plugins/delay-code-block-appearance"),
    [
      require.resolve("./plugins/tutorial/compiled/index"),
      {
        remarkPlugins: [variable, math, admonitions],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#d14671",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#21222c",
          },
        ],
      },
    ],
    [
      require.resolve('./plugins/blog'),
      {
        remarkPlugins: [variable, math],
        rehypePlugins: [katex],
        feedOptions: {
          type: "all",
          copyright: customFields.copyright,
        },
        showReadingTime: true,
        blogTagsPostsComponent: require.resolve("./src/theme/BlogListPage/index.tsx"),
      }
    ]
  ],
  themeConfig: {
    announcementBar: {
      id: "github-star",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "/img/og.gif",
    gtag: {
      trackingID: "GTM-PVR7M2G",
      anonymizeIP: true,
    },
    prism: {
      defaultLanguage: "questdb-sql",
      additionalLanguages: [
        "rust",
        "csharp",
        "julia",
        "cpp",
        "java",
        "ebnf",
        "ini",
        "toml",
      ],
      theme: require("./src/internals/prism-github"),
      darkTheme: require("./src/internals/prism-dracula"),
    },
    algolia: {
      apiKey: "b2a69b4869a2a85284a82fb57519dcda",
      indexName: "questdb",
    },
    navbar: {
      title: " ",
      logo: {
        alt: "QuestDB",
        src: "/img/navbar/questdb.svg",
      },
      items: [
        {
          label: "What We Do",
          position: "left",
          items: [
            {
              label: "Active Mobility  Innovation",
              to: "/cloud",
            },
            {
              label: "Urban Design",
              to: "/enterprise",
            },

            {
              label: "Active Mobility Success",
              to: "/amsuccess",
            },


            {
              label: "B-Well",
              to: "/use-cases",
            },
            {
              label: "Active Tourism",
              to: "/customers",
            },
            {
              label: "Roadmap",
              href: `https://github.com/orgs/questdb/projects/1/views/5`,
            },
          ],
        },
        {
          label: "Learn",
          position: "left",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Tutorials",
              to: "/tutorial",
            }
          ],
        },
        {
          label: "Who We are ?",
          position: "left",
          items: [
            {
              label: "About Us",
              to: "/about-us",
            },
            {
              label: "How to support us ",
              to: "/SupportUs",
            },
            {
              label: "Media ",
              to: "/press",
            }
          ],
        },



        {
          label: "Projects",
          to: "/docs",
          position: "left",
        },
        {
          label: "Events",
          to: "/careers",
          position: "left",
          className: "careers-link",
        },
        {
          label: "Star us",
          href: "https://github.com/questdb/questdb",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "Cloud",
              to: "/cloud",
            },
            {
              label: "Enterprise",
              to: "/enterprise",
            },
            {
              label: "Use Cases",
              to: "/use-cases",
            },
            {
              label: "Customers",
              to: "/customers",
            },
            {
              label: "Roadmap",
              href: "https://github.com/orgs/questdb/projects/1/views/5",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Docs",
              to: "/docs",
            },
            {
              label: "Tutorials",
              to: "/tutorial",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Discussions",
              to: customFields.linenUrl,
            },
            {
              label: "Join Slack",
              to: customFields.slackUrl,
            },
            {
              label: "Swag",
              to: "/community",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About us",
              to: "/about-us",
            },
            {
              label: "Careers",
              to: "/careers",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: customFields.twitterUrl,
            },
            {
              label: "GitHub",
              href: customFields.githubUrl,
            },
            {
              label: "StackOverflow",
              to: customFields.stackoverflowUrl,
            },
            {
              label: "Linkedin",
              href: customFields.linkedInUrl,
            },
            {
              label: "YouTube",
              to: customFields.videosUrl,
            },
            {
              label: "Reddit",
              href: customFields.redditUrl,
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // blog is enabled through a custom plugin
        // ./plugins/blog/index.js
        blog: false,
        docs: {
          remarkPlugins: [variable, math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
        },

        sitemap: {
          // Removed: https://github.com/ekalinin/sitemap.js/blob/master/CHANGELOG.md#50-breaking-changes
          // cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.7,
          trailingSlash: false,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/katex.min.css"),
            require.resolve("./src/css/_global.css"),
          ],
        },
      },
    ],
  ],
}

module.exports = {
  ...config,
  ssrTemplate: ssrTemplate(config),
}
