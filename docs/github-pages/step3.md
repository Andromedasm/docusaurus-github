---
sidebar_position: 3
---

# 修复 Docusaurus 部署到 GitHub Pages 的问题


根据错误信息，问题的根本原因是未正确设置 `GIT_USER` 环境变量，或未启用 `USE_SSH`。Docusaurus 的 `deploy` 命令需要指定 Git 用户身份，用于推送构建后的静态文件到 GitHub Pages。

以下是解决方法的详细步骤：

---

### **1. 设置 GIT_USER 环境变量**

在终端运行以下命令（以你的 GitHub 用户名替换 `yourusername`）：

**对于 Windows (PowerShell)**：
```powershell
$env:GIT_USER="yourusername"
npm run deploy
```

**对于 macOS/Linux**：
```bash
GIT_USER="yourusername" npm run deploy
```

---

### **2. 使用 SSH 而不是 HTTPS**

如果你已经配置了 SSH 密钥，可以使用 SSH 推送代码：
1. 在 `package.json` 中添加 `USE_SSH` 环境变量：
   ```json
   "scripts": {
     "deploy": "USE_SSH=true docusaurus deploy"
   }
   ```

2. 确保你已经正确设置 SSH 密钥并添加到 GitHub：
   - 运行以下命令检查 SSH 是否配置正确：
     ```bash
     ssh -T git@github.com
     ```
   - 如果未设置 SSH，请参考 [GitHub 的官方文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) 来配置。

3. 部署：
   ```bash
   npm run deploy
   ```

---

### **3. 配置 `trailingSlash` (可选)**

Docusaurus 的警告提示你设置 `trailingSlash` 来避免 GitHub Pages 的 URL 问题。在 `docusaurus.config.ts` 文件中添加以下配置：
```typescript
const config = {
  // 其他配置...
  trailingSlash: false,
};
export default config;
```

---

### **4. 重试部署**

配置完成后，再次运行以下命令部署：
```bash
npm run deploy
```

---

### **问题依旧？检查以下内容**

1. **Node.js 版本问题**：
   - 错误日志显示你的 Node.js 版本可能有问题（`Node version: v22.12.0` 似乎有误）。请确保使用的是稳定的 LTS 版本（如 18.x 或 20.x）。
   - 检查版本：
     ```bash
     node -v
     ```
   - 如果需要更换版本，可以使用 [nvm](https://github.com/nvm-sh/nvm) 或直接从 Node.js 官网下载。

2. **Git 配置正确**：
   - 确保你已经正确设置了全局 Git 配置：
     ```bash
     git config --global user.name "yourusername"
     git config --global user.email "youremail@example.com"
     ```

---
