import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = () => {
  return (
    <MapContainer
      center={[5.614818, -0.205874]}
      zoom={13}
      scrollWheelZoom={false}
      className="mb-[1.875rem] h-[50vh] rounded-lg md:mb-12"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[5.614818, -0.205874]}></Marker>
    </MapContainer>
  );
};

export default Map;
