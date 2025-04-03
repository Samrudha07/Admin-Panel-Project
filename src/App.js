import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileList from "./Component/ProfileList";
import ProfileDetails from "./Component/ProfileDetails";
import MapView from "./Component/MapView";
import AdminPanel from "./Component/AdminPanel";
import profilesData from "./data/profiles.json";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AdminPanel setProfiles={setProfiles} />} />
          <Route
            path="/profiles"
            element={
              <ProfileList
                profiles={profiles}
                onSelectProfile={handleProfileSelect}
              />
            }
          />
          <Route
            path="/profile-details"
            element={
              selectedProfile ? (
                <ProfileDetails profile={selectedProfile} />
              ) : (
                <p style={{ color: "white" }}>No profile selected</p>
              )
            }
          />
          <Route
            path="/map"
            element={
              selectedProfile ? (
                <MapView profile={selectedProfile} />
              ) : (
                <p style={{ color: "white" }}>No profile selected</p>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
