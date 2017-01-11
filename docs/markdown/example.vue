<template>
  <div>
    <h1>主标题</h1>
    <h2 id="">副标题(加id)</h2>
    <h3>组件相关标题</h3>
    <p>内容和代码<code>javascript</code></p>
    <pre><code class="language-html">
      <div>
        <div class="mant-layout-header">
          123
        </div>
      </div>
    </code></pre>
    <p>demo写在demo-box里，便于后期统一调外围样式</p>
    <pre><code class="language-html">
      <div class="demo-box">
      demo容器
      </div>
    </code></pre>

    <p>暂时都要加格式化代码的函数</p>
    <pre><code class="language-js">
      export default {
        data () {
          return {
            
          }
        },
        mounted () { 
          //格式化代码,暂时每个文档都要加
          codePrism();
        }
      }
    </code></pre>
    
    <table>
      <thead>
        <tr>
          <th>
            属性
          </th>
          <th>
            说明
          </th>
          <th>
            类型
          </th>
          <th>
            默认值
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>count </td>
          <td>star 总数</td>
          <td>Number</td>
          <td>5</td>
        </tr>
        <tr>
          <td>count</td>
          <td>star 总数</td>
          <td>Number</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },
    mounted () { 
      //格式化代码,暂时每个文档都要加
      codePrism();
    }
  }
</script>