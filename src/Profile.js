import React from 'react';
import './Profile.css'

const Profile = ({ formData, handleReturn }) => {
    return (
      <div className="profile-container">
        <h2 className="profile-heading">Profile</h2>
        <div className="profile-info">
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>Favorite Season: {formData.favoriteSeason}</p>
        </div>
  
        <form onSubmit={handleReturn}>
          <button type="submit" className="profile-button">Go Back</button>
        </form>
      </div>
    );
  };

export default Profile;
