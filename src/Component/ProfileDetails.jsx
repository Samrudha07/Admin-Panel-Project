// import React from "react";
// import { useNavigate } from "react-router-dom";
// import '../Styles/Profiledetails.css'
// const ProfileDetails = ({ profile }) => {
//   const navigate = useNavigate();

//   if (!profile) return <p className="error-message">No profile selected</p>;

//   return (
//     <div className="profile-details " style={{textAlign:'center'}}>
//       <div className="profile-matching">
//       <p> Name:- {profile.name}</p>
//       <img src={profile.image} alt={profile.name} />
//       <p>Role: {profile.description}</p>
//       <p>Address: {profile.address}</p>
//       </div>
//       <button onClick={() => navigate("/map")}>View on Map</button>
//       <button onClick={() => navigate("/")}>Back to Home</button>
//     </div>
//   );
// };

// export default ProfileDetails;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Profiledetails.css";

const ProfileDetails = ({ profile }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 

  if (!profile) return <p className="error-message">No profile selected</p>;

  const handleNavigation = (path) => {
    setLoading(true); 

    setTimeout(() => {
      navigate(path);
      setLoading(false); 
    }, 1500); 
  };

  return (
    <div className="profile-details" style={{ textAlign: "center" }}>
      {loading && ( 
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <div className="profile-matching">
        <p> Name:- {profile.name}</p>
        <img src={profile.image} alt={profile.name} />
        <p>Role: {profile.description}</p>
        <p>Address: {profile.address}</p>
      </div>
      
      <button onClick={() => handleNavigation("/map")}>View on Map</button>
      <button onClick={() => handleNavigation("/")}>Back to Home</button>
    </div>
  );
};

export default ProfileDetails;
