function HeroSection({ productCount }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="eyebrow">Bienvenido a Tech Store</span>
        <h1>Tu tienda de periféricos en línea</h1>
        <p className="hero-description">
          Descubre los mejores accesorios para tu setup: mouse, audífonos, teclados y más.
          Compra rápido y con estilo con productos seleccionados para gamers y creadores.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn-primary">Ver productos</a>
          <a href="#contact" className="btn-secondary">Contáctanos</a>
        </div>
        <div className="hero-badges">
          <div>
            <strong>{productCount}</strong>
            <p>Productos disponibles</p>
          </div>
          <div>
            <strong>100% seguro</strong>
            <p>Pago protegido</p>
          </div>
          <div>
            <strong>Soporte 24/7</strong>
            <p>Asistencia inmediata</p>
          </div>
        </div>
      </div>
      <div className="hero-illustration">
        <div className="hero-card">
          <h2>Ofertas del día</h2>
          <p>Descubre tecnología con envío rápido y soporte prioritario.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
