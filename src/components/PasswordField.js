// components/PasswordField.js
import React, { useState } from 'react';

const PasswordField = ({ label, name, value, onChange, error, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-password-btn"
        >
          {showPassword ? "Masquer" : "Voir"}
        </button>
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default PasswordField;