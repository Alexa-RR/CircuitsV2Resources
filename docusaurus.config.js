// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The CV2 docs',
  tagline: 'Made by Alexa and many others from the ❤️',
  url: 'https://cv2.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alexa-RR', // Usually your GitHub org/user name.
  projectName: 'cv2.pages.dev', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: undefined,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/alexa-RR/cv2.pages.dev/tree/Enginerework',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Updates',
          sortPosts: 'ascending',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },
    
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'wiki',
        path: 'wiki',
        
        routeBasePath: 'wiki',
        sidebarPath: require.resolve('./wikisidebars.js'),
        editUrl:
            'https://github.com/alexa-RR/cv2.pages.dev/tree/Enginerework'
      }),
    ]
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CV2 Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Hello_world.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Resources',
            position: 'left',
            label: 'Resources',
          },
          {
            to: '/wiki',
            label: 'Wiki',
            position: 'left',
            activeBaseRegex: `/wiki/`,
          },
          {to: '/blog', label: 'CV2 Updates', position: 'left'},
          {
            href: 'https://github.com/alexa-RR/cv2.pages.dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: 'docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/RswVV8pmYM',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Alexa-RR/cv2.pages.dev',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '9N9OJKXL7U',
        apiKey: '25395dce9cb0b681d2d3b0cf30259dd7',
        indexName: 'cv2'

      }
    }),
};

module.exports = config;
