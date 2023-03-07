"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[610],{6165:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7294),l=a(6010),n=a(6698),s=a(6742);const o={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var i=a(4973);function c(e){let{sidebar:t}=e;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:o.sidebarItemList},t.items.map((e=>r.createElement("li",{key:e.permalink,className:o.sidebarItem},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title))))))}var m=a(571);const d=function(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return r.createElement(n.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},i&&r.createElement("aside",{className:"col col--3"},r.createElement(c,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(m.Z,{toc:a})))))}},4884:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),o=a(6742),i=a(4996),c=a(941),m=a(6845),d=a(6146);const u={blogPostTitle:"blogPostTitle_d4p0",blogPostData:"blogPostData_-Im+",blogPostDetailsFull:"blogPostDetailsFull_xD8n"};var g=a(7682);const h={image:"image_9q7L"};const p=function(e){let{author:t}=e;const{name:a,title:l,url:n,imageURL:s}=t;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:h.image,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},b={authorCol:"authorCol_8c0z"};function E(e){let{authors:t,assets:a}=e;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>r.createElement("div",{className:(0,l.Z)("col col--6",b.authorCol),key:t},r.createElement(p,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const f=function(e){const t=function(){const{selectMessage:e}=(0,c.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.C)(),{children:h,frontMatter:p,assets:b,metadata:f,truncated:v,isBlogPostPage:_=!1}=e,{date:N,formattedDate:k,permalink:Z,tags:P,readingTime:T,title:L,editUrl:C,authors:I}=f,w=b.image??p.image;return r.createElement("article",{className:_?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=_?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:u.blogPostTitle,itemProp:"headline"},_?L:r.createElement(o.Z,{itemProp:"url",to:Z},L)),r.createElement("div",{className:(0,l.Z)(u.blogPostData,"margin-vert--md")},r.createElement("time",{dateTime:N,itemProp:"datePublished"},k),void 0!==T&&r.createElement(r.Fragment,null," \xb7 ",t(T))),r.createElement(E,{authors:I,assets:b}))})(),w&&r.createElement("meta",{itemProp:"image",content:a(w,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:m.Z},h)),(P.length>0||v)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[u.blogPostDetailsFull]:_})},P.length>0&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":!_})},r.createElement(g.Z,{tags:P})),_&&C&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:C})),!_&&v&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(o.Z,{to:f.permalink,"aria-label":`Read more about ${L}`},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(7294),l=a(6742),n=a(6165),s=a(4884),o=a(4973),i=a(941);function c(e){const{metadata:t,items:a,sidebar:c}=e,{allTagsPath:m,name:d,count:u}=t,g=function(){const{selectMessage:e}=(0,i.c2)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(u),tagName:d});return r.createElement(n.Z,{title:h,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:m},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6146:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7294),l=a(4973),n=a(7462),s=a(6010);const o="iconEdit_mS5F",i=e=>{let{className:t,...a}=e;return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(941);function m(e){let{editUrl:t}=e;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},r.createElement(i,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{a.d(t,{r:()=>g,Z:()=>h});var r=a(7294),l=a(6010),n=a(941);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function o(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((e=>s(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:a[a.indexOf(r)-1]??null}return a[a.length-1]}function i(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,n.LU)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,r.useRef)(void 0),a=i();(0,r.useEffect)((()=>{const{linkClassName:r,linkActiveClassName:l}=e;function n(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),n=o({anchorTopOffset:a.current}),s=e.find((e=>n&&n.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}),[e,a])},m={tableOfContents:"tableOfContents_vrFS",docItemContainer:"docItemContainer_VKW9"},d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function g(e){let{toc:t,isChild:a}=e;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))))):null}const h=function(e){let{toc:t}=e;return c(u),r.createElement("div",{className:(0,l.Z)(m.tableOfContents,"thin-scrollbar")},r.createElement(g,{toc:t}))}},7211:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),l=a(6010),n=a(6742);const s={tag:"tag_WK-t",tagRegular:"tagRegular_LXbV",tagWithCount:"tagWithCount_S5Zl"};const o=function(e){const{permalink:t,name:a,count:o}=e;return r.createElement(n.Z,{href:t,className:(0,l.Z)(s.tag,{[s.tagRegular]:!o,[s.tagWithCount]:o})},a,o&&r.createElement("span",null,o))}},7682:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),l=a(6010),n=a(4973),s=a(7211);const o={tags:"tags_NBRY",tag:"tag_F03v"};function i(e){let{tags:t}=e;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return r.createElement("li",{key:a,className:o.tag},r.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);