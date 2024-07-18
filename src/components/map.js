import {
  APIProvider,
  Map,
  useMap,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const placeNameToGeocode = "Climb Time Indy"; // Place name to geocode

function MapComponent() {
  const map = useMap(); // This hook gives you access to the map instance
  const [markerLocation, setMarkerLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  useEffect(() => {
    if (map) {
      // Initialize the geocoder
      const geocoder = new window.google.maps.Geocoder();

      // Geocode the place name
      geocoder.geocode({ address: placeNameToGeocode }, (results, status) => {
        if (status === "OK" && results[0]) {
          const position = results[0].geometry.location;

          // Set the marker location
          setMarkerLocation(position);

          // Set the address
          setAddress(results[0].formatted_address);

          // Center the map on the marker
          map.setCenter(position);
          map.setZoom(13);

          // Initialize directions service and renderer
          const newDirectionsService =
            new window.google.maps.DirectionsService();
          const newDirectionsRenderer =
            new window.google.maps.DirectionsRenderer();
          newDirectionsRenderer.setMap(map);
          setDirectionsService(newDirectionsService);
          setDirectionsRenderer(newDirectionsRenderer);
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  }, [map]);

  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Map
        style={{ width: "90%", height: "75%" }}
        mapId="map"
        defaultZoom={13}
        defaultCenter={markerLocation}
      >
        {markerLocation && (
          <AdvancedMarker position={markerLocation}>
            {/* <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            /> */}
            <Pin />
          </AdvancedMarker>
        )}
      </Map>
    </div>
  );
}

export default function MapDisplay() {
  return (
    <div>
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <MapComponent />
      </APIProvider>
    </div>
  );
}
