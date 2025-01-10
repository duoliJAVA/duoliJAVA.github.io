import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar:[
      {
        text: '首页',
        link: '/',
      },{
        text: '开始',
        link:'/guide/started.html',
      }
    ]
  }),
  lang: 'zh-CN',
  title: '你好！',
  description: '这是我的第一个 VuePress 站点',
})