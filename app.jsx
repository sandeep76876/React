 const heading=React.createElement(
    "div",
    {
        class:'A',
        id:"24",
        style:{
            color:"green",
            background:"red",
            fontSize:"30px",
        }
    },
    [React.createElement("h1",{style:{color:"blue"}},"Hello world from h1"),
    React.createElement("h2",{},"hello world from h2"),
     React.createElement("h3",{},"This is h3 from react")])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)