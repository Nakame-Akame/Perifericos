import { useState } from "react";

function CartSection({ cartItems }) {
  const [paymentMethod, setPaymentMethod] = useState("mercado");
  const [customerEmail, setCustomerEmail] = useState("");
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayNow = () => {
    if (cartItems.length === 0) return;

    const paymentName = paymentMethod === "mercado" ? "Mercado Libre / Mercado Pago" : "Izipay";
    const checkoutUrl =
      paymentMethod === "mercado"
        ? "https://www.mercadopago.com.pe/ventas"
        : "https://www.izipay.com.pe/";

    window.open(checkoutUrl, "_blank");
    alert(`Has seleccionado ${paymentName}. Se abrirá la pasarela de pago en una nueva pestaña.`);
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
              <span>S/. {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total</strong>
            <strong>S/. {totalPrice.toFixed(2)}</strong>
          </div>

          <div className="payment-section">
            <h3>Método de pago</h3>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mercado"
                  checked={paymentMethod === "mercado"}
                  onChange={() => setPaymentMethod("mercado")}
                />
                Mercado Pago
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="izipay"
                  checked={paymentMethod === "izipay"}
                  onChange={() => setPaymentMethod("izipay")}
                />
                Izipay
              </label>
            </div>

            <label className="payment-email">
              Correo electrónico para la compra
              <input
                type="email"
                placeholder="ejemplo@mail.com"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </label>

            <button className="pay-now-button" onClick={handlePayNow}>
              Pagar S/. {totalPrice.toFixed(2)} con {paymentMethod === "mercado" ? "Mercado Libre / Mercado Pago" : "Izipay"}
            </button>

            <p className="payment-note">
              Esta es una implementación de ejemplo. Para un flujo real, configura tu backend para crear
              la orden y la preferencia de pago con Mercado Pago o Izipay.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartSection;
