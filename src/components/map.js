"use client";
import {
  APIProvider,
  Map,
  useMap,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
// import styles from "@scss/components/map.module.scss";

import { useEffect, useState } from "react";

const placeNameToGeocode = "Climb Time Indy"; // Place name to geocode

function MapComponent() {
  const map = useMap(); // This hook gives you access to the map instance
  const [markerPosition, setMarkerPosition] = useState(null);

  // Function to handle marker click
  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${placeNameToGeocode}`;
    window.open(googleMapsUrl, "_blank"); // Open in new tab
  };

  useEffect(() => {
    const geocodePlaceName = async () => {
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        placeNameToGeocode
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

      try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();

        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          setMarkerPosition({
            lat: location.lat,
            lng: location.lng,
          });
        } else {
          console.error("Geocoding error: ", data.status);
        }
      } catch (error) {
        console.error("Error fetching geolocation: ", error);
      }
    };

    geocodePlaceName();
  }, []);

  return (
    <>
      <AdvancedMarker
        position={markerPosition}
        map={map}
        title="Climb Time Indy"
        onClick={handleMarkerClick}
      />
    </>
  );
}

export default function MapDisplay() {
  const position = { lat: 39.91562, lng: -86.039279 };
  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    scaleControl: false,
    rotateControl: false,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    keyboardShortcuts: false,
  };

  return (
    <div className={styles.mapContainer}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          defaultZoom={13}
          defaultCenter={position}
          options={mapOptions}
          className={styles.mapComponent}
        >
          <MapComponent />
        </Map>
      </APIProvider>
    </div>
  );
}
