import React from "react"
import ReactDOM from "react-dom/client"

const root=ReactDOM.createRoot(document.getElementById("root"))
const heading= <h1>This is a react element</h1>
const SmallerComponent=()=><h3>Small</h3>
//Embedding a functional component -> (component composition) and embedding react element inside a component
const Component= ()=>{
    return <>
    <SmallerComponent/>
    {heading}
    <h2>This is h2 heading</h2>
    <h1>This is a react component</h1></>
}
console.log(Component)

root.render(<Component/>)