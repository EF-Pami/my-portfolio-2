/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      darkblue: "#152737",
      belge: "#FCEBEB",
      white: "#fff",
      black: "#000",
      arch: "#D9D9D9",
      red: {
        500: "#EF4444", // Standard red color
        700: "#B91C1C"  // Dark red color for shadow effects
      },
      gray: {
        300: "#D1D5DB", // Light gray for text
        700: "#374151"  // Dark gray for text
      },
      blue: {
        500: "#3B82F6", // Standard blue color
        700: "#1E3A8A"  // Darker blue color for links
      },
      orange: {
        500: "#F97316", // Standard orange color
        700: "#C2410C"  // Darker orange color
      }
    },
    extend: {
      boxShadow: {
        'red-hover': '0 4px 15px rgba(185, 28, 28, 0.5)', // Custom shadow for dark red hover effect
        'custom-card': '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for cards
      },
      transitionProperty: {
        'hover': 'color, background-color, box-shadow, transform', // Enable these properties to animate on hover
      },
      scale: {
        '102': '1.02', // Custom slight scale for hover effect
        '105': '1.05', // Default 1.05 scale
      },
      spacing: {
        'card-spacing': '1rem', // Custom spacing for padding or margin
      }
    },
  },
  plugins: [],
};
