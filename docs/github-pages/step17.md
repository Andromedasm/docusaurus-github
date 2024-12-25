---
sidebar_position: 17
---

# GitHub Pages：CNAME 文件未显示

如果你在主目录中创建了 `CNAME` 文件，但它没有显示在 GitHub 仓库中，可能是以下原因之一：

---

### **原因 1：未将文件添加到 Git 的暂存区**
Git 不会自动跟踪新创建的文件，除非你明确告诉它。

#### **解决方法**
1. 确保文件已被 Git 追踪：
   ```bash
   git add CNAME
   ```

2. 提交更改：
   ```bash
   git commit -m "Add CNAME for custom domain"
   ```

3. 推送到远程仓库：
   ```bash
   git push origin main
   ```

---

### **原因 2：CNAME 文件被忽略**
检查 `.gitignore` 文件，看看是否包含忽略 `CNAME` 的规则。例如：
```
CNAME
*.CNAME
```

#### **解决方法**
1. 打开 `.gitignore` 文件，确保没有忽略 `CNAME` 文件的规则。
2. 如果有，删除相关规则并保存：
   ```plaintext
   # 删除忽略 CNAME 的规则
   ```
3. 重新添加文件：
   ```bash
   git add CNAME
   git commit -m "Track CNAME file"
   git push origin main
   ```

---

### **原因 3：文件名错误**
Git 区分大小写，因此文件名必须完全匹配 `CNAME`（全大写）。

#### **解决方法**
1. 确保文件名是全大写的 `CNAME`。
2. 如果不是，可以重命名：
   ```bash
   mv <current-name> CNAME
   ```

3. 再次添加并提交：
   ```bash
   git add CNAME
   git commit -m "Fix CNAME filename"
   git push origin main
   ```

---

### **原因 4：在错误的分支操作**
确保你正在主分支（或正确的分支）上操作。

#### **解决方法**
1. 检查当前分支：
   ```bash
   git branch
   ```

2. 如果不在主分支，切换到主分支：
   ```bash
   git checkout main
   ```

3. 确认 `CNAME` 文件是否存在，并重新添加：
   ```bash
   git add CNAME
   git commit -m "Add CNAME to main branch"
   git push origin main
   ```

---

### **原因 5：文件没有推送到远程**
即使文件被正确添加和提交，如果没有推送到远程仓库，GitHub 上也不会显示。

#### **解决方法**
1. 确保更改已提交：
   ```bash
   git commit -m "Ensure CNAME is committed"
   ```

2. 推送到远程仓库：
   ```bash
   git push origin main
   ```

---

