"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[93089,96058],{99257:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(63366),r=a(67294),l=a(86010),i=a(64926),s=a(36742),c="sidebar_SrOn",o="sidebarItemTitle_jISh",m="categoryHeader_Xx2W",d="sidebarItemList_UfcF",u="sidebarItem_v502",g="sidebarItemLink_yJnx",v="sidebarItemLinkActive_Aygi",h=a(24973);function p(e){var t=e.sidebar;if(0===t.items.length)return null;var a={};return t.items[0].permalink.indexOf("/blog/")>-1?t.items.forEach((function(e){if(e.permalink.indexOf("-")>-1){var t=e.permalink.split("-")[0].split("/blog/")[1];a[t]?a[t].push(e):a[t]=[e]}})):a={"":t.items},r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:d},Object.keys(a).map((function(e,t){return r.createElement(r.Fragment,null,e.length>0&&r.createElement("h4",{key:t,className:m},e),a[e].map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:v},e.title))})))}))))}var E=a(571),f=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,n.Z)(e,f),o=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(E.Z,{toc:a})))))}},44428:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),r=a(52263),l=a(99257),i=a(43146),s=a(36742),c=a(24973);var o=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(13018);var d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,c=(0,r.Z)().siteConfig.title,d=t.blogDescription,u=t.blogTitle,g="/"===t.permalink?c:u;return n.createElement(l.Z,{title:g,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o,{metadata:t}))}},43146:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),r=a(86010),l=a(3905),i=a(24973),s=a(36742),c=a(13018),o=a(96845),m=a(41217),d=a(86146),u="blogPostTitle_d4p0",g="blogPostData_-Im+",v="blogPostDetailsFull_xD8n";var h=function(e){var t,a,h,p=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,f=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=b.date,w=b.formattedDate,T=b.permalink,y=b.tags,L=b.readingTime,x=b.title,C=b.editUrl,I=f.author,M=f.image,P=f.keywords,A=f.author_url||f.authorURL,B=f.author_title||f.authorTitle,O=f.author_image_url||f.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:P,image:M}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(h=Z?"h1":"h2",n.createElement("header",null,n.createElement(h,{className:u},Z?x:n.createElement(s.Z,{to:T},x)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},w),L&&n.createElement(n.Fragment,null," \xb7 ",p(L))),n.createElement("div",{className:"avatar margin-vert--md"},O&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:A},n.createElement("img",{src:O,alt:I})),n.createElement("div",{className:"avatar__intro"},I&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:A},I)),n.createElement("small",{className:"avatar__subtitle"},B)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},E)),(y.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},y.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),y.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:C})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:b.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},86146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(24973),l=a(87462),i=a(63366),s=a(86010),c="iconEdit_mS5F",o=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return c},Z:function(){return o}});var n=a(67294),r=a(86010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,c=document.getElementsByClassName(e);r<c.length&&!s;){var o=c[r],m=o.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),o.classList.add(t),i(o),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_vrFS",s="table-of-contents__link";function c(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(c,{toc:t}))}},42086:function(e,t,a){var n=a(87462),r=a(63366),l=a(67294),i=["width","height"];t.Z=function(e){e.width,e.height;var t=(0,r.Z)(e,i);return l.createElement("svg",(0,n.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},t,{"p-id":"557",width:"20",height:"20"}),l.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);