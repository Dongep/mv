var fs = require ("fs");
var marked = require("marked");
var Prism = require("prismjs");

var renderer = new marked.Renderer();
var renderer2 = new marked.Renderer();

var tokens = marked.lexer('text')
renderer.code = function (code, lang) {

    console.log(lang)
    lang = lang||'';
    var  hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
      .replace(/{{/g, '<span>{{</span>')

    return `<pre data-lang="${lang}"><code class="lang-${lang}">${hl}</code></pre>`
};
renderer.html = function (html) {
    console.log(html)
    if(html.indexOf('<md>')==0 ) {
        return '<template>' + marked(html.replace(/\<md\>/,'').replace(/\<\/md\>/,''),{ renderer: renderer }) + '</template>'
    } else {
        return html
    }   
};
renderer.link = function (href, title, text) {
    if (OPTIONS.router && !/:/.test(href)) {
      href = `#/${href}`.replace(/\/\//g, '/')
    }

    return `<a href="${href}" title="${title || ''}">${text}</a>`
  }
fs.readdir('docs/markdown/', function (err,data) {
    if (err) return console.error(err);
    for(var i = 0; i <data.length ; i++ )
    {
        if(/\.md$/.test(data[i]))
        {
            (function (dataMd) {  
                fs.readFile('docs/markdown/'+dataMd,function(err,data){
                    if (err) return console.error(err);
                    var dataInfo = data.toString();
                    dataInfoAy = ['<template>'];
                    var result = marked(dataInfo,{ renderer: renderer });
                    // result.replace(/\<p\>\<template\>\<\/p\>/,'').replace(/\<p\>\<\/template\>\<\/p\>/,'');
                    fs.readFile('docs/test/'+dataMd.replace('\.md','.vue'),function(err,data){
                        if (err) 
                        {
                            fs.writeFile('docs/test/'+dataMd.replace('\.md','.vue'),result,function () {})
                        }
                        fs.writeFile('docs/test/'+dataMd.replace('\.md','.vue'),result,function () {
                            //匹配最外层template
                        })
                    })
                })
            }(data[i]))
            
            
        }
    }
})
