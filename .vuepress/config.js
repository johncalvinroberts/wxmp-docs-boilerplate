module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Guide test2', link: '/guide/test' }
    ],
    sidebar: [
      '/',
      '/guide/',
      ['/guide/test', 'Explicit link text']
    ]    
  }
}