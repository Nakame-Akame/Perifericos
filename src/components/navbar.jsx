function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>🛒 Tech Store</h2>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#products">Productos</a></li>
          <li><a href="#cart">Carrito</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;