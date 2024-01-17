import{_ as e,r as i,o as t,c as l,d as n,b as s,a as o,e as p}from"./app-1lTnJ-Z-.js";const c={},r=n("h1",{id:"node",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node","aria-hidden":"true"},"#"),s(" Node")],-1),d=n("h2",{id:"nodejs版本切换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nodejs版本切换","aria-hidden":"true"},"#"),s(" NodeJs版本切换")],-1),m=n("br",null,null,-1),u=n("br",null,null,-1),v={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),k=n("code",null,"nvm-setup.exe",-1),h=p(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>在安装nvm之前，可以把电脑中之前下载的nodejs卸载，不知道是否有影响<br> 在安装过程中首先第一个选择的是nvm的安装位置，第二个选择的是nodejs的安装位置。</p></div><p>安装完成之后，<code>win+r</code>调用cmd命令行，输入 <code>nvm ls</code> 命令查看当前有哪些nodejs版本，可以看到目前还没有任何版本<br> 比如我们使用nvm安装一个 <code>16.20.1</code> 的版本， 就可以输入 <code>npm install 16.20.1</code> 等待下载安装即可<br> 安装其他版本类似，只需换掉后面的版本号即可<br> 此时，再次输入 <code>nvm ls</code> 命令，可以看到，目前安装了两个版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1803</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>nvm <span class="token function">ls</span>
    <span class="token number">18.16</span>.0
    <span class="token number">16.20</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>切换nodejs的版本,如下所示,可以看到切换成功</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1803</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>nvm use <span class="token number">18.16</span>.0
Now using <span class="token function">node</span> v18.16.0 <span class="token punctuation">(</span><span class="token number">64</span>-bit<span class="token punctuation">)</span>

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1803</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>node <span class="token parameter variable">-v</span>
v18.16.0

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1803</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>npm <span class="token parameter variable">-v</span>
<span class="token number">9.5</span>.1

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1803</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>nvm use <span class="token number">16.20</span>.1
Now using <span class="token function">node</span> v16.20.1 <span class="token punctuation">(</span><span class="token number">64</span>-bit<span class="token punctuation">)</span>

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1803</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>node <span class="token parameter variable">-v</span>
v16.20.1

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1803</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>npm <span class="token parameter variable">-v</span>
<span class="token number">8.19</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>nvm常用命令</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm off                     // 禁用node.js版本管理<span class="token punctuation">(</span>不卸载任何东西<span class="token punctuation">)</span>
nvm on                      // 启用node.js版本管理
nvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>       // 安装node.js的命名 version是版本号 例如：nvm <span class="token function">install</span> <span class="token number">8.12</span>.0
nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>     // 卸载node.js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用
nvm <span class="token function">ls</span>                      // 显示所有安装的node.js版本
nvm list available          // 显示可以安装的所有node.js的版本
nvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>           // 切换到使用指定的nodejs版本
nvm <span class="token function">v</span>                       // 显示nvm版本
nvm <span class="token function">install</span> stable          // 安装最新稳定版
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>nvm设置镜像源</p></div><p>在nvm安装目录下找到<code>setting.txt</code>文件，在最后面添加</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm的使用" tabindex="-1"><a class="header-anchor" href="#npm的使用" aria-hidden="true">#</a> npm的使用</h2><blockquote><p>NPM全称Node Package Manager，是Node.js包管理工具，是全球最大的模块生态系统，里面所有的模块都是开源免费的；也是Node.js的包管理工具，相当于后端的Maven 。</p></blockquote><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置阿里镜像</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/
<span class="token comment"># 确认配置已生效 应输出 https://registry.npm.taobao.org/</span>
<span class="token function">npm</span> config get registry
<span class="token comment"># 恢复默认的官方源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
<span class="token comment"># 配置全局依赖下载后存储位置</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">&quot;D:\\GlobalNodeModules&quot;</span>
<span class="token comment"># 确认配置已生效</span>
<span class="token function">npm</span> config get prefix
<span class="token comment"># 查看npm版本</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token comment"># 升级npm版本 </span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npm@9.6.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 项目初始化(2选1)</span>
<span class="token function">npm</span> init
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token comment"># 安装依赖(查看所有[依赖地址](https://www.npmjs.com))</span>
<span class="token comment"># 默认安装在cmd窗口指定事务前缀路径</span>
<span class="token function">npm</span> <span class="token function">install</span> 包名
<span class="token function">npm</span> <span class="token function">install</span> 包名@版本
<span class="token comment"># 安装全局依赖包(安装到d:/GlobalNodeModules)则可以在任何项目中使用它，而无需在每个项目中独立安装该包。</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> 包名
<span class="token comment"># 安装package.json中的所有记录的依赖</span>
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment"># 升级依赖</span>
<span class="token function">npm</span> update 包名
<span class="token comment"># 卸载依赖</span>
<span class="token function">npm</span> uninstall 包名   /   <span class="token function">npm</span> uninstall <span class="token parameter variable">-g</span> 包名
<span class="token comment"># 查看项目依赖</span>
<span class="token function">npm</span> <span class="token function">ls</span>
<span class="token comment"># 查看全局依赖</span>
<span class="token function">npm</span>  list  <span class="token parameter variable">-g</span>
<span class="token comment"># 运行命令</span>
<span class="token function">npm</span> run <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function g(f,_){const a=i("ExternalLinkIcon");return t(),l("div",null,[r,d,n("blockquote",null,[n("p",null,[s("Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，可以使 JavaScript 运行在服务器端。使用 Node.js，可以方便地开发服务器端应用程序，如 Web 应用、API、后端服务，还可以通过 Node.js 构建命令行工具等。"),m,s(" 在 Node.js 中，我们可以使用 JavaScript 来编写服务器端程序，这也使得前端开发人员可以利用自己已经熟悉的技能来开发服务器端程序，同时也让 JavaScript 成为一种全栈语言。"),u,s(" 首先在github上下载nvm，也就是Node.js的版本管理工具，"),n("a",v,[s("点击下载"),o(a)]),b,s(" 这个链接提供的是Windows版本，其余可以在github上搜索nvm下载在第一个下载即可，这里不再放链接，windows版本请下载"),k])]),h])}const x=e(c,[["render",g],["__file","node.html.vue"]]);export{x as default};
