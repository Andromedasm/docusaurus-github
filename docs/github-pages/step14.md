---
sidebar_position: 14
---

# 部署到 GitHub Pages

这是正常现象，因为 `gh-pages` 分支是用来存放 **静态文件** 的，它是由 `npm run build` 命令生成的 HTML、CSS 和 JS 文件组成。这些文件是为了部署到 GitHub Pages，直接用于展示你的 Docusaurus 网站。

如果你需要的是项目源代码（如 `docusaurus.config.ts` 和文档的 Markdown 文件），它们通常保存在 `main` 分支或其他源代码分支中，而不是 `gh-pages` 分支。

---

### **如何处理 `gh-pages` 分支文件**

如果你希望：
1. **保留 `gh-pages` 分支的静态文件**：无需做额外操作。
2. **修改项目内容（如文档或配置文件）**：应切换回源代码分支（通常是 `main` 分支）。

---

### **1. 切换回源代码分支**

1. 切换到主分支：
   ```bash
   git checkout main
   ```

2. 确保主分支包含最新代码：
   ```bash
   git pull origin main
   ```

3. 在主分支上修改文件（如 `docusaurus.config.ts` 或 `docs/` 中的 Markdown 文件）。

---

### **2. 部署时不直接修改 `gh-pages` 分支**

1. **修改项目内容**：
   修改 `main` 分支的代码，例如更新文档内容或配置。

2. **构建并部署**：
   运行以下命令：
   ```bash
   npm run build
   npm run deploy
   ```
   这会自动将生成的静态文件推送到 `gh-pages` 分支。

---

### **3. 如果你误修改了 `gh-pages` 分支**

如果你不小心在 `gh-pages` 分支上进行了修改，以下是恢复步骤：

1. 切换到 `main` 分支：
   ```bash
   git checkout main
   ```

2. 删除本地的 `gh-pages` 分支：
   ```bash
   git branch -D gh-pages
   ```

3. 拉取最新的远程 `gh-pages` 分支：
   ```bash
   git fetch origin gh-pages
   ```

4. 如果你需要修复 `gh-pages`，只需重新部署：
   ```bash
   npm run deploy
   ```

---

### **总结**

- **源代码和文档的开发**：在 `main` 分支进行。
- **静态文件的部署**：由 `npm run deploy` 自动处理，将结果推送到 `gh-pages` 分支。

