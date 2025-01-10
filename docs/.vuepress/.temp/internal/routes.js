export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/my-tech/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Windows"} }],
  ["/guide/started.html", { loader: () => import(/* webpackChunkName: "guide_started.html" */"F:/my-tech/docs/.vuepress/.temp/pages/guide/started.html.js"), meta: {"title":"I am start page"} }],
  ["/%E5%B7%A5%E5%85%B7/vuepress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E6%96%87%E6%A1%A3.html", { loader: () => import(/* webpackChunkName: "工具_vuepress搭建个人文档.html" */"F:/my-tech/docs/.vuepress/.temp/pages/工具/vuepress搭建个人文档.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/my-tech/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
