import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar:[
      {
        text: '主页',
        link: '/'
      
      },
      {
        text: '工具',
        children:[
          {
            text: 'windows服务器部署',
            link: '/工具/windows服务器部署/ip做自签名证书流程'
          },
          {
            text: 'vuepress',
            link: '/工具/vuepress搭建个人文档'
          }
          
        ]
      },{
        text: 'java',
        children:[
          {
            text: 'jvm',
            link: '/guide/'
          }
        ]
      }
    ],
    sidebar:{
      '/工具/windows服务器部署':[
        {
          text: 'ip做自签名证书流程',
          link: '/工具/windows服务器部署/ip做自签名证书流程'
        },
        {
          text: 'jdk安装',
          link: '/工具/windows服务器部署/jdk安装'
        }
      ],
      '/工具/vuepress':[
        {
          text: 'vuepress',
          link: '/工具/vuepress搭建个人文档'
        },
         {
          text: 'vuepress22',
          link: '/工具/vuepress搭建个人文档'
        }
      ]
    }
}),
  lang: 'zh-CN',
  title: '多力',
  description: 'day day up',
})
