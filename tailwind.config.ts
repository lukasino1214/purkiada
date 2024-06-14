import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)"],
        robotoslab: ["var(--font-roboto-slab)"],
      },
      colors: {
        "light-brown": "#D2691E",
        "beige-consult": "#CF8E6B",
        "blue-consult": "#1E3944",
        "blue-pk": "#5088b5",
        "gray-pk" : "#f0f2f2",
      },
    },
  },
  plugins: [],
} satisfies Config;


