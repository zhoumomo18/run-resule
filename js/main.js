let initCssContent = `
/*这一份会动的简历，我先把样式都初始化一下*/
* {
    margin: 0;
    padding: 0;
    transition:all 1s;
}
html {
    font-size:16px
}
body {
    background:#ccc; 
}

/*我来添加一些高亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.comment{
    color: slategray;
}

`
let MarkHtml = `
面试官好，我是周桥
自学前端有半年了
技术栈：vue，jq，原生js
电话号码:
微信：
QQ：
`
let MarkCssContent = `
/*来来，来一张纸我要一份简单的简历*/ 
#box {
    display:flex;
}
#code,#paper{
    flex:1;
    outline: .6em solid #655;
    box-shadow: 0 0 0 .4em #655; /* 关键代码 */
    border-radius: .8em;
    padding: 1em;
    margin: 1em;
    background: #fff;
    font: 100%/1.5 sans-serif;
}
` 

function createMarkDown(fn) {
let box = document.createElement('div')
box.id= 'box'
let paper = document.createElement('div')
paper.id = 'paper'
let MarkCode = document.createElement('pre')
MarkCode.id = 'MarkCode'
paper.appendChild(MarkCode)
box.appendChild(code)
box.appendChild(paper)
document.body.appendChild(box)
fn&& fn.call()
}
function MarkDownCSS(fn) {
let j = 0
let timer2 = setInterval(() => {
    j += 1
    displayArea.innerHTML = Prism.highlight(initCssContent + MarkCssContent.substring(0, j), Prism.languages.css);
    style2.innerHTML = MarkCssContent.substring(0, j)
    if (j >= MarkCssContent.length) {
        window.clearInterval(timer2)
        fn&&fn.call()
    }
}, 10)
}
function writeCss (content,id,style,fn){
let i = 0;
let timer = setInterval(() => {
    i += 1
    let domCode = document.querySelector(id)
    console.log(domCode.stollHeight);
    
    domCode.innerHTML = Prism.highlight(content.substring(0, i), Prism.languages.css);
    style.innerHTML = content.substring(0, i)
    domCode.scrollTop = 10000
   
    if (i > content.length) {
        window.clearInterval(timer)
        fn && fn.call()
    }
}, 10)
}

writeCss(initCssContent,'#displayArea',style1,()=>{
MarkDownCSS(()=>{
    createMarkDown(()=>{
        writeCss(MarkHtml,'#MarkCode','')
    })
})
})
