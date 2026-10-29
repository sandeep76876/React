import RestaurantCard from "./RestaurantCard.js"
import { useEffect, useState } from "react"

const Body=()=>{
    const [ListOfRes,setListOfRes]=useState([]);
    const [filterList,setFilteredList]=useState(ListOfRes);
    const [searchWord,setSearchWord]=useState("");
     
useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6734989&lng=77.6023072&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
                );
                if (!response.ok) {
                    throw new Error("Could not fetch data");
                }
                const data = await response.json();
                const res=data.data?.cards?.slice(3) ?? [];
                setListOfRes(res);
                setFilteredList(res);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, []);
    if(ListOfRes.length===0){
        return (
            <h1>Loading..</h1>
        )
    }
return (
    <div className="body">
     <div className="search-container">
        <input className="text-area" type="text" value={searchWord} onChange={(e)=>{
            setSearchWord(e.target.value)
        }}/>
        <button className="search-btn" onClick={()=>{
            setFilteredList(
                ListOfRes.filter((res)=>(res.card.card.info.name.includes(searchWord)))
            )
            console.log(ListOfRes)
        }}> Search</button>
     </div>
     <div className="res-cards">
        {
        filterList.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} resName={restaurant.card.card.info.name} rating={restaurant.card.card.info.avgRating} imglink={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.card.card.info.cloudinaryImageId} address={restaurant.card.card.info.locality}/>
        ))
        }
     </div>
    </div>
)
}

export default Body