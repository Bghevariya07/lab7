import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleSubmit, handleChange, formData, errors }) => {
    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" />
                    {errors.firstName && <div className="form-error">{errors.firstName}</div>}
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}  className="form-input"/>
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div className="form-group">
                    <label className="form-label">Favorite Season:</label>
                    <select name="favoriteSeason" value={formData.favoriteSeason} onChange={handleChange} className="form-input">
                        <option value="">Select</option>
                        <option value="Spring">Spring</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                    </select>
                    {errors.favoriteSeason && <div className="error">{errors.favoriteSeason}</div>}
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};

export default Login;
