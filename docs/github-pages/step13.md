---
sidebar_position: 13
---

# 解决 `git pull --rebase` 时出现 `error: cannot pull with rebase: You have unstaged changes.` 错误


这个错误表明你的本地分支有未暂存或未提交的更改，Git 需要你先处理这些更改才能继续执行 `git pull --rebase`。

---

### **解决方法**

#### **1. 确认未提交的更改**
运行以下命令查看本地未提交的更改：
```bash
git status
```

---

#### **2. 解决未提交的更改**

##### **方法 1：提交更改**
如果更改是你想要保留的，可以将它们提交到当前分支：
```bash
git add .
git commit -m "Save local changes"
```

然后重新运行：
```bash
git pull origin gh-pages --rebase
```

---

##### **方法 2：暂存更改**
如果你想暂时保留更改但不提交，可以使用 `git stash`：
```bash
git stash
```

这会将当前的更改暂存到一个临时存储区，随后可以恢复。然后运行：
```bash
git pull origin gh-pages --rebase
```

完成后，恢复暂存的更改：
```bash
git stash pop
```

---

##### **方法 3：丢弃更改**
如果这些更改不重要，可以直接丢弃：
```bash
git reset --hard
```

然后运行：
```bash
git pull origin gh-pages --rebase
```

⚠️ **注意**：`git reset --hard` 会丢失所有未提交的更改，请确保更改不是你需要的。

---

### **3. 继续后续操作**
处理未提交更改后，你应该可以成功运行 `git pull origin gh-pages --rebase` 并继续推送：
```bash
git push origin gh-pages
```
