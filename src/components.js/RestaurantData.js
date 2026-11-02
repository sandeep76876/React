import { useParams } from "react-router" 
import { useEffect, useState } from "react"

const RestaurantData=()=>{
    const { resid } =useParams()
    console.log("resdata avalable");
    return <h2>Res Data of res with id {resid}</h2>
}
export default RestaurantData