import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    onAddToCart(product);
    setTimeout(() => setInCart(false), 2000);
  };

  const imageSrc = product.images?.[0] || product.thumbnail || "https://via.placeholder.com/400x300?text=Sin+imagen";

  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt={product.title} width="200" />
      </div>
      <div className="card-content">
        <h3>{product.title}</h3>
        <p className="description">{product.description?.substring(0, 60)}...</p>
        <div className="card-footer">
          <span className="price">S/. {product.price}</span>
          <button
            className={`btn-add ${inCart ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {inCart ? "✓ Agregado" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;