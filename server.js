import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

if (!stripeSecretKey) {
  console.error("ERROR: Debes definir STRIPE_SECRET_KEY en el archivo .env");
  process.exit(1);
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-11-15",
});

app.use(
  cors({
    origin: clientUrl,
  }),
);
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { cartItems, customerEmail } = req.body;

  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ error: "El carrito está vacío." });
  }

  try {
    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title || "Producto",
          description: item.description?.slice(0, 100) || undefined,
        },
        unit_amount: Math.round((item.price || 0) * 100),
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email: customerEmail || undefined,
      success_url: `${clientUrl}/?success=true`,
      cancel_url: `${clientUrl}/?canceled=true`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ error: "No se pudo crear la sesión de pago." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Stripe server running on http://localhost:${PORT}`);
  console.log(`📍 Client origin allowed: ${clientUrl}`);
});
