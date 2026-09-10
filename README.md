# Blackstone Barbers

Sitio de barbería con Next.js, catálogo fotográfico y diseño adaptable a celulares.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir http://localhost:3000. Validar con `npm run lint` y `npm run build`.

## Datos del local

La ubicación y el perfil `@barber_liooo` ya están conectados. El enlace recibido corresponde a Tupac Barbershop; la identidad visual conserva el nombre Blackstone del proyecto. Dirección verificada en https://tupacbarbershop.setmore.com/. Los horarios se consultan por Instagram.

Editar `src/lib/shop.ts`:

- `instagramUrl`: URL completa del perfil real de Instagram. Activa los botones del catálogo y de contacto.
- `address`: dirección completa, incluyendo ciudad y país.
- `mapsUrl`: enlace compartido de la ubicación en Google Maps. Si se deja vacío y hay dirección, se genera un enlace de búsqueda por dirección.
- `mapsEmbedUrl`: abrir la ubicación en Google Maps → Compartir → Insertar un mapa → copiar solamente la URL del atributo `src` del iframe. Activa el mapa integrado. Un enlace corto de Maps no sirve como URL de iframe.
- `hours`: horarios reales de atención.

Hasta completar los datos, la página muestra avisos de próxima disponibilidad. No utiliza un perfil ni una dirección ficticios. El mapa muestra la ubicación configurada; no solicita la geolocalización del visitante ni sincroniza horarios o reseñas automáticamente.

## Fotografías

Las cuatro fotografías proporcionadas están en `public/images/` y se importan con `next/image`, que genera versiones optimizadas según el tamaño de pantalla:

- `barberia.jpg`: fondo de portada y sección de ubicación mientras no haya mapa.
- `peinado.jpg`: sección Nosotros y catálogo.
- `corte-clasico.jpg`: catálogo.
- `perfilado.jpg`: catálogo.

Para modificar textos o añadir estilos al catálogo, editar `src/components/Gallery.tsx`. Los servicios están en `src/components/Services.tsx`. No se publican precios hasta contar con valores confirmados.
