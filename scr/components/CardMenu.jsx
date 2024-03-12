import React from 'react';
import { useParams } from 'react-router-dom';
import restrauntLists from './config';
import Error from './Error';
// import './styles/RestaurantMenu.css'; // Import CSS file for RestaurantMenu styles

const RestaurantMenu = () => {
    const { id } = useParams();

    //if id is greater than the length of the restrauntLists then return null
    if (id > restrauntLists.length) {
        return <ErrorComponent />;
    }

    const menuItems = restrauntLists[id].menu; // Assuming menu is an array of menu items

    return (
 <>              <img src={restrauntLists[id].imageUrl} alt="" />
                <h1 className="restaurant-name">{restrauntLists[id].placeName}</h1>
                    <h3 className="restaurant-menu__title">Menu</h3>
                    <h3 className="restaurant-menu__title">{restrauntLists[id].placeName}</h3>                     
                        </>
    );
};

export default RestaurantMenu;