import ProductCard from "./Productcard";

function ProductSection({ products, loading, error, onRefresh, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <div>
          <h2>Periféricos</h2>
          <p>Encuentra mouse, audífonos, controles y accesorios para tu PC.</p>
        </div>
        <button className="btn-tertiary" onClick={onRefresh} disabled={loading}>
          {loading ? "Actualizando..." : "Actualizar productos"}
        </button>
      </div>

      {loading && <div className="loading">Cargando productos...</div>}
      {error && <div className="error">{error}</div>}

      <div className="container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          !loading && <p className="empty-state">No hay periféricos disponibles en este momento.</p>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
