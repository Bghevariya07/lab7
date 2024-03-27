import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Profile from './Profile';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: '',
  });
  const [errors, setErrors] = useState({});
  const [formFilled, SetFormFilled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const nameRegex = /^[a-zA-Z]+$/;
    if (!formData.firstName.match(nameRegex)) {
      newErrors.firstName = 'First Name must contain alphabets only';
    }
    if (!formData.lastName.match(nameRegex)) {
      newErrors.lastName = 'Last Name must contain alphabets only';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = 'Please enter a valid email address';
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password.match(passwordRegex)) {
      newErrors.password = 'Password must contain at least 1 alphabet, 1 number, 1 special character, and 1 uppercase letter';
    }
    if (!formData.favoriteSeason) {
      newErrors.favoriteSeason = 'Please select your favorite season';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      SetFormFilled(true);
    }
  };

  const handleReturn = (e) => {
    e.preventDefault();
    setErrors({});
    SetFormFilled(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={formFilled ? <Navigate replace to="/profile" /> : <Login handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} />} />
          <Route path="/profile" element={formFilled ? <Profile formData={formData} handleReturn={handleReturn} /> : <Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
