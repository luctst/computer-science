/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const siteConfig = {
  title: 'Computer Science', // Title for your website.
  tagline: 'A website for testing',
  url: 'https://luctst.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: 'computer-science',
  organizationName: 'luctst',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {page: 'help', label: 'Help'},
  ],
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: '#3e6b32',
    secondaryColor: '#2b4a23',
  },
  copyright: `Copyright © ${new Date().getFullYear()}`,
  persoWebsite: `https://www.lucas-tostee.com`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  enableUpdateBy: true,
  enableUpdateTime: true,
  repoUrl: 'https://github.com/luctst/computer-science',
  scrollToTop: true,
};

module.exports = siteConfig;
