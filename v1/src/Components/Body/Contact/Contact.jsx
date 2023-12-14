import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { useTranslation } from "react-i18next";

function ContactForm() {
  const {t, i18n} = useTranslation('common');
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h089v14', 'template_qfwcqhf', e.target, 'h1i0vzVuPuSlUbZXB')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          window.alert (t('Formulario.Exito'))
          // Aquí puedes agregar lógica adicional para manejar el éxito del envío
      }, (error) => {
          console.log('Failed to send email:', error.text);
          window.alert (t('Formulario.Fracaso'))
      });

    // Opcional: resetear el formulario después del envío
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="from_name">{t('Formulario.Nombre')}</label>
        <input type="text" id="from_name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="motivo">{t('Formulario.Motivo')}</label>
        <input type="mot" id="motivo" name="motivo" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">{t('Formulario.Mensaje')}</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div className="center-button">
        <button className='contact-form-button' type="submit">{t('Formulario.Enviar')}</button>
      </div>
    </form>
  );
}

export default ContactForm;

