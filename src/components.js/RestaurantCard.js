const RestaurantCard=(props)=>{
    
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

export default RestaurantCard