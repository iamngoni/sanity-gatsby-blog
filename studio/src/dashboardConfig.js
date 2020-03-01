export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5c0472e250ff770f7ca88a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ket73g1x',
                  apiId: '390382a7-e6ff-4eb9-a6da-eb63592bcef0'
                },
                {
                  buildHookId: '5e5c047267d7da1619426f26',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9t8b5y61',
                  apiId: '335fcb43-2c4c-4e82-a975-2a6110fbf83f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamNGVJ/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9t8b5y61.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
