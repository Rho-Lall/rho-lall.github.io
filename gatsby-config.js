module.exports = {
  siteMetadata: {
    title: `assume-wisely-blog`,
    siteUrl: `https://rho-lall.github.io/assume-wisely-blog/`,
  },
  plugins: [],
  {
    "scripts": {
      "deploy": "gatsby build --prefix-paths && gh-pages -d public"
    }
  }
    module.exports = {
      pathPrefix: "/assume-wisely-blog",
  }
}
