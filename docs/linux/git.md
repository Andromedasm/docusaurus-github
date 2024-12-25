---
sidebar_position: 1
---


## Git User Manual

## Table of Contents

- [Git User Manual](#git-user-manual)
- [Table of Contents](#table-of-contents)
- [What is Git?](#what-is-git)
- [Installing Git](#installing-git)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux](#linux)
- [Basic Git Commands](#basic-git-commands)
  - [Initializing a Repository](#initializing-a-repository)
  - [Staging Files](#staging-files)
  - [Committing Changes](#committing-changes)
  - [Adding a Remote Repository](#adding-a-remote-repository)
  - [Pushing Changes](#pushing-changes)
  - [Cloning a Repository](#cloning-a-repository)
  - [Pulling Changes](#pulling-changes)
- [Branch Operations](#branch-operations)
  - [Creating and Switching Branches](#creating-and-switching-branches)
  - [Merging Branches](#merging-branches)
  - [Deleting Branches](#deleting-branches)
- [Advanced Git Features](#advanced-git-features)
  - [Rebase](#rebase)
  - [Stash](#stash)
  - [Tagging](#tagging)
- [Troubleshooting](#troubleshooting)
  - [Resolving Conflicts](#resolving-conflicts)
  - [Reset](#reset)

## What is Git?

Git is a distributed version control system (DVCS) widely used for source code management (SCM) in projects involving multiple developers or requiring version control.

## Installing Git

### Windows
1. Download the installer from the [official Git website](https://git-scm.com/).
2. Run the installer and follow the on-screen instructions to complete the installation.

### macOS
1. Use Homebrew to install Git:

   ```bash
   brew install git
   ```

### Linux
1. Use the package manager for your distribution:

   ```bash
   sudo apt-get install git      # For Debian-based systems
   sudo yum install git          # For RedHat-based systems
   ```

## Basic Git Commands

### Initializing a Repository

To create a new repository, use the following command:

```bash
git init
```

### Staging Files

To add files to the staging area, use:

```bash
git add <filename>
# Or stage all changes

git add .
```

### Committing Changes

To commit staged changes to the repository, use:

```bash
git commit -m "Commit message"
```

### Adding a Remote Repository

To add a remote repository, use:

```bash
git remote add origin <remote-repository-URL>
```

### Pushing Changes

To push local commits to the remote repository, use:

```bash
git push origin <branch-name>
```

### Cloning a Repository

To clone a remote repository, use:

```bash
git clone <remote-repository-URL>
```

### Pulling Changes

To fetch and merge the latest changes from a remote repository, use:

```bash
git pull origin <branch-name>
```

## Branch Operations

### Creating and Switching Branches

To create a new branch and switch to it, use:

```bash
git checkout -b <new-branch-name>
```

### Merging Branches

To merge another branch into the current branch, use:

```bash
git merge <branch-name>
```

### Deleting Branches

To delete an unnecessary branch, use:

```bash
git branch -d <branch-name>
```

## Advanced Git Features

### Rebase

To rebase and reorganize your commit history, use:

```bash
git rebase <branch-name>
```

### Stash

To temporarily save your current working state, use:

```bash
git stash
```

To apply stashed changes, use:

```bash
git stash apply
```

### Tagging

To add a tag to a specific commit, use:

```bash
git tag <tag-name>
```

To push tags to a remote repository, use:

```bash
git push origin <tag-name>
```

## Troubleshooting

### Resolving Conflicts

If a conflict occurs during a merge, resolve it manually and complete the resolution with:

```bash
git add <resolved-file>
git commit
```

### Reset

To undo a commit, use one of the following:

- Soft reset (keep changes staged):

  ```bash
  git reset --soft HEAD^
  ```

- Hard reset (discard all changes):

  ```bash
  git reset --hard HEAD^
  ```

This concludes the Git tutorial, covering both basic and advanced features. Use it to enhance your Git workflow!

