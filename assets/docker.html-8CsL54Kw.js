import{_ as c,r as l,o,c as p,d as n,b as s,a,e}from"./app-1lTnJ-Z-.js";const d={},r=n("h1",{id:"docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),s(" Docker")],-1),u=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),m={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"应用容器引擎",-1),k=n("li",null,[n("p",null,"Docker的优势"),n("ol",null,[n("li",null,"可移植性：docker容器可以在任何支持docker的环境中运行，包括本地开发环境、测试环境和生产环境，从而提高了应用程序的可移植性。"),n("li",null,"可伸缩性：docker容器可以根据负载的变化进行快速扩展和收缩，从而更好地满足应用程序的需求。"),n("li",null,"隔离性：docker容器提供了隔离的运行环境，从而使得不同容器中运行的应用程序互相隔离，避免了应用程序之间的干扰。")])],-1),b=n("p",null,"Docker架构",-1),g=e("<li><p>DockerClient(客户端)</p><ul><li>简单的来说就是docker所提供的一些命令 docker的客户端负责与docker的守护进程进行通讯</li></ul></li><li><p>DockerServer(主机)</p><ul><li>docker的服务端、在docker主机中存在一个守护进程。这个守护进行负责管理docker中常见的一些对象（比如：镜像、容器、数据卷...）</li><li>docker镜像：是一种特殊的文件系统(<strong>软件包</strong>)。用于封装应用项目以及该项目所需要的软件环境。比如一个Redis的镜像中，就封装了Redis这个软件，并且封装了这个Redis软件所需要的一些依赖环境。镜像是一个静态的概念，不包含任何动态数据，其内容在构建之后也不会被改变。</li><li>docker容器：容器是由镜像产生的<strong>运行实例</strong>，最终在服务器上运行的就是一个个容器。对于镜像和容器的关系，可以理解为Java中的类与对象的关系。</li></ul></li>",2),h=n("p",null,"Registry(注册中心)",-1),f=n("li",null,"就是存储镜像的仓库。在创建容器的时候首先会检测本地是否存在这个容器所对应的镜像，如果不存在此时会从注册中心上进行拉取镜像到本地，然后再进行使用。如果本地已经存在该镜像了，就不会再次进行拉取直接使用本地的镜像即可。",-1),_={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),y={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},q=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
 
<span class="token comment">#通过阿里源进行设置</span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    
<span class="token comment"># 安装docker    </span>
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker的服务相关的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看docker服务的运行状态</span>
systemctl status <span class="token function">docker</span>

<span class="token comment"># 启动docker服务</span>
systemctl start <span class="token function">docker</span>

<span class="token comment"># 关闭docker服务</span>
systemctl stop <span class="token function">docker</span>

<span class="token comment"># 重启docker服务</span>
systemctl restart <span class="token function">docker</span>

<span class="token comment"># 查看是否开机自启</span>
systemctl is-enabled <span class="token function">docker</span>

<span class="token comment"># 开机自启</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment"># 取消开机自启</span>
systemctl disable <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置阿里云镜像加速器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看docker的详细信息</span>
<span class="token function">docker</span> info

<span class="token comment"># 登录阿里云的网站 =&gt; 进入管理后台 =&gt; 搜索容器镜像服务 =&gt; 得到加速器地址</span>

<span class="token comment"># 在etc目录下创建一个docker文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker

<span class="token comment"># 创建一个json文件</span>
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># 添加下面的内容 自己获取到的加速器地址</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://phtv51hj.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 重新加载docker的守护进程</span>
systemctl daemon-reload

<span class="token comment"># 重启docker服务</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker镜像操作" tabindex="-1"><a class="header-anchor" href="#docker镜像操作" aria-hidden="true">#</a> Docker镜像操作</h2><div class="custom-container tip"><p class="custom-container-title">搜索远程镜像</p><p><code>docker search 镜像关键字</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw ~<span class="token punctuation">]</span><span class="token comment"># docker search redis</span>
NAME                                DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED
redis                               Redis is an <span class="token function">open</span> <span class="token builtin class-name">source</span> key-value store that…   <span class="token number">12355</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
redislabs/redisearch                Redis With the RedisSearch module pre-loaded…   <span class="token number">58</span>                   
redislabs/redisinsight              RedisInsight - The GUI <span class="token keyword">for</span> Redis                 <span class="token number">91</span>                   
redis/redis-stack-server            redis-stack-server installs a Redis server w…   <span class="token number">54</span>                   
redislabs/rebloom                   A probablistic datatypes module <span class="token keyword">for</span> Redis        <span class="token number">24</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/redis                     Clustered in-memory database engine compatib…   <span class="token number">40</span>                   
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">拉取镜像</p><p><code>docker pull 镜像名称[:tag(版本号)]</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw docker<span class="token punctuation">]</span><span class="token comment"># docker pull redis:7.0.10</span>
<span class="token number">7.0</span>.10: Pulling from library/redis
26c5c85e47da: Pull complete 
39f79586dcf2: Pull complete 
79c71d0520e5: Pull complete 
839b5a82ec1e: Pull complete 
3cf4217d20ac: Pull complete 
7ced743e94cb: Pull complete 
Digest: sha256:92b8b307ee28ed74da17578064c73307ad41e43f422f0b7e4e91498b406c59e3
Status: Downloaded newer image <span class="token keyword">for</span> redis:7.0.10
docker.io/library/redis:7.0.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">查看本地镜像</p><p><code>docker images [options]</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw docker<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
redis        <span class="token number">7.0</span>.10    33e3db53b328   <span class="token number">5</span> months ago   117MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">删除本地镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 根据镜像的id或者镜像的名称进行删除，如果不添加镜像的标签删除的就是最新的镜像</span>
<span class="token function">docker</span> rmi 镜像名称<span class="token punctuation">[</span>:镜像标签<span class="token punctuation">]</span>/镜像的id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="docker容器操作" tabindex="-1"><a class="header-anchor" href="#docker容器操作" aria-hidden="true">#</a> Docker容器操作</h2><div class="custom-container tip"><p class="custom-container-title">查询容器</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看本地正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># 查询所有的镜像，包含未运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 查询容器的id</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-q</span> 

<span class="token comment"># 示例</span>
<span class="token punctuation">[</span>root@jhw ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE          COMMAND                   CREATED         STATUS         PORTS                                       NAMES
ffdce85e902b   redis:7.0.10   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">2</span> minutes ago   Up <span class="token number">2</span> minutes   <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp   myredis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">创建容器</p></div><blockquote><ul><li>交互型容器：具有和用户交互的输入和输出终端，容器创建后自动进入容器中，退出容器后，容器自动关闭。</li><li>守护型容器：没有和用户交互终端，需要使用docker exec进入容器，退出后，容器不会关闭。</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> run
<span class="token comment"># 格式</span>
<span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> 镜像的名称:镜像标签/镜像id <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 类型参数选项：</span>
-d,--detach								<span class="token comment"># 以后台的模式执行命令</span>
-t, <span class="token parameter variable">--tty</span>								<span class="token comment"># 分配一个虚拟终端，通常和-i参数一起使用</span>
-i,--interactive						<span class="token comment"># 把交互界面一直保留，通常和-t参数一起使用</span>

<span class="token comment"># 示例1  创建一个交互型容器，容器在启动的时候打开一个shell窗口，并且让这个窗口一直保留</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> redis:7.0.10 
<span class="token comment"># 示例2  创建一个守护型容器，容器以后台的方式运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span>  redis:7.0.10 

<span class="token comment"># 常见参数</span>
<span class="token comment"># --name 给容器创建一个别名</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis01 redis:7.0.10  

<span class="token comment"># -p 实现端口映射 否则外部访问不到</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis01 <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis:7.0.10

<span class="token comment"># 示例</span>
<span class="token punctuation">[</span>root@jhw ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --name myredis -p 6379:6379 redis:7.0.10</span>
ffdce85e902bdff9f1c0940e400c5520b4befeed76137737d0ec18618d4d4aa4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">容器服务管理</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop 容器名称/容器id	    <span class="token comment"># 关闭容器</span>
<span class="token function">docker</span> start  容器名称/容器id	<span class="token comment"># 启动容器</span>
<span class="token function">docker</span> restart 容器名称/容器id	<span class="token comment"># 重启容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">删除容器</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除已经关闭的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器名称/容器的id

<span class="token comment"># 删除正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 容器名称/容器的id

<span class="token comment"># 删除所有的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">进入容器</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span>
<span class="token comment"># 格式</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER COMMAND <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># 常见的参数选项：												  </span>
-t, <span class="token parameter variable">--tty</span>														<span class="token comment"># 分配一个虚拟终端，通常和-i参数一起使用</span>
-i,--interactive												<span class="token comment"># 把交互界面一直保留，通常和-t参数一起使用</span>

<span class="token comment"># 示例1  进入到容器中同时打开一个shell窗口</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis01 /bin/bash   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">其他命令</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> 容器名称/容器的id  <span class="token comment"># 查询容器内进程日志，-f参数表示实时监控日志信息</span>
<span class="token function">docker</span> inspect 容器名称/容器的id  <span class="token comment"># 查看容器的详情信息</span>
<span class="token function">docker</span> <span class="token function">cp</span> 						 <span class="token comment"># 完成容器和宿主机之间的文件copy</span>

<span class="token comment"># 示例1</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> redis01		     <span class="token comment"># 实时查看redis01这个容器中的日志信息</span>
<span class="token comment"># 示例2</span>
<span class="token function">docker</span> inspect redis01		     <span class="token comment"># 查看容器的详情信息，主要就是：目录映射情况、端口映射情况、ip地址</span>
<span class="token comment"># 示例3</span>
<span class="token function">docker</span> <span class="token function">cp</span> a.txt redis01:/root    <span class="token comment"># 把宿主机中a.txt文件拷贝到redis01的root目录中</span>
<span class="token comment"># 示例4</span>
<span class="token function">docker</span> <span class="token function">cp</span> redis01:/root/a.txt <span class="token builtin class-name">.</span>  <span class="token comment"># 把容器中的root目录下的a.txt文件拷贝到宿主机中当前目录中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备份与迁移</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 把docker容器保存成一个镜像</span>
<span class="token function">docker</span> commit 容器名称/容器的id 镜像名称

<span class="token comment"># 把镜像保存为tar文件</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> 镜像tar文件名称 镜像名称/镜像id	

<span class="token comment"># 把tar文件恢复成为一个镜像</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> 镜像名称	

<span class="token comment"># 示例</span>
<span class="token punctuation">[</span>root@jhw ~<span class="token punctuation">]</span><span class="token comment"># docker commit myredis redisback</span>
sha256:19349668a2daa222f8cdd277f17370bf704b0510f5bb6a641263a021cb4f77cd

<span class="token punctuation">[</span>root@jhw ~<span class="token punctuation">]</span><span class="token comment"># cd /opt/soft</span>
<span class="token punctuation">[</span>root@jhw soft<span class="token punctuation">]</span><span class="token comment"># cd docker-tar/</span>

<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker save -o redisback.tar redisback</span>

<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY            TAG       IMAGE ID       CREATED              SIZE
redisback             latest    19349668a2da   About a minute ago   117MB
redis                 <span class="token number">7.0</span>.10    33e3db53b328   <span class="token number">5</span> months ago         117MB
portainer/portainer   latest    5f11582196a4   <span class="token number">10</span> months ago        287MB
mysql                 <span class="token number">8.0</span>.29    33037edcac9b   <span class="token number">14</span> months ago        444MB
centos                <span class="token number">7</span>         eeb6ee3f44bd   <span class="token number">2</span> years ago          204MB
<span class="token comment"># 删除掉之前的镜像</span>
<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker rmi -f redis:7.0.10</span>
Untagged: redis:7.0.10
Untagged: redis@sha256:92b8b307ee28ed74da17578064c73307ad41e43f422f0b7e4e91498b406c59e3
<span class="token comment"># 删除掉之前创建的容器</span>
<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker rm -f myredis</span>
myredis

<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker load -i redisback.tar </span>
Loaded image: redisback:latest
<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker run -d --name redisback -p 6379:6379 redisback</span>
2f7f51b802cd1d623a6aab868e9fb6ea0255fbe18f138f2958ee339020bf2fcb
<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS         PORTS                                       NAMES
2f7f51b802cd   redisback   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">6</span> seconds ago   Up <span class="token number">5</span> seconds   <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp   redisback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker数据卷操作" tabindex="-1"><a class="header-anchor" href="#docker数据卷操作" aria-hidden="true">#</a> Docker数据卷操作</h2><div class="custom-container tip"><p class="custom-container-title">创建数据卷</p><p><code>docker volume create 数据卷名称</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker volume create redis-data</span>
redis-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">查看数据卷</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
DRIVER    VOLUME NAME
<span class="token builtin class-name">local</span>     redis-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">查询数据卷详情</p><p><code>docker volume inspect 数据卷名称</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker volume inspect redis-data</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;CreatedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-09-19T19:17:11+08:00&quot;</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;Mountpoint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/redis-data/_data&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;redis-data&quot;</span>,
        <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">删除数据卷</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">rm</span> 数据卷名称  <span class="token comment"># 删除指定的数据卷</span>
<span class="token function">docker</span> volume prune 		<span class="token comment"># 删除未使用的数据卷</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,38),A={class:"custom-container tip"},E=n("p",{class:"custom-container-title"},"数据卷挂载",-1),T=n("p",null,[s("数据卷创建好了以后，在创建容器的时候就可以通过"),n("code",null,"-v"),s("参数，将创建好的数据卷挂载到容器中的某一个目录下。")],-1),j=n("p",null,[n("strong",null,"注意"),s(":")],-1),R=n("li",null,"如果数据卷没有提前创建好，那么在创建容器的时候会自动创建对应的数据卷",-1),N=n("li",null,[s("数据卷挂载的时候数据卷名称前面"),n("strong",null,"没有/")],-1),I=n("li",null,"容器目录不存在会自动创建",-1),M=n("li",null,"数据卷目录如果不为空，此时会使用数据卷目录内容覆盖容器目录内容",-1),S=n("li",null,"数据卷目录如果为空，容器目录不为空，此时就会使用容器目录内容覆盖数据卷目录",-1),O=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> myredis <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">-v</span> redis-data:/data redis:7.0.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),D={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"目录挂载",-1),P=n("p",null,"通过-v参数也可以将宿主机上的某一个目录挂载到容器中的某一个目录下。",-1),B=n("p",null,[n("strong",null,"注意"),s(":")],-1),C=n("li",null,"如果宿主机目录没有提前创建好，那么在创建容器的时候会自动创建对应的宿主机目录",-1),H=n("li",null,[s("宿主机目录挂载的时候宿主机目录名称前面"),n("strong",null,"有/")],-1),U=n("li",null,"容器目录不存在会自动创建",-1),V=n("li",null,"宿主机目录如果不为空，此时会使用宿主机目录内容覆盖容器目录内容",-1),G=n("li",null,"宿主机目录如果为空，容器目录不为空，此时就会使用容器目录内容清空掉",-1),L=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis03 <span class="token parameter variable">-p</span> <span class="token number">6381</span>:6379 <span class="token parameter variable">-v</span> /redis-data:/data redis:7.0.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="springboot项目部署" tabindex="-1"><a class="header-anchor" href="#springboot项目部署" aria-hidden="true">#</a> SpringBoot项目部署</h2><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> dockerfile</h3><table><thead><tr><th style="text-align:center;">指令</th><th style="text-align:left;">用法</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">FROM</td><td style="text-align:left;">FROM image_name:tag</td><td style="text-align:left;">指定一个构建镜像的基础源镜像，如果本地没有就会从公共库中拉取，没有指定镜像的标签会使用默认的latest标签，可以出现多次，如果需要在一个dockerfile中构建多个镜像。</td></tr><tr><td style="text-align:center;">MAINTAINER</td><td style="text-align:left;">MAINTAINER user_name</td><td style="text-align:left;">描述镜像的创建者，名称和邮箱</td></tr><tr><td style="text-align:center;">RUN</td><td style="text-align:left;">RUN &quot;command&quot; &quot;param1&quot; &quot;param2&quot;</td><td style="text-align:left;">用来执行一些命令，可以写多条</td></tr><tr><td style="text-align:center;">ENV</td><td style="text-align:left;">ENV key value</td><td style="text-align:left;">设置容器的环境变量，可以写多条。</td></tr><tr><td style="text-align:center;">ADD</td><td style="text-align:left;">ADD source_dir/file</td><td style="text-align:left;">将宿主机的文件复制到容器内，如果是压缩文件，则复制后自动解压</td></tr><tr><td style="text-align:center;">ENTRYPOINT</td><td style="text-align:left;">ENTRYPOINT &quot;command&quot; &quot;param1&quot; &quot;param2&quot;</td><td style="text-align:left;">用来指定容器启动时所执行的命令</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">使用dockerfile来构建一个包含Jdk17的centos7镜像</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 首先进入到jdk17安装包的目录下</span>
<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/opt/soft/docker-tar
<span class="token comment"># 创建dockerfile文件，文件内容如下</span>
<span class="token function">vim</span> dockerfile

FROM centos:7
MAINTAINER wxhcoding
RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/java
ADD jdk-17_linux-x64_bin.tar.gz /usr/local/java/
ENV <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk-17.0.8
ENV <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin

<span class="token comment"># 执行命令构建镜像；不要忘记后面的那个 .</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> centos7-jdk17 <span class="token builtin class-name">.</span>

<span class="token comment"># 查看镜像是否建立完成</span>
<span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY            TAG       IMAGE ID       CREATED          SIZE
centos7-jdk17         latest    25a9b51611ff   <span class="token number">12</span> seconds ago   522MB
redis                 <span class="token number">7.0</span>.10    33e3db53b328   <span class="token number">5</span> months ago     117MB
portainer/portainer   latest    5f11582196a4   <span class="token number">10</span> months ago    287MB
mysql                 <span class="token number">8.0</span>.29    33037edcac9b   <span class="token number">14</span> months ago    444MB
centos                <span class="token number">7</span>         eeb6ee3f44bd   <span class="token number">2</span> years ago      204MB

<span class="token comment"># 创建容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> centos-jdk centos7-jdk17 /bin/bash

<span class="token comment"># 进入之后查看是否有jdk</span>
<span class="token punctuation">[</span>root@527d4f0156ae /<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">&quot;17.0.8&quot;</span> <span class="token number">2023</span>-07-18 LTS
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.8+9-LTS-211<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.8+9-LTS-211, mixed mode, sharing<span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@527d4f0156ae /<span class="token punctuation">]</span><span class="token comment"># javac</span>
Usage: javac <span class="token operator">&lt;</span>options<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>source files<span class="token operator">&gt;</span>
where possible options include:
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="把springboot项目部署到docker容器中" tabindex="-1"><a class="header-anchor" href="#把springboot项目部署到docker容器中" aria-hidden="true">#</a> 把SpringBoot项目部署到Docker容器中</h3><p>首先把我们的项目使用Maven打包 [注意：配置文件中的访问数据库地址改为我们虚拟机的IP地址] 把jar包发送到我们的虚拟机上<br> 在存放jar包的同一级目录下创建文件dockerfile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># vim dockerfile</span>

<span class="token comment"># 文件中的内容如下</span>
FROM centos7-jdk17
MAINTAINER wxhcoding

<span class="token comment"># 声明容器内主进程所对应的端口</span>
EXPOSE <span class="token number">8081</span>
ADD ebuy-docker-1.0-SNAPSHOT.jar /ebuy-docker-1.0-SNAPSHOT.jar

<span class="token comment"># 相当于windows中的cd命令</span>
WORKDIR /
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span> , <span class="token string">&quot;-jar&quot;</span> , <span class="token string">&quot;ebuy-docker-1.0-SNAPSHOT.jar&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 构建镜像</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> ebuy-docker:v1.0 <span class="token builtin class-name">.</span>

<span class="token comment"># 创建容器 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> ebuy-docker <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8081 ebuy-docker:v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们在浏览器输入虚拟机的IP地址:项目的端口号 如<code>192.168.225.100:8081</code> 即可访问</p><h3 id="maven的docker插件自动化部署" tabindex="-1"><a class="header-anchor" href="#maven的docker插件自动化部署" aria-hidden="true">#</a> Maven的Docker插件自动化部署</h3><p>在pom.xml文件中添加Maven的docker插件</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.spotify<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>docker-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--将插件绑定在某个phase执行--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>build-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--将插件绑定在package这个phase(阶段)上。也就是说，用户只需执行mvn package，就会自动执行mvn docker:build--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>build<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--指定生成的镜像名--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageName</span><span class="token punctuation">&gt;</span></span>\${project.artifactId}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageName</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--指定标签,也就是版本号,可以自定义--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageTags</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageTag</span><span class="token punctuation">&gt;</span></span>v2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageTag</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageTags</span><span class="token punctuation">&gt;</span></span>
        
        <span class="token comment">&lt;!--指定远程 docker api地址 也就是服务器ip+docker的端口号--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dockerHost</span><span class="token punctuation">&gt;</span></span>http://192.168.225.100:2375<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dockerHost</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 指定 dockerfile 路径--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dockerDirectory</span><span class="token punctuation">&gt;</span></span>\${project.basedir}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dockerDirectory</span><span class="token punctuation">&gt;</span></span>
        
        <span class="token comment">&lt;!-- 是否跳过docker构建 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skipDockerBuild</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skipDockerBuild</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker服务端开启远程访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改该文件</span>
<span class="token function">vim</span> /lib/systemd/system/docker.service

<span class="token comment">#找到ExecStart行，修改成如下内容</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd <span class="token parameter variable">-H</span> tcp://0.0.0.0:2375 <span class="token parameter variable">-H</span> fd:// <span class="token parameter variable">--containerd</span><span class="token operator">=</span>/run/containerd/containerd.sock

systemctl daemon-reload				<span class="token comment">#重启守护进程</span>
systemctl restart <span class="token function">docker</span>			<span class="token comment">#重启docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写dockerfile文件 [注意: 此文件必须和pom.xml同一级目录]</p><div class="language-vim line-numbers-mode" data-ext="vim"><pre class="language-vim"><code>FROM centos7<span class="token operator">-</span>jdk17
MAINTAINER wxhcodidng
EXPOSE <span class="token number">8081</span>
ADD target<span class="token operator">/</span>ebuy<span class="token operator">-</span>docker<span class="token operator">-</span><span class="token number">1.0</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar <span class="token operator">/</span>ebuy<span class="token operator">-</span>docker<span class="token operator">-</span><span class="token number">1.0</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar

WORKDIR <span class="token operator">/</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;-jar&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;ebuy-docker-1.0-SNAPSHOT.jar&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行Maven的打包命令<br> 创建容器并进行访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jhw docker-tar<span class="token punctuation">]</span><span class="token comment"># docker run -d --name ebuy-docker_maven -p 8082:8081 ebuy-docker:v2.0</span>
a7b632d21875ace2b82e39bdb1e7f458201a580ae581ae6347a095bc635bb64f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function F(Y,J){const t=l("ExternalLinkIcon"),i=l("Badge");return o(),p("div",null,[r,u,n("blockquote",null,[n("p",null,[n("a",m,[s("docker"),a(t)]),s(" 是一个开源的"),v,s("，让开发者可以打包他们的应用(Redis、MySQL、Spring Boot程序、Centos...)以及依赖包到一个可移植的容器中,然后发布到任何流行的Linux或Windows操作系统的机器上。")])]),n("ul",null,[k,n("li",null,[b,n("ul",null,[g,n("li",null,[h,n("ul",null,[f,n("li",null,[s("默认的注册中心就是"),n("a",_,[s("docker hub"),a(t)]),s("，这个注册中心可以看做成是一个大的仓库，在这个大的仓库下有存在很多的子仓库，每一子仓库中存储的就是同一类镜像。各个镜像之间是通过镜像的tag(标签：可以理解为就是镜像的版本)进行区分。")])])])])])]),x,n("blockquote",null,[n("p",null,[n("a",y,[s("Install Docker Engine on CentOS"),a(t)])])]),q,n("div",A,[E,T,j,n("ol",null,[R,N,I,n("li",null,[a(i,{type:"warning",text:"注意和下面区分",vertical:"middle"})]),M,S])]),O,n("div",D,[w,P,B,n("ol",null,[C,H,U,n("li",null,[a(i,{type:"warning",text:"注意和上面区分",vertical:"middle"})]),V,G])]),L])}const K=c(d,[["render",F],["__file","docker.html.vue"]]);export{K as default};
