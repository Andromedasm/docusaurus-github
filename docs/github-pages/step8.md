---
sidebar_position: 8
---

# 修复自定义域名问题

问题出在 `baseUrl` 的配置不正确。由于你已经绑定了自定义域名，`baseUrl` 不应包含仓库名称 `/docusaurus-github/`，而应该设置为 `/`。

以下是修复步骤：

---

### **1. 修改 `baseUrl` 配置**

1. 打开你的 `docusaurus.config.ts` 文件。
2. 找到 `baseUrl` 配置项，将其设置为 `/`：
   ```typescript
   const config = {
     // 其他配置
     baseUrl: '/',
   };
   ```

3. 保存文件。

---

### **2. 重新部署网站**

在终端中运行以下命令重新构建并部署：
```bash
npm run build
npm run deploy
```

这会更新 `gh-pages` 分支的静态文件，修复 `baseUrl` 配置问题。

---

### **3. 验证**

1. 等待部署完成。
2. 访问你的自定义域名（如 `https://docs.marupopo.com`），检查是否正确加载网站内容。

---

### **4. 如果问题仍存在**

- 清除浏览器缓存或尝试使用隐身模式访问。
- 检查 GitHub Pages 的 `CNAME` 文件是否存在且内容正确（应为 `docs.marupopo.com`）。
- 确保 DNS 配置生效，可以使用 [DNS Checker](https://dnschecker.org/) 验证 `CNAME` 记录。

