import RestaurantCard from "./RestaurantCard.js"
import { RES1_IMG_URL,RES2_IMG_URL } from "../utils.js/constants.js"
import { useState } from "react"

const Body=()=>{
    const [ListOfRes,setListOfRes]=useState([
    {   id:123,
        resName:"Pista House",
        rating:4.0,
        imglink:RES1_IMG_URL ,
        address:"Near RailwayStation,Patna"
    },
    {   id:234,
        resName:"Meghana Foods",
        rating:"3.2",
        imglink:RES2_IMG_URL,
        address:"Banglore"
    }
]);
console.log(ListOfRes)
return (
    <div className="body">
     <div className="search-container">
        <input className="text-area" type="text"/>
        <button className="search-btn" onClick={()=>{
            setListOfRes(
                ListOfRes.filter((res)=>(res.rating>=4))
            )
        }}> Search</button>
     </div>
     <div className="res-cards">
        {ListOfRes.map((res) => (
            <RestaurantCard key={res.id} resName={res.resName} rating={res.rating} imglink={res.imglink} address={res.address}/>
        ))}
     </div>
    </div>
)
}

export default Body