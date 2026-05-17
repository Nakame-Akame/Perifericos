# 🚀 Guía de Configuración Rápida

## Paso 1: Instalar dependencias
```bash
npm install
```

## Paso 2: Iniciar la aplicación en modo desarrollo
```bash
npm run dev
```

## Paso 3: Configurar tu API (Backend)

Tu API debe responder en `http://localhost:3001/api` con los siguientes endpoints:

### Obtener todos los productos
```
GET /api/products

Response:
{
  "products": [
    {
      "id": 1,
      "title": "Nombre del producto",
      "description": "Descripción",
      "price": 99.99,
      "thumbnail": "url-imagen"
    },
    ...
  ]
}
```

### Obtener producto por ID (opcional)
```
GET /api/products/:id

Response:
{
  "product": { ... }
}
```

## ✅ Checklist de Configuración

- [ ] ✅ Node.js instalado (versión 16+)
- [ ] ✅ Dependencias instaladas (`npm install`)
- [ ] ✅ Backend API corriendo en puerto 3001
- [ ] ✅ CORS habilitado en tu backend
- [ ] ✅ Archivo `.env` configurado (si necesitas cambiar la URL)
- [ ] ✅ Frontend corriendo en `npm run dev`

## 🧪 Probar sin Backend (Modo Mock)

Si quieres probar la aplicación sin backend, puedes:

1. Usar el archivo `server-example.js` como referencia
2. Crear un servidor Node simple:
   ```bash
   npm install express cors
   node server-example.js
   ```

## 🔗 Variables de Entorno

Edita el archivo `.env`:

```env
VITE_API_URL=http://localhost:3001/api
```

Cambios soportados:
- URL de API diferente
- Puerto diferente
- Protocolo HTTPS

## 🐛 Troubleshooting

### Error: "Cannot find module 'axios'"
```bash
npm install axios
```

### Error: "API not found / CORS error"
1. Verifica que tu backend esté corriendo
2. Verifica que CORS esté habilitado en el backend
3. Verifica la URL en `.env`

### Error: "Cannot GET /api/products"
Tu API debe implementar el endpoint `/api/products` como se describe arriba.

## 📚 Componentes de la Aplicación

- **App.jsx** - Componente principal
- **Home.jsx** - Página de productos
- **Navbar.jsx** - Barra de navegación
- **Productcard.jsx** - Tarjeta individual de producto
- **api.js** - Cliente HTTP configurado

## 💡 Tips

- Los productos se cargan al montar el componente Home
- El carrito es solo UI (puedes expandir su funcionalidad)
- Los estilos son completamente customizables
- La aplicación es completamente responsive

¡A disfrutar! 🎉
