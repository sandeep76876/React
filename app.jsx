import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components.js/Header.js"
import Body from "./src/components.js/Body.js"
import About from "./src/components.js/About.js"
import Error from "./src/components.js/Error.js"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router"
import RestaurantData from "./src/components.js/RestaurantData.js"

const root=ReactDOM.createRoot(document.getElementById("root"))
const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/restaurants/:resid',
                element:<RestaurantData/>
            }
        ]
    }, 
    
])

root.render(<RouterProvider router={router}/>)