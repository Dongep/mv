#! /usr/bin/env node
var fs = require("fs");
var marked = require("marked");
var Prism = require("prismjs");
var renderer = new marked.Renderer();
var mdPath = 'docs/markdown/', vuePath = 'docs/components/';

renderer.code = function (code, lang) {
    lang = lang || '';
    var hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
        .replace(/{{/g, '<span>{{</span>');
    return `<pre data-lang="${lang}"><code class="lang-${lang}">${hl}</code></pre>`
};

//转换并写入
function mtv(name) {
    fs.readFile(mdPath + name, function (err, data) {
        if (err) return console.error(err);
        var dataInfo = data.toString();
        if (!/(\>){5}(\s|\S)+(\<){5}/g) {
            console.log(`请确认用 >>>>> <<<<< 将文档内容正确包裹起来了，${name}`)
            return false
        } else {
            var result1 = dataInfo.split('\>\>\>\>\>');
            var result2 = result1[1].split('\<\<\<\<\<');
            fs.writeFile(vuePath + name.replace('\.md', '.vue'), result1[0] + '<template>' + marked(result2[0], { renderer: renderer }) + '</template>' + result2[1], function () { });
        }  
    })
    
}
//读取makedown目录
fs.readdir(mdPath, function (err, data) {
    if (err) return console.error(err);
    //监控makedown目录文件变更
    fs.watch(mdPath, { persistent: true }, function (event, filename) {
        // console.log(event,filename)
        mtv(filename)
    })
    //初次执行全部转换
    for (var i = 0; i < data.length; i++) {
        if (/\.md$/.test(data[i])) {
            (function (filename) {
                mtv(filename)
            }(data[i]))
        }
    }
})
