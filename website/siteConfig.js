/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const siteConfig = {
  title: 'Computer Science',
  tagline: 'A website for testing',
  url: 'https://luctst.github.io',
  baseUrl: '/',
  customDocsPath: "website/docs/",
  projectName: 'Learn Computer Science',
  organizationName: 'luctst',
  docsSideNavCollapsible: true,
  noIndex: false,
  headerLinks: [
    {doc: 'intro', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {languages: true}
  ],
  editUrl: "https://github.com/luctst/computer-science/master/website/docs/",
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright: `Copyright © ${new Date().getFullYear()}`,
  persoWebsite: `https://www.lucas-tostee.com`,
  highlight: {
    theme: 'atom-one-dark',
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
