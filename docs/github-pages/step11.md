---
sidebar_position: 11
---

# 部署到 GitHub Pages

从错误信息来看，`gh-pages` 分支并不存在。这通常是因为 `npm run deploy` 尚未被成功运行，或者该分支还没有被初始化。

以下是解决方法：

---

### **1. 检查 `gh-pages` 分支是否存在**

运行以下命令查看所有远程分支：
```bash
git branch -r
```

如果没有看到 `origin/gh-pages`，说明 `gh-pages` 分支尚未创建。

---

### **2. 运行 `npm run deploy` 初始化 `gh-pages` 分支**

Docusaurus 的 `deploy` 脚本会自动创建 `gh-pages` 分支，并将生成的静态文件推送到该分支。

运行以下命令：
```bash
npm run deploy
```

此命令完成后，`gh-pages` 分支应该会被创建并推送到远程。

---

### **3. 如果 `npm run deploy` 成功后仍需手动操作**

1. 切换到 `gh-pages` 分支：
   ```bash
   git checkout -b gh-pages
   ```

2. 创建或修改 `CNAME` 文件：
   ```bash
   echo "docs.marupopo.com" > CNAME
   ```

3. 提交更改并推送：
   ```bash
   git add CNAME
   git commit -m "Add CNAME for custom domain"
   git push origin gh-pages
   ```

---

### **4. 确保 GitHub Pages 设置正确**

1. 在你的 GitHub 仓库中，进入 **Settings > Pages**。
2. 确认：
   - `Source` 设置为 `gh-pages` 分支。
   - 自定义域名（`Custom domain`）为 `docs.marupopo.com`。

3. 确保勾选 `Enforce HTTPS`。

---

### **5. 测试**

1. 访问你的自定义域名 `https://docs.marupopo.com`。
2. 如果仍有问题，可以尝试以下命令验证部署状态：
   ```bash
   git log gh-pages
   ```

---

