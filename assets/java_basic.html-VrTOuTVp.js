import{_ as e,r as o,o as c,c as i,d as n,b as s,a as p,e as t}from"./app-1lTnJ-Z-.js";const l={},u=t(`<h1 id="java基础" tabindex="-1"><a class="header-anchor" href="#java基础" aria-hidden="true">#</a> Java基础</h1><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><blockquote><p>凡是在程序中，自己命名的部分，例如：类名、变量名、方法名等等，需要用到一些字符组成的序列来表示，它们就是标识符。例如：类名HelloWorld就是标识符。</p></blockquote><div class="custom-container tip"><p class="custom-container-title">标识符命名规则</p><ul><li>只能使用26个英文字母（大小写组合）、数字0-9，下划线_，美元符号等组成 <ul><li>虽然官方说只要是Unicode字符集中的字符都可以，但是我们不推荐使用上述以外的</li></ul></li><li>数字不能开头</li><li>一个标识符中不能包含空格</li><li>不能直接使用关键字、保留字、特殊值作为标识符</li><li>严格区分大小写</li></ul></div><div class="custom-container tip"><p class="custom-container-title">标识符命名规范/习惯</p><ul><li>见名知意</li><li>所有<strong>类名</strong>等：遵循<strong>大驼峰</strong>命名法，所有单词首字母大写，形式：XxxYyyZzz，例如：HelloWorld</li><li>所有<strong>变量名、方法名</strong>等：遵循<strong>小驼峰</strong>命名法，从第二个单词开始首字母大写，形式：xxxYyyZzz，例如：myName</li><li>所有的常量名：所有单词都大写，如果有多个单词，使用下划线链接，形式：XXX_YYY_ZZZ，例如：PI，MAX_PRIORITY</li><li>所有的包名：所有单词都小写，如果有多层包，多个单词之间使用.链接，形式：xxx.yyy.zzz，例如：java.lang包，java.util包 <ul><li>自己写的包名不要用java.开头，例如：com.code.xxx</li></ul></li></ul></div><h2 id="自增运算符" tabindex="-1"><a class="header-anchor" href="#自增运算符" aria-hidden="true">#</a> 自增运算符</h2><div class="custom-container tip"><p class="custom-container-title">独立的运算</p><p>如果自增运算是独立的运算，即自增表达式独立成一个语句，那么自增在前在后都一样，自增变量+1.</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SelfPlus</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//i=1</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//i会自增1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//i=2</span>
        <span class="token operator">++</span>i<span class="token punctuation">;</span> <span class="token comment">//i会继续自增1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//i=3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">语句中的一部分</p><p>如果自增运算只是语句中的一部分时，那么++在前在后是不同的</p><ul><li>++在<strong>前</strong>，需要先对自增变量加1，然后取自增变量的值参与其他运算</li><li>++在<strong>后</strong>，先取自增变量的值，先放一边，然后对自增变量加1</li></ul></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SelfPlus</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//j=1</span>
        <span class="token comment">//自增表达式在输出语句里面，只是语句的一部分</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">++</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//j=2 先对j加1，j=2，然后取j的2输出</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//j=2 先取j的值2，放一边，然后对j加1，j=3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//j=3</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> m<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//自增表达式在赋值语句里面，只是语句的一部分</span>
        <span class="token comment">//先取m的值1，放一边，然后对m加1，m=2，而赋值给n的是之前取出来的1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//m=2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//n=1</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> q <span class="token operator">=</span> <span class="token operator">++</span>p<span class="token punctuation">;</span><span class="token comment">//自增表达式在赋值语句里面，只是语句的一部分</span>
        <span class="token comment">//先对p进行自增1，p=2，然后取p的值2赋值给q</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//p=2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//q=2</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        z <span class="token operator">=</span> <span class="token operator">++</span>z<span class="token punctuation">;</span><span class="token comment">//自增表达式在赋值语句里面，只是语句的一部分</span>
        <span class="token comment">//先对z进行自增1，z=2，然后取z的值2赋值给z</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//z=2</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        y <span class="token operator">=</span> y<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//自增表达式在赋值语句里面，只是语句的一部分</span>
        <span class="token comment">//先取y的值1，放一边，然后对y加1，y=2，刚才取出来的1会重新赋值给y</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//y=1</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> i<span class="token operator">++</span> <span class="token operator">*</span> <span class="token operator">++</span>j <span class="token operator">+</span> <span class="token operator">--</span>i <span class="token operator">*</span> j<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token comment">/*
		先处理=右边的：
			（1）i++，取i的值2，放一边，然后i自增为3
			（2）++j，先对j自增，j=2，然后取j的值2，放一边
			（3）算*，  2 * 2 = 4，放一边
			（4）--i， 先对i进行自减，i=2，然后取i的值2，放一边
			（5）j--，先取j的值2，放一边，然后j自减，j=1
			（6）算*， 2*2=4，放一边
			（7）算+， 4+4=8
		再处理赋值：k=8
		*/</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//i=2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;j = &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//j=1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;k = &quot;</span> <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//k=8</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法的参数传递" tabindex="-1"><a class="header-anchor" href="#方法的参数传递" aria-hidden="true">#</a> 方法的参数传递</h2><div class="custom-container warning"><p class="custom-container-title">形参和实参</p><p>接收值的就是形参<br> 给别人传值的就是实参<br> 参数传递只能是单向的 <strong>实参给形参</strong></p><ul><li>调用方法：(实参列表)</li><li>声明/定义新方法：(形参列表)</li></ul></div><div class="custom-container tip"><p class="custom-container-title">参数类型是基本数据类型</p><p>实参给形参赋完值之后，它们就完全没有关系了。形参无论怎么修改，和实参都无关。</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//a=1</span>
    <span class="token comment">// 因为这里只是调用了change方法，并没有接收数据，所以a的值不变</span>
    <span class="token function">change</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//a=1</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">形参是引用数据类型</p><p>形参对元素的修改，相当于实参对元素的修改。因为此时形参和实参指向了同一个对象（数组也是对象）。<br> 如果形参重新new了，接下来的操作就和实参无关了。</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1, 2, 3, 4, 5]</span>
    <span class="token comment">// 这里相当于是把nums数组的首地址传递过去，更改的是原来数据中的值</span>
    <span class="token function">change</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[2, 4, 6, 8, 10]</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法的重载" tabindex="-1"><a class="header-anchor" href="#方法的重载" aria-hidden="true">#</a> 方法的重载</h2><div class="custom-container tip"><p class="custom-container-title">重载</p><p>在<strong>同一个类中或父子类中</strong>，出现了<strong>方法名相同</strong>，<strong>形参列表不同</strong>（形参的个数、类型不同，和形参名无关）的两个或多个方法，这种现象称为方法的重载（Overload）<br><strong>注意</strong>：方法的重载和返回值类型<strong>无关</strong>。</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*    
public static double max(int a,int b){
    //仅仅是返回值类型不同，方法名和形参列表相同，这样的方法不是重载方法
    return a &gt; b ? a : b;
}
*/</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
    max <span class="token operator">=</span> max <span class="token operator">&gt;</span> c <span class="token operator">?</span> max <span class="token operator">:</span> c<span class="token punctuation">;</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">,</span><span class="token keyword">double</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载后的匹配原则：</p><ul><li>先找最匹配的，如果有最匹配，就不看其他的了。</li><li>如果既找不到最匹配的，也找不到可以兼容的，但是兼容程度相同的方法只能1个。</li><li>换句话说，如果找不到兼容的，或者找到多个相同兼容性的方法都会报错。</li></ul><h2 id="权限修饰符" tabindex="-1"><a class="header-anchor" href="#权限修饰符" aria-hidden="true">#</a> 权限修饰符</h2><table><thead><tr><th></th><th>本类</th><th>本包的其他类</th><th>其他包的子类</th><th>同一个模块其他包的非子类</th></tr></thead><tbody><tr><td>private</td><td>√</td><td>×</td><td>×</td><td>×</td></tr><tr><td>缺省（不写）</td><td>√</td><td>√</td><td>×</td><td>×</td></tr><tr><td>protected</td><td>√</td><td>√</td><td>√</td><td>×</td></tr><tr><td>public</td><td>√</td><td>√</td><td>√</td><td>√</td></tr></tbody></table><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><div class="custom-container tip"><p class="custom-container-title">继承的特点和要求</p><ol><li>Java中类与类之间，只支持<strong>单继承</strong>。比喻：只有一个亲生父亲。</li><li>Java中类支持<strong>多层继承</strong>。父类还可以有父类。比喻：代代相传。</li><li>Java的根父类是java.lang.Object类，所有的引用数据类型的根父类都是它。换句话说，如果一个类没有明确说它的父类是谁，那么它的父类就默认为Object类。</li><li>子类会继承父类的所有的成员变量、成员方法。但是如果父类中把成员变量、成员方法私有化了，那么子类中是无法直接使用的。</li><li>子类<strong>不能继承</strong>父类的构造器。但是子类构造器的首行必须、一定会<strong>调用</strong>父类的构造器。 <ul><li>子类的构造器默认是会调用父类的无参构造。如果写super();也是表示调用父类的无参构造。</li><li>子类的构造器“首行”，可以通过 super(实参列表);语句 明确调用父类的有参构造。</li><li>如果父类没有无参构造，子类的构造器首行又没写 super(实参列表);语句，那么代码就报错了。</li></ul></li></ol></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string">&quot;在吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> score<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;good good study, day day up.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//子类中直接调用父类声明的方法</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;姓名：&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span><span class="token string">&quot;，年龄：&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span><span class="token string">&quot;，成绩：&quot;</span> <span class="token operator">+</span> score<span class="token punctuation">;</span>
        <span class="token comment">//子类中直接使用父类声明的属性</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">Person</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestExtend</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//name,age,eat()是Student类从Person类继承的</span>

        s<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Student类扩展的，新增的</span>
        s<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">89</span><span class="token punctuation">;</span><span class="token comment">//Student类扩展的，新增的</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重写" tabindex="-1"><a class="header-anchor" href="#重写" aria-hidden="true">#</a> 重写</h3><blockquote><p>方法的重写(Override):当子类继承了父类的某个方法时，子类中关于该方法的功能实现有别于父类该方法的实现，那么子类就可以对该方法进行重写，重新实现。</p></blockquote><div class="custom-container tip"><p class="custom-container-title">重写的要求</p><ul><li><p>方法名：必须完全相同</p></li><li><p>(形参列表)：必须完全相同（类型、个数、顺序三者完全相同，和形参名无关）</p></li><li><p>返回值类型：</p><ul><li>void或基本数据类型：必须完全相同</li><li>引用数据类型：&lt;= <ul><li>如果父类被重写的方法返回值类型是Object，那么子类重写该方法时返回值类型可以是Object或Object的子类（String等）。</li><li>如果父类被重写的方法返回值类型是Animal，那么子类重写该方法时返回值类型可以是Animal或Animal的子类（Dog，Cat等）。</li></ul></li></ul></li><li><p>权限修饰符：&gt;=</p><ul><li>如果父类被重写的方法权限修饰符是public，那么子类重写该方法时只能是public</li><li>如果父类被重写的方法权限修饰符是protected，那么子类重写该方法时可以是public或protected</li><li>如果父类被重写的方法权限修饰符是缺省，那么子类重写该方法时可以是缺省、protected、public（不能跨包重写，因为缺省的跨包看不见）</li><li>如果父类被重写的方法权限修饰符是private，那么子类不能重写它，因为private在子类中不可见。</li></ul></li></ul></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果子类重写了父类的方法，子类中又想要调用父类被重写的方法，必须使用super.父类的被重写方法()。 <img src="https://cdn.jsdelivr.net/gh/wxhcoding/myblog-img/javaweb/java-20230809135704.png" alt="java-20230809135704"></p></div><details class="custom-container details"><summary>点击查看测试代码</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token comment">/*
（1）声明父类：Person类
- 包含属性：姓名，年龄，性别，属性私有化，
- 包含get/set方法
- 提供无参构造public Person()
- 提供有参构造public Person(String name, int age, char gender)
类{
    属性;
    构造器;
    方法;
}
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">char</span> gender<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">char</span> gender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGender</span><span class="token punctuation">(</span><span class="token keyword">char</span> gender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;姓名：&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;，年龄：&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;，性别：&quot;</span> <span class="token operator">+</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token comment">/*
（2）声明子类：Student类，继承Person类
- 新增属性：score成绩，属性私有化，
- 包含get/set方法
- 提供无参构造public Student()
- 提供有参构造public Student(String name, int age, char gender, int score)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> score<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//这里默认找的是父类的无参构造</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">char</span> gender<span class="token punctuation">,</span> <span class="token keyword">int</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">int</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// return &quot;姓名：&quot; + getName() +&quot;，年龄：&quot; + getAge() +&quot;，性别：&quot; + getGender() +&quot;，成绩：&quot; + score;</span>
        <span class="token comment">// 上面的太繁琐</span>
        <span class="token comment">// 调用父类的getInfo()方法再加上成绩的值</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">+</span><span class="token string">&quot;，成绩：&quot;</span> <span class="token operator">+</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestOverride</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//查看有参构造的参数列表：快捷键Ctrl + p</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//姓名：张三，年龄：23，性别：男</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//姓名：李四，年龄：24，性别：男，成绩：59</span>
        <span class="token comment">//这里的2个getInfo不一样，Student类重写了getInfo方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2>`,34),k={class:"custom-container warning"},r=n("p",{class:"custom-container-title"},"注意",-1),d={href:"https://gitee.com/wxhcoding/datastruct-pratice",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="实现array的相关功能" tabindex="-1"><a class="header-anchor" href="#实现array的相关功能" aria-hidden="true">#</a> 实现Array的相关功能</h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>通过对动态数组中的功能进行编写来理解数组，其中主要包含以下的功能:</p><ul><li>求和 【完成】</li><li>最大最小【完成】</li><li>翻转 【完成】</li><li>元素个数 【完成】</li><li>是否为空 【完成】</li><li>是否为满[扩容] 【完成】</li><li>增 【完成】 <ul><li>指定位置添加</li><li>首添加</li><li>尾添加</li></ul></li><li>删 【完成】 <ul><li>指定位置删除 返回旧值</li><li>删除第一个</li><li>删除最后一个</li><li>删除指定元素</li><li>删除可能触发缩减[如果元素个数小于数组长度/3 则就可以缩减到一半]</li></ul></li><li>改 【完成】 <ul><li>指定位置修改并返回旧值</li></ul></li><li>查 【完成】 <ul><li>查找指定位置元素</li><li>是否包含某个元素</li><li>返回指定元素下标</li><li>返回从指定位置开始是否包含某个元素</li></ul></li><li>取子数组 过滤(判定器) 【完成】</li><li>排序 【完成】 <ul><li>冒泡排序</li><li>选择排序[只记录最小值下标位置 一趟比较完之后再交换，最小值下标位置改变了才需要交换]</li><li><strong>快速排序</strong></li></ul></li></ul></div><details class="custom-container details"><summary>点击查看具体实现代码</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>array</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Wang Jiahao
 * <span class="token keyword">@date</span> 2023-9-12 16:41
 * 动态数组:
 * 求和 最大最小 翻转  【完成】
 * 增   【完成】
 * 删   【完成】
 *  指定位置删除 返回旧值
 *  删除第一个
 *  删除最后一个
 *  删除指定元素
 * 改 【完成】
 *  指定位置修改并返回旧值
 * 查 【完成】
 *  查找指定位置元素
 *  是否包含某个元素
 *  返回指定元素下标
 *  返回从指定位置开始是否包含某个元素
 *
 * 元素个数 【完成】
 * 是否为空  【完成】
 * 是否为满[扩容]  【完成】
 * 删除可能触发缩减[如果元素个数小于数组长度/3 则就可以缩减到一半]  【完成】
 * 取子数组 过滤(判定器) 【完成】
 * 排序( 冒泡、
 *      选择排序[只记录最小值下标位置 一趟比较完之后再交换，最小值下标位置改变了才需要交换]
 *      快速排序)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyArray</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: 注意:   this代表调用者对象</span>

    <span class="token comment">// 默认初始化的数组容量为10(如果不传递容量默认为10)</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_CAPACITY</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">;</span> <span class="token comment">//数组</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span> <span class="token comment">//计数器 有数据的长度</span>

    <span class="token comment">// 无参构造</span>
    <span class="token keyword">public</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// this代表调用者对象 即可以直接调用下面的有参构造 传递一个默认容量</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_CAPACITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 有参构造</span>
    <span class="token keyword">public</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化一个数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 并且默认的计数器为0</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 添加一个数据</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//默认在末尾添加 直接调用addLast()方法</span>
        <span class="token function">addLast</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 插入到开头</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//直接调用插入中间的方法 并赋值index为0</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 中间插入 查看添加时数组是否已满 若已满自动扩容到原来二倍</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 检查下标 是否越界</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 检查数组是否已满</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 若当前数组已满 则扩容到原来二倍</span>
            <span class="token function">resize</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// index所在位置的所有元素向后移动</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 给index所在位置赋值 即插入传过来的n</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token comment">// 更新计数器 即数组中的数据长度</span>
        <span class="token operator">++</span>size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 检查下标是否越界</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;您所输入的下标index:&quot;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&quot;越界, 请检查您输入的下标, 下标的有效范围为:&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;[0~&quot;</span> <span class="token operator">+</span> size <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 插入到最后</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取数组中元素个数</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断数组是否为空</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断数组是否已满</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除指定位置的元素 需要判断删除之后数组容量
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 删除的元素下标
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 首先检查传递的下标值是否有效</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取旧值 并最后返回要删除的元素</span>
        <span class="token keyword">int</span> old <span class="token operator">=</span> data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 10 4 2 4 7 5 1  index: 3</span>
        <span class="token comment">// 2 10 4 () 4 7 5 1</span>
        <span class="token comment">// 从index的下标开始依次向左移动</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 注意：更新数据容量</span>
        <span class="token operator">--</span>size<span class="token punctuation">;</span>
        <span class="token comment">// 判断删除之后数组的容量大小</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 若删除之后小于原来的1/3 则缩减为原来的 1/2</span>
            <span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 返回旧值</span>
        <span class="token keyword">return</span> old<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除第一个元素
     * <span class="token keyword">@return</span> 返回删除的元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//直接调用;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除最后一个元素
     * <span class="token keyword">@return</span> 返回删除的元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//直接调用;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除一个指定元素
     * <span class="token keyword">@param</span> <span class="token parameter">target</span> 删除的元素值
     * <span class="token keyword">@return</span> 删除是否成功
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">removeTarget</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 首先查找给定元素的下标</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">getIndex0f</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//未查询到此元素</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 修改指定位置的元素
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 修改元素的下标
     * <span class="token keyword">@param</span> <span class="token parameter">n</span> 要修改为的数值
     * <span class="token keyword">@return</span> 返回之前的旧值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 检查下标是否有效</span>
        <span class="token keyword">int</span> old <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回旧值</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">return</span> old<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查找指定位置的元素
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 要查找的下标
     * <span class="token keyword">@return</span> 返回元素值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查找给定元素的下标
     * <span class="token keyword">@param</span> <span class="token parameter">target</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getIndex0f</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getIndexOf</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 从begin的位置开始查找元素的下标值
     * <span class="token keyword">@param</span> <span class="token parameter">target</span>
     * <span class="token keyword">@param</span> <span class="token parameter">begin</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getIndexOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span> begin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>begin <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> begin <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;开始下标索引非法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> begin<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 查不到返回 -1</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断是否包含某个元素
     * <span class="token keyword">@param</span> <span class="token parameter">target</span> 要判断的元素值
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getIndex0f</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对数组的容量进行扩容或者缩减
     * <span class="token keyword">@param</span> <span class="token parameter">newCap</span> 需要传递过来数组的容量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">int</span> newCap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调整容量 如果传递过来的新容量&lt;2 则赋值一个默认值2</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCap <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newCap <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 声明一个新的数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>newCap<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 把之前数组的数据赋值给新的数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 把新数组的引用赋值给旧数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> newArray<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 求和</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递归求和
     * <span class="token keyword">@return</span> 数组中的和
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">begin</span> 传入的值为每次递归的开始值
     * <span class="token keyword">@return</span> 返回数组中所有元素的和
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token keyword">int</span> begin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>begin <span class="token operator">==</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果相等则递归结束 已经递归完所有的元素</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>begin<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">sum2</span><span class="token punctuation">(</span>begin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 求最大值</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递归求最大值
     * <span class="token keyword">@return</span> 返回最大值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">max2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">max2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">max2</span><span class="token punctuation">(</span><span class="token keyword">int</span> begin<span class="token punctuation">,</span> <span class="token keyword">int</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>begin <span class="token operator">==</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果相等则递归结束 直接返回传过来的max即可</span>
            <span class="token keyword">return</span> max<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>begin<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果传过来的下标值对应的数据大于max 则递归时替换之前的max</span>
            <span class="token keyword">return</span> <span class="token function">max2</span><span class="token punctuation">(</span>begin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>begin<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">max2</span><span class="token punctuation">(</span>begin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 求最小值</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                min <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> min<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递归求最小值
     * <span class="token keyword">@return</span> 返回最小值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">min2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">min2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">min2</span><span class="token punctuation">(</span><span class="token keyword">int</span> begin<span class="token punctuation">,</span> <span class="token keyword">int</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>begin <span class="token operator">==</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果相等则递归结束 直接返回传过来的min即可</span>
            <span class="token keyword">return</span> min<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>begin<span class="token punctuation">]</span> <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果传过来的下标值对应的数据小于min 则递归时替换之前的min</span>
            <span class="token keyword">return</span> <span class="token function">min2</span><span class="token punctuation">(</span>begin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>begin<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">min2</span><span class="token punctuation">(</span>begin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 翻转数组
     * <span class="token keyword">@return</span> 返回翻转之后的数据
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">MyArray</span> <span class="token function">reverseArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//两边相互交换</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>size <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>size <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 过滤根据某个条件过滤出来一个子数组 [判定器]
     * <span class="token keyword">@param</span> <span class="token parameter">predicate</span> 穿过来的某个条件
     * <span class="token keyword">@return</span> 返回子数组
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">MyArray</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> predicate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyArray</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>predicate<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 冒泡排序
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//控制需要排序多少趟</span>
            <span class="token keyword">int</span> flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//用此变量来判断是否发生了交换</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 大值往后走</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> data<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">swap</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 没有发生交换则直接跳出循环</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 选择排序
     * 每次遍历先记录一个下标值作为最小值的下标 然后依次向后遍历，若有更小的则更新最小值下标 一趟遍历之后再进行交换
     * 这样一趟遍历之后即可确定一个最小值的位置 再继续对后面的数据排序即可
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">selectSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 记录最小值的下标位置</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//依次进行比较 如果有更小的则更新最小值下标</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>minIndex <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//只有最小值下标发生了改变才需要进行交换</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> minIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 快速排序
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token operator">&lt;</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束的条件</span>
            <span class="token keyword">int</span> pivotIndex <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 划分 获取枢轴元素最终的下标</span>
            <span class="token comment">// 对枢轴左边递归</span>
            <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> pivotIndex<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 对枢轴右边递归</span>
            <span class="token function">quickSort</span><span class="token punctuation">(</span>pivotIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 首先确定一个枢轴元素 这里默认为 第一个元素</span>
        <span class="token keyword">int</span> pivot <span class="token operator">=</span> data<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token operator">&lt;</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 注意: 这里为什么里面还有判定 left&lt;right</span>
            <span class="token comment">// 因为可能 30   30</span>
            <span class="token comment">//         |    |</span>
            <span class="token comment">//        left right</span>
            <span class="token comment">// 假如枢轴元素也是30 此时已经满足划分的条件</span>
            <span class="token comment">// 但是如果没有left&lt;right 后买你可能会继续移动 此时left或者right所在的下标位置就会不符合要求</span>
            <span class="token comment">// 因为本该停止 但是因为值相等还会继续循环</span>
            <span class="token comment">// 所以在进行数据交换的时候就会出现错误 不会对正确对应的下标值进行替换</span>
            <span class="token comment">// TODO:  所以里面也必须加left&lt;right</span>

            <span class="token comment">// 在进行数据位置的移动时 不需要考虑是否会覆盖原来的值 因为我们已经把 第一个left所在的值放到了pivot变量中</span>

            <span class="token comment">// 从右向左遍历</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果右边比pivot大 则一直循环 知道遇到比pivot小的一个元素停止</span>
                <span class="token operator">--</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 把比枢轴元素小的移动到左边</span>
            data<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// 从左向右遍历</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果左边比pivot小 则一直循环 知道遇到比pivot大的一个元素停止</span>
                <span class="token operator">++</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 把比枢轴元素大的移动到右边</span>
            data<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        data<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> pivot<span class="token punctuation">;</span> <span class="token comment">// 把最后所在的下标位置放入我们的枢轴元素</span>
        <span class="token keyword">return</span> left<span class="token punctuation">;</span> <span class="token comment">//返回下标值</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//交换两个数据的位置 这里传递的是两个数据的下标值</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//专门写一个交换两个数的位置</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 重写toString()方法</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//最后会多一个逗号 删除</span>
        sb<span class="token punctuation">.</span><span class="token function">deleteCharAt</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看测试方法</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>array</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Wang Jiahao
 * <span class="token keyword">@date</span> 2023-9-12 16:41
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyArrayTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main1</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyArray</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;随机数组为: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;max: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;min: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sum: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;递归求和: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">sum2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;递归求最大值: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">max2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;递归求最小值: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">min2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reverseArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//对数组进行翻转</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;翻转数组: &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyArray</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 创建一个随机数组</span>
            arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 选择排序</span>
        arr<span class="token punctuation">.</span><span class="token function">selectSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;选择排序arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 删除指定位置元素</span>
        arr<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除后的arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 删除第一个元素</span>
        arr<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除第一个arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 删除最后一个元素</span>
        arr<span class="token punctuation">.</span><span class="token function">removeEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除最后一个arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 删除指定元素 - 如果有多个循环删除</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">removeTarget</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除指定元素arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 修改指定位置的元素</span>
        arr<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;修改之后的arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取指定位置元素</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;arr.get(1) = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 判断是否包含某个元素</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;arr.contains(10) = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取元素个数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;arr.getSize() = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 判断数组是否为空</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;arr.isEmpty() = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组自动扩容arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 判断数组是否已满</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;arr.isFull() = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 根据某个条件判断符合要求 并输出子数组</span>
        <span class="token class-name">MyArray</span> myArray <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>t <span class="token operator">-&gt;</span> t <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 是否是偶数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;myArray = &quot;</span> <span class="token operator">+</span> myArray<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 冒泡排序</span>
        arr<span class="token punctuation">.</span><span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;冒泡排序arr = &quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MyArray</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">11</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 快速排序</span>
        arr2<span class="token punctuation">.</span><span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>arr2<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;快速排序arr2 = &quot;</span> <span class="token operator">+</span> arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//生成一个随机数</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="实现list的相关功能" tabindex="-1"><a class="header-anchor" href="#实现list的相关功能" aria-hidden="true">#</a> 实现List的相关功能</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该部分主要是实现了List的相关功能，这里和上面的Array功能类似，这里是可以存放对象的数据，主要用到了泛型，数据比较时使用到了比较器，进行数据过滤时使用到了判定器等，下面是具体的实现</p></div><details class="custom-container details"><summary>点击查看实体类</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>list</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Wang Jiahao
 * <span class="token keyword">@date</span> 2023-9-13 16:49
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> grade<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> score<span class="token punctuation">;</span>
    <span class="token comment">// 下面使用idea都可自动生成</span>

    <span class="token comment">// 无参构造</span>

    <span class="token comment">// 有参构造</span>

    <span class="token comment">// 生成 getter setter 方法</span>

    <span class="token comment">// 重写 toString() 方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看List接口的声明</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>list</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Wang Jiahao
 * <span class="token keyword">@date</span> 2023-9-13 16:47
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token comment">//T是泛型参数 是形参</span>

    <span class="token comment">// 添加一个数据</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 插入到开头</span>
    <span class="token keyword">void</span> <span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token class-name">T</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 中间插入 查看添加时数组是否已满 若已满自动扩容到原来二倍</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">T</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 检查下标是否越界</span>
    <span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 插入到最后</span>
    <span class="token keyword">void</span> <span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">T</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取数组中元素个数</span>
    <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断数组是否为空</span>
    <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断数组是否已满</span>
    <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 删除指定位置的元素 需要判断删除之后数组容量</span>
    <span class="token class-name">T</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 删除第一个元素</span>
    <span class="token class-name">T</span> <span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 删除最后一个元素</span>
    <span class="token class-name">T</span> <span class="token function">removeEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 删除一个指定元素</span>
    <span class="token keyword">boolean</span> <span class="token function">removeTarget</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 修改指定位置的元素</span>
    <span class="token class-name">T</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">T</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 查找指定位置的元素</span>
    <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 查找给定元素的下标</span>
    <span class="token keyword">int</span> <span class="token function">getIndex0f</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 从begin的位置开始查找元素的下标值</span>
    <span class="token keyword">int</span> <span class="token function">getIndexOf</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span> begin<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断是否包含某个元素</span>
    <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 求最大值</span>
    <span class="token class-name">T</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 根据条件求最大值</span>
    <span class="token class-name">T</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 求最小值</span>
    <span class="token class-name">T</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 根据条件求最小值</span>
    <span class="token class-name">T</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 翻转数组</span>
    <span class="token keyword">void</span> <span class="token function">reverseArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 过滤 根据某个条件过滤到新数组中</span>
    <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 自然排序</span>
    <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 定制排序</span>
    <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看接口的实现</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>list</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Wang Jiahao
 * <span class="token keyword">@date</span> 2023-9-13 16:48
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyListImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>

    <span class="token comment">// 默认初始化的数组容量为10(如果不传递容量默认为10)</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_CAPACITY</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">;</span> <span class="token comment">//数组</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span> <span class="token comment">//计数器 有数据的长度</span>

    <span class="token keyword">public</span> <span class="token class-name">MyListImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_CAPACITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyListImpl</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addLast</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token class-name">T</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">// 中间插入 查看添加时数组是否已满 若已满自动扩容到原来二倍</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">T</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 检查下标 是否越界</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 检查数组是否已满</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 若当前数组已满 则扩容到原来二倍</span>
            <span class="token function">resize</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// index所在位置的所有元素向后移动</span>
            data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 给index所在位置赋值 即插入传过来的n</span>
        data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token comment">// 更新计数器 即数组中的数据长度</span>
        <span class="token operator">++</span>size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">int</span> newCap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调整容量 如果传递过来的新容量&lt;2 则赋值一个默认值2</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCap <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newCap <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 声明一个新的数组 对创建的新数组进行强转</span>
        <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArray <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>newCap<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 把之前数组的数据赋值给新的数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 把新数组的引用赋值给旧数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> newArray<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;您所输入的下标index:&quot;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&quot;越界, 请检查您输入的下标, 下标的有效范围为:&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;[0~&quot;</span> <span class="token operator">+</span> size <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">T</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 首先检查传递的下标值是否有效</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取旧值 并最后返回要删除的元素</span>
        <span class="token class-name">T</span> old <span class="token operator">=</span> data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 10 4 2 4 7 5 1  index: 3</span>
        <span class="token comment">// 2 10 4 () 4 7 5 1</span>
        <span class="token comment">// 从index的下标开始依次向左移动</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 注意：更新数据容量</span>
        <span class="token operator">--</span>size<span class="token punctuation">;</span>
        <span class="token comment">// 判断删除之后数组的容量大小</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">&lt;=</span> data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 若删除之后小于原来的1/3 则缩减为原来的 1/2</span>
            <span class="token function">resize</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 返回旧值</span>
        <span class="token keyword">return</span> old<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">removeEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">removeTarget</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 首先查找给定元素的下标</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">getIndex0f</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//未查询到此元素</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">T</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 检查下标是否有效</span>
        <span class="token class-name">T</span> old <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回旧值</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">return</span> old<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">check</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getIndex0f</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getIndexOf</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getIndexOf</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span> begin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>begin <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> begin <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;开始下标索引非法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> begin<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 查不到返回 -1</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getIndex0f</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">T</span> max <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 将对象转换为 comparable 对象 调用 compareTo 方法和最大值进行比较</span>
            <span class="token comment">// 如果左大右小 返回大于0</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">)</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">T</span> max <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 传过来一个条件 根据条件去比较 比如传递过来的是对象的分数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>comparator<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">T</span> min <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 将对象转换为 comparable 对象 调用 compareTo 方法和最大值进行比较</span>
            <span class="token comment">// 如果左小右大 返回小于0</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">)</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                min <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> min<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">T</span> min <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 传过来一个条件 根据条件去比较 比如传递过来的是对象的分数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>comparator<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> min<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                min <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> min<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//两边相互交换</span>
            <span class="token class-name">T</span> temp <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>size <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            data<span class="token punctuation">[</span>size <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> predicate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 传过来一个过滤的条件 根据条件去过滤</span>
        <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> myList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyListImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>predicate<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                myList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> myList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 记录最小值的下标位置</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//依次进行比较 如果有更小的则更新最小值下标</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">)</span> data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>minIndex <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//只有最小值下标发生了改变才需要进行交换</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> minIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 每趟先选择第一个为最小值下标</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>comparator<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 使用比较器比较两个值 如果往后遍历有更小的值 则更新最小值下标</span>
                    minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>minIndex <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//只有最小值下标发生了改变才进行交换</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> minIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//交换两个数据的位置 这里传递的是两个数据的下标值</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//专门写一个交换两个数的位置</span>
        <span class="token class-name">T</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sb<span class="token punctuation">.</span><span class="token function">deleteCharAt</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除最后一个逗号</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看功能的测试代码</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atcode<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>list</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Wang Jiahao
 * <span class="token keyword">@date</span> 2023-9-13 16:44
 */</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 泛型
 * 比较器
 * 判定器
 * lambda表达式 函数式编程
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyListTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> myList1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyListImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;hhh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;eee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;zzz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ggg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最大值: &quot;</span><span class="token operator">+</span>myList1<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最小值: &quot;</span><span class="token operator">+</span>myList1<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;从小到大排序为 = &quot;</span> <span class="token operator">+</span> myList1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> myList2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyListImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">76</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token string">&quot;ttt&quot;</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&quot;eee&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;myList2 = &quot;</span> <span class="token operator">+</span> myList2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 下面形式的lambda表达式语法 comparator1等效于comparator</span>
        <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> comparator1 <span class="token operator">=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> s1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> comparator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student</span> s1<span class="token punctuation">,</span> <span class="token class-name">Student</span> s2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> s1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年龄最小值: &quot;</span><span class="token operator">+</span>myList2<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>comparator<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年龄最大值: &quot;</span><span class="token operator">+</span>myList2<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>comparator<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        myList2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>comparator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;根据年龄排序 = &quot;</span> <span class="token operator">+</span> myList2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;分数最大值: &quot;</span> <span class="token operator">+</span> myList2<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s2<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;分数最小值: &quot;</span> <span class="token operator">+</span> myList2<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s2<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         *     public void sort(Comparator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> comparator) <span class="token punctuation">{</span>
         *         for (int i = 0; i &lt; size - 1; i++) <span class="token punctuation">{</span>
         *             int minIndex = i; // 每趟先选择第一个为最小值下标
         *             for (int j = i + 1; j &lt; size; j++) <span class="token punctuation">{</span>
         *                 if (comparator.compare(data[j], data[minIndex]) &lt; 0) <span class="token punctuation">{</span>
         *                     // 使用比较器比较两个值 如果往后遍历有更小的值 则更新最小值下标
         *                     minIndex = j;
         *                 <span class="token punctuation">}</span>
         *             <span class="token punctuation">}</span>
         *             if (minIndex != i) <span class="token punctuation">{</span> //只有最小值下标发生了改变才进行交换
         *                 swap(i, minIndex);
         *             <span class="token punctuation">}</span>
         *         <span class="token punctuation">}</span>
         *     <span class="token punctuation">}</span>
         * 比较器的调用形式:
         * 首先调用我们的排序方法 先依次执行语句
         * comparator.compare(data[j], data[minIndex]) &lt; 0 这一句会拿到两个对象 并把两个对象传给我们这里的s1 和 s2
         * 并拿到对象的分数信息 返回差值
         * 如果返回的差值 小于0 则证明左边小右边大 所以会交换两个数据的位置
         */</span>
        myList2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s2<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;根据分数排序 = &quot;</span> <span class="token operator">+</span> myList2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> filter1 <span class="token operator">=</span> myList2<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> student<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         *     public MyList<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> filter(Predicate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> predicate) <span class="token punctuation">{</span>
         *         // 传过来一个过滤的条件 根据条件去过滤
         *         MyList<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> myList = new MyListImpl&lt;&gt;();
         *         for (int i = 0; i &lt; size; i++) <span class="token punctuation">{</span>
         *             if (predicate.test(data[i])) <span class="token punctuation">{</span>
         *                 myList.add(data[i]);
         *             <span class="token punctuation">}</span>
         *         <span class="token punctuation">}</span>
         *         return myList;
         *     <span class="token punctuation">}</span>
         * 过滤器的调用形式:
         * 首先调用我们的filter方法 先依次执行语句
         * 这一句会拿到我们这一次遍历的对象 predicate.test(data[i])
         * 然后拿着对象到 这一句来赋值并判断是否符合这个条件 student -&gt; student.getScore() &gt; 60
         * 如果符合会返回true 否则 false
         * 根据是否符合条件再添加到子数组中
         */</span>
        <span class="token comment">// lambda等价于上面filter1的形式</span>
        <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> filter <span class="token operator">=</span> myList2<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>student <span class="token operator">-&gt;</span> student<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;过滤分数及格的 = &quot;</span> <span class="token operator">+</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10),m={class:"custom-container warning"},b=n("p",{class:"custom-container-title"},"注意",-1),y={href:"https://gitee.com/wxhcoding/datastruct-pratice",target:"_blank",rel:"noopener noreferrer"};function w(g,f){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("div",k,[r,n("p",null,[s("这部分涉及到的一些代码比较多，都是一些关于基本方法的实现，这部分的代码已经上传到了Gitee上面，"),n("a",d,[s("点击查看"),p(a)])])]),v,n("div",m,[b,n("p",null,[s("这部分涉及到的一些代码比较多，都是一些关于基本方法的实现，这部分的代码已经上传到了Gitee上面，"),n("a",y,[s("点击查看"),p(a)])])])])}const x=e(l,[["render",w],["__file","java_basic.html.vue"]]);export{x as default};
