import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar:[
      {
        text: '首页11',
        link: '/工具/vuepress搭建个人文档.html',
      },{
        text: '开始22',
        link:'/guide/',
        items:[
          {
            text: '基础教程',
            link: '/guide/'
          },
          {
            text: '高级教程',
            link: '/guide/started.html'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基础教程',
          collapsable: false,
          children: [
            '/guide/',
            '/guide/started.html',
            '/guide/advanced'
          ]
        }
      ],
      '/工具/': [
        {
          title: '工具',
          collapsable: false,
          children: [
            '/工具/',
            '/工具/windows服务器部署/',
            '/工具/windows服务器部署/ip做自签名证书流程.html',
            '/工具/vuepress搭建个人文档.html'
          ]
        }
      ]
    }
  }
  ),
  lang: 'zh-CN',
  title: '多力',
  description: 'day day up',
})