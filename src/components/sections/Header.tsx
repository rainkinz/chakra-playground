import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import Logo from "../ui/Logo";

function MenuItem({ children, isLast, to = "/", ...rest }) {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  )
}

export default function Header({ props }) {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = { light: 'blue.100', dark: 'blue.700' }
  const textColor = { light: 'gray.700', dark: 'gray.100' }

  return (
    <Flex
      as="nav"
      align="center"
      w="100%"
      mb={8}
      p={8}
      justify="space-between"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      {...props}
    >
      <Flex align="center">
        <Logo boxSize={8} />
      </Flex>
      <Box>
        Header
      </Box>
    </Flex>
  )
}