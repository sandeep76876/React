import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components.js/Header.js"
import Body from "./src/components.js/Body.js"

const root=ReactDOM.createRoot(document.getElementById("root"))
const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<App/>)