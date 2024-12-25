---
sidebar_position: 12
---

# 推送到 GitHub Pages 时出现错误


你的问题是因为 `gh-pages` 分支已经存在于远程仓库，并且远程分支的内容与你本地的 `gh-pages` 分支不同步。Git 拒绝推送是为了避免冲突。

以下是解决这个问题的步骤：

---

### **1. 同步远程 `gh-pages` 分支**

在推送之前，需要将远程 `gh-pages` 分支拉取到本地并合并。

#### **拉取远程分支并合并**
运行以下命令：
```bash
git pull origin gh-pages --rebase
```

- 这会将远程 `gh-pages` 分支的内容拉取到本地并尝试与本地分支合并。
- 如果出现冲突，Git 会提示你手动解决冲突。

#### **解决冲突（如果有）**
1. 打开冲突文件，根据需要修改内容。
2. 标记冲突已解决：
   ```bash
   git add <冲突文件>
   ```
3. 完成合并：
   ```bash
   git rebase --continue
   ```

---

### **2. 提交你的更改**

确保所有更改都已经被提交：
```bash
git add .
git commit -m "Add CNAME for custom domain"
```

---

### **3. 强制推送（如果必要）**

如果你确定不需要保留远程 `gh-pages` 分支的历史记录，可以使用强制推送覆盖远程内容：
```bash
git push origin gh-pages --force
```

⚠️ **注意**：强制推送会覆盖远程分支的内容，仅在确认无其他团队成员依赖此分支时使用。

---

### **4. 如果问题依旧**

1. **检查远程仓库状态**
   ```bash
   git fetch origin
   git branch -r
   ```
   确保 `gh-pages` 分支确实存在于远程仓库。

2. **重新克隆 `gh-pages` 分支**
   如果本地分支混乱，可以删除并重新克隆远程 `gh-pages` 分支：
   ```bash
   git branch -D gh-pages
   git fetch origin gh-pages
   git checkout -b gh-pages origin/gh-pages
   ```

   然后重新添加你的 `CNAME` 文件并推送：
   ```bash
   echo "docs.marupopo.com" > CNAME
   git add CNAME
   git commit -m "Add CNAME for custom domain"
   git push origin gh-pages
   ```

---

