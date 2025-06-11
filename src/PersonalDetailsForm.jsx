import React, { useState } from 'react';
import './Components/PersonalDetailsForm.css';

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    gender: '',
    cluster: '',
    village: '',
    tahsil: '',
    district: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Saved Data:', formData);
    alert('Data saved successfully!');
  };

  return (
    <div className="container-personal">
      
    

      <div className="form-card">
        <div className="form-header">
          <div className="user-info">
            <img src="/profile.jpg" alt="User" className="user-img" />
            <div>
              <h3>Rakesh Nikam</h3>
              
            </div>
          </div>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your First Name" />
          </div>

          <div className="form-group">
            <label>School Name</label>
            <input name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="Your School Name" />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Village</label>
            <select name="village" value={formData.village} onChange={handleChange}>
              <option value="">Your Village Name</option>
              <option value="Vikhroli">Vikhroli</option>
              <option value="Other">Other</option>
            </select>
          </div>

          
<div className="form-group-sec">
          <div className="form-groupone">
            <label>Tahsil</label>
            <select name="tahsil" value={formData.tahsil} onChange={handleChange}>
              <option value="">Your Tahasil Name</option>
              <option value="Koregaon">Koregaon</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-groupone">
            <label>District</label>
            <select name="district" value={formData.district} onChange={handleChange}>
              <option value="">Your District Name</option>
              <option value="Satara">Satara</option>
              <option value="Other">Other</option>
            </select>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
