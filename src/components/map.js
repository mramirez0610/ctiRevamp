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
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [currentPosition, setCurrentPosition] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!map || !routesLibrary) return;

    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [navigator.geolocation]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: currentPosition,
        destination: "Climb Time Indy",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer, currentPosition]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  console.log(routes);

  if (!leg) return null;

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
      <h2 style={{ fontSize: ".7em", marginBottom: ".7em" }}>
        {selected?.summary}
      </h2>
      <p style={{ fontSize: ".3em", marginBottom: ".3em" }}>
        {leg?.start_address.split(",")[0]} to {leg?.end_address.split(",")[0]}
      </p>
      <p style={{ fontSize: ".3em", marginBottom: ".3em" }}>
        Duration: {leg?.duration?.text}
      </p>
      {routes.length > 0 ? (
        <ul>
          {routes.map((route, index) => (
            <li
              key={route.summary}
              style={{ fontSize: ".3rem", marginBottom: ".3em" }}
            >
              <button
                onClick={() => setRouteIndex(index)}
                style={{ fontSize: ".3rem" }}
              >
                {route.summary}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No routes found</p>
      )}
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
