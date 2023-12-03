// src/components/common/MapLink.js

import React from 'react';

const MapLink = ({ latitude, longitude }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      View on Google Maps
    </a>
  );
};

export default MapLink;
