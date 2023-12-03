// src/api/restaurantApi.js

const baseUrl = 'http://localhost:3001/restaurant';

export const getRestaurantData = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
