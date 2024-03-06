import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (resId) => {

    const [restaurant, setRestaurant] = useState(null);

    // Get data from API
    useEffect(() => {
        getRestaurantInfo();
      }, []);
     
      async function getRestaurantInfo() {
        const data = await fetch( FETCH_MENU_URL + resId );
        const json = await data.json();
        console.log(json.data);
        console.log(Object.values(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR));
        // setRestaurant(json.data);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        // console.log(json?.data?.cards[0]?.card?.card?.info);
      }

    // return restaurant Data 
    return restaurant


}

export default useRestaurant;