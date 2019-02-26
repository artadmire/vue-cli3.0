const fs = require('fs');
// const prod_webpack_config  = require('./config/prod.js');
module.exports = {
     // baseUrl  type:{string} default:'/' 
    // 将部署应用程序的基本URL
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    baseUrl: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',

    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    outputDir: process.env.outputDir,

     //   指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: "index.html",
    // 放置静态资源的地方 (js/css/img/font/...)
    
    assetsDir: 'static',

    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
    // 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希
    filenameHashing: false,

    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,

    // 使用带有浏览器内编译器的完整构建版本
    // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
    // compiler: false,

    // babel-loader 默认会跳过 node_modules 依赖。
    // 通过这个选项可以显式转译一个依赖。
    transpileDependencies: [/* string or regex */],

    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,

    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
    // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。

    crossorigin:"anonymous",

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
    // 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
    // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
    // 另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
    // integrity:true,

    // CSS 相关选项
    css: {
      extract : false,
      // 是否开启 CSS source map？
      sourceMap: false,

      // 为预处理器的 loader 传递自定义选项。比如传递给
      // sass-loader 时，使用 `{ sass: { ... } }`。less
      // 比如你可以这样向所有 Sass 样式传入共享的全局变量
      loaderOptions: {
          less: {
              data: fs.readFileSync('src/style/base.less', 'utf-8')
          },
      },

      // 为所有的 CSS 及其预处理文件开启 CSS Modules。
      // 这个选项不会影响 `*.vue` 文件。
      modules: false
  },

   // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require('os').cpus().length > 1,
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => {
        console.log(process.env.NODE_ENV )
        if (process.env.NODE_ENV === 'production') {
            return  prod_webpack_config
        }
    },
    devServer: {
      proxy: {
       '/api': {
          target: 'http://192.168.1.218:10751/',
          changeOrigin: true,
          autoRewrite: true,
          cookieDomainRewrite: true,
          pathRewrite: {
            '^/api/': '/'
          }
        }
      },
      port: 8088,
      host: '0.0.0.0',
      https: false,
      open: true
    }
  }