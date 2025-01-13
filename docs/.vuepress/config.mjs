import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar:[
      {
        text: '概述',
        link: '/'
      
      },
      {
        text: '工具',
        items:[
          {
            text: 'vuepress',
            link: '/工具/vuepress搭建个人文档.html'
          },
          {
            text: 'windows 服务器部署',
            link: '/工具/windows服务器部署/ip做自签名证书流程.html'
          }
        ]
      },{
        text: 'java',
        items:[
          {
            text: 'jvm',
            link: '/guide/'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
              '/guide/',
              '/guide/started.md'
          
        ],
      '/工具/': [
        {
          title: '工具',
          collapsable: false,
          children: [
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