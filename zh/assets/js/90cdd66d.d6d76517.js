"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[89318],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return c}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),u=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,b=m["".concat(i,".").concat(c)]||m[c]||s[c]||o;return n?t.createElement(b,l(l({ref:a},d),{},{components:n})):t.createElement(b,l({ref:a},d))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89030:function(e,a,n){n.r(a),n.d(a,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],p={sidebar_position:3,title:"Dubbo\u63a5\u5165soul\u7f51\u5173",keywords:["soul"],description:"dubbo\u63a5\u5165soul\u7f51\u5173"},i=void 0,u={unversionedId:"users-guide/dubbo-proxy",id:"version-2.3.0/users-guide/dubbo-proxy",isDocsHomePage:!1,title:"Dubbo\u63a5\u5165soul\u7f51\u5173",description:"dubbo\u63a5\u5165soul\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/users-guide/dubbo-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/dubbo-proxy",permalink:"/zh/docs/2.3.0/users-guide/dubbo-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/users-guide/dubbo-proxy.md",version:"2.3.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Dubbo\u63a5\u5165soul\u7f51\u5173",keywords:["soul"],description:"dubbo\u63a5\u5165soul\u7f51\u5173"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Http\u7528\u6237",permalink:"/zh/docs/2.3.0/users-guide/http-proxy"},next:{title:"SpringCloud\u63a5\u5165Soul\u7f51\u5173",permalink:"/zh/docs/2.3.0/users-guide/spring-cloud-proxy"}},d=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5f15\u5165\u7f51\u5173\u5bf9dubbo\u652f\u6301\u7684\u63d2\u4ef6",id:"\u5f15\u5165\u7f51\u5173\u5bf9dubbo\u652f\u6301\u7684\u63d2\u4ef6",children:[]},{value:"dubbo\u670d\u52a1\u63a5\u5165\u7f51\u5173\uff0c\u53ef\u4ee5\u53c2\u8003\uff1asoul-examples-dubbo",id:"dubbo\u670d\u52a1\u63a5\u5165\u7f51\u5173\u53ef\u4ee5\u53c2\u8003soul-examples-dubbo",children:[]},{value:"dubbo \u63d2\u4ef6\u8bbe\u7f6e",id:"dubbo-\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",children:[]},{value:"dubbo\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e",id:"dubbo\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e",children:[]},{value:"\u670d\u52a1\u6cbb\u7406",id:"\u670d\u52a1\u6cbb\u7406",children:[]},{value:"\u5927\u767d\u8bdd\u8bb2\u89e3\u5982\u679c\u901a\u8fc7http --&gt; \u7f51\u5173--&gt; dubbo provider",id:"\u5927\u767d\u8bdd\u8bb2\u89e3\u5982\u679c\u901a\u8fc7http----\u7f51\u5173---dubbo-provider",children:[]}],s={toc:d};function m(e){var a=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6b64\u7bc7\u6587\u7ae0\u662fdubbo\u7528\u6237\u4f7f\u7528dubbo\u63d2\u4ef6\u652f\u6301\uff0c\u4ee5\u53ca\u81ea\u5df1\u7684dubbo\u670d\u52a1\u63a5\u5165soul\u7f51\u5173\u7684\u6559\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 alibaba dubbo\uff08< 2.7.x\uff09 \u4ee5\u53ca apache dubbo (>=2.7.x)\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u7684\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"li"},"soul-admin"),"\uff0c\u4ee5\u53ca",(0,o.kt)("a",{parentName:"li",href:"./soul-set-up"},"\u642d\u5efa\u73af\u5883")," Ok\u3002")),(0,o.kt)("h2",{id:"\u5f15\u5165\u7f51\u5173\u5bf9dubbo\u652f\u6301\u7684\u63d2\u4ef6"},"\u5f15\u5165\u7f51\u5173\u5bf9dubbo\u652f\u6301\u7684\u63d2\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"alibaba dubbo \u7528\u6237, dubbo\u7248\u672c\u6362\u6210\u4f60\u7684\uff0c\u6ce8\u518c\u4e2d\u5fc3\u7684jar\u5305\u6362\u6210\u4f60\u7684\uff0c\u4ee5\u4e0b\u662f\u53c2\u8003\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul alibaba dubbo plugin start--\x3e\n<dependency>\n  <groupId>org.dromara</groupId>\n  <artifactId>soul-spring-boot-starter-plugin-alibaba-dubbo</artifactId>\n   <version>${last.version}</version>\n</dependency>\n\x3c!-- soul  alibaba dubbo plugin end--\x3e\n<dependency>\n  <groupId>com.alibaba</groupId>\n  <artifactId>dubbo</artifactId>\n  <version>2.6.5</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-client</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-framework</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-recipes</artifactId>\n  <version>4.0.1</version>\n</dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"apache dubbo \u7528\u6237\uff0cdubbo\u7248\u672c\u6362\u6210\u4f60\u7684\uff0c\u4f7f\u7528\u4ec0\u4e48\u6ce8\u518c\u4e2d\u5fc3\u6362\u6210\u4f60\u7684,\u4ee5\u4e0b\u662f\u53c2\u8003,\u4f7f\u7528\u4ec0\u4e48\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5c31\u5f15\u5165\u5565\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul apache dubbo plugin start--\x3e\n<dependency>\n   <groupId>org.dromara</groupId>\n   <artifactId>soul-spring-boot-starter-plugin-apache-dubbo</artifactId>\n   <version>${last.version}</version>\n</dependency>\n\x3c!--soul apache dubbo plugin end--\x3e\n\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo</artifactId>\n   <version>2.7.5</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency start --\x3e\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo-registry-nacos</artifactId>\n   <version>2.7.5</version>\n</dependency>\n<dependency>\n   <groupId>com.alibaba.nacos</groupId>\n   <artifactId>nacos-client</artifactId>\n   <version>1.1.4</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency  end--\x3e\n\n\x3c!-- Dubbo zookeeper registry dependency start--\x3e\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-client</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-framework</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-recipes</artifactId>\n   <version>4.0.1</version>\n</dependency>\n\x3c!-- Dubbo zookeeper registry dependency end --\x3e\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u91cd\u542f\u7f51\u5173\u670d\u52a1\u3002"))),(0,o.kt)("h2",{id:"dubbo\u670d\u52a1\u63a5\u5165\u7f51\u5173\u53ef\u4ee5\u53c2\u8003soul-examples-dubbo"},"dubbo\u670d\u52a1\u63a5\u5165\u7f51\u5173\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"soul-examples-dubbo")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"alibaba dubbo \u7528\u6237"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"springboot"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.dromara</groupId>\n     <artifactId>soul-spring-boot-starter-client-alibaba-dubbo</artifactId>\n     <version>${last.version}</version>\n</dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6ce8\u518c\u4e2d\u5fc3\u8be6\u7ec6\u63a5\u5165\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"../register-center/register-center-access"},"\u6ce8\u518c\u4e2d\u5fc3\u63a5\u5165"),"\u3002")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"spring"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56 \uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>org.dromara</groupId>\n   <artifactId>soul-client-alibaba-dubbo</artifactId>\n   <version>${last.version}</version>\n</dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684 bean\u5b9a\u4e49\u7684xml\u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b \uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id ="alibabaDubboServiceBeanPostProcessor" class ="org.dromara.soul.client.alibaba.dubbo.AlibabaDubboServiceBeanPostProcessor">\n   <constructor-arg  ref="soulRegisterCenterConfig"/>\n</bean>\n\n<bean id="soulRegisterCenterConfig" class="org.dromara.soul.register.common.config.SoulRegisterCenterConfig">\n       <property name="registerType" value="http"/>\n       <property name="serverList" value="http://localhost:9095"/>\n       <property name="props">\n          <map>\n            <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n            <entry key="appName" value="\u4f60\u7684\u540d\u5b57"/>\n            <entry key="ifFull" value="false"/>\n          </map>\n        </property>\n  </bean>\n')))))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"apache dubbo \u7528\u6237"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"springboot"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-client-apache-dubbo</artifactId>\n    <version>${last.version}</version>\n</dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6ce8\u518c\u4e2d\u5fc3\u8be6\u7ec6\u63a5\u5165\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"../register-center/register-center-access"},"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e"),".")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"spring"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56 \uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>org.dromara</groupId>\n   <artifactId>soul-client-apache-dubbo</artifactId>\n   <version>${last.version}</version>\n</dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684 bean\u5b9a\u4e49\u7684xml\u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b \uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'  <bean id ="apacheDubboServiceBeanPostProcessor" class ="org.dromara.soul.client.apache.dubbo.ApacheDubboServiceBeanPostProcessor">\n       <constructor-arg  ref="soulRegisterCenterConfig"/>\n  </bean>\n\n  <bean id="soulRegisterCenterConfig" class="org.dromara.soul.register.common.config.SoulRegisterCenterConfig">\n       <property name="registerType" value="http"/>\n       <property name="serverList" value="http://localhost:9095"/>\n       <property name="props">\n          <map>\n            <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n            <entry key="appName" value="\u4f60\u7684\u540d\u5b57"/>\n            <entry key="ifFull" value="false"/>\n          </map>\n        </property>\n  </bean>\n')))))))),(0,o.kt)("h2",{id:"dubbo-\u63d2\u4ef6\u8bbe\u7f6e"},"dubbo \u63d2\u4ef6\u8bbe\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-admin")," \u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5176\u6b21\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo")," \u63d2\u4ef6\u4e2d\u914d\u7f6e\u4f60\u7684\u6ce8\u518c\u5730\u5740\uff0c\u6216\u8005\u5176\u4ed6\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{"register":"zookeeper://localhost:2181"}   or {"register":"nacos://localhost:8848"}\n')),(0,o.kt)("h2",{id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"},"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f60dubbo\u670d\u52a1\u5b9e\u73b0\u7c7b\u7684\uff0c\u65b9\u6cd5\u4e0a\u52a0\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"@SoulDubboClient")," \u6ce8\u89e3\uff0c\u8868\u793a\u8be5\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8\u4f60\u7684\u63d0\u4f9b\u8005\uff0c\u8f93\u51fa\u65e5\u5fd7 ",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo client register success")," \u5927\u529f\u544a\u6210\uff0c\u4f60\u7684dubbo\u63a5\u53e3\u5df2\u7ecf\u53d1\u5e03\u5230 soul\u7f51\u5173.\u5982\u679c\u8fd8\u6709\u4e0d\u61c2\u7684\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-test-dubbo"),"\u9879\u76ee\u3002"))),(0,o.kt)("h2",{id:"dubbo\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e"},"dubbo\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bf4\u767d\u4e86\uff0c\u5c31\u662f\u901a\u8fc7http\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684dubbo\u670d\u52a1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"soul\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"contextPath")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6bd4\u5982\u4f60\u6709\u4e00\u4e2a order\u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u5b83\u7684\u6ce8\u518c\u8def\u5f84 /order/test/save\n\n# \u73b0\u5728\u5c31\u662f\u901a\u8fc7 post\u65b9\u5f0f\u8bf7\u6c42\u7f51\u5173\uff1ahttp://localhost:9195/order/test/save\n\n# \u5176\u4e2d localhost:9195 \u4e3a\u7f51\u5173\u7684ip\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f9195 \uff0c/order \u662f\u4f60dubbo\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 contextPath\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53c2\u6570\u4f20\u9012\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7 http post \u65b9\u5f0f\u8bbf\u95ee\u7f51\u5173\uff0c\u901a\u8fc7body\uff0cjson\u7c7b\u578b\u4f20\u9012\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u66f4\u591a\u53c2\u6570\u7c7b\u578b\u4f20\u9012\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"soul-examples-dubbo")," \u4e2d\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u4ee5\u53ca\u53c2\u6570\u4f20\u9012\u65b9\u5f0f\u3002")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5355\u4e2ajava bean\u53c2\u6570\u7c7b\u578b \uff08\u9ed8\u8ba4\uff09")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u591a\u53c2\u6570\u7c7b\u578b\u652f\u6301\uff0c\u5728\u7f51\u5173\u7684yaml \u914d\u7f6e\u4e2d\u65b0\u589e\u5982\u4e0b\u914d\u7f6e\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"soul :\n    dubbo :\n      parameter: multi\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b9e\u73b0\u591a\u53c2\u6570\u652f\u6301:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u4f60\u642d\u5efa\u7684\u7f51\u5173\u9879\u76ee\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a\u7c7b A\uff0c\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.web.dubbo.DubboParamResolveService"),"\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface DubboParamResolveService {\n\n   /**\n    * Build parameter pair.\n    * this is Resolve http body to get dubbo param.\n    *\n    * @param body           the body\n    * @param parameterTypes the parameter types\n    * @return the pair\n    */\n   Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"body"),"\u4e3ahttp\u4e2dbody\u4f20\u7684json\u5b57\u7b26\u4e32\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"parameterTypes"),": \u5339\u914d\u5230\u7684\u65b9\u6cd5\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u5982\u679c\u6709\u591a\u4e2a\uff0c\u5219\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},","),"\u5206\u5272\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pair\u4e2d\uff0cleft\u4e3a\u53c2\u6570\u7c7b\u578b\uff0cright\u4e3a\u53c2\u6570\u503c\uff0c\u8fd9\u662fdubbo\u6cdb\u5316\u8c03\u7528\u7684\u6807\u51c6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u628a\u4f60\u7684\u7c7b\u6ce8\u518c\u6210Spring\u7684bean\uff0c\u8986\u76d6\u9ed8\u8ba4\u7684\u5b9e\u73b0\u3002"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"}," @Bean\n public DubboParamResolveService A() {\n         return new A();\n }\n")))),(0,o.kt)("h2",{id:"\u670d\u52a1\u6cbb\u7406"},"\u670d\u52a1\u6cbb\u7406"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6807\u7b7e\u8def\u7531"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65f6\u5728header\u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"Dubbo_Tag_Route"),"\uff0c\u5e76\u8bbe\u7f6e\u5bf9\u5e94\u7684\u503c\uff0c\u4e4b\u540e\u5f53\u524d\u8bf7\u6c42\u5c31\u4f1a\u8def\u7531\u5230\u6307\u5b9atag\u7684provider\uff0c\u53ea\u5bf9\u5f53\u524d\u8bf7\u6c42\u6709\u6548\uff1b"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u670d\u52a1\u63d0\u4f9b\u8005\u76f4\u8fde"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"li"},"@SoulDubboClient"),"\u6ce8\u89e3\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"url"),"\u5c5e\u6027\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539Admin\u63a7\u5236\u53f0\u4fee\u6539\u5143\u6570\u636e\u5185\u7684url\u5c5e\u6027\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u6240\u6709\u8bf7\u6c42\u6709\u6548\uff1b"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53c2\u6570\u9a8c\u8bc1\u548c\u81ea\u5b9a\u4e49\u5f02\u5e38"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},'validation="soulValidation"'),";")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u63a5\u53e3\u4e2d\u629b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"SoulException"),"\u65f6\uff0c\u5f02\u5e38\u4fe1\u606f\u4f1a\u8fd4\u56de\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u663e\u5f0f\u629b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"SoulException"),"\uff1b"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Service(validation = "soulValidation")\npublic class TestServiceImpl implements TestService {\n\n    @Override\n    @SoulDubboClient(path = "/test", desc = "test method")\n    public String test(@Valid HelloServiceRequest name) throws SoulException {\n        if (true){\n            throw new SoulException("Param binding error.");\n        }\n        return "Hello " + name.getName();\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class HelloServiceRequest implements Serializable {\n\n    private static final long serialVersionUID = -5968745817846710197L;\n\n    @NotEmpty(message = "name cannot be empty")\n    private String name;\n\n    @NotNull(message = "age cannot be null")\n    private Integer age;\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public Integer getAge() {\n        return age;\n    }\n\n    public void setAge(Integer age) {\n        this.age = age;\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53d1\u9001\u8bf7\u6c42"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": ""\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fd4\u56de"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "name cannot be empty,age cannot be null"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5f53\u6309\u7167\u8981\u6c42\u4f20\u9012\u8bf7\u6c42\u53c2\u6570\u65f6\uff0c\u4f1a\u8fd4\u56de\u81ea\u5b9a\u4e49\u5f02\u5e38\u7684\u4fe1\u606f"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "Param binding error."\n}\n')))))),(0,o.kt)("h2",{id:"\u5927\u767d\u8bdd\u8bb2\u89e3\u5982\u679c\u901a\u8fc7http----\u7f51\u5173---dubbo-provider"},"\u5927\u767d\u8bdd\u8bb2\u89e3\u5982\u679c\u901a\u8fc7http --\x3e \u7f51\u5173--\x3e dubbo provider"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bf4\u767d\u4e86\uff0c\u5c31\u662f\u628ahttp\u8bf7\u6c42\uff0c\u8f6c\u6210dubbo\u534f\u8bae\uff0c\u5185\u90e8\u4f7f\u7528dubbo\u6cdb\u5316\u6765\u8fdb\u884c\u8c03\u7528\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9996\u5148\u4f60\u8981\u56de\u60f3\u4e0b\uff0c\u4f60\u7684dubbo\u670d\u52a1\u5728\u63a5\u5165\u7f51\u5173\u7684\u65f6\u5019\uff0c\u662f\u4e0d\u662f\u52a0\u4e86\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"@SoulDubboClient")," \u6ce8\u89e3\uff0c\u91cc\u9762\u662f\u4e0d\u662f\u6709\u4e2apath\u5b57\u6bb5\u6765\u6307\u5b9a\u4f60\u8bf7\u6c42\u7684\u8def\u5f84\uff1f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f60\u662f\u4e0d\u662f\u8fd8\u5728yml\u4e2d\u914d\u7f6e\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"contextPath"),"?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u8fd8\u8bb0\u5f97\uff0c\u90a3\u6211\u4eec\u5c31\u5f00\u59cb\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5047\u5982\u4f60\u6709\u4e00\u4e2a\u8fd9\u6837\u7684\u65b9\u6cd5, contextPath \u914d\u7f6e\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"/dubbo")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n@SoulDubboClient(path = "/insert", desc = "\u63d2\u5165\u4e00\u6761\u6570\u636e")\npublic DubboTest insert(final DubboTest dubboTest) {\n    return dubboTest;\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u90a3\u4e48\u6211\u4eec\u8bf7\u6c42\u7684\u8def\u5f84\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/dubbo/insert"),"\uff0c\u518d\u8bf4\u4e00\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:9195"),"\u662f\u7f51\u5173\u7684\u57df\u540d\uff0c\u5982\u679c\u4f60\u66f4\u6539\u4e86\uff0c\u8fd9\u91cc\u4e5f\u8981\u6539\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u90a3\u4e48\u8bf7\u6c42\u53c2\u6570\u5462\uff1f ",(0,o.kt)("inlineCode",{parentName:"p"},"DubboTest")," \u662f\u4e00\u4e2ajavabean\u5bf9\u8c61\uff0c\u67092\u4e2a\u5b57\u6bb5\uff0cid\u4e0ename \uff0c\u90a3\u4e48\u6211\u4eec\u901a\u8fc7body\u4e2d\u4f20\u9012\u8fd9\u4e2a\u5bf9\u8c61\u7684json\u6570\u636e\u5c31\u597d\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{"id":"1234","name":"XIAO5y"}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u7684\u63a5\u53e3\u4e2d\uff0c\u6ca1\u6709\u53c2\u6570\uff0c\u90a3\u4e48body\u4f20\u503c\u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"{}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u7684\u63a5\u53e3\u6709\u5f88\u591a\u4e2a\u53c2\u6570\uff1f\u5f80\u4e0a\u770b\u4e00\u70b9\uff0c\u6709\u4ecb\u7ecd\u3002"))))}m.isMDXComponent=!0}}]);