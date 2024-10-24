
## Git放弃本地修改，用远程分支覆盖本地分支

git fetch --all

git reset --hard origin/master (这里master为对应的分支名)

git pull


## git rebase 

[git rebase](https://www.cnblogs.com/yxhblogs/p/10527271.html)

```
git rebase -i HEAD~2
git push -f
```

1. i -> 第一次修改，第二个commit提示 前面的pick改为s ->  Esc ->  :wq
2. i -> 第二次修改，不需要显示的commit提示 前面的pick前面加#,注释掉 ->  Esc ->  :wq

## git reset HEAD~ --soft 撤销已经commit的代码，保留原状

## git commit --amend

```
git config user.name "1684838553" 
git config user.email "1684838553@qq.com"

git commit --amend --author="xx <xx@cc.com>"
## git commit --amend --author="drunk <000000@qq.com>"
// 修改最后一次commit提交的信息
git commit --amend --message="message"

// 强制推送
git push --force
```

## git reset (已经commit的代码回退)

版本回退

```
git reset --hard HEAD~1
```

等于

```
git log

git reset --hard 8b26dce5a8b9c4c66d9929bdeb7a840988cc12a1  谨慎使用
git reset --soft HEAD~1 回退到某个版本
```

## 解决git status显示中文文件名乱码问题

```
git config --global core.quotepath false
```

## 解决云端与本地的仓库不同，例如：不同的分支、或不同的仓库等。
```
git add .
git commit -a -m "initial commit"
git pull origin master --allow-unrelated-histories
// ====
git fetch origin master
git checkout master
git branch --set-upstream-to=origin/master master
git pull --rebase origin master
git add .
git commit - m "aa"
git push
```

## github下fork后同步更新代码

```
1. 添加上游仓库
git remote add upstream 上游git地址

2. 拉取上游变动
git fetch upstream

3. 合并
git rebase upstream/master

4. 更新自己远端仓库分支
git push origin master

```

## 解决冲突

```
1. 合并最新代码到当前分支
git pull --rebase origin master

2. // 在项目中打开git bash
git rebase --continue

3. 提交
git push -f
```

## 拉取master分支代码到当前分支

```
git pull --rebase origin master
```

## 版本回退，已经push的代码

```
使用git log命令，查看分支提交历史，确认需要回退的版本
使用git reset --hard commit_id命令，进行版本回退
git push -f
```


### linux sha256
sha256sum guodongsun.vscode-git-cruise-0.2.4.carts > guodongsun.vscode-git-cruise-0.2.4.carts.sha256



### 大文件
 如果你在合并过程中遇到二进制文件冲突，你可以选择保留当前分支版本的文件，放弃其他分支的更改。具体操作如下：

首先，你需要找到冲突的二进制文件。你可以通过运行 git status 命令来查看哪些文件有冲突。

然后，你可以使用 git checkout --ours <file> 命令来保留当前分支版本的文件。其中 <file> 是你要保留的文件的路径。例如，如果你的文件路径是 src/image.png，你可以运行 git checkout --ours src/image.png。

最后，你需要将这个文件添加到暂存区，并提交。你可以使用 git add <file> 和 git commit -m "Resolve binary conflict" 命令来完成这个操作。其中 <file> 是你刚刚保留的文件的路径。

注意：在解决冲突后，你应该运行 git push 命令将你的更改推送到远程仓库。


git lfs用法

git lfs track 二进制文件名

git add .

git lfs ls-files -s 查看是否追踪成功

git commit -m "提交信息"

git lfs ls-files 查看是否追踪成功

git push
