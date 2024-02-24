/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      // Definición de tamaños de fuente con valores base y de línea.
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      // ... otros tamaños de fuente
      '8xl': ['96px', '106px']
    },
    extend: {
      // Extensión del tema con configuraciones adicionales.
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Definición de colores personalizados.
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        // Definición de sombras personalizadas.
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },

      backgroundImage: {
        // Definición de imágenes de fondo para distintos elementos.
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        // Definición de tamaños de pantalla personalizados.
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
