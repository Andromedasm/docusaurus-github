---
sidebar_position: 10
---

# 部署后自定义域名失效

这个问题是因为每次 `npm run deploy` 会覆盖 `gh-pages` 分支的内容，而默认会重新生成 `CNAME` 文件。如果 `CNAME` 文件缺失或被覆盖，GitHub Pages 会回退到默认的 URL。

### **解决方法**
为了让自定义域名（`docs.marupopo.com`）在每次部署后保持生效，需要确保 `CNAME` 文件在部署时不会被覆盖。

---

### **1. 配置 `CNAME` 文件**

#### **方法 1：在项目中创建静态 `CNAME` 文件**

1. 在 `static/` 文件夹中创建一个名为 `CNAME` 的文件（没有扩展名）。
   - 文件路径：`static/CNAME`
   - 文件内容（填写你的自定义域名）：
     ```
     docs.marupopo.com
     ```

2. 保存文件。

3. 确保 `CNAME` 文件被包含在 `build` 输出中：
   - 每次运行 `npm run deploy` 时，Docusaurus 会将 `static/CNAME` 文件复制到 `gh-pages` 分支。

---

#### **方法 2：手动在 `gh-pages` 分支中添加 `CNAME` 文件**

如果你不想在主分支中添加 `CNAME` 文件，可以手动在 `gh-pages` 分支中创建 `CNAME` 文件：
1. 切换到 `gh-pages` 分支：
   ```bash
   git checkout gh-pages
   ```

2. 创建或编辑 `CNAME` 文件：
   ```bash
   echo "docs.marupopo.com" > CNAME
   ```

3. 提交更改：
   ```bash
   git add CNAME
   git commit -m "Add CNAME for custom domain"
   git push origin gh-pages
   ```

注意：这种方法需要确保每次部署不会覆盖 `CNAME` 文件。

---

### **2. 确保 `CNAME` 文件在部署后存在**

你可以验证是否在部署后 `CNAME` 文件仍然存在：
1. 在 GitHub 仓库中切换到 `gh-pages` 分支。
2. 检查 `CNAME` 文件是否存在，内容是否正确。

---

### **3. 测试部署**

1. 确保正确添加了 `CNAME` 文件。
2. 运行以下命令重新部署：
   ```bash
   npm run build
   npm run deploy
   ```

3. 访问你的自定义域名（`docs.marupopo.com`）确认是否生效。

---

### **4. 可能的 DNS 缓存问题**

即使配置正确，也可能因 DNS 缓存延迟导致自定义域名需要一段时间才能正常工作。建议：
- 清除浏览器缓存，或使用隐身模式访问。
- 使用 [DNS Checker](https://dnschecker.org/) 确认 `CNAME` 记录是否正确。

---
