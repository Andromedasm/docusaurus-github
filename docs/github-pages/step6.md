---
sidebar_position: 6
---

# 为 GitHub Pages 添加自定义域名

在 GitHub Pages 上为你的项目添加自定义域名（Custom Domain）需要完成以下步骤：

---

### **1. 注册域名**
如果你还没有域名，可以通过域名注册服务（如 [Namecheap](https://www.namecheap.com/)、[Google Domains](https://domains.google/) 等）购买一个域名。

---

### **2. 配置 GitHub Pages**

1. **打开 GitHub 仓库的设置**：
   - 进入你的仓库（例如 `https://github.com/Andromedasm/docusaurus-github`）。
   - 点击右上角的 `Settings`。

2. **启用 GitHub Pages**：
   - 在左侧导航栏找到 `Pages`。
   - 确保 `Branch` 设置为 `gh-pages`，并点击保存。

3. **设置 Custom Domain**：
   - 在 `Pages` 设置页面中，有一个 `Custom domain` 输入框。
   - 输入你的自定义域名（如 `www.yourdomain.com`）。
   - 点击 `Save` 按钮。

   此时 GitHub 会自动生成一个 `CNAME` 文件到你的仓库的 `gh-pages` 分支中，文件内容为你的域名。

---

### **3. 配置域名 DNS**
需要在域名注册服务商处设置 DNS，将域名指向 GitHub Pages。

1. **登录你的域名注册服务商**：
   找到你的域名的 `DNS` 设置页面。

2. **添加 A 记录**（如果你使用裸域名）：
   - **主机名**：`@` 或留空。
   - **类型**：`A`。
   - **值**：
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **TTL**：可以设置为默认值或最低值（如 `1小时`）。

3. **添加 CNAME 记录**（如果你使用子域名）：
   - **主机名**：例如 `www`。
   - **类型**：`CNAME`。
   - **值**：`yourusername.github.io`（你的 GitHub Pages URL 的根域名）。

4. **保存更改**。

---

### **4. 启用 HTTPS**
1. 返回 GitHub 仓库的 `Pages` 设置页面。
2. 确保勾选 `Enforce HTTPS`（如果可用）。
3. 等待 DNS 记录生效，这可能需要几分钟到 48 小时不等。

---

### **5. 验证配置**
1. 打开你的自定义域名（如 `www.yourdomain.com`），检查是否正确加载你的 GitHub Pages 网站。
2. 如果自定义域名没有生效，可以通过以下方式检查问题：
   - 确保 DNS 记录已正确添加，并使用 [DNS Checker](https://dnschecker.org/) 验证。
   - 确保 `CNAME` 文件正确存在于 `gh-pages` 分支中。

---

