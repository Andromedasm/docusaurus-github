---
sidebar_position: 18
---

# 优化 GitHub Pages 部署配置


你的配置总体是正确的，尤其是对于绑定自定义域名的场景。但这里提供一些优化建议和解释，以确保配置更加稳健。

---

### **1. 配置检查**
#### 当前配置：
```typescript
// Set the production url of your site here
url: 'https://docs.marupopo.com',

// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'
baseUrl: '/',

// GitHub pages deployment config.
// If you aren't using GitHub pages, you don't need these.
organizationName: 'Andromedasm', // Usually your GitHub org/user name.
projectName: 'docusaurus-github', // Usually your repo name.
```

#### **解释**
1. **`url`**:
   - 正确填写了自定义域名 `https://docs.marupopo.com`。
   - 如果使用 HTTPS 协议（推荐），确保 `Enforce HTTPS` 已在 GitHub Pages 的设置中启用。

2. **`baseUrl`**:
   - 自定义域名时，`baseUrl` 应设置为 `'/'`，这是正确的。
   - 不需要设置为仓库名称（如 `/docusaurus-github/`），因为自定义域名不会使用仓库名称作为路径。

3. **`organizationName`** 和 **`projectName`**:
   - `organizationName` 是你的 GitHub 用户名，`Andromedasm`，这是正确的。
   - `projectName` 是你的仓库名，`docusaurus-github`，也正确。

---

### **2. 是否需要额外设置？**

#### **确保 `CNAME` 文件存在**
Docusaurus 会在 `npm run deploy` 时，将静态文件推送到 `gh-pages` 分支。为了让 GitHub Pages 识别你的自定义域名，必须确保 `CNAME` 文件被正确生成。

**检查 `CNAME` 文件生成方式**：
- 在 `static/` 目录下创建 `CNAME` 文件，内容为你的自定义域名：
  ```
  docs.marupopo.com
  ```
- 确保在运行 `npm run deploy` 后，该文件出现在 `gh-pages` 分支中。

---

### **3. 完整示例配置**
以下是一个完整的 Docusaurus 配置模板，基于你的场景优化：

```typescript
const config = {
  title: 'My Docusaurus Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Deployment URL for your site
  url: 'https://docs.marupopo.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'Andromedasm', // Your GitHub username
  projectName: 'docusaurus-github', // Your GitHub repository name

  // Handle broken links and markdown links
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Theme and other configurations
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/Andromedasm/docusaurus-github/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Andromedasm/docusaurus-github/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Docusaurus Site',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/Andromedasm/docusaurus-github', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Tutorial', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'Twitter', href: 'https://twitter.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/Andromedasm/docusaurus-github' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project. Built with Docusaurus.`,
    },
  },
};

export default config;
```

---

### **4. 测试和验证**

1. **运行以下命令部署**：
   ```bash
   npm run build
   npm run deploy
   ```

2. **检查部署结果**：
   - 确保 `gh-pages` 分支中存在 `CNAME` 文件。
   - 确保自定义域名 `https://docs.marupopo.com` 能正确访问。

3. **检查 GitHub Pages 设置**：
   - 在 **Settings > Pages** 中确认：
     - `Source` 为 `gh-pages`。
     - 自定义域名为 `docs.marupopo.com`。
     - `Enforce HTTPS` 已启用。

---
