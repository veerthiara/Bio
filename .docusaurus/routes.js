
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Bio/',
    component: ComponentCreator('/Bio/','46c'),
    exact: true
  },
  {
    path: '/Bio/blog',
    component: ComponentCreator('/Bio/blog','ac4'),
    exact: true
  },
  {
    path: '/Bio/blog/archive',
    component: ComponentCreator('/Bio/blog/archive','076'),
    exact: true
  },
  {
    path: '/Bio/blog/first-blog-post',
    component: ComponentCreator('/Bio/blog/first-blog-post','7f7'),
    exact: true
  },
  {
    path: '/Bio/blog/long-blog-post',
    component: ComponentCreator('/Bio/blog/long-blog-post','25a'),
    exact: true
  },
  {
    path: '/Bio/blog/mdx-blog-post',
    component: ComponentCreator('/Bio/blog/mdx-blog-post','1f4'),
    exact: true
  },
  {
    path: '/Bio/blog/tags',
    component: ComponentCreator('/Bio/blog/tags','064'),
    exact: true
  },
  {
    path: '/Bio/blog/tags/docusaurus',
    component: ComponentCreator('/Bio/blog/tags/docusaurus','603'),
    exact: true
  },
  {
    path: '/Bio/blog/tags/facebook',
    component: ComponentCreator('/Bio/blog/tags/facebook','71d'),
    exact: true
  },
  {
    path: '/Bio/blog/tags/hello',
    component: ComponentCreator('/Bio/blog/tags/hello','8bf'),
    exact: true
  },
  {
    path: '/Bio/blog/tags/hola',
    component: ComponentCreator('/Bio/blog/tags/hola','e2a'),
    exact: true
  },
  {
    path: '/Bio/blog/welcome',
    component: ComponentCreator('/Bio/blog/welcome','0e4'),
    exact: true
  },
  {
    path: '/Bio/docs/tags',
    component: ComponentCreator('/Bio/docs/tags','540'),
    exact: true
  },
  {
    path: '/Bio/markdown-page',
    component: ComponentCreator('/Bio/markdown-page','b39'),
    exact: true
  },
  {
    path: '/Bio/docs',
    component: ComponentCreator('/Bio/docs','564'),
    routes: [
      {
        path: '/Bio/docs/intro',
        component: ComponentCreator('/Bio/docs/intro','23c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Bio/docs/tutorial-basics/congratulations','792'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Bio/docs/tutorial-basics/create-a-blog-post','d16'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Bio/docs/tutorial-basics/create-a-document','f31'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Bio/docs/tutorial-basics/create-a-page','4ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Bio/docs/tutorial-basics/deploy-your-site','fb2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Bio/docs/tutorial-basics/markdown-features','ca1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Bio/docs/tutorial-extras/manage-docs-versions','55e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Bio/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Bio/docs/tutorial-extras/translate-your-site','e75'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
