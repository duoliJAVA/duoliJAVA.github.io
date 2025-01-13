---
lang: zh-CN
title: vuepress结合github搭建博客
description: vuepress搭建博客
---

### 参考官网创建项目
>注意： node版本18.19.0以上
       依赖无法安装，用--force安装
       配置文件

配置文件在 .vuepress中，js不兼容可以使用mjs格式
```
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
```
### 上传github
1、github上建一个仓库，仓库名称是 github的username.github.io
2、上传本地代码到github仓库

### 创建自动打包部署文件
根目录下创建.github/workflows/deploy.yml
```
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
permissions:
  contents: write   # 允许修改仓库内容
  pages: write      # 允许推送到 GitHub Pages
  
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18.20.5'

    - name: Install dependencies
      run: npm install

    - name: Build project
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs/.vuepress/dist
```

### 配置github仓库的展示分支
在此仓库的setting中找到pages，打开visit sit，选择deploy from branch 
