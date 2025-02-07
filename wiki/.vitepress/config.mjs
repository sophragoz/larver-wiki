import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Larver Vanilla",
  description: "Вики",
  head: [
    ["link", { rel: "icon", href: "/logo-dark.png" }],
    ["meta", { name: "darkreader-lock" }]
  ],
  themeConfig: {
    logo: {
      dark: "/logo-dark.png",
      light: "/logo-light.png"
    },
    nav: [
      { text: 'Домашняя страница', link: '/' },
      { text: 'Статьи', link: '/server-info' }
    ],

    sidebar: [
      {
        text: 'Основное',
        items: [
          { text: 'Введение', link: '/server-info' },
          { text: 'Создание/публикование статьи', link: '/create-article' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/larver' },
      { icon: 'github', link: 'https://github.com/sophragoz/larver-wiki'}
    ]
  }
})
