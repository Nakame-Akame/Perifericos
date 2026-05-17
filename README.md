# 🛒 Tech Store - Tienda de Productos Tecnológicos

Una aplicación web moderna construida con React + Vite que conecta con una API REST para mostrar productos tecnológicos.

## 🚀 Características

- ✅ Interfaz moderna y responsive
- ✅ Conexión con API REST
- ✅ Grid dinámico de productos
- ✅ Carrito de compras (UI interactiva)
- ✅ Navbar pegajoso
- ✅ Estilos con efecto glassmorphism
- ✅ Manejo de estados de carga y errores

## 📋 Requisitos

- Node.js 16 o superior
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
cd d:\react\Tienda
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
   - El archivo `.env` ya está configurado con `VITE_API_URL=http://localhost:3001/api`
   - Puedes modificarlo si tu API está en otra ubicación

## 🏃 Ejecución

### Modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción:
```bash
npm run build
```

### Preview de producción:
```bash
npm run preview
```

## 📡 API

La aplicación espera una API con el siguiente endpoint:

**GET** `/api/products`

Respuesta esperada:
```json
{
  "products": [
    {
      "id": 1,
      "title": "Laptop Gaming",
      "description": "Laptop de alta performance para gaming",
      "price": 2999.99,
      "thumbnail": "url-de-imagen"
    },
    ...
  ]
}
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── navbar.jsx       # Barra de navegación
│   └── Productcard.jsx  # Tarjeta de producto
├── pages/
│   └── home.jsx         # Página principal
├── services/
│   └── api.js           # Configuración de axios
├── App.jsx              # Componente principal
├── App.css              # Estilos globales
├── main.jsx             # Punto de entrada
└── index.css            # Estilos base
```

## 🛠️ Stack Tecnológico

- **React** 19.2.6 - Librería UI
- **Vite** 8.0.12 - Build tool
- **Axios** 1.16.1 - Cliente HTTP
- **Babel** - Transpilador
- **ESLint** - Linter de código

## 📝 Notas

- Los estilos utilizan variables CSS personalizadas
- La aplicación es completamente responsive
- Se incluyen interceptores de errores en axios
- El carrito es solo UI, guarda datos en estado local

## 🤝 Contribuciones

Si encuentras problemas, crea un issue o pull request.

## 📄 Licencia

MIT
