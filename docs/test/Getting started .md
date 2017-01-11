<h1 id="-">开始使用</h1>
<h2 id="-">下面是一个简单的例子</h2>
<p>   // 创建方法简写</p>
<pre data-lang="js"><code class="lang-js">    <span class="token keyword">var</span> Engine <span class="token operator">=</span> Matter<span class="token punctuation">.</span>Engine<span class="token punctuation">,</span>
        Render <span class="token operator">=</span> Matter<span class="token punctuation">.</span>Render<span class="token punctuation">,</span>
        World <span class="token operator">=</span> Matter<span class="token punctuation">.</span>World<span class="token punctuation">,</span>
        Bodies <span class="token operator">=</span> Matter<span class="token punctuation">.</span>Bodies<span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// 创建一个引擎</span>
    <span class="token keyword">var</span> engine <span class="token operator">=</span> Engine<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// 创建一个渲染器</span>
    <span class="token keyword">var</span> render <span class="token operator">=</span> Render<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        element<span class="token punctuation">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">,</span>
        engine<span class="token punctuation">:</span> engine
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// 创建两个长方体和一个边界</span>
    <span class="token keyword">var</span> boxA <span class="token operator">=</span> Bodies<span class="token punctuation">.</span><span class="token function">rectangle</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> boxB <span class="token operator">=</span> Bodies<span class="token punctuation">.</span><span class="token function">rectangle</span><span class="token punctuation">(</span><span class="token number">450</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ground <span class="token operator">=</span> Bodies<span class="token punctuation">.</span><span class="token function">rectangle</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">810</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> isStatic<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// 把所有的物体加进引擎的模拟世界</span>
    World<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>engine<span class="token punctuation">.</span>world<span class="token punctuation">,</span> <span class="token punctuation">[</span>boxA<span class="token punctuation">,</span> boxB<span class="token punctuation">,</span> ground<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// 运行引擎</span>
    Engine<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// 运行渲染器</span>
    Render<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>