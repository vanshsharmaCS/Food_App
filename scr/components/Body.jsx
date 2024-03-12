import React, { useState, useEffect } from "react";
import  restaurantList  from "./config";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.placeName &&
    restaurant.placeName.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []); // Empty dependency array means it runs once when the component mounts
  // Function to check and extract restaurant data from JSON response
  async function getRestaurants() {
    // handle the error using try... catch
      const response = await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');
      const json = await response.json();
      // initialize checkJsonData() function to check Swiggy Restaurant dat
        for (let i = 0; i < json?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // setRestaurants(checkData);

    }
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            const data = filterData(e.target.value, restaurantList);
            setRestaurants(e.target.value ? data : restaurantList);
          }}
        />
         <button
    className="search-btn"
    onClick={() => {
      const data = filterData(searchInput, restaurantList);
      setRestaurants(data);
    }}
  >
    Search
  </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <div key={index}>
            {/* Log the restaurant data for debugging */}
            {console.log("Current Restaurant Data:", restaurant)}

            <Link to={"/restaurant/"+(restaurant.id-1)}>
              <RestaurantCard key={restaurant.id} {...restaurant} /></Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
