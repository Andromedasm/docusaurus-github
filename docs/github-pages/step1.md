---
sidebar_position: 1
---

# 使用 Docusaurus 部署到 GitHub Pages

### **1. 初始化 Docusaurus 项目**

1. 确保你的电脑已安装 [Node.js](https://nodejs.org/) 和 npm 或 yarn。
2. 打开终端，运行以下命令来初始化一个 Docusaurus 项目：
   ```bash
   npx create-docusaurus@latest my-docusaurus-project classic
   cd my-docusaurus-project
   ```
   这里 `my-docusaurus-project` 是项目文件夹的名称，你可以根据需要更改。

3. 安装 TypeScript 和类型定义：
   ```bash
   npm install --save-dev typescript @types/react @types/node
   ```

---

### **2. 配置 TypeScript**

1. 在项目根目录创建一个 `tsconfig.json` 文件：
   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "module": "commonjs",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "resolveJsonModule": true
     },
     "include": ["src/**/*", "docusaurus.config.ts"]
   }
   ```

2. 将 `docusaurus.config.js` 重命名为 `docusaurus.config.ts`，并更新其内容为 TypeScript 格式。例如：
   ```typescript
   import { Config } from '@docusaurus/types';

   const config: Config = {
     title: 'My Docusaurus Project',
     tagline: 'Documentation made easy',
     url: 'https://yourusername.github.io',
     baseUrl: '/my-docusaurus-project/',
     onBrokenLinks: 'throw',
     onBrokenMarkdownLinks: 'warn',
     favicon: 'img/favicon.ico',
     organizationName: 'yourusername', // 替换为你的 GitHub 用户名
     projectName: 'my-docusaurus-project', // 替换为你的项目名

     presets: [
       [
         'classic',
         {
           docs: {
             sidebarPath: require.resolve('./sidebars.js'),
           },
           blog: {
             showReadingTime: true,
           },
           theme: {
             customCss: require.resolve('./src/css/custom.css'),
           },
         },
       ],
     ],
   };

   export default config;
   ```

---

### **3. 创建 GitHub 仓库**

1. 登录 GitHub 并新建一个仓库。
2. 将项目文件夹与 GitHub 仓库关联：
   ```bash
   git init
   git remote add origin https://github.com/yourusername/my-docusaurus-project.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

---

### **4. 部署到 GitHub Pages**

1. 安装 `gh-pages`：
   ```bash
   npm install --save-dev gh-pages
   ```

2. 在 `package.json` 中添加部署脚本：
   ```json
   "scripts": {
     "deploy": "docusaurus deploy",
     "build": "docusaurus build",
     "start": "docusaurus start"
   }
   ```

3. 修改 `docusaurus.config.ts`，设置正确的部署路径：
   ```typescript
   const config: Config = {
     // 其他配置项...
     url: 'https://yourusername.github.io',
     baseUrl: '/my-docusaurus-project/',
   };
   ```

4. 部署到 GitHub Pages：
   ```bash
   npm run build
   npm run deploy
   ```

---

### **5. 验证部署**

1. 打开浏览器，访问：
   ```
   https://yourusername.github.io/my-docusaurus-project/
   ```
