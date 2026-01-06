/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./pages/**/*.html",
    "./components/**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2563eb",
        "secondary": "#10B981",
        "accent": "#F59E0B",
        "success": "#22C52E",
        "warning": "#F59E0B",
        "error": "#ef4444",
        "background-light": "#f9fafb",
        "background-dark": "#1f2937",
        "text-primary": "#111827",
        "text-secondary": "#6b7280",
        "status-occupied": "#22C52E",
        "status-available": "#F59E0B",
        "status-maintenance": "#EF4444",
        "status-not-ready": "#6B7280"
      },
      fontFamily: {
        // "display": ["Public Sans", "sans-serif"]
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
