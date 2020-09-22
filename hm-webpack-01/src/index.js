// 创建组件，虚拟DO吗，生命周期
import React from 'react'
// 展示创建好的组件和虚拟Dom
import ReactDom from 'react-dom'

// 标签 元素，属性，子节点，其他子节点
// const myh1 = React.createElement('h1',{id:'myh1',title:'this is a title'},'这是个大大的h1')
// const mydiv = React.createElement('div',null,'这是div 元素',myh1 )

// const mydiv =<div id='myid' title='babel le'> 这是打打的h1</div>

let a = 10
let  str = 'hello'
let bool = true
let title = 'this is a ...'
let h2 = <h2>这话大大发放</h2>
let  arr = [
    <h1>kkkkkkk</h1>,
    <h2>jjxxxmmc</h2>
]

// 循环数组改变值
const arrstr =['毛利兰','柯南','小五粮','灰原哀','皮卡卡']
const nameArr = []
arrstr.forEach(item =>{
const temp = <h5>{item}</h5>
nameArr.push(temp)
})

const namearrs = arrstr.map(
    item=>{
        return item+'~~~'
    }
)
// 1 组件
function hello(props){
    Console.log(props)
    return <div>{props.name} </div>
}

const dog = {
    name: '大黄',
    age: 16
}

ReactDom.render(<div>
{a+4}
{str}
<h1/>
<p className = "mystyle" title={title}> 这谁</p>
{h2}
{arr}
{/* {nameArr} */}
{/* {namearrs} */}
{/* {arrstr.map(item => <h3>{item}</h3>)} */}
<hello name ={dog.name} ></hello>

</div>,document.getElementById('app'))
