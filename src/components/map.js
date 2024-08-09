"use client";
import {
  APIProvider,
  Map,
  useMap,
  useMapsLibrary,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

import { useEffect, useState } from "react";

const placeNameToGeocode = "Climb Time Indy"; // Place name to geocode

function MapComponent() {
  const map = useMap(); // This hook gives you access to the map instance
  const [markerPosition, setMarkerPosition] = useState(null);

  // Function to handle marker click
  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${markerPosition.lat},${markerPosition.lng}`;
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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "absolute",
        bottom: "10px",
        left: "10px",
        padding: "10px",
        borderRadius: "8px",
        height: "50%",
        width: "30%",
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: "2vw" }}>Climb Time Indy</h2>
      <p style={{ fontSize: "1.5vw" }}>
        8750 Corporation Dr, Indianapolis, IN 46256
      </p>
      <AdvancedMarker
        position={markerPosition}
        map={map}
        title="Climb Time Indy"
        onClick={handleMarkerClick}
      />
    </div>
  );
}

export default function MapDisplay() {
  const position = { lat: 39.91562, lng: -86.039279 };
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          defaultZoom={9}
          defaultCenter={position}
        >
          <MapComponent />
        </Map>
      </APIProvider>
    </div>
  );
}
