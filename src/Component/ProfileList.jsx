import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Profile.css";

const ProfileList = ({ profiles, onSelectProfile }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path, profile) => {
    setLoading(true);

    setTimeout(() => {
      if (profile) onSelectProfile(profile);
      navigate(path);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="profile-list">
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {profiles.length === 0 ? (
        <p>No profiles available.</p>
      ) : (
        profiles.map((profile) => (
          <div className="row">
            <div key={profile.id} className="col-md-12 col-sm-6 col-12 mb-4">
              <div className="profile-card">
                <img src={profile.image} alt={profile.name} />
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
                <button
                  onClick={() => handleNavigation("/profile-details", profile)}
                  className="me-2"
                >
                  View Details
                </button>
                <button onClick={() => handleNavigation("/")}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProfileList;
