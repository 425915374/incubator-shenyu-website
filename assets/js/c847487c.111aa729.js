"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2262],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3056:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"MetaData Concept Design",keywords:["soul"],description:"MetaData Concept Design"},l=void 0,u={unversionedId:"design/meta-data",id:"version-2.3.0/design/meta-data",isDocsHomePage:!1,title:"MetaData Concept Design",description:"MetaData Concept Design",source:"@site/versioned_docs/version-2.3.0/design/meta-data.md",sourceDirName:"design",slug:"/design/meta-data",permalink:"/docs/2.3.0/design/meta-data",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.3.0/design/meta-data.md",version:"2.3.0",frontMatter:{title:"MetaData Concept Design",keywords:["soul"],description:"MetaData Concept Design"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Data Synchronization Design",permalink:"/docs/2.3.0/design/data-sync"},next:{title:"Dict Management",permalink:"/docs/2.3.0/admin/dictionary-management"}},p=[{value:"Description",id:"description",children:[]},{value:"Technical Solutions",id:"technical-solutions",children:[]},{value:"MetaData Storage",id:"metadata-storage",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This article mainly explains the concept,design of metadata and how to connect in the soul gateway.")),(0,i.kt)("h2",{id:"technical-solutions"},"Technical Solutions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a new table in the database,and data can synchronize to the JVM memory of gateway according to the data synchronization scheme.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Table Structure:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE  IF NOT EXISTS `meta_data` (\n  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'id',\n  `app_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'application name',\n  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'path,not repeatable',\n  `path_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'path description',\n  `rpc_type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'rpc type',\n  `service_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'service name',\n  `method_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'method name',\n  `parameter_types` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'multiple parameter types, split by comma',\n  `rpc_ext` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'rpc extension information,json format',\n  `date_created` datetime(0) NOT NULL COMMENT 'create date',\n  `date_updated` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT 'update date',\n  `enabled` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'enable status',\n  PRIMARY KEY (`id`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Metadata design as below,the most important is using it in dubbo's generalization call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pay attention to the field ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),",we will match specific data according to your field path during requesting gateway,and then carry out the follow-up process.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pay attention to the field ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc_ext"),",if it is a dubbo service interface and service interface has group and version field,this field exists.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"dubbo field structure as below,then we store json format string."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"   public static class RpcExt {  \n      private String group;\n      private String version;\n      private String loadbalance;\n      private Integer retries;\n      private Integer timeout;\n   }\n")))),(0,i.kt)("h2",{id:"metadata-storage"},"MetaData Storage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A dubbo interface corresponds to a meta data."),(0,i.kt)("li",{parentName:"ul"},"SpringCloud protocol, only store one record, path: ",(0,i.kt)("inlineCode",{parentName:"li"},"/contextPath/**"),"."),(0,i.kt)("li",{parentName:"ul"},"Http service, no data.")))}d.isMDXComponent=!0}}]);