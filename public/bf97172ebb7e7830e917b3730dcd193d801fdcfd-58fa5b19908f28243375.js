"use strict";(self.webpackChunkassume_wisely_blog=self.webpackChunkassume_wisely_blog||[]).push([[498],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9230:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return f},M:function(){return x},P:function(){return w},S:function(){return R},_:function(){return s},a:function(){return l},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,o){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);var u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,p=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,p);return r.createElement(r.Fragment,null,r.createElement(g,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,o=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return r.createElement("img",l({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},E=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,o=void 0===i||i,c=s(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,l({},c,t,{sizes:u,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=s(e,b);return t?r.createElement(E,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(m=E.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return r.createElement(r.Fragment,null,r.createElement(E,l({},e)),r.createElement("noscript",null,r.createElement(E,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=E.propTypes;var C,N,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set,_=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,S),y=i.width,v=i.height,E=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,E),w=b.style,x=b.className,L=s(b,I),k=(0,r.useRef)(),_=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var O=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=k.current.querySelector("[data-gatsby-image-ssr]");return r&&o()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(_)):N&&T.has(_)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;k.current.innerHTML=r(l({isLoading:!0,isLoaded:T.has(_),image:i},h)),T.has(_)||(e=requestAnimationFrame((function(){k.current&&(t=n(k.current,_,T,c,p,g,f))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){T.has(_)&&N&&(k.current.innerHTML=N(l({isLoading:T.has(_),isLoaded:T.has(_),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,l({},L,{style:l({},w,c,{backgroundColor:u}),className:x+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));O.propTypes=k,O.displayName="GatsbyImage";var A,j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),U={src:i().string.isRequired,alt:L,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(A=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,j);return n&&console.warn(n),a?r.createElement(A,l({image:a},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=U},2066:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(1597),i=a(1074),l=i.default.nav.withConfig({displayName:"hamburger-menu__MenuLinks",componentId:"sc-14lo7i4-0"})(["position:fixed;top:0;right 0;transition:transform 300ms;transform:",";display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:left;height:100vh;width:50%;background:#d7d7d7;opacity:.95;z-index:4;ul{li{margin-bottom:1rem;color:#057aff;font-size:1.5em;}}a{transition:color 300ms;:hover{color:#6ab4ff;}}"],(function(e){return e.nav?"translateX(0)":"translateX(100%)"})),s=function(e){var t=e.nav;return r.createElement("div",{className:"flex justify-end"},r.createElement(l,{nav:t},r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"/business"},"Business Acumen")),r.createElement("li",null,r.createElement("a",{href:"/datascience"},"Data Science")),r.createElement("li",null,r.createElement("a",{href:"/development"},"Development")),r.createElement("li",null,r.createElement("a",{href:"/design"},"Design")),r.createElement("li",null,r.createElement("a",{href:"/journey"},"My Journey")),r.createElement("li",null,r.createElement("a",{href:"/about"},"About Me")))))},o=i.default.button.withConfig({displayName:"hamburger__MenuIcon",componentId:"sc-iuj6xi-0"})(["position:fixed;top:0.5rem;right:2rem;display:flex;flex-direction:column;justify-content:space-around;width:1.5rem;height:1.5rem;background:transparent;border:none;cursor:pointer;z-index:5;div{width:1.5rem;height:.2rem;background:lightslategrey;border-radius:5px;transform-origin:1px;:first-child{transform:","}:nth-child(2){opacity:","}:nth-child(3){transform:","}transition:opacity 300ms,transform 300ms;}"],(function(e){return e.nav?"rotate(45deg)":"rotate(0)"}),(function(e){return e.nav?"0":"1"}),(function(e){return e.nav?"rotate(-45deg)":"rotate(0)"})),c=function(){var e=(0,r.useState)(!1),t=e[0],a=e[1];return r.createElement("div",{className:"md:hidden"},r.createElement(o,{nav:t,onClick:function(){return a(!t)}},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null)),r.createElement(s,{nav:t}))},u="layout-module--nav-link-item--pfCo2",d=function(e){var t=e.pageTitle,a=e.children,i=(0,n.K2)("1609057278");return r.createElement("div",{className:"md:mx-20 lg:container lg:max-w-screen-xl"},r.createElement("title",null,t," | ",i.site.siteMetadata.title),r.createElement(c,null),r.createElement("nav",{className:"z-0 flex flex-row justify-end mr-20 md:mr-0 mb-5"},r.createElement("div",{className:"font-display text-5xl md:text-7xl"},r.createElement(n.rU,{to:"/"},"Rho Lall"))),r.createElement("nav",{className:"z-0 hidden md:flex flex-row justify-evenly mb-5 font-display"},r.createElement("ul",{className:"layout-module--nav-links--EROwB"},r.createElement("li",{className:u},r.createElement(n.rU,{to:"/business",className:"text-primary"},"BUSINESS ACUMEN")),r.createElement("li",{className:u},r.createElement(n.rU,{to:"/datascience",className:"text-primary"},"DATA SCIENCE")),r.createElement("li",{className:u},r.createElement(n.rU,{to:"/development",className:"text-primary"},"DEVELOPMENT")),r.createElement("li",{className:u},r.createElement(n.rU,{to:"/design",className:"text-primary"},"DESIGN")),r.createElement("li",{className:u},r.createElement(n.rU,{to:"/journey",className:"text-primary"},"MY JOURNEY")))),r.createElement("main",{className:"z-0 px-2"},a))}}}]);
//# sourceMappingURL=bf97172ebb7e7830e917b3730dcd193d801fdcfd-58fa5b19908f28243375.js.map