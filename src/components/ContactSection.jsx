function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <div>
          <span className="eyebrow">Hablemos</span>
          <h2>¿Tienes una pregunta?</h2>
          <p>Envíanos un mensaje y te responderemos en minutos.</p>
        </div>
        <div className="contact-details">
          <div>
            <strong>Correo</strong>
            <p>info@techstore.com</p>
          </div>
          <div>
            <strong>Teléfono</strong>
            <p>+51 987 654 321</p>
          </div>
          <a href="mailto:info@techstore.com" className="btn-primary">Enviar correo</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
