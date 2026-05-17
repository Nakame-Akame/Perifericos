// ⚠️ ARCHIVO DE EJEMPLO - Para referencia solamente
// Este archivo muestra cómo debe estar configurada tu API

const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Datos de ejemplo
const products = [
  {
    id: 1,
    title: "Laptop Gaming ASUS",
    description: "Laptop de alta performance con RTX 4060, ideal para gaming y diseño",
    price: 2999.99,
    thumbnail: "https://via.placeholder.com/200?text=Laptop+Gaming"
  },
  {
    id: 2,
    title: "Mouse Logitech G502",
    description: "Mouse gaming con 11 botones programables y sensor de 25600 DPI",
    price: 79.99,
    thumbnail: "https://via.placeholder.com/200?text=Mouse+Gaming"
  },
  {
    id: 3,
    title: "Teclado Mecánico Razer",
    description: "Teclado mecánico RGB con switches azules y cable trenzado",
    price: 149.99,
    thumbnail: "https://via.placeholder.com/200?text=Teclado+Mecanico"
  },
  {
    id: 4,
    title: "Monitor LG 27\" 144Hz",
    description: "Monitor IPS con tasa de refresco de 144Hz y resolución 1440p",
    price: 349.99,
    thumbnail: "https://via.placeholder.com/200?text=Monitor+Gaming"
  },
  {
    id: 5,
    title: "Headset HyperX",
    description: "Auriculares gaming inalámbricos con sonido envolvente 7.1",
    price: 129.99,
    thumbnail: "https://via.placeholder.com/200?text=Headset+Gaming"
  },
  {
    id: 6,
    title: "SSD Samsung 1TB",
    description: "Unidad de estado sólido NVMe con velocidades de lectura hasta 7000 MB/s",
    price: 89.99,
    thumbnail: "https://via.placeholder.com/200?text=SSD"
  }
];

// Rutas
app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json({ product });
});

// Puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📍 API disponible en http://localhost:${PORT}/api/products`);
});
