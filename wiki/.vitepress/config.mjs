import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Larver Vanilla",
  description: "Вики",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "darkreader-lock" }]
  ],
  themeConfig: {
    logo: {
      dark: "/logo.png",
      light: "/logo.png"
    },
    nav: [
      { text: 'Домашняя страница', link: '/' },
      { text: 'Статьи', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Начало',
        items: [

        ],
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/larver' },
      { icon: 'github', link: 'https://github.com/sophragoz/larver-wiki'}
    ]
  }
})
