(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{253:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=(a(18),a(318)),l=a(7),c=a(247),s=a(2),o=a(319),d=a.n(o),u=a(22),f=a(320),p=a.n(f),m=function(e){return r.a.createElement("div",{className:"Rotational"},r.a.createElement("div",{className:"Rotational__orbit"},r.a.createElement("div",{className:"Rotational__item computer"}),r.a.createElement("div",{className:"Rotational__item hacker"}),r.a.createElement("div",{className:"Rotational__item server"}),r.a.createElement("div",{className:"Rotational__item www"}),r.a.createElement("div",{className:"Rotational__item browser"}),r.a.createElement("div",{className:"Rotational__item protection"}),r.a.createElement("div",{className:"Rotational__item laptop"}),r.a.createElement("div",{className:"Rotational__item headphones"}),r.a.createElement("div",{className:"Rotational__avatar-container"},r.a.createElement(p.a,{sizes:e.avatar.sizes}))))},g=a(308);function h(){var e=b(["\n    font-size: 4.4rem;\n  "]);return h=function(){return e},e}function v(){var e=b(["\n    height: 100vh;\n    min-height: 500px;\n    padding-top: 38px;\n    grid-template-columns: 1fr 1fr;\n  "]);return v=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=Object(s.d)(c.AwesomeButton).withConfig({displayName:"HeaderHome__ButtonAbout",componentId:"sc-5zlono-0"})(["width:141px !important;margin-top:34px !important;"]),w=s.d.div.withConfig({displayName:"HeaderHome__Container",componentId:"sc-5zlono-1"})(["min-height:600px;max-width:1080px;display:grid;padding-top:100px;margin:0 auto !important;grid-template-columns:minmax(min-content,590px);justify-content:center;align-items:center;",";"],u.c.md(v())),S=s.d.h1.withConfig({displayName:"HeaderHome__Title",componentId:"sc-5zlono-2"})(["font-size:12vw;font-weight:900;text-transform:uppercase;text-align:center;font-family:'Gentium Book Basic';color:#363636;margin-bottom:0;",";"],u.c.sm(h())),E=s.d.div.withConfig({displayName:"HeaderHome__MainInfoWrapper",componentId:"sc-5zlono-3"})(["text-align:center;padding:0 5px;"]),_=s.d.div.withConfig({displayName:"HeaderHome__RotationalWrapper",componentId:"sc-5zlono-4"})(["padding:0 20px;"]),x=s.d.h2.withConfig({displayName:"HeaderHome__Subtitle",componentId:"sc-5zlono-5"})(["font-size:18px;font-weight:600;margin:10px 0 20px 0;font-family:'Open Sans',sans-serif;text-align:center;color:#1976d2;"]),z=function(e){var t=e.data;return r.a.createElement("div",{style:{background:"#f3f3f3",backgroundImage:"url("+d.a+")"}},r.a.createElement(w,{wrap:"wrap",maxWidth:"1100px",className:"row",justifyContent:"center"},r.a.createElement(E,null,r.a.createElement(S,null,t.site.siteMetadata.title),r.a.createElement(x,null,t.site.siteMetadata.subtitle),r.a.createElement(g.a,null),r.a.createElement(y,{href:"/about"},"ABOUT ME")),r.a.createElement(_,{className:"col-xs-12 col-lg-7"},r.a.createElement(m,{avatar:t.avatar}))))},I=function(e){return r.a.createElement(l.StaticQuery,{query:"1731117187",render:function(t){return r.a.createElement(z,Object.assign({data:t},e))},data:n})},R=a(246),L=a(248),N=a(249);a.d(t,"queryBlog",(function(){return O}));var C=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props.data.site.siteMetadata.siteUrl;return r.a.createElement(R.a,{location:this.props.location,active:N.a.home},r.a.createElement(L.a,{title:"",url:e}),r.a.createElement(I,null),r.a.createElement("div",{style:{background:"#22292c",height:"200px"}}))},i}(r.a.Component),O="1271460761";t.default=C},308:function(e,t,a){"use strict";a(120);var i=a(127),r=a(0),n=a.n(r),l=a(2),c=a(7),s=l.d.div.withConfig({displayName:"Social__SocialWrapper",componentId:"sc-1cpu1oq-0"})(["text-align:center;"]),o=l.d.a.withConfig({displayName:"Social__SocialIcon",componentId:"sc-1cpu1oq-1"})(["margin:0 5px !important;background:#bbbbbb;border-radius:50%;width:38px;height:38px;padding:8px;transition:0.3s;display:inline-block;img{transition:0.3s;width:100%;margin:0;}&:hover{transform:scale(1.15);}&:hover img{transform:scale(0.9);}"]);t.a=function(e){return n.a.createElement(c.StaticQuery,{query:"1204032690",render:function(e){return n.a.createElement(s,null,e.site.siteMetadata.social.slice(0,4).map((function(t){return n.a.createElement(o,{key:t.title,className:t.icon+"--hover",href:t.link,title:t.title+" - "+e.site.siteMetadata.title,target:"_blank"},n.a.createElement("img",{alt:t.title,src:"dev"===t.icon?"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg":"https://icongr.am/fontawesome/"+t.icon+".svg?color=ffffff"}))})))},data:i})}},318:function(e){e.exports=JSON.parse('{"data":{"avatar":{"sizes":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%3e%3cpath%20d=\'M19%201l1%203c2%203%202%2011%200%2012l-3-1c-1-2-2-2-4-1s-3%200-4-2l-4-2v3c1%201%201%201-1%202-2%200-2%200%200%203%201%202%203%203%203%201s5-3%207-2l3%201c4%201%204%204-1%208l-5%203-2%202c-2%202-2%202%200%204l2%203%202%203%202%204%203%205c2%202%203%205%201%205l-7-4C1%2044%200%2044%200%2053c0%206%200%207%202%207l5%201-4%201H0v7c0%206%201%209%203%206%201-2%208-1%2013%201l4%202%203-3c3-3%2013-7%2014-7%203%202-3%2017-6%2018-2%200-2%200%200-3%204-5%205-11%202-11-4%200-13%209-11%2012s1%203-3-1c-3-3-4-4-6-4v1c3%200%206%208%206%2012-1%205-2%205-5%202-4-3-4-4-1-4%203-1%203-3-1-5-5-3-12%200-12%207%200%203%205%207%2010%207%202%200%203%201%203%202%200%202-3%202-7%201l-5-2v5c-2%200-2%2019%201%2019%201%200%201%202-1%205l-1%2012v9h7c16%202%2046%202%2047%201a1158%201158%200%2000-2-125V0H35L19%201m55%201l-1%201v5c1%200%200%205-3%208s-3%204%201%204l3-1v4c0%206%201%2013%202%2012V17L75%200l-1%202m86%2014l-1%2017c-1%202-6%202-7%201%200-2-1-2-2%200-2%203-4%203-3%200%200-2-1-3-3-1l-1%2010c0%208%201%2010%206%209%201%200%202%200%202%202l1%202c2%201%200%202-3%201l-5-2-2%2010v13l-1-8-2-7-1%2015c0%2016%200%2016-3%2015-2-1-2-4%201-10%201-2%201-2-1-3v-4c1-2%201-13-1-15l-1-1-2-2-6-3-6-3-6-8c-2-2-2-2-4-1-1%202-1%202%201%203%202%200%203%202%202%206l2%202c3%201%207%209%205%2011-1%203-7%205-9%205l-6-5-6-3-2-1%203-1c3%201%205%200%205-1l2-3c2-2%203-5%201-7v-1l-2-1-2%203c0%202-2%203-4%204l-4%203-1%201c-3%200-6%204-6%207v2l-1%203%202%202v1h-1l-1%203-1%204c-1%201%200%202%202%204%205%204%204%209-1%2013-3%202-3%203-1%205v2l-1%2010v11c-1%201%200%202%202%204%205%205%205%209%201%2012-3%203-4%206-2%208v2c-1%202-3%200-4-4%200-2-1-3-1-1v2l-1-2-1-6v-3l1%202c2%205%203%201%202-11l-1-9-1%203-1-3-2-58v-8l-3%202-3%202%202-4c5-4%205-12%201-15-2-2-3-3-2-7%200-5-1-8-3-7a241%20241%200%20000%2046v23l2%202%202%201-2%202h-2v32c0%2037%200%2035-8%2034l-6%201h-3l-14-1a3219%203219%200%2001-33-1H0v13l3-1h12a1466%201466%200%200031%201c-3%201-4%203-1%203%204%200%204%201%202%203l-1%203c1%201-5%203-6%201l-2-1-1-1c2-2-4-4-6-3h-3l-15-1H0v21c0%2018%200%2021%202%2022v1c-3%201-2%207%200%208%203%201%203%203%200%203l-2%202c0%202%201%202%209%202l9-1h2l6%202%205%201h-4c-2%200-3%200-2%201v1c0%202-3%201-3%200%200-2-4-3-9-2l-3%201h4l5%201-9%201H0v3c0%204%201%204%2022%204%2024%201%2039%203%2039%204l-19%203-8%201%204%201%205%201-6%201-9%201-4%202-1-1-2-1-3%201c0%201-3%202-4%201h-3l-7%201H0v18c0%2015%200%2018%202%2019v1l-2%203c0%201%200%202%202%201l1%201-1%202c-2%200-2%202-2%208l1%207c1-1%208%201%2010%203%202%203%208%204%208%201%200-2%203-4%206-3%202%200%203%201%200%203v2c2%200-1%203-3%203-3%201-3%202%200%204l1%201-1%202c1%201%200%202-1%202v5l1%202%208%204%202%202-1%201c-2%200-2%201%200%203l1%203c0%201-2%200-4-3l-3-4-4-3-4-2h-1c-1-1-1%200-1%201%200%203-1%204-4%201v-2l-1-3c-1-1-3-2-4-1l-1-1-1-1c-4%200-2%204%204%209%203%204%207%206%208%206l2%202%202%203c1%201%202%204%200%204l-3-1c-3-4-4-4-5-3l-1-1-1-3-2-1c0-2-4-3-7-3l-1%209c0%209%200%209%203%2010l3%203c-1%202-1%202-4%200-2%200-2%200-2%205%200%204%200%205%202%206h3l-3%201c-3%200-3%203%201%206l3%202h254l1-11c1-22%201-21-7-21-5%200-6%200-8-2l-6-5c-3-1-3-2-3-4%201-3%200-5-3-5l-5-3-7-3-5-2-7-3-10-2-9-1c-2%201-4%201-5-1h-16c-2-2%200-10%203-16l2-5h6l15%203c16%204%2043%205%2060%201%204%200%208%201%207%203-2%202%203%2018%207%2029l4%208c-3%200-6-2-5-4l-1-2c-1%200-2%201-2%203-1%203-4%203-11%200-4-1-5-1-2%201%202%202%2010%207%2012%207%201%200%202%201%202%203%200%2010%202%2024%204%2027%202%205%202%205%206%205s4%200%204-3%200-4-1-3l-3-1c-2-2-2-2-1-11l1-12c0-4%202-4%203%200l1%202%204-2a1379%201379%200%20016-6l-1-7v-9l-1-3%202%203%202%206%201%202v-11c-2-2-3-9-1-10%202-2%207%204%208%209%200%205%202%205%203%200%202-4%201-7-4-13l-4-5%202-3%203%206%205%206v-6c-2-2-2-5-1-5v-1l-1-4c0-3%200-4-2-6l-2-2h3c4%201%204%201%204-1s0-3%202-2c5%201%202-3-6-8l-6-5c3%200%203-2%200-5s-3-3-2-5c1-3%201-3-1-5-2-1-2-2-2-4%201-1%201-3-1-6l-1-6v-2c-2-1-1-6%201-7v-4c-2%200-2-1-2-5l-1-5c-2%200-1-2%203-9l5-10%201-3-3%204c-4%206-5%207-7%204l-2-2%202-6%203-9%201-3-2%202-4%205c-3%204-3%201-1-6l2-8-1-4c2-5%202-5-2-6h-3c-1%201-1%200-1-1%200-2-1-3-3-1-1%201-1%201-1-1l-1-3-2-2c0-2-3-1-5%203-2%206-3%205-1-2s2-7%200-7c-1-1%200-1%201-1%203%200%203-2%201-6h-5l2%201%201%202c0%202%200%202-3%201l-2-3-1-1v4c0%208-3%208-3%201%200-4-3-8-5-9h-3l-1-1c0-2%207-3%2014-3%205%200%205%200%206-3s3-85%202-91c-1-11-2-3-4%2065l-1%2024-12%201c-12%200-12%200-9%204%202%201%202%202%201%203l-1%203-1%203-1-3-1-3h-1l-1%202-2%202-3%204-3%201c0%202-5%208-7%208l-5%204c-7%207-19%2010-25%206-4-2-4-2-4-9-1-7%200-9%203-7%204%202%204%201%204-6%201-9%203-13%209-15%206-3%2019-14%2018-16l-2%201-8%202h-13c-2%200-1-4%201-7%203-3%203-4-1-4-6%200-9-4-3-5%202-1%202-1%201-3-2-3-2-4%202-3%203%200%203-1%200-3-2-2-4-12-4-26%200-3-7-8-12-10-4%200-4-4-1-9l3-6%206-2c11%200%2014-1%2014-3l5-2c6%200%209%202%209%205l3%201c5%200%207%201%208%206l1%207%202%2011c0%203%201%203%203%200l3-3%203-1%202-1%202%201-1%201-2%202%201%201c2-1%204%201%202%202l-1%205v4h4l5-1c1-2%200-9-1-10s1-3%204-5c2-2%202-2%203%200%202%201%202%201%202-5%200-3%200-5-1-4s-3%201-3-1l-3-4c-2-3-2-3-4-2l-2%202-5-11-1-4a856%20856%200%2000-15-27l-5-2c-2%200-4-2-6-4l-4-4h-9c0-4-11-5-13-2l-4%201a1524%201524%200%2000-11%203c0%202-2%203-6%203l-2-1-2-2-1%201v1l-3%205-1%204V18l-2-18-1%2016M58%2065v90l-29-1c-28%200-29%200-29%202%200%203%201%203%2034%203h28v-47c-1-44-2-52-4-47m188%2041c0%203-7%2010-10%2011-4%201-4%205-1%206s2%204-1%203c-3%200-6%204-3%206v6c0%205%200%206%202%207%203%202%204%201%202-2-2-2%201-3%206-3l5-1%201-2v-2c-2-2-2-3%201-5%203-3%204-3%206%200l2%203v-3c0-2-1-3-2-3l-2-2c-2-5-4-5-7-1-2%203-3%203-3%201l1-4c2-1%202-3%201-3-3%200-1-3%203-3%203-1%203-1%203-3l-1-4c0-2-3-4-3-2M13%20198l-1%202c-2%201%201%208%203%208%203%201%208%200%207-1l2-2v-6c0-1-1-2-4-2-5-1-6-1-7%201m268%2081l-1%202-3%203-4%203-1%204v2l3-2c6-4%208-2%203%203l-3%203-5%206-4%205c2%200%208-4%208-5l1-1%201%202-1%202-3%206c1%201%206-2%208-5s2-3%201-5-1-2%202-5c4-3%206-9%203-9l-1-4c1-4%200-7-4-5m60%2022c0%202-5%206-6%204-1-1-5%203-5%205-1%202%200%204%203%206l3%204-1-3c-1-5-1-8%201-9l1%202%203%202c1%201%201%201%201-1-1-1%200-3%201-4%205-5%205-6%202-6l-2-1c-1-1-1%200-1%201m18%202c-3%201-3%204%200%207l3%206c1%202%201%203-2%202-3%200-5%201-7%204-4%203-5%204-5%202s-6-9-8-9l-1%204%201%204c4%200%204%203%202%206-3%202-3%203-2%203l2%201%206%201%206%201c1%201%208%200%208-1l-3-2-4-3c0-2%203-5%204-5l3-2%205-4c5-3%205-4%201-9-3-5-6-7-9-6m35%204l-2%204-3%203c-1%202-2%203-1%204l2%205c1%204%208%208%209%206%202-3%201-23-1-23-2-1-1-1-4%201m-256%2011c1%205%201%206%203%208l5%204%207%202c5%201%205%201%205-2l1-2c2%200%208-14%207-14l-15-1-13-1v6m70%2047l-2%206v4h4l22-3c10-1%2010-3%201-4-15%200-21-1-21-4-1-3-3-2-4%201m123%201c-1%204%201%206%204%203l4-1c2%200%201%205-1%205v2l1%203c0%202%208%209%2010%209l2-1c1-2%203-2%204%200%201%201%200%202-1%203-3%203-3%204%201%208%203%203%204%204%203%201s1-6%204-5h3l-2-3-3-5-3-2-5-3c-2-3-4-4-4-2l-1%203-6-2c0-2%203-4%205-3v-2l-3-4c-1-3-3-5-8-6-2-1-3%200-4%202\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/781408494f9a5d4b0943889ed4af0c45/d278e/avatar.jpg","srcSet":"/static/781408494f9a5d4b0943889ed4af0c45/e451c/avatar.jpg 90w,\\n/static/781408494f9a5d4b0943889ed4af0c45/29fd0/avatar.jpg 180w,\\n/static/781408494f9a5d4b0943889ed4af0c45/d278e/avatar.jpg 200w","sizes":"(max-width: 200px) 100vw, 200px"}},"site":{"siteMetadata":{"title":"Riaz Raza","siteUrl":"https://riazraza.com","subtitle":"Cognitive Software Engineer"}}}}')},319:function(e,t,a){e.exports=a.p+"static/grain-c73193744728e8b16814ba01f24898fe.png"},320:function(e,t,a){"use strict";a(10),a(11),a(3),a(56),a(165),a(321);var i=a(20);t.__esModule=!0,t.default=void 0;var r,n=i(a(94)),l=i(a(92)),c=i(a(169)),s=i(a(123)),o=i(a(0)),d=i(a(50)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,v=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),o.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function _(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+o+l+c+a+i+t+n+r+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=o.default.createElement(R,(0,s.default)({src:t},r));return a.length>1?o.default.createElement("picture",null,i(a),n):n},R=o.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,s.default)({sizes:a,srcSet:i,src:r},p,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,l=e.imgStyle,c=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,w=e.itemProp,_=e.loading,x=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:L?1:0,transition:N?"opacity "+v+"ms":"none"},c),O="boolean"==typeof h?"lightgray":h,V={transitionDelay:v+"ms"},k=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&V,{},c,{},f),H={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(m){var j=m,M=j[0];return o.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},o.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),O&&o.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&V)}),M.base64&&o.default.createElement(I,{src:M.base64,spreadProps:H,imageVariants:j,generateSources:E}),M.tracedSVG&&o.default.createElement(I,{src:M.tracedSVG,spreadProps:H,imageVariants:j,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,y(j),o.default.createElement(R,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:_},M,{imageVariants:j}))}}))}if(g){var T=g,q=T[0],W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete W.display,o.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},O&&o.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:O,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},N&&V)}),q.base64&&o.default.createElement(I,{src:q.base64,spreadProps:H,imageVariants:T,generateSources:E}),q.tracedSVG&&o.default.createElement(I,{src:q.tracedSVG,spreadProps:H,imageVariants:T,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,y(T),o.default.createElement(R,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:_},q,{imageVariants:T}))}}))}return null},t}(o.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:N,sizes:C,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([C,d.default.arrayOf(C)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var O=L;t.default=O},321:function(e,t,a){"use strict";a(93)("fixed",(function(e){return function(){return e(this,"tt","","")}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-5b66a69fb67038e917f1.js.map