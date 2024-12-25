---
sidebar_position: 5
---

# 部署到 GitHub Pages

根据你的仓库名称和 URL（`https://github.com/Andromedasm/docusaurus-github`），以下是确保正确部署到 GitHub Pages 的完整步骤：

---

### **更新 `docusaurus.config.ts` 文件**

确保你的 `docusaurus.config.ts` 配置正确：

```typescript
const config = {
  title: 'My Docusaurus Project',
  tagline: 'Documentation made easy',
  url: 'https://Andromedasm.github.io', // 你的 GitHub Pages 的 URL
  baseUrl: '/docusaurus-github/', // 仓库名称作为子路径
  organizationName: 'Andromedasm', // 你的 GitHub 用户名
  projectName: 'docusaurus-github', // 仓库名称
  trailingSlash: false, // 避免 GitHub Pages URL 问题
};
export default config;
```

---

### **确保远程仓库正确**

检查项目的 Git 远程仓库设置是否正确：
```bash
git remote -v
```

输出应类似于以下内容：
```
origin  https://github.com/Andromedasm/docusaurus-github.git (fetch)
origin  https://github.com/Andromedasm/docusaurus-github.git (push)
```

如果远程仓库不正确，重新设置：
```bash
git remote set-url origin https://github.com/Andromedasm/docusaurus-github.git
```

---

### **设置部署的访问权限**

#### **方法 1：使用 HTTPS + Personal Access Token**

1. 创建 GitHub Personal Access Token（PAT）：
   - 打开 [GitHub 的 PAT 页面](https://github.com/settings/tokens/new)。
   - 勾选 `repo` 权限，点击生成。
   - 复制生成的 Token（只能看到一次）。

2. 设置 Git 远程仓库使用 Token：
   ```bash
   git remote set-url origin https://<token>@github.com/Andromedasm/docusaurus-github.git
   ```

   替换 `<token>` 为你的 PAT。

3. 尝试部署：
   ```bash
   npm run deploy
   ```

---

#### **方法 2：使用 SSH**

1. 检查是否已配置 SSH：
   ```bash
   ssh -T git@github.com
   ```
   如果显示欢迎信息，则配置成功；否则请配置 SSH（参考 [GitHub 的官方文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)）。

2. 修改 `package.json` 的 `deploy` 命令，启用 SSH：
   ```json
   "scripts": {
     "deploy": "USE_SSH=true docusaurus deploy"
   }
   ```

3. 部署：
   ```bash
   npm run deploy
   ```

---

### **验证部署**

1. 如果部署成功，你的 Docusaurus 网站应该可以通过以下 URL 访问：
   ```
   https://Andromedasm.github.io/docusaurus-github/
   ```

2. 如果无法访问，检查以下事项：
   - 确保仓库的 **Settings > Pages** 中，`Source` 选择为 `gh-pages` 分支。
   - 等待几分钟让 GitHub Pages 完成构建。

---

### **检查常见问题**

1. **`GIT_USER` 错误**
   如果提示 `GIT_USER` 未设置，请在终端中运行以下命令：
   ```bash
   export GIT_USER="Andromedasm"
   npm run deploy
   ```

2. **GitHub Pages 未显示**
   确保 `gh-pages` 分支已更新：
   ```bash
   git checkout gh-pages
   git pull
   ```

