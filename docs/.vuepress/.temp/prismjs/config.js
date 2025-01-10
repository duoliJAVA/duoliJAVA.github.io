import "F:/my-tech/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-prismjs/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "F:/my-tech/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "F:/my-tech/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-prismjs/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "F:/my-tech/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-prismjs/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "F:/my-tech/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-prismjs/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "F:/my-tech/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-prismjs/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
