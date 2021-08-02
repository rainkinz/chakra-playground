import { darken, mode, whiten } from '@chakra-ui/theme-tools'

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // 
  sizes: {},
  variants: {
    primary: (props) => ({
      bg: "primary",
      color: "white",
      _hover: {
        bg: mode(darken('primary', 20), whiten('primary', 20))(props),
        boxShadow: "md"
      }
    }),
    secondary: (props) => ({
      bg: "secondary",
      color: "white",
      _hover: {
        bg: mode(darken('secondary', 20), whiten('secondary', 20))(props),
        boxShadow: "md"
      }
    }),
    secondaryOutline: (props) => ({
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'secondary',
      color: 'secondary',
      _hover: {
        boxShadow: 'md',
        transform: 'scale(1.02)'
      }
    }),
    warning: (props) => ({
      bg: "warning",
      color: "white",
      _hover: {
        bg: mode(darken('warning', 20), whiten('warning', 20))(props),
        boxShadow: "md"
      }
    })
  },
  // default values for 'size' and 'variant'
  defaultProps: {}
}