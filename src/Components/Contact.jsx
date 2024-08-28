import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parámetros de EmailJS
    const serviceID = "service_cvya0vt";
    const templateID = "template_w6m9gwe";
    const userID = "1DWSsRTP2kEk6g5H3";

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Correo enviado exitosamente!", response.status, response.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
  };

  return (
    <div className="contact-container" translate="no">
      <h2>Contactame</h2>
      {submitted ? (
        <p className="submitted-message">¡Se envió exitosamente!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Enviar <FaCheck />
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
