import { ReactNode, useState } from "react";
import { Box, Flex, Link, Text, useColorMode, Button } from "@chakra-ui/react";
import NextLink from 'next/link';

import Logo from "../ui/Logo";

type MenuItemProps = {
  isLast?: boolean,
  to: string,
  children: ReactNode,
  rest?: any
}

function MenuItem({ children, isLast = false, to = "/", ...rest }: MenuItemProps) {
  return (
    <Text
      mb={{ base: isLast ? 0 : 4, md: 0 }}
      mr={{ base: 0, md: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <NextLink href={to} passHref>
        <a>
          {children}
        </a>
      </NextLink>
    </Text>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default function Header({ props }: { props?: any }) {
  const { colorMode, toggleColorMode } = useColorMode()

  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  const bgColor = { light: 'blue.100', dark: 'blue.700' }
  const textColor = { light: 'gray.700', dark: 'gray.100' }

  return (
    <Flex
      as="nav"
      align="center"
      w="100%"
      mb={8}
      p={4}
      justify="space-between"
      bg={["gray", "red", "blue", "green"]}
      color={textColor[colorMode]}
      {...props}
    >
      <Logo boxSize={8} />

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/custom">Custom</MenuItem>
          <MenuItem to="/form">Form Example</MenuItem>
          <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
              }}
            >
              Sign Up
            </Button>
          </MenuItem>
          <Button size="sm" onClick={toggleColorMode}>
            Toggle Mode
          </Button>
        </Flex>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>
    </Flex>
  )
}