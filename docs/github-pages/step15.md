---
sidebar_position: 15
---

# 解决 Git 冲突

Git 正在提示你在 `gh-pages` 分支和 `main` 分支之间有未解决的冲突。这是因为你之前尝试合并或拉取时没有完成冲突的解决流程。

以下是解决步骤：

---

### **1. 确认冲突的文件**
运行以下命令查看有冲突的文件：
```bash
git status
```

你会看到类似以下输出：
```
both modified:   docusaurus.config.ts
both modified:   package-lock.json
both modified:   package.json
```

---

### **2. 手动解决冲突**

1. 打开冲突的文件（如 `docusaurus.config.ts`）。
2. Git 会标记冲突的部分，类似以下格式：
   ```diff
   <<<<<<< HEAD
   你的当前代码
   =======
   从远程分支拉取的代码
   >>>>>>> branch-name
   ```
3. 根据需要修改内容，移除冲突标记（`<<<<<<<`, `=======`, `>>>>>>>`）。

4. 解决所有冲突后，标记文件为已解决：
   ```bash
   git add <file>
   ```

   示例：
   ```bash
   git add docusaurus.config.ts
   git add package-lock.json
   git add package.json
   ```

5. 完成合并或重构：
   ```bash
   git rebase --continue
   ```

---

### **3. 如果不想保留更改**
如果你不需要保留本地更改，可以直接丢弃冲突内容并重置到远程版本：

1. 重置文件：
   ```bash
   git reset --hard
   ```

2. 切换到 `main` 分支：
   ```bash
   git checkout main
   ```

3. 更新 `main` 分支到最新：
   ```bash
   git pull origin main
   ```

---

### **4. 再次部署（如果必要）**

1. 修改你的文件或配置后，运行：
   ```bash
   npm run build
   npm run deploy
   ```

2. 确保自定义域名（`CNAME` 文件）正确。

---

