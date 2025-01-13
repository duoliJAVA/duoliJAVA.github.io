import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar:[
      {
        text: '首页11',
        link: '/',
      },{
        text: '开始22',
        link:'/guide/started.html',
      }
    ]
  }),
  lang: 'zh-CN',
  title: '多力',
  description: 'day day up',
})