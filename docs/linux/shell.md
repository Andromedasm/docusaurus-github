---
sidebar_position: 2
---

## Shell User Manual

This guide provides a detailed explanation of basic and advanced techniques for using the Bash shell. Additionally, it covers some features of Zsh. A shell is a program used to operate the command-line interface, commonly used for system administration and scripting.

## Table of Contents
- [Shell User Manual](#shell-user-manual)
- [Table of Contents](#table-of-contents)
- [Shell Basics](#shell-basics)
  - [Starting the Shell](#starting-the-shell)
  - [Basic Commands](#basic-commands)
- [Bash Basics](#bash-basics)
  - [Using Variables](#using-variables)
    - [Defining and Using Variables](#defining-and-using-variables)
    - [Environment Variables](#environment-variables)
  - [Control Structures](#control-structures)
    - [If Statements](#if-statements)
    - [For Loops](#for-loops)
    - [While Loops](#while-loops)
  - [Defining Functions](#defining-functions)
- [Advanced Bash Usage](#advanced-bash-usage)
  - [Regular Expressions and Pattern Matching](#regular-expressions-and-pattern-matching)
  - [Creating Shell Scripts](#creating-shell-scripts)
  - [Job Management](#job-management)
    - [Background Jobs](#background-jobs)
    - [Bringing Jobs to Foreground](#bringing-jobs-to-foreground)
  - [Input/Output Redirection](#inputoutput-redirection)
    - [Redirecting Standard Output](#redirecting-standard-output)
    - [Redirecting Standard Error](#redirecting-standard-error)
    - [Redirecting Both Standard Output and Error](#redirecting-both-standard-output-and-error)
- [Introduction to Zsh](#introduction-to-zsh)
  - [Installing Zsh](#installing-zsh)
    - [On macOS](#on-macos)
    - [On Ubuntu](#on-ubuntu)
  - [Basic and Advanced Features](#basic-and-advanced-features)
    - [Autocompletion](#autocompletion)
    - [Using Oh My Zsh](#using-oh-my-zsh)
- [Advanced Shell Operations](#advanced-shell-operations)
  - [Process Substitution](#process-substitution)
  - [Aliases and Shell Customization](#aliases-and-shell-customization)
    - [Creating Aliases](#creating-aliases)
    - [Customizing the Shell Prompt](#customizing-the-shell-prompt)
  - [Command History Manipulation](#command-history-manipulation)
    - [Viewing History](#viewing-history)
    - [Re-running Specific Commands](#re-running-specific-commands)
    - [Searching History](#searching-history)

## Shell Basics

### Starting the Shell

Open a terminal (or command prompt) to start the shell. By default, Bash is usually started.

```bash
bash
```

### Basic Commands

Below are frequently used basic commands in Bash.

- `ls`: Displays the contents of a directory.
  ```bash
  ls
  ```
- `cd`: Changes the current directory.
  ```bash
  cd /path/to/directory
  ```
- `pwd`: Prints the current directory.
  ```bash
  pwd
  ```
- `echo`: Outputs text.
  ```bash
  echo "Hello, World!"
  ```
- `cat`: Displays the contents of a file.
  ```bash
  cat file.txt
  ```

## Bash Basics

### Using Variables

Learn how to define and use variables in Bash.

#### Defining and Using Variables

```bash
name="Alice"
echo $name
```

#### Environment Variables

```bash
export PATH=$PATH:/new/path
```

### Control Structures

Control structures in Bash include if statements, for loops, and while loops.

#### If Statements

```bash
if [ condition ]; then
    echo "Condition is true"
else
    echo "Condition is false"
fi
```

#### For Loops

```bash
for i in 1 2 3; do
    echo "Number $i"
done
```

#### While Loops

```bash
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done
```

### Defining Functions

Learn how to define and use functions in Bash.

```bash
my_function() {
    echo "Hello, $1"
}

my_function "Alice"
```

## Advanced Bash Usage

### Regular Expressions and Pattern Matching

Using regular expressions and pattern matching in Bash.

```bash
if [[ "hello" =~ ^h.*o$ ]]; then
    echo "Matches"
fi
```

### Creating Shell Scripts

How to create and execute shell scripts.

```bash
#!/bin/bash
echo "This is a shell script"
```

Give the script execute permission and run it.

```bash
chmod +x script.sh
./script.sh
```

### Job Management

Manage jobs in Bash.

#### Background Jobs

```bash
sleep 10 &
```

#### Bringing Jobs to Foreground

```bash
fg %1
```

### Input/Output Redirection

Learn how to use input/output redirection in Bash.

#### Redirecting Standard Output

```bash
echo "Hello, World!" > output.txt
```

#### Redirecting Standard Error

```bash
ls /nonexistent 2> error.txt
```

#### Redirecting Both Standard Output and Error

```bash
command > output.txt 2>&1
```

## Introduction to Zsh

### Installing Zsh

How to install Zsh.

#### On macOS

```bash
brew install zsh
```

#### On Ubuntu

```bash
sudo apt-get install zsh
```

### Basic and Advanced Features

An overview of Zsh’s basic and extended functionalities.

#### Autocompletion

How to enable Zsh’s powerful autocompletion.

```bash
autoload -Uz compinit
compinit
```

#### Using Oh My Zsh

Customize Zsh using Oh My Zsh.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Advanced Shell Operations

### Process Substitution

Using process substitution.

```bash
diff <(ls dir1) <(ls dir2)
```

### Aliases and Shell Customization

Create aliases and customize the shell in Bash or Zsh.

#### Creating Aliases

```bash
alias ll='ls -la'
```

#### Customizing the Shell Prompt

```bash
export PS1="\u@\h \W> "
```

### Command History Manipulation

How to work with command history in Bash or Zsh.

#### Viewing History

```bash
history
```

#### Re-running Specific Commands

```bash
!42
```

#### Searching History

```bash
Ctrl + r
```

This concludes the explanation of basic and advanced shell usage in Bash and Zsh. Shells are powerful and flexible tools, and understanding their features is key to using them efficiently.

