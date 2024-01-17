import{_ as e,r as t,o as i,c as l,d as n,b as s,a as c,e as p}from"./app-1lTnJ-Z-.js";const o={},d=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" Git")],-1),u=n("h2",{id:"git常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git常用命令","aria-hidden":"true"},"#"),s(" git常用命令")],-1),r={href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"},m=p(`<table><thead><tr><th><strong>命令名称</strong></th><th><strong>作用</strong></th></tr></thead><tbody><tr><td>git config --global user.name 用户名</td><td>设置用户签名</td></tr><tr><td>git config --global user.email 邮箱</td><td>设置用户邮箱</td></tr><tr><td>git init</td><td>初始化本地库</td></tr><tr><td>git status</td><td>查看本地库状态</td></tr><tr><td>git add 文件名</td><td>添加到暂存区</td></tr><tr><td>git add .</td><td>当前目录下全部文件添加到暂存区</td></tr><tr><td>git commit -m &quot;提交信息&quot;</td><td>提交到本地库</td></tr><tr><td>git reflog</td><td>查看详细历史记录</td></tr><tr><td>git log</td><td>查看历史记录</td></tr><tr><td>git reset --hard 版本号</td><td>版本穿梭</td></tr><tr><td>git config --list</td><td>查看配置信息</td></tr></tbody></table><details class="custom-container details"><summary>点击查看演示</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化仓库</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test
$ <span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> E:/java0615/git-test/.git/

<span class="token comment"># 查看仓库状态</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

nothing to commit <span class="token punctuation">(</span>create/copy files and use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>

<span class="token comment"># 查看配置信息</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> ~/.gitconfig
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
        name <span class="token operator">=</span> wxhcoding
        email <span class="token operator">=</span> <span class="token number">1515398578</span>@qq.com
<span class="token punctuation">[</span>http<span class="token punctuation">]</span>
        sslverify <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment"># 在目录新建一个文件 查看仓库状态</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        hello.java

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>

<span class="token comment"># 把当前目录下未跟踪的文件添加到暂存区</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交到本地仓库</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;first commit hello.java&#39;</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 5541b0f<span class="token punctuation">]</span> first commit hello.java
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">5</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> hello.java

<span class="token comment"># 查看日志信息</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> log
commit 5541b0fe2188669ccf2fede47dfc2d5de8dde0cf <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: wxhcoding <span class="token operator">&lt;</span><span class="token number">1515398578</span>@qq.com<span class="token operator">&gt;</span>
Date:   Tue Sep <span class="token number">5</span> <span class="token number">10</span>:45:39 <span class="token number">2023</span> +0800

    first commit hello.java

<span class="token comment"># 查看日志信息 比上面的简单信息</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
5541b0f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: first commit hello.java

<span class="token comment"># 修改了文件查看文件状态</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   hello.java

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;second commit hello.java&#39;</span>
<span class="token punctuation">[</span>master 58a5ce1<span class="token punctuation">]</span> second commit hello.java
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> log
commit 58a5ce1c86846a81108a2bfb7125afc81df91129 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: wxhcoding <span class="token operator">&lt;</span><span class="token number">1515398578</span>@qq.com<span class="token operator">&gt;</span>
Date:   Tue Sep <span class="token number">5</span> <span class="token number">10</span>:48:31 <span class="token number">2023</span> +0800

    second commit hello.java

commit 5541b0fe2188669ccf2fede47dfc2d5de8dde0cf
Author: wxhcoding <span class="token operator">&lt;</span><span class="token number">1515398578</span>@qq.com<span class="token operator">&gt;</span>
Date:   Tue Sep <span class="token number">5</span> <span class="token number">10</span>:45:39 <span class="token number">2023</span> +0800

    first commit hello.java

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
58a5ce1 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: commit: second commit hello.java
5541b0f HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: first commit hello.java

<span class="token comment"># 版本穿梭 回到之前的版本</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 5541b0f
HEAD is now at 5541b0f first commit hello.java

<span class="token comment"># 这时查看到的日志只有这个版本和这个版本之前的日志信息</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> log
commit 5541b0fe2188669ccf2fede47dfc2d5de8dde0cf <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: wxhcoding <span class="token operator">&lt;</span><span class="token number">1515398578</span>@qq.com<span class="token operator">&gt;</span>
Date:   Tue Sep <span class="token number">5</span> <span class="token number">10</span>:45:39 <span class="token number">2023</span> +0800

    first commit hello.java

<span class="token comment"># 可以看到所有的简单的日志信息</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
5541b0f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: reset: moving to 5541b0f
58a5ce1 HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit: second commit hello.java
5541b0f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: first commit hello.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2><blockquote><p>在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时候，不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实也是指针的引用）<br> 同时并行推进多个功能开发，提高开发效率。 各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。</p></blockquote><table><thead><tr><th><strong>命令名称</strong></th><th><strong>作用</strong></th></tr></thead><tbody><tr><td>git branch 分支名</td><td>创建分支</td></tr><tr><td>git branch -v</td><td>查看分支</td></tr><tr><td>git checkout 分支名</td><td>切换分支</td></tr><tr><td>git merge 分支名</td><td>把指定的分支合并到当前分支上</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li><p>在进行分支合并时，要注意要看合并到哪个分支上就切换到哪个分支，然后执行合并分支命令</p><ul><li>比如: 要把dev的分支合并到master分支上 就首先切换到master分支 <code>git checkout master</code> 在master分支操作，然后进行分支的合并 <code>git merge dev</code></li></ul></li><li><p>在进行分支创建时，是在当前所在分支的基础上进行创建的 即新创建的分支和原来分支具有相同的版本号</p></li><li><p>在进行分支合并时可能两个分支都有内容进行更新，在进行合并时就会提示我们是要保留哪个分支上面更新的内容</p><ul><li>这时我们根据实际情况进行选择是要保留哪个分支的内容或者都要保留即可</li></ul></li></ul></div><details class="custom-container details"><summary>点击查看演示</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前有哪些分支 *代表当前所在的分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch
* master

<span class="token comment"># 查看详细的分支信息</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* master 5541b0f first commit hello.java

<span class="token comment"># 创建dev分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch dev

<span class="token comment"># 再次查看分支 新创建的分支和原来分支具有相同版本号</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  dev    5541b0f first commit hello.java
* master 5541b0f first commit hello.java

<span class="token comment"># 切换到dev分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout dev
Switched to branch <span class="token string">&#39;dev&#39;</span>

<span class="token comment"># 在dev分支对文件进行修改</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch dev
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   hello.java

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;dev branch first commit&#39;</span>
<span class="token punctuation">[</span>dev f6c0317<span class="token punctuation">]</span> dev branch first commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token comment"># 这里看到dev分支的版本号发生了改变</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* dev    f6c0317 dev branch first commit
  master 5541b0f first commit hello.java

<span class="token comment"># 切换到master分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>

<span class="token comment"># 在master分支进行合并 把dev分支上更新的内容合并到master分支上</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> merge dev
Updating 5541b0f<span class="token punctuation">..</span>f6c0317
Fast-forward
 hello.java <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token comment"># 两个分支版本号相同</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  dev    f6c0317 dev branch first commit
* master f6c0317 dev branch first commit

<span class="token comment"># 模拟发生了冲突</span>
<span class="token comment"># 这里我们假如有另外的分支合并到了master分支上 即master分支上文件发生了改变</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   hello.java

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 把更新的内容添加到暂存区</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交到本地仓库</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;new merge conflict info&#39;</span>
<span class="token punctuation">[</span>master b8635bd<span class="token punctuation">]</span> new merge conflict info
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token comment"># 这是master分支版本发生改变</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  dev    f6c0317 dev branch first commit
* master b8635bd new merge conflict info

<span class="token comment"># 我们切换到dev分支 在dev分支进行操作</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout dev
Switched to branch <span class="token string">&#39;dev&#39;</span>

<span class="token comment"># 在dev分支上也对文件内容进行更新</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch dev
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   hello.java

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 添加到暂存区</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交到本地仓库</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;dev conflict info&#39;</span>
<span class="token punctuation">[</span>dev 67ea469<span class="token punctuation">]</span> dev conflict info
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token comment"># 这时两个分支都对文件进行了更新 版本号都不一样</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* dev    67ea469 dev conflict info
  master b8635bd new merge conflict info

<span class="token comment"># 我们切换到master分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>

<span class="token comment"># 进行分支合并 提示我们有冲突存在 </span>
<span class="token comment"># 如果我们使用的是vscode打开的文件会提示我们要保留哪个分支上面的代码 或者全部保留</span>
<span class="token comment"># 我们根据情况进行保留即可</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> merge dev
Auto-merging hello.java
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> hello.java
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.

<span class="token comment"># 查看现在仓库的状态 并发现现在处于 MERGING 状态</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
You have unmerged paths.
  <span class="token punctuation">(</span>fix conflicts and run <span class="token string">&quot;git commit&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git merge --abort&quot;</span> to abort the merge<span class="token punctuation">)</span>

Unmerged paths:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to mark resolution<span class="token punctuation">)</span>
        both modified:   hello.java

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 合并之后添加到暂存区</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交到本地仓库</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;new merge and dev merge&#39;</span>
<span class="token punctuation">[</span>master 59d9599<span class="token punctuation">]</span> new merge and dev merge

<span class="token comment"># 提交之后我们可以看到 MERGING 状态消失</span>
<span class="token comment"># 这时我们可以看到master分支的版本进行了更新 而dev版本并没有改变</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  dev    67ea469 dev conflict info
* master 59d9599 new merge and dev merge

<span class="token comment"># 切换到dev分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout dev
Switched to branch <span class="token string">&#39;dev&#39;</span>

<span class="token comment"># 把刚才master分支上内容合并到dev分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> merge master
Updating 67ea469<span class="token punctuation">..</span>59d9599
Fast-forward
 hello.java <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token comment"># 这时版本又保持了一致</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* dev    59d9599 new merge and dev merge
  master 59d9599 new merge and dev merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2><h3 id="提交到远程" tabindex="-1"><a class="header-anchor" href="#提交到远程" aria-hidden="true">#</a> 提交到远程</h3><blockquote><p>我们以gitee为例进行演示 首先我们在gitee上新建一个空的仓库，因为我们要把我们的内容提交到gitee所以新建一个空的仓库即可(新建仓库时什么都不勾选)</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li><p>如果远程存在仓库首先需要 <code>git clone 远程地址</code> 克隆到本地</p></li><li><p>我们每次开发时，编写了代码，<strong>首先需要把我们的代码 add 添加到暂存区 再 commit 提交到本地仓库</strong></p><ul><li>如果直接进行远程代码的pull拉取 会报错(代码不知道受不受影响) <strong>一定要先进行 add 和 commit</strong></li></ul></li><li><p>上面add和commit完成后我们首先需要pull拉取远程的代码(应该会进行代码的合并)</p></li><li><p>然后再进行代码的提交push</p></li><li><p>在本地进行代码提交push时，<strong>进行哪个分支的提交 就切换到哪个分支再进行提交</strong> 以防出错</p></li></ul><p>如果说远程代码更新了我们的代码也更新了 而我们在进行远程仓库的提交时直接pull拉取远程仓库的代码，并没有把我们的代码提交到本地仓库会报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> pull origin master
From https://gitee.com/wxhcoding/git-demo
 * branch            master     -<span class="token operator">&gt;</span> FETCH_HEAD
error: Your <span class="token builtin class-name">local</span> changes to the following files would be overwritten by merge:
        hello.java
Please commit your changes or stash them before you merge.
Aborting
Updating 845f6d8<span class="token punctuation">..</span>2c13f1c

<span class="token comment"># 先把代码提交到暂存区</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 再提交到本地仓库</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;local and remote all update test&#39;</span>
<span class="token punctuation">[</span>master d3a4aad<span class="token punctuation">]</span> <span class="token builtin class-name">local</span> and remote all update <span class="token builtin class-name">test</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token comment"># 进行远程仓库代码的拉取 会提示我们要手动选择代码的保留</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> pull origin master
From https://gitee.com/wxhcoding/git-demo
 * branch            master     -<span class="token operator">&gt;</span> FETCH_HEAD
Auto-merging hello.java
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> hello.java
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.

<span class="token comment"># 保留完之后查看状态 然后进行 add 和 commit</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
You have unmerged paths.
  <span class="token punctuation">(</span>fix conflicts and run <span class="token string">&quot;git commit&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git merge --abort&quot;</span> to abort the merge<span class="token punctuation">)</span>

Unmerged paths:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to mark resolution<span class="token punctuation">)</span>
        both modified:   hello.java

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;merge local and remote&#39;</span>
<span class="token punctuation">[</span>master cc29210<span class="token punctuation">]</span> merge <span class="token builtin class-name">local</span> and remote

<span class="token comment"># 再拉取一下远程仓库查看一下</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> pull origin master
From https://gitee.com/wxhcoding/git-demo
 * branch            master     -<span class="token operator">&gt;</span> FETCH_HEAD
Already up to date.

<span class="token comment"># 进行远程仓库的提交</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> push origin master
Enumerating objects: <span class="token number">10</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">10</span>/10<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">8</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">6</span>/6<span class="token punctuation">)</span>, <span class="token number">598</span> bytes <span class="token operator">|</span> <span class="token number">598.00</span> KiB/s, done.
Total <span class="token number">6</span> <span class="token punctuation">(</span>delta <span class="token number">2</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
remote: Powered by GITEE.COM <span class="token punctuation">[</span>GNK-6.4<span class="token punctuation">]</span>
To https://gitee.com/wxhcoding/git-demo.git
   2c13f1c<span class="token punctuation">..</span>cc29210  master -<span class="token operator">&gt;</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以本地和远程代码都更新时，首先需要把我们更新的本地的代码提交到本地的仓库，然后再进行远程仓库的拉取(这时会帮我们进行代码的合并，产生冲突，我们根据实际情况选择保留)，之后再对我们的代码进行add和commit提交到本地仓库，然后拉取再提交到远程仓库</p></div><table><thead><tr><th><strong>命令名称</strong></th><th><strong>作用</strong></th></tr></thead><tbody><tr><td>git remote -v</td><td>查看当前所有远程地址别名</td></tr><tr><td>git remote add 别名 远程地址</td><td>起别名(一般都为 origin)</td></tr><tr><td>git push 别名 分支</td><td>推送本地分支上的内容到远程仓库</td></tr><tr><td>git clone 远程地址</td><td>将远程仓库的内容克隆到本地</td></tr><tr><td>git pull 远程库地址别名 远程分支名</td><td>将远程仓库对于分支最新内容拉下来后与当前本地分支直接合并</td></tr></tbody></table><details class="custom-container details"><summary>点击查看演示</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看现在仓库的远程地址 目前还没有</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 在gitee复制我们的远程地址 复制https格式 进行远程地址的添加</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/wxhcoding/git-demo.git

<span class="token comment"># 再次查看</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin  https://gitee.com/wxhcoding/git-demo.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  https://gitee.com/wxhcoding/git-demo.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 我们要进行master分支的提交 先切换到master分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>

<span class="token comment"># 进行远程仓库的提交 首次使用时会让我们输入gitee的用户名和密码</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> push origin master
warning: ----------------- SECURITY WARNING ----------------
warning: <span class="token operator">|</span> TLS certificate verification has been disabled<span class="token operator">!</span> <span class="token operator">|</span>
warning: ---------------------------------------------------
warning: HTTPS connections may not be secure. See https://aka.ms/gcm/tlsverify f
or <span class="token function">more</span> information.
warning: ----------------- SECURITY WARNING ----------------
warning: <span class="token operator">|</span> TLS certificate verification has been disabled<span class="token operator">!</span> <span class="token operator">|</span>
warning: ---------------------------------------------------
warning: HTTPS connections may not be secure. See https://aka.ms/gcm/tlsverify f
or <span class="token function">more</span> information.
Enumerating objects: <span class="token number">15</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">8</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">10</span>/10<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, <span class="token number">1.20</span> KiB <span class="token operator">|</span> <span class="token number">1.20</span> MiB/s, done.
Total <span class="token number">15</span> <span class="token punctuation">(</span>delta <span class="token number">5</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
remote: Powered by GITEE.COM <span class="token punctuation">[</span>GNK-6.4<span class="token punctuation">]</span>
To https://gitee.com/wxhcoding/git-demo.git
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      master -<span class="token operator">&gt;</span> master

<span class="token comment"># 远程仓库的代码进行了更新 我们首先需要pull拉取下来 再进行我们的提交操作</span>
<span class="token comment"># 注意 如果我们的代码也有更新 记得首先需要 add 和 commit</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> pull origin master
remote: Enumerating objects: <span class="token number">5</span>, done.
remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Unpacking objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">1.02</span> KiB <span class="token operator">|</span> <span class="token number">61.00</span> KiB/s, done.
From https://gitee.com/wxhcoding/git-demo
 * branch            master     -<span class="token operator">&gt;</span> FETCH_HEAD
   59d9599<span class="token punctuation">..</span>845f6d8  master     -<span class="token operator">&gt;</span> origin/master
Updating 59d9599<span class="token punctuation">..</span>845f6d8
Fast-forward
 hello.java <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

<span class="token comment"># 还可以去dev分支进行提交 首先切换到dev分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout dev
Switched to branch <span class="token string">&#39;dev&#39;</span>

<span class="token comment"># 提交dev分支 因为是首次提交直接push 后续如果不是第一次 首先需要pull再push</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-test <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> push origin dev
Total <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
remote: Powered by GITEE.COM <span class="token punctuation">[</span>GNK-6.4<span class="token punctuation">]</span>
remote: Create a pull request <span class="token keyword">for</span> <span class="token string">&#39;dev&#39;</span> on Gitee by visiting:
remote:     https://gitee.com/wxhcoding/git-demo/pull/new/wxhcoding:dev<span class="token punctuation">..</span>.wxhcod
ing:master
To https://gitee.com/wxhcoding/git-demo.git
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      dev -<span class="token operator">&gt;</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="克隆到本地" tabindex="-1"><a class="header-anchor" href="#克隆到本地" aria-hidden="true">#</a> 克隆到本地</h3><blockquote><p>首先我们新建一个文件夹用来存放我们克隆下来的远程仓库 这里演示的是远程有两个分支 master和dev 但是我们克隆默认只会克隆下来master一个分支 这时需要使用 <code>git checkout -b 本地分支名 远程分支名</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从远程克隆到本地</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone
$ <span class="token function">git</span> clone https://gitee.com/wxhcoding/git-demo.git
Cloning into <span class="token string">&#39;git-demo&#39;</span><span class="token punctuation">..</span>.
remote: Enumerating objects: <span class="token number">27</span>, done.
remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">27</span>/27<span class="token punctuation">)</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">18</span>/18<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">27</span> <span class="token punctuation">(</span>delta <span class="token number">9</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Receiving objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">27</span>/27<span class="token punctuation">)</span>, done.
Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">9</span>/9<span class="token punctuation">)</span>, done.

<span class="token comment"># 进入到克隆下来的仓库</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone
$ <span class="token builtin class-name">cd</span> git-demo/

<span class="token comment"># 查看远程连接 默认给我们起了别名 origin</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone/git-demo <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin  https://gitee.com/wxhcoding/git-demo.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  https://gitee.com/wxhcoding/git-demo.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 远程仓库有两个分支但是克隆只会默认克隆master分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone/git-demo <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch
* master

<span class="token comment"># 可以看到远程还有一个dev分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone/git-demo <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span>
* master
  remotes/origin/HEAD -<span class="token operator">&gt;</span> origin/master
  remotes/origin/dev
  remotes/origin/master

<span class="token comment"># 使用下面的命令进行分支的切换</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone/git-demo <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev origin/dev
Switched to a new branch <span class="token string">&#39;dev&#39;</span>
branch <span class="token string">&#39;dev&#39;</span> <span class="token builtin class-name">set</span> up to track <span class="token string">&#39;origin/dev&#39;</span><span class="token builtin class-name">.</span>

<span class="token comment"># 可以看到已经帮我们切换到了dev分支</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone/git-demo <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch
* dev
  master

<span class="token comment"># 并且版本号和远程仓库保持一致</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 /e/java0615/git-clone/git-demo <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* dev    59d9599 new merge and dev merge
  master cc29210 merge <span class="token builtin class-name">local</span> and remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="idea集成git" tabindex="-1"><a class="header-anchor" href="#idea集成git" aria-hidden="true">#</a> IDEA集成Git</h2><h3 id="配置git忽略文件" tabindex="-1"><a class="header-anchor" href="#配置git忽略文件" aria-hidden="true">#</a> 配置Git忽略文件</h3><p>我们在进行编写代码时，会有好多文件其实不需要上传到仓库，比如target文件，还有一些依赖包之类的文件，我们需要对这些文件进行忽略<br> 我们在<code>C:\\Users\\18032</code>这个目录下(即<code>.gitconfig</code>配置文件所在目录)新建一个<code>git.ignore</code>文件，文件中忽略的内容如下所示:</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code># Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*

.classpath
.project
.settings
target
.idea
*.iml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们在<code>.gitconfig</code>中配置这个忽略文件的位置</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[core]
	excludesfile = C:/Users/18032/git.ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="idea集成git-1" tabindex="-1"><a class="header-anchor" href="#idea集成git-1" aria-hidden="true">#</a> IDEA集成Git</h3><p>首先在IDEA中配置我们的Git<br><code>在File -&gt; Settings -&gt; Version Control -&gt; Git -&gt; 找到我们的Git安装位置(git.exe) -&gt; Test -&gt; 下方会出现我们的 Git version</code><br> 选中我们的项目，在IDEA上方找到VCS 然后找到 Create Git Repository 在本地磁盘中选择我们项目所在的位置即可<br> 右键我们的项目 选择 Git -&gt; Add 添加到暂存区 再进行 Commit 提交到本地仓库</p><div class="custom-container tip"><p class="custom-container-title">分支创建和合并</p><ul><li>在IDEA下方找到Git 在master右键 可以在此基础上创建分支 然后会切换到dev分支，我们在dev分支进行修改并提交，此时dev的日志会比master日志多一条</li><li>这时切换到master分支 这里看不到dev分支修改的内容 在master分支也进行一次修改并提交</li><li>这里我们两个分支内容不一样，我们进行分支的合并，把最新的内容都合并到master分支上 所以我们首先把我们当前所在的分支切换为master分支(要合并要master分支)</li><li>然后右键 dev 分支 ，选择 merge dev into master 会有提示我们选择保留哪个分支上面的内容 我们选择 Merge 手动操作 最后点击Apply应用</li><li>这里会帮我们自动进行add 和 commit</li></ul></div><div class="custom-container tip"><p class="custom-container-title">文件颜色</p><ul><li>红色 代表 没有在暂存区</li><li>黄色 代表 忽略的文件</li><li>绿色 代表 添加到暂存区的文件</li><li>白色 代表 本来的颜色代表提交到本地仓库</li><li>蓝色 代表 已经修改还未提交到暂存区</li></ul></div><h3 id="idea集成gitee" tabindex="-1"><a class="header-anchor" href="#idea集成gitee" aria-hidden="true">#</a> IDEA集成Gitee</h3><blockquote><p>首先我们在 Plugins 中 下载安装 Gitee 插件</p></blockquote><ul><li><p>我们在设置中 找到 Version Control 找到 Gitee 对我们的账号进行授权 可以直接在浏览器中进行授权 点击 Apply OK</p></li><li><p>然后我们在Gitee中创建一个空的仓库(什么都不要选择)，最好仓库名和我们的项目名相同 复制仓库的HTTPS链接</p></li><li><p>在Idea中选择项目 在上面的Git选择Push 然后粘贴我们的远程仓库地址 直接进行Push</p></li><li><p>如果想要提交dev分支 可以在下面找到dev分支 右键 Push 即可</p></li><li><p>如果我们的代码在远程发生了修改更新 我们在idea进行pull拉取即可或者Update Project 默认选择 merge incoming changes... 即可</p></li><li><p>远程仓库的克隆</p><ul><li>在idea上面的Git中选择Clone 输入我们要克隆的远程仓库的地址 选择要克隆在本地的位置(文件夹最好和项目名一致)</li><li>后续我们开发时 只需要clone一次 然后后面 add commit pull push 即可</li></ul></li></ul>`,29);function v(b,k){const a=t("ExternalLinkIcon");return i(),l("div",null,[d,u,n("blockquote",null,[n("p",null,[n("a",r,[s("git命令参考"),c(a)])])]),m])}const h=e(o,[["render",v],["__file","git.html.vue"]]);export{h as default};
