import plugin from "tailwindcss/plugin";
import type { Config } from 'tailwindcss'
import colors from './colors'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"selector",
  theme: {
    extend: {
            colors: colors,
            fontFamily: {
                iranYekan: ["iranYekan", "sans-serif"],
                iranSans: ["iranSans", "sans-serif"],
            },
    },
  },
  plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "animate-delay": (value) => ({
                        animationDelay: value,
                    }),
                },
                { values: theme("transitionDelay") }
            );
        }),
  ],
} satisfies Config
