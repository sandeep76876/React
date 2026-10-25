import React from "react"
import ReactDOM from "react-dom/client"

const root=ReactDOM.createRoot(document.getElementById("root"))
// const heading= <h1>This is a react element</h1>
// const SmallerComponent=()=><h3>Small</h3>
// //Embedding a functional component -> (component composition) and embedding react element inside a component
// const Component= ()=>{
//     return <>
//     <SmallerComponent/>
//     {heading}
//     <h2>This is h2 heading</h2>
//     <h1>This is a react component</h1></>
// }
// console.log(Component)

const Header= ()=>{
    return (
        <div className="header">
             <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rqzKXE4L9dMxj6TTG6vj1SWKBSjnZbKgHRLcjMURNw&s=10" alt="logo" />
             </div>
             <div className="nav-bar">
                <a href="">Home</a>
                <a href="">Cart</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
             </div>
        </div>
    )
}
const RestrauntCard=(props)=>{
return (
    <div className="card">
        <div className="res-logo">
            <img className="res-logo" src={props.imglink} alt="res-logo" />
        </div>
        <div className="name-rating">
        <h3 className="res-name">{props.resName}</h3>
        <h3 className="rating">{props.rating}</h3>
        </div>
        <div className="address">
           {props.address}
        </div>
    </div>
)
}
const Body=()=>{
return (
    <div className="body">
     <div className="search-container">
        <input className="text-area" type="text"/>
        <button className="search-btn"> Search</button>
     </div>
     <div className="res-cards">
      <RestrauntCard resName="Pista House" rating="4.0" imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31hIzU9b5Yui2hOWk4pX3iwCsGkD2tqyJ_PIE62BhHg&s=10" address=" Near RailwayStation,Patna" />
      <RestrauntCard resName="Meghana Foods" rating="3.2" imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlSjhAD1WY9UyKbSw2T0XHRxZ-4xPyOZyHfof5KJXEA&s=10" address="Banglore"/>
      
     </div>
    </div>
)
}
const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<App/>)