---
sidebar_position: 4
---

# 修复 GitHub Pages 部署问题

从错误信息中可以看出，部署失败的原因是 GitHub 的访问权限问题，你的账户 (`Andromedasm`) 没有推送到目标仓库的权限。下面是解决方法的步骤：

---

### **1. 确认目标仓库的正确性**

1. 确保 `docusaurus.config.ts` 文件中的 `organizationName` 和 `projectName` 设置正确。
   - `organizationName`：你的 GitHub 用户名，例如 `Andromedasm`。
   - `projectName`：仓库名称，例如 `docusaurus-github`。

   示例配置：
   ```typescript
   const config = {
     url: 'https://Andromedasm.github.io',
     baseUrl: '/docusaurus-github/',
     organizationName: 'Andromedasm',
     projectName: 'docusaurus-github',
   };
   ```

2. 如果目标仓库不是你自己拥有的仓库，请确认你在该仓库中有写权限。

---

### **2. 设置正确的 GitHub 访问权限**

#### **方法 1：使用 HTTPS**

如果你使用 HTTPS 推送代码，需要配置 GitHub 的 Personal Access Token（PAT）：
1. 创建 PAT：
   - 访问 [GitHub 的 PAT 页面](https://github.com/settings/tokens)。
   - 点击 **Generate new token**，选择 `repo` 权限，并设置其他必要选项。
   - 生成后复制你的 token（只能看到一次）。

2. 在终端中配置 `GIT_USER` 环境变量：
   ```bash
   export GIT_USER="Andromedasm"
   ```
   
3. 配置 Git 推送 URL：
   ```bash
   git remote set-url origin https://<token>@github.com/Andromedasm/docusaurus-github.git
   ```
   用你的 PAT 替换 `<token>`。

4. 再次尝试部署：
   ```bash
   npm run deploy
   ```

---

#### **方法 2：使用 SSH**

如果你已经配置了 SSH 密钥，可以改为使用 SSH 推送代码：
1. 确保 SSH 密钥已经添加到 GitHub：
   - 运行以下命令检查：
     ```bash
     ssh -T git@github.com
     ```
   - 如果未配置，请参考 [GitHub SSH 文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)。

2. 启用 SSH 部署：
   - 在 `package.json` 中修改 `deploy` 命令：
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

### **3. 再次验证配置**

1. 检查 `CNAME` 文件：
   如果你部署到 GitHub Pages 的自定义域名，确保 `CNAME` 文件正确设置。
   
2. 确保 Node.js 使用稳定的 LTS 版本（例如 18.x 或 20.x）：
   ```bash
   node -v
   ```
   如果当前版本有问题，请切换到稳定版本。

---

