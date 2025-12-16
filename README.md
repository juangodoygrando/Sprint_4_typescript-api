# JokeProject

Este proyecto es una aplicación web desarrollada en TypeScript que permite obtener chistes aleatorios, calificarlos y consultar el clima. Utiliza APIs externas para obtener chistes y datos meteorológicos, y está estructurada para facilitar la escalabilidad y el mantenimiento.

## Estructura de Carpetas

```
jokeProject/
│
├── public/                # Archivos estáticos (imágenes, íconos, blobs)
├── src/                   # Código fuente principal
│   ├── logic/             # Lógica de negocio
│   │   ├── controller.ts
│   │   ├── randomDadJoke/         # Lógica y esquemas para chistes tipo Dad Joke
│   │   ├── randomOfficialJoke/    # Lógica y esquemas para chistes oficiales
│   │   ├── ratingsJoke/           # Lógica de calificación de chistes
│   │   └── weather/               # Lógica y esquemas para el clima
│   ├── services/         # Servicios auxiliares (API, fecha, localización, almacenamiento)
│   └── ui/               # Lógica de interfaz de usuario
│       ├── randomJoke/   # UI para chistes aleatorios
│       ├── ratingJoke/   # UI para calificación de chistes
│       └── weather/      # UI para clima
├── index.html            # Archivo HTML principal
├── style.css             # Estilos globales
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── tailwind.config.js    # Configuración de Tailwind CSS
└── postcss.config.js     # Configuración de PostCSS
```

## Tecnologías Usadas

- **TypeScript**
- **Vite** (para desarrollo y build)
- **Tailwind CSS** (estilos)
- **APIs externas** (chistes y clima)

## Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd jokeProject
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El proyecto estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

4. **Build para producción:**
   ```bash
   npm run build
   ```

## Dependencias Principales


(Ver `package.json` para la lista completa de dependencias y scripts disponibles)

## Variables de entorno

Este proyecto utiliza variables de entorno.

1. Copie el archivo `.env.example`
2. Renómbrelo a `.env`

## Notas
- Las APIs utilizadas pueden requerir conexión a internet.
- Puedes personalizar los estilos modificando `style.css` y la configuración de Tailwind.

---

¡Disfruta usando JokeProject!