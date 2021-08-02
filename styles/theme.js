import { extendTheme } from "@chakra-ui/react";[]
import { ButtonStyles as Button } from "./components/ButtonStyles";

export const customTheme = extendTheme({
  colors: {
    primary: "#845ec2",
    secondary: "#ff6f91",
    highlight: "#00c9a7",
    warning: "#ffc75f",
    danger: "#c34a36"
  },
  components: {
    Button
  }
})
