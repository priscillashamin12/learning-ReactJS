import { restrautList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState(restrautList)
    const [searchTxt, setSearchTxt] = useState("");

    function filterData(searchTxt, restaurants){
const filterData = restaurants.filter((restaurant) =>
 restaurant.data.name.includes(searchTxt))
 return filterData;
    }

    return (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchTxt}
            onChange= {(e) => {
                 setSearchTxt(e.target.value)
            }}></input>
            <button className="search-btn" 
            onClick={()=>{
                //need to filter the search
              const data =  filterData(searchTxt, restaurants);
              setRestaurants(data)
            }}>Search</button>
            </div>
      <div className="restaurant-list">
        {restrautList.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </>
    );
  };

  export default Body;