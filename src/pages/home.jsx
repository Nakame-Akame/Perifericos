import { useEffect, useState } from "react";
import API from "../services/api";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import CartSection from "../components/CartSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const peripheralKeywords = [
    "mouse",
    "ratón",
    "raton",
    "teclado",
    "keyboard",
    "headphone",
    "headphones",
    "audífono",
    "audifono",
    "headset",
    "auricular",
    "auriculares",
    "microphone",
    "micrófono",
    "microfono",
    "webcam",
    "cámara",
    "camara",
    "speaker",
    "parlante",
    "control",
    "controlador",
    "gamepad",
    "joystick",
    "cargador",
    "charger",
    "adaptador",
    "adapter",
  ];

  const isPeripheral = (product) => {
    const text = `${product.title || ""} ${product.description || ""} ${product.category?.name || ""} ${product.category?.slug || ""}`.toLowerCase();
    return peripheralKeywords.some((keyword) => text.includes(keyword));
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await API.get("/products?limit=200");
      const allProducts = res.data || [];
      const peripherals = allProducts.filter(isPeripheral);
      setProducts(peripherals);
      setError(null);
    } catch (err) {
      console.error("Fetch error:", err);
      const message = err.response?.data?.message || err.message || "Error de conexión";
      setError(`Error al cargar productos: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products;

  const handleAddToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  return (
    <main className="home-page">
      <HeroSection productCount={products.length} />
      <ProductSection
        products={filteredProducts}
        loading={loading}
        error={error}
        onRefresh={fetchProducts}
        onAddToCart={handleAddToCart}
      />
      <CartSection cartItems={cartItems} />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default Home;