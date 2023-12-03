// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getRestaurantData } from '../api/restaurantApi';
import MapLink from '../components/common/MapLink'; // Make sure to import the MapLink component
import './HomePage.css'; // Import the CSS module for styling

const HomePage = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantData().then(data => {
      setRestaurantData(data);
    });
  }, []);

  if (!restaurantData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <section>
        <h2>{restaurantData.name}</h2>
        <p>{restaurantData.location.address}</p>
        {/* Include the MapLink component here */}
        <MapLink 
          latitude={restaurantData.location.latitude} 
          longitude={restaurantData.location.longitude} 
        />
      </section>

      <section>
        <h3>Awards</h3>
        <ul>
          {restaurantData.awards.map((award, index) => (
            <li key={index}>
              {award.year} - {award.organization}: {award.award}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Ambiance</h3>
        <p>{restaurantData.ambiance.description}</p>
        {/* Add more details if needed */}
      </section>

      <section>
        <h3>Upcoming Events</h3>
        {restaurantData.events.upcoming_events.map((event, index) => (
          <div key={index}>
            <h4>{event.name}</h4>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Menu</h3>
        {restaurantData.menu.categories.map((category, index) => (
          <div key={index}>
            <h4>{category.name}</h4>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                    {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="menu-item">
                        <div>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        </div>
                        <img src={`https://picsum.photos/100?random=${itemIndex}`} alt={item.name} />
                    </li>
                    ))}

                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
