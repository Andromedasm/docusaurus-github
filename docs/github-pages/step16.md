---
sidebar_position: 16
---

# 部署到 GitHub Pages

问题出在 `git push` 阶段，Docusaurus 的部署脚本试图推送到错误的远程仓库地址 `https://github.com/facebook/docusaurus.git`，而不是你的仓库 `https://github.com/Andromedasm/docusaurus-github.git`。

这是因为 Docusaurus 的 `deploy` 脚本默认会使用 `origin` 远程仓库，但当前仓库的远程地址可能配置错误，或者 `GIT_USER` 环境变量未正确设置。

---

### **解决方法**

#### **1. 检查远程仓库地址**
运行以下命令，检查仓库的远程地址是否正确：
```bash
git remote -v
```

输出应该类似：
```
origin  https://github.com/Andromedasm/docusaurus-github.git (fetch)
origin  https://github.com/Andromedasm/docusaurus-github.git (push)
```

如果显示的 URL 是 `https://github.com/facebook/docusaurus.git`，需要重新设置远程仓库地址：
```bash
git remote set-url origin https://github.com/Andromedasm/docusaurus-github.git
```

---

#### **2. 确保 `GIT_USER` 设置正确**
Docusaurus 使用 `GIT_USER` 环境变量来标识你的 GitHub 用户。

在终端中运行以下命令（替换 `yourusername` 为你的 GitHub 用户名）：
- **Linux/macOS**:
  ```bash
  export GIT_USER="Andromedasm"
  npm run deploy
  ```

- **Windows（PowerShell）**:
  ```powershell
  $env:GIT_USER="Andromedasm"
  npm run deploy
  ```

---

#### **3. 确保权限正确**
检查是否可以正常推送代码到远程仓库：
```bash
git push origin main
```

- 如果出现身份验证问题：
  - 使用 HTTPS：
    1. 确保你在 GitHub 上配置了 Personal Access Token（PAT）。
    2. 设置远程 URL：
       ```bash
       git remote set-url origin https://<your-token>@github.com/Andromedasm/docusaurus-github.git
       ```
       将 `<your-token>` 替换为你的 GitHub Personal Access Token。

  - 使用 SSH：
    1. 确保 SSH 密钥已配置：
       ```bash
       ssh -T git@github.com
       ```
    2. 修改 `package.json` 的 `deploy` 脚本：
       ```json
       "scripts": {
         "deploy": "USE_SSH=true docusaurus deploy"
       }
       ```

---

#### **4. 重新部署**
完成上述配置后，运行以下命令重新部署：
```bash
npm run build
npm run deploy
```

---

### **验证部署**
1. 检查 `gh-pages` 分支是否包含正确的静态文件。
2. 确保 GitHub Pages 的 `Custom domain` 设置正确。
3. 访问你的自定义域名，确认是否加载正确的内容。

