"use strict";
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 4720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/Rho.l/Documents/CODE/githubIO/Rho-Lall.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(8138);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/components/layout.module.css
// Exports
var container = "layout-module--container--eLBMS";
var siteTitle = "layout-module--site-title--5N6mf";
var heading = "layout-module--heading--8VjLO";
var navLinks = "layout-module--nav-links--EROwB";
var navLinkItem = "layout-module--nav-link-item--pfCo2";
var navLinkText = "layout-module--nav-link-text--ac2nV";

;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({pageTitle,children})=>{const data=(0,gatsby_browser_entry.useStaticQuery)("1609057278");return/*#__PURE__*/index_js_.createElement("div",{className:container},/*#__PURE__*/index_js_.createElement("title",null,pageTitle," | ",data.site.siteMetadata.title),/*#__PURE__*/index_js_.createElement("header",{className:siteTitle},data.site.siteMetadata.title),/*#__PURE__*/index_js_.createElement("nav",null,/*#__PURE__*/index_js_.createElement("ul",{className:navLinks},/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/",className:navLinkText},"Home")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/about",className:navLinkText},"About Me")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/thoughts",className:navLinkText},"Random Thoughts")))),/*#__PURE__*/index_js_.createElement("main",null,/*#__PURE__*/index_js_.createElement("h1",{className:heading},pageTitle),children));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 2433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7533);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4720);
const BlogPage=({data})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{pageTitle:'Random Thoughts'},data.allMdx.nodes.map(node=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{key:node.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/thoughts/${node.slug}`},node.frontmatter.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Posted: ",node.frontmatter.date))));};const query="1656205207";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-thoughts-index-js.js.map