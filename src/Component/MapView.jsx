
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Map.css";

const MapView = ({ profile }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ✅ Loader State

  if (!profile) return <p style={{ color: "white" }}>No profile selected</p>;

  const handleNavigation = (path) => {
    setLoading(true); // ✅ Show Loader

    setTimeout(() => {
      navigate(path);
      setLoading(false); // ✅ Hide Loader
    }, 1500); // Simulating API delay (1.5 sec)
  };

  return (
    <div className="map-container">
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <div className="mapping">
        Map for :- {profile.name}
        <br />
        Address:- {profile.address}
        <br />
        Map displaying for address: {profile.address}
      </div>

      <button onClick={() => handleNavigation("/profile-details")}>
        Back to Profile
      </button>
      <button onClick={() => handleNavigation("/")}>Back to Home</button>
    </div>
  );
};

export default MapView;
