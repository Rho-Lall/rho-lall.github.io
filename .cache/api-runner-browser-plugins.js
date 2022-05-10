module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"/Users/Rho.l/Documents/CODE/gitHubIO/rho-lall.github.io/node_modules/gatsby-remark-images","id":"32658888-e97e-563f-9132-b45b813fd0fb","name":"gatsby-remark-images","version":"6.13.0","modulePath":"/Users/Rho.l/Documents/CODE/gitHubIO/rho-lall.github.io/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":1200},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/Rho.l/Documents/CODE/gitHubIO/rho-lall.github.io","commonmark":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1200},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
