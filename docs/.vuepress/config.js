import { defineUserConfig ,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Hello Java',
  description: 'Java Study',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
        {
            text: '首页',
            link: '/'
        }
    ],
    sidebar: {
        '/': [
                {
                    text: 'GO',
                    collapsible: true,
                    children: [
                        {text: 'Map',link:"/go/goMap"},
                         
                    ],
                }
            ]
        }    
    })
})