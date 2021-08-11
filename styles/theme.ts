import { extendTheme, ThemeConfig } from "@chakra-ui/react";[]
import { ButtonStyles as Button } from "./components/ButtonStyles";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const customTheme = extendTheme({
  colors: {
    primary: {
      100: "#E5FCF1",
      200: "#27EF96",
      300: "#10DE82",
      400: "#0EBE6F",
      500: "#0CA25F",
      600: "#0A864F",
      700: "#086F42",
      800: "#075C37",
      900: "#064C2E"
    },
    secondary: "#ff6f91",
    highlight: "#00c9a7",
    warning: "#ffc75f",
    danger: "#c34a36"
  },
  components: {
    Button
  },
  config
})
