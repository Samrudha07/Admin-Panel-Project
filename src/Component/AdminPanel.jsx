
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";

const AdminPanel = ({ setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    image: "",
    description: "",
    address: "",
  });

  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleAddProfile = () => {
    if (!newProfile.name || !newProfile.image || !newProfile.description || !newProfile.address) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true); 

    setTimeout(() => {
      setProfiles((prev) => [...prev, { ...newProfile, id: Date.now() }]);
      setLoading(false); 
      navigate("/profiles");
    }, 2000); 
  };

  return (
    <div className="container">
      {loading && ( 
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <div className="admin-panel">
        <div className="header-title mb-4">Admin Panel</div>

        <input className="input-values" type="text" name="name" placeholder="Name" value={newProfile.name} onChange={handleInputChange} />
        <input className="input-values" type="text" name="image" placeholder="Paste Image URL" value={newProfile.image} onChange={handleInputChange} />
        <input className="input-values" type="text" name="description" placeholder="Description" value={newProfile.description} onChange={handleInputChange} />
        <input className="input-values mb-4" type="text" name="address" placeholder="Address" value={newProfile.address} onChange={handleInputChange} />

        <button className="admin-button mb-3" onClick={handleAddProfile} disabled={loading}>
          {loading ? "Adding..." : "Add Profile"}
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
