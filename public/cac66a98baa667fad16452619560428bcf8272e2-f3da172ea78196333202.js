"use strict";(self.webpackChunkassume_wisely_blog=self.webpackChunkassume_wisely_blog||[]).push([[252],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9230:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return f},M:function(){return x},P:function(){return b},_:function(){return l},a:function(){return s},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,l,o){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,p=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,o=void 0===i?"":i,c=e.shouldLoad,u=l(e,h);return r.createElement("img",s({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},E=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,o=void 0===i||i,c=l(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,s({},c,t,{sizes:u,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,a=l(e,w);return t?r.createElement(E,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(m=E.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return r.createElement(r.Fragment,null,r.createElement(E,s({},e)),r.createElement("noscript",null,r.createElement(E,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=E.propTypes;var C,L,N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:N},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=l(e,k),y=i.width,v=i.height,E=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,E),b=w.style,x=w.className,N=l(w,I),S=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var A=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=S.current.querySelector("[data-gatsby-image-ssr]");return r&&o()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(O)):L&&T.has(O)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;S.current.innerHTML=r(s({isLoading:!0,isLoaded:T.has(O),image:i},h)),T.has(O)||(e=requestAnimationFrame((function(){S.current&&(t=n(S.current,O,T,c,p,g,f))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){T.has(O)&&L&&(S.current.innerHTML=L(s({isLoading:T.has(O),isLoaded:T.has(O),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},N,{style:s({},b,c,{backgroundColor:u}),className:x+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));A.propTypes=S,A.displayName="GatsbyImage";var U,_=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],R=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:N,width:R,height:R,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(U=A,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=l(e,_);return n&&console.warn(n),a?r.createElement(U,s({image:a},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=M},8285:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(1597),i="layout-module--nav-link-item--pfCo2",s=function(e){var t=e.pageTitle,a=e.children,s=(0,n.K2)("1609057278");return r.createElement("div",{className:"px-2 md:mx-20 lg:container lg:max-w-screen-xl"},r.createElement("title",null,t," | ",s.site.siteMetadata.title),r.createElement("nav",{className:"flex flex-row justify-end items-end pb-5"},r.createElement("div",{className:"font-display text-5xl md:text-7xl"},r.createElement(n.rU,{to:"/"},"Rho Lall")),r.createElement("div",{className:"hidden md:block text-secondary px-2 font-display"},r.createElement(n.rU,{to:"/about"},"( About Me )"))),r.createElement("nav",{className:"hidden md:flex flex-row justify-evenly pb-10 font-display"},r.createElement("ul",{className:"layout-module--nav-links--EROwB"},r.createElement("li",{className:i},r.createElement(n.rU,{to:"/",className:"text-primary"},"BUSINESS ACUMEN")),r.createElement("li",{className:i},r.createElement(n.rU,{to:"/",className:"text-primary"},"DATA SCIENCE")),r.createElement("li",{className:i},r.createElement(n.rU,{to:"/",className:"text-primary"},"DEVELOPMENT")),r.createElement("li",{className:i},r.createElement(n.rU,{to:"/",className:"text-primary"},"DESIGN")),r.createElement("li",{className:i},r.createElement(n.rU,{to:"/",className:"text-primary"},"MY JOURNEY")))),r.createElement("main",null,a))}}}]);
//# sourceMappingURL=cac66a98baa667fad16452619560428bcf8272e2-f3da172ea78196333202.js.map