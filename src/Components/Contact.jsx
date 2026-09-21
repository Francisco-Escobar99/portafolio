import React, { useState } from "react";
import { FaCheck, FaPaperPlane } from "react-icons/fa";
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

    const serviceID  = "service_cvya0vt";
    const templateID = "template_w6m9gwe";
    const userID     = "1DWSsRTP2kEk6g5H3";

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
      <h2>Contáctame</h2>
      <div className="section-divider" style={{ margin: "12px auto 16px" }}></div>
      <p className="contact-subtitle">¿Tienes un proyecto en mente? Escríbeme, estoy disponible.</p>

      {submitted ? (
        <p className="submitted-message">
          <FaCheck style={{ marginRight: "8px" }} />
          ¡Mensaje enviado exitosamente!
        </p>
      ) : (
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntame sobre tu proyecto..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn contact-submit">
              <FaPaperPlane /> Enviar mensaje
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
