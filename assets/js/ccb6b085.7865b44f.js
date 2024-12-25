"use strict";(self.webpackChunkdocusaurus_github=self.webpackChunkdocusaurus_github||[]).push([[7634],{375:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>t,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"github-pages/step14","title":"\u90e8\u7f72\u5230 GitHub Pages","description":"\u8fd9\u662f\u6b63\u5e38\u73b0\u8c61\uff0c\u56e0\u4e3a gh-pages \u5206\u652f\u662f\u7528\u6765\u5b58\u653e \u9759\u6001\u6587\u4ef6 \u7684\uff0c\u5b83\u662f\u7531 npm run build \u547d\u4ee4\u751f\u6210\u7684 HTML\u3001CSS \u548c JS \u6587\u4ef6\u7ec4\u6210\u3002\u8fd9\u4e9b\u6587\u4ef6\u662f\u4e3a\u4e86\u90e8\u7f72\u5230 GitHub Pages\uff0c\u76f4\u63a5\u7528\u4e8e\u5c55\u793a\u4f60\u7684 Docusaurus \u7f51\u7ad9\u3002","source":"@site/docs/github-pages/step14.md","sourceDirName":"github-pages","slug":"/github-pages/step14","permalink":"/docs/github-pages/step14","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/github-pages/step14.md","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"sidebar_position":14},"sidebar":"tutorialSidebar","previous":{"title":"\u89e3\u51b3 git pull --rebase \u65f6\u51fa\u73b0 error: cannot pull with rebase: You have unstaged changes. \u9519\u8bef","permalink":"/docs/github-pages/step13"},"next":{"title":"\u89e3\u51b3 Git \u51b2\u7a81","permalink":"/docs/github-pages/step15"}}');var i=n(4848),c=n(8453);const d={sidebar_position:14},l="\u90e8\u7f72\u5230 GitHub Pages",h={},a=[{value:"<strong>\u5982\u4f55\u5904\u7406 <code>gh-pages</code> \u5206\u652f\u6587\u4ef6</strong>",id:"\u5982\u4f55\u5904\u7406-gh-pages-\u5206\u652f\u6587\u4ef6",level:3},{value:"<strong>1. \u5207\u6362\u56de\u6e90\u4ee3\u7801\u5206\u652f</strong>",id:"1-\u5207\u6362\u56de\u6e90\u4ee3\u7801\u5206\u652f",level:3},{value:"<strong>2. \u90e8\u7f72\u65f6\u4e0d\u76f4\u63a5\u4fee\u6539 <code>gh-pages</code> \u5206\u652f</strong>",id:"2-\u90e8\u7f72\u65f6\u4e0d\u76f4\u63a5\u4fee\u6539-gh-pages-\u5206\u652f",level:3},{value:"<strong>3. \u5982\u679c\u4f60\u8bef\u4fee\u6539\u4e86 <code>gh-pages</code> \u5206\u652f</strong>",id:"3-\u5982\u679c\u4f60\u8bef\u4fee\u6539\u4e86-gh-pages-\u5206\u652f",level:3},{value:"<strong>\u603b\u7ed3</strong>",id:"\u603b\u7ed3",level:3}];function o(e){const s={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"\u90e8\u7f72\u5230-github-pages",children:"\u90e8\u7f72\u5230 GitHub Pages"})}),"\n",(0,i.jsxs)(s.p,{children:["\u8fd9\u662f\u6b63\u5e38\u73b0\u8c61\uff0c\u56e0\u4e3a ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\u662f\u7528\u6765\u5b58\u653e ",(0,i.jsx)(s.strong,{children:"\u9759\u6001\u6587\u4ef6"})," \u7684\uff0c\u5b83\u662f\u7531 ",(0,i.jsx)(s.code,{children:"npm run build"})," \u547d\u4ee4\u751f\u6210\u7684 HTML\u3001CSS \u548c JS \u6587\u4ef6\u7ec4\u6210\u3002\u8fd9\u4e9b\u6587\u4ef6\u662f\u4e3a\u4e86\u90e8\u7f72\u5230 GitHub Pages\uff0c\u76f4\u63a5\u7528\u4e8e\u5c55\u793a\u4f60\u7684 Docusaurus \u7f51\u7ad9\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u7684\u662f\u9879\u76ee\u6e90\u4ee3\u7801\uff08\u5982 ",(0,i.jsx)(s.code,{children:"docusaurus.config.ts"})," \u548c\u6587\u6863\u7684 Markdown \u6587\u4ef6\uff09\uff0c\u5b83\u4eec\u901a\u5e38\u4fdd\u5b58\u5728 ",(0,i.jsx)(s.code,{children:"main"})," \u5206\u652f\u6216\u5176\u4ed6\u6e90\u4ee3\u7801\u5206\u652f\u4e2d\uff0c\u800c\u4e0d\u662f ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\u3002"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"\u5982\u4f55\u5904\u7406-gh-pages-\u5206\u652f\u6587\u4ef6",children:(0,i.jsxs)(s.strong,{children:["\u5982\u4f55\u5904\u7406 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\u6587\u4ef6"]})}),"\n",(0,i.jsx)(s.p,{children:"\u5982\u679c\u4f60\u5e0c\u671b\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsxs)(s.strong,{children:["\u4fdd\u7559 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\u7684\u9759\u6001\u6587\u4ef6"]}),"\uff1a\u65e0\u9700\u505a\u989d\u5916\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u4fee\u6539\u9879\u76ee\u5185\u5bb9\uff08\u5982\u6587\u6863\u6216\u914d\u7f6e\u6587\u4ef6\uff09"}),"\uff1a\u5e94\u5207\u6362\u56de\u6e90\u4ee3\u7801\u5206\u652f\uff08\u901a\u5e38\u662f ",(0,i.jsx)(s.code,{children:"main"})," \u5206\u652f\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"1-\u5207\u6362\u56de\u6e90\u4ee3\u7801\u5206\u652f",children:(0,i.jsx)(s.strong,{children:"1. \u5207\u6362\u56de\u6e90\u4ee3\u7801\u5206\u652f"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5207\u6362\u5230\u4e3b\u5206\u652f\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"git checkout main\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u786e\u4fdd\u4e3b\u5206\u652f\u5305\u542b\u6700\u65b0\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"git pull origin main\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5728\u4e3b\u5206\u652f\u4e0a\u4fee\u6539\u6587\u4ef6\uff08\u5982 ",(0,i.jsx)(s.code,{children:"docusaurus.config.ts"})," \u6216 ",(0,i.jsx)(s.code,{children:"docs/"})," \u4e2d\u7684 Markdown \u6587\u4ef6\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"2-\u90e8\u7f72\u65f6\u4e0d\u76f4\u63a5\u4fee\u6539-gh-pages-\u5206\u652f",children:(0,i.jsxs)(s.strong,{children:["2. \u90e8\u7f72\u65f6\u4e0d\u76f4\u63a5\u4fee\u6539 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f"]})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u4fee\u6539\u9879\u76ee\u5185\u5bb9"}),"\uff1a\r\n\u4fee\u6539 ",(0,i.jsx)(s.code,{children:"main"})," \u5206\u652f\u7684\u4ee3\u7801\uff0c\u4f8b\u5982\u66f4\u65b0\u6587\u6863\u5185\u5bb9\u6216\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u6784\u5efa\u5e76\u90e8\u7f72"}),"\uff1a\r\n\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm run build\r\nnpm run deploy\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u8fd9\u4f1a\u81ea\u52a8\u5c06\u751f\u6210\u7684\u9759\u6001\u6587\u4ef6\u63a8\u9001\u5230 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"3-\u5982\u679c\u4f60\u8bef\u4fee\u6539\u4e86-gh-pages-\u5206\u652f",children:(0,i.jsxs)(s.strong,{children:["3. \u5982\u679c\u4f60\u8bef\u4fee\u6539\u4e86 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f"]})}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u4e0d\u5c0f\u5fc3\u5728 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\u4e0a\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u4ee5\u4e0b\u662f\u6062\u590d\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5207\u6362\u5230 ",(0,i.jsx)(s.code,{children:"main"})," \u5206\u652f\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"git checkout main\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5220\u9664\u672c\u5730\u7684 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"git branch -D gh-pages\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u62c9\u53d6\u6700\u65b0\u7684\u8fdc\u7a0b ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"git fetch origin gh-pages\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u4fee\u590d ",(0,i.jsx)(s.code,{children:"gh-pages"}),"\uff0c\u53ea\u9700\u91cd\u65b0\u90e8\u7f72\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm run deploy\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"\u603b\u7ed3",children:(0,i.jsx)(s.strong,{children:"\u603b\u7ed3"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u6e90\u4ee3\u7801\u548c\u6587\u6863\u7684\u5f00\u53d1"}),"\uff1a\u5728 ",(0,i.jsx)(s.code,{children:"main"})," \u5206\u652f\u8fdb\u884c\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u9759\u6001\u6587\u4ef6\u7684\u90e8\u7f72"}),"\uff1a\u7531 ",(0,i.jsx)(s.code,{children:"npm run deploy"})," \u81ea\u52a8\u5904\u7406\uff0c\u5c06\u7ed3\u679c\u63a8\u9001\u5230 ",(0,i.jsx)(s.code,{children:"gh-pages"})," \u5206\u652f\u3002"]}),"\n"]})]})}function t(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var r=n(6540);const i={},c=r.createContext(i);function d(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);