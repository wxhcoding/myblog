import{_ as e,r as o,o as c,c as l,d as n,b as s,a as t,e as p}from"./app-1lTnJ-Z-.js";const i={},u=n("h1",{id:"elasticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch","aria-hidden":"true"},"#"),s(" Elasticsearch")],-1),r={href:"https://www.elastic.co/cn/",target:"_blank",rel:"noopener noreferrer"},d=n("strong",null,[s("Lucene（Apache开源全文检索工具包）"),n("strong",null,"的搜索服务器。它提供了一个"),s("分布式多用户能力")],-1),k=p('<p>Elasticsearch应用场景:</p><ul><li>搭建日志系统 <ul><li><strong>ELK套件</strong>日志系统应该是Elasticsearch使用最广泛的场景之一了，Elasticsearch支持海量数据的存储和查询，特别适合日志搜索场景。广泛使用的ELK套件(Elasticsearch、Logstash、Kibana)是日志系统最经典的案例，使用Logstash和Beats组件进行日志收集，Elasticsearch存储和查询应用日志，Kibana提供日志的可视化搜索界面。</li></ul></li><li>搭建数据分析系统 <ul><li>Elasitcsearch支持数据分析，例如强大的数据聚合功能，通过搭配Kibana，提供诸如直方图、统计分组、范围聚合等方便使用的功能，能够快速实现一些数据报表等功能。在数字化转型的大行其道的当下，需要从海量数据中发现数据的规律，从而做出一定的决策，Elasticsearch一定是最适合的解决方案之一。</li></ul></li><li>搭建搜索系统 <ul><li>Elasticsearch为搜索而生，用于搭建全文搜索系统是自然而然的事情，它能够提供快速的索引和搜索功能，还有相关的评分功能、分词插件等，支持丰富的搜索特性，可以用于搭建大型的搜索引擎，更加常用语实现站内搜索，例如银行App、购物App等站内商品、服务搜索。</li></ul></li><li>构建海量数据业务系统即席查询服务 <ul><li>目前大量的需要支持事务的系统使用MySQL作为数据库，但随着业务的开展，数据量会越来越大，而MySQL的性能会越来越差，虽然可以通过分库分表的方案进行解决，但是操作比较复杂，而且往往每隔一段时间就需要进行扩展，且代码需要配合修改。这种情况下可以将数据从MySQL同步到Elasticsearch，针对实时性要求不太高或者主要查询历史数据且数据量比较大的场景使用Elasticsearch提供查询，而对需要事务实时控制的即时数据还是通过MySQL存储和查询。</li></ul></li><li>作为独立数据库系统 <ul><li>Elasticsearch本身提供了数据持久化存储的能力，并且提供了增删改查的功能，在某些应用场景下可以直接当做数据库系统来使用，既提供了存储能力，又能够同时具备搜索能力，整体技术架构会比较简单，例如博客系统、评论系统。需要注意的是，Elasticsearch不支持事务，且写入的性能相对关系型数据库稍弱，所有需要使用事务的场景都不能将Elasticsearch当做唯一的数据库系统，这使得这种使用场景很少见。</li></ul></li></ul><p><strong>倒排索引</strong>:</p><ul><li>数据根据词条进行分词，同时记录文档索引位置</li><li>将词条相同的数据化进行合并</li><li>对词条进行排序</li></ul><p>搜索过程: 先将搜索词语进行分词，分词后再倒排索引列表查询文档位置(docId)。根据docId查询文档数据。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><div class="custom-container tip"><p class="custom-container-title">对比数据库</p></div><table><thead><tr><th>关系型数据库</th><th>Elasticsearch</th></tr></thead><tbody><tr><td>Database(数据库)</td><td>Index(索引库)</td></tr><tr><td>Table(表)</td><td>Type(类型)</td></tr><tr><td>Row(行)</td><td>Document(文档)</td></tr><tr><td>Column(列)</td><td>Field(字段)</td></tr><tr><td>Schema(DDL建表语句)</td><td>Mapping(映射)</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">索引(Index)</p></div><p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。<br> 能搜索的数据必须索引，这样的好处是可以提高查询速度，比如：新华字典前面的目录就是索引的意思，目录可以提高查询速度。<br> Elasticsearch索引的精髓：一切设计都是为了提高搜索的性能。</p><div class="custom-container tip"><p class="custom-container-title">类型(Type)</p></div><p>在一个索引中，你可以定义一种或多种类型。<br> 一个类型是你的索引的一个逻辑上的分类/分区，其语义完全由你来定。通常，会为具有一组共同字段的文档定义一个类型。不同的版本，类型发生了不同的变化</p><table><thead><tr><th>版本</th><th>Type</th></tr></thead><tbody><tr><td>5.x</td><td>支持多种type</td></tr><tr><td>6.x</td><td>只能有一种type</td></tr><tr><td>7.x</td><td>默认不再支持自定义索引类型（默认类型为：_doc）</td></tr><tr><td>8.x</td><td>默认类型为：_doc</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">文档(Document)</p></div><p>一个文档是一个可被索引的基础信息单元，也就是一条数据<br> 比如：你可以拥有某一个客户的文档，某一个产品的一个文档，当然，也可以拥有某个订单的一个文档。文档以<strong>JSON（Javascript Object Notation）格式</strong>来表示，而JSON是一个到处存在的互联网数据交互格式。<br> 在一个index/type里面，你可以存储任意多的文档。</p><div class="custom-container tip"><p class="custom-container-title">字段(Field)</p></div><p>相当于是数据表的字段，对文档数据根据不同属性进行的分类标识。</p><div class="custom-container tip"><p class="custom-container-title">映射(Mapping)</p></div><p>Mapping是处理数据的方式和规则方面做一些限制，如：某个字段的数据类型、默认值、分析器、是否被索引等等。这些都是映射里面可以设置的，其它就是处理ES里面数据的一些使用规则设置也叫做映射，按着最优规则处理数据对性能提高很大，因此才需要建立映射，并且需要思考如何建立映射才能对性能更好。</p><h2 id="elasticsearch-基础功能" tabindex="-1"><a class="header-anchor" href="#elasticsearch-基础功能" aria-hidden="true">#</a> Elasticsearch 基础功能</h2>',21),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b=p(`<h3 id="分词器" tabindex="-1"><a class="header-anchor" href="#分词器" aria-hidden="true">#</a> 分词器</h3><p>官方提供的分词器有这么几种: Standard、Letter、Lowercase、Whitespace、UAX URL Email、Classic、Thai等，中文分词器可以使用第三方的比如IK分词器。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span>
<span class="token comment">// &quot;analyzer&quot;: &quot;ik_max_word&quot;, // 或者使用这种形式 分词的粒度更大</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每天都是美好的一天&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// ik_smart 分词结果: 每天 都是 美好 的 一天</span>
<span class="token comment">// ik_max_word 分词结果: 每天 都是 美好 的 一天 一 天</span>

<span class="token comment">// ik_smart结果</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每天&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;都是&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;美好&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;的&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_CHAR&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一天&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引操作" tabindex="-1"><a class="header-anchor" href="#索引操作" aria-hidden="true">#</a> 索引操作</h3>`,4),q=n("code",null,"RestFul",-1),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html",target:"_blank",rel:"noopener noreferrer"},y=p(`<div class="custom-container tip"><p class="custom-container-title">创建索引</p><p>PUT /{索引名称}</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my_index

<span class="token comment">// 结果</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 可以对索引的分片和副本进行设置</span>
<span class="token comment">// 默认值 number_of_shards 为 1</span>
<span class="token comment">// 默认值 number_of_replicas 为 1（即每个主分片一个副本）</span>
PUT /my-index<span class="token number">-000001</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>  
      <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">2</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-index-000001&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">查看所有索引</p><p>GET /_cat/indices?v</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /_cat/indices?v

health status index           uuid                   pri rep docs.count docs.deleted store.size pri.store.size
yellow open   my_index        IgZL4FX8QAiQapfMn1POsA   <span class="token number">1</span>   <span class="token number">1</span>          <span class="token number">0</span>            <span class="token number">0</span>       225b           225b
yellow open   my-index<span class="token number">-000001</span> v0yxlD4GQFqBnGIV4cZCGg   <span class="token number">3</span>   <span class="token number">2</span>          <span class="token number">0</span>            <span class="token number">0</span>       675b           675b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">查看单个索引</p><p>GET /{索引名称}</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_index

<span class="token punctuation">{</span>
  <span class="token property">&quot;my_index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;allocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;_tier_preference&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data_content&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1700219432595&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-U6mGZPLSDKwfPSfIcWnJw&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8050099&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">删除索引</p><p>DELETE /{索引名称}</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>DELETE /my_index

<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档操作" tabindex="-1"><a class="header-anchor" href="#文档操作" aria-hidden="true">#</a> 文档操作</h3><p>文档是 ES 软件搜索数据的最小单位, 不依赖预先定义的模式，所以可以将文档类比为表的一行JSON类型的数据。我们知道关系型数据库中，要提前定义字段才能使用，在Elasticsearch中，对于字段是非常灵活的，有时候我们可以忽略该字段，或者动态的添加一个新的字段。</p>`,11),_={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html",target:"_blank",rel:"noopener noreferrer"},h=p(`<div class="custom-container tip"><p class="custom-container-title">创建文档</p><p>PUT /&lt;target&gt;/_doc/&lt;_id&gt;</p><p>POST /&lt;target&gt;/_doc/</p><p>PUT /&lt;target&gt;/_create/&lt;_id&gt;</p><p>POST /&lt;target&gt;/_create/&lt;_id&gt;</p><p>{ jsonbody }</p></div><p>在创建数据时，put需要指定唯一性标识，post可以自动生成一个唯一标识</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999</span>
<span class="token punctuation">}</span>

POST /my_index/_doc
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx1.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999</span>
<span class="token punctuation">}</span>
<span class="token comment">// 自动生成的id为 scsc3YsBzSvAqMaBgKBY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">查看文档</p><p>GET /{索引名称}/{类型}/{id}</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_index/_doc/<span class="token number">1</span>

<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /my_index/_doc/scsc3YsBzSvAqMaBgKBY

<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scsc3YsBzSvAqMaBgKBY&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx1.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">查询所有文档</p><p>GET /{索引名称}/_search</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_index/_search

<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scsc3YsBzSvAqMaBgKBY&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx1.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">修改文档</p><p>POST /{索引名称}/_update/{docId}<br> {<br> &quot;doc&quot;: {<br> &quot;属性&quot;: &quot;值&quot;<br> }<br> }</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_update/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4500</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// price已被更新</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4500</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>: 修改局部的参数只能使用post 如果使用put会覆盖掉原来的数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4500</span>
<span class="token punctuation">}</span>

<span class="token comment">// 会发现除去price的属性都被覆盖了</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4500</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">删除文档</p><p>DELETE /{索引名称}/{类型}/{id}</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>DELETE /my_index/_doc/<span class="token number">1</span>

<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mapping映射" tabindex="-1"><a class="header-anchor" href="#mapping映射" aria-hidden="true">#</a> mapping映射</h3>`,14),x=n("strong",null,"映射(mapping)",-1),f=n("br",null,null,-1),w={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html",target:"_blank",rel:"noopener noreferrer"},j=p(`<div class="custom-container tip"><p class="custom-container-title">查看映射</p><p>GET /{索引名称}/_mapping</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_index/_mapping

<span class="token punctuation">{</span>
  <span class="token property">&quot;my_index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">动态映射</p></div><p>在关系数据库中，需要事先创建数据库，然后在该数据库下创建数据表，并创建 表字段、类型、长度、主键等，最后才能基于表插入数据。而Elasticsearch中不 需要定义Mapping映射（即关系型数据库的表、字段等），在文档写入 Elasticsearch时，会根据文档字段<strong>自动识别类型</strong>，这种机制称之为<strong>动态映射</strong>。</p><p>这种动态映射有一个最大的不足就是针对字符串类型 会自动把字符串类型映射成两个text和keyword类型 占用空间增大一倍</p><table><thead><tr><th>数据</th><th>对应的类型</th></tr></thead><tbody><tr><td>null</td><td>字段不添加</td></tr><tr><td>true|flase</td><td>boolean</td></tr><tr><td>字符串</td><td>text/keyword</td></tr><tr><td>数值</td><td>long</td></tr><tr><td>小数</td><td>float</td></tr><tr><td>日期</td><td>date</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">静态映射</p></div><p>静态映射是在Elasticsearch中也可以事先定义好映射，即手动映射，包含文档的各字段类型、分词器等，这称为<strong>静态映射</strong>。</p><p>特殊类型：字符串</p><ul><li><strong>text</strong>: 用于长文本，对本文内容进行分词（产生倒排索引文档列表），支持多关键字<strong>全文查询</strong>。例如：对电商项目商品名称，或者文章正文设置为text 缺点：不能进行聚合（分组），不支持排序。</li><li><strong>keyword</strong>: 用于词条精确查询，支持等值查询，不需要进行分词字符串（分词后无意义）。例如：用户昵称、用户手机号、身份证号、图片地址。场景：根据品牌名称等值查询。支持聚合（分组）、排序 不支持多关键词查询</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 删除原创建的索引</span>
DELETE /my_index

<span class="token comment">// 创建索引，并同时指定映射关系和分词器等。</span>
PUT /my_index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;search_analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type分类如下</strong>:</p><ul><li>字符串：text(支持分词)和 keyword(不支持分词)。</li><li>text：该类型被用来索引长文本，在创建索引前会将这些文本进行分词，转化为词的组合，建立索引；允许es来检索这些词，text类型不能用来排序和聚合。</li><li>keyword：该类型不能分词，可以被用来检索过滤、排序和聚合，keyword类型不可用text进行分词模糊检索。</li><li>数值型：long、integer、short、byte、double、float</li><li>日期型：date</li><li>布尔型：boolean</li></ul><div class="custom-container tip"><p class="custom-container-title">nested</p></div>`,14),E=n("br",null,null,-1),I={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html",target:"_blank",rel:"noopener noreferrer"},T=p(`<ul><li>建立一个索引（ 存储博客文章及其所有评论）</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT my_comment_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;狂人日记&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;《狂人日记》是一篇象征性和寓意很强的小说，当时，鲁迅对中国国民精神的麻木愚昧颇感痛切。&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;非常棒的文章&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30 Nov 2023&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文章非常好&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;25 Nov 2022&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手动点赞&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20 Nov 2021&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，所以我们有一个文档描述了一个帖子和一个包含帖子上所有评论的内部对象评论。<br> 但是Elasticsearch搜索中的内部对象并不像我们期望的那样工作。</p><ul><li>执行查询</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_comment_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;comments.name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;comments.age&quot;</span><span class="token operator">:</span> <span class="token number">34</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 响应结果 这里居然查询到了数据 而根据上面可以看到是根本没有年龄为34的李四出现 </span>
<span class="token comment">// 李四年龄应该为38</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">62</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.5753641</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_comment_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.5753641</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;狂人日记&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;《狂人日记》是一篇象征性和寓意很强的小说，当时，鲁迅对中国国民精神的麻木愚昧颇感痛切。&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
              <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
              <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;非常棒的文章&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30 Nov 2023&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
              <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
              <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文章非常好&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;25 Nov 2022&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
              <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
              <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手动点赞&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20 Nov 2021&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>原因分析：comments字段默认的数据类型是Object，故我们的文档内部存储为：<br> {<br> &quot;title&quot;: [ 狂人日记],<br> &quot;body&quot;: [ 《狂人日记》是一篇象征性和寓意很强的小说，当时... ],<br> &quot;comments.name&quot;: [ 张三, 李四, 王五 ],<br> &quot;comments.comment&quot;: [ 非常棒的文章,文章非常好,手动点赞],<br> &quot;comments.age&quot;: [ 33, 34, 38 ],<br> &quot;comments.rating&quot;: [ 7, 8, 9 ]<br> }<br> 我们可以清楚地看到，comments.name和comments.age之间的关系已丢失。这就是为什么我们的文档匹配李四和34的查询。</p></blockquote><ul><li>删除当前索引 建立一个nested 类型的（comments字段映射为nested类型，而不是默认的object类型）</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT my_comment_index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nested&quot;</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT my_comment_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;狂人日记&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;《狂人日记》是一篇象征性和寓意很强的小说，当时，鲁迅对中国国民精神的麻木愚昧颇感痛切。&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;非常棒的文章&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30 Nov 2023&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文章非常好&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;25 Nov 2022&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手动点赞&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20 Nov 2021&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重新执行查询</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_comment_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;nested&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comments&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;comments.name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;comments.age&quot;</span><span class="token operator">:</span> <span class="token number">34</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 响应结果</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果发现没有返回任何的文档<br> 当将字段设置为nested 嵌套对象将数组中的每个对象索引为单独的隐藏文档，这意味着可以独立于其他对象查询每个嵌套对象。文档的内部表示:</p><blockquote><p>{<br> {<br> &quot;comments.name&quot;: [ 张三],<br> &quot;comments.comment&quot;: [ 非常棒的文章 ],<br> &quot;comments.age&quot;: [ 34 ],<br> &quot;comments.rating&quot;: [ 9 ]<br> },<br> {<br> &quot;comments.name&quot;: [ 李四],<br> &quot;comments.comment&quot;: [ 文章非常好 ],<br> &quot;comments.age&quot;: [ 38 ],<br> &quot;comments.rating&quot;: [ 8 ]<br> },<br> {<br> &quot;comments.name&quot;: [ 王五],<br> &quot;comments.comment&quot;: [手动点赞],<br> &quot;comments.age&quot;: [ 33 ],<br> &quot;comments.rating&quot;: [ 7 ]<br> },<br> {<br> &quot;title&quot;: [ 狂人日记 ],<br> &quot;body&quot;: [ 《狂人日记》是一篇象征性和寓意很强的小说，当时，鲁迅对中国... ]<br> }<br> }<br> 每个内部对象都在内部存储为单独的隐藏文档。 这保持了他们的领域之间的关系。</p></blockquote><h2 id="dsl高级查询" tabindex="-1"><a class="header-anchor" href="#dsl高级查询" aria-hidden="true">#</a> DSL高级查询</h2><p>Query DSL概述: Domain Specific Language(领域专用语言)，Elasticsearch提供了基于JSON的DSL来定义查询。</p><div class="custom-container tip"><p class="custom-container-title">数据准备</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 删除之前的索引库</span>
DELETE /my_index

<span class="token comment">// 创建索引，并同时指定映射关系和分词器等。</span>
PUT /my_index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;search_analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为笔记本电脑&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">5388</span><span class="token punctuation">}</span>

PUT /my_index/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">5500</span><span class="token punctuation">}</span>

PUT /my_index/_doc/<span class="token number">3</span>
<span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;VIVO手机&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">3600</span><span class="token punctuation">}</span>

PUT /my_index/_doc/<span class="token number">4</span>
<span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米redmi15手机&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;红米&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/hm.jpg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">1600</span><span class="token punctuation">}</span>

PUT /my_index/_doc/<span class="token number">5</span>
<span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为huawei mate60&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">8888</span><span class="token punctuation">}</span>

PUT /my_index/_doc/<span class="token number">6</span>
<span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为huawei平板电脑&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/hwpb.jpg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">5555</span><span class="token punctuation">}</span>

GET /my_index/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单条件查询" tabindex="-1"><a class="header-anchor" href="#单条件查询" aria-hidden="true">#</a> 单条件查询</h3><div class="custom-container tip"><p class="custom-container-title">查询所有</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 查询所有</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">匹配查询</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 匹配查询</span>
<span class="token comment">// 对查询文本进行分词 根据词条查询倒排索引 对text类型进行查询</span>
<span class="token comment">// 默认分词查询进行条件拼接采用的是or</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 结果</span>
<span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里把标题中包含华为和手机的数据全部返回了 但我们只想要包含华为手机的标题 </span>

<span class="token comment">// 我们可以把条件拼接改为and</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;and&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里只返回了标题中包含华为手机的数据</span>
<span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">多字段查询</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 多字段匹配查询</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为智能手机&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brand&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">关键字精确查询</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 关键字精确查询</span>
<span class="token comment">// term 关键字不会进行分词 使用整体去查询 必须保证索引库中有整体的数据</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 下面这个查询的结果为空 因为没有存储的品牌是 华为手机 四个字 只有 华为</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用精确查询 查询标题为 华为 的可以查出</span>
<span class="token comment">// 是因为 我们在索引库中进行保存时 是保存的标题分词之后的结果 而标题分词后有 华为 这个词条</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 但是我们改为 华为手机 查询出来的结果就为空 因为没有分词之后的词条为 华为手机</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">多关键字精确查询</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 多关键字精确查询</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;vivo&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 查询出来品牌为华为和vivo的手机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">范围查询</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 范围查询</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">// 大于等于</span>
        <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// 小于等于</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">指定返回的字段</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 指定字段返回  query同级增加_source进行过滤</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;includes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 排除某些字段</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;excludes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;brand&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多条件查询" tabindex="-1"><a class="header-anchor" href="#多条件查询" aria-hidden="true">#</a> 多条件查询</h3><p>bool 各条件之间有and,or或not的关系</p><ul><li>must: 各个条件都必须满足，所有条件是and的关系</li><li>should: 各个条件有一个满足即可，即各条件是or的关系</li><li>must_not: 不满足所有条件，即各条件是not的关系</li><li>filter: 与must效果等同，但是它不计算得分，<strong>效率更高点</strong>。</li></ul><div class="custom-container tip"><p class="custom-container-title">must</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 多条件查询</span>
<span class="token comment">// 查询关键字有 手机 且 价格在2000-6000之间</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
              <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">6000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">should</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 查询关键字有 手机 或者 价格在2000-6000之间</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
              <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">6000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">must_not</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 上面的查询条件取反 上面查询结果为5条记录 这个查询只有1条(一共6条)</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must_not&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
              <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">6000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">filter</p></div><p>和must效果一致 must查询会有得分情况 使用filter没有</p><h3 id="聚合查询" tabindex="-1"><a class="header-anchor" href="#聚合查询" aria-hidden="true">#</a> 聚合查询</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 聚合查询 类似于数据库中的分组查询</span>
<span class="token comment">// 三要素: 聚合名称(从响应结果中获取聚合结果)、聚合字段(分组字段)、聚合类型(如何分组)</span>
<span class="token comment">// 需求: 经过条件查询后 查询出结果中包含哪些品牌</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brand_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;brand&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 从aggregations中获取结果</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brand_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token comment">// 从上面的基础上 获取各个品牌的平均价格</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brand_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;brand&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brand_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">6332.75</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3600</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1600</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂需求 首先有过滤的条件 然后和query并级写聚合查询的信息aggs</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 查询关键字为手机 且 价格大于2000 包含的商品品牌和一些统计信息</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token number">2000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brandAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;brand&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;priceInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 按照价格排序-降序 升序</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 也支持多字段排序</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h3><p>不支持深度分页 不支持获取1万条数据以后的数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 不管多少条数据 默认返回前10条的数据</span>
<span class="token comment">// 分页查询  from 起始位置 size 每页大小</span>
<span class="token comment">// 页大小为3 查询第二页数据 from=(2-1)*3</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高亮" tabindex="-1"><a class="header-anchor" href="#高亮" aria-hidden="true">#</a> 高亮</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 高亮显示: 前提使用关键字的匹配查询 匹配到的词条需要特殊显示(通过HTML标签+样式)</span>
<span class="token comment">// 三要素: 高亮字段、高亮前置标签、高亮后置标签</span>
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;font style=&#39;color:red&#39;&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/font&gt;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">0.56665546</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.56665546</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;font style=&#39;color:red&#39;&gt;华为&lt;/font&gt;手机&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.45618832</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为huawei平板电脑&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hwpb.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5555</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;font style=&#39;color:red&#39;&gt;华为&lt;/font&gt;huawei平板电脑&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.4156716</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为huawei mate60&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8888</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;font style=&#39;color:red&#39;&gt;华为&lt;/font&gt;huawei mate60&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.3817649</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;font style=&#39;color:red&#39;&gt;华为&lt;/font&gt;笔记本电脑&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java客户端操作es" tabindex="-1"><a class="header-anchor" href="#java客户端操作es" aria-hidden="true">#</a> Java客户端操作ES</h2><h3 id="java-api-client" tabindex="-1"><a class="header-anchor" href="#java-api-client" aria-hidden="true">#</a> Java API Client</h3>`,56),P={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/getting-started-java.html",target:"_blank",rel:"noopener noreferrer"},S=n("ul",null,[n("li",null,"首先需要导入原生的JavaClient依赖"),n("li",null,"注册Bean对象ElasticsearchClient"),n("li",null,"注入客户端对象实现文档CRUD")],-1),D=p(`<div class="custom-container tip"><p class="custom-container-title">项目搭建</p></div><ul><li>创建项目：elasticsearch_demo</li><li>导入pom.xml</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>co.elastic.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.12.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>jakarta.json<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jakarta.json-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">配置连接</p></div><p>在启动类配置Elasticsearch连接</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// com.atcode.ESDemo</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ESDemo</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ESDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ElasticsearchClient</span> <span class="token function">buildElasticsearchClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BasicCredentialsProvider</span> credsProv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasicCredentialsProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        credsProv<span class="token punctuation">.</span><span class="token function">setCredentials</span><span class="token punctuation">(</span>
                <span class="token class-name">AuthScope</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">UsernamePasswordCredentials</span><span class="token punctuation">(</span><span class="token string">&quot;elastic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;111111&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">RestClient</span> restClient <span class="token operator">=</span> <span class="token class-name">RestClient</span>
                <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token class-name">HttpHost</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;http://192.168.200.6:9200&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHttpClientConfigCallback</span><span class="token punctuation">(</span>hc <span class="token operator">-&gt;</span> hc
                        <span class="token punctuation">.</span><span class="token function">setDefaultCredentialsProvider</span><span class="token punctuation">(</span>credsProv<span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Create the transport with a Jackson mapper</span>
        <span class="token class-name">ElasticsearchTransport</span> transport <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestClientTransport</span><span class="token punctuation">(</span>
                restClient<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">JacksonJsonpMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// And create the API client</span>
        <span class="token class-name">ElasticsearchClient</span> esClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElasticsearchClient</span><span class="token punctuation">(</span>transport<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> esClient<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">测试api</p></div><p>首先创建一个实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Goods</span> <span class="token punctuation">{</span>

    <span class="token comment">// ES中文档标识：_ID 一般将实体类中id值跟_id值保持一致</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> price<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> category<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面开始进行api的使用测试</p><ul><li>新增文档</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span> <span class="token comment">// 一定确保单元测试类扫描到启动类 在同一个包下</span>
<span class="token comment">// com.atcode.ESDemoTest</span>
<span class="token keyword">class</span> <span class="token class-name">ESDemoTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ElasticsearchClient</span> elasticsearchClient<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token comment">// com.atcode.ESDemoTest#testDocIndex1</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDocIndex1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 构建一个索引库的文档对象</span>
        <span class="token class-name">Goods</span> goods <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">5999L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods<span class="token punctuation">.</span><span class="token function">setCategory</span><span class="token punctuation">(</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;华为Mate60Pro&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1.新增文档</span>
        <span class="token comment">// 1.1普通方式</span>
        <span class="token class-name">IndexRequest<span class="token punctuation">.</span>Builder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> goodsBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexRequest<span class="token punctuation">.</span>Builder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goodsBuilder<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;A001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">document</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 需要一个IndexRequest对象 上方是builder对象 需要使用build方法转换</span>
        elasticsearchClient<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>goodsBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
        {
            &quot;_index&quot;: &quot;my_index&quot;,
            &quot;_id&quot;: &quot;A001&quot;,
            &quot;_version&quot;: 1,
            &quot;_score&quot;: 1,
            &quot;_source&quot;: {
                &quot;id&quot;: 1,
                &quot;name&quot;: &quot;华为Mate60Pro&quot;,
                &quot;price&quot;: 5999,
                &quot;category&quot;: &quot;华为&quot;
            }
        }
        */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token comment">// com.atcode.ESDemoTest#testDocIndex2</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDocIndex2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构建一个索引库的文档对象</span>
    <span class="token class-name">Goods</span> goods <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    goods<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    goods<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">4999L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    goods<span class="token punctuation">.</span><span class="token function">setCategory</span><span class="token punctuation">(</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    goods<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;华为P60Pro&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 1.2新增文档 lambda方式</span>
    <span class="token class-name">IndexResponse</span> indexResponse <span class="token operator">=</span> elasticsearchClient<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> i
            <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;A002&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">document</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出返回结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;indexResponse = &quot;</span> <span class="token operator">+</span> indexResponse<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    indexResponse = IndexResponse:
    {&quot;_id&quot;:&quot;A002&quot;,&quot;_index&quot;:&quot;my_index&quot;,&quot;_primary_term&quot;:1,&quot;result&quot;:&quot;created&quot;,&quot;_seq_no&quot;:1,
    &quot;_shards&quot;:
    {&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_version&quot;:1}
     */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文档的删除</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 文档删除
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token comment">// com.atcode.ESDemoTest.testDocDelete</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDocDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.普通方式</span>
    <span class="token comment">// DeleteRequest.Builder builder = new DeleteRequest.Builder();</span>
    <span class="token comment">// builder.id(&quot;A001&quot;).index(&quot;my_index&quot;);</span>
    <span class="token comment">// DeleteResponse delete = elasticsearchClient.delete(builder.build());</span>
    <span class="token comment">// // 输出返回结果</span>
    <span class="token comment">// System.out.println(&quot;delete = &quot; + delete);</span>
    <span class="token comment">/*
    delete = DeleteResponse: {&quot;_id&quot;:&quot;A001&quot;,&quot;_index&quot;:&quot;my_index&quot;,&quot;_primary_term&quot;:1,&quot;result&quot;:&quot;deleted&quot;,&quot;_seq_no&quot;:2,
    &quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_version&quot;:2}
     */</span>

    <span class="token comment">// 2.lambda方式</span>
    <span class="token class-name">DeleteResponse</span> delete <span class="token operator">=</span> elasticsearchClient<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>d <span class="token operator">-&gt;</span> d<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;A002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;delete = &quot;</span> <span class="token operator">+</span> delete<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    delete = DeleteResponse: {&quot;_id&quot;:&quot;A002&quot;,&quot;_index&quot;:&quot;my_index&quot;,&quot;_primary_term&quot;:1,&quot;result&quot;:&quot;deleted&quot;,&quot;_seq_no&quot;:3,
    &quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_version&quot;:2}
     */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改根据id修改文档 和新增一样 只要id相同则就会对内容进行更改 直接更改新增的代码进行测试</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 因为上面都对文档内的数据进行了删除 这里再执行一下新增</span>
<span class="token doc-comment comment">/**
 * 修改文档
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDocUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构建一个索引库的文档对象</span>
    <span class="token class-name">Goods</span> goods <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    goods<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    goods<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">4999L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// goods.setCategory(&quot;华为---&quot;);</span>
    <span class="token comment">// goods.setName(&quot;华为P60Pro---&quot;);</span>
    goods<span class="token punctuation">.</span><span class="token function">setCategory</span><span class="token punctuation">(</span><span class="token string">&quot;华为!!!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    goods<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;华为P60Pro!!!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">UpdateResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> update <span class="token operator">=</span> elasticsearchClient<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>u <span class="token operator">-&gt;</span> u
            <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;A002&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Goods</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;update = &quot;</span> <span class="token operator">+</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    update = UpdateResponse: {&quot;_id&quot;:&quot;A002&quot;,&quot;_index&quot;:&quot;my_index&quot;,&quot;_primary_term&quot;:1,&quot;result&quot;:&quot;updated&quot;,&quot;_seq_no&quot;:5,
    &quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_version&quot;:2}
     */</span>
    <span class="token comment">/*
    update = UpdateResponse: {&quot;_id&quot;:&quot;A002&quot;,&quot;_index&quot;:&quot;my_index&quot;,&quot;_primary_term&quot;:1,&quot;result&quot;:&quot;updated&quot;,&quot;_seq_no&quot;:6,
    &quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_version&quot;:3}
     */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据id查询文档</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 根据id查询文档
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token comment">// com.atcode.ESDemoTest.testDocGet</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDocGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.lambda方式</span>
    <span class="token class-name">GetResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> goodsGetResponse <span class="token operator">=</span> elasticsearchClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>g <span class="token operator">-&gt;</span> g<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;A002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Goods</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Goods</span> goods <span class="token operator">=</span> goodsGetResponse<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;goods = &quot;</span> <span class="token operator">+</span> goods<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//goods = Goods(id=2, name=华为P60Pro!!!!!, price=4999, category=华为!!!!!)</span>

    <span class="token comment">// 2.普通方式</span>
    <span class="token class-name">GetRequest<span class="token punctuation">.</span>Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetRequest<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    builder<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;A002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">GetResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> getResponse <span class="token operator">=</span> elasticsearchClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Goods</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Goods</span> source <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;source = &quot;</span> <span class="token operator">+</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// source = Goods(id=2, name=华为P60Pro!!!!!, price=4999, category=华为!!!!!)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-data-elasticsearch" tabindex="-1"><a class="header-anchor" href="#spring-data-elasticsearch" aria-hidden="true">#</a> Spring Data Elasticsearch</h3>`,20),G={href:"https://spring.io/projects/spring-data-elasticsearch",target:"_blank",rel:"noopener noreferrer"},R=p(`<ul><li>导入启动依赖<br> 读取配置 自动注册bean对象<code>ElasticsearchClient</code></li><li>提供配置文件<br> ES的IP port 认证信息</li><li>使用 <ul><li>注入ElasticsearchClient实现文档的CRUD</li><li>持久层接口实现文档的CRUD(类似MyBatis-plus) <ul><li>实体类-跟索引库中的文档(记录)映射</li><li>创建一个接口继承SpringData提供的公共接口 扫描到该接口根据实现类产生的索引库及映射 --静态映射</li></ul></li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">项目搭建</p></div><ul><li>创建项目: elasticsearch_demo_springdata_es</li><li>导入pom.xml</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加配置文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">uris</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.200.6<span class="token punctuation">:</span><span class="token number">9200</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> elastic
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">111111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建启动类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// com.atcode.SpringDataESDemo</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringDataESDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringDataESDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">document映射</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 实体类跟索引库文档映射
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Document</span><span class="token punctuation">(</span>indexName <span class="token operator">=</span> <span class="token string">&quot;product&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 索引库名</span>
<span class="token comment">// com.atcode.model.Product</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span> <span class="token comment">// 标识主键 和文档的 _id</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 商品标题 索引 存储 分词
     */</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Text</span><span class="token punctuation">,</span> index <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> store <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> analyzer <span class="token operator">=</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span> searchAnalyzer <span class="token operator">=</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 商品图片 keyword 存储
     */</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Keyword</span><span class="token punctuation">,</span> store <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> index <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> image<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 商品品牌 keyword 存储 索引
     */</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Keyword</span><span class="token punctuation">,</span> store <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> index <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> brand<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 商品价格
     */</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Long</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>映射</strong>:<br> Spring Data通过注解来声明字段的映射属性，有下面的三个注解:</p><ul><li><p>@Document 作用在类，标记实体类为文档对象， indexName：对应索引库名称</p></li><li><p>@Id 作用在成员变量，标记一个字段作为id主键</p></li><li><p>@Field 作用在成员变量，标记为文档的字段，并指定字段映射属性:</p><ul><li>type：字段类型，取值是枚举：FieldType</li><li>index：是否索引，布尔类型，默认是true</li><li>store：是否存储，布尔类型，默认是false</li><li>analyzer：分词器名称：ik_max_word</li></ul></li><li><p>创建接口</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// com.atcode.repository.ProductRepository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductRepository</span> <span class="token keyword">extends</span> <span class="token class-name">ElasticsearchRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目 自动新增一个名为product的索引库</p><div class="custom-container tip"><p class="custom-container-title">测试</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringDataESDemoTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token comment">// 原生的ES客户端对象</span>
    <span class="token keyword">private</span> <span class="token class-name">ElasticsearchClient</span> elasticsearchClient<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token comment">// 采用SpringData的ES客户端对象</span>
    <span class="token keyword">private</span> <span class="token class-name">ProductRepository</span> productRepository<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用原生的客户端对象查询所有</span>
        <span class="token comment">// 普通方式</span>
        <span class="token comment">// SearchRequest.Builder builder = new SearchRequest.Builder();</span>
        <span class="token comment">// builder.index(&quot;my_index&quot;);</span>
        <span class="token comment">// SearchResponse&lt;Map&gt; searchResponse = elasticsearchClient.search(builder.build(), Map.class);</span>

        <span class="token comment">// lambda方式</span>
        <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> elasticsearchClient<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Hit</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&gt;</span></span> hit <span class="token operator">:</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span> source <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;source = &quot;</span> <span class="token operator">+</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
        source = {id=2, name=华为P60Pro!!!!!, price=4999, category=华为!!!!!}
        source = {id=1, name=华为Mate60Pro, price=5999, category=华为}
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面测试SpringData形式的Elasticsearch</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringDataESDemoTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token comment">// 原生的ES客户端对象</span>
    <span class="token keyword">private</span> <span class="token class-name">ElasticsearchClient</span> elasticsearchClient<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token comment">// 采用SpringData的ES客户端对象</span>
    <span class="token keyword">private</span> <span class="token class-name">ProductRepository</span> productRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.新增文档</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;P002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;华为2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">setBrand</span><span class="token punctuation">(</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">setImage</span><span class="token punctuation">(</span><span class="token string">&quot;xxx2.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">5999L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
        {
            &quot;_index&quot;: &quot;product&quot;,
            &quot;_id&quot;: &quot;P001&quot;,
            &quot;_version&quot;: 1,
            &quot;_score&quot;: 1,
            &quot;_source&quot;: {
                &quot;_class&quot;: &quot;com.atcode.model.Product&quot;,
                &quot;id&quot;: &quot;P001&quot;,
                &quot;name&quot;: &quot;华为1&quot;,
                &quot;image&quot;: &quot;xxx.png&quot;,
                &quot;brand&quot;: &quot;华为&quot;,
                &quot;price&quot;: 5999
            }
        }
         */</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2.查询文档 JDK8 Optional避免空指针对象</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> productRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token string">&quot;P001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>optional<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Product</span> product <span class="token operator">=</span> optional<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;product = &quot;</span> <span class="token operator">+</span> product<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//product = Product(id=P001, name=华为1, image=xxx.png, brand=华为, price=5999)</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">&gt;</span></span> all <span class="token operator">=</span> productRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> all<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Product</span> product <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;product = &quot;</span> <span class="token operator">+</span> product<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/*
        product = Product(id=P001, name=华为1, image=xxx.png, brand=华为, price=5999)
        product = Product(id=P002, name=华为2, image=xxx2.png, brand=华为, price=5999)
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改和删除</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改</span>
    <span class="token comment">// 首先查询</span>
    <span class="token class-name">Product</span> product <span class="token operator">=</span> productRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token string">&quot;P001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;product修改前 = &quot;</span> <span class="token operator">+</span> product<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 修改局部信息</span>
    product<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;修改名字&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    product<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">6999L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 更新</span>
    productRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Product</span> product1 <span class="token operator">=</span> productRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token string">&quot;P001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;product修改后 = &quot;</span> <span class="token operator">+</span> product1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    product修改前 = Product(id=P001, name=华为1, image=xxx.png, brand=华为, price=5999)
    product修改后 = Product(id=P001, name=修改名字, image=xxx.png, brand=华为, price=6999)
     */</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    productRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token string">&quot;P001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">&gt;</span></span> all <span class="token operator">=</span> productRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> all<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;product = &quot;</span> <span class="token operator">+</span> product<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* P001的文档被删除
    product = Product(id=P002, name=华为2, image=xxx2.png, brand=华为, price=5999)
     */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function C(A,B){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("Elasticsearch"),t(a)]),s("是一个基于"),d,s("的全文搜索引擎，基于RESTful web接口。Elasticsearch是用Java开发的，并作为Apache许可条款下的开放源码发布，是当前流行的企业级搜索引擎。")]),k,n("blockquote",null,[n("p",null,[s("参考"),n("a",v,[s("官方文档"),t(a)]),m,s(" 我们使用Kibana来进行命令的演示")])]),b,n("blockquote",null,[n("p",null,[s("所有"),q,s("风格API不用记忆，知道每个接口作用即可，会查询"),n("a",g,[s("官方文档"),t(a)])])]),y,n("blockquote",null,[n("p",null,[s("参考"),n("a",_,[s("官方文档"),t(a)])])]),h,n("blockquote",null,[n("p",null,[s("创建数据库表需要设置字段名称，类型，长度，约束等；索引库也一样，需要知道这个类型下有哪些字段，每个字段有哪些约束信息，这就叫做"),x,s("。"),f,s(" 参考"),n("a",w,[s("官方文档"),t(a)])])]),j,n("blockquote",null,[n("p",null,[s("nested类型是一种特殊的对象object数据类型(specialised version of the object datatype ) 允许对象数组彼此独立地进行索引和查询"),E,s(" 参考"),n("a",I,[s("官方文档"),t(a)])])]),T,n("blockquote",null,[n("p",null,[s("查看"),n("a",P,[s("官方文档"),t(a)])]),S]),D,n("blockquote",null,[n("p",null,[s("参考"),n("a",G,[s("官方文档"),t(a)])])]),R])}const N=e(i,[["render",C],["__file","elasticsearch.html.vue"]]);export{N as default};
