// components/InputField.js
import React from 'react';

const InputField = ({ label, type, name, value, onChange, onBlur, error, required }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
    />
    {error && <p className="error">{error}</p>}
  </div>
);

export default InputField;
