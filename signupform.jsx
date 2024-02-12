import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here
    // Set errors if any
  };

  return (
    <div className="signup-container">
      <div className="shooting-stars-animation"></div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {/* Error message if any */}
        </div>
        {/* Repeat for other form fields */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;