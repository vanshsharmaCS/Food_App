

export const RestaurantCard = ({
    placeName,
    speciality,
    imageUrl,
    deliveryTime,
  }) => {
    
  
    return (
      <div className="card">
        <img
          src={imageUrl}
          alt={placeName}
        //   onError={handleImageError}
        />
        <h2>{placeName}</h2>
        <h3>{speciality}</h3>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };  