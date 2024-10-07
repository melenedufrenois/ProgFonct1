// components/Form.js
import React, { useState } from 'react';
import InputField from './InputField';
import PasswordField from './PasswordField';
import { validateEmail, validatePassword } from '../utils/ValidationUtils';

const Form = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: 'Adresse email invalide' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Vérifier le mot de passe et sa confirmation
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && formData.email && formData.nom && formData.prenom) {
      alert('Compte créé avec succès');
    } else {
      alert('Une erreur est survenue');
    }

    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nom"
        type="text"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        required
      />

      <InputField
        label="Prénom"
        type="text"
        name="prenom"
        value={formData.prenom}
        onChange={handleChange}
        required
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        required
      />

      <PasswordField
        label="Mot de passe"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />

      <PasswordField
        label="Confirmation du mot de passe"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        required
      />

      <button className="submit-button"
      type="submit">Créer un compte</button>
    </form>
  );
};

export default Form;
