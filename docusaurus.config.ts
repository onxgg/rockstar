import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import onxDark from './src/theme/prism-onx';
import remarkDownloadList from './src/remark/download-list';
import remarkVideo from './src/remark/video';

const GITHUB_REPO = 'https://github.com/onxgg/rockstar';

const config: Config = {
  title: 'ONX Docs',
  tagline: 'Documentation for ONX assets on the Cfx.re / Tebex store',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.onx.gg',
  baseUrl: '/',

  organizationName: 'onxgg',
  projectName: 'rockstar',

  onBrokenLinks: 'throw',

  // these docs have lots of literal backtick/bracket resource names like `[onx_vehicles]`,
  // which MDX would otherwise try to parse as JSX. Detect per-file and fall back to CommonMark.
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    'https://use.typekit.net/wge8hjk.css',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
          // must run before Docusaurus's built-in transformLinks/transformImage so the
          // links this plugin generates still get asset-hashed and validated like any
          // hand-written markdown link, instead of passing through as raw `/downloads/...`
          // hrefs that the broken-link checker can't vouch for.
          // remarkVideo likewise has to claim .mp4/.webm images before transformImage turns them into <img>.
          beforeDefaultRemarkPlugins: [remarkDownloadList, remarkVideo],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  /**
   * offline search.
   * builds a lunr index into the static output at build time and queries it in a web worker, so nothing is sent anywhere and it works with no network at all.
   */
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/',
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 12,
        searchResultContextMaxLength: 60,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ONX Docs',
      logo: {
        alt: 'ONX',
        src: 'img/logo_wordmark.png',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: GITHUB_REPO,
          label: 'GitHub',
          position: 'right',
          className: 'onx-link-icon onx-link-icon--github',
        },
        {
          href: 'https://store.onx.gg',
          label: 'Store',
          position: 'right',
          className: 'onx-link-icon onx-link-icon--onx',
        },
      ],
    },
    footer: {
      links: [
        {
          label: 'onx.gg',
          href: 'https://onx.gg',
          className: 'onx-link-icon onx-link-icon--onx',
        },
        {
          label: 'GitHub',
          href: GITHUB_REPO,
          className: 'onx-link-icon onx-link-icon--github',
        },
      ],
      copyright: `&copy; ${new Date().getFullYear()} DWG Games Ltd. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: onxDark,
      additionalLanguages: ['lua', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
