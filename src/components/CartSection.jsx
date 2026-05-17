import { useState } from "react";

function CartSection({ cartItems }) {
  const [customerEmail, setCustomerEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayNow = async () => {
    if (cartItems.length === 0) return;

    if (!customerEmail) {
      setCheckoutError("Por favor ingresa un correo electrónico para la compra.");
      return;
    }

    setCheckoutError("");
    setIsProcessing(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_CHECKOUT_SERVER || "http://localhost:3001"}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartItems, customerEmail }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo crear la sesión de pago.");
      }

      if (!data.url) {
        throw new Error("No se recibió la URL de pago.");
      }

      window.location.href = data.url;
    } catch (error) {
      setCheckoutError(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="cart-section" id="cart">
      <div className="section-header">
        <div>
          <h2>Carrito de compras</h2>
          <p>Revisa los productos que agregaste antes de finalizar tu compra.</p>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No hay productos en el carrito aún.</p>
          <span>Añade productos desde la sección de productos para comenzar.</span>
        </div>
      ) : (
        <div className="cart-table">
          <div className="cart-header">
            <span>Producto</span>
            <span>Cantidad</span>
            <span>Subtotal</span>
          </div>
          {cartItems.map((item) => (
            <div className="cart-row" key={item.id}>
              <span>{item.title}</span>
              <span>{item.quantity}</span>
              <span>$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total</strong>
            <strong>$ {totalPrice.toFixed(2)}</strong>
          </div>

          <div className="payment-section">
            <h3>Pagar con Stripe (modo prueba)</h3>
            <label className="payment-email">
              Correo electrónico para la compra
              <input
                type="email"
                placeholder="ejemplo@mail.com"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </label>

            <button
              className="pay-now-button"
              onClick={handlePayNow}
              disabled={isProcessing}
            >
              {isProcessing
                ? "Procesando pago..."
                : `Pagar $ ${totalPrice.toFixed(2)} con tarjeta`}
            </button>

            {checkoutError && <p className="payment-error">{checkoutError}</p>}

            <p className="payment-note">
              Para que esto funcione, ejecuta el backend y configura tu clave de Stripe en el archivo
              `.env`.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartSection;
